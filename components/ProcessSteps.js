import Section from "./Section";
import { processSteps } from "@/lib/process";

// Static, fully-crawlable version of the homepage's interactive Process
// section — all six steps rendered at once, no client JS required.
export default function ProcessSteps({ tone = "alt" }) {
  return (
    <Section eyebrow="How We Work" title="Our 6-step process" tone={tone}>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((s, i) => (
          <div key={s.title} className="rounded-2xl border border-white/10 bg-[#161b26] p-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300">
                <span className="h-[18px] w-[18px]">{s.icon}</span>
              </span>
              <span className="text-[13px] font-bold text-gray-500">
                Step {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mb-1.5 text-[16.5px] font-bold text-white">{s.title}</h3>
            <p className="text-[14px] leading-relaxed text-gray-400">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
