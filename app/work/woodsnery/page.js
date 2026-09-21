import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageIntro from "@/components/PageIntro";
import CaseStudyImage from "@/components/CaseStudyImage";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { siteName } from "@/lib/site";
import { JsonLd, breadcrumbJsonLd } from "@/lib/structured-data";

const title = "Woodsnery Case Study";
const description =
  "How BM Automate built Woodsnery, a fully custom Next.js e-commerce platform for a furniture and interiors brand — no Shopify theme.";
const path = "/work/woodsnery";
const liveSite = "https://www.woodnery.store";

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

const keyFeatures = [
  "Custom admin panel with dynamic categories, products and attribute filters — no code needed to add new items",
  "Two selling models side by side: standard fixed-price checkout and Request a Quote inquiries for custom pieces",
  "2FA / OTP email verification on customer accounts",
  "Cloudflare Turnstile CAPTCHA protecting forms from bots",
  "Hidden admin route, kept out of the public site structure",
  "Product images served from Cloudflare R2",
  "Transactional emails sent via Resend",
];

const techStack = [
  "Next.js", "React", "Node.js", "MongoDB Atlas",
  "Cloudflare R2", "Cloudflare Turnstile", "Resend", "Railway", "GitHub",
];

export default function WoodsneryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Work", path: "/#work" },
          { name: "Woodsnery" },
        ])}
      />
      <Header />
      <main>
        <PageIntro
          breadcrumbs={
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Work", path: "/#work" },
                { name: "Woodsnery" },
              ]}
            />
          }
          eyebrow="Case Study — E-commerce"
          title="Woodsnery: A Fully Custom E-commerce Platform, Not a Shopify Theme"
          intro="A full-stack e-commerce platform for a custom furniture, doors and interiors brand, built with Next.js as a completely custom alternative to a Shopify theme."
        />

        <CaseStudyImage
          src="/work/woodsnery.png"
          alt="Woodsnery e-commerce storefront for custom doors, interiors and wall paneling"
          aspect="1656/757"
          href={liveSite}
        />

        <Section eyebrow="Overview" title="Overview">
          <p className="max-w-3xl text-[15px] leading-relaxed text-gray-300">
            Woodsnery sells custom furniture, doors, interiors and wall paneling online.
            Rather than launch on a Shopify theme, BM Automate built the storefront, checkout
            and admin experience as a fully custom Next.js and React application — giving the
            client complete control over how products, categories and orders work.
          </p>
        </Section>

        <Section eyebrow="Problem" title="Problem" tone="alt">
          <p className="max-w-3xl text-[15px] leading-relaxed text-gray-300">
            Woodsnery&apos;s catalog doesn&apos;t fit a standard storefront. Alongside regular
            fixed-price products, many pieces — custom doors, interiors, wall paneling — need a
            &ldquo;Request a Quote&rdquo; flow instead of a straight checkout. A typical theme is
            built around one selling model and a rigid admin, which made both a real constraint
            for a catalog like this.
          </p>
        </Section>

        <Section eyebrow="Solution" title="Solution">
          <p className="max-w-3xl text-[15px] leading-relaxed text-gray-300">
            We built Woodsnery as a fully custom Next.js and React application, replacing the
            idea of a Shopify theme entirely. The storefront supports two selling models side by
            side — standard fixed-price checkout and Request a Quote inquiries for custom pieces
            — and a custom admin panel lets the Woodsnery team add categories, products and
            attribute filters without touching any code.
          </p>
        </Section>

        <Section eyebrow="Key Features" title="Key features" tone="alt">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {keyFeatures.map((f) => (
              <li
                key={f}
                className="rounded-2xl border border-white/10 bg-[#161b26] p-5 text-[14.5px] text-gray-300"
              >
                {f}
              </li>
            ))}
          </ul>
        </Section>

        <Section eyebrow="Tech Stack" title="Tech stack">
          <div className="flex flex-wrap gap-2">
            {techStack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3.5 py-1.5 text-[13px] font-medium text-cyan-300"
              >
                {t}
              </span>
            ))}
          </div>
        </Section>

        <Section eyebrow="Result" title="Result" tone="alt">
          <p className="max-w-3xl text-[15px] leading-relaxed text-gray-300">
            Woodsnery runs as a fully custom storefront — not a Shopify theme — with an admin
            experience built specifically around how the business adds and manages products, and
            deployed on Railway.
          </p>
          <a
            href={liveSite}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-white/15 px-6 py-3 text-[14.5px] font-semibold text-white transition-colors hover:bg-white/5"
          >
            Visit woodnery.store
            <span>→</span>
          </a>
        </Section>

        <CTASection
          title="Building something like this?"
          subtitle="Tell us about your catalog and we'll tell you exactly what it takes to build it right."
        />
      </main>
      <Footer />
    </>
  );
}
