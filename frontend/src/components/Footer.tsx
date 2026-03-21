/* purpose: footer component with contact links and branding */

import Image from "next/image";

// data-driven social links
const socialLinks = [
  {
    href: "mailto:mariajosefinclan@gmail.com",
    label: "Email ↗",
  },
  {
    href: "https://linkedin.com/in/mariajosefi",
    label: "LinkedIn ↗",
  },
  {
    href: "https://github.com/mariaajoseefi",
    label: "GitHub ↗",
  },
];

export default function Footer() {
  return (
    <footer aria-label="Footer" className="py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* call-to-action */}
        <div>
          <h2 className="text-5xl mb-6">
            Let&apos;s keep in{" "}
            <span className="font-imperial text-7xl inline-block">touch!</span>
          </h2>

          <div className="flex gap-8 text-lg">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-camel"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* decorative image */}
        <Image
          src="/images/ui/smiski.png"
          alt="Smiski doing yoga"
          width={256}
          height={256}
          className="opacity-90"
        />
      </div>

      {/* footer note */}
      <div className="mt-3 text-center text-sm opacity-70">
        <p>© 2026 Majo</p>
      </div>
    </footer>
  );
}