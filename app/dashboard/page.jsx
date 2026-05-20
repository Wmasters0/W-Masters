import VipCTA from "@/components/VipCTA";
import { getSignals } from "../lib";

export const metadata = { title: "ROI Dashboard | W Masters" };

export default async function DashboardPage() {
  const signals = await getSignals();
  const closed = signals.filter((s) => s.status === "Closed").length;
  const top = signals[0];

  return (
    <main className="mx-auto w-[min(1220px,92%)] py-16">
      <h1 className="text-5xl font-black tracking-[-.05em] md:text-7xl">ROI Dashboard</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-[#9ba9a5]">
        Signal tracker από CMS. Κάθε signal που ανεβάζεις από το admin εμφανίζεται αυτόματα εδώ.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-4">
        <Stat label="Total Signals" value={signals.length || 0} />
        <Stat label="Closed Signals" value={closed} />
        <Stat label="Latest Asset" value={top?.asset || "—"} />
        <Stat label="Community" value="VIP" />
      </div>

      <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035]">
        <table className="w-full">
          <thead className="text-left text-xs uppercase tracking-widest text-[#f4d18a]">
            <tr><th className="p-5">Asset</th><th>Setup</th><th>Entry</th><th>Exit</th><th>ROI</th><th>Status</th><th>Exchange</th></tr>
          </thead>
          <tbody>
            {signals.map((signal) => (
              <tr key={signal.slug} className="border-t border-white/10">
                <td className="p-5 font-black">{signal.asset}</td>
                <td>{signal.setup}</td>
                <td>{signal.entry || "—"}</td>
                <td>{signal.exit || "—"}</td>
                <td className="font-black text-[#22f0a4]">{signal.roi}</td>
                <td>{signal.status}</td>
                <td>{signal.exchange || "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        {signals.filter((s) => s.image).map((signal) => (
          <div key={signal.slug} className="overflow-hidden rounded-3xl border border-white/10 bg-black/30">
            <img src={signal.image} alt={signal.asset} className="h-80 w-full object-cover" />
            <div className="flex items-center justify-between gap-4 p-5">
              <strong className="text-xl">{signal.asset} — {signal.setup}</strong>
              <span className="text-2xl font-black text-[#22f0a4]">{signal.roi}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-16">
        <VipCTA title="Πάρε πρόσβαση στα επόμενα VIP signals" text="Το dashboard δείχνει αποτελέσματα. Στο VIP παίρνεις τα setups όταν δημοσιεύονται." />
      </section>
    </main>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
      <strong className="block text-3xl font-black text-[#f4d18a]">{value}</strong>
      <span className="mt-2 block text-sm text-[#9ba9a5]">{label}</span>
    </div>
  );
}
