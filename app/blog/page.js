import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageIntro from "@/components/PageIntro";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { siteName } from "@/lib/site";
import { posts } from "@/lib/posts";
import { renderMarkdown } from "@/lib/markdown";
import { JsonLd, breadcrumbJsonLd } from "@/lib/structured-data";

// Single blog page — shows the one post in lib/posts.js. No index/listing,
// no per-post routes: clicking "Blog" always lands here.
const post = posts[0];

const title = post.title;
const description = post.excerpt;
const path = "/blog";

export const metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    type: "article",
    siteName,
    locale: "en_US",
    url: path,
    title,
    description,
    ...(post.image && { images: [post.image] }),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    ...(post.image && { images: [post.image] }),
  },
};

function formatDate(dateStr) {
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog" },
        ])}
      />
      <Header />
      <main>
        <PageIntro
          breadcrumbs={
            <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Blog" }]} />
          }
          eyebrow={`${post.author} · ${formatDate(post.date)}`}
          title={post.title}
          intro={post.excerpt}
        />

        {post.image && (
          <div className="mx-auto -mt-6 max-w-4xl px-6 pb-4">
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
              <Image
                src={post.image}
                alt={post.imageAlt}
                width={1344}
                height={896}
                sizes="(max-width: 1024px) 100vw, 896px"
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        )}

        <Section>
          <article className="max-w-2xl">{renderMarkdown(post.content)}</article>
        </Section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
