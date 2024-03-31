import groq from 'groq';

export const articleGroq = groq`*[_type == "article" && slug.current == $slug][0]{..., blocks { ...,
  body[] {
  ...,
  _type == "image" => {
    ...,
    asset->
  },
  markDefs[] {
    ...,
    _type == "internalLink" => {
    "slug": @.reference-> slug,
      }
  }
  }
}
}`;
