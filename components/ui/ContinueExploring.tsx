import Image from 'next/image'
import Link from 'next/link'
import { Destination } from '@/types'
import { MapPin, ArrowRight } from 'lucide-react'
import SectionReveal from './SectionReveal'

interface ContinueExploringProps {
  currentId: string
  destinations: Destination[]
}

/**
 * ContinueExploring
 * A refined section at the bottom of destination detail pages to encourage natural discovery.
 * Avoids crowded grids for a more spacious, high-end editorial feel.
 */
export default function ContinueExploring({ currentId, destinations }: ContinueExploringProps) {
  // Get 3 random destinations excluding the current one
  const recommendations = destinations
    .filter((d) => d.id !== currentId)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)

  if (recommendations.length === 0) return null

  return (
    <section className="py-24 lg:py-40 px-4 sm:px-6 bg-[color:#F7F3EC] border-t border-slate-200/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <SectionReveal blur className="mb-16 lg:mb-24">
          <p className="text-[color:#C8A96A] text-[0.6rem] tracking-[0.45em] uppercase font-semibold mb-6">
            Next Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-800 tracking-tight">
            Continue <span className="italic text-slate-400">the narrative.</span>
          </h2>
        </SectionReveal>

        {/* Staggered Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {recommendations.map((dest, idx) => (
            <SectionReveal 
              key={dest.id} 
              blur 
              delay={idx * 0.12} 
              y={10}
              className={`${idx === 1 ? 'lg:mt-12' : ''}`} // Subtle vertical stagger
            >
              <Link href={`/destinations/${dest.id}`} className="group block">
                <div className="relative aspect-[3/4] mb-8 overflow-hidden rounded-[2.5rem] bg-slate-200">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-[4000ms] ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-slate-900/5 transition-colors duration-1000 group-hover:bg-transparent" />
                  
                  {/* Subtle hover overlay – restrained opacity pass */}
                  <div className="absolute inset-x-0 bottom-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out">
                    <div className="bg-white/15 backdrop-blur-lg p-5 rounded-2xl border border-white/20 flex items-center justify-between">
                      <span className="text-white text-[0.62rem] uppercase tracking-[0.2em] font-semibold">Read Story</span>
                      <ArrowRight className="w-3.5 h-3.5 text-white transition-transform duration-700 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3 px-2">
                  <div className="flex items-center gap-2 text-[color:#C8A96A] text-[0.6rem] tracking-[0.25em] uppercase font-semibold">
                    <MapPin className="w-3 h-3" />
                    {dest.location}
                  </div>
                  <h3 className="text-2xl font-sans font-semibold text-slate-800 group-hover:text-[color:#C8A96A] transition-colors duration-500">
                    {dest.name}
                  </h3>
                  <p className="text-slate-500 text-sm font-light leading-relaxed line-clamp-2 max-w-[90%]">
                    {dest.description}
                  </p>
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
