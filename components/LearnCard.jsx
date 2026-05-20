import {urlFor} from '@/sanity/lib/image'

export default function LearnCard({ post }) {
  const imageUrl = post.cover_image
    ? (typeof post.cover_image === 'string' ? post.cover_image : urlFor(post.cover_image)?.width(900).height(500).url())
    : null

  return (
    <a href={`/learn/${post.slug}`} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] shadow-2xl transition hover:-translate-y-1 hover:border-[#d8a24b]/40">
      {imageUrl ? (
        <img src={imageUrl} alt={post.title} className="h-56 w-full object-cover" />
      ) : (
        <div className="grid h-56 place-items-center bg-[#061312] text-[#d8a24b]">W Masters Lesson</div>
      )}
      <div className="p-6">
        <div className="mb-3 flex flex-wrap gap-2 text-xs font-black uppercase tracking-widest">
          <span className="rounded-full border border-[#d8a24b]/30 px-3 py-1 text-[#f4d18a]">{post.level || "All Levels"}</span>
          <span className="rounded-full border border-white/10 px-3 py-1 text-[#9ba9a5]">{post.category || "Education"}</span>
        </div>
        <h3 className="text-2xl font-black tracking-tight group-hover:text-[#f4d18a]">{post.title}</h3>
        <p className="mt-3 line-clamp-3 text-[#9ba9a5]">{post.summary}</p>
      </div>
    </a>
  )
}
