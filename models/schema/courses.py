from sqlalchemy import Column, String, Integer, ForeignKey, Text, or_, Boolean
from marshmallow import fields
from models.generics.models import db, ma


class CourseSettingsSchema(ma.Schema):
    enforce_dates = fields.Boolean(default=False)
    textbooks = fields.List(fields.String(default=""))
    pinned = fields.Boolean(default=False)