// =============================================================
// components/home/FeaturedDestinations.tsx
// Section displaying featured destinations on the homepage.
// Server Component – no client-side state needed.
// =============================================================

import Link from 'next/link'
import DestinationCard from '@/features/destinations/components/DestinationCard'
import SectionReveal from '@/components/motion/SectionReveal'
import { getFeaturedDestinations } from '@/content/destinations'

export default function FeaturedDestinations() {
  const featuredList = getFeaturedDestinations()

  return (
    <section className="py-32 lg:py-40 px-4 overflow-hidden">
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
        <SectionReveal delay={0.4} className="mt-24 text-center">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-4 px-2 py-2
                       text-slate-500 hover:text-slate-900 text-[0.75rem] uppercase tracking-[0.2em] font-medium
                       transition-all duration-500 ease-out group"
          >
            Explore the Collection
            <span className="group-hover:translate-x-1 transition-transform duration-500 ease-out">→</span>
          </Link>
        </SectionReveal>
      </div>
    </section>
  )
}
