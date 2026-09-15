"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const testimonials = [
  { quote: "BM Automate rebuilt our entire booking system in under a month. It just works.", author: "Ayesha K., Salon Owner" },
  { quote: "Direct communication with the actual developer changed everything for us.", author: "Hamza R., Retail Founder" },
  { quote: "The AI automation they built saves my team 20+ hours every week.", author: "Sara M., Operations Lead" },
  { quote: "Fixed price, on time, no surprises. Exactly what they promised.", author: "Bilal A., E-commerce Owner" },
  { quote: "Professional, modern design and fast turnaround. Highly recommend.", author: "Fatima N., Startup Founder" },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (i) => setIndex((i + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-[13.5px] font-semibold uppercase tracking-wider text-cyan-400">
          Client Testimonials
        </p>
        <h2 className="mb-12 max-w-xl text-[28px] font-extrabold tracking-tight text-white sm:text-[36px]">
          Don&apos;t take our word for it.
        </h2>

        <div className="flex items-center gap-4">
          <button
            aria-label="Previous"
            onClick={() => goTo(index - 1)}
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#161b26] text-xl text-white transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
          >
            ‹
          </button>

          <div className="relative h-[150px] flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 rounded-2xl border border-white/10 bg-[#161b26] p-8"
              >
                <p className="mb-4 text-[17px] italic text-gray-200">&ldquo;{testimonials[index].quote}&rdquo;</p>
                <div className="text-[14.5px] font-bold text-gray-400">
                  — {testimonials[index].author}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            aria-label="Next"
            onClick={() => goTo(index + 1)}
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#161b26] text-xl text-white transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
          >
            ›
          </button>
        </div>

        <div className="mt-5 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === index ? "bg-cyan-400" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
