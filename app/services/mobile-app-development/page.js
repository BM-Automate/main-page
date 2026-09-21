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

const title = "Mobile App Development Services";
const description =
  "iOS and Android apps from a single React Native codebase — polished UI, real performance, and app-store-ready delivery from senior engineers.";
const path = "/services/mobile-app-development";

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
    title: "Cross-platform apps",
    desc: "One React Native codebase shipping natively to iOS and Android, instead of two separate teams and two separate bug lists.",
  },
  {
    title: "Consumer & customer-facing apps",
    desc: "Booking, marketplace, social and community apps built to retain users, not just launch once.",
  },
  {
    title: "Internal & field-service apps",
    desc: "Tools your team uses on the ground, built around the workflow they already follow.",
  },
  {
    title: "App + backend pairing",
    desc: "The API, database and admin panel behind the app — not just the screens the user taps through.",
  },
  {
    title: "Push notifications & real-time features",
    desc: "Chat, live updates and alerts that actually work reliably, not just in the demo.",
  },
  {
    title: "App store submission & launch",
    desc: "Store listings, review requirements and release handled end to end so launch day isn't a scramble.",
  },
];

const useCases = [
  "A business that needs the same product on web and mobile without maintaining two separate codebases.",
  "A team replacing a clunky or abandoned app with something that actually performs.",
  "A founder who needs a mobile MVP in front of real users fast.",
  "A company that needs a field or internal app for staff, not a public app-store listing.",
];

const tools = [
  "React Native", "Supabase", "Stripe", "WhatsApp",
  "Telegram", "Google Calendar", "Notion", "Airtable",
];

const faqs = [
  {
    q: "Do you build native iOS and Android apps or cross-platform?",
    a: "Cross-platform by default, using React Native — one codebase that ships to both app stores with native performance. If a project genuinely needs fully native code for a specific feature, we'll tell you upfront.",
  },
  {
    q: "Can you build just the backend for an app our own team is designing?",
    a: "Yes. We can build the full product, just the mobile app, or just the API and backend behind an app you're building elsewhere.",
  },
  {
    q: "Will you handle publishing to the App Store and Google Play?",
    a: "Yes — store accounts, listings, screenshots, review requirements and the submission itself are all part of Launch.",
  },
  {
    q: "What happens after the app is live?",
    a: "We stay on for support after launch — bug fixes, OS updates and new features as your product grows, on the same fixed-pricing model, not an open-ended retainer you didn't ask for.",
  },
];

export default function MobileAppDevelopmentPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/#services" },
          { name: "Mobile App Development" },
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
                { name: "Mobile App Development" },
              ]}
            />
          }
          eyebrow="Mobile Apps"
          title="Mobile App Development Services for iOS and Android"
          intro="iOS and Android apps from a single codebase — polished UI, real performance, and app-store-ready delivery, built and shipped by senior engineers."
        />

        <Section eyebrow="What We Build" title="Mobile apps built to actually ship">
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
            Your app doesn&apos;t live in isolation — we connect it to the services your
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
