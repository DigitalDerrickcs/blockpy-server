import sys, os

from main import app
from flask.ext.script import Manager, Server
from scripts.db_commands import ResetDB, PopulateDB, DisplayDB

'''from OpenSSL import SSL
context = SSL.Context(SSL.SSLv23_METHOD)
context.use_privatekey_file('certs/foobar.key')
context.use_certificate_file('certs/foobar.crt')'''
context = ('certs/foobar.crt', 'certs/foobar.key')

manager = Manager(app)

# Server commands
manager.add_command("secure", Server(ssl_context=context))

# Database Commands
manager.add_command("reset_db", ResetDB())
manager.add_command("populate_db", PopulateDB())
manager.add_command("display_db", DisplayDB())

if __name__ == "__main__":
    manager.run()
