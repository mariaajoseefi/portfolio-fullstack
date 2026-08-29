from sqlalchemy import Column, String, JSON
from database import Base

class ProjectModel(Base):
    __tablename__ = "projects"

    slug = Column(String, primary_key=True)
    title = Column(String, nullable=False)
    tags = Column(String, nullable=False)
    description = Column(String, nullable=False)
    image = Column(JSON, nullable=False)
    steps = Column(JSON, nullable=True)