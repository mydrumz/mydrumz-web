// mydrumz-studio/sanity.config.ts
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import home from './schemas/home'

export default defineConfig({
  name: 'default',
  title: 'mydrumz-studio',
  projectId: 'o8905hxl', 
  dataset: 'production',
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Contenido')
          .items([
            S.listItem()
              .title('Home')
              .schemaType('home')
              .child(
                S.document()
                  .schemaType('home')
                  .documentId('home') 
              ),
          ]),
    }),
  ],
  schema: {
    types: [home], 
  },
})
