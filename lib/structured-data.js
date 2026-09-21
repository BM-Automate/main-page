import {
  siteUrl,
  siteName,
  homeDescription,
  contactEmail,
  contactPhone,
  socialProfiles,
} from "@/lib/site";
import { services } from "@/lib/services";

const orgId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;

// Site-wide entities, rendered from the root layout.
export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": orgId,
      name: siteName,
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
        width: 512,
        height: 512,
      },
      description: homeDescription,
      email: contactEmail,
      telephone: contactPhone,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: contactEmail,
        telephone: contactPhone,
      },
      ...(socialProfiles.length > 0 && { sameAs: socialProfiles }),
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteUrl,
      name: siteName,
      description: homeDescription,
      publisher: { "@id": orgId },
      inLanguage: "en",
    },
  ],
};

// One Service per card in the Services section, rendered from the homepage.
// Services with a dedicated page point there; the rest point at the section.
export const servicesJsonLd = {
  "@context": "https://schema.org",
  "@graph": services.map((service) => ({
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.desc,
    url: `${siteUrl}${service.href || "/#services"}`,
    provider: { "@id": orgId },
  })),
};

// Breadcrumb trail for a single page, e.g.
// breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Services", path: "/#services" }, { name: "AI Automation", path: "/services/ai-automation" }])
export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
