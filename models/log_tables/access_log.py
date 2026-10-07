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
from common.dates import datetime_to_string, string_to_datetime
import models


class AccessLog(Base):
    __tablename__ = "access_log"
    # Identification
    subject_id: Mapped[int] = mapped_column(Integer(), ForeignKey('user.id'))
    # Actual event data
    route: Mapped[str] = mapped_column(String(255))
    method: Mapped[str] = mapped_column(String(255))
    ip_address: Mapped[str] = mapped_column(String(255))
    # When the client initiated this action
    client_timestamp: Mapped[Optional[str]] = mapped_column(String(255), default="", nullable=True)
    client_timezone: Mapped[Optional[str]] = mapped_column(String(255), default="", nullable=True)

    subject: Mapped["models.User"] = db.relationship(back_populates="access_logs")
    errors: Mapped[list["ErrorLog"]] = db.relationship(back_populates="access_log")

    __table_args__ = (Index('access_log_subject_index', "subject_id"), )

    @staticmethod
    def new(subject_id: int, route: str, method: str,
            ip_address: str,
            client_timestamp: str = None, client_timezone: str = None):
        # Create the log
        log = AccessLog(subject_id=subject_id,
                        route=route, method=method, ip_address=ip_address,
                        client_timestamp=client_timestamp, client_timezone=client_timezone)
        db.session.add(log)
        db.session.commit()
        return log

    def __str__(self):
        return f'<AccessLog {self.route!r} event for {self.subject_id}>'
