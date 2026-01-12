import type { Metadata } from "next";
import { Geist, Geist_Mono, Coustard, Pinyon_Script } from "next/font/google";
// each imported font is a function, not a font file
import "./globals.css";
import Navbar from "@/components/Navbar";

// notes //
// import fonts from Google Fonts using next/font/google
// registers fonts as CSS variables
// wraps every page with shared layout (Navbar + body styles)

const coustard = Coustard({
  variable: "--font-coustard",
  subsets: ["latin"],
  weight: ["400"],
});

const pinyonScript = Pinyon_Script({
  variable: "--font-pinyon-script",
  subsets: ["latin"],
  weight: ["400"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// metadata - information about the page, not content you see on the page

export const metadata: Metadata = {
  title: "Majo's Portfolio",
  description: "Developer focused on thoughtful design, clean code, and meaningful user experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${coustard.variable} ${pinyonScript.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
