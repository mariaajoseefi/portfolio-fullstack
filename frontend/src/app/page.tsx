/* purpose: home page */

import Navbar from "@/components/Navbar";

// data-driven projects
const projects = [
  {
    title: "Project One",
    description: "Short description of what this project is and why it matters.",
  },
  {
    title: "Project Two",
    description: "Another meaningful project description.",
  },
  {
    title: "Project Three",
    description: "A third project I'm proud of.",
  },
];

export default function Home() {
  return (
    <main className="w-full">
      {/* hero section */}
      <section
        className="
          relative min-h-screen 
          bg-center bg-no-repeat 
          bg-[length:120%] sm:bg-[length:100%] md:bg-[length:85%]"
        style={{
          backgroundImage: "url('/images/ui/hero_sketchbook.png')",
        }}
      >
        <Navbar variant="overlay" />
      </section>

      {/* projects section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl mb-12">
            What I’ve been{" "}
            <span className="font-imperial text-6xl">making!</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="border rounded-lg p-6 transition transform hover:-translate-y-2 hover:shadow-xl cursor-pointer"
              >
                <h3 className="text-3xl mb-2">{project.title}</h3>
                <p className="text-sm opacity-80">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}