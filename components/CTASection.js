import Link from "next/link";

export default function CTASection({
  title = "Tell us what you're building.",
  subtitle = "No account managers or ticket queues — you'll hear back from the person who'll actually work on your project.",
}) {
  return (
    <section className="py-20 text-center">
      <div className="mx-auto max-w-2xl px-6">
        <h2
          style={{ fontFamily: "var(--font-instrument-serif)" }}
          className="text-[32px] font-normal leading-tight tracking-tight text-white sm:text-[40px]"
        >
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[15px] text-gray-400">{subtitle}</p>
        <Link
          href="/#contact"
          className="mt-8 inline-flex rounded-full bg-gradient-to-r from-cyan-400 to-white px-7 py-3.5 text-[15.5px] font-semibold text-black shadow-[0_0_30px_-8px_rgba(34,211,238,0.6)] transition-transform hover:-translate-y-0.5"
        >
          Book a Call
        </Link>
      </div>
    </section>
  );
}
