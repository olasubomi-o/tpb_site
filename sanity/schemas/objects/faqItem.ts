import { defineField, defineType } from "@sanity/types";

export default defineType({
  name: "faqItem",
  type: "object",
  title: "Q&A",
  fields: [
    defineField({
      name: "question",
      type: "string",
      title: "Question",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "answer",
      type: "text",
      title: "Answer",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: "question" },
  },
});
