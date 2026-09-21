"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { processSteps as steps } from "@/lib/process";

const AUTO_MS = 4000;

export default function Process() {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % steps.length);
    }, AUTO_MS);
    return () => clearInterval(timerRef.current);
  }, []);

  const select = (i) => {
    setActive(i);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, AUTO_MS);
  };

  return (
    <section id="process" className="border-y border-white/10 bg-[#131720] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-[13.5px] font-semibold uppercase tracking-wider text-cyan-400">
          How We Work
        </p>
        <h2 className="mb-12 max-w-xl text-[28px] font-extrabold tracking-tight text-white sm:text-[36px]">
          From idea to launch, six steps.
        </h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
          {/* step list */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-1.5 rounded-2xl border border-white/10 bg-[#161b26] p-3"
          >
            {steps.map((s, i) => (
              <button
                key={s.title}
                onClick={() => select(i)}
                className="relative text-left"
              >
                {active === i ? (
                  <motion.div
                    layoutId="active-step-pill"
                    transition={{ type: "spring", stiffness: 350, damping: 32 }}
                    className="relative flex items-center justify-between overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 to-white px-4 py-3.5 font-bold text-black"
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="h-4 w-4">{s.icon}</span>
                      {s.title}
                    </span>
                    <span className="text-[11px]">0{i + 1}</span>

                    <motion.span
                      key={active}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: AUTO_MS / 1000, ease: "linear" }}
                      className="absolute bottom-0 left-0 right-0 h-[3px] origin-left bg-black/25"
                    />
                  </motion.div>
                ) : (
                  <div
                    className={`group flex items-center justify-between rounded-xl px-4 py-3.5 text-gray-400 transition-colors hover:bg-white/5 hover:text-white ${
                      i !== steps.length - 1 ? "border-b border-white/10" : ""
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="h-4 w-4 text-gray-600 transition-colors group-hover:text-cyan-300">
                        {s.icon}
                      </span>
                      {s.title}
                    </span>
                    <span className="text-[11px] text-gray-600">0{i + 1}</span>
                  </div>
                )}
              </button>
            ))}
          </motion.div>

          {/* content panel */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-[#161b26] p-5 sm:p-6"
          >
            <div className="relative mb-6 h-[220px] overflow-hidden rounded-xl border border-white/10 bg-[#0d1117] sm:h-[280px]">
              <Image
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=70&auto=format&fit=crop"
                // Decorative background under gradient overlays — empty alt is intentional.
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover opacity-50"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0d1117]/60 via-[#0d1117]/70 to-[#0d1117]" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(99,102,241,0.20),transparent_60%)]" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    className="absolute h-44 w-44 rounded-full opacity-40 blur-md sm:h-52 sm:w-52"
                    style={{
                      background:
                        "conic-gradient(from 0deg, #22d3ee, #ffffff, #22d3ee)",
                      WebkitMaskImage:
                        "radial-gradient(closest-side, transparent 78%, black 80%)",
                      maskImage:
                        "radial-gradient(closest-side, transparent 78%, black 80%)",
                    }}
                  />

                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                    className="absolute h-40 w-40 rounded-full border border-dashed border-cyan-400/25 sm:h-48 sm:w-48"
                  />
                  <motion.span
                    animate={{ rotate: -360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute h-28 w-28 rounded-full border border-dashed border-white/25 sm:h-32 sm:w-32"
                  />
                  <motion.span
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute h-24 w-24 rounded-full bg-cyan-400/20 blur-2xl"
                  />

                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    className="absolute h-40 w-40 sm:h-48 sm:w-48"
                  >
                    <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-white shadow-[0_0_10px_3px_rgba(34,211,238,0.7)]" />
                  </motion.span>

                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border border-cyan-400/30 bg-[#0d1117] text-cyan-300 shadow-[0_0_50px_-8px_rgba(34,211,238,0.6)] sm:h-24 sm:w-24"
                  >
                    <div className="h-9 w-9 sm:h-11 sm:w-11">{steps[active].icon}</div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                {steps.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === active ? "w-5 bg-cyan-300" : "w-1.5 bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="mb-2 text-[20px] font-bold text-white">
                  {String(active + 1).padStart(2, "0")} — {steps[active].title}
                </h3>
                <p className="text-[15px] leading-relaxed text-gray-400">{steps[active].desc}</p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
