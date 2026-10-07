import logging
from collections import OrderedDict
import time
import json
from datetime import datetime, timedelta
from typing import Optional

from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import Column, String, Integer, ForeignKey, Text, func, JSON, Index, and_, Enum, DateTime

import models
from models.generics.models import db, ma
from models.generics.base import Base
from common.dates import datetime_to_string, string_to_datetime
from models.enums import CourseLogEvent
from common.databases import get_enum_values
from sqlalchemy_utc import UtcDateTime, utcnow
import models

class CourseCounts(Base):
    __tablename__ = 'course_counts'
    course_id: Mapped[int] = mapped_column(Integer(), ForeignKey('course.id'), unique=True)
    course: Mapped["models.Course"] = db.relationship(back_populates='counts')

    total_submissions: Mapped[int] = mapped_column(Integer(), default=0)
    total_assignments: Mapped[int] = mapped_column(Integer(), default=0)
    total_assignment_groups: Mapped[int] = mapped_column(Integer(), default=0)
    total_users: Mapped[int] = mapped_column(Integer(), default=0)
    total_students: Mapped[int] = mapped_column(Integer(), default=0)
    total_instructors: Mapped[int] = mapped_column(Integer(), default=0)

    date_last_user: Mapped[Optional[datetime]] = mapped_column(
        DateTime(), default=utcnow()
    )
    date_last_submission: Mapped[Optional[datetime]] = mapped_column(
        DateTime(), default=utcnow()
    )
    date_last_assignment: Mapped[Optional[datetime]] = mapped_column(
        DateTime(), default=utcnow()
    )

    __table_args__ = (Index('course_counts_course_id_idx', 'course_id'),)

    def __str__(self):
        return f"CourseCounts for {self.course.name}"
