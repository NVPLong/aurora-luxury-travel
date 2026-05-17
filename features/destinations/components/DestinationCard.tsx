// =============================================================
// features/destinations/components/DestinationCard.tsx
// Displays a summary card for a destination.
// Refined for editorial calmness and cinematic restraint.
// =============================================================

import Image from 'next/image'
import Link from 'next/link'
import type { Destination } from '@/types'

interface DestinationCardProps {
  destination: Destination
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  const {
    id, name, location, category, budget,
    image, description, region,
  } = destination

  return (
    <Link
      href={`/destinations/${id}`}
      className="group block outline-none rounded-2xl focus-visible:ring-2 focus-visible:ring-[#C8A96A]/40 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent transition-all"
    >
      {/* === Image Section === */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
          <Image
            src={image}
            alt={destination.imageAlt ?? name}
            fill
            unoptimized
            className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Subtle hover darken */}
          <div className="absolute inset-0 bg-black/0 transition-colors duration-700 ease-out group-hover:bg-black/10 z-0" />

          {/* Minimal Region Label */}
          <div className="absolute top-5 left-5 z-10">
            <span className="text-[0.65rem] uppercase tracking-[0.2em] text-white font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
              {region}
            </span>
          </div>
      </div>

      {/* === Content Section === */}
      <div className="pt-6 pb-2">
        {/* Category & Budget */}
        <div className="mb-3 flex items-center gap-3 text-[0.65rem] uppercase tracking-widest text-slate-500 font-medium">
            <span>{category}</span>
            <span className="w-1 h-1 rounded-full bg-slate-200" aria-hidden="true" />
            <span className="text-slate-400">{budget}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-sans font-semibold text-slate-900 leading-snug tracking-tight group-hover:text-[#C8A96A] transition-colors duration-700">
            {name}
        </h3>

        {/* Description */}
        <p className="mt-4 text-sm leading-[1.8] text-slate-500 line-clamp-2 font-light">
            {description}
        </p>

        {/* Footer (Location & Duration) */}
        <div className="mt-5 flex items-center gap-3 text-xs text-slate-400 font-light tracking-wide">
           <span>{destination.duration}</span>
           <span className="w-4 h-px bg-slate-200" aria-hidden="true" />
           <span className="truncate">{location}</span>
        </div>
      </div>
    </Link>
  )
}
