import AnalysisCard from "@/components/AnalysisCard";
import TradingViewSection from "@/components/TradingViewSection";
import TwitterSection from "@/components/TwitterSection";
import VipCTA from "@/components/VipCTA";
import CourseCTA from "@/components/CourseCTA";
import RotatingLogo3D from "@/components/RotatingLogo3D";
import { getAnalyses, getWeeklyAnalysis } from "./lib";

const discord = "https://discord.gg/yDzT3uZ2p";

export default async function Home() {
  const analyses = (await getAnalyses()).slice(0, 3);
  const weekly = await getWeeklyAnalysis();

  return (
    <main>
      <section className="mx-auto grid w-[min(1220px,92%)] items-center gap-12 py-20 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="mb-5 text-xs font-black uppercase tracking-[0.25em] text-[#f4d18a]">Premium trading community</div>
          <h1 className="text-5xl font-black leading-[.94] tracking-[-.06em] md:text-7xl lg:text-8xl">Trading με πλάνο,</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#9ba9a5]">
            Το W Masters είναι ελληνική trading κοινότητα
            <br />
            Τεχνική ανάλυση, macro/liquidity εικόνα, εκπαιδευτικό υλικό και ξεκάθαρο risk management.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={discord} target="_blank" className="rounded-full bg-gradient-to-r from-[#f4d18a] to-[#d8a24b] px-6 py-4 font-black text-black">Μπες στο VIP</a>
            <a href={weekly ? `/analysis/${weekly.slug}` : "/analyses"} className="rounded-full border border-[#d8a24b]/30 bg-white/[0.035] px-6 py-4 font-black">Ανάλυση της Εβδομάδας</a>
            <a href="/coaching" className="rounded-full border border-white/10 bg-white/[0.035] px-6 py-4 font-black">Book 1on1</a>
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-[#d8a24b]/25 bg-[#071211] p-4 shadow-2xl">
          <RotatingLogo3D />
        </div>
      </section>

      <section id="results" className="mx-auto w-[min(1220px,92%)] py-16">
        <h2 className="text-4xl font-black tracking-[-.04em] md:text-6xl">Discord calls</h2>
        <p className="mt-4 max-w-3xl text-[#9ba9a5]">Screenshots από calls, setups και αποτελέσματα της κοινότητας.</p>
        <div className="mt-9 grid gap-6 md:grid-cols-2">
          {[
            ["/assets/signal_1.png", "RAVEUSDT Long 5X", "+10514.05%"],
            ["/assets/signal_8.png", "RIVERUSDT Long 10X", "+2027.94%"],
            ["/assets/signal_4.png", "ETHUSDT Setup", "+36.25%"],
            ["/assets/hype_home.jpg", "HYPEUSDT Setup", "+57.18%"]
          ].map(([img,title,roi]) => (
            <div key={title} className="overflow-hidden rounded-3xl border border-white/10 bg-black/30">
              <img src={img} alt={title} className="h-80 w-full object-cover" />
              <div className="flex items-center justify-between gap-4 p-5">
                <strong className="text-xl">{title}</strong>
                <span className="text-2xl font-black text-[#22f0a4]">{roi}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(1220px,92%)] py-16">
        <div className="grid gap-5 md:grid-cols-4">
          <a href="/analyses" className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition hover:border-[#d8a24b]/40">
            <h3 className="text-2xl font-black text-[#f4d18a]">Αναλύσεις</h3>
            <p className="mt-3 text-[#9ba9a5]">Ανάλυση της εβδομάδας και προηγούμενες αναλύσεις.</p>
          </a>
          <a href="/dashboard" className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition hover:border-[#d8a24b]/40">
            <h3 className="text-2xl font-black text-[#f4d18a]">ROI Dashboard</h3>
            <p className="mt-3 text-[#9ba9a5]">Calls, αποδόσεις και signal tracker.</p>
          </a>
          <a href="/learn" className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition hover:border-[#d8a24b]/40">
            <h3 className="text-2xl font-black text-[#f4d18a]">Learn Trading</h3>
            <p className="mt-3 text-[#9ba9a5]">Εκπαιδευτικά posts και course hub.</p>
          </a>
          <a href="/trade-journal" className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition hover:border-[#d8a24b]/40">
            <h3 className="text-2xl font-black text-[#f4d18a]">Trade Journal</h3>
            <p className="mt-3 text-[#9ba9a5]">Μελλοντικό tool για καταγραφή trades.</p>
          </a>
        </div>
      </section>

      <section className="mx-auto w-[min(1220px,92%)] py-16">
        <CourseCTA />
      </section>

      <section className="mx-auto w-[min(1220px,92%)] py-16">
        <h2 className="text-4xl font-black tracking-[-.04em] md:text-6xl">Προηγούμενες αναλύσεις</h2>
                <div className="mt-9 grid gap-6 md:grid-cols-3">
          {analyses.map((post) => <AnalysisCard key={post.slug} post={post} />)}
        </div>
      </section>

      <TwitterSection />

      <TradingViewSection />

      <section className="mx-auto w-[min(1220px,92%)] py-16">
        <VipCTA />
      </section>
    </main>
  );
}
