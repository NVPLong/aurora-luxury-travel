import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-slate-200/70 bg-[#F8FAF7]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-8">
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2">
              <span className="text-xl font-semibold text-slate-900">Aurora</span>
              <span className="hidden text-xs uppercase tracking-[0.22em] text-slate-500 sm:inline">
                Luxury Travel
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-slate-600">
              Curated journeys across rare landscapes, quiet escapes, and unforgettable stays.
            </p>
          </div>

          <div>
            <h3 className="mb-5 font-semibold tracking-wide text-slate-900">Explore</h3>
            <ul className="space-y-3">
              {[
                { href: '/destinations', label: 'All Destinations' },
                { href: '/destinations?region=North', label: 'Northern' },
                { href: '/destinations?region=Central', label: 'Central' },
                { href: '/destinations?region=South', label: 'Southern' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-600 transition-colors hover:text-slate-900">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-semibold tracking-wide text-slate-900">About Aurora</h3>
            <ul className="space-y-3">
              {[
                { href: '/about', label: 'Our Vision' },
                { href: '/about#roadmap', label: 'AI Roadmap' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-600 transition-colors hover:text-slate-900">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/60 px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-[#C8A96A]" />
              <span className="text-xs font-medium text-slate-700">Version 1.0 - AI Coming Soon</span>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-200/70 pt-8 text-center">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} Aurora. Designed for quiet journeys.
          </p>
        </div>
      </div>
    </footer>
  )
}
