import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/about",
          "/contact",
          "/experience",
          "/projects",
          "/resume",
          "/blog",
          "/github",
          "/services",
          "/skills",
          "/support",
        ],
        disallow: [
          "/api/",
          "/admin/",
          "/_next/",
          "/generate-project",
          "/surprise",
        ],
      },
    ],

    sitemap: "https://www.itsmeprince.com/sitemap.xml",

    host: "https://www.itsmeprince.com",
  };
}
