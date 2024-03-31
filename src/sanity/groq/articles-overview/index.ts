import groq from 'groq';

export const articlesOverviewGroq = groq`*[_type == "article"] | order(publishedAt desc) {title, preamble, slug}`;
