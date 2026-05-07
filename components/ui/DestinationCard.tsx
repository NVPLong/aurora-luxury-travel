// =============================================================
// components/ui/DestinationCard.tsx
// Card hiển thị thông tin tóm tắt của một địa điểm du lịch.
// Dùng trên trang chủ và trang danh sách.
// =============================================================

import Image from 'next/image'
import Link from 'next/link'
import type { Destination } from '@/types'
import { BUDGET_COLORS } from '@/constants/filters'
import { formatReviewCount, getRatingColor } from '@/lib/utils'
import { MapPin, Compass, Clock3 } from 'lucide-react'

// Props là kiểu dữ liệu mà component này nhận vào
interface DestinationCardProps {
  destination: Destination
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  const {
    id, name, location, category, budget,
    rating, reviewCount, image, description, region,
  } = destination

  return (
    // Link bao ngoài toàn bộ card – click vào đâu cũng chuyển trang
    <Link
      href={`/destinations/${id}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-sm
                 transition-all duration-500 ease-out
                 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(31,41,51,0.08)]
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:#C8A96A] focus-visible:ring-offset-2"
    >
      {/* === Phần ảnh === */}
      <div className="relative aspect-video overflow-hidden bg-slate-100">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

        {/* Gradient overlay để chữ/badge luôn dễ đọc trên ảnh (UI bền vững khi ảnh sáng/tối khác nhau) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,20,25,0.55)] via-[rgba(10,20,25,0.25)] to-transparent
                        transition-all duration-500 group-hover:from-[rgba(10,20,25,0.65)]" />

        {/* Badge miền (Bắc/Trung/Nam) – góc trên trái */}
        <div className="absolute top-3 left-3 transition-transform duration-500 group-hover:translate-x-0.5">
            <span className="inline-flex items-center rounded-full bg-[color:#C8A96A]/10 px-2.5 py-1 text-xs font-light text-[color:#C8A96A] backdrop-blur-sm">
              {region}
            </span>
          </div>

        {/* Badge ngân sách – góc trên phải */}
        <div className="absolute top-3 right-3 transition-transform duration-500 group-hover:-translate-x-0.5">
            <span className={`px-2 py-1 text-xs font-light rounded-full border border-[color:#C8A96A]/30 bg-[color:#C8A96A]/10 text-[color:#C8A96A] backdrop-blur-sm`}
            >{budget}</span>
          </div>

        {/* Rating – góc dưới trái, trên ảnh */}
        <div className="absolute bottom-3 left-3 transition-transform duration-500 group-hover:translate-y-[-2px]">
            <div className="inline-flex items-center gap-1 rounded-full bg-[color:#C8A96A]/15 px-2.5 py-1 backdrop-blur-sm">
              <span className={`text-sm font-medium ${getRatingColor(rating)}`}>
                ★ {rating}
              </span>
              <span className="text-xs text-white/80">
                {formatReviewCount(reviewCount)}
              </span>
            </div>
          </div>
      </div>

      {/* === Phần nội dung === */}
      <div className="p-6">
        {/* Badge loại hình */}
        <div className="mb-3 flex items-center gap-2">
            <span className="inline-flex rounded-xl p-2 bg-white/80 border border-white/40 shadow-sm transition-colors duration-500 group-hover:border-[color:#5F7F78]/20" aria-hidden="true">
              <Compass className="h-4 w-4 text-[color:#5F7F78]" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-[color:#5F7F78]">
              {category}
            </span>
          </div>

        {/* Tên địa điểm */}
        <h3 className="text-xl font-sans font-semibold leading-snug text-slate-900 group-hover:text-[color:#5F7F78] transition-colors duration-500">
            {name}
          </h3>

        {/* Địa chỉ */}
        <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-600">
            <MapPin className="h-4 w-4 text-slate-500" aria-hidden="true" />
            <span className="truncate">{location}</span>
          </p>

        {/* Mô tả ngắn */}
        <p className="mt-4 text-sm leading-relaxed text-slate-600 line-clamp-2 font-light">
            {description}
          </p>

        {/* Footer card: thời gian khuyến nghị + link */}
        <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
            <span className="text-xs text-slate-500 inline-flex items-center gap-1.5">
              <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
              {destination.duration}
            </span>
            <span className="text-sm font-medium text-[color:#5F7F78] transition-colors duration-500 group-hover:text-[color:#C8A96A]">
              Explore →
            </span>
          </div>
      </div>
    </Link>
  )
}
