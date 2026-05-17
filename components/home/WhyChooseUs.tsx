// =============================================================
// components/home/WhyChooseUs.tsx
// Section "Why Aurora" với các lợi ích.
// Server Component – render thuần HTML, không có tương tác.
// =============================================================
import {
  Search,
  Map,
  WalletCards,
  Smartphone,
  Sparkles,
  Globe2,
  type LucideIcon,
} from 'lucide-react'
import SectionReveal from '@/components/motion/SectionReveal'

// Định nghĩa kiểu dữ liệu cho mỗi feature card
interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

const FEATURES: Feature[] = [
  {
    icon: Search,
    title: 'Curated Search',
    description: 'Find rare escapes by mood, setting, and budget — quickly, clearly, and without clutter.',
  },
  {
    icon: Map,
    title: 'Editorial Details',
    description: 'Every destination is presented with useful timing, highlights, and travel context.',
  },
  {
    icon: WalletCards,
    title: 'Budget Clarity',
    description: 'Simple budget filters help visitors decide faster without overwhelming them.',
  },
  {
    icon: Smartphone,
    title: 'Premium on Every Screen',
    description: 'Clean layouts, readable content, and thoughtful spacing across mobile, tablet, and desktop.',
  },
  {
    icon: Sparkles,
    title: 'AI Journey Planning',
    description: 'Future-ready recommendations designed around traveler preferences and trip rhythm.',
  },
  {
    icon: Globe2,
    title: 'Ready for the World',
    description: 'A flexible interface built to expand beyond one country and into global destinations.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-32 lg:py-48 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <SectionReveal blur className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[color:#5F7F78] text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            <span className="h-px w-8 bg-[color:#C8A96A]" aria-hidden="true" />
            Why Aurora
          </span>
          <h2 className="text-slate-900 text-3xl sm:text-5xl font-medium mb-5 font-serif tracking-tight">
            Quiet tools for confident choices.
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            A minimal system that stays out of the way — so the destination can do the talking.
          </p>
        </SectionReveal>

        {/* Grid 6 features */}
        <SectionReveal staggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group p-8 aurora-surface-subtle
                         transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(31,41,51,0.08)]"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex rounded-full p-4 bg-white/70 border border-white/50 shadow-sm transition-transform duration-500 ease-out group-hover:scale-105">
                  <feature.icon className="h-6 w-6 text-[color:#C8A96A]" />
                </div>
              </div>

              {/* Tiêu đề feature */}
              <h3 className="text-slate-900 font-medium text-lg mb-3">
                {feature.title}
              </h3>

              {/* Mô tả */}
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </SectionReveal>
      </div>
    </section>
  )
}
