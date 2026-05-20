export const metadata = { title: "Course Purchase Successful | W Masters" };

export default function SuccessPage() {
  return (
    <main className="mx-auto w-[min(900px,92%)] py-20">
      <div className="rounded-[2rem] border border-[#d8a24b]/25 bg-white/[0.035] p-10 text-center">
        <div className="text-5xl">✅</div>
        <h1 className="mt-6 text-4xl font-black tracking-[-.04em] md:text-6xl">Η αγορά ολοκληρώθηκε</h1>
        <p className="mt-5 text-lg leading-8 text-[#9ba9a5]">
          Ευχαριστούμε για την αγορά. Το επόμενο βήμα είναι να σου δοθεί πρόσβαση στο course content.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="/learn" className="rounded-full border border-white/10 bg-white/[0.035] px-6 py-4 font-black">Πήγαινε στο Learn</a>
          <a href="https://discord.gg/yDzT3uZ2p" target="_blank" className="rounded-full bg-gradient-to-r from-[#f4d18a] to-[#d8a24b] px-6 py-4 font-black text-black">Join VIP</a>
        </div>
      </div>
    </main>
  );
}
