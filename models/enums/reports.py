import enum
from strenum import StrEnum

class ReportStatus(StrEnum):
    QUEUED = "queued"
    STARTED = "started"
    FINISHED = "finished"
    ERROR = "error"
    EXPIRED = "expired"

class ReportVisibility(StrEnum):
    PUBLIC = "public"
    PRIVATE = "private"
    COURSE = "course"
    ASSIGNMENT = "assignment"
    USER = "user"