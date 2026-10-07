import enum
from strenum import StrEnum

class InviteStatus(StrEnum):
    PENDING = "pending"
    ACCEPTED = "accepted"
    REJECTED = "rejected"

class InviteKind(StrEnum):
    COURSE_INVITE = "course_invite"
    COURSE_JOIN = "course_join"