/* purpose: projects page */

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

type Project = {
  slug: string;
  title: string;
  tags: string;
  description: string;
  image: string[];
};

async function getProjects(): Promise<Project[]> {
  const res = await fetch("http://127.0.0.1:8000/projects");
  if (!res.ok) {
    throw new Error("failed to fetch projects");
  }
  return res.json();
}

export default async function Projects() {
  const projects = await getProjects();

  return (
    <>
      <Navbar layout="split" />
      <main className="relative w-full">

        {/* grid section with projects */}
        <section>
          <div className="grid gap-8 sm:gap-12 lg:gap-20 justify-center px-6 sm:px-12 lg:px-24 py-12 lg:py-20 [grid-template-columns:repeat(auto-fit,minmax(240px,300px))]">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="grid items-center gap-10 p-4 rounded-[40px] hover:bg-mist-gray"
                data-no-sparkle
              >
                <div className="relative w-full aspect-square rounded-[40px] overflow-hidden">
                  <Image
                    src={project.image[0]}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-xl leading-8">{project.title}</h3>
                  <p className="text-lg opacity-70">{project.tags}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}