from pprint import pprint
from collections import defaultdict

from flask_wtf import Form
from wtforms import IntegerField, BooleanField, TextField, SubmitField, SelectField

from flask import Blueprint, send_from_directory
from flask import Flask, redirect, url_for, session, request, jsonify, g,\
                  make_response, Response, render_template, flash
from werkzeug.utils import secure_filename
                  
from sqlalchemy import Date, cast, func, desc, or_

from controllers.helpers import instructor_required, login_required, get_course_id

from main import app
from models.models import db, Assignment, AssignmentGroup, Course, User, Role, Submission

courses = Blueprint('courses', __name__, url_prefix='/courses')

class AddCourseForm(Form):
    name = TextField("Name")
    visibility = SelectField(u'Visibility', choices=[('private', 'Private'), ('public', 'Public')])
    submit = SubmitField("Add new course")

@courses.route('/add/', methods=['GET', 'POST'])
@courses.route('/add', methods=['GET', 'POST'])
@instructor_required
def add():
    """ Create a new assignment with the given information
    """
    add_form = AddCourseForm(request.form)
    if request.method == 'POST':
        Course.new(name=add_form.name.data,
                   owner_id = g.user.id,
                   visibility=add_form.visibility.data)
        flash('New course added')
        return redirect(url_for('courses.index'))
    return render_template('courses/add.html', add_form=add_form)
    
@courses.route('/remove/', methods=['GET', 'POST'])
@courses.route('/remove', methods=['GET', 'POST'])
@get_course_id
def remove_course(course_id):
    Course.remove(course_id)
    return jsonify(success=True)
        
@courses.route('/rename/', methods=['GET', 'POST'])
@courses.route('/rename', methods=['GET', 'POST'])
@get_course_id
def rename_course(course_id):
    new_name = request.values.get('name', "Untitled Course")
    Course.rename(course_id, new_name)
    return jsonify(success=True)
    
@courses.route('/add_canvas/', methods=['GET', 'POST'])
@courses.route('/add_canvas', methods=['GET', 'POST'])
@login_required
def add_canvas():
    """
    Create a new assignment with the given information
    """
    return render_template('courses/add_canvas.html')
    
@courses.route('/<course_id>/', methods=['GET', 'POST'])
@courses.route('/<course_id>', methods=['GET', 'POST'])
@login_required
def course(course_id):
    course = Course.query.filter_by(id=course_id).first()
    if course is None:
        return "Course not found!"
    assignments = (db.session.query(Assignment)
                             .filter(Assignment.course_id==course.id)
                             .all())
    is_instructor = g.user.is_instructor(int(course_id))
    return render_template('courses/course.html', 
                           course=course,
                           is_instructor=is_instructor,
                           assignments=assignments)
                           
@courses.route('/assignments/<course_id>/', methods=['GET', 'POST'])
@courses.route('/assignments/<course_id>', methods=['GET', 'POST'])
@login_required
def assignments(course_id):
    #TODO: ensure in course
    assignments = Assignment.get_available()
    groups = AssignmentGroup.query.all()
    course_groups = Course.get_all_groups()
    editable_courses = g.user.get_editable_courses()
    
    return render_template('courses/assignments.html', assignments=assignments, groups=groups, editable_courses=editable_courses, course_groups=course_groups, course_id=course_id)

@courses.route('/view_assignments/<course_id>/', methods=['GET', 'POST'])
@courses.route('/view_assignments/<course_id>', methods=['GET', 'POST'])
@login_required
def view_assignments(course_id):
    #TODO: ensure in course
    course = Course.by_id(course_id)
    assignments = Assignment.by_course(course_id)
    groups = AssignmentGroup.by_course(course_id)
    
    return render_template('courses/view_assignments.html', assignments=assignments, groups=groups, course=course, course_id=course_id)

@courses.route('/', methods=['GET', 'POST'])
@login_required
def index():
    """
    List all of the courses associated with the user.
    """
    
    user_id = g.user.id
    
    my_courses = g.user.get_courses()
    public_courses = Course.get_public()
    
    return render_template('courses/index.html', my_courses=my_courses,
                                                 public_courses=public_courses)
    
@courses.route('/manage_users/<course_id>/', methods=['GET', 'POST'])
@courses.route('/manage_users/<course_id>', methods=['GET', 'POST'])
@login_required
def manage_users(course_id):
    ''' List all the users in the course '''
    is_instructor = g.user.is_instructor(int(course_id))
    students = Course.by_id(int(course_id)).get_users()
    return render_template('courses/manage_users.html',
                           students=students,
                           course_id=course_id,
                           is_instructor=is_instructor)

class AddStudentForm(Form):
    invite = BooleanField("Add Without Invitation")
    send_email = BooleanField('Send Email')
    # TODO: Multiline textbox
    new_users = TextField("Emails")
    submit = SubmitField("Add student")
                                                 
@courses.route('/add_users/<course_id>/', methods=['GET', 'POST'])
@courses.route('/add_users/<course_id>', methods=['GET', 'POST'])
@login_required
def add_users(course_id):
    ''' Generate a form to add a student '''
    add_form = AddStudentForm(request.form)
    if request.method == 'POST':
        for new_email in add_form.new_users.data.split("\n"):
            new_user = User.find_student(email=new_email)
            if new_user is None:
                new_user = User.new_from_instructor(email=new_email)
            if not new_user.is_student():
                new_user.add_role('learner', course_id=course_id)
            # TODO: Send an email
        flash('New students added')
        return redirect(url_for('courses.manage_users', course_id=course_id))
    return render_template('courses/add_users.html', add_form=add_form, course_id=course_id)
    
@courses.route('/remove_role/<role_id>/', methods=['GET', 'POST'])
@courses.route('/remove_role/<role_id>', methods=['GET', 'POST'])
@login_required
def remove_role(role_id):
    ''' Endpoint to bounce a student from the course '''
    role = Role.by_id(int(role_id))
    if role is None:
        return "Role not found"
    course_id = role.course_id
    is_instructor = g.user.is_instructor(course_id)
    if not is_instructor:
        return "You're not an instructor in this course!"
    Role.remove(int(role_id))
    return redirect(url_for('courses.manage_users', course_id=course_id))
    
@courses.route('/change_role/', methods=['GET', 'POST'])
@courses.route('/change_role', methods=['GET', 'POST'])
@login_required
def change_role():
    ''' Endpoint to change the role of a student '''
    pass

@courses.route('dashboard/', methods=['GET', 'POST'])
@courses.route('dashboard', methods=['GET', 'POST'])
@login_required
def dashboard():
    return redirect(url_for('utilities.dashboard'))

                           
@courses.route('/config/', methods=['GET', 'POST'])
@courses.route('/config', methods=['GET', 'POST'])
def config():
    """ Create a new assignment with the given information
    """
    return Response(render_template('courses/config.xml',
                                    version='1'), mimetype='text/xml')
                                    
@courses.route('/submissions_filter/<course_id>/', methods=['GET', 'POST'])
@courses.route('/submissions_filter/<course_id>', methods=['GET', 'POST'])
@login_required
def submissions_filter(course_id):
    ''' List all the users in the course '''
    is_instructor = g.user.is_instructor(int(course_id))
    if not is_instructor:
        return "You are not an instructor!"
    course_id = int(course_id)
    course = Course.by_id(course_id)
    students = course.get_students()
    assignments = course.get_assignments()
    criteria = request.values.get("criteria", "none")
    search_key = int(request.values.get("search_key", "-1"))
    submissions = []
    if criteria == "student":
        all_subs = Submission.by_student(search_key, course_id)
        all_subs = {s[0].assignment_id: s for s in all_subs}
        submissions = [all_subs.get(assignment.id, (None, None, assignment))
                       for assignment in assignments]
    elif criteria == "assignment":
        all_subs = Submission.by_assignment(search_key, course_id)
        all_subs = {s[0].user_id: s for s in all_subs}
        submissions = [all_subs.get(student.id, (None, student, None))
                       for student in students]
    return render_template('courses/submissions_filter.html',
                           course_id=course_id,
                           assignments=assignments,
                           students=students,
                           submissions= submissions,
                           criteria = criteria,
                           search_key = search_key,
                           is_instructor=is_instructor)
@courses.route('/submissions_specific/<submission_id>/', methods=['GET', 'POST'])
@courses.route('/submissions_specific/<submission_id>', methods=['GET', 'POST'])
@login_required
def submissions_specific(submission_id):
    ''' List all the users in the course '''
    submission, user, assignment = Submission.full_by_id(int(submission_id))
    if submission is None:
        return "Submission not found"
    course_id = submission.course_id
    if course_id is not None:
        is_instructor = g.user.is_instructor(int(course_id))
    else:
        is_instructor = False
    is_owner = g.user.id == submission.user_id
    if not is_instructor and not is_owner:
        return "You are not an instructor or the owner of the assignment!"
    return render_template('courses/submissions_specific.html',
                           submission=submission,
                           assignment=assignment,
                           user=user,
                           course_id=course_id)
@courses.route('/submissions_grid/<course_id>/', methods=['GET', 'POST'])
@courses.route('/submissions_grid/<course_id>', methods=['GET', 'POST'])
@login_required
def submissions_grid(course_id):
    ''' List all the users in the course '''
    course_id = int(course_id)
    is_instructor = g.user.is_instructor(course_id)
    if not is_instructor:
        return "You are not an instructor!"
    course = Course.by_id(course_id)
    students = course.get_students()
    assignments = course.get_assignments()
    grouped_assignments = defaultdict(list)
    for assig_pair in assignments:
        assignment, membership = assig_pair
        grouped_assignments[membership.assignment_group_id].append(assignment)
    assignment_groups = course.get_assignment_groups()
    submissions = { (s.assignment_id, s.user_id) :s for s in course.get_submissions()}
    return render_template('courses/submissions_grid.html',
                           course_id=course_id,
                           students=students,
                           submissions=submissions,
                           assignment_groups= assignment_groups,
                           grouped_assignments= grouped_assignments,
                           is_instructor=is_instructor)

                           
@courses.route('/making_problems', methods=['GET', 'POST'])
@courses.route('/making_problems/', methods=['GET', 'POST'])
def making_problems():
    """
    Making problems instructions
    """
    
    return render_template('courses/making_problems.html')
