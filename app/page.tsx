import Header from '@/components/Header'
import Footer from '@/components/Footer'
import VipCta from '@/components/VipCta'
import { BarChart3, BookOpen, LineChart, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const sections = [
  { href: '/analyses', title: 'Αναλύσεις', text: 'Market structure, liquidity maps και weekly setups.', icon: LineChart },
  { href: '/roi', title: 'ROI Dashboard', text: 'Performance tracker και verified community results.', icon: BarChart3 },
  { href: '/learn-trading', title: 'Learn Trading', text: 'Lessons, concepts και actionable frameworks.', icon: BookOpen },
  { href: '/course', title: 'Course', text: 'Structured paid course modules.', icon: ShieldCheck }
]

export default function Home() {
  return <main><Header />
    <section className="relative overflow-hidden px-6 py-24">
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-400/20 blur-[110px]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm text-amber-100"><Sparkles size={16}/> Premium ελληνική trading κοινότητα</div>
          <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.05em] md:text-7xl">Trading με πλάνο, execution και premium market edge.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/62">Τεχνική ανάλυση, liquidity εικόνα, risk management και εκπαιδευτικό υλικό σε ένα καθαρό CMS-driven περιβάλλον.</p>
          <div className="mt-9 flex flex-wrap gap-3"><a href="#vip" className="rounded-full bg-amber-300 px-7 py-3 font-semibold text-black">Μπες στο VIP</a><Link href="/analyses" className="rounded-full border border-white/15 bg-white/5 px-7 py-3 font-semibold text-white">Ανάλυση εβδομάδας</Link></div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl">
          <p className="text-sm text-white/45">Live Performance</p><h2 className="mb-5 text-2xl font-semibold">ROI Highlights</h2>
          {['RAVEUSDT +10514.05%', 'RIVERUSDT +2027.94%', 'ETHUSDT +36.25%'].map((x) => <div key={x} className="mb-3 flex items-center justify-between rounded-2xl border border-white/10 bg-black/25 p-4"><span>{x.split(' ')[0]}</span><span className="font-semibold text-emerald-300"><TrendingUp className="mr-2 inline" size={18}/>{x.split(' ')[1]}</span></div>)}
        </div>
      </div>
    </section>
    <section className="mx-auto grid max-w-7xl gap-4 px-6 py-10 md:grid-cols-4">{sections.map(({href,title,text,icon:Icon}) => <Link href={href} key={title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-amber-300/35"><Icon className="mb-7 text-amber-200"/><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-white/52">{text}</p></Link>)}</section>
    <VipCta /><Footer /></main>
}
