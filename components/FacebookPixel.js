"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { FB_PIXEL_ID, pixelEnabled, trackEvent, trackPageView } from "@/lib/fbpixel";

// Homepage sections that fire ViewContent once per page load when scrolled into view.
const TRACKED_SECTIONS = {
  services: "Services",
  work: "Work",
  process: "Process",
  testimonials: "Testimonials",
};

function contactMethod(href) {
  if (href.startsWith("mailto:")) return "email";
  if (href.startsWith("tel:")) return "phone";
  if (/^https?:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)) return "whatsapp";
  return null;
}

function PixelTracking() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  // The base code fires the initial PageView. Fire again only on real route
  // changes — hash jumps like #services are the same page and are covered by
  // ViewContent instead, so they don't inflate PageView counts.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    trackPageView();
  }, [pathname]);

  // Contact: any email, phone or WhatsApp link anywhere on the site
  // (contact section and footer), via one delegated listener.
  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest?.("a[href]");
      if (!link) return;
      const method = contactMethod(link.getAttribute("href"));
      if (method) trackEvent("Contact", { content_name: method });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // ViewContent: key sections, once each per page view.
  useEffect(() => {
    const seen = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (!entry.isIntersecting || seen.has(id)) continue;
          seen.add(id);
          observer.unobserve(entry.target);
          trackEvent("ViewContent", {
            content_name: TRACKED_SECTIONS[id],
            content_category: "Homepage Section",
          });
        }
      },
      { threshold: 0.35 }
    );
    for (const id of Object.keys(TRACKED_SECTIONS)) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

export default function FacebookPixel() {
  if (!pixelEnabled) return null;

  return (
    <>
      <Script id="fb-pixel" strategy="afterInteractive">
        {`
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq.disablePushState = true;
fbq('init', '${FB_PIXEL_ID}');
fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
      <PixelTracking />
    </>
  );
}
