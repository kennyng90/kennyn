import { type StringRule, type UrlRule, defineField, defineType } from "sanity";
import { AiOutlineLink } from "react-icons/ai";
import { Schema } from "@/sanity/types/schema";

export default defineType({
  name: Schema.MAIN_MENU_LINK_ITEM_OBJECT,
  title: "Link items",
  description: "This creates a menu item with a link to a relative or absolute url",
  type: "object",
  icon: AiOutlineLink,
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule: StringRule) => Rule.required(),
    }),
    defineField({
      name: "url",
      title: "Url",
      type: "url",
      validation: (Rule: UrlRule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["https", "http", "mailto", "tel"],
        }).required(),
    }),
  ],
});
