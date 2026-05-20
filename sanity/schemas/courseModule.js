import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'courseModule',
  title: 'Course Modules',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Τίτλος', type: 'string', validation: Rule => Rule.required()}),
    defineField({name: 'order', title: 'Order', type: 'number'}),
    defineField({name: 'summary', title: 'Summary', type: 'text'}),
    defineField({name: 'body', title: 'Content', type: 'array', of: [{type: 'block'}, {type: 'image', options: {hotspot: true}}]}),
  ],
})
