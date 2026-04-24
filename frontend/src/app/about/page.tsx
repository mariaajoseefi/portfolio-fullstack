/* purpose: about page */

import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="relative w-full overflow-hidden">
        {/* cutout photo - top center */}
        <div className="flex justify-center mt-40">
          <div className="relative w-95 h-120 flex items-center justify-center">
    
          {/* background doodle stars */}
          <Image
            src="/images/about/star-effect.png"
            alt=""
            width={400}
            height={400}
            className="
              absolute
              z-0
              top-48 left-1/2
              -translate-x-1/2 -translate-y-1/2
              scale-125
              rotate-5
              opacity-90
              pointer-events-none
            "
          />

          {/* foreground cutout */}
          <Image
            src="/images/about/majo-cutout.png"
            alt="Photo of Majo"
            width={380}
            height={480}
            className="relative z-10 object-contain"
          />

        </div>
      </div>

        {/* arrow + star doodle below cutout */}
        <div className="flex justify-start pl-80 -mt-8">
          <Image
            src="/images/ui/arrow-curl-star.png"
            alt=""
            aria-hidden="true"
            width={320}
            height={320}
            className="-rotate-45 scale-x-[-1]"
          />
        </div>

        {/* main content row: game cover + text */}
        <section className="px-12 py-4">
          <div className="flex flex-row items-start gap-10 max-w-5xl mx-auto">

            {/* left: currently playing */}
            <div className="flex flex-col items-center gap-8 mt-24 shrink-0">
              <Image
                src="/images/about/playing.png"
                alt="Animal Crossing Wild World"
                width={280}
                height={280}
                className="object-contain transition-transform duration-300 hover:scale-105 hover:-rotate-2"
              />
              <div className="relative flex items-center">
                <Image
                  src="/images/ui/star-face.png"
                  alt=""
                  aria-hidden="true"
                  width={50}
                  height={50}
                  className="rotate-40 absolute -left-16"
                />
                <p className="font-imperial text-4xl">currently playing</p>
              </div>
            </div>

            {/* right: heading + bio */}
            <div className="flex flex-col gap-6 ml-auto">
              <div className="flex items-center gap-3">
                <h1 className="text-5xl">
                  Get to know{" "}
                  <span className="font-imperial text-7xl">me!</span>
                </h1>
                <Image
                  src="/images/ui/star-face.png"
                  alt=""
                  aria-hidden="true"
                  width={60}
                  height={60}
                  className="rotate-30 -mt-4"
                />
              </div>

              <p className="text-xl leading-relaxed max-w-xl">
                Hello! I'm Majo, a software engineer graduate based in
                Zapopan, México. I build digital products with a mix of
                technical precision and creative curiosity, working across
                both front-end and back-end development.
              </p>
            </div>
          </div>
        </section>

        {/* currently listening + currently building row */}
        <section className="px-12 py-8 relative">
          <div className="flex flex-row items-start gap-12 max-w-5xl mx-auto relative">

            <div className="flex justify-start pl-8">
              <Image
                src="/images/ui/arrow-curl.png"
                alt=""
                aria-hidden="true"
                width={210}
                height={210}
                className="rotate-20 scale-y-[-1]"
              />
            </div>

            <div className="absolute top-0 right-0">
              <Image
                src="/images/ui/arrow.png"
                alt=""
                aria-hidden="true"
                width={130}
                height={130}
                className="-rotate-90 -mt-45 mr-70"
              />
            </div>

            {/* left: currently listening */}
            <div className="flex flex-col items-center gap-8 shrink-0">
              <a href="https://open.spotify.com/album/25ktFe8igqIwv9aRbkdnTS?si=rSIkd-crT9GdLLJcrJZSLw" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/about/listening.jpg"
                  alt="Currently listening"
                  width={300}
                  height={260}
                  className="object-contain transition-transform duration-300 hover:scale-105 hover:-rotate-2"
                />
              </a>
              <div className="flex items-center gap-2">
                <p className="font-imperial text-4xl">currently listening to</p>
                <Image
                  src="/images/ui/star-face.png"
                  alt=""
                  aria-hidden="true"
                  width={50}
                  height={50}
                  className="rotate-40"
                />
              </div>
            </div>

            {/* right: currently building */}
            <div className="flex flex-col items-center gap-8 ml-auto shrink-0">
              <Image
                src="/images/about/building.png"
                alt="Currently building"
                width={280}
                height={380}
                className="object-contain transition-transform duration-300 hover:scale-105 hover:-rotate-2"  
              />  
              <div className="flex items-center gap-6">
                <p className="font-imperial text-4xl">currently building</p>
                <Image
                  src="/images/ui/star-outline.png"
                  alt=""
                  aria-hidden="true"
                  width={40}
                  height={40}
                  className="rotate-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* bottom paragraph */}
        <section className="px-12 pb-10 pt-2">
          <div className="flex items-start gap-4 pl-40 max-w-3xl">
            <p className="text-xl leading-relaxed mt-12">
              When I'm not coding, I'm probably{" "}
              <a
                href="https://letterboxd.com/mariajosefi/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-lavender-blue"
                >
                  watching movies
              </a>
              ,{" "}
              <a
                href="https://open.spotify.com/user/whitesides22?si=be7cf53689c24edb"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-lavender-blue"
              >
                thinking of new playlists
              </a>
              , or{" "}
              <a
                href="https://www.goodreads.com/user/show/72678996-majo"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-lavender-blue"
              >
                catching up on my reading list
              </a>
              . I'm always open to learning, collaborating, and exploring new ideas!
            </p>
          </div>
        </section>
      </main>
    </>
  );
}