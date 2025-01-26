import type { Post } from '@/sanity/sanity.types';
import { defineQuery } from 'groq'

const postFields = /* groq */`
  _id,
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  "date": coalesce(date, _updatedAt),
  "categories": categories[]->{
        "title": coalesce(title, "Untitled"),
        "slug": slug.current
  }
`;

export const getPostQuery = defineQuery(`
  *[_type == "post" && defined(slug)][0] {
    body[]{
    ...,
  },
    ${postFields}
  }
`);

export const getPostsQuery = defineQuery(`
  *[_type == "post" && defined(slug)]  | order(date asc) {
    ${postFields}
  } `);
