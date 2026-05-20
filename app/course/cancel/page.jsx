export const metadata = { title: "Course Purchase Cancelled | W Masters" };

export default function CancelPage() {
  return (
    <main className="mx-auto w-[min(900px,92%)] py-20">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-10 text-center">
        <div className="text-5xl">↩️</div>
        <h1 className="mt-6 text-4xl font-black tracking-[-.04em] md:text-6xl">Η αγορά ακυρώθηκε</h1>
        <p className="mt-5 text-lg leading-8 text-[#9ba9a5]">
          Δεν έγινε κάποια χρέωση. Μπορείς να επιστρέψεις στη σελίδα του course.
        </p>
        <a href="/course" className="mt-8 inline-flex rounded-full bg-gradient-to-r from-[#f4d18a] to-[#d8a24b] px-6 py-4 font-black text-black">
          Πίσω στο Course
        </a>
      </div>
    </main>
  );
}
