import {
  type Rule,
  type SlugRule,
  type StringRule,
  type TextRule,
  defineField,
  defineType,
} from "sanity";
import { RiArticleLine } from "react-icons/ri";
import { Schema } from "@/sanity/types/schema";

export default defineType({
  name: Schema.PAGE_ARTICLE,
  title: "Articles",
  type: "document",
  icon: RiArticleLine,
  groups: [
    { name: "content", title: "Content" },
    { name: "configuration", title: "Configuration" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Page title",
      group: "content",
      type: "string",
      validation: (Rule: StringRule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      description:
        "(required) The slug is the name of this page in the url. This can be custom, or you can use the generate button to create a url from the title (this will use the US English title). Note that the slug must be unique for all pages.",
      group: "configuration",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: SlugRule) => Rule.required(),
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
      name: "preamble",
      title: "Preamble",
      group: "content",
      type: "text",
      description: "This is the preamble of this post",
      validation: (Rule: TextRule) => Rule.required(),
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
