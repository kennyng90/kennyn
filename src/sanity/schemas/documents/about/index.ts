import { type Rule, type StringRule, defineField, defineType } from "sanity";
import { RiUser2Line } from "react-icons/ri";
import { Schema } from "@/sanity/types/schema";
export default defineType({
  name: Schema.PAGE_ABOUT,
  title: "About",
  type: "document",
  icon: RiUser2Line,
  groups: [
    { name: "content", title: "Content" },
    { name: "configuration", title: "Configuration" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "title",
      group: "content",
      type: "string",
      validation: (Rule: StringRule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "description",
      group: "content",
      type: "string",
      validation: (Rule: StringRule) => Rule.required(),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta description",
      type: "string",
      group: "seo",
      description:
        "This field will be used for the meta description (SEO). It should describe the content of the page and must be between 55 and 160 characters",
      validation: (Rule: StringRule) => Rule.required().min(55).max(160),
    }),
    defineField({
      name: "blocks",
      title: "Page content",
      description:
        "This is where you create the public main content for the page. Note that there is one block content field for each language.",
      group: "content",
      type: "blockContainer",
      validation: (Rule: Rule) => Rule.required(),
    }),
  ],
});
