/* purpose: home page */

"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeartLoader from "@/components/ui/HeartLoader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer"
import Board from "@/components/sections/Board";
import Link from "next/link";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("heartLoaderShown");
    if (alreadyShown) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsLoading(false);
    }
    setHasMounted(true);
  }, []);

  const handleComplete = () => {
    sessionStorage.setItem("heartLoaderShown", "true");
    setIsLoading(false);
  };

  // avoids a flash of the loader before sessionStorage is checked
  if (!hasMounted) return null;

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <HeartLoader onComplete={handleComplete} />
        </motion.div>
      ) : (
        <motion.main
          key="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-full"
        >
          <Link href="/">
            <h1 className="font-dm-mono font-medium text-center text-3xl sm:text-4xl md:text-6xl tracking-tight pt-10 mb-6 link-home-hover md:text-foreground">
              Majo Félix
            </h1>
          </Link>
          
          <Navbar />
          <Board />
          <Footer />
        </motion.main>
      )}
    </AnimatePresence>
  );
}