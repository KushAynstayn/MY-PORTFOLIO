"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  alpha: number;
  speedX: number;
  speedY: number;
  char: string;
};

export default function CursorTrail() {

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const particles = useRef<Particle[]>([]);

  useEffect(() => {

    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    /* =========================
       SET CANVAS SIZE
    ========================= */

    const resizeCanvas = () => {

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

    };

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    /* =========================
       PARTICLE CREATION
    ========================= */

    const createParticle = () => {

      const chars = ["0", "1"];

      particles.current.push({
        x: mouseX,
        y: mouseY,
        size: Math.random() * 14 + 10,
        alpha: 1,
        speedX: (Math.random() - 0.5) * 1.5,
        speedY: (Math.random() - 0.5) * 1.5,
        char: chars[Math.floor(Math.random() * chars.length)],
      });

      if (particles.current.length > 120) {
        particles.current.shift();
      }
    };

    /* =========================
       MOUSE MOVE
    ========================= */

    const handleMouseMove = (e: MouseEvent) => {

      mouseX = e.clientX;
      mouseY = e.clientY;

      for (let i = 0; i < 3; i++) {
        createParticle();
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    /* =========================
       ANIMATION LOOP
    ========================= */

    const animate = () => {

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((particle, index) => {

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        particle.alpha -= 0.015;

        if (particle.alpha <= 0) {
          particles.current.splice(index, 1);
        }

        /* GLOW */
        ctx.shadowBlur = 15;
        ctx.shadowColor = "#22d3ee";

        /* TEXT */
        ctx.font = `${particle.size}px monospace`;

        /* CYAN/PURPLE RANDOM */
        const colors = [
          "#22d3ee",
          "#a855f7",
          "#06b6d4",
          "#c084fc",
        ];

        ctx.fillStyle =
          colors[Math.floor(Math.random() * colors.length)];

        ctx.globalAlpha = particle.alpha;

        ctx.fillText(
          particle.char,
          particle.x,
          particle.y
        );
      });

      ctx.globalAlpha = 1;

      requestAnimationFrame(animate);
    };

    animate();

    return () => {

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "resize",
        resizeCanvas
      );
    };

  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="
        pointer-events-none
        fixed
        inset-0
        z-[9999]
      "
    />
  );
}