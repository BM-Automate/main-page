"use client";

import { motion } from "framer-motion";
import { whyUsItems as items } from "@/lib/whyus";

export default function WhyUs() {
  return (
    <section id="why" className="border-y border-white/10 bg-[#131720] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-[13.5px] font-semibold uppercase tracking-wider text-cyan-400">
          Why Choose Us
        </p>
        <h2 className="mb-12 max-w-xl text-[28px] font-extrabold tracking-tight text-white sm:text-[36px]">
          No account managers. No surprises.
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-[#161b26] p-7"
            >
              <span className="text-[14px] font-extrabold text-white">{it.num}</span>
              <h3 className="mb-2 mt-3 text-[17px] font-bold text-white">{it.title}</h3>
              <p className="text-[14.5px] text-gray-400">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
