import type { MetadataRoute } from "next";
import { navLinks, siteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return navLinks.map((link) => ({
    url: `${siteUrl}${link.to === "/" ? "" : link.to}`,
    lastModified,
    changeFrequency: link.to === "/" ? "weekly" : "monthly",
    priority: link.to === "/" ? 1 : 0.8,
  }));
}
