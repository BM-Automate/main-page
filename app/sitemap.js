import { siteUrl } from "@/lib/site";

// Add an entry here whenever a new route (e.g. /about) is created.
// Section anchors like /#services are not listed — search engines ignore fragments.
const routes = [{ path: "/", changeFrequency: "monthly", priority: 1 }];

export default function sitemap() {
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
