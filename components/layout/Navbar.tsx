'use client'

import { MouseEvent, useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/about', label: 'About' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const navLinksRef = useRef<HTMLDivElement>(null)
  const lastScrollYRef = useRef(0)
  const [hoverMark, setHoverMark] = useState({ left: 0, width: 0, visible: false })

  const pathname = usePathname()
  const isHome = pathname === '/'
  const isOverlay = isHome && !isScrolled

  useEffect(() => {
    // An navbar khi cuon xuong sau, hien lai khi nguoi dung cuon len.
    const onScroll = () => {
      const currentScrollY = window.scrollY
      const isScrollingDown = currentScrollY > lastScrollYRef.current

      setIsScrolled(currentScrollY > 12)
      setIsHidden(isScrollingDown && currentScrollY > 140 && !menuOpen)
      lastScrollYRef.current = currentScrollY
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [menuOpen])

  const updateHoverMark = (event: MouseEvent<HTMLAnchorElement>) => {
    const container = navLinksRef.current
    if (!container) return

    const containerRect = container.getBoundingClientRect()
    const linkRect = event.currentTarget.getBoundingClientRect()

    setHoverMark({
      left: linkRect.left - containerRect.left,
      width: linkRect.width,
      visible: true,
    })
  }

  const navClassName = useMemo(() => {
    return [
      'fixed top-0 left-0 right-0 z-50',
      'transition-all duration-500 ease-out',
      isHidden ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100',
      isOverlay
        ? 'bg-white/92 backdrop-blur-xl border-b border-white/70 shadow-[0_14px_40px_rgba(15,23,42,0.10)]'
        : 'bg-[rgba(248,250,247,0.94)] backdrop-blur-md border-b border-slate-200/70 shadow-[0_10px_30px_rgba(15,23,42,0.08)]',
    ].join(' ')
  }, [isHidden, isOverlay])

  return (
    <nav className={navClassName} aria-label="Primary navigation">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link href="/" className="group flex items-center" aria-label="Aurora home">
            <span className="relative block h-11 w-36 overflow-hidden sm:w-40">
              <Image
                src="/images/aurora-wordmark.png"
                alt="Aurora"
                fill
                priority
                sizes="160px"
                className="object-contain object-center mix-blend-multiply transition duration-300 ease-out group-hover:scale-[1.03]"
              />
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            <div
              ref={navLinksRef}
              onMouseLeave={() => setHoverMark((prev) => ({ ...prev, visible: false }))}
              className="relative flex items-center gap-1"
            >
              <span
                aria-hidden="true"
                className={[
                  'pointer-events-none absolute top-1/2 z-0 h-9 -translate-y-1/2 transition-all duration-500 ease-out',
                  'bg-[#EDE5D7] ring-1 ring-[#C8A96A]/15',
                  hoverMark.visible ? 'opacity-100' : 'opacity-0',
                ].join(' ')}
                style={{
                  left: hoverMark.left,
                  width: hoverMark.width,
                  borderRadius: '999px 999px 999px 24px',
                }}
              />

              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onMouseEnter={updateHoverMark}
                    className={[
                      'relative z-10 px-4 py-2 text-sm font-medium transition-all duration-300 ease-out',
                      'text-slate-700 hover:text-slate-900',
                      'after:absolute after:left-4 after:right-4 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100',
                      isActive ? 'after:scale-x-100' : '',
                      isActive ? 'text-slate-900' : '',
                    ].join(' ')}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            <Link
              href="/destinations"
              className={[
                'ml-4 inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 ease-out',
                isOverlay
                  ? 'bg-[linear-gradient(135deg,#FFFFFF_0%,#F7F3EC_52%,#E2C88C_100%)] text-slate-900 ring-1 ring-slate-200 hover:shadow-md'
                  : 'bg-[linear-gradient(135deg,#C8A96A_0%,#B9904A_100%)] text-white shadow-sm hover:shadow-md',
                'hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                isOverlay ? 'focus-visible:ring-[#C8A96A] focus-visible:ring-offset-white' : 'focus-visible:ring-[#C8A96A] focus-visible:ring-offset-[#F7F3EC]',
              ].join(' ')}
            >
              Explore
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={[
              'rounded-xl p-2 transition-colors duration-200 md:hidden',
              'text-slate-700 hover:bg-black/5 hover:text-slate-900',
            ].join(' ')}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="mt-1 border-t border-slate-200/70 pb-4 md:hidden">
            <div className="flex flex-col gap-1 pt-3">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={[
                      'rounded-xl px-4 py-2.5 text-sm font-medium transition-colors',
                      'text-slate-700 hover:bg-black/5 hover:text-slate-900',
                      isActive ? 'bg-black/5 text-slate-900' : '',
                    ].join(' ')}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <Link
                href="/destinations"
                onClick={() => setMenuOpen(false)}
                className={[
                  'mt-2 rounded-xl px-4 py-3 text-center text-sm font-semibold tracking-wide transition-colors',
                  'bg-[linear-gradient(135deg,#C8A96A_0%,#B9904A_100%)] text-white hover:shadow-md',
                ].join(' ')}
              >
                Explore
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
