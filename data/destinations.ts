// =============================================================
// data/destinations.ts
// Mock data – dữ liệu giả lập cho 10 địa điểm du lịch Việt Nam.
// Ở Version 2+, dữ liệu này sẽ được thay bằng API/database.
// =============================================================

import type { Destination } from '@/types'

/**
 * Danh sách 10 địa điểm du lịch nổi tiếng của Việt Nam.
 * Dữ liệu được nhóm theo miền: Bắc (4) | Trung (3) | Nam (3)
 */
export const destinations: Destination[] = [
  // ============================================================
  // MIỀN BẮC
  // ============================================================
  {
    id: 'vinh-ha-long',
    name: 'Vịnh Hạ Long',
    location: 'Quảng Ninh',
    region: 'Bắc',
    category: 'Biển',
    budget: 'Trung bình',
    rating: 4.9,
    reviewCount: 12480,
    image: 'https://images.unsplash.com/photo-1761127138372-cad230082b19?auto=format&fit=crop&w=1400&q=80&ixlib=rb-4.1.0',
    description: 'Di sản thiên nhiên thế giới với hàng nghìn hòn đảo đá vôi hùng vĩ, mặt biển xanh ngọc bích.',
    longDescription: `Vịnh Hạ Long là một trong những kỳ quan thiên nhiên đẹp nhất thế giới, được UNESCO công nhận là Di sản Thiên nhiên Thế giới năm 1994. Với hơn 1.600 hòn đảo đá vôi lớn nhỏ nổi lên từ mặt nước xanh ngọc, Hạ Long tạo nên khung cảnh huyền ảo như tranh vẽ.

Du khách có thể tham gia các tour du thuyền qua đêm, khám phá hang động kỳ vĩ như hang Thiên Cung, hang Đầu Gỗ, hoặc tham gia chèo kayak quanh các đảo nhỏ. Làng chài Cửa Vạn là nơi tuyệt vời để trải nghiệm cuộc sống ngư dân trên biển.`,
    highlights: [
      'Hơn 1.600 hòn đảo đá vôi hùng vĩ',
      'Du thuyền qua đêm trên vịnh',
      'Khám phá hang động thiên nhiên',
      'Chèo kayak qua các đảo nhỏ',
      'Làng chài Cửa Vạn độc đáo',
    ],
    bestTime: 'Tháng 10 – 4 (tránh mùa mưa bão)',
    duration: '2–3 ngày',
    featured: true,
  },

  {
    id: 'sapa',
    name: 'Sa Pa',
    location: 'Lào Cai',
    region: 'Bắc',
    category: 'Núi',
    budget: 'Thấp',
    rating: 4.8,
    reviewCount: 9320,
    image: 'https://images.unsplash.com/photo-1753003491860-89b500bc62f3?auto=format&fit=crop&w=1400&q=80&ixlib=rb-4.1.0',
    description: 'Thị trấn sương mù lãng mạn với những thửa ruộng bậc thang tuyệt đẹp và văn hóa dân tộc phong phú.',
    longDescription: `Sa Pa là thị trấn miền núi nằm ở độ cao 1.500m so với mặt biển, thuộc tỉnh Lào Cai, cách Hà Nội khoảng 350km về phía Tây Bắc. Nơi đây nổi tiếng với những thửa ruộng bậc thang xanh mướt trải dài theo sườn núi — một trong những cảnh quan đẹp nhất Đông Nam Á.

Sa Pa còn là nơi sinh sống của nhiều dân tộc thiểu số như H'Mông, Dao Đỏ, Tày, Giáy với trang phục và phong tục tập quán độc đáo. Đây cũng là điểm xuất phát để chinh phục đỉnh Fansipan — "nóc nhà Đông Dương" cao 3.147m.`,
    highlights: [
      'Ruộng bậc thang Mù Cang Chải, Tả Van',
      'Chinh phục đỉnh Fansipan 3.147m',
      'Chợ phiên dân tộc độc đáo',
      'Trekking qua các bản làng',
      'Cầu kính Rồng Mây ấn tượng',
    ],
    bestTime: 'Tháng 9 – 11 (mùa lúa chín) hoặc 12 – 2 (tuyết rơi)',
    duration: '3–4 ngày',
    featured: true,
  },

  {
    id: 'ha-noi',
    name: 'Hà Nội',
    location: 'Hà Nội',
    region: 'Bắc',
    category: 'Phố cổ',
    budget: 'Trung bình',
    rating: 4.7,
    reviewCount: 15600,
    image: 'https://images.unsplash.com/photo-1768059279306-98b49f47be92?auto=format&fit=crop&w=1400&q=80&ixlib=rb-4.1.0',
    description: 'Thủ đô nghìn năm văn hiến với 36 phố phường cổ kính, hồ Hoàn Kiếm và ẩm thực phong phú.',
    longDescription: `Hà Nội — thủ đô hơn 1.000 năm tuổi của Việt Nam — là sự hòa quyện độc đáo giữa truyền thống và hiện đại. Khu phố cổ 36 phố phường vẫn giữ được nét xưa với những ngôi nhà mái ngói, các cửa hàng thủ công truyền thống và văn hóa ẩm thực đường phố sôi động.

Hồ Hoàn Kiếm và Tháp Rùa là biểu tượng của thành phố, gắn liền với truyền thuyết Vua Lê trả gươm thần. Văn Miếu – Quốc Tử Giám, Hoàng thành Thăng Long là những di tích lịch sử không thể bỏ qua.`,
    highlights: [
      'Phố cổ 36 phố phường lịch sử',
      'Hồ Hoàn Kiếm và Tháp Rùa',
      'Văn Miếu – Quốc Tử Giám',
      'Ẩm thực: Phở, Bún chả, Bánh cuốn',
      'Múa rối nước truyền thống',
    ],
    bestTime: 'Tháng 9 – 11 và 3 – 4',
    duration: '3–4 ngày',
    featured: false,
  },

  {
    id: 'ninh-binh',
    name: 'Ninh Bình',
    location: 'Ninh Bình',
    region: 'Bắc',
    category: 'Thiên nhiên',
    budget: 'Thấp',
    rating: 4.6,
    reviewCount: 7840,
    image: 'https://images.unsplash.com/photo-1768245074264-f439d94ea8c9?auto=format&fit=crop&w=1400&q=80&ixlib=rb-4.1.0',
    description: 'Vịnh Hạ Long trên cạn với núi đá vôi hùng vĩ, sông nước thơ mộng và cố đô Hoa Lư.',
    longDescription: `Ninh Bình được mệnh danh là "Vịnh Hạ Long trên cạn" nhờ địa hình núi đá vôi độc đáo nằm giữa đồng bằng. Tràng An — quần thể danh thắng được UNESCO công nhận năm 2014 — là điểm nhấn với những hang động kỳ bí và mặt hồ phẳng lặng.

Bái Đính là ngôi chùa lớn nhất Đông Nam Á với hàng trăm pho tượng Phật, thu hút hàng triệu khách hành hương mỗi năm. Cố đô Hoa Lư — kinh đô đầu tiên của Việt Nam thống nhất — là điểm tham quan lịch sử quan trọng.`,
    highlights: [
      'Chèo thuyền qua hang động Tràng An',
      'Chùa Bái Đính lớn nhất Đông Nam Á',
      'Cố đô Hoa Lư lịch sử',
      'Tam Cốc – Bích Động thơ mộng',
      'Đạp xe qua đồng lúa xanh mướt',
    ],
    bestTime: 'Tháng 10 – 4',
    duration: '2–3 ngày',
    featured: false,
  },

  // ============================================================
  // MIỀN TRUNG
  // ============================================================
  {
    id: 'hoi-an',
    name: 'Hội An',
    location: 'Quảng Nam',
    region: 'Trung',
    category: 'Phố cổ',
    budget: 'Trung bình',
    rating: 4.9,
    reviewCount: 18920,
    image: 'https://images.unsplash.com/photo-1761150285206-dcae08659129?auto=format&fit=crop&w=1400&q=80&ixlib=rb-4.1.0',
    description: 'Phố cổ hơn 400 năm tuổi lung linh ánh đèn lồng, được UNESCO công nhận là Di sản Văn hóa Thế giới.',
    longDescription: `Hội An là một trong những điểm đến được yêu thích nhất Việt Nam và thế giới. Phố cổ Hội An được UNESCO công nhận là Di sản Văn hóa Thế giới năm 1999, bảo tồn gần như nguyên vẹn kiến trúc thương cảng thế kỷ 15–19 với ảnh hưởng của văn hóa Nhật Bản, Trung Hoa và Việt Nam.

Điểm đặc trưng nhất của Hội An là những chiếc đèn lồng muôn màu treo khắp phố phường, đặc biệt rực rỡ vào đêm 14 âm lịch mỗi tháng (Lễ hội Đêm Rằm). Làng rau Trà Quế, làng gốm Thanh Hà và bãi biển An Bàng là những điểm tham quan thêm không thể bỏ qua.`,
    highlights: [
      'Phố cổ đèn lồng lung linh về đêm',
      'Chùa Cầu Nhật Bản 400 năm tuổi',
      'Lễ hội Đêm Rằm đặc sắc',
      'May đo áo dài, làng nghề truyền thống',
      'Bãi biển An Bàng trong xanh',
    ],
    bestTime: 'Tháng 2 – 5',
    duration: '3–5 ngày',
    featured: true,
  },

  {
    id: 'da-nang',
    name: 'Đà Nẵng',
    location: 'Đà Nẵng',
    region: 'Trung',
    category: 'Biển',
    budget: 'Trung bình',
    rating: 4.7,
    reviewCount: 21000,
    image: 'https://images.unsplash.com/photo-1658121062523-753c248e470e?auto=format&fit=crop&w=1400&q=80&ixlib=rb-4.1.0',
    description: 'Thành phố năng động với bãi biển Mỹ Khê tuyệt đẹp, cầu Rồng phun lửa và Bà Nà Hills huyền bí.',
    longDescription: `Đà Nẵng là thành phố đáng sống bậc nhất Việt Nam, kết hợp hoàn hảo giữa bãi biển đẳng cấp, văn hóa phong phú và cơ sở hạ tầng hiện đại. Bãi biển Mỹ Khê từng được Forbes bình chọn là một trong 6 bãi biển đẹp nhất hành tinh với bờ cát trắng mịn trải dài 9km.

Bà Nà Hills là khu du lịch trên đỉnh núi cao 1.500m với kiến trúc Pháp cổ, được kết nối bằng cáp treo một dây dài nhất thế giới. Cầu Rồng phun lửa và phun nước mỗi cuối tuần là điểm check-in không thể bỏ qua.`,
    highlights: [
      'Bãi biển Mỹ Khê top 6 thế giới',
      'Bà Nà Hills – Cầu Vàng iconic',
      'Cầu Rồng phun lửa và nước',
      'Bán đảo Sơn Trà – chùa Linh Ứng',
      'Ẩm thực: Mì Quảng, Bánh mì Đà Nẵng',
    ],
    bestTime: 'Tháng 3 – 8',
    duration: '4–6 ngày',
    featured: true,
  },

  {
    id: 'hue',
    name: 'Huế',
    location: 'Thừa Thiên Huế',
    region: 'Trung',
    category: 'Di tích',
    budget: 'Thấp',
    rating: 4.6,
    reviewCount: 8750,
    image: 'https://images.unsplash.com/photo-1772333389035-f20faa6bde2b?auto=format&fit=crop&w=1400&q=80&ixlib=rb-4.1.0',
    description: 'Cố đô triều Nguyễn với Đại Nội hùng tráng, lăng tẩm hoàng gia và ẩm thực cung đình tinh tế.',
    longDescription: `Huế — cố đô của triều đại phong kiến cuối cùng Việt Nam (nhà Nguyễn, 1802–1945) — là một trong những trung tâm văn hóa, lịch sử và ẩm thực quan trọng nhất đất nước. Quần thể Di tích Cố đô Huế được UNESCO công nhận năm 1993.

Đại Nội Huế (Hoàng thành) là kiến trúc cung đình nguy nga với hàng trăm công trình cổ kính. Bên ngoài thành phố là hệ thống 7 lăng tẩm hoàng gia ẩn mình trong rừng thông. Sông Hương thơ mộng chảy qua trung tâm thành phố, là nơi lý tưởng để thưởng thức ca Huế trên thuyền rồng.`,
    highlights: [
      'Đại Nội Huế – Hoàng thành triều Nguyễn',
      'Lăng Minh Mạng, Tự Đức, Khải Định',
      'Nghe ca Huế trên sông Hương',
      'Ẩm thực cung đình: Cơm hến, Bún bò Huế',
      'Thiền viện Trúc Lâm Bạch Mã',
    ],
    bestTime: 'Tháng 1 – 3 và 7 – 8',
    duration: '2–3 ngày',
    featured: false,
  },

  // ============================================================
  // MIỀN NAM
  // ============================================================
  {
    id: 'phu-quoc',
    name: 'Phú Quốc',
    location: 'Kiên Giang',
    region: 'Nam',
    category: 'Đảo',
    budget: 'Cao',
    rating: 4.8,
    reviewCount: 16340,
    image: 'https://images.unsplash.com/photo-1693282814784-649be45a459b?auto=format&fit=crop&w=1400&q=80&ixlib=rb-4.1.0',
    description: '"Đảo Ngọc" với bãi biển tuyệt đẹp, nước biển trong vắt và hệ sinh thái rừng nguyên sinh phong phú.',
    longDescription: `Phú Quốc — hòn đảo lớn nhất Việt Nam — đã trở thành điểm đến hàng đầu của du khách trong và ngoài nước nhờ vẻ đẹp hoang sơ nguyên vẹn và cơ sở hạ tầng du lịch đẳng cấp thế giới. Bãi Sao ở phía Nam đảo thường xuyên được bầu chọn là một trong những bãi biển đẹp nhất châu Á.

Phú Quốc có Vườn Quốc gia bao phủ hơn một nửa diện tích đảo với hệ sinh thái rừng nhiệt đới phong phú. Làng chài Dương Đông là nơi tốt nhất để thưởng thức hải sản tươi sống và nước mắm Phú Quốc nổi tiếng.`,
    highlights: [
      'Bãi Sao – bãi biển đẹp nhất Việt Nam',
      'Lặn ngắm san hô ở Hòn Thơm',
      'Vinpearl Safari – vườn thú hoang dã',
      'Câu mực đêm trên biển',
      'Nước mắm Phú Quốc chính hiệu',
    ],
    bestTime: 'Tháng 11 – 4 (mùa khô)',
    duration: '4–6 ngày',
    featured: true,
  },

  {
    id: 'ho-chi-minh',
    name: 'TP. Hồ Chí Minh',
    location: 'TP. Hồ Chí Minh',
    region: 'Nam',
    category: 'Di tích',
    budget: 'Trung bình',
    rating: 4.5,
    reviewCount: 24100,
    image: 'https://images.unsplash.com/photo-1748517288431-b67c92632a8e?auto=format&fit=crop&w=1400&q=80&ixlib=rb-4.1.0',
    description: 'Thành phố năng động nhất Việt Nam với lịch sử chiến tranh độc đáo, ẩm thực đa dạng và cuộc sống về đêm sôi động.',
    longDescription: `TP. Hồ Chí Minh (Sài Gòn) là trung tâm kinh tế, văn hóa và du lịch lớn nhất Việt Nam. Thành phố này mang trong mình dấu ấn lịch sử phức tạp của thời kỳ thuộc địa Pháp và chiến tranh Việt Nam, tạo nên sự hòa trộn độc đáo giữa kiến trúc Đông Dương cổ điển và nhịp sống hiện đại năng động.

Địa đạo Củ Chi — hệ thống đường hầm dài 250km dưới lòng đất — là minh chứng cho ý chí kiên cường của người Việt. Bảo tàng Chứng tích Chiến tranh và Dinh Độc Lập là những địa điểm giúp du khách hiểu sâu hơn về lịch sử đất nước.`,
    highlights: [
      'Địa đạo Củ Chi – huyền thoại lịch sử',
      'Bảo tàng Chứng tích Chiến tranh',
      'Dinh Độc Lập, Nhà thờ Đức Bà',
      'Phố đi bộ Nguyễn Huệ sôi động',
      'Ẩm thực 24/7: Phở, Hủ tiếu, Bánh mì',
    ],
    bestTime: 'Tháng 12 – 4 (mùa khô)',
    duration: '3–5 ngày',
    featured: false,
  },

  {
    id: 'da-lat',
    name: 'Đà Lạt',
    location: 'Lâm Đồng',
    region: 'Nam',
    category: 'Núi',
    budget: 'Thấp',
    rating: 4.7,
    reviewCount: 11280,
    image: 'https://images.unsplash.com/photo-1675701231005-53ba4be97f23?auto=format&fit=crop&w=1400&q=80&ixlib=rb-4.1.0',
    description: '"Thành phố ngàn hoa" lãng mạn với khí hậu mát mẻ quanh năm, thông reo vi vu và kiến trúc Pháp độc đáo.',
    longDescription: `Đà Lạt — "Thành phố mộng mơ" — nằm trên cao nguyên Lâm Viên ở độ cao 1.500m với khí hậu mát mẻ quanh năm hiếm có ở miền Nam nhiệt đới. Thành phố được người Pháp xây dựng từ đầu thế kỷ 20 như một khu nghỉ dưỡng mùa hè, để lại di sản kiến trúc biệt thự Pháp cổ đặc sắc.

Đà Lạt nổi tiếng với những vườn hoa rực rỡ (hồng, mimosa, dã quỳ), vườn cà phê và dâu tây. Hồ Xuân Hương, thác Prenn, Dinh Bảo Đại, và Crazy House là những điểm tham quan hấp dẫn. Chợ đêm Đà Lạt là nơi lý tưởng để thưởng thức đặc sản địa phương.`,
    highlights: [
      'Hồ Xuân Hương lãng mạn giữa thành phố',
      'Vườn hoa Đà Lạt muôn sắc',
      'Thác Prenn, thác Datanla hùng vĩ',
      'Crazy House – kiến trúc siêu thực',
      'Cà phê Đà Lạt ngon nức tiếng',
    ],
    bestTime: 'Quanh năm (mát mẻ), đẹp nhất 11 – 1',
    duration: '3–4 ngày',
    featured: true,
  },
]

// ----------------------------------------------------------------
// Helper functions cho data
// ----------------------------------------------------------------

/** Lấy danh sách địa điểm nổi bật (featured: true) */
export const getFeaturedDestinations = (): Destination[] =>
  destinations.filter((d) => d.featured)

/** Tìm một địa điểm theo id */
export const getDestinationById = (id: string): Destination | undefined =>
  destinations.find((d) => d.id === id)
