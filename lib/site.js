// Single source of truth for SEO values shared by metadata, sitemap and robots.
// Set NEXT_PUBLIC_SITE_URL if the production domain differs (e.g. www.bmautomate.com).
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://bmautomate.com"
).replace(/\/$/, "");

export const siteName = "BM Automate";

export const contactEmail = "contact@bmautomate.com";
export const contactPhone = "+923432647498";

// Public social profile URLs (LinkedIn, Instagram, etc.). Added to the
// Organization schema as `sameAs`.
export const socialProfiles = [
  "https://www.instagram.com/bm_automate/",
  "https://www.facebook.com/profile.php?id=61594439213639",
  "https://www.linkedin.com/company/145188924",
  "https://x.com/muddu2769",
  "https://github.com/BM-Automate",
];

export const homeTitle = "BM Automate | Custom Software, Web & Mobile App Development";

export const homeDescription =
  "BM Automate builds AI-powered automation, custom software, and web and mobile apps for growing businesses. Fixed pricing, senior engineers on every build.";
