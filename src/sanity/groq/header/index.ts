import groq from 'groq';

export const headerGroq = groq`*[_type == "mainMenu"][0]`;
