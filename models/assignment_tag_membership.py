"""
Membership table between Assignment Tags and Assignments
"""
from typing import Optional
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import (Integer, Column, ForeignKey, Table)
from models.generics.models import ma
from models.generics.base import Base

# Association table style
assignment_tag_membership = Table('assignment_tag_membership',
                                  Base.metadata,
                                  Column('assignment_id', Integer, ForeignKey('assignment.id')),
                                  Column('tag_id', Integer, ForeignKey('assignment_tag.id'))
                                  )

