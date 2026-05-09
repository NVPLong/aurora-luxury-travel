'use client'

import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'
import SectionReveal from '@/components/ui/SectionReveal'
import Image from 'next/image'

/**
 * ConciergeIntro
 * An elegant, quiet editorial introduction to the Aurora AI.
 * Designed to feel like a high-end magazine feature rather than a chatbot promo.
 */
export default function ConciergeIntro() {
  return (
    <section className="py-24 lg:py-40 px-4 sm:px-6 bg-[#F2F4F1] overflow-hidden relative">
      {/* Decorative atmospheric element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[color:#C8A96A]/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Visual Side: Cinematic atmospheric image */}
          <div className="w-full lg:w-1/2">
            <SectionReveal blur y={20}>
              <div className="relative aspect-[4/5] lg:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-200 group">
                <Image
                  src="https://images.unsplash.com/photo-1518417687709-01f3f3460ddc?auto=format&fit=crop&w=1200&q=80"
                  alt="Atmospheric study - Aurora AI Concept"
                  fill
                  className="object-cover transition-transform duration-[4000ms] ease-out group-hover:scale-110 brightness-[0.9] saturate-[0.8]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                
                {/* Subtle Floating Badge */}
                <div className="absolute bottom-10 left-10 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                  <p className="text-white text-xs tracking-[0.3em] uppercase font-semibold mb-2">Cultural Memory</p>
                  <p className="text-white/80 text-[0.65rem] max-w-[150px] leading-relaxed">
                    Woven from atmosphere, heritage, and the rhythm of the land.
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Content Side: The Quiet Invitation */}
          <div className="w-full lg:w-1/2 space-y-10">
            <SectionReveal staggerChildren blur delay={0.2} y={15}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-[color:#C8A96A]/10 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[color:#C8A96A]" />
                </div>
                <p className="text-[color:#C8A96A] text-[0.6rem] tracking-[0.4em] uppercase font-semibold">
                  A Presence of Knowledge
                </p>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-800 tracking-tight leading-[1.1] mb-8">
                Journeys told in a <span className="italic text-slate-500/80">different light.</span>
              </h2>

              <p className="text-slate-600 text-lg lg:text-xl leading-[1.8] font-light max-w-xl mb-12">
                Our guide does not search; it remembers. It listens for the quiet details — the way the mist settles over the terraced hills or the exact moment the lanterns begin to glow. Speak to a presence that values stillness as much as you do.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-8">
                <button className="group relative px-8 py-5 bg-slate-900 text-white rounded-full flex items-center gap-4 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(31,41,51,0.2)] hover:-translate-y-1">
                  <span className="text-sm font-medium tracking-widest uppercase">Share your vision</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
                </button>
                
                <div className="flex flex-col justify-center">
                  <p className="text-slate-400 text-[0.55rem] uppercase tracking-widest mb-1">Observation</p>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[color:#C8A96A] animate-pulse" />
                    <p className="text-slate-600 text-[0.7rem] font-medium tracking-wide">Listening to the world</p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>

        </div>
      </div>
    </section>
  )
}
