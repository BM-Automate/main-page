"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ease-in-out ${
          scrolled ? "top-4 w-[calc(100%-2rem)] max-w-6xl" : "top-0 w-full"
        }`}
      >
        <div
          className={`relative overflow-hidden bg-[#0d1117]/90 backdrop-blur-md transition-all duration-300 ease-in-out ${
            scrolled
              ? "rounded-full border border-white/10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]"
              : "rounded-none border-b border-white/10"
          }`}
        >
          <motion.div
            style={{ scaleX }}
            className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-cyan-400 to-white"
          />

          <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
            <a href="#home" className="flex items-center gap-2.5 font-extrabold tracking-wide text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-white text-sm text-black">
                BM
              </span>
              <span className="text-[15px]">AUTOMATE</span>
            </a>

            <nav className="hidden gap-8 md:flex">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[14.5px] font-medium text-gray-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.96 }}
                className="hidden rounded-full bg-gradient-to-r from-cyan-400 to-white px-5 py-2.5 text-[14.5px] font-semibold text-black sm:inline-flex"
              >
                Book a Call
              </motion.a>
              <button
                aria-label="Toggle menu"
                onClick={() => setOpen((v) => !v)}
                className="flex flex-col gap-[5px] p-1.5 md:hidden"
              >
                <motion.span
                  animate={open ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
                  className="h-0.5 w-5 bg-white"
                />
                <motion.span
                  animate={open ? { opacity: 0 } : { opacity: 1 }}
                  className="h-0.5 w-5 bg-white"
                />
                <motion.span
                  animate={open ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
                  className="h-0.5 w-5 bg-white"
                />
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute left-4 right-4 top-[calc(100%+10px)] flex flex-col gap-1 rounded-2xl border border-white/10 bg-[#0d1117]/95 p-4 shadow-xl backdrop-blur-md md:hidden"
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-2 text-[15px] font-medium text-gray-300 transition-colors hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-gradient-to-r from-cyan-400 to-white px-5 py-2.5 text-center text-[14.5px] font-semibold text-black"
              >
                Book a Call
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <div className="h-[76px]" />
    </>
  );
}
