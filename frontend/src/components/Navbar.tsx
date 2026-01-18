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
      ? "absolute top-6 sm:top-12 md:top-32"
      : "relative mt-4 sm:mt-6 md:mt-10";
  
  /* 
  overlay - absolute - floats over image 
  default - relative - normal positioning
  top-* - spacing from top - looks intentional 
  */

  return (
    <nav className={`${position} left-0 z-30 w-full`}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-center gap-6 text-lg text-black">
          <Link href="/" className="hover:underline hover:text-camel">
            home
          </Link>
          <span className="max-w-5xl hidden sm:inline">
            /
          </span>
          <Link href="/projects" className="hover:underline hover:text-camel">
            projects
          </Link>
          <span className="max-w-5xl hidden sm:inline">
            /
          </span>
          <Link href="/about" className="hover:underline hover:text-camel">
            about
          </Link>
          <span className="max-w-5xl hidden sm:inline">
            /
          </span>
          <Link href="/resume" className="hover:underline hover:text-camel">
            resume
          </Link>
        </div>
      </div>
    </nav>
  )
}
