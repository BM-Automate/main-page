"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PhoneInput } from "react-international-phone";
import { trackEvent } from "@/lib/fbpixel";

const categories = [
  "Web Platform",
  "Mobile App",
  "Custom Software",
  "AI Automation",
  "UI/UX Design",
  "E-commerce Store",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value) => {
    setForm({ ...form, phone: value || "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      // Only the category is sent — never the visitor's name, email or phone.
      trackEvent("Lead", { content_category: form.category });
      setSent(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="border-y border-white/10 bg-[#131720] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-3 text-[13.5px] font-semibold uppercase tracking-wider text-cyan-400"
        >
          {"// Get In Touch"}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          style={{ fontFamily: "var(--font-instrument-serif)" }}
          className="text-[40px] font-normal leading-tight tracking-tight sm:text-[52px]"
        >
          Tell us what you&apos;re building.
        </motion.h2>

        <div className="my-10 border-t border-white/10" />

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3
              style={{ fontFamily: "var(--font-instrument-serif)" }}
              className="mb-4 text-[26px] font-normal text-cyan-300"
            >
              Prefer to talk directly?
            </h3>
            <p className="mb-8 max-w-md text-[15px] text-gray-400">
              No account managers or ticket queues — you&apos;ll hear back from
              the person who&apos;ll actually work on your project.
            </p>

            <div className="max-w-md border-t border-white/10">
              <a
                href="mailto:contact@bmautomate.com"
                className="block border-b border-white/10 py-4 text-[15px] font-medium text-white transition-colors hover:text-cyan-300"
              >
                contact@bmautomate.com
              </a>
              <a
                href="tel:+923432647498"
                className="block border-b border-white/10 py-4 text-[15px] font-medium text-white transition-colors hover:text-cyan-300"
              >
                +92 343 2647498
              </a>
              <a
                href="https://wa.me/923432647498"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-4 text-[15px] font-medium text-white transition-colors hover:text-cyan-300"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {sent ? (
              <div className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-2xl border border-cyan-400/25 bg-[#161b26] p-8 text-center">
                <p
                  style={{ fontFamily: "var(--font-instrument-serif)" }}
                  className="mb-2 text-[26px] text-cyan-300"
                >
                  Thanks — got it.
                </p>
                <p className="text-[14.5px] text-gray-400">
                  We&apos;ll get back to you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-2 block text-[12px] font-semibold uppercase tracking-wider text-cyan-400">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-lg border border-white/15 bg-white px-4 py-3 text-[15px] text-neutral-900 placeholder-neutral-500 outline-none transition-colors focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[12px] font-semibold uppercase tracking-wider text-cyan-400">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full rounded-lg border border-white/15 bg-white px-4 py-3 text-[15px] text-neutral-900 placeholder-neutral-500 outline-none transition-colors focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[12px] font-semibold uppercase tracking-wider text-cyan-400">
                    Phone Number
                  </label>
                  <PhoneInput
                    defaultCountry="us"
                    value={form.phone}
                    onChange={handlePhoneChange}
                    className="w-full"
                    inputClassName="!w-full"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[12px] font-semibold uppercase tracking-wider text-cyan-400">
                    What do you need?
                  </label>
                  <select
                    name="category"
                    required
                    value={form.category}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/15 bg-white px-4 py-3 text-[15px] text-neutral-900 outline-none transition-colors focus:border-cyan-400"
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-[12px] font-semibold uppercase tracking-wider text-cyan-400">
                    What are you building?
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="A couple of sentences is enough to start."
                    className="w-full resize-none rounded-lg border border-white/15 bg-white px-4 py-3 text-[15px] text-neutral-900 placeholder-neutral-500 outline-none transition-colors focus:border-cyan-400"
                  />
                </div>

                {error && (
                  <p className="text-[13.5px] font-medium text-red-400">{error}</p>
                )}

                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={{ scale: submitting ? 1 : 1.03, y: submitting ? 0 : -2 }}
                  whileTap={{ scale: submitting ? 1 : 0.97 }}
                  className="w-full rounded-full bg-gradient-to-r from-cyan-400 to-white px-7 py-3.5 text-[15.5px] font-semibold text-black shadow-[0_0_30px_-8px_rgba(34,211,238,0.6)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
