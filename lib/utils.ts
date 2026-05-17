// =============================================================
// lib/utils.ts
// Các hàm tiện ích (utility functions) dùng trong toàn project.
// Tách ra file riêng để tái sử dụng và dễ test.
// =============================================================

import type { Destination, FilterState, SortOption } from '@/types'

// ----------------------------------------------------------------
// 1. SEARCH – Tìm kiếm theo từ khóa
// ----------------------------------------------------------------

/**
 * Kiểm tra một địa điểm có khớp với từ khóa tìm kiếm không.
 *
 * Cách hoạt động:
 * - Chuyển từ khóa và dữ liệu về chữ thường (để tìm không phân biệt hoa/thường)
 * - Tìm trong: tên địa điểm, tỉnh/thành, loại hình
 *
 * @param destination - Địa điểm cần kiểm tra
 * @param query - Từ khóa tìm kiếm
 * @returns true nếu khớp, false nếu không
 */
export function matchesSearch(destination: Destination, query: string): boolean {
  // Nếu không có từ khóa → tất cả đều khớp
  if (!query.trim()) return true

  // Chuẩn hóa: bỏ dấu cách thừa, chuyển về chữ thường
  const q = query.trim().toLowerCase()

  // Kiểm tra từng trường
  return (
    destination.name.toLowerCase().includes(q) ||
    destination.location.toLowerCase().includes(q) ||
    destination.category.toLowerCase().includes(q) ||
    destination.region.toLowerCase().includes(q)
  )
}

// ----------------------------------------------------------------
// 2. FILTER – Lọc theo tiêu chí
// ----------------------------------------------------------------

/**
 * Kiểm tra một địa điểm có khớp với tất cả bộ lọc không.
 *
 * Logic: Dùng AND – địa điểm phải thỏa TẤT CẢ điều kiện đang bật.
 * Nếu một filter để trống ('') → bỏ qua điều kiện đó.
 *
 * @param destination - Địa điểm cần kiểm tra
 * @param filters - Trạng thái bộ lọc hiện tại
 * @returns true nếu địa điểm thỏa mãn bộ lọc
 */
export function matchesFilters(
  destination: Destination,
  filters: Pick<FilterState, 'region' | 'category' | 'budget'>
): boolean {
  // Lọc theo miền (nếu có chọn miền)
  if (filters.region && destination.region !== filters.region) return false

  // Lọc theo loại hình (nếu có chọn loại)
  if (filters.category && destination.category !== filters.category) return false

  // Lọc theo ngân sách (nếu có chọn ngân sách)
  if (filters.budget && destination.budget !== filters.budget) return false

  // Thỏa tất cả điều kiện
  return true
}

// ----------------------------------------------------------------
// 3. SORT – Sắp xếp danh sách
// ----------------------------------------------------------------

/**
 * Sắp xếp danh sách địa điểm theo tiêu chí được chọn.
 *
 * Dùng Array.sort() với comparator function.
 * Lưu ý: [...arr] tạo bản sao để không thay đổi mảng gốc (immutable).
 *
 * @param destinations - Danh sách địa điểm cần sắp xếp
 * @param sort - Tiêu chí sắp xếp
 * @returns Mảng mới đã được sắp xếp
 */
export function sortDestinations(
  destinations: Destination[],
  sort: SortOption
): Destination[] {
  // Tạo bản sao để không thay đổi mảng gốc
  return [...destinations].sort((a, b) => {
    switch (sort) {
      // Sort by rating descending (highest first)
      case 'rating':
        return b.rating - a.rating

      // Sort by name A→Z
      case 'name-asc':
        return a.name.localeCompare(b.name, 'en')

      // Sort by name Z→A
      case 'name-desc':
        return b.name.localeCompare(a.name, 'en')

      // Default: preserve order
      default:
        return 0
    }
  })
}

// ----------------------------------------------------------------
// 4. FILTER + SEARCH + SORT kết hợp – Hàm chính
// ----------------------------------------------------------------

/**
 * Lọc, tìm kiếm và sắp xếp danh sách địa điểm dựa trên FilterState.
 *
 * Đây là hàm chính được gọi khi user thay đổi bất kỳ filter nào.
 * Thứ tự xử lý: Lọc → Tìm kiếm → Sắp xếp
 *
 * @param destinations - Toàn bộ danh sách địa điểm
 * @param filters - Trạng thái bộ lọc hiện tại (search + filters + sort)
 * @returns Danh sách địa điểm đã được xử lý
 */
export function applyFilters(
  destinations: Destination[],
  filters: FilterState
): Destination[] {
  // Bước 1: Lọc
  const filtered = destinations.filter((d) => matchesFilters(d, filters))

  // Bước 2: Tìm kiếm
  const searched = filtered.filter((d) => matchesSearch(d, filters.search))

  // Bước 3: Sắp xếp
  return sortDestinations(searched, filters.sort)
}

// ----------------------------------------------------------------
// 5. FORMAT – Định dạng số liệu để hiển thị
// ----------------------------------------------------------------

/**
 * Định dạng số lượt đánh giá: 12480 → "12.5k"
 *
 * @param count - Số lượt đánh giá
 * @returns Chuỗi đã định dạng
 */
export function formatReviewCount(count: number): string {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`
  }
  return count.toString()
}

/**
 * Render dấu sao ⭐ dựa trên rating.
 * Rating 4.7 → "★★★★★" (làm tròn)
 *
 * @param rating - Điểm rating từ 1–5
 * @returns Chuỗi dấu sao
 */
export function renderStars(rating: number): string {
  const fullStars = Math.round(rating)
  return '★'.repeat(fullStars) + '☆'.repeat(5 - fullStars)
}

/**
 * Tạo class màu Tailwind cho rating badge
 * 4.5+ → xanh lá | 3.5–4.4 → vàng | <3.5 → đỏ
 *
 * @param rating - Điểm rating
 * @returns Tailwind class string
 */
export function getRatingColor(rating: number): string {
  if (rating >= 4.5) return 'text-green-400'
  if (rating >= 3.5) return 'text-yellow-400'
  return 'text-red-400'
}
