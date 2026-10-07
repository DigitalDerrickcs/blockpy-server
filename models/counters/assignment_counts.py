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

class AssignmentCounts(Base):
    __tablename__ = 'assignment_counts'

    assignment_id: Mapped[int] = mapped_column(Integer, ForeignKey('assignment.id'), unique=True)
    assignment: Mapped["models.Assignment"] = db.relationship(back_populates='counts')

    total_submissions: Mapped[int] = mapped_column(Integer, default=0)
    date_last_submission: Mapped[Optional[datetime]] = mapped_column(
        DateTime(), default=utcnow()
    )

    __table_args__ = (Index('assignment_counts_assignment_id_idx', 'assignment_id'),)
