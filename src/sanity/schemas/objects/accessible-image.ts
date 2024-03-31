import { BiImage } from "react-icons/bi";
import { defineField, defineType } from "sanity";
import { Schema } from "@/sanity/types/schema";
interface AccessibleImage {
  alt: string;
  caption?: string;
  asset?: {
    _ref: string;
    _type: string;
  };
}

interface Context {
  type: {
    title: string;
  };
}

/**
 * Validator function for Image
 */
export function accessibleImageValidator(Rule: any) {
  return Rule.custom((fields: AccessibleImage, context: Context) => {
    if (fields && fields.asset && fields.asset._ref && typeof fields.alt === "string") {
      return true;
    }
    return `${context.type.title}: The image and an alt text is required`;
  });
}

export default defineType({
  type: "image",
  title: "Image with caption",
  name: Schema.ACCESSIBLE_IMAGE,
  options: { hotspot: true },
  icon: BiImage,
  fields: [
    defineField({
      name: "title",
      title: "Title for image (optional)",
      type: "string",
    }),
    defineField({
      name: "alt",
      title: "Alternative text",
      type: "string",
    }),
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
      description: "(optional) A description which will be shown under the image",
    }),
  ],
});
