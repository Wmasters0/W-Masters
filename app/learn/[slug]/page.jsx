import { getLessons, getLesson } from "../../lib";
import PortableBody from "@/components/PortableBody";
import {urlFor} from "@/sanity/lib/image";
import VipCTA from "@/components/VipCTA";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return (await getLessons()).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const post = getLesson(params.slug);
  if (!post) return {};
  return { title: `${post.title} | W Masters Learn`, description: post.summary };
}

export default async function LessonDetail({ params }) {
  const post = getLesson(params.slug);
  if (!post) notFound();

  const coverUrl = post.cover_image ? (typeof post.cover_image === 'string' ? post.cover_image : urlFor(post.cover_image)?.width(1400).url()) : null;

  return (
    <main className="mx-auto w-[min(980px,92%)] py-14">
      <a href="/learn" className="text-sm font-black text-[#f4d18a]">← Πίσω στο Learn Trading</a>
      <article className="mt-7 rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 md:p-9">
        <div className="flex flex-wrap gap-2 text-xs font-black uppercase tracking-widest">
          <span className="rounded-full border border-[#d8a24b]/30 px-3 py-1 text-[#f4d18a]">{post.category}</span>
          <span className="rounded-full border border-white/10 px-3 py-1 text-[#22f0a4]">{post.level}</span>
        </div>
        <h1 className="mt-6 text-4xl font-black leading-tight tracking-[-.045em] md:text-6xl">{post.title}</h1>
        <p className="mt-5 text-lg leading-8 text-[#9ba9a5]">{post.summary}</p>
        {coverUrl && <img src={coverUrl} alt={post.title} className="mt-8 rounded-3xl border border-white/10" />}
        <PortableBody value={post.body} />
      </article>
          <section className="mt-12">
        <VipCTA title="Θες να εφαρμόσεις αυτά που μαθαίνεις;" text="Μπες στο Discord VIP για live setups, community και καθημερινό feedback." />
      </section>
    </main>
  );
}
