"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import DashboardWidget from "./DashboardWidget";

export default function Hero() {
  const sectionRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-[#05060a] py-20 sm:py-24"
      style={{ "--mx": "50%", "--my": "20%" }}
    >
      {/* mouse-follow spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-[background] duration-300"
        style={{
          background:
            "radial-gradient(500px circle at var(--mx) var(--my), rgba(255,255,255,0.07), transparent 60%)",
        }}
      />

      {/* slow drifting ambient light, moves on its own even without the mouse */}
      <motion.div
        className="pointer-events-none absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-white/5 blur-[100px]"
        animate={{ x: [0, 80, 0], y: [0, 60, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-white/5 blur-[100px]"
        animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-[13.5px] font-semibold uppercase tracking-wider text-cyan-400"
          >
            Web · App · AI Automation Studio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[32px] font-extrabold leading-tight tracking-tight text-white sm:text-[42px] lg:text-[52px]"
          >
            Software built to feel as good as it performs.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-lg text-[17px] text-gray-400"
          >
            We design and build web platforms, mobile apps, custom software
            and AI automation for founders who need it done right the first
            time — no bloated agencies, no layers, no guesswork.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3.5"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-gradient-to-r from-cyan-400 to-white px-7 py-3.5 text-[15.5px] font-semibold text-black shadow-[0_0_30px_-8px_rgba(34,211,238,0.6)]"
            >
              Book a Call
            </motion.a>
            <motion.a
              href="#work"
              whileHover={{ scale: 1.04, y: -2, backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-white/15 px-7 py-3.5 text-[15.5px] font-semibold text-white"
            >
              See Our Work
            </motion.a>
          </motion.div>
        </motion.div>

        <DashboardWidget />
      </div>
    </section>
  );
}
