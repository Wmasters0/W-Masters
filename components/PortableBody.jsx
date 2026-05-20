import {PortableText} from 'next-sanity'
import {urlFor} from '@/sanity/lib/image'

const components = {
  types: {
    image: ({value}) => {
      const url = urlFor(value)?.width(1200).url()
      if (!url) return null
      return <img src={url} alt="" className="my-8 rounded-3xl border border-white/10" />
    },
  },
}

export default function PortableBody({value}) {
  if (!value) return null
  return <div className="prose prose-invert mt-10 max-w-none"><PortableText value={value} components={components} /></div>
}
