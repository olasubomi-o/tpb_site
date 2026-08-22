import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import caseStudy from "./schemas/caseStudy";
import blogPost from "./schemas/blogPost";
import author from "./schemas/author";
import seo from "./schemas/objects/seo";
import faqItem from "./schemas/objects/faqItem";

export default defineConfig({
  projectId: "bt9s9s96",
  dataset: "production",
  title: "TPB Site CMS",
  basePath: "/studio",
  plugins: [structureTool()],
  schema: {
    types: [caseStudy, blogPost, author, seo, faqItem],
  },
});
