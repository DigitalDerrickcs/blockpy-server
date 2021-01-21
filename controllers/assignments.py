import json

from natsort import natsorted

from models.portation import export_bundle, import_bundle, export_zip

try:
    from urllib.parse import quote as url_quote
except:
    from urllib import quote as url_quote

from flask import (Blueprint, g, session, render_template, url_for, request, jsonify, abort, make_response,
                   flash, redirect, Response)

from controllers.helpers import (lti, strip_tags,
                                 get_lti_property, require_request_parameters, login_required,
                                 require_course_instructor, get_select_menu_link,
                                 check_resource_exists, parse_assignment_load, get_course_id, get_user, ajax_success,
                                 ajax_failure)

from main import app

import controllers.maze as maze
import controllers.blockpy as blockpy

from models.models import (db)
from models.course import Course
from models.assignment import Assignment
from models.assignment_group import AssignmentGroup
from models.submission import Submission

blueprint_assignments = Blueprint('assignments', __name__, url_prefix='/assignments')


@blueprint_assignments.route('/', methods=['GET', 'POST'])
@blueprint_assignments.route('/load/', methods=['GET', 'POST'])
@blueprint_assignments.route('/load', methods=['GET', 'POST'])
@lti(request='initial')
def load(lti, lti_exception=None):
    editor_information = parse_assignment_load()
    # Use the proper template
    if editor_information['assignments'] and editor_information['assignments'][0].type == 'maze':
        return maze.load_editor(lti, editor_information)
    else:
        return blockpy.load_editor(lti, editor_information)


@blueprint_assignments.route('/new/', methods=['GET', 'POST'])
@blueprint_assignments.route('/new', methods=['GET', 'POST'])
@require_request_parameters('course_id')
@login_required
def new_assignment(lti=lti):
    # Get arguments
    course_id = int(request.values.get('course_id'))
    name = request.values.get('name', None) or None
    url = request.values.get('url', None) or None
    level = request.values.get('level', None) or None
    is_embedded = ('embed' == request.values.get('menu', "select"))
    assignment_type = request.values.get('type', "blockpy")
    # Verify permissions
    require_course_instructor(g.user, course_id)
    # Perform action
    assignment = Assignment.new(owner_id=g.user.id, course_id=course_id, url=url,
                                type=assignment_type, name=name, level=level)
    select_url = get_select_menu_link(assignment.id, assignment.title(), is_embedded, False)
    return jsonify(success=True,
                   redirect=url_for('assignments.load', assignment_id=assignment.id),
                   id=assignment.id,
                   url=url,
                   name=assignment.name,
                   type=assignment_type,
                   instructions=strip_tags(assignment.instructions)[:255],
                   title=assignment.title(),
                   view=url_for('assignments.load', assignment_id=assignment.id, embed=is_embedded),
                   select=select_url,
                   edit=url_for('assignments.load', assignment_id=assignment.id, course_id=assignment.course_id),
                   date_modified=assignment.pretty_date_modified())


@blueprint_assignments.route('/get/', methods=['GET', 'POST'])
@blueprint_assignments.route('/get', methods=['GET', 'POST'])
@login_required
def get_assignment(lti=lti):
    assignment_id = int(request.values.get('assignment_id'))
    assignment = Assignment.by_id(assignment_id)
    is_embedded = ('embed' == request.values.get('menu', "select"))
    # Verify exists
    check_resource_exists(assignment, "Assignment", assignment_id)
    # Perform action
    select_url = get_select_menu_link(assignment.id, assignment.title(), is_embedded, False)
    return jsonify(success=True,
                   redirect=url_for('assignments.load', assignment_id=assignment.id),
                   id=assignment.id,
                   name=assignment.name,
                   type=assignment.type,
                   instructions=strip_tags(assignment.instructions)[:255],
                   title=assignment.title(),
                   view=url_for('assignments.load', assignment_id=assignment.id, embed=is_embedded),
                   select=select_url,
                   edit=url_for('assignments.load', assignment_id=assignment.id, course_id=assignment.course_id),
                   date_modified=assignment.pretty_date_modified())


@blueprint_assignments.route('/remove', methods=['GET', 'POST'])
@blueprint_assignments.route('/remove/', methods=['GET', 'POST'])
@require_request_parameters('course_id')
@login_required
def remove_assignment(lti=None):
    assignment_id = int(request.values.get('assignment_id'))
    assignment = Assignment.by_id(assignment_id)
    # Verify exists
    check_resource_exists(assignment, "Assignment", assignment_id)
    # Verify permissions
    require_course_instructor(g.user, assignment.course_id)
    Assignment.remove(assignment.id)
    return jsonify(success=True)


@blueprint_assignments.route('/move_course', methods=['GET', 'POST'])
@blueprint_assignments.route('/move_course/', methods=['GET', 'POST'])
@require_request_parameters('new_course_id', 'assignment_id')
@login_required
def move_course(lti=None):
    assignment_id = int(request.values.get('assignment_id'))
    new_course_id = int(request.values.get('new_course_id'))
    assignment = Assignment.by_id(int(assignment_id))
    # Verify exists
    check_resource_exists(assignment, "Assignment", assignment_id)
    # Verify permissions
    require_course_instructor(g.user, assignment.course_id)
    require_course_instructor(g.user, new_course_id)
    # Perform action
    assignment.move_course(new_course_id)
    return jsonify(success=True)


@blueprint_assignments.route('/select', methods=['GET', 'POST'])
@blueprint_assignments.route('/select/', methods=['GET', 'POST'])
@lti(request='initial')
def select(lti, menu='select', lti_exception=None):
    """ Let's the user select from a list of assignments.
    """
    # Store current user_id and context_id
    assignments = Assignment.get_available()
    groups = AssignmentGroup.query.all()
    return_url = get_lti_property('launch_presentation_return_url')
    course_groups = Course.get_all_groups(menu)
    editable_courses = g.user.get_editable_courses()

    return render_template('lti/select.html', assignments=assignments, groups=groups, return_url=return_url, menu=menu,
                           editable_courses=editable_courses, course_groups=course_groups)


@blueprint_assignments.route('/select_embed/', methods=['GET', 'POST'])
@blueprint_assignments.route('/select_embed', methods=['GET', 'POST'])
@lti(request='initial')
def select_embed(lti, lti_exception=None):
    """ Let's the user select from a list of assignments.
    """
    return select(menu='embed', lti=lti)


@blueprint_assignments.route('/get_ids/', methods=['GET'])
@blueprint_assignments.route('/get_ids', methods=['GET'])
@login_required
def get_assignments():
    assignment_ids = request.values.get('assignment_ids', "")
    course_id = get_course_id()
    user, user_id = get_user()
    # TODO: verify that they have the permissions to see these assignments
    assignments, groups = [], []
    errors = []
    if not assignment_ids:
        course: Course = Course.by_id(course_id)
        check_resource_exists(course, "Course", course_id)
        grouped_assignments = natsorted(course.get_submitted_assignments_grouped(),
                                        key=lambda r: (r.AssignmentGroup.name if r.AssignmentGroup is not None else None, r.Assignment.name))
        assignments = [a.Assignment.encode_json() for a in grouped_assignments]
        groups = [a.AssignmentGroup.encode_json() if a.AssignmentGroup is not None else None for a in grouped_assignments]
    else:
        for assignment_id in assignment_ids.split(","):
            if not assignment_id.isdigit():
                errors.append(f"Unknown Assignment ID: {assignment_id!r}")
            assignment_id = int(assignment_id)
            # With Course Role Information
            assignment = Assignment.by_id(assignment_id)
            check_resource_exists(assignment, "Assignment", assignment_id)
            assignments.append(assignment.encode_json())
    return ajax_success(dict(assignments=assignments, errors=errors, groups=groups))


@blueprint_assignments.route('/export/', methods=['GET', 'POST'])
@blueprint_assignments.route('/export', methods=['GET', 'POST'])
@require_request_parameters('assignment_id')
def export():
    assignment_id = int(request.values.get('assignment_id'))
    assignment = Assignment.by_id(assignment_id)
    course_id = get_course_id(True)
    user, user_id = get_user()
    # Verify exists
    check_resource_exists(assignment, "Assignment", assignment_id)
    # Verify permissions
    bundle = export_bundle(assignments=[assignment])
    filename = assignment.get_filename()
    return Response(json.dumps(bundle), mimetype='application/json',
                    headers={'Content-Disposition': 'attachment;filename={}'.format(filename)})


@blueprint_assignments.route('/bulk_upload/', methods=['GET', 'POST'])
@blueprint_assignments.route('/bulk_upload', methods=['GET', 'POST'])
def bulk_upload():
    course_id = request.values.get('course_id', None)
    if course_id is None:
        return jsonify(success=False, message="No course id")
    if not g.user.is_instructor(int(course_id)):
        return jsonify(success=False, message="Not an instructor in this course")
    if request.method == 'POST':
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file:
            bundle = json.loads(file.read().decode('utf-8'))
            import_bundle(bundle, owner_id=g.user.id, course_id=course_id)
            flash("File uploaded successfully")
            return redirect(request.url)
        flash("No file contents")
        return redirect(request.url)
    else:
        return '''
    <!doctype html>
    <title>Upload assignments (JSON)</title>
    <h1>Upload assignments (JSON)</h1>
    <form action="" method=post enctype=multipart/form-data>
      <p><input type=file name=file>
         <input type=submit value=Upload>
    </form>
    '''


@blueprint_assignments.route('/images/<path:path>', methods=['GET', 'POST'])
def assignments_static_images(path):
    return app.send_static_file('images/' + path)


@blueprint_assignments.route('/export_submissions/', methods=['GET', 'POST'])
@blueprint_assignments.route('/export_submissions', methods=['GET', 'POST'])
@login_required
@require_request_parameters('assignment_id')
def export_submissions():
    assignment_id = int(request.values.get('assignment_id'))
    assignment = Assignment.by_id(assignment_id)
    course_id = get_course_id(True)
    user, user_id = get_user()
    # Verify exists
    check_resource_exists(assignment, "Assignment", assignment_id)
    # Verify permissions
    assignment = Assignment.by_id(int(assignment_id))
    if course_id is None or not user.is_instructor(int(course_id)):
        return "You are not an instructor or the owner of the assignment!"
    # Get data
    suas = Submission.by_assignment(assignment_id, course_id)
    submissions = [sua[0] for sua in suas]
    users = [sua[1] for sua in suas]
    bundle = export_zip(assignments=[assignment], submissions=submissions,
                        users=users)
    filename = assignment.get_filename(extension='.zip')
    return Response(bundle, mimetype='application/zip',
                    headers={'Content-Disposition': 'attachment;filename={}'.format(filename)})
