import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.itsmeprince.com";

  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/experience",
    "/projects",
    "/resume",
    "/services",
    "/skills",
    "/support",
    "/surprise",
  ];

  const staticUrls = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  return [...staticUrls];
}
