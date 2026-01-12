/* purpose: footer component */

export default function Footer() {
  return (
    <footer className="py-10 px-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        
        {/* text */}
        <div>
          <h2 className="text-5xl mb-6">
            Let&apos;s keep in{" "}
            <span className="italic text-7xl">touch!</span>
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
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/mariaajoseefi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
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

      {/* footer note */}
      <div className="mt-3 text-center text-sm opacity-70">
        <p>© 2026 Majo</p>
      </div>
    </footer>
  )
}