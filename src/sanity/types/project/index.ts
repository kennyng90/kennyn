import type { SanityDocument } from '@sanity/types';
import type SchemaTypes from '@/sanity/schema-type';
import type { BlockContainer } from '@/sanity/types/block-container';
import { ImageGallery } from '@/sanity/types/image-gallery';

export interface Project extends SanityDocument {
  _type: SchemaTypes.PAGE_PROJECT;
  _key: string;
  title: string;
  preamble: string;
  metaDescription: string;
  slug: { current: string };
  accessibleImage: {
    _type?: SchemaTypes.ACCESSIBLE_IMAGE;
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
