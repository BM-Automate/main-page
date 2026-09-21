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

const title = "Web Development Services";
const description =
  "Marketing sites, dashboards and SaaS platforms built fast on modern stacks — clean, maintainable code you can actually hand off, not a page builder.";
const path = "/services/web-development";

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
    title: "Marketing & brand websites",
    desc: "Fast, SEO-friendly sites built to convert visitors into leads — not just look good in a screenshot.",
  },
  {
    title: "SaaS platforms & dashboards",
    desc: "Multi-user products with authentication, billing and real-time data, built to scale past the MVP.",
  },
  {
    title: "Admin panels & internal tools",
    desc: "The operational backend your team actually uses every day, tailored to how you actually work.",
  },
  {
    title: "API & backend development",
    desc: "The services and databases that power everything above — built for reliability, not just a demo.",
  },
  {
    title: "Website redesigns & rebuilds",
    desc: "Moving off an outdated platform without losing the SEO rankings and content you've already earned.",
  },
  {
    title: "Performance & SEO optimization",
    desc: "Core Web Vitals, structured data and technical SEO done right, so the site you paid for actually gets found.",
  },
];

const useCases = [
  "A startup that needs a marketing site and a working product visible on the same visit.",
  "A business still running on an outdated CMS or page builder that can't keep up anymore.",
  "A team that needs a custom dashboard because spreadsheets finally stopped scaling.",
  "A company that needs a public site and an internal admin panel working off the same data.",
];

const tools = [
  "Next.js", "React", "Supabase", "Stripe", "HubSpot",
  "Google Sheets", "Mailchimp", "Google Drive", "Google Calendar",
];

const faqs = [
  {
    q: "What do you build websites with?",
    a: "Mostly Next.js and React — the same modern stack behind this site — because it's fast by default, ranks well, and doesn't lock you into a page builder. For simpler marketing sites we'll recommend whatever's genuinely the right fit for your budget and timeline.",
  },
  {
    q: "Can you take over an existing website instead of rebuilding from scratch?",
    a: "Yes. We regularly extend and maintain existing codebases. We'll be upfront if a rebuild genuinely makes more sense than patching around old decisions.",
  },
  {
    q: "Do you handle hosting and deployment?",
    a: "Yes — we deploy to modern hosting (Vercel, Railway, or your existing provider) and can hand over full access, or keep managing it for you after launch.",
  },
  {
    q: "How long does a typical website project take?",
    a: "A marketing site is usually a few weeks; a SaaS platform or custom dashboard takes longer and depends on scope, which we lock in during Strategy before a single line of code is written.",
  },
];

export default function WebDevelopmentPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/#services" },
          { name: "Web Development" },
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
                { name: "Web Development" },
              ]}
            />
          }
          eyebrow="Web Platforms"
          title="Web Development Services for Fast, Scalable Products"
          intro="Marketing sites, dashboards and SaaS platforms built fast on modern stacks — clean, maintainable code you can actually hand off, not a page builder you'll outgrow in a year."
        />

        <Section eyebrow="What We Build" title="Websites and web apps that hold up under real use">
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
            We build on modern, well-supported stacks and wire your site into the tools your
            business already runs on.
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
