import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import schemas from './sanity/schemas'

// import {visionTool} from '@sanity/vision'


export default defineConfig({
  name: 'default',
  title: 'My Portfolio',

  projectId: 'ldx63d58',
  dataset: 'production',
  apiVersion: '2023-04-13',
  basePath:'/admin', 

  plugins: [deskTool()],
  schema: { types: schemas },

}) 