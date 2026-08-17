import { defineField, defineType } from "@sanity/types";

export default defineType({
  name: "seo",
  type: "object",
  title: "SEO & AI Discoverability",
  options: { collapsible: true, collapsed: true },
  fields: [
    defineField({
      name: "metaTitle",
      type: "string",
      title: "Meta Title",
      description: "Overrides the page title. Falls back to the post title. Keep under 60 characters.",
      validation: (Rule) =>
        Rule.max(60).warning("Titles over 60 characters may be truncated in search results."),
    }),
    defineField({
      name: "metaDescription",
      type: "text",
      title: "Meta Description",
      rows: 3,
      description: "Falls back to the excerpt. Keep under 160 characters.",
      validation: (Rule) =>
        Rule.max(160).warning("Descriptions over 160 characters may be truncated."),
    }),
    defineField({
      name: "canonicalUrl",
      type: "url",
      title: "Canonical URL Override",
      description:
        "Only set if this content is republished/syndicated elsewhere and this is not the canonical version.",
    }),
    defineField({
      name: "ogImage",
      type: "image",
      title: "Social Share Image Override",
      description: "Falls back to the cover image. Recommended 1200x630.",
      options: { hotspot: true },
    }),
    defineField({
      name: "noindex",
      type: "boolean",
      title: "Hide from search engines",
      description:
        "Enable to exclude this post from indexing and the sitemap (e.g. early drafts, duplicate content).",
      initialValue: false,
    }),
  ],
});
