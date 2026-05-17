// =============================================================
// types/index.ts
// Định nghĩa các kiểu dữ liệu dùng trong toàn bộ project.
// TypeScript giúp ta phát hiện lỗi sớm ngay khi viết code.
// =============================================================

// ----------------------------------------------------------------
// Union Types – giới hạn giá trị chỉ được là một trong các lựa chọn
// Ví dụ: region chỉ được là "Bắc" | "Trung" | "Nam"
// ----------------------------------------------------------------

/** Miền địa lý của địa điểm */
export type Region = 'North' | 'Central' | 'South'

/** Loại hình du lịch */
export type Category =
  | 'Seaside'
  | 'Mountain'
  | 'Heritage'
  | 'Historical'
  | 'Nature'
  | 'Island'

/** Mức ngân sách ước tính cho chuyến đi */
export type Budget = 'Value' | 'Mid-range' | 'Luxury'

/** Tiêu chí sắp xếp danh sách */
export type SortOption = 'rating' | 'name-asc' | 'name-desc'

// ----------------------------------------------------------------
// Interface – định nghĩa "hình dạng" của một object
// Tất cả địa điểm trong mock data phải khớp với interface này
// ----------------------------------------------------------------

/** Thông tin một địa điểm du lịch */
export interface Destination {
  id: string              // ID duy nhất, dùng trong URL (VD: "ha-long-bay")
  name: string            // Tên địa điểm (VD: "Vịnh Hạ Long")
  location: string        // Tỉnh/thành phố (VD: "Quảng Ninh")
  region: Region          // Miền: "Bắc" | "Trung" | "Nam"
  category: Category      // Loại: "Biển" | "Núi" | ...
  budget: Budget          // Ngân sách: "Thấp" | "Trung bình" | "Cao"
  rating: number          // Điểm đánh giá từ 1.0 đến 5.0
  reviewCount: number     // Số lượt đánh giá
  image: string           // URL anh chinh cua dia diem
  imageAlt?: string       // Mo ta anh dung cho accessibility va SEO
  description: string     // Mô tả ngắn (1-2 câu, hiển thị trên card)
  longDescription: string // Mô tả chi tiết (hiển thị trang chi tiết)
  highlights: string[]    // Danh sách điểm nổi bật
  bestTime: string        // Thời điểm tốt nhất để đến (VD: "Tháng 10 - 4")
  duration: string        // Thời gian khuyến nghị (VD: "3-5 ngày")
  featured: boolean       // true = hiển thị trên trang chủ
  signatureMoments?: {    // [NEW] Khoảnh khắc đặc trưng – trải nghiệm cảm xúc
    title: string
    description: string
    image?: string        // [NEW] Ảnh không gian/cảm xúc cho khoảnh khắc
  }[]
  journeyRhythm?: {       // [NEW] Nhịp điệu hành trình – trải nghiệm theo thời gian
    time: 'Morning' | 'Afternoon' | 'Golden Hour' | 'Evening'
    title: string
    description: string
    activity: string
    image?: string
  }[]
  gallery?: {
    title: string
    caption: string
    image: string
    imageAlt?: string
  }[]
  sampleItinerary?: {
    day: string
    title: string
    description: string
    stops: string[]
  }[]
  travelNotes?: {
    label: string
    value: string
  }[]
  mapNote?: {
    title: string
    description: string
  }
  atmosphere?: string     // [NEW] Không khí/Cảm xúc chủ đạo (VD: "Tĩnh lặng, Huyền bí")
}

// ----------------------------------------------------------------
// FilterState – trạng thái của bộ lọc trên trang /destinations
// ----------------------------------------------------------------

/** Toàn bộ trạng thái bộ lọc + tìm kiếm */
export interface FilterState {
  search: string          // Từ khóa tìm kiếm
  region: Region | ''     // Lọc theo miền ('' = tất cả)
  category: Category | '' // Lọc theo loại ('' = tất cả)
  budget: Budget | ''     // Lọc theo ngân sách ('' = tất cả)
  sort: SortOption        // Tiêu chí sắp xếp
}
