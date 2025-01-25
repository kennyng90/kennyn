
const postFields = /* groq */ `
  _id,
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  "date": coalesce(date, _updatedAt),
  "categories": categories[]->{
        "title": coalesce(title, "Untitled"),
        "slug": slug.current
  },
  "tags": tags[]->{
        "title": coalesce(title, "Untitled"),
        "slug": slug.current
  }
`;

// export const qetPostQuery = defineQuery(`
//   *[_type == "post" && slug.current == $categorySlug] [0] {
//     body[]{
//     ...,
//   },
//     ${postFields}
//   }
// `);


// export const posts = defineQuery(`
//   *[_type == "post"]  | order(date asc) {
//     ${postFields}
//   } `);


// export const allCategoryPostsQuery = defineQuery(`
//   *[_type == "post" && references(*[_type == "category" && slug.current == $category]._id)]  | order(date asc) {
//     ${postFields}
//   }
//   `);