export default function VipCTA({ title = "Μπες στο W Masters VIP", text = "Signals, market updates, εκπαιδευτικό υλικό και οργανωμένη trading κοινότητα." }) {
  return (
    <div className="rounded-[2rem] border border-[#d8a24b]/25 bg-gradient-to-r from-[#0b4f49]/70 to-[#d8a24b]/10 p-8 md:flex md:items-center md:justify-between">
      <div>
        <h2 className="text-3xl font-black tracking-[-.04em] md:text-4xl">{title}</h2>
        <p className="mt-3 max-w-2xl text-[#9ba9a5]">{text}</p>
      </div>
      <a href="https://discord.gg/yDzT3uZ2p" target="_blank" className="mt-6 inline-flex rounded-full bg-gradient-to-r from-[#f4d18a] to-[#d8a24b] px-6 py-4 font-black text-black md:mt-0">Join VIP</a>
    </div>
  );
}
