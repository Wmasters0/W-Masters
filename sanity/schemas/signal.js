import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'signal',
  title: 'Signal Tracker / ROI',
  type: 'document',
  fields: [
    defineField({name: 'asset', title: 'Asset', type: 'string', validation: Rule => Rule.required()}),
    defineField({name: 'date', title: 'Ημερομηνία', type: 'datetime'}),
    defineField({name: 'setup', title: 'Setup', type: 'string'}),
    defineField({name: 'exchange', title: 'Exchange', type: 'string'}),
    defineField({name: 'entry', title: 'Entry', type: 'string'}),
    defineField({name: 'exit', title: 'Exit / Target', type: 'string'}),
    defineField({name: 'roi', title: 'ROI / Απόδοση', type: 'string'}),
    defineField({name: 'status', title: 'Status', type: 'string', options: {list: ['Open', 'Closed', 'Invalidated', 'Watchlist']}}),
    defineField({name: 'image', title: 'Screenshot', type: 'image', options: {hotspot: true}}),
    defineField({name: 'body', title: 'Σχόλια', type: 'array', of: [{type: 'block'}]}),
  ],
  preview: {
    select: {title: 'asset', subtitle: 'roi', media: 'image'}
  }
})
