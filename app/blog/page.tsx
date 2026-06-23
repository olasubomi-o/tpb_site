import { getAllBlogPosts } from "@/lib/queries";
import BlogClient from "./BlogClient";

export const revalidate = 30;

export default async function BlogPage() {
  const posts = await getAllBlogPosts();
  return <BlogClient posts={posts} />;
}
