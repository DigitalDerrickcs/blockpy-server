import json

from natsort import natsorted

from controllers import highlight_python_code


def attempt_json_load(data):
    try:
        return json.loads(data)
    except json.decoder.JSONDecodeError:
        return {}


def get_setting(assignment, *keys):
    if assignment.settings:
        settings = json.loads(assignment.settings)
    else:
        settings = {}
    for key in keys:
        if key in settings:
            settings = settings[key]
        else:
            return None
    return settings


def setup_jinja_filters(app):
    app.jinja_env.filters['zip'] = zip
    app.jinja_env.filters['json_load'] = attempt_json_load
    app.jinja_env.filters['list'] = list
    app.jinja_env.filters['natsorted'] = natsorted
    app.jinja_env.filters['get_setting'] = get_setting
    app.jinja_env.filters['highlight_python_code'] = highlight_python_code
