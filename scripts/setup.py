import os

import click
from click import get_current_context
from flask.cli import FlaskGroup, pass_script_info

from main import create_app


def create_cli_app():
    ctx = get_current_context(silent=True)
    if ctx:
        script_info = ctx.obj
        if hasattr(script_info, 'instance_config') and script_info.instance_config:
            return create_app(instance_config=script_info.instance_config)
    return create_app()


@click.group(cls=FlaskGroup, create_app=create_cli_app)
@click.option('--debug', is_flag=True, default=True)
@click.option('--config', 'instance_config', default='configuration.py',
              help="The instance configuration file to use. Defaults to 'configuration.py'.")
@pass_script_info
def cli(script_info, debug, instance_config):
    """
    Create the `cli` function that will manage all the custom scripts.
    :param debug:
    :return:
    """
    if debug:
        os.environ['FLASK_DEBUG'] = '1'
        os.environ['FLASK_ENV'] = 'development'
        os.environ['cert'] = 'instance/certs/server.crt'
        os.environ['key'] = 'instance/certs/server.key'
    script_info.instance_config = instance_config