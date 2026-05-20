const checkoutUrl =
  process.env.NEXT_PUBLIC_COURSE_CHECKOUT_URL || "https://buy.stripe.com/YOUR_PAYMENT_LINK_HERE";

export default function CourseCTA() {
  return (
    <section className="rounded-[2rem] border border-[#d8a24b]/25 bg-gradient-to-r from-[#0b4f49]/70 to-[#d8a24b]/10 p-8 md:flex md:items-center md:justify-between">
      <div>
        <div className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-[#f4d18a]">Paid Course</div>
        <h2 className="text-3xl font-black tracking-[-.04em] md:text-4xl">W Masters Trading Course</h2>
        <p className="mt-3 max-w-2xl text-[#9ba9a5]">
          Μάθε market structure, liquidity, risk management, entries/exits και execution framework με οργανωμένο τρόπο.
        </p>
      </div>
      <div className="mt-6 flex flex-wrap gap-3 md:mt-0">
        <a href="/course" className="rounded-full border border-[#d8a24b]/40 px-6 py-4 font-black text-[#f4d18a] hover:bg-[#d8a24b]/10">
          Δες το Course
        </a>
        <a href={checkoutUrl} target="_blank" className="rounded-full bg-gradient-to-r from-[#f4d18a] to-[#d8a24b] px-6 py-4 font-black text-black">
          Buy Course
        </a>
      </div>
    </section>
  );
}
