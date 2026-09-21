import Link from "next/link";

// items: [{ name: "Home", path: "/" }, { name: "Services", path: "/#services" }, { name: "AI Automation" }]
// The last item has no `path` — it renders as plain text (the current page).
export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5 text-[13px] text-gray-500">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => (
          <li key={item.name} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-gray-600">/</span>}
            {item.path ? (
              <Link href={item.path} className="transition-colors hover:text-cyan-300">
                {item.name}
              </Link>
            ) : (
              <span className="text-gray-400" aria-current="page">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
