import { defineField, defineType } from 'sanity'
export default defineType({ name:'lesson', title:'Μαθήματα', type:'document', fields:[
  defineField({name:'title', title:'Title', type:'string', validation:r=>r.required()}), defineField({name:'slug', title:'Slug', type:'slug', options:{source:'title'}, validation:r=>r.required()}),
  defineField({name:'category', title:'Category', type:'string'}), defineField({name:'summary', title:'Summary', type:'text'}),
  defineField({name:'videoUrl', title:'Video URL', type:'url'}), defineField({name:'content', title:'Content', type:'array', of:[{type:'block'}]}),
  defineField({name:'order', title:'Order', type:'number'})
]})
