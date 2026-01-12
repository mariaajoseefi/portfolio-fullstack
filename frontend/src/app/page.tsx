/* purpose: home page */

export default function Home() {
  return (
    <main className="w-full">
      {/* hero section */}
      <section
        className="relative min-h-screen bg-center bg-no-repeat bg-contain flex items-center"
        style={{
          backgroundImage: "url('/images/sketchbook.png')",
        }}
      >
        <div className="max-w-2xl mx-auto px-20">
          <h1 className="text-6xl leading-[1.5]">
            Majo is a
            <span className="italic text-8xl"> software </span>
            engineer and
            <span className="italic underline text-8xl"> curious </span>
            thinker.
          </h1>
        </div>
        <img
          src="/images/circle.svg"
          alt="Circle"
          className="absolute right-93 bottom-105 w-85 opacity-90 z-20"
        />
        <img
            src="/images/breakfast.png"
            alt="Toast with jam"
            className="absolute right-15 bottom-32 w-100 opacity-90 z-20 -rotate-10"
          />
      </section>

      {/* projects section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl mb-12">What I’ve been <span className="italic text-6xl"> making !</span></h2>

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

      {/* contact section */}
      <section className="relative bg-white-100 py-32 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          {/* text */}
          <div>
            <h2 className="text-5xl mb-6">
              Let&apos;s keep in <span className="italic text-7xl">touch !</span>
            </h2>

            <div className="flex gap-8 text-lg">
              <a 
                href="mailto:mariajosefinclan@gmail.com" 
                className="hover:underline"
                >
                Email ↗
              </a>
              <a
                href="https://linkedin.com/in/mariajosefi"
                target="_blank"
                className="hover:underline"
              >
                LinkedIn ↗
              </a>
              <a href="https://github.com/mariaajoseefi" 
                className="hover:underline">
                GitHub ↗
              </a>
            </div>
          </div>

          {/* image */}
          <img
            src="/images/smiski.png"
            alt="Smiski doing yoga"
            className="w-64 opacity-90"
          />
        </div>

        {/*footer note */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm opacity-70">
          <p>© 2025 Majo</p>
        </div>
      </section>
    </main>
  )
}

/* notes
bg-cover - image fills the screen
bg-center - keeps the focal point centered
min-h-screen - full viewport height
inline backgroundImage - required because Tailwind can’t see dynamic URLs */