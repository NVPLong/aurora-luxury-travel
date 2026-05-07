// =============================================================
// app/layout.tsx
// Root Layout – wrapper bao ngoài TẤT CẢ trang trong app.
// Đây là nơi đặt Navbar, Footer và các thẻ <head> meta chung.
// =============================================================

import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AuroraAssistantButton from '@/components/ai/AuroraAssistantButton'

// Metadata SEO – Next.js tự động tạo thẻ <title> và <meta description>
export const metadata: Metadata = {
  title: {
    default: 'Aurora – Luxury Travel',
    // %s sẽ được thay bằng title của trang con
    template: '%s | Aurora',
  },
  description: 'Curated journeys across rare landscapes, quiet escapes, and unforgettable stays.',
  keywords: ['luxury travel', 'Aurora', 'du lịch cao cấp', 'curated journeys'],
}

// RootLayout nhận children là nội dung của từng trang
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className="flex flex-col min-h-screen bg-[color:#F7F3EC]">
        {/* Navbar cố định trên cùng mọi trang */}
        <Navbar />

        {/* Nội dung trang – pt-16 để không bị Navbar che (navbar cao 64px = h-16) */}
        <main className="flex-1 pt-16">
          {children}
        </main>

        {/* Footer dưới cùng mọi trang */}
        <Footer />

        {/* Floating AI entry point */}
        <AuroraAssistantButton />
      </body>
    </html>
  )
}
