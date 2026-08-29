/* purpose: draggable scattered notes board */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

type Note = {
  src: string;
  alt: string;
  top: string;
  left: string;
  mobileTop: string;
  mobileLeft: string;
  mobileWidth: number;
  rotate: number;
  width: number;
};

// data-driven note positions — tweak top/left/rotate
const notes: Note[] = [
  { src: "/images/home/board/letter.png", alt: "letter", top: "10%", left: "40%", mobileTop: "2%", mobileLeft: "20%", mobileWidth: 140, rotate: 20, width: 300 },
  { src: "/images/home/board/terminal.png", alt: "terminal", top: "35%", left: "30%", mobileTop: "35%", mobileLeft: "5%", mobileWidth: 350, rotate: 0, width: 600 },
  { src: "/images/home/board/microchip.jpg", alt: "microchip", top: "35%", left: "5%", mobileTop: "85%", mobileLeft: "55%", mobileWidth: 80, rotate: 2, width: 150 },
  { src: "/images/home/board/note1.png", alt: "sticky note", top: "60%", left: "70%", mobileTop: "60%", mobileLeft: "65%", mobileWidth: 130, rotate: 2, width: 250 },
  { src: "/images/home/board/note2.png", alt: "sticky note", top: "5%", left: "10%", mobileTop: "2%", mobileLeft: "5%", mobileWidth: 130, rotate: -3, width: 250 },
  { src: "/images/home/board/note3.png", alt: "sketch", top: "60%", left: "5%", mobileTop: "60%", mobileLeft: "-40%", mobileWidth: 350, rotate: 6, width: 550 },
  { src: "/images/home/board/pokemon-card.png", alt: "pokemon card", top: "3%", left: "75%", mobileTop: "2%", mobileLeft: "60%", mobileWidth: 140, rotate: 3, width: 250 },
];

export default function Board() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto mb-2 md:mb-10 h-[500px] sm:h-[650px] md:h-200 bg-mist-gray overflow-hidden rounded-md" data-no-sparkle>
      {notes.map((note, i) => (
        <motion.div
          key={i}
          drag
          dragMomentum={false}
          dragElastic={0.15}
          whileDrag={{ scale: 1.08, zIndex: 50, cursor: "grabbing" }}
          whileHover={{ scale: 1.03, rotate: 5 }}
          initial={{ rotate: note.rotate }}
          className="absolute cursor-grab shadow-md"
          style={{
            top: isMobile ? note.mobileTop : note.top,
            left: isMobile ? note.mobileLeft : note.left,
          }}
        >
          <Image
            src={note.src}
            alt={note.alt}
            width={note.width}
            height={note.width}
            className="pointer-events-none select-none w-35 sm:w-45 md:w-auto h-auto"
            style={{
              width: isMobile ? note.mobileWidth : note.width,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}