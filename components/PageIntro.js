import DashboardWidget from "./DashboardWidget";

// Typographic hero used at the top of every service, work, blog and contact
// page — same layout as the homepage Hero (text left, animated
// DashboardWidget right) so every new page opens with the same look.
export default function PageIntro({ breadcrumbs, eyebrow, title, intro, children }) {
  return (
    <section className="relative overflow-hidden bg-[#05060a] py-20 sm:py-24">
      <div className="pointer-events-none absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-white/5 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-white/5 blur-[100px]" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          {breadcrumbs}
          {eyebrow && (
            <p className="mb-4 text-[13.5px] font-semibold uppercase tracking-wider text-cyan-400">
              {eyebrow}
            </p>
          )}
          <h1 className="text-[32px] font-extrabold leading-tight tracking-tight text-white sm:text-[42px] lg:text-[52px]">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-[17px] text-gray-400">{intro}</p>
          )}
          {children}
        </div>

        <DashboardWidget />
      </div>
    </section>
  );
}
