// =============================================================
// components/ui/EmptyState.tsx
// Hiển thị khi không tìm thấy kết quả nào sau khi search/filter.
// =============================================================

import { Compass, RotateCcw } from 'lucide-react'

interface EmptyStateProps {
  /** Từ khóa đang tìm (để hiển thị thông báo phù hợp) */
  searchQuery?: string
  /** Hàm reset toàn bộ bộ lọc về mặc định */
  onReset?: () => void
}

export default function EmptyState({ searchQuery, onReset }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-24 sm:py-32 px-6 text-center">
      {/* Visual Anchor */}
      <div className="mb-8 flex items-center justify-center">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-slate-200" />
        <div className="mx-4 p-4 rounded-full bg-white/50 border border-white/40 shadow-sm">
          <Compass className="h-6 w-6 text-[color:#C8A96A]/60" />
        </div>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-slate-200" />
      </div>

      {/* Primary Message */}
      <h3 className="text-slate-900 text-2xl sm:text-3xl font-medium mb-4 font-serif tracking-tight">
        The sanctuary remains hidden
      </h3>

      {/* Supportive Text */}
      <div className="max-w-md mx-auto space-y-4 mb-10">
        <p className="text-slate-500 text-sm sm:text-base leading-[1.8] font-light">
          {searchQuery ? (
            <>
              Your search for <span className="text-slate-800 font-medium italic">&quot;{searchQuery}&quot;</span> did not reveal any matching destinations in our collection.
            </>
          ) : (
            'No destinations currently match the filters you have curated.'
          )}
        </p>
        <p className="text-slate-400 text-xs sm:text-sm font-light tracking-wide italic">
          Try expanding your search to broader regions or alternative travel styles.
        </p>
      </div>

      {/* Actionable CTA */}
      {onReset && (
        <button
          onClick={onReset}
          className="group inline-flex items-center gap-3 px-8 py-3.5
                     bg-white/60 hover:bg-white/80 border border-slate-200/70
                     text-slate-600 hover:text-slate-900 text-sm font-medium
                     rounded-2xl transition-all duration-300 ease-out hover:-translate-y-0.5"
        >
          <RotateCcw className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-rotate-45" />
          <span>Clear all curations</span>
        </button>
      )}
    </div>
  )
}
