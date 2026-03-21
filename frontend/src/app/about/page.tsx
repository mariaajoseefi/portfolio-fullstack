/* purpose: about page with interactive draggable collage */

"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

/* wrap Next.js Image with Framer Motion */
const MotionImage = motion(Image);

export default function About() {
  /* reference container for drag boundaries */
  const constraintsRef = useRef(null);

  /* shared drag behavior */
  const dragProps = {
    drag: true,
    dragConstraints: constraintsRef,
    dragMomentum: false, // disables inertia for controlled dragging
  };

  return (
    <>
      <Navbar />

      {/* interactive collage section */}
      <section
        ref={constraintsRef}
        aria-label="Interactive gallery"
        className="relative min-h-screen"
      >
        {/* container defines positioning context */}
        <div className="relative max-w-5xl mx-auto min-h-screen overflow-hidden">

          {/* map */}
          <div className="absolute top-4 right-[25rem] w-[75%] max-w-lg h-[380px] hidden md:block">
            <MotionImage
              src="/images/ui/maps.png"
              alt="Photo of a map"
              fill
              className="object-contain"
              {...dragProps}
            />
          </div>

          {/* workplace */}
          <div className="absolute top-20 right-0 w-[70%] max-w-lg h-[360px] hidden md:block">
            <MotionImage
              src="/images/ui/workplace.png"
              alt="Photo of Majo's workplace"
              fill
              className="object-contain"
              {...dragProps}
            />
          </div>

          {/* pokemon project */}
          <div className="absolute bottom-10 right-5 w-[70%] max-w-lg h-[360px] hidden md:block">
            <MotionImage
              src="/images/ui/pokemon_project.png"
              alt="Pokémon design project"
              fill
              className="object-contain"
              {...dragProps}
            />
          </div>

          {/* book */}
          <div className="absolute bottom-[20rem] left-[-3rem] w-[40%] max-w-lg h-[300px] hidden md:block">
            <MotionImage
              src="/images/ui/last_book.png"
              alt="Last book read"
              fill
              className="object-contain"
              {...dragProps}
            />
          </div>

          {/* cookie */}
          <div className="absolute bottom-[-1rem] left-[-2rem] w-[50%] max-w-lg h-[350px] z-10 hidden md:block">
            <MotionImage
              src="/images/ui/cookie.png"
              alt="Photo of a cookie"
              fill
              className="object-contain"
              {...dragProps}
            />
          </div>

          {/* main image */}
          <div className="absolute top-[12rem] left-[18rem] w-[70%] max-w-md h-[450px] z-20">
            <MotionImage
              src="/images/ui/about.png"
              alt="Photo of Majo"
              fill
              className="object-contain"
              {...dragProps}
            />
          </div>
        </div>
      </section>

      {/* text content */}
      <section className="py-8 px-6">
        <div className="max-w-3xl mx-auto text-right">

          <h1 className="text-5xl mb-10">
            About{" "}
            <span className="font-imperial text-6xl">Me</span>{" "}꙳
          </h1>

          <p className="text-xl leading-relaxed">
            Hello! I'm Majo, a software engineer graduate based in Zapopan, México.
            I build digital products with a mix of technical precision and creative
            curiosity, working across both front-end and back-end development.
          </p>

          <p className="text-xl leading-relaxed mt-8">
            When I'm not coding, I'm probably{" "}
            <a
              href="https://letterboxd.com/mariajosefi/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-camel"
            >
              watching movies
            </a>
            ,{" "}
            <a
              href="https://open.spotify.com/user/whitesides22?si=be7cf53689c24edb"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-camel"
            >
              thinking of new playlists
            </a>
            , or{" "}
            <a
              href="https://www.goodreads.com/user/show/72678996-majo"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-camel"
            >
              catching up on my reading list
            </a>
            . I’m always open to learning, collaborating, and exploring new ideas.
            Feel free to reach out — I’d love to connect!
          </p>
        </div>
      </section>
    </>
  );
}