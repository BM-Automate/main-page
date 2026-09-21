import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "react-international-phone/style.css";
import "./globals.css";
import { siteUrl, siteName, homeTitle, homeDescription } from "@/lib/site";
import FacebookPixel from "@/components/FacebookPixel";
import ChatWidget from "@/components/ChatWidget";
import { JsonLd, siteJsonLd } from "@/lib/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

// Site-wide defaults. Pages override title/description/canonical with their own
// values; a future page exporting `title: "Pricing"` renders "Pricing | BM Automate".
export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: homeTitle,
    template: `%s | ${siteName}`,
  },
  description: homeDescription,
  applicationName: siteName,
  // index/follow is the default, so only preview limits are set. Declaring
  // index here would conflict with the automatic noindex on 404 pages.
  robots: {
    googleBot: {
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName,
    locale: "en_US",
    title: homeTitle,
    description: homeDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd data={siteJsonLd} />
        {children}
        <FacebookPixel />
        {/* Chat widget only renders once ANTHROPIC_API_KEY is set on the server. */}
        {process.env.ANTHROPIC_API_KEY && <ChatWidget />}
      </body>
    </html>
  );
}
