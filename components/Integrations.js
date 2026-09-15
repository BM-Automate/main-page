"use client";

const tools = [
  "Next.js", "React Native", "Claude", "Supabase", "Gmail", "Google Sheets",
  "QuickBooks", "HubSpot", "Notion", "Stripe", "WhatsApp", "Airtable",
  "Telegram", "Shopify", "Zapier", "Google Drive", "Google Calendar",
  "Mailchimp", "Xero", "n8n",
];

function Badge({ name }) {
  return (
    <span className="mx-1.5 flex flex-shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-white/10 bg-[#161b26] px-3 py-1.5 text-[12.5px] font-medium text-gray-300">
      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-white text-[9px] font-bold text-black">
        {name.charAt(0)}
      </span>
      {name}
    </span>
  );
}

export default function Integrations() {
  return (
    <section className="border-y border-white/10 bg-[#0d1117] py-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-5 text-center text-[12px] font-semibold uppercase tracking-[0.15em] text-gray-500">
          We Build With &amp; Wire Into
        </p>
      </div>

      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee">
          {tools.map((t) => (
            <Badge key={`a-${t}`} name={t} />
          ))}
          {tools.map((t) => (
            <Badge key={`b-${t}`} name={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
