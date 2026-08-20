/* purpose: spawns fading sparkle particles that trail the mouse */
"use client";

import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Sparkle = {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  char: string;
};

const sparkleChars = ["*", "ੈ", "✩", "‧", "₊", "˚", "✧", "˖", "°", "⊹", "ꕤ"];

export default function SparkleCursor() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const idCounter = useRef(0);
  const lastSpawn = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      // control spawning so it doesn't fire on every single pixel of movement
      if (now - lastSpawn.current < 60) return;

      // skip spawning if hovering an element marked data-no-sparkle
      const target = e.target as HTMLElement;
      if (target.closest("[data-no-sparkle]")) return;
      
      lastSpawn.current = now;

      const newSparkle: Sparkle = {
        id: idCounter.current++,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 20 + 10,
        rotation: Math.random() * 360,
        char: sparkleChars[Math.floor(Math.random() * sparkleChars.length)],
      };

      setSparkles((prev) => [...prev, newSparkle]);

      // remove this sparkle after its animation finishes
      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
      }, 600);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-999">
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            initial={{ opacity: 1, scale: 0, x: sparkle.x, y: sparkle.y, rotate: sparkle.rotation }}
            animate={{ opacity: 0, scale: 2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute"
            style={{ translateX: "-50%", translateY: "-50%" }}
          >
            {sparkle.char}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}