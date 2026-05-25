"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

import { useEffect, useState } from "react";

interface Props {
  title: string;
  description: string;
  images: string[];
  tech: string[];
  status: string;
  featured?: boolean;
  github: string;
  live: string;
}

export default function ProjectCard({
  title,
  description,
  images,
  tech,
  status,
  featured,
}: Props) {
  const [currentImage, setCurrentImage] = useState(0);

  // MODAL STATE
  const [isOpen, setIsOpen] = useState(false);

  // MODAL IMAGE INDEX
  const [modalImage, setModalImage] = useState(0);

  // AUTO SLIDE PREVIEW
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // ESC TO CLOSE
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }

      if (e.key === "ArrowRight") {
        nextImage();
      }

      if (e.key === "ArrowLeft") {
        prevImage();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  });

  const nextImage = () => {
    setModalImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setModalImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const openModal = () => {
    setModalImage(currentImage);
    setIsOpen(true);
  };

  return (
    <>
      {/* CARD */}
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        onClick={openModal}
        className={`
          group
          relative
          cursor-pointer
          overflow-hidden
          rounded-xl
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          transition-all
          duration-500
          hover:border-cyan-400/40
          hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]

          ${featured ? "md:col-span-2" : ""}
        `}
      >
        {/* CYBERPUNK GLOW */}
        <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08),transparent_70%)]" />
        </div>

        {/* SCAN LINE */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute h-[2px] w-full bg-cyan-400/20 animate-[scan_4s_linear_infinite]" />
        </div>

        {/* IMAGE PREVIEW */}
        <div className="relative h-[420px] overflow-hidden">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={title}
              fill
              className={`
                object-cover
                transition-all
                duration-1000
                group-hover:scale-105

                ${
                  currentImage === index
                    ? "opacity-100"
                    : "opacity-0"
                }
              `}
            />
          ))}

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/20 to-transparent" />

          {/* STATUS */}
          <div className="absolute left-5 top-5">
            <div className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-300 backdrop-blur-xl">
              {status}
            </div>
          </div>

          {/* CLICK VIEW */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100">
            <div className="rounded-full border border-cyan-400/30 bg-black/40 px-6 py-3 text-sm font-semibold tracking-widest text-cyan-300 backdrop-blur-xl">
              VIEW PROJECT
            </div>
          </div>

          {/* IMAGE DOTS */}
          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`
                  h-2 rounded-full transition-all duration-300

                  ${
                    currentImage === index
                      ? "w-8 bg-cyan-400"
                      : "w-2 bg-white/40"
                  }
                `}
              />
            ))}
          </div>
        </div>

        {/* CONTENT */}
        <div className="relative p-7">
          {/* TITLE */}
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-2xl font-black text-white">
              {title}
            </h3>

            <ArrowUpRight className="text-cyan-400 transition-transform duration-300 group-hover:rotate-45" />
          </div>

          {/* DESCRIPTION */}
          <p className="mb-7 leading-relaxed text-slate-400">
            {description}
          </p>

          {/* TECH STACK */}
          <div className="flex flex-wrap gap-3">
            {tech.map((item) => (
              <span
                key={item}
                className="
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-cyan-500/10
                  px-4
                  py-2
                  text-sm
                  text-cyan-300
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:border-cyan-400/40
                  hover:bg-cyan-500/20
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* FULLSCREEN MODAL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              bg-black/70
              backdrop-blur-xl
              p-6
            "
            onClick={() => setIsOpen(false)}
          >
            {/* MODAL CONTENT */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                w-full
                max-w-6xl
                overflow-hidden
                rounded-2xl
                border
                border-cyan-400/20
                bg-[#050816]/90
                shadow-[0_0_60px_rgba(0,255,255,0.15)]
              "
            >
              {/* IMAGE */}
              <div className="relative h-[80vh] w-full">
                <Image
                  src={images[modalImage]}
                  alt={title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setIsOpen(false)}
                className="
                  absolute
                  right-5
                  top-5
                  rounded-full
                  border
                  border-white/10
                  bg-black/40
                  p-3
                  text-white
                  backdrop-blur-xl
                  transition
                  hover:border-cyan-400/40
                  hover:text-cyan-300
                "
              >
                <X size={22} />
              </button>

              {/* PREV BUTTON */}
              <button
                onClick={prevImage}
                className="
                  absolute
                  left-5
                  top-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-white/10
                  bg-black/40
                  p-4
                  text-white
                  backdrop-blur-xl
                  transition
                  hover:border-cyan-400/40
                  hover:text-cyan-300
                "
              >
                <ChevronLeft size={30} />
              </button>

              {/* NEXT BUTTON */}
              <button
                onClick={nextImage}
                className="
                  absolute
                  right-5
                  top-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-white/10
                  bg-black/40
                  p-4
                  text-white
                  backdrop-blur-xl
                  transition
                  hover:border-cyan-400/40
                  hover:text-cyan-300
                "
              >
                <ChevronRight size={30} />
              </button>

              {/* IMAGE COUNTER */}
              <div
                className="
                  absolute
                  bottom-5
                  left-1/2
                  -translate-x-1/2
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-black/40
                  px-5
                  py-2
                  text-sm
                  text-cyan-300
                  backdrop-blur-xl
                "
              >
                {modalImage + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}