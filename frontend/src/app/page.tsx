export default function Home() {
  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: "url('/images/sketchbook.png')",
      }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-4">
          Majo is a
          <span className="italic"> curious </span>
          thinker.
        </h1>

        <p className="text-lg text-gray-700">
          Product-focused developer with a love for design and systems.
        </p>
      </div>
    </main>
  )
}

// notes //
// bg-cover - image fills the screen
// bg-center - keeps the focal point centered
// min-h-screen - full viewport height
// inline backgroundImage - required because Tailwind can’t see dynamic URLs