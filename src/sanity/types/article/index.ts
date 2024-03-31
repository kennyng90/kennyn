import type { SanityDocument } from "@sanity/types";
import type { BlockContainer } from "@/sanity/types/block-container";
import type { Schema } from "@/sanity/types/schema";

export interface Article extends SanityDocument {
  _type: Schema.PAGE_ARTICLE;
  _key: string;
  title: string;
  preamble: string;
  metaDescription: string;
  slug: { current: string };
  blocks: BlockContainer;
}
