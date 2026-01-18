/* purpose: home page */

import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="w-full">
      {/* hero section */}
      <section
        className="
          relative min-h-screen 
          bg-center bg-no-repeat 
          bg-size[120%] sm:bg-size[100%] md:bg-size[85%]"
        style={{
          backgroundImage: "url('/images/hero_sketchbook.png')",
        }}
      >
        <Navbar variant="overlay" />
      </section>

      {/* projects section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl mb-12">What I’ve been <span className="font-imperial text-6xl"> making !</span></h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* project card */}
            <div className="border rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-3xl mb-2">Project One</h3>
              <p className="text-sm opacity-80">
                Short description of what this project is and why it matters.
              </p>
            </div>

            <div className="border rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-3xl mb-2">Project Two</h3>
              <p className="text-sm opacity-80">
                Another meaningful project description.
              </p>
            </div>

            <div className="border rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-3xl mb-2">Project Three</h3>
              <p className="text-sm opacity-80">
                A third project I'm proud of.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

/* notes
relative - creates a positioning context, anchor for absolute children
bg-cover - image fills the screen
bg-center - keeps the focal point centered
min-h-screen - full viewport height (section is at least screen height)
inline backgroundImage - required because Tailwind can’t see dynamic URLs */