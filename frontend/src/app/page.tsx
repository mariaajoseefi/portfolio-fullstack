/* purpose: home page */

import Navbar from "@/components/layout/Navbar";
import Board from "@/components/sections/Board";

export default function Home() {
  return (
    <main className="w-full">
      <h1 className="text-center text-6xl tracking-tight pt-10 sm:mb-6">
        Majo Félix
      </h1>
      <Navbar />
      <Board />
    </main>
  );
}