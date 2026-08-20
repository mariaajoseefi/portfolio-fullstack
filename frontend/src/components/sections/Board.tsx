/* purpose: draggable scattered notes board */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Note = {
  src: string;
  alt: string;
  top: string;
  left: string;
  rotate: number;
  width: number;
};

// data-driven note positions — tweak top/left/rotate
const notes: Note[] = [
  { src: "/images/home/board/note1.png", alt: "sketch", top: "8%", left: "4%", rotate: -8, width: 200 },
  { src: "/images/home/board/note2.png", alt: "to-do list", top: "10%", left: "20%", rotate: 4, width: 200 },
  { src: "/images/home/board/note3.png", alt: "note", top: "5%", left: "38%", rotate: -3, width: 200 },
  { src: "/images/home/board/note4.png", alt: "sketch", top: "12%", left: "56%", rotate: 6, width: 200 },
  { src: "/images/home/board/note5.png", alt: "to-do list", top: "6%", left: "70%", rotate: -5, width: 200 },
  { src: "/images/home/board/note6.png", alt: "to-do list", top: "45%", left: "10%", rotate: 3, width: 500 },
  { src: "/images/home/board/note7.png", alt: "sketch", top: "50%", left: "35%", rotate: -6, width: 200 },
  { src: "/images/home/board/note8.png", alt: "note", top: "48%", left: "62%", rotate: 5, width: 200 },
];

export default function Board() {
  return (
    <div className="relative w-full max-w-7xl mx-auto h-200 bg-mist-gray overflow-hidden rounded-md" data-no-sparkle>
      {notes.map((note, i) => (
        <motion.div
          key={i}
          drag
          dragMomentum={false}
          dragElastic={0.15}
          whileDrag={{ scale: 1.08, zIndex: 50, cursor: "grabbing" }}
          whileHover={{ scale: 1.03 }}
          initial={{ rotate: note.rotate }}
          className="absolute cursor-grab shadow-md"
          style={{ top: note.top, left: note.left }}
        >
          <Image
            src={note.src}
            alt={note.alt}
            width={note.width}
            height={note.width}
            className="pointer-events-none select-none"
          />
        </motion.div>
      ))}
    </div>
  );
}