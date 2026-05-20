import Link from 'next/link'
import { Crown } from 'lucide-react'

export default function Header() {
  return <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070d]/80 backdrop-blur-xl">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <Link href="/" className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-2xl border border-amber-300/30 bg-amber-300/10 text-amber-200"><Crown size={20}/></span>
        <span><span className="block text-sm font-semibold tracking-[0.25em] text-amber-100">W MASTERS</span><span className="block text-xs text-white/45">Signals • Education • ROI</span></span>
      </Link>
      <nav className="hidden gap-6 text-sm text-white/65 md:flex">
        <Link href="/analyses">Αναλύσεις</Link><Link href="/learn-trading">Μαθήματα</Link><Link href="/course">Course</Link><Link href="/roi">ROI</Link>
      </nav>
      <a href="#vip" className="rounded-full bg-amber-300 px-5 py-2 text-sm font-semibold text-black">Join VIP</a>
    </div>
  </header>
}
