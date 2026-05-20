import { defineField, defineType } from 'sanity'
export default defineType({ name:'analysis', title:'Αναλύσεις', type:'document', fields:[
  defineField({name:'title', title:'Title', type:'string', validation:r=>r.required()}),
  defineField({name:'slug', title:'Slug', type:'slug', options:{source:'title'}, validation:r=>r.required()}),
  defineField({name:'pair', title:'Pair', type:'string'}), defineField({name:'timeframe', title:'Timeframe', type:'string'}),
  defineField({name:'bias', title:'Bias', type:'string', options:{list:['Bullish','Bearish','Neutral']}}),
  defineField({name:'summary', title:'Summary', type:'text'}), defineField({name:'content', title:'Content', type:'array', of:[{type:'block'}]}),
  defineField({name:'chartImage', title:'Chart Image', type:'image', options:{hotspot:true}}),
  defineField({name:'publishedAt', title:'Published At', type:'datetime'})
]})
