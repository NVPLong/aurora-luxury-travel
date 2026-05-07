// =============================================================
// components/layout/Navbar.tsx
// Thanh điều hướng (navigation bar) hiển thị trên mọi trang.
// 'use client' vì dùng state + scroll để xử lý UI.
// =============================================================
'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Định nghĩa các link điều hướng
const NAV_LINKS = [
  { href: '/',             label: 'Home'  },
  { href: '/destinations', label: 'Destinations'   },
  { href: '/about',        label: 'About' },
]

export default function Navbar() {
  // State để đóng/mở menu trên mobile
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Hook lấy đường dẫn hiện tại để highlight link active
  const pathname = usePathname()

  const isHome = pathname === '/'
  const isOverlay = isHome && !isScrolled

  // Theo dõi scroll để chuyển navbar từ transparent -> frosted.
  useEffect(() => {
    // Lưu ý: logic này chỉ chạy client.
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navClassName = useMemo(() => {
    // Aman-inspired: overlay trong suốt ở top, khi scroll thì nền kem mờ + blur + shadow rất nhẹ.
    return [
      'fixed top-0 left-0 right-0 z-50',
      'transition-all duration-300 ease-out',
      isOverlay
        ? 'bg-transparent'
        : 'bg-[color:rgba(247,243,236,0.86)] backdrop-blur-md shadow-[0_10px_30px_rgba(15,23,42,0.08)]',
      // viền nhẹ khi scroll để tăng “craft”
      isOverlay ? '' : 'border-b border-slate-200/70',
    ].join(' ')
  }, [isOverlay])

  return (
    <nav className={navClassName} aria-label="Primary navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span
              className={[
                'text-xl font-semibold tracking-wide',
                isOverlay ? 'text-white' : 'text-slate-900',
                'transition-colors duration-300 ease-out',
              ].join(' ')}
            >
              Aurora
            </span>
            <span
              className={[
                'hidden sm:inline text-xs tracking-[0.22em] uppercase',
                isOverlay ? 'text-white/70' : 'text-slate-500',
              ].join(' ')}
            >
              Luxury Travel
            </span>
          </Link>

          {/* Desktop navigation links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              // Kiểm tra link có đang active không
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    'relative px-4 py-2 text-sm font-medium',
                    'transition-all duration-300 ease-out',
                    isOverlay ? 'text-white/85 hover:text-white' : 'text-slate-700 hover:text-slate-900',
                    // underline reveal tinh tế (The Brando vibe)
                    'after:absolute after:left-4 after:right-4 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100',
                    isActive ? 'after:scale-x-100' : '',
                    // active state rõ nhưng không “loud”
                    isActive ? (isOverlay ? 'text-white' : 'text-slate-900') : '',
                  ].join(' ')}
                >
                  {link.label}
                </Link>
              )
            })}

            {/* CTA button */}
            <Link
              href="/destinations"
              className={[
                'ml-4 inline-flex items-center justify-center',
                'rounded-full px-6 py-2.5 text-sm font-semibold tracking-wide',
                'transition-all duration-300 ease-out',
                isOverlay
                  ? 'bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15'
                  : 'bg-[color:#C8A96A] text-white hover:bg-[color:#A87F3F] shadow-sm hover:shadow-md',
                'hover:-translate-y-0.5 active:translate-y-0',
                isOverlay ? 'focus-visible:ring-white/60' : 'focus-visible:ring-[color:#C8A96A]',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[color:#F7F3EC]',
              ].join(' ')}
            >
              Explore
            </Link>
          </div>

          {/* Mobile: nút hamburger (≡) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={[
              'md:hidden p-2 rounded-xl transition-colors duration-200',
              isOverlay ? 'text-white/85 hover:text-white hover:bg-white/10' : 'text-slate-700 hover:text-slate-900 hover:bg-black/5',
            ].join(' ')}
            aria-label="Toggle menu"
          >
            {/* Hiển thị X khi menu mở, ≡ khi đóng */}
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div
            className={[
              'md:hidden pb-4 mt-1',
              isOverlay ? 'border-t border-white/15' : 'border-t border-slate-200/70',
            ].join(' ')}
          >
            <div className="flex flex-col gap-1 pt-3">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)} // Đóng menu khi click
                    className={[
                      'px-4 py-2.5 rounded-xl text-sm font-medium transition-colors',
                      isOverlay ? 'text-white/85 hover:text-white hover:bg-white/10' : 'text-slate-700 hover:text-slate-900 hover:bg-black/5',
                      isActive ? (isOverlay ? 'text-white bg-white/10' : 'text-slate-900 bg-black/5') : '',
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
                  'mt-2 px-4 py-3 font-semibold tracking-wide rounded-xl text-sm text-center transition-colors',
                  isOverlay
                    ? 'bg-white/10 hover:bg-white/15 text-white ring-1 ring-white/20'
                    : 'bg-[color:#C8A96A] hover:bg-[color:#A87F3F] text-white',
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
