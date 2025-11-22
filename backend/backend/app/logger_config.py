# backend/app/logger_config.py
import logging
import sys

def setup_logging():
    logger = logging.getLogger("echoshield")
    logger.setLevel(logging.DEBUG)

    handler = logging.StreamHandler(sys.stdout)
    handler.setLevel(logging.DEBUG)

    fmt = logging.Formatter(
        "%(asctime)s | %(levelname)s | %(name)s | %(message)s"
    )
    handler.setFormatter(fmt)
    logger.handlers = [handler]
    return logger

logger = setup_logging()
