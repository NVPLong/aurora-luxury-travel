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
          : { duration: 0.8, ease: easing, staggerChildren: 0.15, delayChildren: 0.2 },
      },
    }),
    [easing, prefersReducedMotion],
  )

  const itemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 15, filter: prefersReducedMotion ? 'none' : 'blur(10px)' },
      show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.2, ease: easing } },
    }),
    [easing, prefersReducedMotion],
  )

  return (
    // Layout có pt-16 để chừa chỗ navbar fixed.
    // Hero muốn full viewport nên bù lại bằng -mt-16 và tăng min-height.
    <section className="relative -mt-16 min-h-[calc(100svh+4rem)] overflow-hidden bg-slate-950">

      {/* ===== Background image + dark cinematic overlays ===== */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <Image
          src={imageSrc}
          alt="Cinematic luxury landscape"
          fill
          priority
          sizes="100vw"
          className={[
            'object-cover transition-opacity duration-1000 ease-out',
            imageReady ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
          onLoad={() => setImageReady(true)}
        />

        {/* Cinematic Scrims: Khôi phục độ sâu và sự tập trung (Image visibility > 70%) */}
        {/* 1. Phủ tối nhẹ toàn bộ để bảo vệ navbar và text (35-45% black) */}
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        
        {/* 2. Gradient từ trái sang để bảo vệ vùng text (55-60% black) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" aria-hidden="true" />
        
        {/* 3. Vignette chân trang bảo vệ scroll indicator (35-40% black) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" aria-hidden="true" />
      </motion.div>

      {/* ===== Foreground content ===== */}
      <motion.div
        style={{ y: contentY }}
        variants={heroVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 flex min-h-[calc(100svh+4rem)] items-center pb-32"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 w-full pt-20 lg:pt-28">
          {/* Asymmetrical Composition: Monumental scale on the left half */}
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 xl:col-span-7">
              
              <motion.div variants={itemVariants} className="inline-flex items-center gap-5">
                <span className="h-px w-8 bg-[color:#C8A96A]/40" aria-hidden="true" />
                <span className="text-[0.6rem] sm:text-[0.65rem] tracking-[0.5em] uppercase text-white/75 font-medium">
                  {brandName} &nbsp;·&nbsp; Curated Journey
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className={[
                  'mt-12 text-[3rem] sm:text-6xl lg:text-[6rem] font-medium text-white leading-[1]',
                  'font-serif tracking-[-0.02em]',
                ].join(' ')}
              >
                {headline.split(' ').slice(0, -1).join(' ')} <br className="hidden sm:block" />
                <span className="italic text-white/90 font-normal">{headline.split(' ').slice(-1)}</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="mt-10 max-w-[32rem] text-base sm:text-lg leading-[1.8] text-white/80 font-light"
              >
                {subtitle}
              </motion.p>

              <motion.div variants={itemVariants} className="mt-14 flex flex-col sm:flex-row items-center gap-6">
                {/* Primary CTA: Solid Luxury Style */}
                <Link
                  href={primaryCtaHref}
                  className={[
                    'inline-flex items-center justify-center rounded-2xl px-10 py-4',
                    'bg-[color:#C8A96A] text-white text-base font-medium tracking-wide',
                    'transition-all duration-300 ease-out hover:bg-[color:#A87F3F] hover:-translate-y-1',
                    'shadow-[0_20px_50px_rgba(200,169,106,0.2)]'
                  ].join(' ')}
                >
                  {primaryCtaLabel}
                </Link>

                <Link
                  href="/about"
                  className={[
                    'inline-flex items-center justify-center rounded-2xl px-10 py-4',
                    'bg-white/5 text-white text-base font-medium tracking-wide',
                    'border border-white/20 backdrop-blur-sm',
                    'transition-all duration-300 ease-out hover:bg-white/10 hover:-translate-y-1'
                  ].join(' ')}
                >
                  Our Vision
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Cinematic Scroll Indicator (Repositioned for dramatic asymmetry) */}
      <div className="absolute bottom-16 right-8 lg:right-20 z-10 flex flex-col items-center gap-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 2 }}
          className="flex flex-col items-center gap-8"
        >
          <span className="text-[0.6rem] tracking-[0.5em] uppercase text-white/50 font-light [writing-mode:vertical-lr] rotate-180">
            Scroll
          </span>
          <div className="relative h-20 w-px bg-white/20 overflow-hidden">
            <motion.div 
              initial={{ y: "-100%" }}
              animate={{ y: "100%" }}
              transition={{ 
                duration: 3.5, 
                repeat: Infinity, 
                ease: [0.4, 0, 0.2, 1],
                delay: 2.5
              }}
              className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-white to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
