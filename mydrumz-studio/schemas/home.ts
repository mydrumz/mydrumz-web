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
      validation: (r) => r.required(),
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
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Texto ALT',
          type: 'string',
          description: 'Descripción corta de la imagen para SEO y accesibilidad',
          validation: (r) => r.required(),
        }),
      ],
    }),
    defineField({
      name: 'content',
      title: 'Contenido',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
          options: {hotspot: true},
          fields: [{name: 'alt', title: 'ALT', type: 'string'}],
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {name: 'title', title: 'Meta title', type: 'string'},
        {name: 'description', title: 'Meta description', type: 'text'},
        {
          name: 'image',
          title: 'OG image (opcional)',
          type: 'image',
          options: {hotspot: true},
        },
      ],
    }),
  ],
  preview: {select: {title: 'title', subtitle: 'subtitle', media: 'heroImage'}},
})
