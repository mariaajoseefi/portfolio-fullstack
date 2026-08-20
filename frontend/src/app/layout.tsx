/* purpose: global layout for shared styles, fonts, and structure */

import type { Metadata } from "next";
import { DM_Mono, Inter } from "next/font/google";
// next.js processes this global stylesheet at build time; typescript may not
// have declarations for side-effect CSS imports in editor diagnostics
// @ts-expect-error CSS is handled by next.js, not typescript.
import "./globals.css";
import Footer from "@/components/layout/Footer";
import SparkleCursor from "@/components/ui/SparkleCursor";

// configure fonts for optimization

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: "variable",
});

// global metadata for SEO and browser info

export const metadata: Metadata = {
  title: "majo félix",
  description: "this is majo's portfolio, she's probably debugging something right now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmMono.variable} ${inter.variable} antialiased`}
      >
        <SparkleCursor />
        {children}
        <Footer />
      </body>
    </html>
  );
}
