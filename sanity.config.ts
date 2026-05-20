import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'wMastersStudio',
  title: 'W Masters Admin',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'replace_me',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  plugins: [structureTool()],
  schema: { types: schemaTypes }
})
