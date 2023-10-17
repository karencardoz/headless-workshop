import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'MediaModule',
  title: 'Media Module',
  type: 'object',
  fields: [
    defineField({
      type: 'string',
      name: 'heading',
      title: 'Heading',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'text',
      name: 'body',
      title: 'Body',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'Cta',
    }),
    defineField({
      type: 'boolean',
      name: 'isDark',
      title: 'Is Dark?',
      initialValue: true,
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'image',
      options: {
        hotspot: true,
      },
      name: 'image',
      title: 'Image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'imageAlt',
      title: 'Alternative text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'boolean',
      name: 'imageOnRight',
      title: 'Image On Right ?',
      initialValue: true,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'body',
    },
    prepare({ title }) {
      return {
        subtitle: 'MediaModule',
        title,
      }
    },
  },
})
