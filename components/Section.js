// Generic content band matching the homepage sections' spacing/backgrounds,
// so new pages can be assembled from the same visual rhythm without repeating
// the wrapper markup on every page.
const TONES = {
  default: "",
  alt: "border-y border-white/10 bg-[#131720]",
};

export default function Section({ id, eyebrow, title, tone = "default", className = "", children }) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${TONES[tone]} ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        {eyebrow && (
          <p className="mb-3 text-[13.5px] font-semibold uppercase tracking-wider text-cyan-400">
            {eyebrow}
          </p>
        )}
        {title && (
          <h2 className="mb-10 max-w-xl text-[26px] font-extrabold tracking-tight text-white sm:text-[32px]">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
