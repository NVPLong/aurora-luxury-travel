// =============================================================
// app/about/page.tsx  →  Route: /about  (Trang giới thiệu)
// Giới thiệu project + Roadmap AI cho các version tiếp theo.
// =============================================================

import type { Metadata } from 'next'
import Link from 'next/link'
import { Sparkles, Globe2, Compass, Rocket, Bot, Globe, Target, User, type LucideIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Aurora — a luxury travel interface evolving toward AI-guided journey planning.',
}

// Dữ liệu roadmap các version
const ROADMAP = [
  {
    version: 'V1',
    status: 'current', // current | upcoming | future
    title: 'The Foundation',
    description: 'A static platform with curated destinations, search, and filtering.',
    features: [
      'Curated global-ready destinations',
      'Advanced search and filtering',
      'Editorial destination details',
      'Responsive mobile/desktop design',
      'Aurora light luxury visual system',
    ],
    tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS'],
    icon: Rocket,
  },
  {
    version: 'V2',
    status: 'upcoming',
    title: 'AI Integration',
    description: 'AI analyzing preferences to curate personalized itineraries.',
    features: [
      'Travel advisory chatbot',
      'Preference-based recommendations',
      'Automated itinerary creation',
      'Real-time weather API connection',
      'Interactive mapping',
    ],
    tech: ['OpenAI API', 'LangChain', 'Map API'],
    icon: Bot,
  },
  {
    version: 'V3',
    status: 'future',
    title: 'Community & Data',
    description: 'A complete ecosystem with authentic user experiences.',
    features: [
      'Secure authentication',
      'Saved collections and favorites',
      'Editorial reviews and sharing',
      'Real PostgreSQL database',
      'Administrative dashboard',
    ],
    tech: ['PostgreSQL', 'Prisma', 'NextAuth.js'],
    icon: Globe,
  },
]

// Thành viên nhóm (mock)
const TEAM_INFO = {
  name: 'Aurora',
  year: 'Quiet Luxury Travel',
  goal: 'Where silence becomes a destination.',
  stack: 'Next.js · TypeScript · Tailwind CSS · (AI coming soon)',
}

// Component badge status
function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    current:  'bg-green-500/20 text-green-400 border-green-500/30',
    upcoming: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    future:   'bg-slate-500/20 text-slate-400 border-slate-500/30',
  }
  const labels: Record<string, string> = {
    current:  'Current',
    upcoming: 'Upcoming',
    future:   'Future',
  }
  return (
    <span className={`px-2.5 py-1 text-xs font-medium rounded-full border ${styles[status]}`}>
      {labels[status]}
    </span>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen aurora-section-bg">

      {/* === Hero section === */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 aurora-section-bg" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[color:#C8A96A]/15 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-[color:#5F7F78] text-sm font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="h-4 w-4" />
            About Aurora
          </span>
          <h1 className="text-5xl sm:text-6xl font-semibold text-slate-900 mb-6 font-serif tracking-[-0.02em]">
            Welcome to Aurora
          </h1>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed">
            A vision for the future of travel. Aurora blends cinematic aesthetics
            with the quiet power of AI to curate unforgettable global journeys.
          </p>
        </div>
      </section>

      {/* === Thông tin dự án === */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Card: Mục tiêu */}
            <div className="p-6 aurora-surface">
              <h2 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <span className="inline-flex rounded-xl p-2 bg-white/70 border border-white/50">
                  <Target className="h-4 w-4 text-[color:#5F7F78]" />
                </span>
                Our Vision
              </h2>
              <ul className="space-y-3 text-slate-700">
                {[
                  'Curating rare, quiet escapes globally',
                  'Seamless planning through subtle AI integration',
                  'A calm, editorial interface that breathes',
                  'Immersive cinematic visual storytelling',
                  'Frictionless discovery and booking',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[color:#5F7F78] mt-0.5">✓</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card: Thông tin dev */}
            <div className="p-6 aurora-surface">
              <h2 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <span className="inline-flex rounded-xl p-2 bg-white/70 border border-white/50">
                  <User className="h-4 w-4 text-[color:#5F7F78]" />
                </span>
                The Foundation
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Concept</p>
                  <p className="text-slate-900 font-medium">{TEAM_INFO.name} – {TEAM_INFO.year}</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Philosophy</p>
                  <p className="text-slate-700 text-sm">{TEAM_INFO.goal}</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {TEAM_INFO.stack.split(' · ').map((tech) => (
                      <span key={tech} className="px-2.5 py-1 bg-white/70 text-slate-700 border border-white/60 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Roadmap AI === */}
      <section id="roadmap" className="py-16 px-4 aurora-section-bg">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[color:#5F7F78] text-sm font-semibold uppercase tracking-widest mb-3">
              <Globe2 className="h-4 w-4" />
              Growth roadmap
            </span>
            <h2 className="text-4xl font-semibold text-slate-900 mb-4 font-serif tracking-[-0.02em]">
              AI integration roadmap
            </h2>
            <p className="text-slate-600 text-lg max-w-xl mx-auto">
              From a static foundation to an intelligent, AI-guided travel ecosystem.
            </p>
          </div>

          {/* Danh sách version */}
          <div className="space-y-6">
            {ROADMAP.map((item, index) => (
              <div
                key={item.version}
                className={`relative p-6 rounded-2xl border transition-all duration-300 ${
                  item.status === 'current'
                    ? 'bg-white/65 border-white/60 hover:border-[color:#C8A96A]/45'
                    : 'bg-white/55 border-white/50 hover:border-white/70'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  {/* Icon và version */}
                  <div className="flex items-center gap-3 sm:flex-col sm:items-center sm:min-w-[80px] sm:text-center">
                    <span className="inline-flex rounded-2xl p-3 bg-white/70 border border-white/50 shadow-sm">
                      <item.icon className="h-7 w-7 text-[color:#C8A96A]" />
                    </span>
                    <div>
                      <div className="text-[color:#5F7F78] font-bold text-lg">{item.version}</div>
                      <StatusBadge status={item.status} />
                    </div>
                  </div>

                  {/* Nội dung */}
                  <div className="flex-1">
                    <h3 className="text-slate-900 font-semibold text-xl mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm mb-4">{item.description}</p>

                    {/* Danh sách tính năng */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4 mb-4">
                      {item.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-sm">
                          <span className={item.status === 'current' ? 'text-green-400' : 'text-slate-500'}>
                            {item.status === 'current' ? '✅' : '○'}
                          </span>
                          <span className={item.status === 'current' ? 'text-slate-800' : 'text-slate-600'}>
                            {f}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 bg-white/70 text-slate-700 rounded text-xs border border-white/60">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Số thứ tự timeline (ẩn trên mobile) */}
                  <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-white/70 text-slate-600 text-sm font-bold shrink-0 mt-1 border border-white/50">
                    {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA cuối trang === */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4 font-serif tracking-[-0.02em]">
            Begin your next rare escape
          </h2>
          <p className="text-slate-600 mb-8">
            Explore curated destinations and find a journey that matches your rhythm.
          </p>
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[color:#C8A96A] hover:bg-[color:#A87F3F]
                       text-white font-semibold rounded-2xl text-lg
                       transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(168,127,63,0.24)]"
          >
            <Compass className="h-5 w-5" />
            Explore Rare Escapes
          </Link>
        </div>
      </section>
    </div>
  )
}
