import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

import { schemaTypes } from '@/sanity/schemas';
import { myStructure } from '@/sanity/deskStructure';
import { projectId, dataset } from '@/sanity/env';

export default defineConfig({
  name: 'test',
  title: 'project test sanity',
  basePath: '/admin',
  projectId,
  dataset,

  plugins: [
    structureTool({
      structure: myStructure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
