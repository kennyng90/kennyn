import {
  type ArrayRule,
  type StringRule,
  type ReferenceRule,
  defineField,
  defineType,
} from "sanity";
import { BiMenu } from "react-icons/bi";
import { Schema } from "@/sanity/types/schema";
export default defineType({
  name: Schema.MAIN_MENU,
  title: "Header",
  description: "This is the main menu",
  type: "document",
  icon: BiMenu,
  fields: [
    defineField({
      name: "title",
      title: "Main title",
      type: "string",
      validation: (Rule: StringRule) => Rule.required(),
    }),
    defineField({
      name: "menuItems",
      title: "Menu items",
      description: "Add, remove and edit of menu items",
      type: "array",
      of: [{ type: Schema.MAIN_MENU_LINK_ITEM_OBJECT }],
      validation: (Rule: ArrayRule<ReferenceRule>) =>
        Rule.required().min(1).error("You must have at least one menu item"),
    }),
  ],
});
