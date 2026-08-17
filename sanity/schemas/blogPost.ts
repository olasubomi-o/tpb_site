import { defineField, defineType } from "@sanity/types";

export default defineType({
  name: "blogPost",
  type: "document",
  title: "Blog Post",
  fieldsets: [
    {
      name: "aeo",
      title: "FAQ / AI Answers",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      title: "Published At",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "authorRef",
      type: "reference",
      title: "Author",
      to: [{ type: "author" }],
    }),
    // TODO: remove once all posts have authorRef set
    defineField({
      name: "author",
      type: "string",
      title: "Author (legacy — use Author reference above)",
    }),
    defineField({
      name: "excerpt",
      type: "text",
      title: "Excerpt",
      rows: 3,
    }),
    defineField({
      name: "coverImage",
      type: "image",
      title: "Cover Image",
      options: { hotspot: true },
    }),
    defineField({
      name: "category",
      type: "string",
      title: "Category",
      options: {
        list: [
          { title: "Strategy", value: "strategy" },
          { title: "AI & Automation", value: "ai-automation" },
          { title: "Product", value: "product" },
          { title: "Design", value: "design" },
          { title: "Technology", value: "technology" },
        ],
      },
    }),
    defineField({
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "body",
      type: "array",
      title: "Body",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt text",
            },
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "featured",
      type: "boolean",
      title: "Featured",
      initialValue: false,
    }),
    defineField({
      name: "tldr",
      type: "text",
      title: "Key Takeaways / TL;DR",
      rows: 4,
      description: "Short summary used by AI answer engines to extract a quick, quotable overview.",
      fieldset: "aeo",
    }),
    defineField({
      name: "faq",
      type: "array",
      title: "FAQ",
      description:
        "Optional Q&A pairs. Improves eligibility for AI Overviews and answer-engine citations. Leave empty if not applicable.",
      of: [{ type: "faqItem" }],
      fieldset: "aeo",
    }),
    defineField({
      name: "seo",
      type: "seo",
      title: "SEO & AI Discoverability",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "publishedAt" },
  },
});
