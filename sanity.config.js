/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.jsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './src/utils/sanity/env'
import {schema} from './src/utils/sanity/schema'
import { colorInput } from '@sanity/color-input'

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"])

// Define the singleton document types
const singletonTypes = new Set(['info'])

export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  // schema,
  plugins: [
    colorInput(),
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Info')
              .id('info')
              .icon(() => '💁‍♀️')
              .child(
                S.document()
                  .schemaType('info')
                  .documentId('info')
              ),
            S.listItem()
              .title('Landing Blurb')
              .id('landing_blurb')
              .icon(() => '🏠')
              .child(
                S.document()
                  .schemaType('landing_blurb')
                  .documentId('landing_blurb')
              ),
            S.documentTypeListItem('case_study').title('Case Study'),
            S.documentTypeListItem('writing').title('Writing'),
            S.documentTypeListItem('skill').title('Skill'),
            S.documentTypeListItem('team_member').title('Team Member'),
            S.documentTypeListItem('deliverable').title('Deliverable'),
          ])
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],

  schema: {
    types: schema.types,
    // Filter out singleton types from the global “New document” menu options
    templates: (templates) => 
      templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) => 
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  }
})
