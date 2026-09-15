"use client";

import { motion } from "framer-motion";

const items = [
  {
    num: "01",
    title: "Senior hands on every build",
    desc: "No junior devs learning on your budget — every line is written or reviewed by a senior engineer.",
  },
  {
    num: "02",
    title: "Fixed pricing, no surprises",
    desc: "You get a scope and a number up front. What we quote is what you pay — no hourly creep.",
  },
  {
    num: "03",
    title: "Direct access, always",
    desc: "You talk straight to the person building your product — not a rotating cast of account managers.",
  },
  {
    num: "04",
    title: "Support after launch",
    desc: "Shipping isn't the finish line. We stick around to fix, tune and extend what we built.",
  },
];

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
