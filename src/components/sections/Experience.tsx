"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Sparkles,
  Code2,
  ShieldCheck,
  BrainCircuit,
} from "lucide-react";

const experiences = [
  {
    title: "Full-Stack Web Developer Intern",
    company: "M Lhuillier Financial Services",
    date: "Feb 2026 – May 2026",
    icon: <Briefcase size={18} />,
    points: [
      { icon: <Code2 size={18} />, text: "Developed internal business systems." },
      { icon: <ShieldCheck size={18} />, text: "Performed QA testing and debugging." },
      { icon: <Sparkles size={18} />, text: "Implemented feature enhancements." },
      { icon: <BrainCircuit size={18} />, text: "Used AI-assisted workflows." },
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-32 text-white bg-[#030712]"
    >

      {/* =============================== */}
      {/* VIDEO BACKGROUND */}
      {/* =============================== */}

      <div className="absolute inset-0 overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="/videos/exp.mp4" type="video/mp4" />
        </video>

        {/* DARK OVERLAY (important for readability) */}
        <div className="absolute inset-0 bg-[#030712]/70" />

        {/* CYAN GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08),transparent_60%)]" />

        {/* VIGNETTE */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(3,7,18,0.95)_100%)]" />

        {/* GRID (kept cyber feel) */}
        <div className="absolute inset-0 cyber-grid opacity-20" />

        {/* FLOATING NODES */}
        <div className="absolute inset-0 node-layer opacity-30" />
      </div>

      {/* =============================== */}
      {/* CONTENT */}
      {/* =============================== */}

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-cyan-400 uppercase tracking-[0.45em] mb-5 text-sm">
            Experience
          </p>

          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Work{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Professional experience in software development, systems implementation,
            QA testing, and AI-assisted workflows.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative">
          <div className="absolute left-[18px] top-0 bottom-0 w-[1px]
            bg-gradient-to-b from-cyan-400/60 via-cyan-400/20 to-transparent"
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-20 mb-20"
            >

              {/* NODE */}
              <div className="absolute left-0 top-6 flex items-center justify-center">
                <div className="absolute w-14 h-14 rounded-full bg-cyan-400/10 blur-xl animate-pulse" />
                <div className="relative w-10 h-10 rounded-full border border-cyan-400/40 bg-[#081120] flex items-center justify-center shadow-[0_0_25px_rgba(0,255,255,0.25)]">
                  <div className="text-cyan-300">{exp.icon}</div>
                </div>
              </div>

              {/* CARD */}
              <div className="
                group relative overflow-hidden
                border border-cyan-400/10
                bg-[#0b1120]/80
                backdrop-blur-xs
                p-8 md:p-10
                transition-all duration-300
                [transform-style:preserve-3d]
                hover:scale-[1.02]
                hover:rotate-x-3
                hover:rotate-y-[-3]
                hover:shadow-[0_25px_60px_rgba(0,255,255,0.12)]
              ">

                {/* glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-cyan-400/[0.03] transition" />

                <div className="relative z-10">

                  <div className="inline-flex items-center gap-2 border border-cyan-400/15 bg-cyan-400/[0.04] px-4 py-2 text-cyan-300 text-sm mb-6">
                    <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
                    {exp.date}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black mb-3 group-hover:text-cyan-300 transition">
                    {exp.title}
                  </h3>

                  <p className="text-slate-400 text-lg mb-8">
                    {exp.company}
                  </p>

                  <div className="grid gap-4">
                    {exp.points.map((point, i) => (
                      <div
                        key={i}
                        className="
                          flex items-start gap-4
                          border border-white/5
                          bg-white/[0.02]
                          px-5 py-4
                          transition-all duration-500
                          hover:translate-x-2
                          hover:border-cyan-400/20
                          hover:bg-cyan-400/[0.03]
                        "
                      >
                        <div className="text-cyan-300 mt-0.5">
                          {point.icon}
                        </div>
                        <p className="text-slate-300 leading-relaxed">
                          {point.text}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* =============================== */}
      {/* CSS EFFECTS */}
      {/* =============================== */}

      <style>{`
        .cyber-grid {
          background-image:
            linear-gradient(to right, rgba(0,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,255,255,0.05) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: gridMove 18s linear infinite;
        }

        @keyframes gridMove {
          from { transform: translateY(0px); }
          to { transform: translateY(60px); }
        }

        .node-layer {
          background-image: radial-gradient(rgba(0,255,255,0.3) 1px, transparent 1px);
          background-size: 100px 100px;
          animation: nodeFloat 10s ease-in-out infinite;
        }

        @keyframes nodeFloat {
          0% { transform: translate(0,0); }
          50% { transform: translate(-25px,25px); }
          100% { transform: translate(0,0); }
        }
      `}</style>
    </section>
  );
}