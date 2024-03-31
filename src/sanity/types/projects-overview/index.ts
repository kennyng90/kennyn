import type { SanityDocument, Slug } from '@sanity/types';

export interface ProjectsOverview extends SanityDocument {
  title: string;
  preamble: string;
  slug: {
    current: string;
    _type: Slug;
  };
  accessibleImage: {
    alt: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
}
