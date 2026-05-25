"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    // Fire our serverless api handler automatically when the layout mounts
    fetch("/api/views", { method: "POST" })
      .then((res) => {
        if (!res.ok) throw new Error("Analytics channel dropped.");
        return res.json();
      })
      .then((data) => {
        if (typeof data.views === "number") {
          setViews(data.views);
        }
      })
      .catch((err) => console.error("Telemetry link exception:", err));
  }, []);

  return (
    <footer className="border-t border-white/10 bg-[#050816] py-10 text-center text-slate-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center justify-center gap-4">
        
        {/* CYBERPUNK VIEW COUNTER METRIC */}
        {views !== null && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-2 rounded border border-cyan-500/30 bg-cyan-500/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
          >
            {/* Pulsing signal status indicator */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            
            <span>SYSTEM INITIALIZED // VIEWS:</span>
            <span className="font-mono font-black text-white bg-cyan-950/50 px-1.5 py-0.5 rounded border border-cyan-500/20">
              {views.toLocaleString()}
            </span>
          </motion.div>
        )}

        {/* METADATA WRAPPERS */}
        <div className="flex flex-col gap-1 mt-2">
          <p className="text-sm">
            © {new Date().getFullYear()} Niño John Arado
          </p>
          <p className="text-xs text-slate-500 font-mono tracking-wider">
            DESIGNED & DEVELOPED WITH AI-ASSISTED WORKFLOWS
          </p>
        </div>
        
      </div>
    </footer>
  );
}