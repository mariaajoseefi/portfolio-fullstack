export default function Home() {
  return (
    <main
      className="relative min-h-screen flex items-center bg-center bg-no-repeat bg-contain"
      style={{
        backgroundImage: "url('/images/sketchbook.png')",
      }}
    >
      <div className="max-w-2xl mx-auto px-6 md:px-20">
        <h1 className="text-5xl text-center md:text-6xl leading-[1.4]">
          Majo is a
          <span className="italic text-6xl md:text-7xl"> software </span>
          engineer and
          <span className="italic text-6xl md:text-7xl"> curious </span>
          thinker.
        </h1>
      </div>
    </main>
  )
}

// notes //
// bg-cover - image fills the screen
// bg-center - keeps the focal point centered
// min-h-screen - full viewport height
// inline backgroundImage - required because Tailwind can’t see dynamic URLs