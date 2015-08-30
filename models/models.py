from datetime import datetime, timedelta
import time
import re
import os
from pprint import pprint

from main import app

from flask.ext.sqlalchemy import SQLAlchemy
from sqlalchemy.orm.exc import NoResultFound, MultipleResultsFound
from flask.ext.security import Security, SQLAlchemyUserDatastore, \
                               UserMixin, RoleMixin, login_required
from sqlalchemy import event, Integer, Date, ForeignKey, Column, Table,\
                       String, Boolean, DateTime, Text, ForeignKeyConstraint,\
                       cast, func
from sqlalchemy.ext.declarative import declared_attr

db = SQLAlchemy(app)
Model = db.Model
relationship = db.relationship
backref = db.backref

class Base(Model):
    __abstract__  = True
    @declared_attr
    def __tablename__(cls):
        return cls.__name__.lower()
    def __repr__(self):
        return str(self)

    id =  Column(Integer, primary_key=True)
    date_created  = Column(DateTime, default=func.current_timestamp())
    date_modified = Column(DateTime, default=func.current_timestamp(),
                                     onupdate=func.current_timestamp())

                 
class User(Base, UserMixin):
    # General user properties
    id = Column(Integer(), primary_key=True)
    first_name = Column(String(255))
    last_name = Column(String(255))
    email = Column(String(255), unique=True)
    gender = Column(String(255), default='Unspecified')
    picture = Column(String(255)) # A url
    
    # Foreign key relationships
    settings = relationship("Settings", backref=backref('user', lazy='dynamic'))
    roles = relationship("Role", backref=backref('user', lazy='dynamic'))
    submissions = relationship("Submission", backref=backref('user', lazy='dynamic'))
    authentications = relationship("Authentication", 
                                   backref=backref('user', lazy='dynamic'))
    problems = relationship("Problem", 
                            backref=backref('user', lazy='dynamic'))
    def __str__(self):
        return '<{} {}>'.format(self.role.title(),
                                self.email)
        
    def name(self):
        return ' '.join((self.first_name, self.last_name))

class Role(Base, RoleMixin):
    name = Column(String(80))
    user_id = Column(Integer, ForeignKey('user.id'))
    
    def __str__(self):
        return '<{} is {}>'.format(self.name, self.user_id)
        
class Authentication(Base):
    type = Column(String(80))
    value = Column(String(255))
    user_id = Column(Integer, ForeignKey('user.id'))
    
    def __str__(self):
        return '<{} is {}>'.format(self.name, self.user_id)
        
class Settings(Base):
    mode = Column(String(80))
    connected = Column(String(80))
    user_id = Column(Integer, ForeignKey('user.id'))
    
    def __str__(self):
        return '<{} settings ({})>'.format(self.user_id, self.id)
        
class Submission(Base):
    code = Column(Text())
    correct = Column(Boolean())
    problem_id = Column(Integer, ForeignKey('problem.id'))
    user_id = Column(Integer, ForeignKey('user.id'))
    
    def __str__(self):
        return '<Submission {} for {}>'.format(self.id, self.user_id)
    
class Problem(Base):
    url = Column(String(255))
    body = Column(Text())
    on_run = Column(Text())
    on_step = Column(Text())
    on_start = Column(Text())
    type = Column(String(10))
    visibility = Column(String(10))
    disabled = Column(String(10))
    mode = Column(String(10))
    user_id = Column(Integer, ForeignKey('user.id'))
    
    submissions = relationship("Submission", 
                               backref=backref('problem', lazy='dynamic'))
    
    def __str__(self):
        return '<Problem {} for {}>'.format(self.id, self.user_id)
    
user_datastore = SQLAlchemyUserDatastore(db, User, Role)
security = Security(app, user_datastore)