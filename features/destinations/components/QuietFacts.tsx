'use client'

import { Destination } from '@/types'
import { CalendarDays, Clock3, Compass, Sparkles } from 'lucide-react'
import SectionReveal from '@/components/motion/SectionReveal'

interface QuietFactsProps {
  destination: Destination
}

/**
 * QuietFacts Component
 * A refined information layer that presents essential travel data with editorial elegance.
 * Replaces the traditional "spec-sheet" sidebar card.
 */
export default function QuietFacts({ destination }: QuietFactsProps) {
  const facts = [
    { label: 'Ideal Season', value: destination.bestTime, icon: CalendarDays },
    { label: 'Recommended', value: destination.duration, icon: Clock3 },
    { label: 'Atmosphere', value: destination.atmosphere || 'Serene', icon: Sparkles },
    { label: 'Travel Style', value: destination.category, icon: Compass },
  ]

  return (
    <SectionReveal blur delay={0.2} y={15} className="w-full">
      <div className="mb-20 grid grid-cols-2 gap-x-8 gap-y-12 border-y border-slate-200/80 py-14 lg:grid-cols-4">
        {facts.map((fact, index) => (
          <div key={fact.label} className="group flex flex-col">
            {/* Minimal Label */}
            <div className="flex items-center gap-3 mb-4">
              <fact.icon className="w-3 h-3 text-[color:#9D7A38] opacity-55 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="text-slate-400 text-[0.65rem] uppercase tracking-[0.35em] font-medium">
                {fact.label}
              </p>
            </div>

            {/* Elegant Value */}
            <p className="text-slate-900 text-xl lg:text-2xl font-sans font-semibold tracking-tight leading-tight group-hover:text-[color:#9D7A38] transition-colors duration-700">
              {fact.value}
            </p>

            {/* Visual Accent - Very subtle dot */}
            <div className="mt-6 h-px w-0 bg-[color:#B9904A]/40 group-hover:w-8 transition-all duration-700 ease-out" />
          </div>
        ))}
      </div>
    </SectionReveal>
  )
}
