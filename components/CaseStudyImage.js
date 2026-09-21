import Image from "next/image";

// The project screenshot from the homepage Work card, repeated at the top of
// the case study page. Clicking it opens the live site in a new tab.
export default function CaseStudyImage({ src, alt, aspect, href }) {
  return (
    <div className="mx-auto -mt-6 max-w-5xl px-6 pb-4">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] transition-colors hover:border-cyan-400/40"
        style={{ aspectRatio: aspect }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 1024px"
          priority
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute bottom-4 left-5 flex translate-y-2 items-center gap-1.5 text-[13.5px] font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          Visit Live Site
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </span>
      </a>
    </div>
  );
}
