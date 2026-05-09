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
    description: 'Một bản giao hưởng của đá và nước, nơi hàng nghìn hòn đảo vôi tĩnh lặng soi bóng xuống mặt biển ngọc bích.',
    longDescription: `Giữa lòng vịnh Bắc Bộ, Hạ Long hiện ra như một bức tranh thủy mặc khổng lồ được tạc bằng những khối đá vôi nghìn năm tuổi. Không chỉ là một di sản, nơi đây là một trải nghiệm về sự tĩnh tại, nơi nhịp chèo khua nước hòa cùng tiếng gió luồn qua các hang động kỳ ảo.

Hành trình tại Hạ Long là sự thưởng lãm nhịp sống chậm rãi trên những chuyến du thuyền sang trọng. Tại đây, thời gian như ngưng đọng khi ánh hoàng hôn buông xuống, nhuộm đỏ những dãy núi nhấp nhô và những làng chài dập dềnh trên sóng nước.`,
    highlights: [
      'Du thuyền tĩnh lặng giữa mê cung đá vôi',
      'Đón bình minh trên mặt biển sương mờ',
      'Khám phá những hang động mang dấu ấn thời gian',
      'Chèo kayak len lỏi qua các eo biển hoang sơ',
      'Nhịp sống bình yên tại làng chài Cửa Vạn',
    ],
    bestTime: 'Tháng 10 – 4',
    duration: '2–3 ngày',
    featured: true,
    signatureMoments: [
      {
        title: 'The Blue Hour',
        description: 'Khi hoàng hôn tan vào biển, cả vùng vịnh chuyển mình sang sắc xanh huyền ảo, nơi ranh giới giữa trời và nước hoàn toàn biến mất.',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Sương sớm trên mạn thuyền',
        description: 'Thức dậy giữa những làn sương mỏng tang đang len lỏi qua các khe núi, cảm nhận sự tĩnh lặng tuyệt đối của thiên nhiên.',
        image: 'https://images.unsplash.com/photo-1559592442-9e813bd56616?auto=format&fit=crop&w=800&q=80'
      }
    ],
    atmosphere: 'Tĩnh lặng, Huyền bí',
    journeyRhythm: [
      {
        time: 'Morning',
        title: 'Bình minh trên sóng biếc',
        description: 'Khi những tia nắng đầu tiên len lỏi qua các đảo đá, mặt vịnh bừng sáng như một bức tranh thủy mặc vừa mới vẽ xong.',
        activity: 'Tập Tai Chi trên mạn thuyền trong sương sớm',
        image: 'https://images.unsplash.com/photo-1559592442-9e813bd56616?auto=format&fit=crop&w=1200&q=80'
      },
      {
        time: 'Afternoon',
        title: 'Khám phá lòng vịnh',
        description: 'Dưới ánh mặt trời rạng rỡ, nước biển chuyển màu ngọc bích rực rỡ, mời gọi những cuộc viễn du vào sâu trong các hang động.',
        activity: 'Chèo thuyền Kayak len lỏi qua các vòm đá',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80'
      },
      {
        time: 'Golden Hour',
        title: 'Hơi thở của đá',
        description: 'Khi mặt trời hạ thấp, những khối đá vôi khoác lên mình lớp áo vàng rực rỡ, tạo nên một không gian đầy mê hoặc.',
        activity: 'Thưởng thức trà chiều và ngắm hoàng hôn',
        image: 'https://images.unsplash.com/photo-1544013589-447e958cd89a?auto=format&fit=crop&w=1200&q=80'
      },
      {
        time: 'Evening',
        title: 'Sự tĩnh lặng tuyệt đối',
        description: 'Đêm buông xuống, vịnh Hạ Long trở về với vẻ đẹp huyền bí, nơi chỉ còn tiếng sóng vỗ nhẹ và bầu trời đầy sao.',
        activity: 'Bữa tối lãng mạn dưới ánh sao đêm',
        image: 'https://images.unsplash.com/photo-1493246507139-91e8bef99c02?auto=format&fit=crop&w=1200&q=80'
      }
    ],
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
    description: 'Thị trấn trong sương, nơi những thửa ruộng bậc thang uốn lượn như những dải lụa mềm mại giữa đại ngàn.',
    longDescription: `Nằm ở độ cao 1.500m, Sa Pa là nơi giao thoa giữa đất và trời, nơi sương mù len lỏi vào từng hơi thở của núi rừng Hoàng Liên Sơn. Những thửa ruộng bậc thang — tuyệt tác của bàn tay con người và thiên nhiên — vẽ nên những đường cong mềm mại trên sườn núi, thay sắc theo từng mùa lúa.

Sức hút của Sa Pa nằm ở sự tĩnh lặng của những bản làng ẩn hiện trong mây và nét văn hóa rực rỡ của các dân tộc bản địa. Một cuộc hành trình đến Sa Pa là sự tìm về với những giá trị nguyên sơ và vẻ đẹp hùng vĩ của nóc nhà Đông Dương.`,
    highlights: [
      'Thưởng lãm kỳ quan ruộng bậc thang uốn lượn',
      'Chinh phục đỉnh Fansipan giữa biển mây',
      'Sắc màu văn hóa tại các bản làng vùng cao',
      'Hơi thở phố núi trong những buổi sớm sương mờ',
      'Trải nghiệm ẩm thực Tây Bắc nồng nàn',
    ],
    bestTime: 'Tháng 9 – 11',
    duration: '3–4 ngày',
    featured: true,
    signatureMoments: [
      {
        title: 'Thung lũng thức giấc',
        description: 'Ngắm nhìn những tia nắng đầu tiên xé toạc màn sương đặc quánh, tiết lộ vẻ đẹp lộng lẫy của thung lũng Mường Hoa.',
        image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Chạm tay vào mây',
        description: 'Cảm giác đứng trên đỉnh Fansipan, nơi mây ngàn cuồn cuộn dưới chân và đất trời như thu gọn trong tầm mắt.',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80'
      }
    ],
    atmosphere: 'Bình yên, Sương mờ',
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
    description: 'Thủ đô ngàn năm văn hiến, nơi vẻ đẹp hoài cổ của 36 phố phường hòa quyện trong nhịp sống đương đại.',
    longDescription: `Hà Nội không chỉ là một thành phố, mà là một kho tàng ký ức được lưu giữ qua những mái ngói rêu phong và những con phố nhỏ quanh co. Mỗi góc phố, mỗi hàng cây đều kể lại một câu chuyện về sự bền bỉ và vẻ đẹp thanh lịch của người Tràng An.

Dưới bóng cây cổ thụ bên hồ Hoàn Kiếm, thời gian như trôi chậm lại, cho phép ta cảm nhận sâu sắc hơn về chiều dài lịch sử và chiều sâu văn hóa của một vùng đất nghìn năm tuổi.`,
    highlights: [
      'Góc nhìn hoài cổ tại 36 phố phường',
      'Chiều sâu lịch sử tại Văn Miếu – Quốc Tử Giám',
      'Sự tĩnh lặng buổi sớm bên hồ Hoàn Kiếm',
      'Tinh hoa ẩm thực vỉa hè đầy tinh tế',
      'Nghệ thuật múa rối nước mang hồn dân tộc',
    ],
    atmosphere: 'Hoài cổ, Thanh lịch',
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
    description: 'Vịnh Hạ Long trên cạn, nơi những dòng sông uốn lượn chân núi đá vôi tạo nên một cõi tiên cảnh hữu tình.',
    longDescription: `Ninh Bình là sự kết hợp kỳ diệu giữa sự hùng vĩ của đá và sự mềm mại của nước. Những dòng sông xanh ngắt len lỏi qua lòng hang tối và những cánh đồng lúa vàng óng, tạo nên một quần thể danh thắng Tràng An thoát tục và đầy thơ mộng.

Tại đây, giữa những di tích cố đô Hoa Lư xưa cũ và sự tĩnh lặng của các ngôi chùa cổ, du khách có thể tìm thấy sự bình yên tuyệt đối và cảm nhận được dòng chảy của lịch sử Việt Nam qua từng dấu tích thời gian.`,
    highlights: [
      'Chèo thuyền du ngoạn cõi tiên Tràng An',
      'Vẻ đẹp thoát tục của cố đô Hoa Lư',
      'Toàn cảnh hùng vĩ từ đỉnh Hang Múa',
      'Sự tĩnh lặng tại chùa Bái Đính',
      'Đạp xe giữa đồng lúa Tam Cốc thơ mộng',
    ],
    atmosphere: 'Thoát tục, Hữu tình',
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
    description: 'Bảo tàng sống của thời gian, nơi những con phố vàng rực rỡ dưới ánh đèn lồng mang vẻ đẹp ngưng đọng.',
    longDescription: `Hội An là nơi mà mỗi viên gạch, mỗi mái ngói đều mang hơi thở của quá khứ. Kiến trúc thương cảng thế kỷ 17 được bảo tồn gần như nguyên vẹn, tạo nên một không gian sống động mà bình yên, nơi những giá trị văn hóa truyền thống vẫn được giữ gìn qua từng nếp nhà.

Khi đêm xuống, Hội An trở thành một giấc mơ lung linh với hàng nghìn chiếc đèn lồng soi bóng xuống dòng sông Hoài. Đó là lúc ta cảm nhận được rõ nét nhất vẻ đẹp của sự hoài niệm và nhịp sống chậm rãi đặc trưng của vùng đất miền Trung.`,
    highlights: [
      'Dấu ấn thời gian trên phố cổ đèn lồng',
      'Kiến trúc Chùa Cầu biểu tượng',
      'Sự tĩnh lặng trên dòng sông Hoài đêm rằm',
      'Tinh hoa may mặc và thủ công bản địa',
      'Bình minh yên bình trên biển An Bàng',
    ],
    bestTime: 'Tháng 2 – 5',
    duration: '3–5 ngày',
    featured: true,
    signatureMoments: [
      {
        title: 'Đèn lồng trên sông Hoài',
        description: 'Thả một nhành hoa đăng xuống dòng sông lấp lánh, cảm nhận sự kết nối kỳ diệu giữa hiện tại và những giá trị xưa cũ.'
      },
      {
        title: 'Sương sớm phố Hội',
        description: 'Dạo bước trên những con phố vàng rực trong buổi sớm mai thanh tịnh, khi tiếng chổi tre khua nhẹ trên nền gạch rêu phong.'
      }
    ],
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
    description: 'Thành phố của những nhịp cầu và biển xanh, nơi nhịp sống hiện đại hòa quyện cùng sự khoáng đạt của thiên nhiên.',
    longDescription: `Đà Nẵng mang vẻ đẹp của một đô thị hiện đại nhưng vẫn giữ được sự kết nối mật thiết với thiên nhiên hùng vĩ. Từ bãi cát trắng mịn của Mỹ Khê đến sự huyền bí của Ngũ Hành Sơn, thành phố này mời gọi ta khám phá sự tự do và năng lượng tươi mới.

Sự tráng lệ của Cầu Vàng giữa biển mây và nhịp đập sôi động của những cây cầu bắt qua sông Hàn tạo nên một diện mạo Đà Nẵng đầy khát vọng nhưng vẫn không thiếu những góc nhỏ bình yên bên bán đảo Sơn Trà.`,
    highlights: [
      'Dạo bước trên Cầu Vàng giữa lưng chừng mây',
      'Tự do cùng sóng biển Mỹ Khê',
      'Hơi thở tâm linh tại bán đảo Sơn Trà',
      'Khám phá hang động Ngũ Hành Sơn kỳ bí',
      'Cảm hứng từ những nhịp cầu hiện đại',
    ],
    atmosphere: 'Tự do, Phóng khoáng',
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
    description: 'Cõi mơ của những bậc đế vương xưa, nơi vẻ đẹp trầm mặc của cố đô luôn mang một phong thái tĩnh lặng và kiêu sa.',
    longDescription: `Huế là nơi nghệ thuật kiến trúc và tâm hồn con người giao thoa trong sự trầm mặc của lịch sử. Từng lăng tẩm hoàng gia và điện đài trong Đại Nội đều tỏa ra một phong thái đế vương, nhưng lại đầy thi vị và u uẩn bên dòng sông Hương thơ mộng.

Đến với Huế là đến với sự tinh tế trong từng món ăn cung đình, trong tiếng chuông chùa Thiên Mụ vang xa và trong nhịp sống chậm rãi mà trang trọng của một vùng đất đã từng là tâm điểm của một triều đại.`,
    highlights: [
      'Vẻ đẹp uy nghiêm của Đại Nội triều Nguyễn',
      'Sự trầm mặc tại các lăng tẩm hoàng gia',
      'Chiều tà buông trên dòng sông Hương thơ mộng',
      'Tinh hoa ẩm thực cung đình tinh tế',
      'Tiếng chuông chùa Thiên Mụ vang giữa hư không',
    ],
    atmosphere: 'Trầm mặc, Kiêu sa',
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
    description: 'Đảo Ngọc thuần khiết giữa vịnh Thái Lan, nơi những bãi cát trắng và làn nước trong vắt tạo nên một thiên đường tĩnh tại.',
    longDescription: `Phú Quốc mời gọi những tâm hồn tìm kiếm sự ẩn dật trong vẻ đẹp nguyên sơ của biển khơi. Làn nước trong vắt đến tận đáy và những rặng san hô rực rỡ màu sắc tạo nên một thế giới dưới nước huyền ảo, tách biệt hoàn toàn với nhịp sống hối hả ngoài kia.

Dưới tán dừa xanh mướt của Bãi Sao hay trong nhịp sống mộc mạc của các làng chài cổ, Phú Quốc hiện ra như một viên ngọc quý đang chờ được khám phá bằng sự trân trọng và thấu hiểu.`,
    highlights: [
      'Sự tĩnh lặng trên bờ cát trắng Bãi Sao',
      'Thế giới san hô rực rỡ dưới lòng đại dương',
      'Hoàng hôn buông trên biển Tây lộng lẫy',
      'Hương vị biển cả trong những ngôi làng cổ',
      'Trải nghiệm nghỉ dưỡng đẳng cấp giữa thiên nhiên',
    ],
    atmosphere: 'Thuần khiết, Ẩn dật',
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
    description: 'Hòn ngọc Viễn Đông sôi động, nơi những dấu ấn kiến trúc Pháp cổ điển đan xen giữa nhịp đập mãnh liệt của đô thị.',
    longDescription: `TP. Hồ Chí Minh là một bản giao hưởng của sự đối lập: giữa những tòa nhà chọc trời hào nhoáng và những con hẻm nhỏ mang đầy ký ức. Sài Gòn luôn mở lòng đón nhận mọi luồng văn hóa, tạo nên một bản sắc riêng biệt, vừa phóng khoáng vừa đầy tình người.

Sức sống của thành phố nằm ở những quán cà phê vỉa hè buổi sớm, ở những công trình kiến trúc Đông Dương trang nhã và ở nhịp sống không bao giờ ngủ, luôn thôi thúc ta khám phá những góc khuất đầy thú vị.`,
    highlights: [
      'Dấu ấn Đông Dương tại các công trình di sản',
      'Hơi thở lịch sử từ địa đạo Củ Chi',
      'Nhịp sống năng động trên phố đi bộ',
      'Sự đa dạng của thiên đường ẩm thực 24/7',
      'Toàn cảnh thành phố rực rỡ từ trên cao',
    ],
    atmosphere: 'Năng động, Đa sắc',
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
    description: 'Xứ sở mù sương lãng mạn, nơi thông reo và ngàn hoa khoe sắc tạo nên một giai điệu dịu dàng giữa cao nguyên.',
    longDescription: `Đà Lạt là một bài thơ được viết giữa cao nguyên Lâm Viên, nơi khí hậu mát mẻ và những làn sương mờ ảo dệt nên một không gian đầy mơ mộng. Những ngôi biệt thự Pháp cổ ẩn hiện trong rừng thông và những hồ nước phẳng lặng tạo nên một khung cảnh thanh bình, lãng mạn đặc trưng.

Ở Đà Lạt, mỗi mùa hoa là một cung bậc cảm xúc khác nhau. Sự tĩnh lặng của thành phố ngàn hoa mang lại cho tâm hồn sự thư thái, mời gọi ta chậm lại để cảm nhận hương vị cà phê nồng nàn và vẻ đẹp dịu dàng của nhịp sống cao nguyên.`,
    highlights: [
      'Giai điệu sương mờ bên hồ Xuân Hương',
      'Vẻ đẹp nên thơ của những triền hoa',
      'Kiến trúc Pháp cổ điển giữa rừng thông',
      'Thưởng thức vị cà phê cao nguyên nồng nàn',
      'Hùng vĩ và thơ mộng của các thác nước',
    ],
    atmosphere: 'Lãng mạn, Dịu dàng',
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
