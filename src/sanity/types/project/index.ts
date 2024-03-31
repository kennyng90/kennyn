import type { SanityDocument } from "@sanity/types";
import type { BlockContainer } from "@/sanity/types/block-container";
import { type ImageGallery } from "@/sanity/types/image-gallery";
import type { Schema } from "@/sanity/types/schema";

export interface Project extends SanityDocument {
  _type: Schema.PAGE_PROJECT;
  _key: string;
  title: string;
  preamble: string;
  metaDescription: string;
  slug: { current: string };
  accessibleImage: {
    _type?: Schema.ACCESSIBLE_IMAGE;
    alt?: string;
    caption?: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  blocks: BlockContainer;
  imageGallery: ImageGallery;
}
