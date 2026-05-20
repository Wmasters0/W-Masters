import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'W Masters',
  description: 'Premium trading community, analyses, lessons and ROI dashboard.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="el"><body>{children}</body></html>
}
