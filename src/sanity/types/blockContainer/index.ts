import type { TypedObject } from "@portabletext/types";
import { Schema } from "@/sanity/types/schema";

/**
 * This is a block container used by the article and project page in this example
 * Sanity Portable text
 */
export interface BlockContainer {
  _type: Schema.BLOCK_CONTAINER;
  body: Array<TypedObject> | TypedObject;
}
