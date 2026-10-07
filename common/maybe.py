def maybe_int(value):
    try:
        return int(value)
    except ValueError:
        return None
    except TypeError:
        return None


def maybe_float(value):
    try:
        return float(value)
    except ValueError:
        return None
    except TypeError:
        return None


def maybe_bool(value):
    if value is None:
        return False
    elif isinstance(value, bool):
        return value
    elif isinstance(value, (int, float)):
        return bool(value)
    elif isinstance(value, str) and value.lower() == "true":
        return True
    return False
