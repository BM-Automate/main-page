import Section from "./Section";
import { whyUsItems } from "@/lib/whyus";

export default function WhyBMAutomate({ tone = "default" }) {
  return (
    <Section eyebrow="Why Choose Us" title="No account managers. No surprises." tone={tone}>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {whyUsItems.map((it) => (
          <div key={it.num} className="rounded-2xl border border-white/10 bg-[#161b26] p-7">
            <span className="text-[14px] font-extrabold text-white">{it.num}</span>
            <h3 className="mb-2 mt-3 text-[17px] font-bold text-white">{it.title}</h3>
            <p className="text-[14.5px] text-gray-400">{it.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
