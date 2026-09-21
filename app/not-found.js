import Link from "next/link";
export const metadata = {
  title: "Page Not Found",
  description: "The page you were looking for could not be found.",
};

// Rendered for any unmatched URL. Next.js sends a 404 status and adds
// <meta name="robots" content="noindex"> automatically.
const quickLinks = [
  { href: "/#services", label: "Services", desc: "Web, mobile, custom software & AI automation" },
  { href: "/#work", label: "Our Work", desc: "Real builds and the results behind them" },
  { href: "/#process", label: "How We Work", desc: "From idea to launch in six steps" },
];

export default function NotFound() {
  return (
    <main className="relative flex flex-1 items-center overflow-hidden bg-[#05060a] py-20">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-[110px]" />

      <div className="relative mx-auto w-full max-w-3xl px-6">
        <Link href="/" className="mb-14 inline-flex items-center gap-2.5 font-extrabold tracking-wide text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-white text-sm text-black">
            BM
          </span>
          <span className="text-[15px]">AUTOMATE</span>
        </Link>

        <p className="mb-3 font-mono text-[13.5px] font-semibold uppercase tracking-wider text-cyan-400">
          {"// Error 404"}
        </p>
        <h1 className="text-[36px] font-extrabold leading-tight tracking-tight text-white sm:text-[52px]">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-5 max-w-lg text-[17px] text-gray-400">
          The link may be broken or the page may have moved. Everything we do
          lives on our homepage — start there, or jump straight to a section below.
        </p>

        <div className="mt-8 flex flex-wrap gap-3.5">
          <Link
            href="/"
            className="rounded-full bg-gradient-to-r from-cyan-400 to-white px-7 py-3.5 text-[15.5px] font-semibold text-black shadow-[0_0_30px_-8px_rgba(34,211,238,0.6)] transition-transform hover:-translate-y-0.5"
          >
            Back to Homepage
          </Link>
          <Link
            href="/#contact"
            className="rounded-full border border-white/15 px-7 py-3.5 text-[15.5px] font-semibold text-white transition-colors hover:bg-white/5"
          >
            Contact Us
          </Link>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <h2 className="mb-4 text-[12px] font-semibold uppercase tracking-[0.15em] text-gray-500">
            Popular sections
          </h2>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group block h-full rounded-2xl border border-white/10 bg-[#161b26] p-5 transition-colors hover:border-cyan-400/40"
                >
                  <span className="mb-1 flex items-center justify-between text-[15px] font-bold text-white">
                    {link.label}
                    <span className="text-cyan-300 transition-transform group-hover:translate-x-1">→</span>
                  </span>
                  <span className="text-[13.5px] text-gray-400">{link.desc}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
