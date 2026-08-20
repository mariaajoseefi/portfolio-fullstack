/* purpose: about page */

import Navbar from "@/components/layout/Navbar";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Navbar layout="split" />
      <main className="relative w-full overflow-hidden">

        {/* hero section: bio text + photo cutout */}
        <section className="px-12 pt-16">
          <div className="flex flex-row items-start justify-between gap-10 max-w-5xl mx-auto">

            {/* left: bio text */}
            <div className="flex flex-col gap-10 max-w-lg pt-8 pb-30">
              <p className="text-xl font-dm-mono leading-relaxed">
                Hello, World! I'm Majo, a software engineer graduate based in Mexico City.
                I love to learn anything related to computers, and I try to buil side projects every
                now and then to pick up new stuff.
              </p>

              <p className="text-xl font-dm-mono leading-relaxed">
                When I'm not coding, I'm probably{" "}
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
                . I'm always open to learning, collaborating, and exploring new ideas!
              </p>
            </div>

            {/* right: photo cutout */}
            <div className="relative shrink-0 w-95">

              {/* photo cutout */}
              <Image
                src="/images/about/majo-cutout.png"
                alt="photo of majo"
                width={380}
                height={480}
                className="relative object-contain -translate-x-20 -translate-y-12"
              />

              {/* sticky note - bottom right of photo */}
              <Image
                src="/images/home/board/note7.png"
                alt=""
                aria-hidden="true"
                width={170}
                height={170}
                className="absolute -bottom-8 right-20 -rotate-2"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}