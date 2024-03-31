import { Schema } from "@/sanity/types/schema";
import { type SanityImageCrop } from "@sanity/image-url/lib/types/types";
import type { SanityDocument } from "@sanity/types";

export interface ImageGallery extends SanityDocument {
  _type: Schema.IMAGE_GALLERY;
  alt: string;
  key: string;
  crop: SanityImageCrop;
  asset: {
    _ref: string;
    _type: string;
  };
  title: string;
}
