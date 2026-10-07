from datetime import datetime, timedelta
from typing import Optional

from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import Column, String, Integer, ForeignKey, Text, func, JSON, Index, and_, Enum, DateTime, Float

import models
from models.generics.models import db, ma
from models.generics.base import Base
from common.dates import datetime_to_string, string_to_datetime
from models.enums import CourseLogEvent
from common.databases import get_enum_values
from sqlalchemy_utc import UtcDateTime, utcnow
import models


class UserCounts(Base):
    __tablename__ = 'user_counts'
    user_id: Mapped[int] = mapped_column(Integer, ForeignKey('user.id'), unique=True)
    user: Mapped["models.User"] = db.relationship(back_populates='user_counts')

    total_courses_in: Mapped[int] = mapped_column(Integer(), default=0)
    total_assignments: Mapped[int] = mapped_column(Integer(), default=0)
    total_assignment_groups: Mapped[int] = mapped_column(Integer(), default=0)
    total_submissions: Mapped[int] = mapped_column(Integer(), default=0)
    total_reports: Mapped[int] = mapped_column(Integer(), default=0)
    estimated_time_spent: Mapped[float] = mapped_column(Float(), default=0.0)
    last_logged_in: Mapped[Optional[datetime]] = mapped_column(DateTime(), default=None)
    last_edited: Mapped[Optional[datetime]] = mapped_column(DateTime(), default=None)