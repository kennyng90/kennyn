import type { SanityDocument } from '@sanity/types';
import type SchemaTypes from '@/sanity/schema-type';
import type { BlockContainer } from '@/sanity/types/block-container';

export interface Article extends SanityDocument {
  _type: SchemaTypes.PAGE_ARTICLE;
  _key: string;
  title: string;
  preamble: string;
  metaDescription: string;
  slug: { current: string };
  blocks: BlockContainer;
}
