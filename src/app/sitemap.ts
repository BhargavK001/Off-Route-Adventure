import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.offrouteadventure.in";
  const lastModified = new Date("2026-02-25");

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          "en-IN": baseUrl,
        },
      },
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          "en-IN": `${baseUrl}/about`,
        },
      },
    },
    {
      url: `${baseUrl}/explore`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          "en-IN": `${baseUrl}/explore`,
        },
      },
    },
    {
      url: `${baseUrl}/plans`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          "en-IN": `${baseUrl}/plans`,
        },
      },
    },
    {
      url: `${baseUrl}/book`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          "en-IN": `${baseUrl}/book`,
        },
      },
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          "en-IN": `${baseUrl}/contact`,
        },
      },
    },
  ];
}

