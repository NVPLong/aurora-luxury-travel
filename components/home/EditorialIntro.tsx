'use client'

import SectionReveal from '@/components/motion/SectionReveal'

export default function EditorialIntro() {
  return (
    <section className="py-32 lg:py-48 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <SectionReveal>
          <span className="text-[0.6rem] tracking-[0.4em] uppercase text-[color:#C8A96A] font-semibold mb-8 block">
            Our Philosophy
          </span>

          <h2 className="text-3xl sm:text-5xl font-serif text-slate-900 leading-[1.15] mb-10 tracking-tight italic">
            &ldquo;In a world of constant motion, <br className="hidden sm:block" />
            we seek the unhurried pauses.&rdquo;
          </h2>

          <p className="text-slate-500 text-lg sm:text-xl leading-relaxed font-light max-w-2xl mx-auto">
            Aurora is more than a travel platform; it is a quiet edit of the world&apos;s most soulful landscapes.
            We believe luxury isn&apos;t about excess, but about the profound silence of a rare moment,
            expertly curated for the discerning wanderer.
          </p>

          <div className="mt-12 h-px w-16 bg-slate-200 mx-auto" aria-hidden="true" />
        </SectionReveal>
      </div>
    </section>
  )
}
