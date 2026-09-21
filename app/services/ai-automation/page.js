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

const title = "AI Automation Services";
const description =
  "Custom AI agents and workflow automation that cut manual work out of your business — connected to the tools you already use, built by senior engineers.";
const path = "/services/ai-automation";

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
    title: "AI agents & chatbots",
    desc: "Custom-trained agents that answer support questions, qualify leads and hand off to a human only when it actually matters.",
  },
  {
    title: "Workflow automation",
    desc: "Replacing manual, repetitive tasks — data entry, follow-ups, reporting — with automated pipelines that run in the background.",
  },
  {
    title: "Document & data processing",
    desc: "Extracting, structuring and routing information from emails, PDFs, forms and spreadsheets automatically.",
  },
  {
    title: "CRM & inbox automation",
    desc: "Auto-tagging, enriching and routing new leads the moment they come in, so nothing sits in a queue.",
  },
  {
    title: "Internal AI tools",
    desc: "Small internal apps and dashboards that put AI directly into your team's daily workflow.",
  },
  {
    title: "Custom integrations",
    desc: "Connecting AI logic to the systems you already run on, instead of forcing you onto a new platform.",
  },
];

const useCases = [
  "A sales team that needs new leads automatically enriched, scored and routed before a rep ever sees them.",
  "An operations team drowning in manual data entry between spreadsheets, email and a CRM.",
  "A support team that wants a first-response AI layer without losing the ability to escalate to a human.",
  "A founder who wants one custom automation instead of stitching together five different no-code tools.",
];

const tools = [
  "Claude", "n8n", "Zapier", "HubSpot", "Supabase", "Google Sheets",
  "Gmail", "Notion", "Airtable", "WhatsApp", "Telegram", "Stripe",
];

const faqs = [
  {
    q: "How is this different from just using Zapier or a no-code tool?",
    a: "No-code tools are great for simple, linear workflows. Once the logic gets complex — conditional branching, AI decision-making, custom data handling — they get slow, expensive at scale, and hard to debug. We build the automation as real code you own outright, with no per-task platform fees.",
  },
  {
    q: "Do I need to already have an AI strategy?",
    a: "No. Most clients come to us with a manual process that's costing them time, not an AI plan. We figure out where automation actually helps during Discovery and Strategy — the two steps that come before any code gets written.",
  },
  {
    q: "What does this cost?",
    a: "Every automation project gets fixed pricing based on a scoped plan, not an hourly estimate. You'll know the number before we start building.",
  },
  {
    q: "Can you connect to a specific tool we already use?",
    a: "Almost certainly, if it exposes an API or webhook. Tell us what you're using on the call and we'll confirm before any commitment.",
  },
];

export default function AIAutomationPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/#services" },
          { name: "AI Automation" },
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
                { name: "AI Automation" },
              ]}
            />
          }
          eyebrow="AI Automation"
          title="AI Automation Services for Growing Businesses"
          intro="Custom AI agents and workflow automation that cut manual work out of your business — connected to the tools you already use, built and owned by senior engineers, not locked inside a no-code platform."
        />

        <Section eyebrow="What We Build" title="AI automation that replaces busywork, not judgment">
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

        <Section eyebrow="Integrations" title="Tools we build with and connect into">
          <p className="mb-6 max-w-2xl text-[15px] text-gray-400">
            We build with and wire into the tools you&apos;re already running — if it has an
            API or a webhook, we can very likely connect it.
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
