import Link from "next/link";
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

const title = "E-commerce Store Development";
const description =
  "High-converting storefronts with seamless checkout experiences that increase sales — built on the platform that actually fits your catalog.";
const path = "/services/ecommerce-stores";

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
    title: "Storefront design & development",
    desc: "Fast, mobile-first storefronts built to convert visitors into customers.",
  },
  {
    title: "Custom checkout flows",
    desc: "Including non-standard selling models — like fixed-price plus request-a-quote — when a standard cart doesn't fit.",
  },
  {
    title: "Custom admin panels",
    desc: "Catalog, inventory and order management built around how your business actually sells.",
  },
  {
    title: "Platform migrations",
    desc: "Moving off a restrictive theme or platform onto something fully custom, without losing your SEO.",
  },
  {
    title: "Payment & fulfillment integration",
    desc: "Stripe and other payment providers wired in cleanly, plus inventory and order syncing.",
  },
  {
    title: "Store performance & SEO",
    desc: "Fast load times and technical SEO, because a slow store loses sales before checkout even starts.",
  },
];

const useCases = [
  "A brand whose catalog doesn't fit a standard \"add to cart\" flow — custom orders, quotes, or made-to-order items.",
  "A store that's outgrown its current theme's flexibility and admin.",
  "A business launching their first online store and wanting it built right from day one.",
  "A team that needs inventory, orders and a CRM all talking to each other instead of syncing by hand.",
];

const tools = ["Next.js", "React", "Stripe", "Shopify", "QuickBooks", "Xero", "Zapier", "Mailchimp"];

const faqs = [
  {
    q: "Do you build on Shopify or a custom platform?",
    a: "Both, depending on what actually fits. Shopify is great for standard catalogs; when a business needs something a theme can't do — like our Woodsnery build, which needed both fixed-price and custom quote orders — we build fully custom instead.",
  },
  {
    q: "Can you migrate our existing store without losing our SEO rankings?",
    a: "Yes — migrations are planned around preserving URLs, redirects and existing content so your rankings carry over instead of resetting.",
  },
  {
    q: "Do you handle payments and shipping integrations?",
    a: "Yes — Stripe and other payment providers, plus inventory and fulfillment integrations, are part of a standard build.",
  },
  {
    q: "What if our catalog has non-standard items, like custom or made-to-order products?",
    a: "That's exactly the kind of catalog we build custom checkout flows for — see our Woodsnery case study for a real example.",
  },
];

export default function EcommerceStoresPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/#services" },
          { name: "E-commerce Stores" },
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
                { name: "E-commerce Stores" },
              ]}
            />
          }
          eyebrow="E-commerce Stores"
          title="E-commerce Development for High-Converting Stores"
          intro="High-converting storefronts with seamless checkout experiences that increase sales and grow your online store — built on the platform that actually fits your catalog, not whatever's trendy."
        />

        <Section eyebrow="What We Build" title="Stores built to actually sell">
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
            We connect your store to the payment, accounting and marketing tools you already
            run on.{" "}
            <Link href="/work/woodsnery" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
              See how this played out for Woodsnery →
            </Link>
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
