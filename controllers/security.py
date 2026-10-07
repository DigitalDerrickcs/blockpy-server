import re

import flask_wtf
from flask_security import SQLAlchemyUserDatastore, Security
from flask_security.forms import ConfirmRegisterForm

from wtforms import StringField, validators, PasswordField

from models import db, User, Role

"""
TODO: Convert these to a proper test suite.
Matches:
p@ssword
 p@assword 
Horse Battery Staple
pass word
@ctually
really?
Horse B@ttery Staple
Long    Divide

Not good enough:
password
 password 
extraendspace 
shouldntcatch
 extrastartspace
"""
regex_one_symbol_or_not_wrapping_space = re.compile(
    r"^(.*[!@#$%^&*(){}[\]_+\-=|\\:\";'<>?,./~`]+.*)|(\w+ +\w+)$",
    re.M
)

password_required = validators.DataRequired(message='Must provide password')
password_length = validators.Length(min=12, max=128,
                                    message='Password must be 12-128 characters long')
password_chars = validators.Regexp(regex_one_symbol_or_not_wrapping_space,
                                   message="Must use at least one symbol, or "
                                           "a space not at the start or end.")


class NotEqualTo(validators.EqualTo):
    """ Modification of the EqualTo validator to ensure that two fields
    are NOT equal to each other. """
    def __call__(self, form, field):
        try:
            other = form[self.fieldname]
        except KeyError:
            raise validators.ValidationError(field.gettext("Invalid field name '%s'.") % self.fieldname)
        if field.data == other.data:
            d = {
                'other_label': hasattr(other, 'label') and other.label.text or self.fieldname,
                'other_name': self.fieldname
            }
            message = self.message
            if message is None:
                message = field.gettext('Field must not be equal to %(other_name)s.')

            raise validators.ValidationError(message % d)


class ExtendedConfirmRegisterForm(ConfirmRegisterForm):
    password = PasswordField('Password', validators=[password_required,
                                                     password_length,
                                                     NotEqualTo('email'),
                                                     password_chars])
    first_name = StringField('First Name', [validators.DataRequired()])
    last_name = StringField('Last Name', [validators.DataRequired()])
    # proof = StringField('Instructor Proof (e.g., your university website)')


def setup_security(app):
    """
    Setup user registration and other stuff with Flask-Security-Too.
    """
    # TODO: Decide if the following is necessary:
    flask_wtf.CSRFProtect(app)
    # https://flask-security-too.readthedocs.io/en/stable/spa.html
    # Might interfere with the LTI stuff?

    user_datastore = SQLAlchemyUserDatastore(db, User, Role)
    security = Security(app, user_datastore,
                        confirm_register_form=ExtendedConfirmRegisterForm,
                        register_form=ExtendedConfirmRegisterForm)
    app.user_datastore = user_datastore

    return security
