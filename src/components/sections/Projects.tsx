"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050816] py-32 text-white"
    >
      {/* =========================
            CYBERPUNK BACKGROUND
      ========================== */}
      <div className="absolute inset-0 overflow-hidden">
        {/* BASE */}
        <div className="absolute inset-0 bg-[#050816]" />

        {/* GLOW ORBS */}
        <div className="absolute left-[20%] top-[20%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/5 blur-[150px]" />

        {/* LAYER 1: DISTANT DUST */}
        <div className="absolute inset-0">
          {[...Array(60)].map((_, i) => (
            <div
              key={`bg-${i}`}
              className="particle particle-bg absolute rounded-full"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 25 + 15}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* LAYER 2: MID PARTICLES */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={`mid-${i}`}
              className="particle particle-mid absolute rounded-full"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 18 + 12}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* LAYER 3: FOREGROUND SPARKS */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={`fg-${i}`}
              className="particle particle-fg absolute rounded-full"
              style={{
                width: `${Math.random() * 5 + 2}px`,
                height: `${Math.random() * 5 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 14 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* VIGNETTE */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,#050816_100%)]" />
      </div>

      {/* =========================
                CONTENT
      ========================== */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-400">
            Projects
          </p>

          <h2 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
            Developed Systems &{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI-Powered Projects
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-400">
            Real-world systems focused on workflow automation,
            business solutions, database optimization, and AI-assisted software development.
          </p>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="flex flex-col gap-12 overflow-hidden">
          {projects.map((project, index) => {
            // Determine side: Index 0 (Project 1) -> Right, Index 1 (Project 2) -> Left, etc.
            const isSlideFromRight = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ 
                  opacity: 0, 
                  x: isSlideFromRight ? 100 : -100 
                }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0 
                }}
                viewport={{ 
                  once: true, 
                  margin: "-100px" // Triggers animation when element is 100px inside viewport
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeOut" 
                }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  images={project.images}
                  tech={project.tech}
                  status={project.status}
                  featured={project.featured}
                  github={project.github}
                  live={project.live}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}