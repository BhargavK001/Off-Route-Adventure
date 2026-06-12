import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: "/api/",
      },
    ],
    sitemap: "https://offrouteadventure.in/sitemap.xml",
    host: "https://offrouteadventure.in",
  };
}

