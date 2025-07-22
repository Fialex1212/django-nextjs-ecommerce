from .base import *

DATABASES = {
    'default': dj_database_url.parse(os.getenv("DATABASE_URL"))
}
