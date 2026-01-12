import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="absolute top-35 left-0 z-20 w-full px-6">
      <div className="max-w-5xl mx-auto flex justify-center">
        <div className="flex gap-6 text-sm text-black">
          <Link href="/" className="hover:underline">
            home
          </Link>
          <Link href="/projects" className="hover:underline">
            projects
          </Link>
          <Link href="/about" className="hover:underline">
            about
          </Link>
          <Link href="/resume" className="hover:underline">
            resume
          </Link>
        </div>
      </div>
    </nav>
  )
}
