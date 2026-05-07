// =============================================================
// components/home/FeaturedDestinations.tsx
// Section hiển thị các địa điểm nổi bật trên trang chủ.
// Server Component – không cần 'use client' vì không có state.
// =============================================================

import Link from 'next/link'
import DestinationCard from '@/components/ui/DestinationCard'
import SectionReveal from '@/components/ui/SectionReveal'
import { getFeaturedDestinations } from '@/data/destinations'

export default function FeaturedDestinations() {
  const featuredList = getFeaturedDestinations()

  return (
    <section className="py-20 px-4 aurora-section-bg overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* === Header section === */}
        <SectionReveal blur className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[color:#5F7F78] text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            <span className="h-px w-8 bg-[color:#C8A96A]" aria-hidden="true" />
            Featured selection
          </span>

          <h2 className="text-slate-900 text-3xl sm:text-5xl font-medium mb-5 font-serif tracking-tight">
            Rare escapes, curated for stillness.
          </h2>

          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            A quiet edit of destinations — landscapes, stays, and moments chosen for their calm, not their noise.
          </p>
        </SectionReveal>

        {/* === Grid địa điểm === */}
        <SectionReveal staggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {featuredList.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </SectionReveal>

        {/* Nút xem tất cả */}
        <SectionReveal delay={0.4} className="mt-16 text-center">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-3 px-10 py-4 aurora-surface-subtle
                       text-slate-700 hover:text-slate-900 font-medium text-sm tracking-wide
                       transition-all duration-500 ease-out hover:-translate-y-1
                       border border-white/40 group"
          >
            Explore the Collection
            <span className="group-hover:translate-x-1 transition-transform duration-500 ease-out">→</span>
          </Link>
        </SectionReveal>
      </div>
    </section>
  )
}
