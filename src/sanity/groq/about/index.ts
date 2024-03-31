import groq from 'groq';

export const aboutGroq = groq`*[_type == "about"][0] {title, description, blocks { ...,
    body[] {
    ...
    }
  }
  }`;
