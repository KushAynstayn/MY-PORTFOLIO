"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, 
  Code2, 
  Briefcase, 
  Layers, 
  Mail, 
  Home 
} from "lucide-react";

// Navbar.tsx line 14
const navLinks = [
  { name: "Home", href: "#home", icon: Home }, // Changed from "#" to "#home"
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code2 },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: Layers },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => section !== null);

    const handleScroll = () => {
      // Determine the logical scroll "trigger point" (e.g., 200px from the top of the screen)
      const scrollPosition = window.scrollY + 200;

      let currentSectionName = "Home";

      for (const section of sections) {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.getBoundingClientRect().height;

        // Check if our trigger point falls inside this section's vertical boundaries
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          const id = section.getAttribute("id");
          const activeLink = navLinks.find((link) => link.href === `#${id}`);
          if (activeLink) {
            currentSectionName = activeLink.name;
          }
          break; // Found the active section, stop checking the rest
        }
      }

      setActive(currentSectionName);
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Run once on mount to set initial highlight state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* DESKTOP NAVBAR: Floating Cyber-Dock */}
      <nav className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-[100]">
        <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-2xl shadow-[0_0_20px_rgba(34,211,238,0.15)]">
          {navLinks.map((link) => {
            const IsActive = active === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActive(link.name)}
                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-500 ${
                  IsActive ? "text-cyan-400" : "text-slate-400 hover:text-white"
                }`}
              >
                {IsActive && (
                  <motion.div
                    layoutId="desktop-active"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* MOBILE NAVBAR: Bottom Floating Dock (image_86bb70.png style) */}
      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-[400px]">
        <div className="flex justify-around items-center bg-black/60 backdrop-blur-3xl border border-white/10 rounded-3xl p-2 shadow-2xl">
          {navLinks.map((link) => {
            const IsActive = active === link.name;
            const Icon = link.icon;
            
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActive(link.name)}
                className="relative flex flex-col items-center justify-center p-3"
              >
                <AnimatePresence>
                  {IsActive && (
                    <motion.span
                      layoutId="mobile-active"
                      className="absolute inset-0 bg-cyan-500/20 rounded-2xl border border-cyan-400/30"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                </AnimatePresence>
                
                <Icon 
                  size={20} 
                  className={`relative z-10 transition-colors duration-300 ${
                    IsActive ? "text-cyan-400" : "text-slate-500"
                  }`} 
                />
                
                {IsActive && (
                  <motion.span 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[10px] text-cyan-400 font-bold mt-1 uppercase tracking-tighter"
                  >
                    {link.name}
                  </motion.span>
                )}
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}