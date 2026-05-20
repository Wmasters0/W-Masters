import LearnCard from "@/components/LearnCard";
import CourseCTA from "@/components/CourseCTA";
import VipCTA from "@/components/VipCTA";
import { getLessons } from "../lib";

export const metadata = { title: "Learn Trading | W Masters" };

export default async function LearnPage() {
  const lessons = await getLessons();

  return (
    <main className="mx-auto w-[min(1220px,92%)] py-16">
      <h1 className="text-5xl font-black tracking-[-.05em] md:text-7xl">Learn Trading</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-[#9ba9a5]">
        Εκπαιδευτικά posts: liquidity, market structure, risk management, psychology και macro.
      </p>

      <div className="mt-10">
        <CourseCTA />
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {lessons.map((post) => <LearnCard key={post.slug} post={post} />)}
      </div>
          <section className="mt-16">
        <VipCTA title="Μάθε και κάνε apply μέσα στο VIP" text="Συνδύασε εκπαιδευτικό υλικό με live calls, market updates και κοινότητα traders." />
      </section>
    </main>
  );
}
