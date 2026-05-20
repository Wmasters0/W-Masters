import AnalysisCard from "@/components/AnalysisCard";
import VipCTA from "@/components/VipCTA";
import { getAnalyses } from "../lib";

export const metadata = { title: "Αναλύσεις | W Masters" };

export default async function AnalysesPage() {
  const analyses = await getAnalyses();
  return (
    <main className="mx-auto w-[min(1220px,92%)] py-16">
      <h1 className="text-5xl font-black tracking-[-.05em] md:text-7xl">Αναλύσεις</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-[#9ba9a5]"></p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {analyses.map((post) => <AnalysisCard key={post.slug} post={post} />)}
      </div>
          <section className="mt-16">
        <VipCTA title="Θες τα VIP calls πίσω από τις αναλύσεις;" text="Μπες στο Discord VIP για setups, updates και signal follow-ups." />
      </section>
    </main>
  );
}
