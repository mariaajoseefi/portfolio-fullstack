from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy.orm import Session
from database import engine, Base, get_db
from models import ProjectModel

app = FastAPI()

# creates all tables define by models, if they don't already exist
Base.metadata.create_all(bind=engine)

# allow frontend to make requests to this api
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class ProjectStep(BaseModel):
    title: str
    description: str
    image: str | None = None

# defines the shape every project must have
class Project(BaseModel):
    slug: str
    title: str
    tags: str
    description: str
    image: list[str]
    steps: list[ProjectStep] | None = None

    class Config:
        from_attributes = True

@app.get("/")
def read_root():
    return {"message": "hello from majo's backend!"}

@app.get("/projects", response_model=list[Project])
def get_projects(db: Session = Depends(get_db)):
    return db.query(ProjectModel).all()

@app.post("/projects", response_model=Project)
def create_project(project: Project, db: Session = Depends(get_db)):
    db_project = ProjectModel(**project.model_dump())
    db.add(db_project)
    db.commit()
    db.refresh(db_project)
    return db_project

@app.get("/projects/{slug}", response_model=Project)
def get_project(slug: str, db: Session = Depends(get_db)):
    project = db.query(ProjectModel).filter(ProjectModel.slug == slug).first()
    if project is None:
        raise HTTPException(status_code=404, detail="project not found")
    return project

@app.put("/projects/{slug}", response_model=Project)
def update_project(slug: str, updated_project: Project, db: Session = Depends(get_db)):
    project = db.query(ProjectModel).filter(ProjectModel.slug == slug).first()
    if project is None:
        raise HTTPException(status_code=404, detail="project not found")

    for key, value in updated_project.model_dump().items():
        setattr(project, key, value)

    db.commit()
    db.refresh(project)
    return project