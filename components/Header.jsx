'use client';

import { useState } from "react";

const links = [
  ["Home", "/"],
  ["Αναλύσεις", "/analyses"],
  ["Learn Trading", "/learn"],
  ["Course", "/course"],
  ["1on1 Coaching", "/coaching"],
  ["Trade Journal", "/trade-journal"]
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#030607]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-[min(1220px,92%)] items-center justify-between">
        <a href="/" className="flex items-center gap-4 font-black tracking-[0.15em]">
          <div className="grid h-12 w-12 place-items-center rounded-full border-2 border-[#d8a24b] shadow-[0_0_26px_rgba(216,162,75,.25)]">
            <span className="flex gap-1">
              <i className="block h-6 w-1.5 rounded bg-gradient-to-b from-[#f4d18a] to-[#d8a24b]" />
              <i className="block h-6 w-1.5 rounded bg-gradient-to-b from-[#f4d18a] to-[#d8a24b]" />
              <i className="block h-6 w-1.5 rounded bg-gradient-to-b from-[#f4d18a] to-[#d8a24b]" />
            </span>
          </div>
          <span className="hidden sm:inline">W MASTERS</span>
          <span className="sm:hidden">WM</span>
        </a>

        <div className="hidden items-center gap-6 text-sm text-[#9ba9a5] lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="hover:text-[#f4d18a]">{label}</a>
          ))}
          <a href="https://discord.gg/yDzT3uZ2p" target="_blank" className="rounded-full bg-gradient-to-r from-[#f4d18a] to-[#d8a24b] px-5 py-2.5 font-black text-black">Join VIP</a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <a href="https://discord.gg/yDzT3uZ2p" target="_blank" className="rounded-full bg-gradient-to-r from-[#f4d18a] to-[#d8a24b] px-4 py-2 text-sm font-black text-black">Join VIP</a>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-[#f4d18a]"
            aria-label="Open menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#030607]/95 px-5 py-5 lg:hidden">
          <div className="mx-auto grid w-[min(1220px,92%)] gap-3">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 font-black text-[#f7f4ed]"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
