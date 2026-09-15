"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import LiveTicker from "./LiveTicker";
import Counter from "./Counter";

const chartPath =
  "M0,120 L20,110 L40,95 L60,105 L80,80 L100,90 L120,60 L140,72 L160,45 L180,58 L200,35 L220,50 L240,25 L260,40 L280,15 L300,30 L320,10 L340,22 L360,5 L380,0";

const chartPoints = [
  [0, 120], [20, 110], [40, 95], [60, 105], [80, 80], [100, 90], [120, 60],
  [140, 72], [160, 45], [180, 58], [200, 35], [220, 50], [240, 25], [260, 40],
  [280, 15], [300, 30], [320, 10], [340, 22], [360, 5], [380, 0],
];

const stats = [
  { label: "TASKS DONE", value: 92, color: "cyan" },
  { label: "UPTIME", value: 99, color: "white" },
  { label: "ACCURACY", value: 97, color: "cyan" },
];

export default function DashboardWidget() {
  const [reqIn, setReqIn] = useState(1.2);
  const [resOut, setResOut] = useState(980);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
    stiffness: 200,
    damping: 20,
  });
  const shineX = useTransform(x, [-0.5, 0.5], [0, 100]);
  const shineY = useTransform(y, [-0.5, 0.5], [0, 100]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setReqIn((v) => Math.round((v + (Math.random() * 0.3 - 0.15)) * 10) / 10);
      setResOut((v) => Math.round(v + (Math.random() * 40 - 20)));
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ perspective: 1200 }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{
        opacity: 1,
        scale: 1,
        boxShadow: [
          "0 0 70px -20px rgba(34,211,238,0.35)",
          "0 0 90px -15px rgba(255,255,255,0.35)",
          "0 0 70px -20px rgba(34,211,238,0.35)",
        ],
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      transition={{
        opacity: { duration: 0.7, ease: "easeOut", delay: 0.15 },
        scale: { duration: 0.7, ease: "easeOut", delay: 0.15 },
        boxShadow: { duration: 5, repeat: Infinity, ease: "easeInOut" },
      }}
      className="relative rounded-3xl border border-cyan-400/25 bg-[#131720] p-5 sm:p-6"
    >
      <motion.div
        style={{
          background: useTransform(
            [shineX, shineY],
            ([sx, sy]) =>
              `radial-gradient(circle at ${sx}% ${sy}%, rgba(255,255,255,0.08), transparent 55%)`
          ),
        }}
        className="pointer-events-none absolute inset-0 rounded-3xl"
      />
      {/* corner accents */}
      <span className="absolute left-3 top-3 h-3 w-3 border-l-2 border-t-2 border-cyan-400/60" />
      <span className="absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-white/60" />

      {/* title */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-[13px] font-bold tracking-[0.15em] text-cyan-300">
          AUTOMATION
        </span>
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
          </span>
          <span className="text-[10px] font-semibold tracking-wider text-cyan-400">LIVE</span>
        </div>
      </div>

      {/* chart */}
      <div className="mb-5 rounded-xl border border-white/10 bg-black/40 p-4">
        <div className="flex gap-2">
          <div className="flex flex-col justify-between py-1 text-[10px] text-gray-500">
            <span>100%</span>
            <span>75%</span>
            <span>50%</span>
            <span>25%</span>
            <span>0%</span>
          </div>
          <svg viewBox="0 0 380 130" className="h-[110px] w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {[0, 32.5, 65, 97.5, 130].map((y) => (
              <line key={y} x1="0" y1={y} x2="380" y2={y} stroke="white" strokeOpacity="0.06" />
            ))}
            <motion.path
              d={`${chartPath} L380,130 L0,130 Z`}
              fill="url(#chartFill)"
              stroke="none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.path
              d={chartPath}
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#glow)"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            />
            {/* glowing pulse that continuously travels along the line —
                rises when the line climbs, dips when it falls */}
            <motion.circle
              r="5"
              fill="#fff"
              filter="url(#glow)"
              animate={{
                cx: chartPoints.map((p) => p[0]),
                cy: chartPoints.map((p) => p[1]),
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </div>
        <div className="mt-1.5 flex justify-between pl-8 text-[10px] text-gray-500">
          <span>00:00</span>
          <span>06:00</span>
          <span>12:00</span>
          <span>18:00</span>
          <span>24:00</span>
        </div>
      </div>

      {/* stat tiles */}
      <div className="mb-5 grid grid-cols-3 gap-2.5">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 + i * 0.12, ease: "backOut" }}
            className={`rounded-lg border p-2.5 text-center ${
              s.color === "cyan" ? "border-cyan-400/25" : "border-white/25"
            }`}
          >
            <div className="mb-1 text-[9px] font-semibold tracking-wide text-gray-400">
              {s.label}
            </div>
            <div
              className={`text-[17px] font-extrabold ${
                s.color === "cyan" ? "text-cyan-300" : "text-white"
              }`}
            >
              <Counter to={s.value} suffix="%" duration={1.4} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* live log ticker */}
      <div className="mb-5">
        <LiveTicker />
      </div>

      {/* data flow */}
      <div className="rounded-xl border border-white/10 p-3.5">
        <div className="mb-3 text-[10px] font-semibold tracking-wide text-gray-400">
          DATA FLOW
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="rounded-lg border border-cyan-400/25 px-3 py-2">
            <div className="text-[9px] text-gray-400">REQUESTS IN</div>
            <motion.div
              key={reqIn}
              initial={{ opacity: 0.4 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-[14px] font-bold text-cyan-300"
            >
              {reqIn.toFixed(1)}k/s
            </motion.div>
          </div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-dashed border-cyan-400/40"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-xs">
              <span className="text-white">↑</span>
              <span className="text-cyan-400">↓</span>
            </div>
          </motion.div>

          <div className="rounded-lg border border-white/25 px-3 py-2 text-right">
            <div className="text-[9px] text-gray-400">RESPONSES</div>
            <motion.div
              key={resOut}
              initial={{ opacity: 0.4 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-[14px] font-bold text-white"
            >
              {resOut}/s
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
    </div>
  );
}
