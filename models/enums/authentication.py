import enum

class AuthenticationType(enum.Enum):
    LOCAL = "local"
    CANVAS = "canvas"
    # Legacy authentication types
    SESSION = 'session'