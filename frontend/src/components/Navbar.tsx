/* purpose: navbar component */

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="absolute top-35 left-0 z-20 w-full px-6">
      <div className="max-w-5xl mx-auto flex justify-center">
        <div className="flex gap-6 text-lg text-black">
          <Link href="/" className="hover:underline">
            home
          </Link>
          <a href="#" className="max-w-5xl">
            /
          </a>
          <Link href="/projects" className="hover:underline">
            projects
          </Link>
          <a href="#" className="max-w-5xl">
            /
          </a>
          <Link href="/about" className="hover:underline">
            about
          </Link>
          <a href="#" className="max-w-5xl">
            /
          </a>
          <Link href="/resume" className="hover:underline">
            resume
          </Link>
        </div>
      </div>
    </nav>
  )
}
