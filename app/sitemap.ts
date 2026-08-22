import type { MetadataRoute } from "next";
import { services } from "@/lib/serviceData";
import { getAllCaseStudies, getAllBlogPosts } from "@/lib/queries";

const BASE_URL = "https://theproductbuilders.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [caseStudies, blogPosts] = await Promise.all([
    getAllCaseStudies().catch(() => []),
    getAllBlogPosts().catch(() => []),
  ]);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/case-studies`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/workshops`, changeFrequency: "weekly", priority: 0.7 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((c) => ({
    url: `${BASE_URL}/case-studies/${c.id?.current}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug?.current}`,
    lastModified: p.publishedAt ? new Date(p.publishedAt) : undefined,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...caseStudyRoutes, ...blogRoutes];
}
