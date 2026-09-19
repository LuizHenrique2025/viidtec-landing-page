export const dynamic = "force-static";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://luizhenrique2025.github.io/viidtec-landing-page",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

