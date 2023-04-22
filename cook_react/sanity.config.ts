import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: "k9p858xw",
  dataset: "production",
  title: "Cook Sanity",
  apiVersion: "2023-04-12",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas }
})

export default config