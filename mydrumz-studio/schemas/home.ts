// mydrumz-studio/schemas/home.ts
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Imagen principal',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
    }),
    defineField({
      name: 'content',
      title: 'Contenido',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Meta title', type: 'string' },
        { name: 'metaDescription', title: 'Meta description', type: 'text' },
      ],
    }),
  ],
})
