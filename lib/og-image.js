import { ImageResponse } from "next/og";

export const ogAlt =
  "BM Automate - AI automation, custom software, web and mobile apps for businesses";
export const ogSize = { width: 1200, height: 630 };

// Shared 1200x630 social card used by opengraph-image and twitter-image.
export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(circle at 85% 15%, rgba(34,211,238,0.25), transparent 55%), #05060a",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #22d3ee, #ffffff)",
              color: "#000000",
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            BM
          </div>
          <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: 2 }}>
            AUTOMATE
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 26,
              fontWeight: 600,
              color: "#22d3ee",
              textTransform: "uppercase",
              letterSpacing: 3,
              marginBottom: 20,
            }}
          >
            Web · App · AI Automation Studio
          </div>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.1, maxWidth: 980 }}>
            AI automation &amp; custom software for growing businesses.
          </div>
        </div>

        <div style={{ fontSize: 26, color: "#9ca3af" }}>bmautomate.com</div>
      </div>
    ),
    ogSize
  );
}
