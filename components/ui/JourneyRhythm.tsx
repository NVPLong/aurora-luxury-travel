'use client'

import { Destination } from '@/types'
import SectionReveal from './SectionReveal'
import Image from 'next/image'
import { Sunrise, Sun, Sunset, Moon, Sparkles } from 'lucide-react'

interface JourneyRhythmProps {
  rhythm: Destination['journeyRhythm']
}

const TIME_ICONS = {
  'Morning': Sunrise,
  'Afternoon': Sun,
  'Golden Hour': Sunset,
  'Evening': Moon
}

/**
 * JourneyRhythm Component
 * A cinematic, editorial representation of the day's flow.
 * Refined for "Expensive Silence" — minimal motion, maximum atmosphere.
 */
export default function JourneyRhythm({ rhythm }: JourneyRhythmProps) {
  if (!rhythm || rhythm.length === 0) return null

  return (
    <section className="py-32 lg:py-56 px-4 sm:px-6 bg-[#F8FAF7] relative overflow-hidden">
      {/* Background Atmosphere - Subtle light gradient to simulate day cycle */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F7F3EC]/30 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <SectionReveal blur y={15} delay={0.1} className="text-center mb-32 lg:mb-48">
          <div className="flex justify-center items-center gap-5 mb-8">
            <span className="h-px w-10 bg-[color:#C8A96A]/30" />
            <p className="text-[color:#C8A96A] text-[0.62rem] tracking-[0.55em] uppercase font-semibold">
              The Narrative of Light
            </p>
            <span className="h-px w-10 bg-[color:#C8A96A]/30" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-800 tracking-tight leading-[1.15] max-w-4xl mx-auto">
            A day told through <span className="italic opacity-80">stillness</span> and shadows
          </h2>
        </SectionReveal>

        {/* Rhythm Flow */}
        <div className="space-y-48 lg:space-y-72">
          {rhythm.map((step, index) => {
            const Icon = TIME_ICONS[step.time]
            const isEven = index % 2 === 0

            return (
              <div 
                key={step.time} 
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-32`}
              >
                {/* Visual Side: Focus-Pull Cinematic Imagery */}
                <div className="w-full lg:w-[55%]">
                  <SectionReveal blur delay={0.2} y={0}>
                    <div className="group relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-slate-200 shadow-sm transition-shadow duration-1000 hover:shadow-2xl">
                      {step.image ? (
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover transition-transform duration-[4000ms] ease-out group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 55vw"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100" />
                      )}
                      
                      {/* Atmospheric Overlay: Soft focus and light scrim */}
                      <div className="absolute inset-0 bg-slate-950/5 group-hover:bg-transparent transition-colors duration-[2000ms]" />
                      <div className="absolute inset-0 opacity-20 group-hover:opacity-0 transition-opacity duration-[2000ms] backdrop-blur-[2px]" />
                      
                      {/* Time Label: Minimal Integrated Style */}
                      <div className="absolute bottom-8 left-8 lg:bottom-10 lg:left-10 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-[0.65rem] tracking-[0.3em] uppercase font-semibold text-white drop-shadow-sm">
                          {step.time}
                        </span>
                      </div>
                    </div>
                  </SectionReveal>
                </div>

                {/* Content Side: Calm Storytelling */}
                <div className="w-full lg:w-[45%] space-y-10">
                  <SectionReveal staggerChildren blur delay={0.4} y={10}>
                    {/* Editorial Eyebrow */}
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-[color:#C8A96A] font-serif italic text-5xl opacity-20 select-none">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="h-px w-12 bg-[color:#C8A96A]/20" />
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-serif text-slate-800 tracking-tight mb-8 leading-tight">
                      {step.title}
                    </h3>

                    <p className="text-slate-600/80 text-lg lg:text-xl leading-[1.9] font-light mb-12 max-w-lg">
                      {step.description}
                    </p>

                    {/* Activity: The Soft CTA */}
                    <div className="relative pl-8 border-l border-[color:#C8A96A]/20 py-2 group">
                      <p className="text-[color:#5F7F78] text-[0.62rem] uppercase tracking-[0.3em] font-semibold mb-3 opacity-60 group-hover:opacity-100 transition-opacity duration-700">
                        The Quiet Experience
                      </p>
                      <p className="text-slate-800 text-lg font-normal leading-relaxed italic">
                        “{step.activity}”
                      </p>
                    </div>
                  </SectionReveal>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      
      {/* Scroll Indicator at Section Bottom */}
      <div className="mt-48 flex flex-col items-center gap-6 opacity-30">
        <div className="h-24 w-px bg-gradient-to-b from-[color:#C8A96A] to-transparent" />
        <span className="text-[0.55rem] tracking-[0.4em] uppercase font-medium">Continue the Narrative</span>
      </div>
    </section>
  )
}
