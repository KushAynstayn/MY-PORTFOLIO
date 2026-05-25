"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      const heroSection = document.getElementById("hero-section");

      canvas.width = window.innerWidth;

      if (heroSection) {
        canvas.height = heroSection.offsetHeight;
      } else {
        canvas.height = window.innerHeight;
      }
    };

    setCanvasSize();

    const characters = "01";
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(1);

    const draw = () => {
      // Create the trailing effect by painting a semi-transparent background
      // This matches your #050816 background color
      ctx.fillStyle = "rgba(5, 8, 22, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Binary character styling
      // Boosted opacity to 0.15 for better visibility while staying professional
      ctx.fillStyle = "rgba(34, 211, 238, 0.28)"; 
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top randomly after it hits bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    // Adjusted interval for smoother "rain" (33ms = ~30fps)
    const interval = setInterval(draw, 33);

    const handleResize = () => {
      setCanvasSize();
      // Re-calculate columns on resize
      const newColumns = Math.floor(canvas.width / fontSize);
      drops.length = newColumns;
      drops.fill(1);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0 bg-[#000000]">
      {/* 1. The Matrix Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 opacity-40" // Added minor opacity layer
      />
      
      {/* 2. The Grid Overlay (Moved to higher Z to sit on top of rain) */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* 3. The Atmosphere Glows (Behind everything) */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-5%] h-[500px] w-[500px] rounded-full bg-purple-600/5 blur-[120px] -z-20"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-5%] h-[600px] w-[600px] rounded-full bg-cyan-600/5 blur-[120px] -z-20"
      />
    </div>
  );
}