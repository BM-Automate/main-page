import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageIntro from "@/components/PageIntro";
import { siteName } from "@/lib/site";
import { JsonLd, breadcrumbJsonLd } from "@/lib/structured-data";

const title = "Contact Us";
const description =
  "Start your web, mobile app, custom software or AI automation project. Fixed pricing, senior engineers, and direct access to the person building it.";
const path = "/contact";

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

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact" },
        ])}
      />
      <Header />
      <main>
        <PageIntro
          breadcrumbs={
            <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact" }]} />
          }
          eyebrow="Contact"
          title="Let's Build Something That Actually Ships"
          intro="Whether it's a website, a mobile app, custom software or an AI automation, tell us what you're building. You'll hear back from the person who'll actually build it — usually within one business day, no ticket queue in between."
        />

        <Contact />
      </main>
      <Footer />
    </>
  );
}
