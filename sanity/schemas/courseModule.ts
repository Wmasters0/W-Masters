import { defineField, defineType } from 'sanity'
export default defineType({ name:'courseModule', title:'Course Modules', type:'document', fields:[
  defineField({name:'title', title:'Title', type:'string', validation:r=>r.required()}), defineField({name:'summary', title:'Summary', type:'text'}),
  defineField({name:'content', title:'Content', type:'array', of:[{type:'block'}]}), defineField({name:'videoUrl', title:'Video URL', type:'url'}),
  defineField({name:'order', title:'Order', type:'number'})
]})
