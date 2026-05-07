// =============================================================
// constants/filters.ts
// Chứa các hằng số dùng cho bộ lọc và sắp xếp.
// Tách ra file riêng để dễ bảo trì – nếu muốn thêm loại mới,
// chỉ cần sửa ở đây, không cần sửa nhiều nơi khác.
// =============================================================

import type { Region, Category, Budget, SortOption } from '@/types'

// ----------------------------------------------------------------
// Các tùy chọn miền – dùng trong FilterPanel
// ----------------------------------------------------------------

/** Danh sách miền địa lý để lọc */
export const REGIONS: Region[] = ['Bắc', 'Trung', 'Nam']

// ----------------------------------------------------------------
// Các tùy chọn loại hình – dùng trong FilterPanel
// ----------------------------------------------------------------

/** Danh sách loại hình du lịch để lọc */
export const CATEGORIES: Category[] = [
  'Biển',
  'Núi',
  'Phố cổ',
  'Di tích',
  'Thiên nhiên',
  'Đảo',
]

// ----------------------------------------------------------------
// Các tùy chọn ngân sách – dùng trong FilterPanel
// ----------------------------------------------------------------

/** Danh sách mức ngân sách để lọc */
export const BUDGETS: Budget[] = ['Thấp', 'Trung bình', 'Cao']

// ----------------------------------------------------------------
// Các tùy chọn sắp xếp – dùng trong SearchBar/FilterPanel
// Mỗi option có value (dùng trong code) và label (hiển thị cho user)
// ----------------------------------------------------------------

export const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'rating',    label: 'Highest Rated' },
  { value: 'name-asc',  label: 'Name (A → Z)' },
  { value: 'name-desc', label: 'Name (Z → A)' },
]

// ----------------------------------------------------------------
// Giá trị mặc định của bộ lọc khi mới vào trang
// ----------------------------------------------------------------

import type { FilterState } from '@/types'

/** Bộ lọc mặc định – không lọc gì, sắp theo rating */
export const DEFAULT_FILTER: FilterState = {
  search:   '',
  region:   '',
  category: '',
  budget:   '',
  sort:     'rating',
}

// ----------------------------------------------------------------
// Icon/emoji cho từng category – dùng để hiển thị badge
// ----------------------------------------------------------------

/** Map loại hình → emoji đại diện */
export const CATEGORY_ICONS: Record<Category, string> = {
  'Biển':      '🏖️',
  'Núi':       '⛰️',
  'Phố cổ':   '🏛️',
  'Di tích':  '🗿',
  'Thiên nhiên': '🌿',
  'Đảo':       '🏝️',
}

/** Map ngân sách → màu badge (Tailwind class) */
export const BUDGET_COLORS: Record<Budget, string> = {
  'Thấp':       'bg-green-500/20 text-green-400 border-green-500/30',
  'Trung bình': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  'Cao':        'bg-red-500/20 text-red-400 border-red-500/30',
}
