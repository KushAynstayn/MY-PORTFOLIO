"use client";

import { TypeAnimation } from "react-type-animation";

export default function TypingText() {
  return (
    <TypeAnimation
      sequence={[
        "Full-Stack Web Developer",
        2000,
        "Systems Analyst",
        2000,
        "QA Tester",
        2000,
        "Backend Developer",
        2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="text-cyan-400 font-semibold"
    />
  );
}