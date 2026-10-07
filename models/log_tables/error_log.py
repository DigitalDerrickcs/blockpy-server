import logging
from collections import OrderedDict
import time
import json
from datetime import datetime, timedelta
from typing import Optional

from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import Column, String, Integer, ForeignKey, Text, func, JSON, Index, and_, Enum

import models
from models.generics.models import db, ma
from models.generics.base import Base


class ErrorLog(Base):
    __tablename__ = "error_log"
    # Identification
    access_log_id: Mapped[int] = mapped_column(Integer(), ForeignKey('access_log.id'))
    # Actual event data
    error_type: Mapped[str] = mapped_column(String(255))
    message: Mapped[str] = mapped_column(Text(), default="")
    traceback: Mapped[str] = mapped_column(Text(), default="")

    access_log: Mapped["AccessLog"] = db.relationship(back_populates="errors")

    __table_args__ = (Index('error_log_access_index', "access_log_id"), )

    @staticmethod
    def new(access_log_id: int, error_type: str, message: str, traceback: str):
        # Create the log
        log = ErrorLog(access_log_id=access_log_id,
                       error_type=error_type, message=message, traceback=traceback)
        db.session.add(log)
        db.session.commit()
        return log

    def __str__(self):
        return f'<ErrorLog {self.error_type!r} error in {self.access_log_id}>'
