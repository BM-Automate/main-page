import Link from "next/link";

// Minimal markdown renderer for blog post bodies — supports the handful of
// blocks posts actually need: ## headings, - bullet lists, and paragraphs,
// with **bold** and [text](url) inline formatting. Not a general-purpose
// parser; if a post ever needs more (tables, code blocks, images), reach for
// a real markdown library instead of extending this by hand.
function renderInline(text, blockKey) {
  const nodes = [];
  const regex = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;
  let lastIndex = 0;
  let match;
  let i = 0;

  while ((match = regex.exec(text))) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    if (match[1] !== undefined) {
      nodes.push(<strong key={`${blockKey}-${i++}`}>{match[1]}</strong>);
    } else {
      const isInternal = match[3].startsWith("/");
      const linkClass =
        "text-cyan-300 underline decoration-cyan-300/30 underline-offset-4 hover:decoration-cyan-300";
      nodes.push(
        isInternal ? (
          <Link key={`${blockKey}-${i++}`} href={match[3]} className={linkClass}>
            {match[2]}
          </Link>
        ) : (
          <a
            key={`${blockKey}-${i++}`}
            href={match[3]}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            {match[2]}
          </a>
        )
      );
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

export function renderMarkdown(markdown) {
  const blocks = markdown.trim().split(/\n\s*\n/);

  return blocks.map((block, i) => {
    const lines = block.trim().split("\n");

    if (lines[0].startsWith("## ")) {
      return (
        <h2 key={i} className="mb-4 mt-10 text-[22px] font-bold text-white first:mt-0">
          {renderInline(lines[0].slice(3), i)}
        </h2>
      );
    }

    if (lines.every((l) => l.trim().startsWith("- "))) {
      return (
        <ul key={i} className="mb-5 flex flex-col gap-2.5">
          {lines.map((l, j) => (
            <li key={j} className="flex gap-2.5 text-[15.5px] leading-relaxed text-gray-300">
              <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
              <span>{renderInline(l.trim().slice(2), `${i}-${j}`)}</span>
            </li>
          ))}
        </ul>
      );
    }

    return (
      <p key={i} className="mb-5 text-[15.5px] leading-relaxed text-gray-300">
        {renderInline(lines.join(" "), i)}
      </p>
    );
  });
}
