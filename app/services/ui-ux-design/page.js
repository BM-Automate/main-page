import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageIntro from "@/components/PageIntro";
import Section from "@/components/Section";
import ProcessSteps from "@/components/ProcessSteps";
import WhyBMAutomate from "@/components/WhyBMAutomate";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { siteName } from "@/lib/site";
import { JsonLd, breadcrumbJsonLd } from "@/lib/structured-data";

const title = "UI/UX Design Services";
const description =
  "Interfaces designed to be used, not just looked at — wireframes through to polished, production-ready screens, built by the same team that ships the product.";
const path = "/services/ui-ux-design";

export const metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    siteName,
    locale: "en_US",
    url: path,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const whatWeBuild = [
  {
    title: "Product UI design",
    desc: "Clean, usable interfaces for web and mobile apps, from first wireframe to final production-ready screen.",
  },
  {
    title: "Design systems",
    desc: "Reusable components and style guides so your product stays visually consistent as it grows.",
  },
  {
    title: "UX research & flows",
    desc: "Mapping how users actually move through your product before a single screen gets designed.",
  },
  {
    title: "Landing page & marketing design",
    desc: "Pages built to convert visitors into leads, not just look good in a portfolio.",
  },
  {
    title: "Redesigns",
    desc: "Modernizing an existing product's UI without breaking what already works for your users.",
  },
  {
    title: "Design-to-code handoff",
    desc: "Because we also build the product, design decisions never get lost in translation to development.",
  },
];

const useCases = [
  "A founder with a rough idea who needs it turned into a clear, usable product before development starts.",
  "A product that works but looks and feels outdated next to newer competitors.",
  "A team whose design and development have drifted apart, causing inconsistent screens.",
  "A business that needs a landing page built specifically to convert, not just inform.",
];

const tools = ["Next.js", "React", "Notion", "Google Drive", "HubSpot", "Stripe"];

const faqs = [
  {
    q: "Do you only do UI/UX design, or do you also build the product?",
    a: "Both — and that's the advantage. Because the same team designs and builds, nothing gets lost in handoff, and design decisions stay grounded in what's actually feasible to build.",
  },
  {
    q: "Can you redesign our existing product without a full rebuild?",
    a: "Yes. Most redesigns update the UI and key flows without touching the underlying architecture, unless the audit turns up a reason to.",
  },
  {
    q: "Do you do user research?",
    a: "For projects where it matters, yes — enough to understand how people actually use the product, not exhaustive academic research. Scoped during Discovery based on what the project actually needs.",
  },
  {
    q: "What do we get at the end — files, or a live product?",
    a: "Depends on the engagement. If you just need design, you get production-ready screens and a design system. If we're building it too, you get the live product built directly from that design.",
  },
];

export default function UiUxDesignPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/#services" },
          { name: "UI/UX Design" },
        ])}
      />
      <Header />
      <main>
        <PageIntro
          breadcrumbs={
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Services", path: "/#services" },
                { name: "UI/UX Design" },
              ]}
            />
          }
          eyebrow="UI/UX Design"
          title="UI/UX Design Services That Get Used, Not Just Seen"
          intro="Interfaces designed to be used, not just looked at — wireframes through to polished, production-ready screens, built by people who also build the product behind them."
        />

        <Section eyebrow="What We Build" title="Design that holds up once it's actually built">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whatWeBuild.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-[#161b26] p-6">
                <h3 className="mb-2 text-[16px] font-bold text-white">{item.title}</h3>
                <p className="text-[14px] leading-relaxed text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Where This Fits" title="Common use cases" tone="alt">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {useCases.map((u) => (
              <li
                key={u}
                className="rounded-2xl border border-white/10 bg-[#161b26] p-5 text-[14.5px] text-gray-300"
              >
                {u}
              </li>
            ))}
          </ul>
        </Section>

        <Section eyebrow="Handoff" title="Design that ties straight into development">
          <p className="mb-6 max-w-2xl text-[15px] text-gray-400">
            Design isn&apos;t handed off into a void — it feeds straight into the same tools and
            codebase our engineers build with.
          </p>
          <div className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-[#161b26] px-3.5 py-1.5 text-[13px] font-medium text-gray-300"
              >
                {t}
              </span>
            ))}
          </div>
        </Section>

        <ProcessSteps />
        <WhyBMAutomate />
        <FAQSection items={faqs} />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
