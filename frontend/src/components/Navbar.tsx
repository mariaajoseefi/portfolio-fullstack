/* purpose: navbar component */

import Link from 'next/link'

type NavbarProps = {
  variant?: "overlay" | "default";
};

/* notes
  pages decide where to position navbar by passing variant prop
  overlay: for homepage, hero section, absolute position
  default: for other pages, static position
*/

export default function Navbar({ variant = "default" }: NavbarProps) {
  /* if no variant is passed, it behaves normally */

  const position =
    variant === "overlay"
      ? "absolute top-35"
      : "relative mt-10";
  
  /* 
  overlay - absolute - floats over image 
  default - relative - normal positioning
  top-* - spacing from top - looks intentional 
  */

  return (
    <nav className={`${position} left-0 z-30 w-full`}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-center gap-6 text-lg text-black">
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
