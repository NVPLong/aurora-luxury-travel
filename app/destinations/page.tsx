// =============================================================
// app/destinations/page.tsx  →  Route: /destinations
// Trang danh sách địa điểm với Search + Filter + Sort.
//
// 'use client' vì cần useState để lưu trạng thái bộ lọc.
// Khi user thay đổi filter → state thay đổi → UI re-render.
// =============================================================
'use client'

import { useEffect, useState } from 'react'
import type { FilterState, Region } from '@/types'
import { DEFAULT_FILTER, REGIONS } from '@/constants/filters'
import { destinations } from '@/content/destinations'
import { applyFilters } from '@/lib/utils'
import SearchBar from '@/features/destinations/components/SearchBar'
import FilterPanel from '@/features/destinations/components/FilterPanel'
import DestinationCard from '@/features/destinations/components/DestinationCard'
import EmptyState from '@/features/destinations/components/EmptyState'
import { Compass } from 'lucide-react'

export default function DestinationsPage() {
  // ----------------------------------------------------------------
  // STATE – trái tim của trang này
  // filters lưu toàn bộ trạng thái: search, region, category, budget, sort
  // Khi filters thay đổi → React tự động render lại danh sách
  // ----------------------------------------------------------------
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTER)

  useEffect(() => {
    // Dong bo query tu Home/footer vao state filter sau khi trang destinations mount.
    const params = new URLSearchParams(window.location.search)
    const searchQuery = params.get('search')
    const regionQuery = params.get('region')

    if (searchQuery || regionQuery) {
      setFilters((prev) => ({
        ...prev,
        search: searchQuery ?? prev.search,
        region: REGIONS.includes(regionQuery as Region)
          ? (regionQuery as Region)
          : prev.region,
      }))
    }
  }, [])

  // ----------------------------------------------------------------
  // Hàm cập nhật filter – nhận vào object chứa các field cần thay đổi
  // Dùng Partial<FilterState> để không cần truyền toàn bộ filter
  //
  // Ví dụ: handleFilterChange({ region: 'Bắc' })
  //   → chỉ cập nhật region, giữ nguyên search, category, budget, sort
  // ----------------------------------------------------------------
  const handleFilterChange = (updates: Partial<FilterState>) => {
    // Spread operator (...): sao chép filter cũ, ghi đè các field mới
    setFilters((prev) => ({ ...prev, ...updates }))
  }

  // Hàm reset về mặc định (dùng cho EmptyState)
  const handleReset = () => setFilters(DEFAULT_FILTER)

  // ----------------------------------------------------------------
  // Tính toán kết quả – chạy mỗi khi filters thay đổi
  // applyFilters: lọc → tìm kiếm → sắp xếp
  // ----------------------------------------------------------------
  const filteredDestinations = applyFilters(destinations, filters)

  // Kiểm tra có đang lọc không (để quyết định hiển thị nút reset)
  const isFiltering =
    filters.search !== '' ||
    filters.region !== '' ||
    filters.category !== '' ||
    filters.budget !== ''

  return (
    <div className="min-h-screen aurora-section-bg">

      {/* === Header section === */}
      <section className="py-16 px-4 aurora-section-bg">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-[color:#5F7F78] text-sm font-semibold uppercase tracking-widest mb-3">
            <Compass className="h-4 w-4" />
            Global Destinations
          </span>
          <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900 mb-4 font-serif tracking-[-0.02em]">
            Explore Rare Escapes
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            {destinations.length} curated destinations are ready for your next quiet journey.
          </p>
        </div>
      </section>

      {/* === Body: Layout 2 cột === */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          {/*
            Layout responsive:
            - Mobile: 1 cột (filter ở trên, grid ở dưới)
            - Desktop (lg+): 2 cột (filter sidebar 280px | grid bên phải)
          */}
          <div className="flex flex-col lg:flex-row gap-8">

            {/* === Sidebar: SearchBar + FilterPanel === */}
            <aside className="w-full lg:w-72 shrink-0 space-y-4">
              <FilterPanel filters={filters} onFilterChange={handleFilterChange} />
            </aside>

            {/* === Main content: SearchBar + Grid kết quả === */}
            <div className="flex-1 min-w-0">
              {/* SearchBar ở trên grid */}
              <div className="mb-6">
                <SearchBar
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  resultCount={filteredDestinations.length}
                />
              </div>

              {/* Kết quả tìm kiếm */}
              {filteredDestinations.length > 0 ? (
                /*
                  Grid responsive:
                  - Mobile: 1 cột
                  - Tablet (md): 2 cột
                  - Desktop lớn (xl): 3 cột
                */
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredDestinations.map((destination) => (
                    <DestinationCard key={destination.id} destination={destination} />
                  ))}
                </div>
              ) : (
                /* Empty state khi không có kết quả */
                <EmptyState
                  searchQuery={filters.search}
                  onReset={isFiltering ? handleReset : undefined}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
