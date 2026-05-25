import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-05-25");

  return [
    {
      url: "https://sheapp.in",
      lastModified,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: "https://sheapp.in/privacy",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: "https://sheapp.in/terms",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6
    }
  ];
}
