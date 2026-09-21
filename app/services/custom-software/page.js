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

const title = "Custom Software Development";
const description =
  "Internal tools, CRMs and workflow systems tailored to how your business actually runs — not a generic template you bend your process around.";
const path = "/services/custom-software";

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
    title: "Internal tools & dashboards",
    desc: "Purpose-built software for the specific way your team operates, not a generic template.",
  },
  {
    title: "Custom CRMs",
    desc: "Lead, client and pipeline tracking that matches your actual sales process instead of forcing it into someone else's.",
  },
  {
    title: "Workflow & operations systems",
    desc: "The software that runs your day-to-day — scheduling, inventory, approvals — built around your process.",
  },
  {
    title: "Admin panels",
    desc: "A management layer over your data that your team can actually use without a training manual.",
  },
  {
    title: "System integrations",
    desc: "Connecting your existing tools and databases so information stops living in five different places.",
  },
  {
    title: "Legacy system modernization",
    desc: "Rebuilding or extending old, brittle software without a risky big-bang rewrite.",
  },
];

const useCases = [
  "A business running critical operations on spreadsheets that have quietly become unmanageable.",
  "A team whose off-the-shelf CRM or tool almost fits, but forces a workaround every day.",
  "A company with two or three systems that don't talk to each other and need manual syncing.",
  "An operation that's outgrown a founder-built prototype and needs it rebuilt properly.",
];

const tools = [
  "Supabase", "HubSpot", "QuickBooks", "Xero",
  "Google Sheets", "Airtable", "Notion", "Zapier", "n8n",
];

const faqs = [
  {
    q: "How is custom software different from just buying an off-the-shelf tool?",
    a: "Off-the-shelf tools are built for the average customer, so you end up adjusting your process to fit the software. Custom software is built around how you actually work — no paying for features you don't need, and no missing the one feature you do.",
  },
  {
    q: "Isn't custom software more expensive than SaaS subscriptions?",
    a: "Sometimes upfront, but SaaS tools bill per seat, per month, forever, and rarely fit perfectly. Custom software is a one-time build you own outright, with a fixed price agreed before we start.",
  },
  {
    q: "Can you integrate with the systems we already use?",
    a: "Yes — most custom software projects involve connecting to an existing CRM, accounting tool or database rather than replacing everything at once.",
  },
  {
    q: "We have an old, fragile internal tool. Can you fix it instead of a full rebuild?",
    a: "Often, yes. We assess what's actually broken during Discovery and recommend the smallest change that solves the real problem — a full rebuild only when it's genuinely the better option.",
  },
];

export default function CustomSoftwarePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/#services" },
          { name: "Custom Software" },
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
                { name: "Custom Software" },
              ]}
            />
          }
          eyebrow="Custom Software"
          title="Custom Software Development Built Around Your Business"
          intro="Internal tools, CRMs and workflow systems tailored to how your business actually runs — not a generic template you have to bend your process around."
        />

        <Section eyebrow="What We Build" title="Software shaped around your process, not the other way around">
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
            Custom doesn&apos;t mean isolated — we connect your new system to the accounting,
            CRM and operations tools you already depend on.
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
