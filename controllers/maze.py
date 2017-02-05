# Flask imports
from flask import Blueprint, render_template, g, request

from controllers.helpers import lti, get_assignments_from_request

blueprint_maze = Blueprint('maze', __name__, url_prefix='/maze')

@blueprint_maze.route('/', methods=['GET', 'POST'])
@blueprint_maze.route('/load', methods=['GET', 'POST'])
@lti(request='initial')
def load(lti=lti, lti_exception=None, assignments=None, submissions=None, embed=False):
    if assignments is None or submissions is None:
        assignments, submissions = get_assignments_from_request()
    if assignments:
        if submissions:
            course_id = submissions[0].course_id
        else:
            course_id = assignments[0].course_id
        if 'course_id' in request.values:
            course_id = int(request.values.get('course_id'))
    else:
        if 'course_id' in request.values:
            course_id = int(request.values.get('course_id'))
        else:
            course_id = None
    return render_template('maze/maze.html',
                                   assignment= assignments[0], 
                                   submission= submissions[0],
                                   level=assignments[0].name,
                                   embed=embed,
                                   course_id=course_id,
                                   user_id=g.user.id)