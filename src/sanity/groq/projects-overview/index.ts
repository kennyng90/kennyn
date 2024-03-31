import groq from 'groq';

export const projectsOverviewGroq = groq`*[_type == "project"] | order(publishedAt desc) {title, preamble, slug, accessibleImage}`;
