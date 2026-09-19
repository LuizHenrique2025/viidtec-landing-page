/** @type {import('next').NextConfig} */
const exporting = process.env.VIIDTEC_EXPORT === "1";
const nextConfig = {
  reactStrictMode: true,
  distDir: process.env.VIIDTEC_BUILD_DIR || ".next",
  poweredByHeader: false,
  compress: true,
  ...(exporting ? { output: "export", basePath: "/viidtec-landing-page", trailingSlash: true } : {}),
  images: { formats: ["image/avif", "image/webp"], unoptimized: exporting },
};
export default nextConfig;
