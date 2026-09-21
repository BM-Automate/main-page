"use client";

import { motion } from "framer-motion";

const platforms = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/bm_automate/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <rect x="8" y="8" width="8" height="8" rx="2.5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="12" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="15.2" cy="8.8" r="0.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61594439213639",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M13.5 8h-1a2 2 0 0 0-2 2v1.5H9v2h1.5V18h2v-4.5H14l.3-2h-1.8V10c0-.28.22-.5.5-.5h1.5V8Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/145188924",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="9" cy="9" r="0.9" fill="currentColor" />
        <path d="M9 11.5v5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path
          d="M12 17v-3.2c0-1.3.9-2.3 2.1-2.3s2.1 1 2.1 2.3V17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M12 13.3V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    href: "https://x.com/muddu2769",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M8.5 8.5l7 7M15.5 8.5l-7 7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/BM-Automate",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M12 7c-2.76 0-5 2.24-5 5 0 2.21 1.44 4.09 3.42 4.75.25.05.34-.11.34-.24v-.86c-1.39.3-1.68-.6-1.68-.6-.23-.58-.56-.74-.56-.74-.46-.31.03-.3.03-.3.5.04.77.52.77.52.45.77 1.17.55 1.46.42.05-.33.18-.55.32-.67-1.11-.13-2.28-.56-2.28-2.47 0-.55.2-.99.52-1.34-.05-.13-.22-.64.05-1.32 0 0 .42-.13 1.38.51.4-.11.83-.17 1.26-.17.43 0 .86.06 1.26.17.96-.65 1.38-.51 1.38-.51.27.68.1 1.19.05 1.32.32.35.52.79.52 1.34 0 1.92-1.17 2.34-2.29 2.46.18.16.34.47.34.94v1.39c0 .13.09.29.35.24A5.01 5.01 0 0 0 17 12c0-2.76-2.24-5-5-5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {platforms.map((p, i) => (
        <motion.a
          key={p.name}
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={p.name}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: [0, -5, 0],
          }}
          viewport={{ once: true }}
          transition={{
            opacity: { duration: 0.4, delay: i * 0.08 },
            y: {
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.25,
            },
          }}
          whileHover={{ scale: 1.15, y: -6 }}
          whileTap={{ scale: 0.94 }}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#161b26] text-gray-400 shadow-[0_0_14px_-8px_rgba(34,211,238,0.5)] transition-[color,border-color,box-shadow] duration-300 hover:border-cyan-400/40 hover:text-cyan-300 hover:shadow-[0_0_22px_-6px_rgba(34,211,238,0.7)]"
        >
          <span className="h-5 w-5">{p.icon}</span>
        </motion.a>
      ))}
    </div>
  );
}
