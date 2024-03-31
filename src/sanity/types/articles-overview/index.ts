import type { SanityDocument, Slug } from '@sanity/types';

export interface ArticlesOverview extends SanityDocument {
  title: string;
  preamble: string;
  slug: {
    current: string;
    _type: Slug;
  };
}
