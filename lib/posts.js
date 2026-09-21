// Blog posts. app/blog/page.js (the index) and app/blog/[slug]/page.js (the
// post template) both read from this array — add an entry here to publish a
// post, nothing else needs to change.
//
// Shape:
// {
//   slug: "url-safe-slug",
//   title: "Post title",
//   excerpt: "One or two sentences shown on the blog index and as the meta description.",
//   date: "YYYY-MM-DD",
//   author: "Author name",
//   image: "/images/blog/file.png",   // optional — put the file in public/images/blog/
//   imageAlt: "Descriptive alt text", // required if `image` is set
//   content: `markdown body — supports ## headings, - bullet lists,
//     **bold** and [text](url) links, paragraphs separated by a blank line`,
// }
export const posts = [
  {
    slug: "welcome-to-bm-automate",
    title: "Welcome to BM Automate: Building Smart, Scalable Solutions for Modern Businesses",
    excerpt: "A quick introduction to who we are, what we do, and why we started BM Automate.",
    date: "2026-09-21",
    author: "BM Automate Team",
    image: "/images/blog/welcome-to-bm-automate.png",
    imageAlt:
      "BM Automate homepage banner showing a laptop dashboard with AI automation, cloud, and custom software icons, representing web app, mobile app, and AI automation services",
    content: `
Every business today needs more than just a website — it needs systems that actually save time, reduce manual work, and scale as the business grows. That's exactly why we started **BM Automate**.

## Who We Are

BM Automate is a web, app, and AI automation studio. We work with businesses that are tired of juggling spreadsheets, manual processes, and disconnected tools — and want something built specifically around how they actually operate.

We're not a template shop. Every project we take on starts with one question: what is this business actually trying to solve? From there, we design and build a solution that fits — not a generic one-size-fits-all package.

## What We Do

Our work generally falls into three areas:

- **Web & App Development** — custom platforms, admin panels, and business tools built on modern stacks like Laravel and the MERN stack (MongoDB, Express, React, Node.js).
- **Business Automation** — replacing repetitive manual workflows (approvals, reporting, data entry, notifications) with systems that run themselves.
- **AI Integration** — adding practical AI features into existing products, from smart search to automated content and decision support — not AI for the sake of AI, but where it genuinely saves time or money.

We've built everything from multi-tenant HR and payroll systems to local-services marketplaces to e-commerce and quoting platforms — each one tailored to how that specific business runs.

## Why It Matters

A lot of businesses either overpay for bloated software they don't need, or underinvest and end up stuck with manual processes that don't scale. We try to sit in the middle: build exactly what's needed, built well, and built to grow with you.

## What's Next

This blog is where we'll be sharing behind-the-scenes looks at projects we've built, lessons learned along the way, and practical tips for businesses thinking about automating their operations.

If you're curious about what BM Automate could build for you, [get in touch](/contact) — we'd love to hear what you're working on.
    `,
  },
];
