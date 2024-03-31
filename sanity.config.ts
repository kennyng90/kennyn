// Different environments use different variables
const projectId =
  import.meta.env.PUBLIC_SANITY_STUDIO_PROJECT_ID! || import.meta.env.PUBLIC_SANITY_PROJECT_ID!;
const dataset =
  import.meta.env.PUBLIC_SANITY_STUDIO_DATASET! || import.meta.env.PUBLIC_SANITY_DATASET!;

import { schemaTypes } from "@/sanity/schemas/";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { codeInput } from "@sanity/code-input";

export default defineConfig({
  name: "kennyn",
  title: "kenny's portfolio",
  projectId,
  dataset,
  plugins: [structureTool(), codeInput()],
  schema: {
    types: schemaTypes,
  },
});
