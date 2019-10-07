from datetime import datetime
import os
import json
from pprint import pprint
from typing import Tuple

from flask.views import MethodView
from slugify import slugify
from natsort import natsorted

from flask import Blueprint, url_for, session, request, jsonify, g, render_template, redirect
from werkzeug.utils import secure_filename

from controllers.blockpy import lti_post_grade
from controllers.pylti.common import LTIPostMessageException
from main import app
from models.course import Course

from models.models import db
from models.log import Log
from models.review import Review
from models.submission import Submission, GradingStatuses
from models.assignment import Assignment
from models.assignment_group import AssignmentGroup

from controllers.helpers import (lti, highlight_python_code, normalize_url,
                                 ensure_dirs, ajax_failure, parse_assignment_load, require_request_parameters,
                                 get_course_id, maybe_int, get_user, check_resource_exists, ajax_success,
                                 login_required, require_course_instructor, require_course_grader, maybe_bool,
                                 make_log_entry)
from models.user import User

blueprint_grading = Blueprint('grading', __name__, url_prefix='/grading')


@blueprint_grading.route('/static/<path:path>', methods=['GET', 'POST'])
def grading_static(path):
    return app.send_static_file(path)


@blueprint_grading.route('/update_status', methods=['POST'])
@lti()
def update_status(lti):
    submission_id = maybe_int(request.values.get("submission_id"))
    # TODO: Pretty sure multiple assignments are broken for grading
    assignment_group_id = maybe_int(request.values.get('assignment_group_id'))
    score = float(request.values.get('score', '0'))
    correct = maybe_bool(request.values.get("correct"))
    user, user_id = get_user()
    submission = Submission.by_id(submission_id)
    # Check resource exists
    check_resource_exists(submission, "Submission", submission_id)
    # Verify permissions
    if submission.user_id != user_id and not user.is_grader(submission.course_id):
        return ajax_failure("This is not your submission and you are not a grader in its course.")
    # Do action
    submission.update_submission(score, correct)
    if assignment_group_id is None:
        assignment_group_id = submission.assignment_group_id
    error = "Generic LTI Failure - perhaps not logged into LTI session?"
    try:
        success = lti_post_grade(lti, submission, None, assignment_group_id,
                                 submission.user_id, submission.course_id)
    except LTIPostMessageException as e:
        success = False
        error = str(e)
    if success:
        make_log_entry(submission.assignment_id, submission.assignment_version,
                       submission.course_id, user_id, "X-Submission.LMS", "answer.py", message=str(score))
        return ajax_success({"submitted": True})
    else:
        submission.update_grading_status(GradingStatuses.FAILED)
        make_log_entry(submission.assignment_id, submission.assignment_version,
                       submission.course_id, user_id, "X-Submission.LMS.Failure", "answer.py", message=error)
        return ajax_failure({"submitted": False, "message": error})


class ReviewAPI(MethodView):

    def get(self, review_id):
        if review_id is None:
            return self.get_all()
        else:
            return self.get_one(review_id)

    def get_all(self):
        submission_id = maybe_int(request.values.get('submission_id'))
        user, user_id = get_user()
        if submission_id is None:
            reviews = Review.get_generic_reviews()
        else:
            submission = Submission.by_id(submission_id)
            check_resource_exists(submission, "Submission", submission_id)
            reviews = Review.get_for_submission(submission_id)
            if submission.user_id != user_id:
                require_course_grader(user, submission.course_id)
        return ajax_success(dict(reviews=[review.encode_json() for review in reviews]))

    def get_one(self, review_id):
        user, user_id = get_user()
        review = Review.by_id(review_id)
        check_resource_exists(review, "Review", review_id)
        submission = Submission.by_id(review.submission_id)
        check_resource_exists(submission, "Submission", review.submission_id)
        if submission.user_id != user_id:
            require_course_grader(user, submission.course_id)
        return ajax_success(dict(review=review.encode_json()))

    def post(self):
        user, user_id = get_user()
        submission_id = maybe_int(request.values.get('submission_id'))
        submission = Submission.by_id(submission_id)
        check_resource_exists(submission, "Submission", submission_id)
        require_course_grader(user, submission.course_id)
        review_data = request.values.copy()
        del review_data['id']
        review_data['author_id'] = user_id
        review_data['submission_version'] = submission.version
        review_data['assignment_version'] = submission.assignment_version
        if 'score' not in review_data or review_data['score'] in (None, '', 'null'):
            review_data['score'] = None
        new_review = Review.new(review_data)
        return ajax_success(dict(review=new_review.encode_json()))

    def put(self, review_id):
        user, user_id = get_user()
        review = Review.by_id(review_id)
        check_resource_exists(review, "Review", review_id)
        submission = Submission.by_id(review.submission_id)
        check_resource_exists(submission, "Submission", review.submission_id)
        require_course_grader(user, submission.course_id)
        review_data = request.json.copy()
        del review_data['id']
        if 'score' not in review_data or review_data['score'] in (None, '', 'null'):
            review_data['score'] = None
        print(review_data['score'], type(review_data['score']), repr(review_data['score']))
        review_data['author_id'] = user_id
        edited_review = review.edit(review_data)
        return ajax_success(dict(review=edited_review.encode_json()))

    def delete(self, review_id):
        user, user_id = get_user()
        review = Review.by_id(review_id)
        check_resource_exists(review, "Review", review_id)
        submission = Submission.by_id(review.submission_id)
        check_resource_exists(submission, "Submission", review.submission_id)
        require_course_grader(user, submission.course_id)
        review.delete()
        return ajax_success(dict(success=True))


review_view = ReviewAPI.as_view('review_api')
blueprint_grading.add_url_rule('/review/', defaults={'review_id': None},
                               view_func=review_view, methods=['GET'])
blueprint_grading.add_url_rule('/review/', view_func=review_view, methods=['POST'])
blueprint_grading.add_url_rule('/review/<int:review_id>', view_func=review_view,
                               methods=['GET', 'PUT', 'DELETE'])

