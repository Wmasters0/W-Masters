import {urlFor} from '@/sanity/lib/image'

export default function AnalysisCard({ post }) {
  const imageUrl = post.chart_image
    ? (typeof post.chart_image === 'string' ? post.chart_image : urlFor(post.chart_image)?.width(900).height(600).url())
    : null

  return (
    <a href={`/analysis/${post.slug}`} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] shadow-2xl transition hover:-translate-y-1 hover:border-[#d8a24b]/40">
      {imageUrl ? (
        <img src={imageUrl} alt={post.title} className="h-64 w-full object-cover" />
      ) : (
        <div className="grid h-64 place-items-center bg-[#061312] text-[#d8a24b]">W Masters Analysis</div>
      )}
      <div className="p-6">
        <div className="mb-3 flex flex-wrap gap-2 text-xs font-black uppercase tracking-widest">
          <span className="rounded-full border border-[#d8a24b]/30 px-3 py-1 text-[#f4d18a]">{post.ticker || 'W Masters'}</span>
          <span className="rounded-full border border-white/10 px-3 py-1 text-[#9ba9a5]">{post.timeframe || 'Market'}</span>
          <span className="rounded-full border border-white/10 px-3 py-1 text-[#22f0a4]">{post.bias || 'Analysis'}</span>
        </div>
        <h3 className="text-2xl font-black tracking-tight group-hover:text-[#f4d18a]">{post.title}</h3>
        <p className="mt-3 line-clamp-3 text-[#9ba9a5]">{post.summary}</p>
      </div>
    </a>
  )
}
