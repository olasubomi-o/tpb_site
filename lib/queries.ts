import { sanityClient } from "./sanity";

export interface CaseStudy {
  _id: string;
  id: { current: string };
  client: string;
  clientDomain: string;
  industry: string;
  engagement: string;
  duration: string;
  headline: string;
  challenge: string;
  approach: string;
  outcomes: string[];
  tags: string[];
  coverImage: string;
  services: string[];
  featured: boolean;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  coverImage: string;
  category: string;
  tags: string[];
  author: string;
  body: unknown[];
  featured: boolean;
}

const CASE_STUDY_FIELDS = `
  _id,
  "id": slug,
  client,
  clientDomain,
  industry,
  engagement,
  duration,
  headline,
  challenge,
  approach,
  outcomes,
  tags,
  coverImage,
  services,
  featured
`;

const BLOG_POST_FIELDS = `
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  coverImage,
  category,
  tags,
  author,
  featured
`;

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  return sanityClient.fetch(
    `*[_type == "caseStudy"] | order(_createdAt asc) { ${CASE_STUDY_FIELDS} }`
  );
}

export async function getFeaturedCaseStudies(): Promise<CaseStudy[]> {
  return sanityClient.fetch(
    `*[_type == "caseStudy" && featured == true] | order(_createdAt asc) { ${CASE_STUDY_FIELDS} }`
  );
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  return sanityClient.fetch(
    `*[_type == "caseStudy" && slug.current == $slug][0] { ${CASE_STUDY_FIELDS} }`,
    { slug }
  );
}

export async function getCaseStudiesByService(serviceSlug: string): Promise<CaseStudy[]> {
  return sanityClient.fetch(
    `*[_type == "caseStudy" && $service in services] | order(_createdAt asc) { ${CASE_STUDY_FIELDS} }`,
    { service: serviceSlug }
  );
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  return sanityClient.fetch(
    `*[_type == "blogPost"] | order(publishedAt desc) { ${BLOG_POST_FIELDS} }`
  );
}

export async function getFeaturedBlogPosts(): Promise<BlogPost[]> {
  return sanityClient.fetch(
    `*[_type == "blogPost" && featured == true] | order(publishedAt desc) { ${BLOG_POST_FIELDS} }`
  );
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  return sanityClient.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] {
      ${BLOG_POST_FIELDS},
      body
    }`,
    { slug }
  );
}

export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  return sanityClient.fetch(
    `*[_type == "blogPost" && category == $category] | order(publishedAt desc) { ${BLOG_POST_FIELDS} }`,
    { category }
  );
}
