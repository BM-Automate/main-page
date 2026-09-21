"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/services";

const icons = {
  "Web Platforms": (
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 9h18" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 21h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  "Mobile Apps": (
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M11 18h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  "Custom Software": (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M4 17l4-9 4 6 3-4 5 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="4" cy="17" r="1.4" fill="currentColor" />
      <circle cx="20" cy="17" r="1.4" fill="currentColor" />
    </svg>
  ),
  "AI Automation": (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 3v3M12 18v3M21 12h-3M6 12H3M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1M18.4 18.4l-2.1-2.1M7.7 7.7 5.6 5.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  "UI/UX Design": (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 3a4.5 4.5 0 0 0 0 9 2 2 0 0 1 0 4 2.5 2.5 0 0 0 0 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="8.5" cy="10.5" r="1" fill="currentColor" />
      <circle cx="15" cy="8.5" r="1" fill="currentColor" />
    </svg>
  ),
  "E-commerce Stores": (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M6 8h12l-1 12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
};

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-[13.5px] font-semibold uppercase tracking-wider text-cyan-400">
          What We Build
        </p>
        <h2 className="mb-12 max-w-xl text-[28px] font-extrabold tracking-tight text-white sm:text-[36px]">
          One team, every layer of your product.
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#161b26]"
            >
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 + 0.15 }}
                className="absolute left-0 right-0 top-0 h-[2px] origin-left bg-gradient-to-r from-cyan-400 to-white"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {s.href ? (
                <Link href={s.href} className="relative z-10 block p-7">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[10px] bg-cyan-400/10 text-cyan-300 transition-colors duration-300 group-hover:bg-black/10 group-hover:text-black">
                    <div className="h-[22px] w-[22px]">{icons[s.title]}</div>
                  </div>
                  <h3 className="mb-2 text-[17px] font-bold text-white transition-colors duration-300 group-hover:text-black">
                    {s.title}
                  </h3>
                  <p className="text-[14.5px] text-gray-400 transition-colors duration-300 group-hover:text-black/70">
                    {s.desc}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-cyan-300 transition-colors duration-300 group-hover:text-black">
                    Learn more
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              ) : (
                <div className="relative z-10 p-7">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[10px] bg-cyan-400/10 text-cyan-300 transition-colors duration-300 group-hover:bg-black/10 group-hover:text-black">
                    <div className="h-[22px] w-[22px]">{icons[s.title]}</div>
                  </div>
                  <h3 className="mb-2 text-[17px] font-bold text-white transition-colors duration-300 group-hover:text-black">
                    {s.title}
                  </h3>
                  <p className="text-[14.5px] text-gray-400 transition-colors duration-300 group-hover:text-black/70">
                    {s.desc}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
