import Image from 'next/image'
import Link from 'next/link'
import { Destination } from '@/types'
import { ArrowRight, MapPin } from 'lucide-react'
import SectionReveal from '@/components/motion/SectionReveal'

interface ContinueExploringProps {
  currentId: string
  destinations: Destination[]
}

export default function ContinueExploring({ currentId, destinations }: ContinueExploringProps) {
  const currentIndex = destinations.findIndex((destination) => destination.id === currentId)
  const orderedDestinations =
    currentIndex >= 0
      ? [...destinations.slice(currentIndex + 1), ...destinations.slice(0, currentIndex)]
      : destinations
  const recommendations = orderedDestinations.filter((destination) => destination.id !== currentId).slice(0, 3)

  if (recommendations.length === 0) return null

  return (
    <section className="border-t border-slate-200/80 bg-[linear-gradient(135deg,#fdfcfb_0%,#F7F3EC_55%,#e4efe9_100%)] px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionReveal blur className="mb-10 lg:mb-14">
          <p className="mb-6 text-[0.6rem] font-semibold uppercase tracking-[0.45em] text-[color:#9D7A38]">
            Next Journey
          </p>
          <h2 className="font-serif text-3xl tracking-tight text-slate-900 md:text-5xl">
            Continue with a place you can see.
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6">
          {recommendations.map((destination, index) => (
            <SectionReveal key={destination.id} blur delay={index * 0.12} y={10}>
              <Link href={`/destinations/${destination.id}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_70px_rgba(15,23,42,0.10)] lg:aspect-[4/5]">
                  <Image
                    src={destination.image}
                    alt={destination.imageAlt ?? destination.name}
                    fill
                    unoptimized
                    className="object-cover brightness-[1.03] contrast-[1.04] transition duration-[3000ms] ease-out group-hover:scale-[1.035]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/84 via-slate-950/24 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7">
                    <div className="mb-5 flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.25em] text-[color:#E2C88C]">
                      <MapPin className="h-3 w-3" aria-hidden="true" />
                      {destination.location}
                    </div>
                    <h3 className="mb-3 text-3xl font-semibold text-white transition-colors duration-500 group-hover:text-[color:#E2C88C]">
                      {destination.name}
                    </h3>
                    <p className="line-clamp-2 max-w-sm text-sm font-light leading-relaxed text-white/78">
                      {destination.description}
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/14 px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                      Read story
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-700 group-hover:translate-x-1" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
