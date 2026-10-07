"""
Helper functions for managing the filesystem
"""
import os


def ensure_dirs(path: str) -> str:
    """
    Ensure that the directory exists, creating it if it does not.
    Raises an error if the directory cannot be created and does not already exist.
    :param path: The path to the directory.
    :return: The path to the directory (the original argument).
    """
    try:
        os.makedirs(path)
    except OSError as e:
        if not os.path.isdir(path):
            raise e
    return path
