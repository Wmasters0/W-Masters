import { defineField, defineType } from 'sanity'
export default defineType({ name:'roi', title:'ROI Dashboard', type:'document', fields:[
  defineField({name:'title', title:'Title', type:'string'}), defineField({name:'pair', title:'Pair', type:'string', validation:r=>r.required()}),
  defineField({name:'side', title:'Side', type:'string', options:{list:['Long','Short','Spot','Setup']}}), defineField({name:'leverage', title:'Leverage', type:'string'}),
  defineField({name:'roiPercent', title:'ROI %', type:'number'}), defineField({name:'screenshot', title:'Screenshot', type:'image', options:{hotspot:true}}),
  defineField({name:'date', title:'Date', type:'date'})
]})
