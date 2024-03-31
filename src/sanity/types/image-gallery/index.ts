import SchemaType from "@/sanity/schema-type";
import { SanityImageCrop } from "@sanity/image-url/lib/types/types";
import type { SanityDocument } from "@sanity/types";

export interface ImageGallery extends SanityDocument {
  _type: SchemaIMAGE_GALLERY;
  alt: string;
  key: string;
  crop: SanityImageCrop;
  asset: {
    _ref: string;
    _type: string;
  };
  title: string;
}
