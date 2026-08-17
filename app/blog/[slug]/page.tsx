import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/queries";
import { absoluteUrl, SITE_NAME } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import BlogPostClient from "./BlogPostClient";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((p) => ({ slug: p.slug.current }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return {};

  const title = post.seo?.metaTitle || post.title;
  const description = post.seo?.metaDescription || post.excerpt;
  const url = post.seo?.canonicalUrl || absoluteUrl(`/blog/${slug}`);
  const ogImage = post.seo?.ogImage || post.coverImage;
  const authorName = post.authorRef?.name || post.author;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: post.seo?.noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      title,
      description,
      type: "article",
      url,
      publishedTime: post.publishedAt,
      authors: authorName ? [authorName] : undefined,
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [post, allPosts] = await Promise.all([
    getBlogPostBySlug(slug),
    getAllBlogPosts(),
  ]);

  if (!post) notFound();

  const related = allPosts.filter((p) => p._id !== post._id).slice(0, 2);
  const url = absoluteUrl(`/blog/${slug}`);

  const author = post.authorRef
    ? {
        "@type": "Person",
        name: post.authorRef.name,
        ...(post.authorRef.sameAs?.length ? { sameAs: post.authorRef.sameAs } : {}),
      }
    : post.author
    ? { "@type": "Person", name: post.author }
    : undefined;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    image: post.coverImage ? [post.coverImage] : undefined,
    author,
    publisher: { "@type": "Organization", name: SITE_NAME },
    mainEntityOfPage: url,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Blog", item: absoluteUrl("/blog") },
      { "@type": "ListItem", position: 2, name: post.title, item: url },
    ],
  };

  const faqJsonLd = post.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }
    : null;

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      {faqJsonLd && <JsonLd data={faqJsonLd} />}
      <BlogPostClient post={post} related={related} />
    </>
  );
}
