from flask_mail import Mail, Message

mail = Mail()

def setup_mail(app):
    """
    Set up the mail server

    :param app: The main Flask application
    :return: The same (modified) Flask application
    """
    mail.init_app(app)
    return app