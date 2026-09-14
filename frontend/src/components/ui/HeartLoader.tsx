/* purpose: heart-curve animation as loading screen */
"use client";

import { useEffect, useRef } from "react";

type HeartLoaderProps = {
  onComplete: () => void;
};

const colors = [
  "#A67CB1", // plum
  "#CFA4C7", // dusty-pink
  "#CCAAD0", // lilac
  "#ECE398", // butter-yellow
  "#87ACCC", // powder-blue
  "#C7DDE6", // powder-blue-light
  "#D5EAD8", // mint-green
  "#C9C9C2", // ash-white
];

export default function HeartLoader({ onComplete }: HeartLoaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;
    const ctx = context;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;

    // background
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, width, height);

    let i = 0;
    let frameCount = 0;
    const total = 120;
    const framesPerPoint = 2; // higher = slower

    function drawPoint() {
      if (i >= total) {
        // small pause once the heart finishes drawing, then hand off to the page
        setTimeout(onComplete, 500);
        return;
      }

      frameCount++;
      if (frameCount % framesPerPoint === 0) {
        // parametric heart curve math
        const angle = i * (Math.PI * 2) / total;
        const x = 16 * Math.pow(Math.sin(angle), 3) * 15;
        const y =
            (13 * Math.cos(angle) -
                5 * Math.cos(2 * angle) -
                2 * Math.cos(3 * angle) -
                Math.cos(4 * angle)) *
            15;

        // coords: y-up, origin center — canvas: y-down, origin top-left
        const canvasX = centerX + x;
        const canvasY = centerY - y;

        const color = colors[Math.floor(Math.random() * colors.length)];
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;

        for (let a = 0; a < 4; a++) {
            const rad = (a * 45 * Math.PI) / 180;
            const dx = Math.cos(rad) * 6;
            const dy = Math.sin(rad) * 6;
            ctx.beginPath();
            ctx.moveTo(canvasX - dx, canvasY - dy);
            ctx.lineTo(canvasX + dx, canvasY + dy);
            ctx.stroke();
        }

        i++;
      }

      requestAnimationFrame(drawPoint);
    }

    drawPoint();
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-background">
      <canvas ref={canvasRef} width={500} height={600} className="w-[100vw] max-w-[350px] md:max-w-[500px] h-auto" />
    </div>
  );
}