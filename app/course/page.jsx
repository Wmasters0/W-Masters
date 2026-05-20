const checkoutUrl =
  process.env.NEXT_PUBLIC_COURSE_CHECKOUT_URL || "https://buy.stripe.com/YOUR_PAYMENT_LINK_HERE";

export const metadata = {
  title: "W Masters Trading Course",
  description: "Paid trading course by W Masters."
};

export default function CoursePage() {
  return (
    <main className="mx-auto w-[min(1220px,92%)] py-16">
      <section className="grid gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="mb-5 text-xs font-black uppercase tracking-[0.25em] text-[#f4d18a]">Paid Course</div>
          <h1 className="text-5xl font-black leading-[.95] tracking-[-.055em] md:text-7xl">
            W Masters Trading Course
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#9ba9a5]">
            Ένα δομημένο course για να μάθεις πώς να διαβάζεις την αγορά με πλάνο:
            market structure, liquidity, risk management, entries, exits και execution.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href={checkoutUrl} target="_blank" className="rounded-full bg-gradient-to-r from-[#f4d18a] to-[#d8a24b] px-7 py-4 font-black text-black">
              Buy Course
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#d8a24b]/25 bg-white/[0.035] p-8">
          <h2 className="text-3xl font-black text-[#f4d18a]">Τι περιλαμβάνει</h2>
          <div className="mt-7 grid gap-4">
            <Module title="Module 1 — Market Structure" text="Trend, range, HH/HL, LH/LL, break of structure και invalidation." />
            <Module title="Module 2 — Liquidity" text="Liquidity sweeps, stop hunts, equal highs/lows και key zones." />
            <Module title="Module 3 — Risk Management" text="Position sizing, R:R, stop loss, max risk και trade planning." />
            <Module title="Module 4 — Execution" text="Entries, confirmations, exits, partials και trade management." />
            <Module title="Module 5 — Psychology" text="Discipline, patience, avoiding FOMO και building a repeatable system." />
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        <Card title="Για αρχάριους" text="Μπαίνεις σε structured framework χωρίς να χαθείς μέσα στο noise." />
        <Card title="Για intermediate traders" text="Βελτιώνεις entries, invalidation και risk control." />
        <Card title="Για VIP members" text="Συνδέεις το course με τα live calls και την καθημερινή ανάλυση." />
      </section>

      <section className="mt-16 rounded-[2rem] border border-[#d8a24b]/25 bg-gradient-to-r from-[#0b4f49]/70 to-[#d8a24b]/10 p-8 md:flex md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-black tracking-[-.04em]">Έτοιμος να ξεκινήσεις;</h2>
          <p className="mt-3 max-w-2xl text-[#9ba9a5]">
            Πάτα Buy Course και ολοκλήρωσε την αγορά μέσω Stripe.
          </p>
        </div>
        <a href={checkoutUrl} target="_blank" className="mt-6 inline-flex rounded-full bg-gradient-to-r from-[#f4d18a] to-[#d8a24b] px-7 py-4 font-black text-black md:mt-0">
          Buy Course
        </a>
      </section>
    </main>
  );
}

function Module({ title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
      <h3 className="font-black text-[#f4d18a]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#9ba9a5]">{text}</p>
    </div>
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
