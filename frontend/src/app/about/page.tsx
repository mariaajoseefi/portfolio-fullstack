/* purpose: about page */
"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <Navbar layout="split" />
      <main className="relative w-full overflow-hidden">

        {/* hero section: bio text + photo cutout */}
        <section className="px-12 pt-2 sm:pt-4 md:pt-16">
          <div className="flex flex-col-reverse gap-30 md:gap-10 md:flex-row items-center md:items-start justify-between max-w-5xl mx-auto">

            {/* left: bio text */}
            <div className="flex flex-col gap-10 max-w-lg pt-8 pb-5 md:pb-30">
              <p className="text-xl font-dm-mono leading-relaxed">
                Hello, World! I&apos;m Majo, a software engineer graduate based in Mexico City.
                I love to learn anything related to computers, and I try to build side projects every
                now and then to pick up new stuff.
              </p>

              <p className="text-xl font-dm-mono leading-relaxed">
                When I&apos;m not coding, I&apos;m probably{" "}
                <a
                  href="https://letterboxd.com/mariajosefi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-hover"
                  >
                    watching movies
                </a>
                ,{" "}
                <a
                  href="https://open.spotify.com/user/whitesides22?si=be7cf53689c24edb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-hover"
                >
                  thinking of new playlists
                </a>
                , or{" "}
                <a
                  href="https://www.goodreads.com/user/show/72678996-majo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-hover"
                >
                  catching up on my reading list
                </a>
                . I&apos;m always open to learning, collaborating, and exploring new ideas!
              </p>
            </div>

            {/* right: images */}
            <div className="relative shrink-0 w-95 mx-5 md:mx-0">
              <motion.div whileHover={{ scale: 1.03, rotate: -2 }} className="relative">
                
                {/* photo cutout */}
                <Image
                  src="/images/about/majo-cutout.png"
                  alt="photo of majo"
                  width={380}
                  height={480}
                  className="relative object-contain md:-translate-x-20 md:-translate-y-12"
                />

                {/* sticky note - bottom right of photo */}
                <Image
                  src="/images/home/board/note2.png"
                  alt=""
                  aria-hidden="true"
                  width={230}
                  height={230}
                  className="absolute -bottom-30 right-5 -rotate-2 md:-bottom-20"
                />

              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}