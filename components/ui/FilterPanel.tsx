// =============================================================
// components/ui/FilterPanel.tsx
// Bộ lọc địa điểm theo Miền / Loại hình / Ngân sách.
// 'use client' vì xử lý tương tác bấm nút của user.
// =============================================================
'use client'

import { REGIONS, CATEGORIES, BUDGETS } from '@/constants/filters'
import type { FilterState, Region, Category, Budget } from '@/types'

interface FilterPanelProps {
  filters: FilterState
  onFilterChange: (updates: Partial<FilterState>) => void
}

export default function FilterPanel({ filters, onFilterChange }: FilterPanelProps) {
  // Đếm số filter đang bật (không tính search và sort)
  const activeFilterCount = [filters.region, filters.category, filters.budget]
    .filter(Boolean).length

  // Hàm reset tất cả filter về mặc định
  const handleResetAll = () => {
    onFilterChange({ region: '', category: '', budget: '' })
  }

  return (
    <div className="aurora-surface-subtle p-6 space-y-8">
      {/* Header với nút reset */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-slate-900 text-xs uppercase tracking-[0.25em] font-semibold">Filters</h2>
          {/* Badge số filter đang bật */}
          {activeFilterCount > 0 && (
            <span className="bg-[color:#C8A96A]/10 text-[color:#C8A96A] text-[0.65rem] font-bold px-2 py-0.5 rounded-full border border-[color:#C8A96A]/20">
              {activeFilterCount}
            </span>
          )}
        </div>

        {/* Nút reset – chỉ hiện khi có filter đang bật */}
        {activeFilterCount > 0 && (
          <button
            onClick={handleResetAll}
            className="text-slate-400 hover:text-[color:#C8A96A] text-[0.7rem] uppercase tracking-wider font-medium transition-colors duration-300"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="space-y-7">
        {/* Nhóm 1: Lọc theo Miền */}
        <FilterGroup<Region>
          label="Region"
          options={REGIONS}
          selected={filters.region}
          onSelect={(v: Region | '') => onFilterChange({ region: v })}
        />

        {/* Nhóm 2: Lọc theo Loại hình */}
        <FilterGroup<Category>
          label="Travel Style"
          options={CATEGORIES}
          selected={filters.category}
          onSelect={(v: Category | '') => onFilterChange({ category: v })}
        />

        {/* Nhóm 3: Lọc theo Ngân sách */}
        <FilterGroup<Budget>
          label="Budget"
          options={BUDGETS}
          selected={filters.budget}
          onSelect={(v: Budget | '') => onFilterChange({ budget: v })}
        />
      </div>
    </div>
  )
}

interface FilterGroupProps<T extends string> {
  label: string
  options: readonly T[]
  selected: string
  onSelect: (value: T | '') => void
  renderOption?: (option: T) => React.ReactNode
}

// Internal FilterGroup component refined
function FilterGroup<T extends string>({
  label, options, selected, onSelect, renderOption
}: FilterGroupProps<T>) {
  return (
    <div className="space-y-3">
      {/* Tên nhóm filter */}
      <h3 className="text-slate-400 text-[0.65rem] font-medium uppercase tracking-[0.2em]">
        {label}
      </h3>

      {/* Danh sách nút filter – dạng pill/chip */}
      <div className="flex flex-wrap gap-2">
        {/* Nút "All" */}
        <button
          onClick={() => onSelect('')}
          className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-300 ease-out border ${
            selected === ''
              ? 'text-[color:#C8A96A] border-[color:#C8A96A]/30 bg-[color:#C8A96A]/5'
              : 'text-slate-500 border-transparent hover:text-slate-900'
          }`}
        >
          All
        </button>

        {/* Render từng option */}
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onSelect(selected === (option as string) ? '' : option)}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-300 ease-out border ${
              selected === option
                ? 'text-[color:#C8A96A] border-[color:#C8A96A]/30 bg-[color:#C8A96A]/5'
                : 'text-slate-500 border-transparent hover:text-slate-900 hover:bg-slate-50/50'
            }`}
          >
            {renderOption ? renderOption(option) : option}
          </button>
        ))}
      </div>
    </div>
  )
}
