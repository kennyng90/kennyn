import type { TypedObject } from "@portabletext/types";
import SchemaType from "@/sanity/schema-type";

/**
 * This is a block container used by the article and project page in this example
 * Sanity Portable text
 */
export interface BlockContainer {
  _type: SchemaBLOCK_CONTAINER;
  body: Array<TypedObject> | TypedObject;
}
