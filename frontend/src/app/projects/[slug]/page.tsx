import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type ProjectPageProps = {
    params: { slug: string };
};

// tells next.js which slugs to pre-render at build time (required for static export)
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage ({ params }: ProjectPageProps) {
    const project = projects.find((p) => p.slug === params.slug);

    // if someone visits a slug that doesn't exist, show 404 page
    if (!project) {
        notFound();
    }

    return (
        <>
            <Navbar layout="split" />
            <main className="max-w-4xl mx-auto px-6 py-16">
                <h1 className="text-5xl font-medium mb-4">{project.title}</h1>
                <p className="text-xl opacity-50 mb-10 mt-5">{project.description}</p>

                <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="flex flex-col gap-10 mt-16">
                    {project.steps.map((step, index) => (
                        <div key={step.title}>
                            <h3 className="text-2xl font-medium mb-2">
                                {index + 1}. {step.title}
                            </h3>
                            <p className="text-lg opacity-70">{step.description}</p>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}
