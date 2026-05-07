// =============================================================
// app/destinations/[id]/page.tsx  →  Route: /destinations/:id
//
// [id] là "dynamic segment" – Next.js sẽ render trang này
// cho mọi URL như /destinations/vinh-ha-long, /destinations/sapa, ...
//
// Server Component – lấy data từ params, render phía server.
// =============================================================

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getDestinationById, destinations } from '@/data/destinations'
import { BUDGET_COLORS } from '@/constants/filters'
import { getRatingColor, formatReviewCount } from '@/lib/utils'
import { MapPin, Compass, WalletCards, CalendarDays, Clock3, ArrowLeft, Sparkles } from 'lucide-react'
import SectionReveal from '@/components/ui/SectionReveal'

// ----------------------------------------------------------------
// Props – Next.js 15 truyền params dưới dạng Promise
// Cần await params để lấy giá trị id
// ----------------------------------------------------------------
interface PageProps {
  params: Promise<{ id: string }>
}

// ----------------------------------------------------------------
// generateStaticParams – báo cho Next.js biết tất cả các ID
// Dùng cho Static Site Generation (SSG): build ra HTML sẵn
// ----------------------------------------------------------------
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
  } = destination

  return (
    <div className="min-h-screen aurora-section-bg">

      {/* ============================================================
          HERO – cinematic full-image, editorial title overlay
      ============================================================ */}
      <section className="relative h-[70vh] min-h-[460px] overflow-hidden">
        <Image
          src={image}
          alt={`${name} — Aurora destination`}
          fill
          priority                    // Ưu tiên load ảnh này (LCP optimization)
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Multi-layer gradient: base darkness + bottom text anchor + subtle left anchor */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(4,10,16,0.82)] via-[rgba(4,10,16,0.22)] to-[rgba(4,10,16,0.08)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(4,10,16,0.30)] via-transparent to-transparent" />

        {/* Nội dung trên ảnh: breadcrumb + eyebrow + tên + meta */}
        <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-10 pb-10 sm:pb-16">
          <div className="max-w-5xl mx-auto">

            {/* Breadcrumb – nhỏ, mờ, không cạnh tranh với tên */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[0.65rem] tracking-[0.2em] uppercase text-white/45 mb-5">
              <Link href="/" className="hover:text-white/75 transition-colors duration-200">Home</Link>
              <span aria-hidden="true">—</span>
              <Link href="/destinations" className="hover:text-white/75 transition-colors duration-200">Destinations</Link>
              <span aria-hidden="true">—</span>
              <span className="text-white/70">{name}</span>
            </nav>

            {/* Eyebrow: category · region in gold */}
            <p className="text-[color:#C8A96A] text-[0.65rem] tracking-[0.3em] uppercase mb-4 font-light">
              {category}&ensp;·&ensp;{region}
            </p>

            {/* Tên địa điểm – lớn, nhẹ, cinematic */}
            <SectionReveal blur staggerChildren delay={0.2}>
              <h1 className="text-[2.8rem] sm:text-5xl lg:text-[3.75rem] font-medium text-white leading-[1.06] font-serif tracking-[-0.015em] mb-6">
                {name}
              </h1>

              {/* Meta row: location + rating + budget */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <span className="flex items-center gap-1.5 text-white/65 text-sm">
                  <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  {location}
                </span>

                <span aria-hidden="true" className="text-white/20 hidden sm:inline text-sm">|</span>

                <span className={`font-semibold text-sm ${getRatingColor(rating)}`}>
                  ★ {rating}
                </span>
                <span className="text-white/45 text-xs">
                  {formatReviewCount(reviewCount)} reviews
                </span>

                {/* Budget badge – far right on desktop */}
                <span className={`ml-auto hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${BUDGET_COLORS[budget]}`}>
                  <WalletCards className="h-3 w-3" aria-hidden="true" />
                  {budget}
                </span>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          CONTENT – editorial 2-column layout
      ============================================================ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">

          {/* Mobile back link – visible only on small screens, above the grid */}
          <div className="lg:hidden mb-10">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-800 text-sm transition-colors duration-200"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              All destinations
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">

            {/* === Cột trái: Nội dung chính (chiếm 2/3) === */}
            <div className="lg:col-span-2 space-y-16">

              {/* ── Standfirst / Short description ──
                  Dùng trường `description` ngắn như một "deck" – câu mở đầu ấn tượng
                  trước khi vào bài viết dài hơn. Kiểu editorial magazine. */}
              <div>
                {/* Thin gold accent rule — visual bridge from hero */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="h-px flex-1 bg-gradient-to-r from-[color:#C8A96A]/60 to-transparent" aria-hidden="true" />
                  <span className="text-[color:#C8A96A] text-[0.6rem] tracking-[0.3em] uppercase font-light shrink-0">
                    Aurora Collection
                  </span>
                </div>

                {/* Lead / standfirst paragraph – emotionally hooks the reader */}
                <p className="text-slate-800 text-lg sm:text-xl leading-[1.75] font-light mb-8 border-l-2 border-[color:#C8A96A]/40 pl-5">
                  {description}
                </p>

                {/* Full editorial body text */}
                <div className="space-y-6">
                  {longDescription.split('\n\n').map((para, i) => (
                    <p key={i} className="text-slate-600 text-[0.95rem] sm:text-base leading-[1.9] font-light">
                      {para.trim()}
                    </p>
                  ))}
                </div>
              </div>

              {/* ── Highlights – numbered editorial list ── */}
              <div>
                <p className="text-[color:#5F7F78] text-[0.65rem] tracking-[0.28em] uppercase font-medium mb-7">
                  Curated Highlights
                </p>

                {/* Danh sách dạng line – không phải card grid, nhìn editorial hơn */}
                <ul className="divide-y divide-slate-100">
                  {highlights.map((h, index) => (
                    <li key={h} className="flex items-start gap-5 py-5 first:pt-0 last:pb-0">
                      {/* Số thứ tự – gold, elegant */}
                      <span className="shrink-0 text-[color:#C8A96A] font-light text-xs tracking-wider w-6 text-right pt-[0.2rem]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-slate-700 text-sm sm:text-[0.95rem] leading-[1.75]">
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* === Cột phải: Sidebar (1/3) === */}
            <div className="space-y-4 lg:pt-0">

              {/* Quick facts card */}
              <div className="p-6 lg:p-7 bg-white/70 rounded-2xl border border-slate-100 shadow-[0_16px_50px_rgba(31,41,51,0.06)]">
                <p className="text-[color:#5F7F78] text-[0.62rem] tracking-[0.28em] uppercase font-medium mb-5">
                  Quick Facts
                </p>

                <div className="divide-y divide-slate-100/80">
                  {[
                    { label: 'Best Season',  value: bestTime,  icon: CalendarDays },
                    { label: 'Duration',     value: duration,  icon: Clock3       },
                    { label: 'Travel Style', value: category,  icon: Compass      },
                    { label: 'Budget',       value: budget,    icon: WalletCards  },
                    { label: 'Region',       value: region,    icon: MapPin       },
                  ].map((info) => (
                    <div key={info.label} className="flex items-start gap-3 py-3.5 first:pt-0 last:pb-0">
                      <info.icon className="h-3.5 w-3.5 text-[color:#C8A96A] shrink-0 mt-[0.2rem]" aria-hidden="true" />
                      <div>
                        <p className="text-slate-400 text-[0.62rem] uppercase tracking-wider leading-none mb-1">
                          {info.label}
                        </p>
                        <p className="text-slate-800 text-sm font-medium leading-snug">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI teaser – muted, secondary */}
              <div className="p-5 bg-white/50 border border-slate-200/60 rounded-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-3.5 w-3.5 text-[color:#C8A96A]" aria-hidden="true" />
                  <span className="text-slate-600 font-medium text-xs tracking-wide uppercase">
                    AI Planning — Coming Soon
                  </span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Personalized itineraries tailored to your pace and preferences. Available in V2.
                </p>
              </div>

              {/* Nút quay lại – desktop only (mobile has top link) */}
              <Link
                href="/destinations"
                className="hidden lg:flex items-center justify-center gap-2 w-full py-3 px-5
                           bg-white/60 hover:bg-white/85 border border-slate-200/60
                           text-slate-500 hover:text-slate-800 text-sm
                           rounded-2xl transition-all duration-300 ease-out"
              >
                <ArrowLeft className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                All destinations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
