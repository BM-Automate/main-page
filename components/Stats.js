"use client";

import { motion } from "framer-motion";
import Counter from "./Counter";

const stats = [
  { render: () => <Counter to={30} suffix="+" />, label: "Projects Shipped" },
  { render: () => <Counter to={4} prefix="" suffix=" WKS" />, label: "Avg. Time to First Release" },
  { render: () => <Counter to={98} suffix="%" />, label: "Clients Who'd Hire Us Again" },
  { render: () => <Counter to={0} />, label: "Layers Between You & The Build" },
];

export default function Stats() {
  return (
    <section className="border-y border-white/10 bg-[#131720] py-12 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 text-center sm:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <span className="block bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-[34px] font-extrabold text-transparent">
              {s.render()}
            </span>
            <span className="text-[13.5px] text-gray-400">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
