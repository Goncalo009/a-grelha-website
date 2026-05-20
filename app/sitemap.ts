import { publicRoutes, siteConfig } from "@/config/site";
import { appMenuItems } from "@/lib/app-menu";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routeEntries = publicRoutes.map((route) => ({
    url: `${siteConfig.url}${route.path === "/" ? "" : route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const menuItemEntries = appMenuItems.map((item) => ({
    url: `${siteConfig.url}/menu/${item.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: item.section === "featured" ? 0.78 : 0.62,
  }));

  return [...routeEntries, ...menuItemEntries];
}
