// app/destinations/[id]/page.tsx  →  Route: /destinations/:id
//
// [id] is a "dynamic segment" – Next.js renders this page
// for every URL like /destinations/ha-long-bay, /destinations/sapa, ...
//
// Server Component – fetches data from params, renders on server.
// =============================================================

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getDestinationById, destinations } from '@/content/destinations'
import { BUDGET_COLORS } from '@/constants/filters'
import { getRatingColor, formatReviewCount } from '@/lib/utils'
import { MapPin, WalletCards, ArrowLeft, Sparkles } from 'lucide-react'
import SectionReveal from '@/components/motion/SectionReveal'
import { HeroBackground, HeroOverlay } from '@/components/motion/HeroMotion'
import QuietFacts from '@/features/destinations/components/QuietFacts'
import ContinueExploring from '@/features/destinations/components/ContinueExploring'

// ----------------------------------------------------------------
// Props – Next.js 15 truyền params dưới dạng Promise
// Cần await params để lấy giá trị id
// ----------------------------------------------------------------
interface PageProps {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return destinations.map((d) => ({ id: d.id }))
}

// ----------------------------------------------------------------
// generateMetadata – SEO động, mỗi trang có title riêng
// ----------------------------------------------------------------
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const destination = getDestinationById(id)
  if (!destination) return { title: 'Not found' }

  return {
    title: destination.name,
    description: destination.description,
  }
}

// ----------------------------------------------------------------
// Component chính – trang chi tiết địa điểm
// ----------------------------------------------------------------
export default async function DestinationDetailPage({ params }: PageProps) {
  const { id } = await params
  const destination = getDestinationById(id)

  // Nếu không tìm thấy → Next.js hiển thị trang 404
  if (!destination) {
    notFound()
  }

  const {
    name, location, region, category, budget,
    rating, reviewCount, image, description,
    longDescription, highlights, bestTime, duration,
    signatureMoments, gallery
  } = destination

  return (
    <div className="min-h-screen bg-[#fdfcfb] text-slate-900">

      {/* ============================================================
          HERO – cinematic full-image, editorial title overlay
      ============================================================ */}
      <section className="relative h-[85vh] lg:h-[90vh] min-h-[600px] overflow-hidden bg-slate-950">
        <HeroBackground>
          <Image
            src={image}
            alt={destination.imageAlt ?? `${name} - Aurora destination`}
            fill
            priority                    // Ưu tiên load ảnh này (LCP optimization)
            unoptimized
            className="object-cover object-center brightness-[0.92] contrast-[1.08] saturate-[0.95]" // Editorial film treatment
            sizes="100vw"
          />
        </HeroBackground>

        {/* Multi-layer atmospheric stack: Expensive Silence approach */}
        <HeroOverlay delay={0.4}>
          {/* Layer 1: Global Vignette – pulls focus to the center/content */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,rgba(15,18,24,0.35)_100%)]" />

          {/* Layer 2: Content Anchor – linear gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(15,18,24,0.92)] via-[rgba(15,18,24,0.35)] to-transparent" />

          {/* Layer 3: Atmospheric Depth – soft bottom-to-top scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,18,24,0.50)] via-transparent to-transparent" />
        </HeroOverlay>

        {/* Nội dung trên ảnh: breadcrumb + eyebrow + tên + mood + meta */}
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="max-w-6xl mx-auto w-full px-6 sm:px-10 pb-16 lg:pb-24">

            <SectionReveal blur delay={0.8} y={15}>
              {/* Breadcrumb – gallery label style */}
              <nav aria-label="Breadcrumb" className="flex items-center gap-3 text-[0.6rem] tracking-[0.3em] uppercase text-white/35 mb-10 sm:mb-16">
                <Link href="/" className="hover:text-white/80 transition-colors duration-400">Home</Link>
                <span aria-hidden="true" className="w-4 h-px bg-white/10"></span>
                <Link href="/destinations" className="hover:text-white/80 transition-colors duration-400">Collection</Link>
                <span aria-hidden="true" className="w-4 h-px bg-white/10"></span>
                <span className="text-white/70">{name}</span>
              </nav>
            </SectionReveal>

            <SectionReveal blur staggerChildren delay={1.1} y={15}>
              {/* Eyebrow: cinematic category label */}
              <div className="flex items-center gap-5 mb-8">
                <span className="h-px w-12 bg-gradient-to-r from-[color:#C8A96A] to-transparent"></span>
                <p className="text-[color:#C8A96A] text-[0.65rem] tracking-[0.45em] uppercase font-medium">
                  {category} · {region}
                </p>
              </div>

              {/* Tên địa điểm – monumental cinematic serif */}
              <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif font-medium text-white leading-[0.98] tracking-[-0.02em] mb-10">
                {name}
              </h1>

              {/* Mood description – evocative sub-headline */}
              <p className="text-white/75 text-lg lg:text-xl font-normal font-sans max-w-xl leading-relaxed mb-12 lg:mb-16">
                Discover the quiet rhythm of {location}, where landscapes breathe with heritage and every moment invites stillness.
              </p>

              {/* Meta row: structured editorial data */}
              <div className="flex flex-wrap items-center gap-10 lg:gap-16 pt-12 border-t border-white/10">
                <div className="flex flex-col gap-2.5">
                  <span className="text-white/30 text-[0.55rem] uppercase tracking-[0.35em] font-sans font-medium">Location</span>
                  <span className="flex items-center gap-2 text-white/90 text-sm font-sans tracking-wide">
                    <MapPin className="h-3.5 w-3.5 text-[color:#C8A96A] opacity-80" aria-hidden="true" />
                    {location}
                  </span>
                </div>

                <div className="flex flex-col gap-2.5">
                  <span className="text-white/30 text-[0.55rem] uppercase tracking-[0.35em] font-sans font-medium">Curated Rating</span>
                  <div className="flex items-center gap-3">
                    <span className={`text-sm font-medium font-sans ${getRatingColor(rating)}`}>★ {rating}</span>
                    <span className="text-white/30 text-[0.6rem] font-sans tracking-wider">({formatReviewCount(reviewCount)} reviews)</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 sm:ml-auto">
                  <span className="text-white/30 text-[0.55rem] uppercase tracking-[0.35em] font-sans font-medium">Budget Category</span>
                  <span className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[0.6rem] tracking-[0.15em] uppercase font-semibold border border-white/5 backdrop-blur-md ${BUDGET_COLORS[budget]}`}>
                    <WalletCards className="h-3 w-3" aria-hidden="true" />
                    {budget}
                  </span>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          CONTENT – editorial storytelling & curated details
      ============================================================ */}
      <section className="bg-[linear-gradient(135deg,#fdfcfb_0%,#F7F3EC_46%,#e4efe9_100%)] px-4 py-20 sm:px-6 lg:py-28">
        <div className="max-w-6xl mx-auto">

          {/* Mobile back link – subtle navigation */}
          <div className="lg:hidden mb-12">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-3 text-slate-500 hover:text-slate-900 text-[0.7rem] uppercase tracking-widest transition-colors duration-300"
            >
              <ArrowLeft className="h-3 w-3" aria-hidden="true" />
              Back to Collection
            </Link>
          </div>

          <div className="flex flex-col space-y-14 lg:space-y-20">

            {/* === Quiet Facts Bar === */}
            <QuietFacts destination={destination} />

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">

              {/* === Cột trái: Editorial Main Story (2/3) === */}
              <div className="lg:col-span-2 space-y-14 lg:space-y-16">

                {/* ── Editorial Intro ── */}
                <div className="max-w-2xl">
                  {/* Visual bridge: refined editorial mark */}
                  <div className="mb-8 flex items-center gap-5">
                    <span className="h-px w-12 bg-[color:#C8A96A]/40" aria-hidden="true" />
                    <span className="text-[color:#9D7A38] text-[0.62rem] tracking-[0.4em] uppercase font-medium shrink-0">
                      Aurora Narrative
                    </span>
                  </div>

                  {/* Standfirst: The editorial hook (Serif) */}
                  <p className="mb-8 text-2xl font-serif leading-[1.4] tracking-tight text-slate-900 sm:text-3xl">
                    {description}
                  </p>

                  {/* Full editorial body text (Sans) */}
                  <div className="space-y-8">
                    {longDescription.split('\n\n').slice(0, 1).map((para, i) => (
                      <p key={i} className="text-base font-light leading-[1.8] text-slate-700 sm:text-lg">
                        {para.trim()}
                      </p>
                    ))}
                  </div>
                </div>

                {/* ── Highlights: Numbered Editorial Ledger ── */}
                <div className="max-w-2xl border-t border-slate-200/80 pt-10 lg:pt-12">
                  <p className="text-[color:#5F7F78] text-[0.65rem] tracking-[0.3em] uppercase font-semibold mb-10">
                    In Three Impressions
                  </p>

                  <ul className="space-y-0">
                    {highlights.slice(0, 3).map((h, index) => (
                      <li key={h} className="group flex items-start gap-7 border-b border-slate-200/70 py-5 last:border-0">
                        <span className="shrink-0 text-[color:#B9904A] font-serif italic text-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-slate-700 text-[0.95rem] sm:text-base leading-[1.8] font-normal pt-1">
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* === Cột phải: Sidebar (1/3) === */}
              <div className="space-y-4 lg:pt-0">

                {/* AI teaser – muted, secondary */}
                <div className="rounded-2xl border border-white/80 bg-white/70 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="h-3.5 w-3.5 text-[color:#C8A96A]" aria-hidden="true" />
                    <span className="text-slate-700 font-medium text-xs tracking-wider uppercase">
                      Concierge AI
                    </span>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed mb-6 font-light">
                    Personalized itineraries tailored to your pace and preferences. Available in the next release.
                  </p>
                  <div className="h-px w-full bg-slate-200/80 mb-6" />
                  <span className="text-[0.55rem] tracking-[0.2em] uppercase font-semibold text-slate-500">V2 Strategy</span>
                </div>

                {/* Nút quay lại – desktop only (mobile has top link) */}
                <Link
                  href="/destinations"
                  className="hidden lg:flex items-center justify-center gap-3 w-full py-4 px-6
                             bg-white/70 hover:bg-white border border-white/80
                             text-slate-500 hover:text-slate-900 text-[0.7rem] uppercase tracking-widest
                             rounded-2xl shadow-[0_14px_36px_rgba(15,23,42,0.06)] transition-all duration-300 ease-out"
                >
                  <ArrowLeft className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  Return to Collection
                </Link>
              </div>
            </div>

            {gallery && gallery.length > 0 && (
              <SectionReveal blur staggerChildren y={18}>
                <div className="border-t border-slate-200/80 pt-12 lg:pt-16">
                  <div className="mb-8 flex flex-col gap-4 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                      <p className="mb-4 text-[0.62rem] font-semibold uppercase tracking-[0.45em] text-[color:#9D7A38]">
                        Visual Field Notes
                      </p>
                      <h2 className="max-w-4xl font-serif text-3xl leading-tight tracking-tight text-slate-900 md:text-5xl">
                        {name} in three frames.
                      </h2>
                    </div>
                    <p className="max-w-sm text-sm font-light leading-[1.75] text-slate-600 sm:text-base">
                      Three clear visual notes. Enough to understand the mood before asking Aurora for the details.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
                    {gallery.map((item, index) => (
                      <figure
                        key={item.title}
                        className="group relative aspect-[9/10] overflow-hidden rounded-[1.6rem] bg-white shadow-[0_20px_54px_rgba(15,23,42,0.10)]"
                      >
                        <Image
                          src={item.image}
                          alt={item.imageAlt ?? item.title}
                          fill
                          unoptimized
                          className="object-cover brightness-[1.08] contrast-[1.08] saturate-[1.02] transition duration-[2200ms] ease-out group-hover:scale-[1.035]"
                          sizes="(max-width: 1024px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/76 via-slate-950/10 to-transparent" />
                        <figcaption className="absolute inset-x-0 bottom-0 p-4 lg:p-5">
                          <div className="rounded-[1.15rem] border border-white/15 bg-slate-950/78 p-4 shadow-[0_16px_34px_rgba(0,0,0,0.30)]">
                            <span className="mb-2 block text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[color:#E2C88C]">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                            <h3 className="mb-2 text-xl font-semibold leading-tight text-white lg:text-2xl">{item.title}</h3>
                            <p className="max-w-sm text-sm font-light leading-[1.6] text-white/90">{item.caption}</p>
                          </div>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            )}

            <SectionReveal blur y={18}>
              <div className="grid grid-cols-1 gap-5 border-t border-slate-200/80 pt-10 lg:grid-cols-3 lg:pt-12">
                {[
                  'Let the first screen sell the feeling, not the schedule.',
                  'Keep the body short; the user should understand the place by looking.',
                  'Use Aurora AI later for itinerary, budget, season, and personal constraints.',
                ].map((note, index) => (
                  <div key={note} className="rounded-[1.5rem] border border-white/80 bg-white/70 p-6 shadow-[0_16px_44px_rgba(15,23,42,0.06)]">
                    <span className="mb-4 block text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-[color:#9D7A38]">
                      Note {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="text-sm font-light leading-[1.8] text-slate-600">{note}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          JOURNEY RHYTHM – cinematic time-driven experiences
      ============================================================ */}
      {/* ============================================================
          SIGNATURE MOMENTS – memory-driven atmospheric section
      ============================================================ */}
      {false && (
        <section className="border-t border-slate-200/80 bg-[linear-gradient(135deg,#F7F3EC_0%,#fdfcfb_58%,#e4efe9_100%)] px-4 py-28 sm:px-6 lg:py-40">
          <div className="max-w-4xl mx-auto">
            <SectionReveal blur staggerChildren y={15}>
              <div className="text-center mb-20 lg:mb-28">
                <p className="text-[color:#9D7A38] text-[0.6rem] tracking-[0.45em] uppercase font-semibold mb-6">
                  Signature Moments
                </p>
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 tracking-tight">
                  Experiences that linger in memory
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-20 lg:gap-y-24">
                {(signatureMoments ?? []).map((moment, idx) => (
                  <div key={idx} className="group flex flex-col">
                    {/* Visual Container – subtle interactive window */}
                    <div className="relative aspect-[4/3] mb-8 overflow-hidden rounded-2xl bg-white shadow-[0_22px_60px_rgba(15,23,42,0.08)]">
                      {moment.image ? (
                        <Image
                          src={moment.image}
                          alt={moment.title}
                          fill
                          unoptimized
                          className="object-cover brightness-[1.03] contrast-[1.04] transition-transform duration-[2000ms] ease-out group-hover:scale-[1.035]"
                          sizes="(max-width: 768px) 100vw, 40vw"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200" />
                      )}
                      {/* Atmospheric Overlay */}
                      <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-700" />
                    </div>

                    <div className="flex flex-col px-1">
                      <span className="text-[color:#B9904A]/60 font-serif italic text-3xl mb-5 block">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-xl font-sans font-semibold text-slate-900 mb-4 tracking-tight group-hover:text-[color:#9D7A38] transition-colors duration-500">
                        {moment.title}
                      </h3>
                      <p className="text-slate-600 text-[0.92rem] leading-[1.85] font-light max-w-[90%]">
                        {moment.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </section>
      )}

      {/* ============================================================
          CONTINUE EXPLORING – natural narrative discovery
      ============================================================ */}
      <ContinueExploring
        currentId={id}
        destinations={destinations}
      />
    </div>
  )
}
