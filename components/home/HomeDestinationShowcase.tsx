'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FormEvent, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, MapPin, Search } from 'lucide-react'
import { destinations } from '@/content/destinations'
import type { Destination } from '@/types'

const featuredDestinations = destinations.filter((destination) => destination.featured).slice(0, 5)

const buildHomeCopy = (destination: Destination) => {
  return destination.description
}

export default function HomeDestinationShowcase() {
  const router = useRouter()
  const [activeId, setActiveId] = useState(featuredDestinations[0]?.id ?? destinations[0].id)
  const [cardOrderIds, setCardOrderIds] = useState(() => featuredDestinations.map((destination) => destination.id))
  const [query, setQuery] = useState('')

  const activeDestination = useMemo(
    () => destinations.find((destination) => destination.id === activeId) ?? destinations[0],
    [activeId],
  )

  const activeIndex = featuredDestinations.findIndex((destination) => destination.id === activeDestination.id)
  const orderedFeaturedDestinations = useMemo(
    () =>
      cardOrderIds
        .map((id) => featuredDestinations.find((destination) => destination.id === id))
        .filter((destination): destination is Destination => Boolean(destination)),
    [cardOrderIds],
  )

  const handleSelectDestination = (destinationId: string) => {
    // Dua the vua chon len dau deck va day the dang mo ve cuoi de tao cam giac xoay vong.
    setCardOrderIds((currentOrder) => {
      const previousActiveId = activeId
      const middleCards = currentOrder.filter((id) => id !== destinationId && id !== previousActiveId)

      if (destinationId === previousActiveId) {
        return currentOrder
      }

      return [destinationId, ...middleCards, previousActiveId]
    })
    setActiveId(destinationId)
  }

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const normalizedQuery = query.trim()
    if (!normalizedQuery) {
      router.push('/destinations')
      return
    }

    const exactMatch = destinations.find(
      (destination) => destination.name.toLowerCase() === normalizedQuery.toLowerCase(),
    )

    if (exactMatch) {
      router.push(`/destinations/${exactMatch.id}`)
      return
    }

    router.push(`/destinations?search=${encodeURIComponent(normalizedQuery)}`)
  }

  return (
    <section className="relative -mt-16 min-h-[calc(100svh+4rem)] overflow-hidden bg-[#18201F]">
      <Image
        key={activeDestination.id}
        src={activeDestination.image}
        alt={activeDestination.imageAlt ?? activeDestination.name}
        fill
        priority
        unoptimized
        className="object-cover brightness-[1.04] contrast-[1.08] saturate-[0.94] opacity-0 animate-[fadeIn_900ms_ease-out_forwards]"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-[#18201F]/16" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0E1715]/76 via-[#0E1715]/28 to-[#0E1715]/6" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E1715]/58 via-transparent to-[#0E1715]/12" aria-hidden="true" />

      <form
        onSubmit={handleSearch}
        className="absolute left-1/2 top-24 z-20 flex w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 items-center gap-3 rounded-full border border-white bg-[linear-gradient(135deg,#FFFFFF_0%,#F8FAF7_56%,#EFE6D5_100%)] px-5 py-3 shadow-[0_18px_60px_rgba(8,13,18,0.18)] sm:top-28 sm:px-6 lg:top-32"
      >
        <label htmlFor="home-destination-search" className="sr-only">
          Search destinations
        </label>
        <input
          id="home-destination-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search tourist spots"
          className="h-8 min-w-0 flex-1 bg-transparent text-sm font-normal text-slate-900 outline-none placeholder:text-slate-500"
        />
        <button
          type="submit"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#5F7F78] transition duration-300 hover:bg-[#E8E6DD] hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96A]/50"
          aria-label="Search destinations"
        >
          <Search className="h-4.5 w-4.5" aria-hidden="true" />
        </button>
      </form>

      <div className="relative z-10 min-h-[calc(100svh+4rem)] px-5 pt-44 sm:px-8 sm:pt-52 lg:px-12 lg:pt-40">
        <div className="mx-auto flex h-full min-h-[calc(100svh-7rem)] w-full max-w-7xl flex-col justify-center pb-72 lg:pb-44">
          <div className="max-w-4xl">
            <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[color:#D7B978]">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {activeDestination.location} - {activeDestination.region}
            </p>

            <h1 className="max-w-5xl font-serif text-5xl font-medium leading-[0.96] tracking-[-0.02em] text-white drop-shadow-[0_10px_38px_rgba(0,0,0,0.34)] sm:text-7xl lg:text-[6.6rem]">
              {activeDestination.name}
            </h1>

            <p className="mt-7 max-w-2xl text-base font-normal leading-[1.75] text-white/95 drop-shadow-[0_6px_24px_rgba(0,0,0,0.72)] sm:text-lg lg:text-xl">
              {buildHomeCopy(activeDestination)}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                href={`/destinations/${activeDestination.id}`}
                className="inline-flex items-center gap-2 rounded-xl border border-white/70 bg-[linear-gradient(135deg,#FFFFFF_0%,#F7F3EC_46%,#E2C88C_100%)] px-5 py-3 text-sm font-semibold text-slate-900 shadow-[0_16px_42px_rgba(8,13,18,0.18)] transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_22px_58px_rgba(8,13,18,0.24)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7B978]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E1715]"
              >
                Explore
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <aside className="absolute bottom-7 right-5 z-20 w-[calc(100%-2.5rem)] sm:right-8 sm:w-auto lg:bottom-10 lg:left-[54vw] lg:right-[-7rem] xl:left-[52vw] 2xl:left-[49vw]">
        <div className="mb-4 hidden items-center justify-start gap-4 text-[0.62rem] font-semibold uppercase tracking-[0.42em] text-white/70 lg:flex">
          <span className="h-px w-10 bg-[color:#D7B978]/55" aria-hidden="true" />
          Featured Places
        </div>

        <div className="flex items-end overflow-x-auto pb-3 sm:justify-end lg:justify-start lg:overflow-visible">
          {orderedFeaturedDestinations.map((destination, stackIndex) => {
            const isActive = destination.id === activeDestination.id
            const originalIndex = featuredDestinations.findIndex((item) => item.id === destination.id)

            return (
              <button
                key={destination.id}
                type="button"
                onClick={() => handleSelectDestination(destination.id)}
                className={[
                  'group relative shrink-0 overflow-hidden text-left shadow-[0_18px_50px_rgba(8,13,18,0.24)] transition-all duration-700 ease-out first:ml-0',
                  isActive
                    ? 'z-30 h-72 w-48 -translate-y-3 scale-[1.015] rounded-[2.6rem] ring-1 ring-[#D7B978]/72 ring-offset-3 ring-offset-white/10 sm:h-80 sm:w-56 lg:mr-[-4rem]'
                    : 'z-10 ml-3 h-44 w-28 translate-y-2 scale-[0.97] rounded-[2rem] opacity-[0.9] hover:-translate-y-0.5 hover:scale-[0.985] hover:opacity-100 sm:h-52 sm:w-36 lg:ml-[-2rem]',
                  stackIndex > 2 && !isActive ? 'hidden sm:block' : '',
                ].join(' ')}
                aria-pressed={isActive}
              >
                <Image
                  src={destination.image}
                  alt={destination.imageAlt ?? destination.name}
                  fill
                  unoptimized
                  className="object-cover brightness-[1.05] contrast-[1.04] transition duration-700 ease-out group-hover:scale-[1.025]"
                  sizes="(max-width: 640px) 112px, 224px"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-[#0E1715]/82 via-[#0E1715]/18 to-transparent" aria-hidden="true" />
                <span className="absolute left-4 top-4 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[#D7B978]">
                  {String(originalIndex + 1).padStart(2, '0')}
                </span>
                <span className="absolute inset-x-4 bottom-4">
                  <span className="mb-1 block text-[0.56rem] font-semibold uppercase tracking-[0.22em] text-white/62">
                    {destination.region}
                  </span>
                  <span className={['block font-semibold leading-tight text-white', isActive ? 'text-xl' : 'text-base'].join(' ')}>
                    {destination.name}
                  </span>
                  <span className="mt-1 block truncate text-[0.72rem] font-light text-white/66">
                    {destination.atmosphere ?? destination.category}
                  </span>
                </span>
              </button>
            )
          })}
        </div>

        <div className="mt-4 flex items-center justify-end gap-5 text-xs text-white/74">
          <span>
            {activeIndex >= 0 ? String(activeIndex + 1).padStart(2, '0') : '01'} / {String(featuredDestinations.length).padStart(2, '0')}
          </span>
          <Link
            href={`/destinations/${activeDestination.id}`}
            className="inline-flex items-center gap-2 font-semibold text-white transition hover:text-[#D7B978]"
          >
            Read story
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </aside>
    </section>
  )
}
