/* purpose: footer component with contact links */
import Image from "next/image";

// data-driven social links
const socialLinks = [
  {
    href: "mailto:mariajosefinclan@gmail.com",
    label: "Email",
  },
  {
    href: "https://linkedin.com/in/mariaajoseefi",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/mariaajoseefi",
    label: "GitHub",
  },
];

export default function Footer() {
  return (
    <footer aria-label="Footer" className="py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* call-to-action */}
        <div>
          <p className="text-lg sm:text-2xl md:text-3xl mb-10">
            ─────────── *ੈ✩‧₊˚✧˖*°࿐
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-10">
            Let&apos;s keep in touch!
          </h2>

          <div className="flex gap-8 text-base sm:text-lg md:text-xl">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-1"
              >
                <span className="relative block h-[1.2em] overflow-hidden">
                  <span className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
                    <span>{link.label}</span>
                    <span aria-hidden="true">{link.label}</span>
                  </span>
                </span>

                <Image
                  src="/images/ui/arrow-outcome.svg"
                  alt=""
                  aria-hidden="true"
                  width={18}
                  height={18}
                />
              </a>
            ))}
          </div>
          
        </div>
      </div>

      {/* footer note */}
      <div className="max-w-5xl mx-auto mt-12 text-sm text-center md:text-left opacity-70">
        <p>© 2026</p>
      </div>
    </footer>
  );
}