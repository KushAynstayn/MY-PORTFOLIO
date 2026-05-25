"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  BrainCircuit,
  Briefcase,
  Code2,
  Database,
} from "lucide-react";
import Image from "next/image"; // If using Next.js, otherwise use <img>


const cards = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    desc: "Building scalable systems and modern web applications.",
    color: "from-cyan-500/20",
  },
  {
    icon: Database,
    title: "Database Management",
    desc: "Designing optimized and efficient database structures.",
    color: "from-purple-500/20",
  },
  {
    icon: Briefcase,
    title: "Workflow Automation",
    desc: "Improving business processes through automation.",
    color: "from-blue-500/20",
  },
  {
    icon: BrainCircuit,
    title: "AI-Assisted Development",
    desc: "Using AI tools to improve development productivity.",
    color: "from-pink-500/20",
  },
];

function ServiceCard({ card, index }: { card: any; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = card.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative group cursor-pointer z-10" // Added z-10 to stay above the bg image
    >
      <div className={`relative h-full rounded-3xl border border-white/10 bg-gradient-to-br ${card.color} to-white/5 backdrop-blur-xl p-8 transition-all duration-300 group-hover:border-cyan-400/50 shadow-2xl overflow-hidden`}>
        <div className="absolute inset-0 z-0 bg-[radial-gradient(600px_at_var(--mouse-x)_var(--mouse-y),rgba(34,211,238,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative z-10" style={{ transform: "translateZ(20px)" }}>
          <div className="h-14 w-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Icon className="text-cyan-400 h-7 w-7" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">{card.title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
        </div>
        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-500 group-hover:w-full" />
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-32 bg-[#050816] text-white overflow-hidden">
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-3 mb-6">
               <span className="h-[1px] w-10 bg-cyan-400"></span>
               <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs font-bold">My Profile</p>
            </div>
            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">
              Building Smart Systems with
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent italic">AI + Modern Tech</span>
            </h2>
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>I am a <span className="text-white font-semibold">BS Information Systems</span> student and aspiring full-stack web developer. My mission is to bridge the gap between complex data and intuitive user experiences.</p>
              <p className="text-slate-400 text-base border-l-2 border-cyan-500/30 pl-6 py-2 italic">"Specializing in Laravel, React, and AI-driven workflows to turn business challenges into automated reality."</p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {["Laravel", "React", "MySQL", "Next.js", "AI Tools"].map((tech) => (
                <span key={tech} className="px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-[11px] font-mono uppercase tracking-widest text-cyan-400/70">{tech}</span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT CARDS WITH ANIMATED BACKGROUND IMAGE */}
          <div className="relative grid sm:grid-cols-2 gap-6 pt-8 lg:pt-0">
            
            {/* THE BACKGROUND IMAGE */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              whileInView={{ 
                opacity: 0.15, 
                scale: 2.1, // Set your "Required Scale" here
              }}
              animate={{ 
                rotate: 360, // Only keep rotation in the infinite loop
              }}
              transition={{ 
                opacity: { duration: 1.5 },
                scale: { duration: 2, ease: "easeOut" }, // Scale grows once and stays there
                rotate: { 
                  duration: 40, 
                  repeat: Infinity, 
                  ease: "linear" 
                }
              }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
            >
              {/* Inner Image Container */}
              <div className="relative w-full h-full max-w-[1000px] aspect-square">
                <Image 
                  src="/images/about.png" 
                  alt="Background Schematic" 
                  fill
                  className="object-contain filter hue-rotate-15"
                />
              </div>
            </motion.div>

            {cards.map((card, index) => (
              <ServiceCard key={index} card={card} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}