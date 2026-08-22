import type { Metadata } from "next";
import { getAllBlogPosts } from "@/lib/queries";
import BlogClient from "./BlogClient";

export const revalidate = 30;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Strategy, AI, and product thinking from the team at The Product Builders — practical insights for operators building products at any scale.",
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();
  return <BlogClient posts={posts} />;
}
