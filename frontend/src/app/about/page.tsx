/* purpose: about page */

"use client";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function About() {
    const constraintsRef = useRef(null);

    return (
        <>
            <Navbar />
            <section ref={constraintsRef} className="relative min-h-screen">

                <div className="relative max-w-5xl mx-auto h-screen">

                    <motion.img
                        src="/images/maps.png"
                        alt="Photo of a map"
                        drag
                        dragConstraints={constraintsRef}
                        dragMomentum={false}
                        className="absolute top-4 right-100 z-0 w-[60%] max-w-lg hidden md:block"
                    />

                    <motion.img
                        src="/images/workplace.png"
                        alt="Photo of Majo's workplace"
                        drag
                        dragConstraints={constraintsRef}
                        dragMomentum={false}
                        className="absolute top-20 right-0 z-0 w-[60%] max-w-lg hidden md:block"
                    />

                    <motion.img
                        src="/images/pokemon_project.png"
                        alt="Pokémon design project"
                        drag
                        dragConstraints={constraintsRef}
                        dragMomentum={false}
                        className="absolute bottom-10 right-5 z-0 w-[60%] max-w-lg hidden md:block"
                    />

                    <motion.img
                        src="/images/last_book.png"
                        alt="Last book read"
                        drag
                        dragConstraints={constraintsRef}
                        dragMomentum={false}
                        className="absolute bottom-80 left-0 z-0 w-[30%] max-w-lg hidden md:block"
                    />

                    <motion.img
                        src="/images/cookie.png"
                        alt="Photo of a cookie"
                        drag
                        dragConstraints={constraintsRef}
                        dragMomentum={false}
                        className="absolute -bottom-10 left-5 z-10 w-[35%] max-w-lg hidden md:block"
                    />

                    <motion.img
                        src="/images/about.png"
                        alt="Photo of Majo"
                        drag
                        dragConstraints={constraintsRef}
                        dragMomentum={false}
                        className="absolute top-50 left-50 z-20 w-[60%] max-w-md"
                    />
                </div>
            </section>

            <section className="py-8 px-6">
                <div className="max-w-3xl mx-auto text-right">
                    <h1 className="text-5xl mb-10">
                        About <span className="italic text-6xl">Me</span>{" "}꙳
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
                            className="underline"
                        >
                            watching movies
                        </a>
                        ,{" "}
                        <a
                            href="https://open.spotify.com/user/whitesides22?si=be7cf53689c24edb"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                        >
                            thinking of new playlists
                        </a>
                        , or{" "}
                        <a
                            href="https://www.goodreads.com/user/show/72678996-majo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                        >
                            catching up on my reading list
                        </a>
                        . I’m always open to learning, collaborating, and exploring new ideas.
                        Feel free to reach out — I’d love to connect!
                    </p>
                </div>
            </section>
        </>
    )
}

/* notes
dragConstraints={constraintsRef} - means the image can only be dragged inside the section of the element reference by constraintsRef
    negative positioning values (e.g., right-100, bottom-10) move the images outside the section (drag constraints are ignored)
dragMomentum={false} - disables momentum so images stop where user releases them
hidden md:block - hides images on small screens for better UX */ 