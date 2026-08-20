/* purpose: projects page */

import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects"

export default function Projects() {
    return (
        <>
        <Navbar layout="split"/>
        <main className="relative w-full">

            {/* grid section with projects */}
            <section>
                <div className="grid grid-cols-3 gap-20 px-60 py-20">
                    {projects.map((project, index) => (
                        <Link 
                            key={project.slug} 
                            href={`/projects/${project.slug}`}
                            className="grid items-center gap-10 p-4 rounded-[40px] hover:bg-mist-gray" data-no-sparkle>
                            <div className="relative w-full aspect-square rounded-[40px] overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="text-center">
                                <h3 className="text-xl leading-8">
                                    {project.title}
                                </h3>
                                <p className="text-lg opacity-70">
                                    {project.tags}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
        </>
    )
}