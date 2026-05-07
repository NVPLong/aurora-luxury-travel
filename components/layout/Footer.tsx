// =============================================================
// components/layout/Footer.tsx
// Footer hiển thị ở cuối mọi trang.
// Server Component (không có 'use client') – chỉ render HTML tĩnh.
// =============================================================

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[color:#F8FAF7] border-t border-slate-200/70 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">

          {/* Cột 1: Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-xl font-semibold text-slate-900">Aurora</span>
              <span className="hidden sm:inline text-xs tracking-[0.22em] uppercase text-slate-500">Luxury Travel</span>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              Curated journeys across rare landscapes, quiet escapes, and unforgettable stays.
            </p>
          </div>

          {/* Cột 2: Liên kết nhanh */}
          <div>
            <h3 className="text-slate-900 font-semibold mb-5 tracking-wide">Explore</h3>
            <ul className="space-y-3">
              {[
                { href: '/destinations', label: 'All Destinations' },
                { href: '/destinations?region=Bắc',   label: 'Northern' },
                { href: '/destinations?region=Trung',  label: 'Central' },
                { href: '/destinations?region=Nam',    label: 'Southern' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-slate-900 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột 3: Về chúng tôi */}
          <div>
            <h3 className="text-slate-900 font-semibold mb-5 tracking-wide">About Aurora</h3>
            <ul className="space-y-3">
              {[
                { href: '/about', label: 'Our Vision' },
                { href: '/about#roadmap', label: 'AI Roadmap' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-slate-900 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Badge version */}
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-white/60 border border-slate-200/70 rounded-full">
              <span className="w-2 h-2 bg-[color:#C8A96A] rounded-full" />
              <span className="text-slate-700 text-xs font-medium">Version 1.0 – AI Coming Soon</span>
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-16 pt-8 border-t border-slate-200/70 text-center">
          <p className="text-slate-500 text-sm">
            © {currentYear} Aurora. Designed for quiet journeys.
          </p>
        </div>
      </div>
    </footer>
  )
}
