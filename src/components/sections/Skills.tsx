"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const skills = [
  "Laravel",
  "React",
  "Next.js",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "PHP",
  "MySQL",
  "Git & GitHub",
  "REST APIs",
  "AI-Assisted Development",
  "Systems Analysis",
  "QA Testing",
  "Database Design",
  "Workflow Automation",
  "Prompt Engineering",
];

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);

  // AUTO ACTIVE TILE EFFECT
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % skills.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-32 bg-[#030712] text-white"
    >
      
      {/* ================================= */}
      {/* CYBERPUNK AI CORE BACKGROUND */}
      {/* ================================= */}

      <div className="absolute inset-0 overflow-hidden">
        {/* DARK BASE */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08),transparent_65%)]" />

        {/* ================================= */}
        {/* 3D ATOM AI CORE */}
        {/* ================================= */}

        <div className="absolute left-1/2 top-[58%] w-[520px] h-[520px] -translate-x-1/2 -translate-y-1/2 pointer-events-none">

          {/* CENTER GLOW */}
          <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-3xl" />

          {/* MAIN ATOM WRAPPER */}
          <div className="absolute inset-0 flex items-center justify-center">

            {/* ORBIT 1 */}
            <div className="absolute w-full h-full animate-orbit-x">
              <div className="relative w-full h-full rounded-full border border-cyan-400/15">

                {/* PARTICLE */}
                <div className="absolute top-1/2 -translate-y-1/2 -left-2 w-4 h-4 rounded-full bg-cyan-300 shadow-[0_0_25px_rgba(0,255,255,0.9)]" />
              </div>
            </div>

            {/* ORBIT 2 */}
            <div className="absolute w-full h-full rotate-[60deg] animate-orbit-y">
              <div className="relative w-full h-full rounded-full border border-cyan-400/15">

                {/* PARTICLE */}
                <div className="absolute top-1/2 -translate-y-1/2 -left-2 w-3 h-3 rounded-full bg-cyan-200 shadow-[0_0_20px_rgba(0,255,255,0.8)]" />
              </div>
            </div>

            {/* ORBIT 3 */}
            <div className="absolute w-full h-full rotate-[-60deg] animate-orbit-z">
              <div className="relative w-full h-full rounded-full border border-cyan-300/10">

                {/* PARTICLE */}
                <div className="absolute top-1/2 -translate-y-1/2 -left-2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(0,255,255,0.8)]" />
              </div>
            </div>

            {/* INNER ENERGY RING */}
            <div className="absolute w-[320px] h-[320px] rounded-full border border-cyan-400/10 animate-spin-slow" />

            {/* CENTER CHIP CORE */}
            <div className="absolute w-[170px] h-[170px] border border-cyan-400/20 bg-cyan-400/[0.03] backdrop-blur-md shadow-[0_0_80px_rgba(0,255,255,0.15)]">

              {/* INNER CHIP */}
              <div className="absolute inset-5 border border-cyan-400/20" />

              {/* CHIP LINES */}
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-cyan-400/20" />
              <div className="absolute left-1/2 top-0 h-full w-[1px] bg-cyan-400/20" />

              {/* PULSE */}
              <div className="absolute inset-0 animate-pulse bg-cyan-400/[0.03]" />

              {/* CENTER ENERGY */}
              <div className="absolute left-1/2 top-1/2 w-5 h-5 rounded-full bg-cyan-300 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_40px_rgba(0,255,255,1)]" />
            </div>
          </div>
        </div>

        {/* ================================= */}
        {/* NEURAL NETWORK */}
        {/* ================================= */}

        <svg
          className="absolute inset-0 w-full h-full opacity-70"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* HORIZONTAL FLOW */}
          {[...Array(12)].map((_, i) => (
            <g key={i}>
              <line
                x1="0"
                y1={80 + i * 90}
                x2="100%"
                y2={80 + i * 90}
                stroke="rgba(34,211,238,0.12)"
                strokeWidth="1"
              />

              <circle r="3" fill="#22d3ee">
                <animateMotion
                  dur={`${8 + i}s`}
                  repeatCount="indefinite"
                  path={`M0 ${80 + i * 90} L1600 ${80 + i * 90}`}
                />
              </circle>
            </g>
          ))}

          {/* VERTICAL FLOW */}
          {[...Array(8)].map((_, i) => (
            <g key={i}>
              <line
                x1={150 + i * 220}
                y1="0"
                x2={150 + i * 220}
                y2="100%"
                stroke="rgba(34,211,238,0.08)"
                strokeWidth="1"
              />

              <circle r="2" fill="#67e8f9">
                <animateMotion
                  dur={`${10 + i}s`}
                  repeatCount="indefinite"
                  path={`M${150 + i * 220} 0 L${150 + i * 220} 1200`}
                />
              </circle>
            </g>
          ))}
        </svg>

        {/* AMBIENT LIGHT */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-cyan-400/5 blur-[140px]" />

        <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-cyan-400/[0.04] blur-[180px]" />
      </div>

      {/* ================================= */}
      {/* CONTENT */}
      {/* ================================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 uppercase tracking-[0.45em] mb-5 text-sm">
            Skills
          </p>

          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Technologies &{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Modern development technologies combined with
            systems thinking and AI-assisted workflows.
          </p>
        </motion.div>

        {/* ================================= */}
        {/* SKILL TILES */}
        {/* ================================= */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border border-cyan-400/10">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.04,
              }}
              viewport={{ once: true }}
              whileHover={{
                rotateX: -12,
                rotateY: 12,
                y: -14,
                z: 120,
                scale: 1.06,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className={`
                group
                relative
                h-[140px]
                flex
                items-center
                justify-center
                border
                border-cyan-400/10
                bg-transparent
                backdrop-blur-xs
                shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]
                overflow-hidden
                transition-all
                duration-400
                cursor-pointer
              `}
            >
              {/* AUTO ACTIVE LIGHT */}
              <div
                className={`
                  absolute inset-0 transition-all duration-1000
                  ${
                    activeIndex === index
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }
                `}
              >
                <div className="absolute inset-0 bg-cyan-400/10" />

                {/* RUNNING LIGHT */}
                <div className="absolute top-0 left-[-100%] w-[120%] h-full bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent skew-x-[-20deg] animate-scan" />
              </div>

              {/* CYBER LINES */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-400/20" />
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-cyan-400/10" />

              {/* EDGE GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 shadow-[0_0_35px_rgba(0,255,255,0.18)]" />

              {/* TEXT */}
              <div className="relative z-10 px-4 text-center">
                <p className="text-lg md:text-xl font-semibold tracking-wide text-slate-200 group-hover:text-cyan-300 transition duration-500">
                  {skill}
                </p>
              </div>

              {/* DIGITAL CORNERS */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-cyan-400/40" />
              <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-cyan-400/40" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-cyan-400/40" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-cyan-400/40" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================================= */}
      {/* CUSTOM CSS */}
      {/* ================================= */}

      <style jsx>{`
        @keyframes scan {
          0% {
            left: -120%;
          }

          100% {
            left: 150%;
          }
        }

        .animate-scan {
          animation: scan 4s linear infinite;
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spinReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }

        .animate-spin-slow {
          animation: spinSlow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spinReverse 14s linear infinite;
        }

        @keyframes core3d {
          0% {
            transform: rotateX(68deg) rotateZ(0deg);
          }

          50% {
            transform: rotateX(72deg) rotateZ(180deg);
          }

          100% {
            transform: rotateX(68deg) rotateZ(360deg);
          }
        }

        .animate-core-3d {
          animation: core3d 24s linear infinite;
          transform-style: preserve-3d;
        }


        @keyframes orbitX {
          from {
            transform: rotateX(75deg) rotateY(0deg);
          }

          to {
            transform: rotateX(75deg) rotateY(360deg);
          }
        }

        @keyframes orbitY {
          from {
            transform: rotateY(75deg) rotateZ(0deg);
          }

          to {
            transform: rotateY(75deg) rotateZ(360deg);
          }
        }

        @keyframes orbitZ {
          from {
            transform: rotateX(75deg) rotateZ(0deg);
          }

          to {
            transform: rotateX(75deg) rotateZ(360deg);
          }
        }

        .animate-orbit-x {
          animation: orbitX 10s linear infinite;
          transform-style: preserve-3d;
        }

        .animate-orbit-y {
          animation: orbitY 14s linear infinite;
          transform-style: preserve-3d;
        }

        .animate-orbit-z {
          animation: orbitZ 18s linear infinite;
          transform-style: preserve-3d;
        }
      `}</style>

      <div className="absolute bottom-0 left-0 w-full h-56 bg-gradient-to-b from-transparent via-[#050816]/70 to-[#050816] pointer-events-none z-20" />
    </section>
  );
}