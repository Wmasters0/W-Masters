import VipCTA from "@/components/VipCTA";

export const metadata = { title: "Book 1on1 Coaching | W Masters" };

export default function CoachingPage() {
  return (
    <main className="mx-auto w-[min(1220px,92%)] py-16">
      <section className="grid gap-10 lg:grid-cols-[1fr_.85fr]">
        <div>
          <div className="mb-5 text-xs font-black uppercase tracking-[0.25em] text-[#f4d18a]">Personal coaching</div>
          <h1 className="text-5xl font-black leading-[.95] tracking-[-.055em] md:text-7xl">Book 1on1 Coaching</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#9ba9a5]">
            Προσωπική συνεδρία για να δούμε το trading σου, τα λάθη σου, το risk management, το setup selection και το πλάνο σου.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Box title="Chart Review" text="Ανάλυση των setups και των entries σου." />
            <Box title="Risk Plan" text="Position sizing, invalidation και R:R." />
            <Box title="Execution" text="Πώς να σταματήσεις impulsive trades." />
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#d8a24b]/25 bg-white/[0.035] p-8">
          <h2 className="text-3xl font-black text-[#f4d18a]">Κλείσε συνεδρία</h2>
          <p className="mt-3 text-[#9ba9a5]">Προς το παρόν το booking οδηγεί στο Discord. Μετά μπορούμε να βάλουμε Calendly/Stripe.</p>
          <div className="mt-8 grid gap-4">
            <a href="https://discord.gg/yDzT3uZ2p" target="_blank" className="rounded-full bg-gradient-to-r from-[#f4d18a] to-[#d8a24b] px-6 py-4 text-center font-black text-black">Book μέσω Discord</a>
            <a href="mailto:blendwithpeople@gmail.com" className="rounded-full border border-white/10 bg-black/20 px-6 py-4 text-center font-black">Στείλε Email</a>
          </div>
          <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5 text-sm leading-7 text-[#9ba9a5]">
            Επόμενο upgrade: Calendly embed, διαθέσιμες ώρες, πληρωμή Stripe/Revolut και automated confirmation email.
          </div>
        </div>
      </section>
          <section className="mt-16">
        <VipCTA title="Δεν είσαι έτοιμος για 1on1;" text="Ξεκίνα από το VIP Discord και δες πρώτα την καθημερινή ροή αναλύσεων και signals." />
      </section>
    </main>
  );
}

function Box({ title, text }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
      <h3 className="text-xl font-black text-[#f4d18a]">{title}</h3>
      <p className="mt-3 text-[#9ba9a5]">{text}</p>
    </div>
  );
}
