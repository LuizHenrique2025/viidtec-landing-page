export const dynamic = "force-static";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://luizhenrique2025.github.io/viidtec-landing-page/sitemap.xml",
  };
}

