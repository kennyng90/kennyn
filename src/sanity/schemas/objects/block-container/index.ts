import { BiLinkExternal, BiNews, BiCode, BiLink } from "react-icons/bi";
import { defineField, defineType } from "sanity";
import { accessibleImageValidator } from "../accessible-image";
import { Schema } from "@/sanity/types/schema";

/**
 * This is block content with the option of inserting objects/components
 * This is primarily used for the Generic Page type
 */
export default defineType({
  title: "Block Container",
  name: "blockContainer",
  type: "object",
  icon: BiNews,
  fields: [
    defineField({
      name: "body",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            // Annotations can be any object structure – e.g. a link or a footnote.
            annotations: [
              {
                title: "External link",
                name: "link",
                type: "object",
                icon: BiLinkExternal,
                fields: [
                  {
                    title: "External link",
                    name: "href",
                    type: "url",
                    validation: (Rule: any) =>
                      Rule.uri({
                        allowRelative: true,
                        scheme: ["https", "http", "mailto", "tel"],
                      }).required(),
                  },
                  {
                    title: "Should open link in new tab/window",
                    name: "blank",
                    type: "boolean",
                  },
                ],
              },
              {
                name: "internalLink",
                type: "object",
                title: "Internal link",
                icon: BiLink,
                fields: [
                  {
                    name: "reference",
                    type: "reference",
                    title: "Reference",
                    to: [{ type: "project" }],
                  },
                ],
              },
            ],
          },
        },
        defineField({
          type: Schema.ACCESSIBLE_IMAGE,
          name: "accessibleImage",
          title: "Image",
          validation: accessibleImageValidator,
        }),
        defineField({
          type: "code",
          title: "Code",
          name: "code",
          icon: BiCode,
          options: {
            language: "javascript",
            languageAlternatives: [
              { title: "JavaScript", value: "javascript" },
              { title: "TypeScript", value: "typescript" },
              { title: "TSX", value: "tsx" },
              { title: "JSX", value: "jsx" },
              { title: "Svelte", value: "svelte" },
            ],
            withFilename: true,
          },
        }),
      ],
    }),
  ],
});
