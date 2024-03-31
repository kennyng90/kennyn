import groq from 'groq';

export const projectGroq = groq`*[_type == "project" && slug.current == $slug][0]{..., blocks { ...,
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
