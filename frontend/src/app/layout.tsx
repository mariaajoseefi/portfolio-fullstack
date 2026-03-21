/* purpose: global layout for shared styles, fonts, and structure */

import type { Metadata } from "next";
import { Geist, Geist_Mono, Coustard, Imperial_Script } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

// configure fonts using Next.js font optimization

const coustard = Coustard({
  variable: "--font-coustard",
  subsets: ["latin"],
  weight: ["400"],
});

const imperialScript = Imperial_Script({
  variable: "--font-imperial-script",
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

// global metadata for SEO and browser info

export const metadata: Metadata = {
  title: "majo's portfolio",
  description: "developer focused on thoughtful design, clean code, and meaningful user experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${coustard.variable} ${imperialScript.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
