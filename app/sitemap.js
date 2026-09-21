import { siteUrl } from "@/lib/site";

// Add an entry whenever a new route (e.g. /about) is created, and bump
// `lastModified` when that page's content meaningfully changes. A fixed date is
// used on purpose: stamping every build as "modified now" tells search engines
// the page changed when it didn't, and they learn to ignore the value.
// Section anchors like /#services are not listed — search engines ignore fragments.
const routes = [
  {
    path: "/",
    lastModified: "2026-09-17",
    changeFrequency: "monthly",
    priority: 1,
  },
  {
    path: "/services/ai-automation",
    lastModified: "2026-09-21",
    changeFrequency: "yearly",
    priority: 0.8,
  },
  {
    path: "/services/web-development",
    lastModified: "2026-09-21",
    changeFrequency: "yearly",
    priority: 0.8,
  },
  {
    path: "/services/mobile-app-development",
    lastModified: "2026-09-21",
    changeFrequency: "yearly",
    priority: 0.8,
  },
  {
    path: "/services/custom-software",
    lastModified: "2026-09-21",
    changeFrequency: "yearly",
    priority: 0.8,
  },
  {
    path: "/services/ui-ux-design",
    lastModified: "2026-09-21",
    changeFrequency: "yearly",
    priority: 0.7,
  },
  {
    path: "/services/ecommerce-stores",
    lastModified: "2026-09-21",
    changeFrequency: "yearly",
    priority: 0.7,
  },
  {
    path: "/work/woodsnery",
    lastModified: "2026-09-21",
    changeFrequency: "yearly",
    priority: 0.7,
  },
  {
    path: "/work/digital-classroom-insights",
    lastModified: "2026-09-21",
    changeFrequency: "yearly",
    priority: 0.7,
  },
  {
    path: "/blog",
    lastModified: "2026-09-21",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/contact",
    lastModified: "2026-09-21",
    changeFrequency: "yearly",
    priority: 0.7,
  },
];

export default function sitemap() {
  return routes.map(({ path, lastModified, changeFrequency, priority }) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
    lastModified: new Date(lastModified),
    changeFrequency,
    priority,
  }));
}
