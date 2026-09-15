"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const logs = [
  { icon: "✓", text: "workflow deployed — 0.8s" },
  { icon: "→", text: "webhook received /new-lead" },
  { icon: "✓", text: "lead enriched — 0.4s" },
  { icon: "✓", text: "AI reply drafted — 1.1s" },
  { icon: "✓", text: "CRM synced" },
  { icon: "→", text: "task queued" },
];

export default function LiveTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % logs.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  const current = logs[index];

  return (
    <div className="flex items-center gap-2 overflow-hidden rounded-lg border border-white/10 bg-black/40 px-3 py-2 font-mono text-[11.5px]">
      <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-1.5 truncate text-gray-300"
        >
          <span
            className={current.icon === "✓" ? "text-cyan-400" : "text-white"}
          >
            {current.icon}
          </span>
          {current.text}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
