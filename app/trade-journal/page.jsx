export const metadata = { title: "Trade Journal | W Masters" };

export default function TradeJournalPage() {
  return (
    <main className="mx-auto w-[min(1220px,92%)] py-16">
      <div className="mb-5 text-xs font-black uppercase tracking-[0.25em] text-[#f4d18a]">Future tool</div>
      <h1 className="text-5xl font-black tracking-[-.05em] md:text-7xl">Trade Journal</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-[#9ba9a5]">
        Μελλοντικό εργαλείο για καταγραφή trades, win rate, R:R, screenshots, notes και performance tracking. 
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <Card title="Καταγραφή trades" text="Asset, entry, exit, stop, targets, screenshots και notes." />
        <Card title="Performance metrics" text="Win rate, average R, PnL, mistakes και setup quality." />
        <Card title="Personal review" text="Weekly review για να βλέπεις τι δουλεύει και τι όχι." />
      </div>

      <div className="mt-10 rounded-[2rem] border border-[#d8a24b]/25 bg-gradient-to-r from-[#0b4f49]/70 to-[#d8a24b]/10 p-8">
        <h2 className="text-3xl font-black">Coming soon</h2>
        <p className="mt-3 max-w-2xl text-[#9ba9a5]">
          
        </p>
      </div>
    </main>
  );
}

function Card({ title, text }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
      <h3 className="text-xl font-black text-[#f4d18a]">{title}</h3>
      <p className="mt-3 text-[#9ba9a5]">{text}</p>
    </div>
  );
}
