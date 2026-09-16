"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Digital Classroom Insights",
    desc: "A virtual classroom that reads the room — on-device emotion AI turns live video into real-time engagement signals, so instructors always know who's tuning out. No video ever leaves the device.",
    metric: "82% avg engagement",
    image: "/work/digital-classroom-insights.png",
    alt: "Digital Classroom Insights dashboard showing real-time student engagement analytics from on-device emotion AI",
    aspect: "1749/604",
    tech: ["Python", "TensorFlow.js", "WebRTC", "Custom ML Model"],
    link: "https://www.dcistudents.app/",
  },
  {
    title: "Woodsnery",
    desc: "E-commerce storefront for a custom furniture brand — doors, interiors, wall paneling and shelving, built to convert. A Node.js and MongoDB service handles custom quote requests and live inventory sync behind the Shopify storefront, with SSL encryption and PCI-compliant checkout throughout.",
    metric: "Live storefront",
    image: "/work/woodsnery.png",
    alt: "Woodsnery e-commerce storefront for custom doors, interiors and wall paneling",
    aspect: "1656/757",
    tech: ["Shopify", "Liquid", "Node.js", "MongoDB", "JavaScript"],
    link: "https://www.woodnery.store",
  },
  {
    title: "AI Admin Panel Builder",
    desc: "A dynamic, AI-powered admin panel generator that instantly builds a full-featured management dashboard for any business — schools, colleges or e-commerce stores. Just describe what you need and the system generates custom fields, categories and CRUD operations on its own. We also build fully custom, manually-coded admin panels for teams that want complete control.",
    metric: "Any business, instantly",
    image: "/work/ai-admin-panel-v2.png",
    alt: "AI Admin Panel Builder interface generating a custom business management dashboard",
    aspect: "1858/792",
    tech: ["Node.js", "Express", "MongoDB", "React", "JWT", "Redis"],
    link: null,
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-[13.5px] font-semibold uppercase tracking-wider text-cyan-400">
          Selected Work
        </p>
        <h2 className="mb-12 max-w-xl text-[28px] font-extrabold tracking-tight text-white sm:text-[36px]">
          Real builds, real results.
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const CardTag = p.link ? motion.a : motion.div;
            const linkProps = p.link
              ? { href: p.link, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <CardTag
                key={p.title}
                {...linkProps}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-[#161b26] transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_40px_-12px_rgba(34,211,238,0.35)]"
              >
                {p.image ? (
                  <div
                    className="relative w-full overflow-hidden bg-black"
                    style={{ aspectRatio: p.aspect }}
                  >
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    {p.link && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <span className="absolute bottom-3 left-4 flex translate-y-2 items-center gap-1.5 text-[13px] font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                          Visit Live Site
                          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </span>
                      </>
                    )}
                  </div>
                ) : (
                  <div className={`h-40 bg-gradient-to-br ${p.gradient} opacity-80`} />
                )}
                <div className="p-5">
                  <h3 className="mb-1.5 text-[16.5px] font-bold text-white">{p.title}</h3>
                  <p className="mb-3 text-[14px] leading-relaxed text-gray-400">{p.desc}</p>

                  {p.tech && (
                    <div className="mb-3 flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-2 py-0.5 text-[11px] font-medium text-cyan-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  <span className="inline-block rounded-full bg-cyan-400/10 px-2.5 py-1 text-[13px] font-bold text-cyan-300">
                    {p.metric}
                  </span>
                </div>
              </CardTag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
