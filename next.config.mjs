/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve AVIF where supported, WebP otherwise (default is WebP only).
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
