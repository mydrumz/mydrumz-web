// mydrumz-studio/schemas/page.ts
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Página',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'URL',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    }),
    defineField({
      name: 'content',
      title: 'Contenido',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen destacada',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})
