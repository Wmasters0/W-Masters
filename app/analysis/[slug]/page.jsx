import { getAnalyses, getAnalysis } from "../../lib";
import PortableBody from "@/components/PortableBody";
import {urlFor} from "@/sanity/lib/image";
import VipCTA from "@/components/VipCTA";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return (await getAnalyses()).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const post = getAnalysis(params.slug);
  if (!post) return {};
  return { title: `${post.title} | W Masters`, description: post.summary };
}

export default async function AnalysisDetail({ params }) {
  const post = getAnalysis(params.slug);
  if (!post) notFound();
  const chartUrl = post.chart_image ? (typeof post.chart_image === 'string' ? post.chart_image : urlFor(post.chart_image)?.width(1400).url()) : null;

  return (
    <main className="mx-auto w-[min(980px,92%)] py-14">
      <a href="/analyses" className="text-sm font-black text-[#f4d18a]">← Πίσω στις αναλύσεις</a>
      <article className="mt-7 rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 md:p-9">
        <div className="flex flex-wrap gap-2 text-xs font-black uppercase tracking-widest">
          <span className="rounded-full border border-[#d8a24b]/30 px-3 py-1 text-[#f4d18a]">{post.ticker}</span>
          <span className="rounded-full border border-white/10 px-3 py-1 text-[#9ba9a5]">{post.market}</span>
          <span className="rounded-full border border-white/10 px-3 py-1 text-[#22f0a4]">{post.bias}</span>
          <span className="rounded-full border border-white/10 px-3 py-1 text-[#9ba9a5]">{post.timeframe}</span>
        </div>
        <h1 className="mt-6 text-4xl font-black leading-tight tracking-[-.045em] md:text-6xl">{post.title}</h1>
        <p className="mt-5 text-lg leading-8 text-[#9ba9a5]">{post.summary}</p>
        {chartUrl && <img src={chartUrl} alt={post.title} className="mt-8 rounded-3xl border border-white/10" />}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Info label="Setup Type" value={post.setup_type} />
          <Info label="Entry Zone" value={post.entry_zone} />
          <Info label="Stop / Invalidation" value={post.stop_loss} />
          <Info label="Risk Reward" value={post.risk_reward} />
        </div>
        {post.targets?.length > 0 && (
          <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
            <strong className="text-[#f4d18a]">Targets</strong>
            <ul className="mt-3 grid gap-2 text-[#d8e0dd]">
              {post.targets.map((target, idx) => <li key={idx}>• {target}</li>)}
            </ul>
          </div>
        )}
        <PortableBody value={post.body} />
      </article>
          <section className="mt-12">
        <VipCTA title="Θες τα setups πριν γίνουν analysis posts;" text="Μπες στο Discord VIP για live calls, updates και trade management." />
      </section>
    </main>
  );
}

function Info({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
      <div className="text-xs font-black uppercase tracking-widest text-[#f4d18a]">{label}</div>
      <div className="mt-2 text-[#d8e0dd]">{value || "—"}</div>
    </div>
  );
}
