// Meta (Facebook) Pixel helpers.
//
// NEXT_PUBLIC_FB_PIXEL_ID       numeric Pixel ID from Meta Events Manager
// NEXT_PUBLIC_FB_PIXEL_ENABLED  "true" / "false" to force on or off;
//                               when unset the pixel only runs in production builds.
//
// NEXT_PUBLIC_* values are inlined at build time, so rebuild after changing them.
export const FB_PIXEL_ID = (process.env.NEXT_PUBLIC_FB_PIXEL_ID || "").trim();

const enabledFlag = process.env.NEXT_PUBLIC_FB_PIXEL_ENABLED;

export const pixelEnabled =
  /^\d+$/.test(FB_PIXEL_ID) &&
  (enabledFlag === undefined || enabledFlag === ""
    ? process.env.NODE_ENV === "production"
    : enabledFlag === "true");

export function trackEvent(name, params) {
  if (!pixelEnabled || typeof window === "undefined" || !window.fbq) return;
  window.fbq("track", name, params);
}

export function trackPageView() {
  trackEvent("PageView");
}
