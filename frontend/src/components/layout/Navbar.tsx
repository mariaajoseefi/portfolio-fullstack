/* purpose: reusable navbar component */

import Link from "next/link";

type NavbarProps = {
  variant?: "overlay" | "default";
  layout?: "centered" | "split";
};

// data-driven navigation links
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

export default function Navbar({ variant = "default", layout = "centered" }: NavbarProps) {
  // determines navbar positioning based on page
  const position =
    variant === "overlay"
      ? "absolute top-6 sm:top-12 md:top-22"
      : "relative mt-4 sm:mt-6 md:mt-10";

  // shared nav links markup
  const links = (
    <div className="flex justify-center gap-6 text-lg font-medium text-foreground">
      {navLinks.map((link, index) => (
        <div key={link.href} className="flex items-center gap-6">

          {link.external ? (
            /* external link (resume → opens in new tab) */
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block h-[1.05em] overflow-hidden"
            >
              <span className="flex flex-col leading-none transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
                <span>{link.label}</span>
                <span aria-hidden="true">{link.label}</span>
              </span>
            </a>
          ) : (
            /* internal link (next.js routing) */
            <Link
              href={link.href}
              className="group relative block h-[1.05em] overflow-hidden"
            >
              <span className="flex flex-col leading-none transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
                <span>{link.label}</span>
                <span aria-hidden="true">{link.label}</span>
              </span>
            </Link>
          )}

          {index < navLinks.length - 1 && (
            <span className="hidden sm:inline text-foreground">/</span>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <nav
      aria-label="main navigation"
      className={`${position} left-0 z-30 w-full mb-8 sm:mb-12`}
    >
      <div className="max-w-5xl mx-auto px-1">
        {layout === "split" ? (
          /* split layout — title and links side by side */
          <div className="flex items-center justify-between">
            <span className="font-dm-mono font-medium text-4xl tracking-tight">Majo Félix</span>
            {links}
          </div>
        ) : (
          /* centered layout — links only, title rendered separately */
          links
        )}
      </div>
    </nav>
  );
}