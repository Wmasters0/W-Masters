export default function TwitterSection() {
  return (
    <section className="mx-auto w-[min(1220px,92%)] py-16">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8">
        <h2 className="text-4xl font-black tracking-[-.04em] md:text-6xl">Twitter / X Updates</h2>
        <p className="mt-4 max-w-3xl text-[#9ba9a5]">
          Market thoughts, updates και announcements από το X profile.
        </p>
        <div className="mt-8 rounded-3xl border border-[#d8a24b]/25 bg-black/25 p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-3xl font-black text-[#f4d18a]">@FKaisaritis</div>
              <p className="mt-3 max-w-xl text-[#9ba9a5]">
                Ακολούθησε το profile για market updates, setups, σκέψεις και announcements.
              </p>
            </div>
            <a
              href="https://x.com/FKaisaritis"
              target="_blank"
              className="inline-flex rounded-full bg-gradient-to-r from-[#f4d18a] to-[#d8a24b] px-6 py-4 font-black text-black"
            >
              Άνοιγμα στο X
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
