import type { SanityDocument } from '@sanity/types';
import type SchemaTypes from '@/sanity/schema-type';
import type { BlockContainer } from '@/sanity/types/block-container';

export interface About extends SanityDocument {
    _type: SchemaTypes.PAGE_ABOUT;
    _key: string;
    title: string;
    description: string;
    blocks: BlockContainer;
}
