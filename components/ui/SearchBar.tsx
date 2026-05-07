// =============================================================
// components/ui/SearchBar.tsx
// Thanh tìm kiếm + dropdown sắp xếp.
// 'use client' vì xử lý sự kiện input từ user.
// =============================================================
'use client'

import { Search, X } from 'lucide-react'
import { SORT_OPTIONS } from '@/constants/filters'
import type { FilterState } from '@/types'

interface SearchBarProps {
  /** Giá trị hiện tại của bộ lọc */
  filters: FilterState
  /** Hàm cập nhật bộ lọc – nhận vào các field muốn thay đổi */
  onFilterChange: (updates: Partial<FilterState>) => void
  /** Số kết quả tìm được (để hiển thị) */
  resultCount: number
}

export default function SearchBar({ filters, onFilterChange, resultCount }: SearchBarProps) {
  return (
    <div className="space-y-4">
      {/* === Hàng 1: Ô tìm kiếm === */}
      <div className="relative group">
        {/* Icon kính lúp */}
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search className="w-4 h-4 text-slate-400 group-focus-within:text-[color:#C8A96A] transition-colors duration-300" />
        </div>

        {/* Input tìm kiếm */}
        <input
          id="search-input"
          type="text"
          value={filters.search}
          onChange={(e) => onFilterChange({ search: e.target.value })}
          placeholder="Find your next sanctuary..."
          className="w-full pl-11 pr-11 py-4 aurora-surface-subtle text-slate-900 placeholder:text-slate-400/80
                     rounded-2xl text-sm font-light tracking-wide
                     focus:outline-none focus:ring-2 focus:ring-[color:#C8A96A]/20
                     transition-all duration-300 ease-out"
        />

        {/* Nút xóa – chỉ hiện khi đang có text */}
        {filters.search && (
          <button
            onClick={() => onFilterChange({ search: '' })}
            className="absolute inset-y-0 right-4 flex items-center text-slate-400 hover:text-slate-900 transition-colors"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* === Hàng 2: Thống kê kết quả + Sort === */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-1">
        {/* Số kết quả */}
        <p className="text-slate-500 text-[0.8rem] uppercase tracking-[0.1em] font-medium">
          Showing <span className="text-slate-900">{resultCount}</span> curated destinations
        </p>

        {/* Dropdown sắp xếp */}
        <div className="flex items-center gap-3">
          <label htmlFor="sort-select" className="text-slate-500 text-xs uppercase tracking-wider whitespace-nowrap">
            Sort by
          </label>
          <div className="relative">
            <select
              id="sort-select"
              value={filters.sort}
              onChange={(e) => onFilterChange({ sort: e.target.value as FilterState['sort'] })}
              className="appearance-none bg-white/50 border border-slate-200/60 text-slate-900 text-xs rounded-xl
                         pl-3 pr-8 py-2 focus:outline-none focus:ring-2 focus:ring-[color:#C8A96A]/20
                         cursor-pointer transition-all duration-300 ease-out hover:bg-white/80"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {/* Custom arrow for select */}
            <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
              <svg className="h-3 w-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
