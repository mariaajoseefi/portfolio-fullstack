import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { notFound } from "next/navigation";

type ProjectStep = {
  title: string;
  description: string;
  image?: string;
};

type Project = {
  slug: string;
  title: string;
  tags: string;
  description: string;
  image: string[];
  steps: ProjectStep[];
};

export async function generateStaticParams() {
  const res = await fetch("http://127.0.0.1:8000/projects");
  const projects: Project[] = await res.json();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

async function getProject(slug: string): Promise<Project | null> {
  const res = await fetch(`http://127.0.0.1:8000/projects/${slug}`);
  if (!res.ok) {
    return null;
  }
  return res.json();
}

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar layout="split" />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-medium mb-4">{project.title}</h1>
        <p className="text-xl opacity-50 mb-10 mt-5">{project.description}</p>

        <div className="relative w-full rounded-3xl overflow-hidden">
          <Image
            src={project.image[1]}
            alt={project.title}
            width={1200}
            height={675}
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="flex flex-col gap-10 mt-16">
          {project.steps?.map((step, index) => (
            <div key={step.title}>
              <h3 className="text-2xl font-medium mb-2">
                {index + 1}. {step.title}
              </h3>
              <p className="text-lg opacity-70">{step.description}</p>

              {step.image && (
                <div className="relative w-full max-w-xl mx-auto rounded-2xl overflow-hidden mt-8">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={1200}
                    height={675}
                    className="w-full h-auto object-contain"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}