import { Schema } from "@/sanity/types/schema";
import type { SanityImageCrop } from "@sanity/image-url/lib/types/types";

export interface AccessibleImage {
  _type?: Schema.ACCESSIBLE_IMAGE;
  alt?: string | undefined;
  caption?: string;
  crop: SanityImageCrop;
  asset: {
    _ref: string;
    _type: string;
  };
}
