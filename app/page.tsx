// =============================================================
// app/page.tsx  →  Route: /  (Trang chủ)
// Server Component – render phía server, tốt cho SEO.
// Ghép các section components lại thành trang hoàn chỉnh.
// =============================================================

import type { Metadata } from 'next'
import HeroSection from '@/components/ui/HeroSection'
import FeaturedDestinations from '@/components/home/FeaturedDestinations'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import StatsSection from '@/components/home/StatsSection'

// SEO metadata riêng cho trang chủ
export const metadata: Metadata = {
  title: 'Aurora – Luxury Travel',
  description: 'Curated journeys across rare landscapes, quiet escapes, and unforgettable stays.',
}

export default function HomePage() {
  return (
    <>
      {/* 1. Banner hero lớn */}
      <HeroSection />

      {/* 2. Địa điểm nổi bật */}
      <FeaturedDestinations />

      {/* 3. Thống kê ấn tượng */}
      <StatsSection />

      {/* 4. Lý do chọn Aurora */}
      <WhyChooseUs />
    </>
  )
}
