import { defineField, defineType } from "@sanity/types";

export default defineType({
  name: "caseStudy",
  type: "document",
  title: "Case Study",
  fields: [
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "client", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "client",
      type: "string",
      title: "Client Name",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "clientDomain",
      type: "string",
      title: "Client Domain",
    }),
    defineField({
      name: "industry",
      type: "string",
      title: "Industry",
    }),
    defineField({
      name: "engagement",
      type: "string",
      title: "Engagement Type",
    }),
    defineField({
      name: "duration",
      type: "string",
      title: "Duration",
    }),
    defineField({
      name: "headline",
      type: "string",
      title: "Headline",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "challenge",
      type: "text",
      title: "Challenge",
      rows: 5,
    }),
    defineField({
      name: "approach",
      type: "text",
      title: "Approach",
      rows: 5,
    }),
    defineField({
      name: "outcomes",
      type: "array",
      title: "Outcomes",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "coverImage",
      type: "string",
      title: "Cover Image URL",
    }),
    defineField({
      name: "services",
      type: "array",
      title: "Services",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Strategy", value: "strategy" },
          { title: "AI", value: "ai" },
          { title: "Technology", value: "technology" },
          { title: "Design", value: "design" },
        ],
      },
    }),
    defineField({
      name: "featured",
      type: "boolean",
      title: "Featured",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "client", subtitle: "headline" },
  },
});
