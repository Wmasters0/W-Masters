import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'lesson',
  title: 'Learn Trading Posts',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Τίτλος', type: 'string', validation: Rule => Rule.required()}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title', maxLength: 96}, validation: Rule => Rule.required()}),
    defineField({name: 'date', title: 'Ημερομηνία', type: 'datetime'}),
    defineField({name: 'category', title: 'Κατηγορία', type: 'string', options: {list: ['Market Structure', 'Liquidity', 'Risk Management', 'Psychology', 'Macro', 'Beginner']}}),
    defineField({name: 'level', title: 'Επίπεδο', type: 'string', options: {list: ['Beginner', 'Intermediate', 'Advanced']}}),
    defineField({name: 'cover_image', title: 'Cover Image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'summary', title: 'Σύντομη Περίληψη', type: 'text'}),
    defineField({name: 'body', title: 'Μάθημα / Άρθρο', type: 'array', of: [{type: 'block'}, {type: 'image', options: {hotspot: true}}]}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'category', media: 'cover_image'}
  }
})
