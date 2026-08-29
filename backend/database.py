from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# the database file itself – sqlite will create this file automatically
DATABASE_URL = "sqlite:///./portfolio.db"

# the engine is the actual connection to the database
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})

# each request gets its own "session" – a temporary workspace for talking to the db
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# base class that all database models will inherit from
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()