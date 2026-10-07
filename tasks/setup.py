import os
import logging
import time
from huey import RedisHuey, SqliteHuey


def setup_tasks(task_queue_style, task_db_uri, task_db_settings):
    if task_queue_style == 'sqlite':
        huey = SqliteHuey(filename=task_db_uri)
    elif task_queue_style == 'redis':
        huey = RedisHuey(url=task_db_uri, **task_db_settings)
    else:
        raise ValueError(f"Unknown TASK_QUEUE_STYLE: {task_queue_style} (should be sqlite or redis)")
    return huey
