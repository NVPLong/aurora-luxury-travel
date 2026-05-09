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
    <section className="relative -mt-16 min-h-[calc(100svh+4rem)] overflow-hidden aurora-grain">

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
        className="relative z-10 flex min-h-[calc(100svh+4rem)] items-center pb-32"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 w-full">
          {/* Asymmetrical Grid: Content occupies the left half with generous whitespace */}
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 xl:col-span-7">
              
              <motion.div variants={itemVariants} className="inline-flex items-center gap-4">
                <span className="h-px w-10 bg-[color:#C8A96A]/60" aria-hidden="true" />
                <span className="text-[0.6rem] sm:text-[0.65rem] tracking-[0.4em] uppercase text-white/50 font-medium">
                  {brandName} &nbsp;·&nbsp; Curated Journey
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className={[
                  'mt-8 text-[2.8rem] sm:text-5xl lg:text-[5rem] font-medium text-white leading-[1.05]',
                  'font-serif tracking-[-0.02em]',
                ].join(' ')}
              >
                {headline.split(' ').slice(0, -1).join(' ')} <br className="hidden sm:block" />
                <span className="italic text-white/90">{headline.split(' ').slice(-1)}</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="mt-10 max-w-[32rem] text-base sm:text-[1.05rem] leading-[1.9] text-white/60 font-light"
              >
                {subtitle}
              </motion.p>

              <motion.div variants={itemVariants} className="mt-16 flex flex-col sm:flex-row items-center gap-10">
                <Link
                  href={primaryCtaHref}
                  className={[
                    'group relative inline-flex items-center gap-4 text-white text-sm font-medium tracking-[0.2em] uppercase transition-all duration-500',
                  ].join(' ')}
                >
                  <span className="relative z-10">{primaryCtaLabel}</span>
                  <div className="w-12 h-px bg-white/20 transition-all duration-500 group-hover:w-16 group-hover:bg-[color:#C8A96A]" />
                  {/* Subtle hover reveal mark */}
                  <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[color:#C8A96A] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </Link>

                <Link
                  href="/about"
                  className={[
                    'text-white/40 hover:text-white/70 text-[0.7rem] font-medium tracking-[0.25em] uppercase transition-all duration-500',
                    'border-b border-white/10 pb-1 hover:border-white/30'
                  ].join(' ')}
                >
                  Our Vision
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Elegant Scroll Indicator (Moved to bottom-right for asymmetry) */}
      <div className="absolute bottom-12 right-8 lg:right-16 z-10 flex flex-col items-center gap-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1.5 }}
          className="flex flex-col items-center gap-6"
        >
          <span className="text-[0.55rem] tracking-[0.5em] uppercase text-white/30 font-light [writing-mode:vertical-lr] rotate-180">
            Scroll
          </span>
          <div className="relative h-20 w-px bg-white/5 overflow-hidden">
            <motion.div 
              initial={{ y: "-100%" }}
              animate={{ y: "100%" }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: [0.4, 0, 0.2, 1],
                delay: 2
              }}
              className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent via-white/20 to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
