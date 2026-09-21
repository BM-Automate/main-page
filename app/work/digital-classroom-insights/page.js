import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageIntro from "@/components/PageIntro";
import CaseStudyImage from "@/components/CaseStudyImage";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { siteName } from "@/lib/site";
import { JsonLd, breadcrumbJsonLd } from "@/lib/structured-data";

const title = "Digital Classroom Insights Case Study";
const description =
  "How BM Automate built a privacy-first, on-device emotion detection system for classrooms — a 3.3MB edge model at 70% accuracy.";
const path = "/work/digital-classroom-insights";
const liveSite = "https://www.dcistudents.app/";

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
  "Real-time emotion detection running entirely client-side via TensorFlow.js",
  "Live video capture via WebRTC, processed on-device — video is never uploaded",
  "Edge-optimized ML model: reduced from 100MB to 3.3MB while maintaining 70% accuracy",
  "Node.js and PostgreSQL backend for aggregated engagement data, not raw video",
  "Clerk-based authentication for instructor accounts",
];

const techStack = ["TensorFlow.js", "Node.js", "PostgreSQL", "WebRTC", "Clerk"];

export default function DigitalClassroomInsightsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Work", path: "/#work" },
          { name: "Digital Classroom Insights" },
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
                { name: "Digital Classroom Insights" },
              ]}
            />
          }
          eyebrow="Case Study — AI Automation"
          title="Digital Classroom Insights: On-Device Emotion AI for Classrooms"
          intro="An AI-powered emotion detection system built for real classroom environments, with a strong focus on privacy through secure, entirely client-side processing."
        />

        <CaseStudyImage
          src="/work/digital-classroom-insights.png"
          alt="Digital Classroom Insights dashboard showing real-time student engagement analytics from on-device emotion AI"
          aspect="1749/604"
          href={liveSite}
        />

        <Section eyebrow="Overview" title="Overview">
          <p className="max-w-3xl text-[15px] leading-relaxed text-gray-300">
            Digital Classroom Insights is an AI-powered emotion detection system built for real
            classroom environments, live at{" "}
            <a
              href={liveSite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 underline decoration-cyan-300/30 underline-offset-4 hover:decoration-cyan-300"
            >
              dcistudents.app
            </a>
            .
          </p>
        </Section>

        <Section eyebrow="Problem" title="Problem" tone="alt">
          <p className="max-w-3xl text-[15px] leading-relaxed text-gray-300">
            Instructors need real-time visibility into how engaged students are — but most
            emotion-detection systems either send video to a server, which raises real privacy
            concerns in a classroom, or rely on ML models too large to run in real time on the
            edge.
          </p>
        </Section>

        <Section eyebrow="Solution" title="Solution">
          <p className="max-w-3xl text-[15px] leading-relaxed text-gray-300">
            BM Automate built a system with secure, client-side emotion detection — no video ever
            leaves the device — and optimized the underlying ML model itself, reducing it from
            100MB down to 3.3MB for edge deployment while maintaining 70% accuracy.
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
            A roughly 30x smaller ML model (100MB → 3.3MB) suitable for real-time edge
            deployment, while maintaining 70% accuracy — with a privacy-first architecture where
            video never leaves the student&apos;s device.
          </p>
          <a
            href={liveSite}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-white/15 px-6 py-3 text-[14.5px] font-semibold text-white transition-colors hover:bg-white/5"
          >
            Visit dcistudents.app
            <span>→</span>
          </a>
        </Section>

        <CTASection
          title="Need something similarly privacy-conscious?"
          subtitle="Tell us what you're building and we'll tell you exactly what it takes to build it right."
        />
      </main>
      <Footer />
    </>
  );
}
