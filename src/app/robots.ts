import { MetadataRoute } from "next";
import { studioConfig } from "@/data/config";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${studioConfig.siteUrl}/sitemap.xml`,
  };
}
