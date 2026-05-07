'use client'

// =============================================================
// components/ui/HeroSection.tsx
// Hero cinematic luxury (Aman + The Brando) cho Aurora.
// Lưu ý: Navbar là global (app/layout.tsx), hero chỉ lo phần visual + copy.
// =============================================================

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

export type HeroSectionProps = {
  brandName?: string
  headline?: string
  subtitle?: string
  primaryCtaHref?: string
  primaryCtaLabel?: string
  secondaryCtaHref?: string
  secondaryCtaLabel?: string
  /** Ảnh fallback chính (ưu tiên performance). Nên là ảnh cinematic chất lượng cao. */
  imageSrc?: string
}

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2400&q=80'

export default function HeroSection({
  brandName = 'Aurora',
  headline = 'Where silence becomes a destination',
  subtitle = 'Curated journeys through rare landscapes, quiet escapes, and unforgettable stays.',
  primaryCtaHref = '/destinations',
  primaryCtaLabel = 'Explore Collection',
  secondaryCtaHref = '/destinations',
  secondaryCtaLabel = 'View Destinations',
  imageSrc = DEFAULT_IMAGE,
}: HeroSectionProps) {
  const prefersReducedMotion = useReducedMotion()
  const [imageReady, setImageReady] = useState(false)

  const { scrollYProgress } = useScroll()
  // Parallax rất nhẹ để tránh tốn performance / gây khó chịu.
  const bgY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ['0%', '0%'] : ['0%', '8%'])
  const contentY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ['0%', '0%'] : ['0%', '-4%'])

  // Easing "luxury": mềm, chậm đầu, nhanh dần rồi dừng êm.
  const easing = useMemo(() => [0.16, 1, 0.3, 1] as const, [])

  const heroVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: prefersReducedMotion
          ? { duration: 0.2 }
          : { duration: 0.6, ease: easing, staggerChildren: 0.08, delayChildren: 0.1 },
      },
    }),
    [easing, prefersReducedMotion],
  )

  const itemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 10, filter: prefersReducedMotion ? 'none' : 'blur(6px)' },
      show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.55, ease: easing } },
    }),
    [easing, prefersReducedMotion],
  )

  return (
    // Layout có pt-16 để chừa chỗ navbar fixed.
    // Hero muốn full viewport nên bù lại bằng -mt-16 và tăng min-height.
    <section className="relative -mt-16 min-h-[calc(100svh+4rem)] overflow-hidden">

      {/* ===== Background image + (optional) video overlay ===== */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        {/* Loading fallback: shimmer overlay cho cảm giác "alive" khi ảnh tải chậm */}
        <div
          className={[
            'absolute inset-0',
            'bg-[linear-gradient(110deg,rgba(255,255,255,0.06),rgba(255,255,255,0.14),rgba(255,255,255,0.06))]',
            'bg-[length:200%_100%] animate-shimmer',
            'transition-opacity duration-300 ease-out',
            imageReady ? 'opacity-0' : 'opacity-100',
          ].join(' ')}
          aria-hidden="true"
        />

        <Image
          src={imageSrc}
          alt="Cinematic luxury landscape"
          fill
          priority
          sizes="100vw"
          className={[
            'object-cover',
            'transition-opacity duration-500 ease-out',
            imageReady ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
          onLoad={() => setImageReady(true)}
        />

        {/* Overlay gradient để chữ trắng đọc rõ (rgba(10,20,25,0.45)) */}
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_50%_20%,rgba(255,255,255,0.10),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,20,25,0.55)] via-[rgba(10,20,25,0.45)] to-[rgba(10,20,25,0.72)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,20,25,0.45)] via-transparent to-[rgba(10,20,25,0.35)]" />
      </motion.div>

      {/* ===== Foreground content ===== */}
      <motion.div
        style={{ y: contentY }}
        variants={heroVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 flex min-h-[calc(100svh+4rem)] items-center pb-24"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 w-full">
          <div className="max-w-[52rem] text-left">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-[color:#C8A96A]" aria-hidden="true" />
              <span className="text-[0.65rem] sm:text-xs tracking-[0.28em] uppercase text-white/65 font-light">
                {brandName} &nbsp;·&nbsp; Curated Collection
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className={[
                'mt-7 text-[2.6rem] sm:text-5xl lg:text-[4rem] font-medium text-white leading-[1.1]',
                'font-serif tracking-[-0.015em]',
              ].join(' ')}
            >
              {headline}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-7 max-w-[34rem] text-base sm:text-[1.1rem] leading-[1.85] text-white/70 font-light"
            >
              {subtitle}
            </motion.p>

            <motion.div variants={itemVariants} className="mt-12 flex flex-col sm:flex-row gap-6">
              <Link
                href={primaryCtaHref}
                className={[
                  'group inline-flex items-center justify-center rounded-2xl px-9 py-4',
                  'bg-[color:#C8A96A] text-white text-base sm:text-lg font-medium tracking-wide',
                  'transition-all duration-300 ease-out',
                  // hover mạnh (nhưng vẫn "luxury"): nâng nhẹ + shadow mềm + ring subtle
                  'hover:bg-[color:#A87F3F] hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(168,127,63,0.26)]',
                  'active:translate-y-0 active:shadow-none',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:#C8A96A] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgba(10,20,25,0.85)]',
                ].join(' ')}
              >
                <span className="relative">
                  {primaryCtaLabel}
                  <span
                    className={[
                      'pointer-events-none absolute left-0 -bottom-1 h-px w-full bg-white/80',
                      'origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100',
                    ].join(' ')}
                    aria-hidden="true"
                  />
                </span>
              </Link>

              <Link
                href={secondaryCtaHref}
                className={[
                  'inline-flex items-center justify-center rounded-2xl px-9 py-4',
                  'bg-white/10 text-white text-base sm:text-lg font-medium tracking-wide',
                  'ring-1 ring-white/20 backdrop-blur-sm',
                  'transition-all duration-300 ease-out hover:bg-white/15 hover:-translate-y-1 hover:shadow-lg',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgba(10,20,25,0.85)]',
                ].join(' ')}
              >
                {secondaryCtaLabel}
              </Link>
            </motion.div>

          </div>
        </div>
      </motion.div>

      {/* Hint scroll down (tắt bounce mạnh để tránh "cheap") */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col items-center gap-2 text-white/70"
          aria-hidden="true"
        >
          <span className="text-xs tracking-[0.18em] uppercase">Scroll</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
