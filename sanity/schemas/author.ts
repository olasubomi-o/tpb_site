import { defineField, defineType } from "@sanity/types";

export default defineType({
  name: "author",
  type: "document",
  title: "Author",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "name", maxLength: 96 },
    }),
    defineField({
      name: "role",
      type: "string",
      title: "Role / Credentials",
      description: 'e.g. "Head of Product, ex-Apple"',
    }),
    defineField({
      name: "bio",
      type: "text",
      title: "Bio",
      rows: 4,
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Photo",
      options: { hotspot: true },
    }),
    defineField({
      name: "sameAs",
      type: "array",
      title: "Social / Profile Links",
      description: "LinkedIn, X, personal site — used for author credibility signals.",
      of: [{ type: "url" }],
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "role", media: "image" },
  },
});
