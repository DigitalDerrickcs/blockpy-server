# Built-in imports
from datetime import timedelta
from functools import wraps, update_wrapper
import calendar, datetime
import json
from HTMLParser import HTMLParser

# Flask imports
from flask import g, request, redirect, url_for, make_response, current_app
from flask import flash, session
import flask_security
from flask_security.core import current_user

from pylti.flask import LTI, LTIException

from main import app

from models.models import (User, Course, AssignmentGroup, Assignment)

def lti(request='any', *lti_args, **lti_kwargs):
    """
    LTI decorator

    :param: request - Request type from
        :py:attr:`pylti.common.LTI_REQUEST_TYPE`. (default: any)
    :return: wrapper
    """

    def lti_outer_wrapper(function):
        @wraps(function)
        def lti_wrapper(*args, **kwargs):
            """
            Pass LTI reference to function or return error.
            """
            try:
                the_lti = LTI(lti_args, lti_kwargs)
                the_lti.verify()
                kwargs['lti'] = the_lti
                old_user = g.user
                g.user = User.from_lti("canvas", 
                                       session["pylti_user_id"], 
                                       session.get("lis_person_contact_email_primary", ""),
                                       session.get("lis_person_name_given", "Canvas"),
                                       session.get("lis_person_name_family", "User"))
                g.roles = session["roles"].split(",") if "roles" in session else []
                g.course = Course.from_lti("canvas", 
                                       session["context_id"], 
                                       session.get("context_title", ""), 
                                       g.user.id)
                session['lti_course'] = g.course.id
                g.user.update_roles(g.roles, g.course.id)
                if old_user != g.user:
                    flask_security.utils.logout_user()
                    flask_security.utils.login_user(g.user, remember = True)
                if not old_user:
                    flask_security.utils.login_user(g.user, remember = True)
            except LTIException as lti_exception:
                kwargs['lti_exception'] = dict()
                kwargs['lti_exception']['exception'] = lti_exception
                kwargs['lti_exception']['kwargs'] = kwargs
                kwargs['lti_exception']['args'] = args
                flash("LTI Error: "+str(lti_exception)+"\n<br>Try reloading!")
            return function(*args, **kwargs)
        return lti_wrapper
    lti_kwargs['request'] = request
    lti_kwargs['app'] = app
    return lti_outer_wrapper

def admin_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if g.user is None:
            return redirect(url_for('security.login', next=request.url))
        if not g.user.is_admin():
            flash("This portion of the site is only for administrators.")
            return redirect(url_for('users.index'))
        return f(*args, **kwargs)
    return decorated_function

def instructor_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if g.user is None:
            return redirect(url_for('security.login', next=request.url))
        if not g.user.is_instructor():
            flash("This portion of the site is only for instructors.")
            return redirect(url_for('users.index'))
        return f(*args, **kwargs)
    return decorated_function

def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if g.user is None:
            return redirect(url_for('security.login', next=request.url))
        return f(*args, **kwargs)
    return decorated_function
    
def crossdomain(origin=None, methods=None, headers=None,
                max_age=21600, attach_to_all=True,
                automatic_options=True):
    if methods is not None:
        methods = ', '.join(sorted(x.upper() for x in methods))
    if headers is not None and not isinstance(headers, basestring):
        headers = ', '.join(x.upper() for x in headers)
    if not isinstance(origin, basestring):
        origin = ', '.join(origin)
    if isinstance(max_age, timedelta):
        max_age = max_age.total_seconds()

    def get_methods():
        if methods is not None:
            return methods
        options_resp = current_app.make_default_options_response()
        print options_resp.headers
        return options_resp.headers['allow']

    def decorator(f):
        def wrapped_function(*args, **kwargs):
            if automatic_options and request.method == 'OPTIONS':
                resp = current_app.make_default_options_response()
            else:
                resp = make_response(f(*args, **kwargs))
            if not attach_to_all and request.method != 'OPTIONS':
                return resp

            h = resp.headers
            h['Access-Control-Allow-Origin'] = origin
            h['Access-Control-Allow-Methods'] = get_methods()
            h['Access-Control-Max-Age'] = str(max_age)
            if headers is not None:
                h['Access-Control-Allow-Headers'] = headers
            return resp

        f.provide_automatic_options = False
        return update_wrapper(wrapped_function, f)
    return decorator
    
def get_assignments_from_request():
    assignment_id = request.args.get('assignment_id', None)
    assignment_group_id = request.args.get('assignment_group_id', None)
    submission_url = session.get('lis_result_sourcedid', '')
    # Assignment group or individual assignment?
    if assignment_group_id is not None:
        group = AssignmentGroup.by_id(assignment_group_id)
        assignments = group.get_assignments()
        submissions = [a.get_submission(g.user.id, submission_url=submission_url) for a in assignments]
    elif assignment_id is not None:
        assignment = Assignment.by_id(assignment_id)
        assignments = [assignment] if assignment else []
        submissions = [assignment.get_submission(g.user.id, submission_url=submission_url)] if assignment else []
    else:
        assignments = []
        submissions = []
    return assignments, submissions
    
class MLStripper(HTMLParser):
    def __init__(self):
        self.reset()
        self.fed = []
    def handle_data(self, d):
        self.fed.append(d)
    def get_data(self):
        return ''.join(self.fed)
def strip_tags(html):
    s = MLStripper()
    s.feed(html)
    return s.get_data()
