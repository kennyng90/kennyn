import { defineType } from "sanity";
import { accessibleImageValidator } from "../accessible-image";
import { Schema } from "@/sanity/types/schema";
export default defineType({
  type: "array",
  title: "Image Gallery",
  description: "Upload images for a gallery",
  name: "imageGallery",
  of: [
    {
      type: Schema.ACCESSIBLE_IMAGE,
      name: "accessibleImage",
      title: "Image",
      validation: accessibleImageValidator,
    },
  ],
});
