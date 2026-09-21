import Section from "./Section";

// items: [{ q: "...", a: "..." }]. Native <details>/<summary> gives an
// accordion with zero client JS, styled to match the site's card language.
export default function FAQSection({ items, tone = "alt" }) {
  return (
    <Section eyebrow="FAQ" title="Frequently asked questions" tone={tone}>
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-white/10 bg-[#161b26] p-6 open:pb-6"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15.5px] font-bold text-white marker:content-none">
              {item.q}
              <span className="flex-shrink-0 text-cyan-300 transition-transform duration-200 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-[14.5px] leading-relaxed text-gray-400">{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
