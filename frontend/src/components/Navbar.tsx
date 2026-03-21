/* purpose: reusable navigation bar component */

import Link from "next/link";

type NavbarProps = {
  variant?: "overlay" | "default";
};

// navigation links (data-driven approach for scalability)
const navLinks = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/about", label: "about" },
  {
    href: "https://drive.google.com/file/d/1bE-6PbxZLkhyqujit8YBjAYXhKmJT2Bi/view?usp=drive_link",
    label: "resume",
    external: true,
  },
];

export default function Navbar({ variant = "default" }: NavbarProps) {
  // determines navbar positioning based on page context
  const position =
    variant === "overlay"
      ? "absolute top-6 sm:top-12 md:top-32"
      : "relative mt-4 sm:mt-6 md:mt-10";

  return (
    <nav
      aria-label="Main navigation"
      className={`${position} left-0 z-30 w-full`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-center gap-6 text-lg text-foreground">
          {navLinks.map((link, index) => (
            <div key={link.href} className="flex items-center gap-6">

              {link.external ? (
                /* external link (resume → opens in new tab) */
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:underline hover:text-camel"
                >
                  {link.label}
                </a>
              ) : (
                /* internal link (Next.js routing) */
                <Link
                  href={link.href}
                  className="transition hover:underline hover:text-camel"
                >
                  {link.label}
                </Link>
              )}

              {index < navLinks.length - 1 && (
                <span className="hidden sm:inline text-foreground">/</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}