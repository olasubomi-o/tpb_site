import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import caseStudy from "./schemas/caseStudy";
import blogPost from "./schemas/blogPost";

export default defineConfig({
  projectId: "bt9s9s96",
  dataset: "production",
  title: "TPB Site CMS",
  plugins: [structureTool()],
  schema: {
    types: [caseStudy, blogPost],
  },
});
