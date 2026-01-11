import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 px-6 py-4">
      <div className="max-w-5xl mx-auto flex items-center justify-center">
        <div className="flex gap-6 text-sm">
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
