// Single source of truth for SEO values shared by metadata, sitemap and robots.
// Set NEXT_PUBLIC_SITE_URL if the production domain differs (e.g. www.bmautomate.com).
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://bmautomate.com"
).replace(/\/$/, "");

export const siteName = "BM Automate";

export const homeTitle = "BM Automate - AI Automation Solutions";

export const homeDescription =
  "BM Automate builds AI-powered automation, custom software, and web and mobile apps for growing businesses. Fixed pricing, senior engineers on every build.";
