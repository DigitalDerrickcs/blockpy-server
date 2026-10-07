import logging
import logging.config


def setup_logging(app):
    error_log_path = app.config['ERROR_FILE_PATH']
    event_log_path = app.config['EVENTS_FILE_PATH']
    task_log_path = app.config['TASKS_FILE_PATH']
    logging_configuration = {
        'version': 1,
        'handlers': {
            # Set up console logging for dev
            'console': {
                'class': 'logging.StreamHandler',
                'formatter': 'basicFormatter',
                'level': 'DEBUG',
            },
            # Things have gone wrong!
            'errorHandler': {
                'class': 'logging.handlers.RotatingFileHandler',
                'filename': error_log_path,
                'level': 'WARNING',
                'formatter': 'basicFormatter'
            },
            # Just logging some events from users (redundant to database)
            'eventHandler': {
                'class': 'logging.handlers.RotatingFileHandler',
                'filename': event_log_path,
                "level": "INFO",
                'formatter': 'simpleFormatter'
            },
            # Logging tasks to a file
            'taskHandler': {
                'class': 'logging.handlers.RotatingFileHandler',
                'filename': task_log_path,
                "level": "INFO"
            }
        },
        'loggers': {
            'SystemLogger': {
                'level': 'WARNING',
                'handlers': ['console']
            },
            'Events': {
                'level': 'INFO',
                'handlers': ['eventHandler']
            },
            'huey': {
                'level': "INFO",
                "handlers": ["taskHandler"]
            },
            #'sqlalchemy.engine': {
            #    'level': "INFO"
            #}
            #'pylti': {
            #    'level': 'DEBUG',
            #    'handlers': []
            #}
        },
        'root': {
            'level': 'WARNING',
            'handlers': ['console', 'errorHandler']
        },
        'formatters': {
            'basicFormatter': {
                'format': '%(asctime)s [%(levelname)s] - %(filename)s:%(funcName)s:%(lineno)d - %(message)s'
            },
            'simpleFormatter': {
                'format': '%(message)s'
            }
        }
    }
    if app.config['ROTATE_LOGS']:
        logging_configuration['handlers']['errorHandler']['class'] = 'logging.handlers.TimedRotatingFileHandler'
        logging_configuration['handlers']['errorHandler']['when'] = 'D'

    logging.config.dictConfig(logging_configuration)
