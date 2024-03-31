import type { SanityDocument } from "@sanity/types";
import type { BlockContainer } from "@/sanity/types/block-container";
import type { Schema } from "@/sanity/types/schema";

export interface About extends SanityDocument {
  _type: Schema.PAGE_ABOUT;
  _key: string;
  title: string;
  description: string;
  blocks: BlockContainer;
}
