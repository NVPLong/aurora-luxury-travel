// =============================================================
// components/home/StatsSection.tsx
// Section hiển thị các con số thống kê ấn tượng.
// Thêm điểm nhấn trực quan giữa các section khác.
// =============================================================
import { Compass, Mountain, Plane, ShieldCheck, type LucideIcon } from 'lucide-react'
import SectionReveal from '@/components/motion/SectionReveal'

// Dữ liệu thống kê
const STATS = [
  { value: '10', unit: '+', label: 'Destinations', icon: Compass },
  { value: '3', unit: '', label: 'Collections', icon: Mountain },
  { value: '6', unit: '', label: 'Journey styles', icon: Plane },
  { value: '100', unit: '%', label: 'Curated confidence', icon: ShieldCheck },
]

export default function StatsSection() {
  return (
    <section className="py-32 lg:py-40 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionReveal staggerChildren className="aurora-surface p-10 lg:p-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-14">
            {STATS.map((stat: { value: string; unit: string; label: string; icon: LucideIcon }) => (
              <div key={stat.label} className="text-center group">
                {/* Icon */}
                <div className="mb-5 inline-flex rounded-full p-4 bg-white/70 border border-white/50 shadow-sm transition-transform duration-500 group-hover:scale-110">
                  <stat.icon className="h-6 w-6 text-[color:#C8A96A]" />
                </div>

                {/* Số liệu lớn */}
                <div className="text-4xl sm:text-5xl font-medium text-slate-900 font-serif tracking-tight">
                  {stat.value}
                  <span className="text-2xl text-slate-400 font-sans font-light ml-0.5">{stat.unit}</span>
                </div>

                {/* Label */}
                <div className="text-slate-500 text-[0.7rem] uppercase tracking-[0.2em] mt-3 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
