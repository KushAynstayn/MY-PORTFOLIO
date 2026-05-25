"use client";

import { motion } from "framer-motion";

import {
  Mail,
  Send,
  MapPin,
  Briefcase,
  Download,
  CheckCircle2,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

export default function Contact() {

  const formRef = useRef<HTMLFormElement>(null);

  const [isSending, setIsSending] = useState(false);

  const [success, setSuccess] = useState(false);

  const sendEmail = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    if (!formRef.current) return;

    setIsSending(true);

    try {

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSuccess(true);

      formRef.current.reset();

      setTimeout(() => {
        setSuccess(false);
      }, 4000);

    } catch (error) {

      console.log(error);

      alert("Failed to send message.");

    } finally {

      setIsSending(false);

    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050816] py-32 text-white"
    >

      {/* AURORA BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute inset-0 bg-[#050816]" />

        <div className="absolute -top-[20%] left-[10%] h-[500px] w-[500px] animate-aurora rounded-full bg-cyan-500/20 blur-[120px]" />

        <div className="absolute top-[30%] right-[5%] h-[450px] w-[450px] animate-auroraSlow rounded-full bg-purple-500/20 blur-[120px]" />

        <div className="absolute bottom-[-10%] left-[35%] h-[400px] w-[400px] animate-auroraReverse rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="absolute inset-0 bg-black/30" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >

          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-400">
            Contact
          </p>

          <h2 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
            Let’s Build{" "}

            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Something Amazing
            </span>

          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-400">
            Interested in collaborating, hiring, or discussing
            innovative systems and AI-powered solutions?
          </p>

        </motion.div>

        {/* MAIN GRID */}
        <div className="grid gap-10 lg:grid-cols-2">

          {/* LEFT PANEL */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
          >

            {/* BORDER ANIMATION */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl">

              <div className="absolute inset-0 rounded-3xl border border-cyan-400/10" />

              <div className="absolute inset-0 rounded-3xl">

                <div className="animate-border-horizontal absolute -left-full top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

                <div className="animate-border-vertical absolute right-0 top-[-100%] h-full w-[2px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent" />

                <div className="animate-border-horizontal absolute bottom-0 right-[-100%] h-[2px] w-full bg-gradient-to-l from-transparent via-purple-400 to-transparent" />

                <div className="animate-border-vertical absolute bottom-[-100%] left-0 h-full w-[2px] bg-gradient-to-t from-transparent via-purple-400 to-transparent" />

              </div>

            </div>

            {/* GLOW */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,255,0.08),transparent_40%)]" />

            <div className="relative z-10">

              {/* TERMINAL */}
              <div className="mb-8 flex items-center gap-3">

                <div className="h-3 w-3 animate-pulse rounded-full bg-cyan-400" />

                <span className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                  Secure Channel Active
                </span>

              </div>

              {/* TITLE */}
              <h3 className="mb-5 text-3xl font-black leading-tight">
                Ready to turn ideas into
                <span className="text-cyan-400"> real systems.</span>
              </h3>

              {/* DESC */}
              <p className="mb-10 leading-relaxed text-slate-400">
                I specialize in developing modern systems,
                workflow automation platforms, AI-assisted
                applications, and scalable web solutions.
              </p>

              {/* INFO */}
              <div className="space-y-5">

                {/* EMAIL */}
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-cyan-400/30">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                    <Mail size={22} />
                  </div>

                  <div>
                    <p className="mb-1 text-sm uppercase tracking-widest text-slate-500">
                      Email
                    </p>

                    <p className="font-medium text-white">
                      arado21.nja@gmail.com
                    </p>
                  </div>

                </div>

                {/* LOCATION */}
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-cyan-400/30">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                    <MapPin size={22} />
                  </div>

                  <div>
                    <p className="mb-1 text-sm uppercase tracking-widest text-slate-500">
                      Location
                    </p>

                    <p className="font-medium text-white">
                      Cebu City, Philippines
                    </p>
                  </div>

                </div>

                {/* AVAILABILITY */}
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-cyan-400/30">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                    <Briefcase size={22} />
                  </div>

                  <div>
                    <p className="mb-1 text-sm uppercase tracking-widest text-slate-500">
                      Availability
                    </p>

                    <p className="font-medium text-white">
                      Open for Job Opportunities & Freelance Projects
                    </p>
                  </div>

                </div>

              </div>

              {/* BUTTONS */}
              <div className="mt-10 flex flex-wrap gap-4">

                <a
                  href="/Resume-NJA.pdf"
                  download="Niño_John_Arado_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-cyan-400/30 bg-cyan-500/10 px-6 py-4 text-sm font-medium text-cyan-300 transition-all duration-300 hover:scale-105 hover:bg-cyan-500/20"
                >
                  Download Resume
                  <Download
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-y-1"
                  />
                </a>

                <div className="flex items-center gap-3 rounded-2xl border border-green-400/20 bg-green-500/10 px-6 py-4 text-sm font-medium text-green-300">

                  <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

                  Available Now

                </div>

              </div>

              {/* SOCIALS */}
              <div className="mt-12 flex gap-5">

                <a
                  href="https://github.com/KushAynstayn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  <FaGithub
                    size={22}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/niño-john-arado-31057a411"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  <FaLinkedin
                    size={22}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </a>

                <a
                  href="https://www.facebook.com/ksh.aynstayn21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  <FaFacebook
                    size={22}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </a>

              </div>

            </div>

          </motion.div>

          {/* RIGHT PANEL */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
          >

            {/* BORDER ANIMATION */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl">

              <div className="absolute inset-0 rounded-3xl border border-purple-400/10" />

              <div className="absolute inset-0 rounded-3xl">

                <div className="animate-border-horizontal absolute -left-full top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

                <div className="animate-border-vertical absolute right-0 top-[-100%] h-full w-[2px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent" />

                <div className="animate-border-horizontal absolute bottom-0 right-[-100%] h-[2px] w-full bg-gradient-to-l from-transparent via-purple-400 to-transparent" />

                <div className="animate-border-vertical absolute bottom-[-100%] left-0 h-full w-[2px] bg-gradient-to-t from-transparent via-purple-400 to-transparent" />

              </div>

            </div>

            {/* GLOW */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_40%)]" />

            <div className="relative z-10">

              {/* LABEL */}
              <div className="mb-8 flex items-center gap-3">

                <div className="h-3 w-3 animate-pulse rounded-full bg-purple-400" />

                <span className="text-sm uppercase tracking-[0.3em] text-purple-300">
                  Initialize Contact
                </span>

              </div>

              <div className="space-y-6">

                <div className="grid gap-6 md:grid-cols-2">

                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Your Name"
                    className="w-full rounded-2xl border border-white/10 bg-[#0b1120]/80 px-6 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400 focus:shadow-[0_0_25px_rgba(34,211,238,0.15)]"
                  />

                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="Your Email"
                    className="w-full rounded-2xl border border-white/10 bg-[#0b1120]/80 px-6 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400 focus:shadow-[0_0_25px_rgba(34,211,238,0.15)]"
                  />

                </div>

                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Project Subject"
                  className="w-full rounded-2xl border border-white/10 bg-[#0b1120]/80 px-6 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400 focus:shadow-[0_0_25px_rgba(34,211,238,0.15)]"
                />

                <textarea
                  rows={8}
                  name="message"
                  required
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-[#0b1120]/80 px-6 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400 focus:shadow-[0_0_25px_rgba(34,211,238,0.15)]"
                />

                {/* SUCCESS MESSAGE */}
                {success && (
                  <div className="flex items-center gap-3 rounded-2xl border border-green-400/20 bg-green-500/10 p-4 text-green-300">

                    <CheckCircle2 size={20} />

                    Transmission Successful

                  </div>
                )}

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 px-8 py-5 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(34,211,238,0.35)] disabled:opacity-70"
                >

                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                  <span className="relative z-10">
                    {isSending ? "Transmitting..." : "Send Message"}
                  </span>

                  <Send
                    size={18}
                    className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                  />

                </button>

              </div>

            </div>

          </motion.form>

        </div>

      </div>

    </section>
  );
}