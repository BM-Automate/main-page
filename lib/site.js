// Single source of truth for SEO values shared by metadata, sitemap and robots.
// Set NEXT_PUBLIC_SITE_URL if the production domain differs (e.g. www.bmautomate.com).
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://bmautomate.com"
).replace(/\/$/, "");

export const siteName = "BM Automate";

export const contactEmail = "contact@bmautomate.com";

// contactPhone is the E.164 form used by tel: links and structured data.
// The display and WhatsApp forms are derived from it so the number only ever
// has to be changed in one place.
export const contactPhone = "+923368943032";
export const contactPhoneDisplay = "+92 336 8943032";
export const whatsappUrl = `https://wa.me/${contactPhone.replace(/\D/g, "")}`;

// Public social profile URLs (LinkedIn, Instagram, etc.). Added to the
// Organization schema as `sameAs`.
export const socialProfiles = [
  "https://www.instagram.com/bm_automate/",
  "https://www.facebook.com/bmautomate",
  "https://linkedin.com/company/bm-automate",
  "https://x.com/bm_automate",
  "https://github.com/BM-Automate",
];

export const homeTitle = "BM Automate | Custom Software, Web & Mobile App Development";

export const homeDescription =
  "BM Automate builds AI-powered automation, custom software, and web and mobile apps for growing businesses. Fixed pricing, senior engineers on every build.";
