"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ChevronDown } from "lucide-react";
import TypingText from "../ui/TypingText";
import AnimatedBackground from "../ui/AnimatedBackground";

export default function Hero() {
  // --- INTERACTIVE TILT LOGIC ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="hero-section" className="relative min-h-[115vh] bg-transparent text-white overflow-hidden flex items-center">
      
      {/* Updated Background with Binary Rain */}
      <AnimatedBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full py-20 mt-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-cyan-400 text-sm md:text-base tracking-[0.2em] uppercase mb-4">
              Welcome to my portfolio
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Hi, I’m{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Niño John
              </span>
            </h1>

            <div className="text-2xl md:text-4xl font-bold mb-6 h-[50px]">
              <TypingText />
            </div>

            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mb-10">
              I build scalable systems, automate workflows, and develop
              modern web applications focused on efficiency, usability,
              and real-world business solutions.
            </p>
          </motion.div>

          {/* RIGHT VISUAL - INTERACTIVE 3D TERMINAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative flex justify-center cursor-pointer"
          >
            <div className="relative w-full max-w-[500px]">
              
              {/* Main Terminal Card */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
                
                {/* Contain the Scan Line inside the card */}
                <motion.div 
                  className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent h-40 w-full"
                  animate={{ y: [-200, 600] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />

                <div className="relative z-10">
                  {/* Fake Terminal Header */}
                  <div className="flex gap-2 mb-6">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>

                  {/* AI Status Indicator */}
                  <div className="flex items-center gap-2 mb-6 text-sm font-mono text-green-400/70">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    AI System: Optimized workflow detected...
                  </div>

                  {/* Code Snippet */}
                  <div className="space-y-4 font-mono text-sm">
                    <div className="text-purple-400">const developer = {"{"}</div>
                    <div className="pl-4 text-cyan-300">name: "Niño John",</div>
                    <div className="pl-4 text-cyan-300">role: "Full-Stack Web Developer",</div>
                    <div className="pl-4 text-cyan-300">skills: ["Laravel", "React", "MySQL"],</div>
                    <div className="pl-4 text-cyan-300">passion: "Building Smart Systems",</div>
                    <div className="text-purple-400">{"}"}</div>
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-8 -right-8 bg-cyan-500/10 border border-cyan-400/20 backdrop-blur-xl rounded-2xl px-5 py-3 shadow-xl z-20"
              >
                <p className="text-cyan-300 text-sm font-semibold tracking-wide">
                  ⚡ System Automation
                </p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-8 -left-8 bg-purple-500/10 border border-purple-400/20 backdrop-blur-xl rounded-2xl px-5 py-3 shadow-xl z-20"
              >
                <p className="text-purple-300 text-sm font-semibold tracking-wide">
                  🚀 Full-Stack Development
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="text-slate-400 h-8 w-8" />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-56 bg-gradient-to-b from-transparent via-[#050816]/70 to-[#050816] pointer-events-none z-20" />

    </section>
  );
}