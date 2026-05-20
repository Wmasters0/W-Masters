import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'analysis',
  title: 'Trading Αναλύσεις',
  type: 'document',
  fields: [
    defineField({name: 'featured', title: 'Ανάλυση της Εβδομάδας', type: 'boolean', initialValue: false}),
    defineField({name: 'title', title: 'Τίτλος', type: 'string', validation: Rule => Rule.required()}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title', maxLength: 96}, validation: Rule => Rule.required()}),
    defineField({name: 'date', title: 'Ημερομηνία', type: 'datetime'}),
    defineField({name: 'ticker', title: 'Ticker', type: 'string'}),
    defineField({name: 'market', title: 'Αγορά', type: 'string', options: {list: ['Crypto', 'Stocks', 'Forex', 'Commodities', 'Indexes']}}),
    defineField({name: 'timeframe', title: 'Timeframe', type: 'string'}),
    defineField({name: 'bias', title: 'Bias', type: 'string', options: {list: ['Bullish', 'Bearish', 'Neutral', 'Range']}}),
    defineField({name: 'setup_type', title: 'Setup Type', type: 'string'}),
    defineField({name: 'entry_zone', title: 'Entry Zone', type: 'string'}),
    defineField({name: 'targets', title: 'Targets', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'stop_loss', title: 'Stop Loss / Invalidation', type: 'string'}),
    defineField({name: 'risk_reward', title: 'Risk Reward', type: 'string'}),
    defineField({name: 'chart_image', title: 'Chart Image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'summary', title: 'Σύντομη Περίληψη', type: 'text'}),
    defineField({name: 'body', title: 'Πλήρης Ανάλυση', type: 'array', of: [{type: 'block'}, {type: 'image', options: {hotspot: true}}]}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'ticker', media: 'chart_image'}
  }
})
