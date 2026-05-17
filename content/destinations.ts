// =============================================================
// content/destinations.ts
// Curated editorial data for Aurora's luxury travel sanctuaries.
// English-first editorial direction.
// =============================================================

import type { Destination } from '@/types'

const commonsImage = (fileName: string, width = 1400) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}?width=${width}`

export const destinations: Destination[] = [
  {
    id: 'vinh-ha-long',
    name: 'Ha Long Bay',
    location: 'Quang Ninh',
    region: 'North',
    category: 'Seaside',
    budget: 'Mid-range',
    rating: 4.9,
    reviewCount: 12480,
    image: commonsImage('Ha Long Bay 2023.jpg'),
    imageAlt: 'Daylight view of limestone islands and calm water in Ha Long Bay, Vietnam',
    description: 'A quiet theater of limestone and tide, where karst silhouettes drift through clear morning haze.',
    longDescription: `In the Gulf of Tonkin, Ha Long Bay feels less like a destination than a slow arrangement of stone, water, and weather. Limestone islands rise in layered silhouettes, while the surface below holds every passing cloud with a painterly calm.

A journey here is best approached without hurry. Traditional boats, sheltered lagoons, floating villages, and cave passages create a rhythm that is quiet but never empty, giving each hour enough space to be noticed.`,
    highlights: [
      'Sailing through a labyrinth of limestone giants',
      'Witnessing sunrise over the misty horizon',
      'Exploring grottoes carved by time itself',
      'Kayaking through secluded emerald lagoons',
      'Quiet life at Cua Van floating village',
    ],
    bestTime: 'October - April',
    duration: '2-3 Days',
    featured: true,
    signatureMoments: [
      {
        title: 'Quiet Water',
        description: 'In soft daylight, the bay becomes a study of reflections, with limestone forms drifting across the water like ink on silk.',
        image: commonsImage('Ha Long Bay 2023.jpg', 900),
      },
      {
        title: 'Kayak Silence',
        description: 'Moving by kayak brings the scale of the cliffs closer, turning the bay from a panorama into something intimate.',
        image: commonsImage('Kayaking in Ha Long Bay.jpg', 900),
      },
    ],
    atmosphere: 'Serene, Mystical',
    journeyRhythm: [
      {
        time: 'Morning',
        title: 'Dawn over Emerald Waves',
        description: 'As morning light reaches the water, the bay opens slowly in soft green and silver tones.',
        activity: 'Quiet deck time before the first cruise routes begin',
        image: commonsImage('Ha Long Bay 2023.jpg', 1200),
      },
      {
        time: 'Afternoon',
        title: 'Labyrinth Discovery',
        description: 'Under the radiant sun, the water turns a brilliant jade, inviting voyages deep into the mystical caves.',
        activity: 'Kayaking through ancient stone arches',
        image: commonsImage('Kayaking in Ha Long Bay.jpg', 1200),
      },
      {
        time: 'Golden Hour',
        title: 'Breath of the Giants',
        description: 'Late afternoon gives the limestone a warmer edge while keeping the water clear and reflective.',
        activity: 'Tea on deck while the islands gather light around their edges',
        image: commonsImage('Ha Long Bay 2023.jpg', 1200),
      },
      {
        time: 'Evening',
        title: 'Blue Calm',
        description: 'Before night settles fully, the bay softens into blue-grey layers and the boats fall into a quieter pace.',
        activity: 'An unhurried dinner on board while the harbor lights stay distant',
        image: commonsImage('Ha Long Bay, Vietnam, View from above.jpg', 1200),
      },
    ],
    gallery: [
      {
        title: 'Sunny Passage',
        caption: 'Tourist boats move through a bright field of limestone, with clean daylight separating water from stone.',
        image: commonsImage('Ha Long Bay on a sunny day.jpg', 1200),
        imageAlt: 'Sunny daylight view of tourist boats among limestone islands in Ha Long Bay',
      },
      {
        title: 'Boat Scale',
        caption: 'At midday, the bay feels more legible: small boats, high karsts, and strong green-blue contrast.',
        image: commonsImage('Ha Long Bay - Boat (53454950414).jpg', 1200),
        imageAlt: 'Midday boat scene below limestone karsts in Ha Long Bay',
      },
      {
        title: 'Clear Karsts',
        caption: 'The limestone horizon holds its shape in sun, giving the gallery a stronger and calmer final frame.',
        image: commonsImage('HALONG BAY.jpg', 1200),
        imageAlt: 'Clear daylight view of limestone karsts in Ha Long Bay, Vietnam',
      },
    ],
  },

  {
    id: 'sapa',
    name: 'Sa Pa',
    location: 'Lao Cai',
    region: 'North',
    category: 'Mountain',
    budget: 'Value',
    rating: 4.8,
    reviewCount: 9320,
    image: commonsImage('Terraced fields Sa Pa Vietnam.JPG'),
    imageAlt: 'Terraced rice fields in Sa Pa, Vietnam',
    description: 'A highland refuge where terraced valleys, mountain cloud, and village paths move at a gentler pace.',
    longDescription: `Sa Pa is most powerful when it is allowed to stay quiet. Terraced fields fold across the Hoang Lien Son slopes in long green contours, while cloud settles between village paths, water channels, and distant ridgelines.`,
    highlights: [
      'Terraced valleys layered in morning cloud',
      'Village paths cut softly into the mountain',
      'A highland horizon that changes with the light',
      'Mountain town breath in misty mornings',
      'Tasting the soul of Northwest cuisine',
    ],
    bestTime: 'September - November',
    duration: '3-4 Days',
    featured: true,
    signatureMoments: [
      {
        title: 'Awakening Valley',
        description: 'Watching the first rays of light tear through the thick fog, revealing the magnificent beauty of Muong Hoa valley.',
        image: commonsImage('Terraced fields Sa Pa Vietnam.JPG', 900),
      },
      {
        title: 'Touching the Clouds',
        description: 'Standing on the peak of Fansipan, where the clouds roll beneath your feet and the horizon fits within your gaze.',
        image: commonsImage('Landscape in Sa Pa (Vietnam).jpg', 900),
      },
    ],
    atmosphere: 'Peaceful, Misty',
    gallery: [
      {
        title: 'Terrace Lines',
        caption: 'Rice fields curve across the slopes with a softness that makes the mountain feel hand-drawn.',
        image: commonsImage('Terraced fields Sa Pa 2.jpg', 1200),
        imageAlt: 'Daylight terraced rice fields on the slopes of Sa Pa, Vietnam',
      },
      {
        title: 'Cloud Village',
        caption: 'Sa Pa is held in the distance between cultivated land, village roofs, and low mountain cloud.',
        image: commonsImage('Landscape in Sa Pa (Vietnam).jpg', 1200),
        imageAlt: 'Mountain landscape and village scenery in Sa Pa, Vietnam',
      },
      {
        title: 'Highland Fold',
        caption: 'From above the valley, the terraces become a quiet record of weather, labor, and time.',
        image: commonsImage('Terraced fields Sa Pa 5.jpg', 1200),
        imageAlt: 'Sunny afternoon view of terraced rice fields in Sa Pa, Vietnam',
      },
    ],
  },

  {
    id: 'ha-no-i',
    name: 'Hanoi',
    location: 'Hanoi',
    region: 'North',
    category: 'Heritage',
    budget: 'Mid-range',
    rating: 4.7,
    reviewCount: 15600,
    image: commonsImage('20180506 Flag Tower of Hanoi HDR.jpg'),
    imageAlt: 'The Flag Tower of Hanoi rising above the historic Thang Long citadel grounds',
    description: 'A thousand-year capital anchored by citadel walls, shaded boulevards, and the measured rhythm of old streets.',
    longDescription: `Hanoi is a city of layered memory: imperial citadel grounds, French-era facades, temple courtyards, and narrow streets where daily life still moves close to the pavement. The Flag Tower stands as a quiet vertical marker in that history, linking the old Thang Long citadel to the capital's present-day pulse.

Under the shade of ancient trees by Hoan Kiem Lake, the city softens into smaller details: morning tea, lacquered doors, water-puppet songs, and the low hum of scooters passing beneath balconies darkened by time.`,
    highlights: [
      'Historic perspective at the Flag Tower of Hanoi',
      'Historical depth at the Temple of Literature',
      'Early morning stillness by Hoan Kiem Lake',
      'Exquisite street food essence',
      'Traditional water puppetry art',
    ],
    atmosphere: 'Nostalgic, Elegant',
    bestTime: 'September - November',
    duration: '3-4 Days',
    featured: false,
  },

  {
    id: 'ninh-binh',
    name: 'Ninh Binh',
    location: 'Ninh Binh',
    region: 'North',
    category: 'Nature',
    budget: 'Value',
    rating: 4.6,
    reviewCount: 7840,
    image: commonsImage('Trang An - 03.jpg'),
    imageAlt: 'Tour boats moving through the limestone river landscape of Trang An in Ninh Binh, Vietnam',
    description: 'A serene limestone landscape where Trang An waterways pass beneath cliffs, caves, and ancient capital ruins.',
    longDescription: `Ninh Binh is Vietnam's landscape of stone and water, a place where oar boats slip through Trang An's limestone corridors and open suddenly into quiet valleys. The scenery feels carved rather than staged: dark cave mouths, reed-lined rivers, temple roofs, and cliffs reflected in still green water.

Beyond the river routes, the ancient capital of Hoa Lu and the viewpoints around Hang Mua give the province its deeper resonance. Ninh Binh is not only photogenic; it is contemplative, holding geology, dynastic memory, and rural calm in the same frame.`,
    highlights: [
      'Boat journey through Trang An fairyland',
      'Ethereal beauty of Hoa Lu ancient capital',
      'Majestic views from Hang Mua peak',
      'Stillness at Bai Dinh pagoda',
      'Cycling through Tam Coc rice fields',
    ],
    atmosphere: 'Ethereal, Poetic',
    bestTime: 'October - April',
    duration: '2-3 Days',
    featured: false,
  },

  {
    id: 'hoi-an',
    name: 'Hoi An',
    location: 'Quang Nam',
    region: 'Central',
    category: 'Heritage',
    budget: 'Mid-range',
    rating: 4.9,
    reviewCount: 18920,
    image: commonsImage('Japanese bridge Hoi An.jpg'),
    imageAlt: 'Japanese Bridge and old town architecture in Hoi An during daytime, Vietnam',
    description: 'A preserved trading port where yellow walls, timber balconies, and riverfront mornings move softly.',
    longDescription: `Hoi An holds its beauty close to the street. Yellow facades, timber balconies, tiled roofs, and narrow lanes create a town of human scale, where the old trading port feels less like a monument than a daily rhythm still being lived.`,
    highlights: [
      'Yellow old-town walls in clear daylight',
      'The Japanese Bridge as a quiet threshold',
      'Riverfront architecture held at walking pace',
      'Essence of local tailoring and craft',
      'Peaceful dawn on An Bang beach',
    ],
    bestTime: 'February - May',
    duration: '3-5 Days',
    featured: true,
    signatureMoments: [
      {
        title: 'Lanterns on the River',
        description: 'Releasing a flower lantern onto the shimmering river, feeling the magical connection between the present and ancient values.',
        image: commonsImage('Lanterns in Hoi An (26652145918).jpg', 900),
      },
      {
        title: 'Hoi An Morning Mist',
        description: 'Walking through the yellow streets in the early morning peace, as the bamboo broom gently sweeps the mossy tiles.',
        image: commonsImage('Japanese bridge Hoi An.jpg', 900),
      },
    ],
    atmosphere: 'Nostalgic, Dreamy',
    gallery: [
      {
        title: 'Bridge Threshold',
        caption: 'The Japanese Bridge gives Hoi An a clear first image: compact, historic, and deeply human.',
        image: commonsImage('Hoi An Japanese Bridge (5058507432).jpg', 1200),
        imageAlt: 'Daylight view of the Japanese Bridge in Hoi An, Vietnam',
      },
      {
        title: 'Yellow Street',
        caption: 'The old town is best read through its facades, where color, timber, and shade hold the pace down.',
        image: commonsImage('Hoi An Ancient Town.jpg', 1200),
        imageAlt: 'Daylight street scene in Hoi An Ancient Town with yellow heritage buildings',
      },
      {
        title: 'Old Port Memory',
        caption: 'A preserved trading town reveals itself through narrow streets rather than dramatic monuments.',
        image: commonsImage('Ancient Town of Hoi An (15428461082).jpg', 1200),
        imageAlt: 'Daylight architecture in the ancient town of Hoi An, Vietnam',
      },
    ],
  },

  {
    id: 'da-nang',
    name: 'Da Nang',
    location: 'Da Nang',
    region: 'Central',
    category: 'Seaside',
    budget: 'Mid-range',
    rating: 4.7,
    reviewCount: 21000,
    image: commonsImage('Golden Bridge, Da Nang (I).jpg'),
    imageAlt: 'Golden Bridge in Ba Na Hills near Da Nang, Vietnam',
    description: 'A coastal city where sea air, sculptural bridges, and mountain temples meet with unusual ease.',
    longDescription: `Da Nang is defined by clean transitions: mountain to sea, bridge to skyline, resort calm to city movement. Its strongest image is not excess, but ease - a coast where sculptural landmarks and soft beaches can sit within the same day.`,
    highlights: [
      'The Golden Bridge held between mountains and cloud',
      'Open sea air along My Khe Beach',
      'Stone, cave, and temple texture at Marble Mountains',
      'Exploring Marble Mountains caves',
      'Inspiration from modern bridges',
    ],
    atmosphere: 'Free, Expansive',
    bestTime: 'March - August',
    duration: '4-6 Days',
    featured: true,
    gallery: [
      {
        title: 'Cloud Bridge',
        caption: 'Ba Na Hills gives Da Nang its most sculptural image: a golden line carried through mountain air.',
        image: commonsImage('Golden Bridge, Da Nang (I).jpg', 1200),
        imageAlt: 'Daylight view of the Golden Bridge in Ba Na Hills near Da Nang, Vietnam',
      },
      {
        title: 'Coastal Ease',
        caption: 'My Khe brings the city back to openness, with a horizon broad enough to reset the pace.',
        image: commonsImage('My Khe Beach 1.jpg', 1200),
        imageAlt: 'Daylight view of My Khe Beach in Da Nang, Vietnam',
      },
      {
        title: 'Stone Interior',
        caption: 'At Marble Mountains, the city turns inward through cave light, stone texture, and temple quiet.',
        image: commonsImage('Marble Mountains.jpg', 1200),
        imageAlt: 'View from the Marble Mountains near Da Nang, Vietnam',
      },
    ],
  },

  {
    id: 'hue',
    name: 'Hue',
    location: 'Thua Thien Hue',
    region: 'Central',
    category: 'Historical',
    budget: 'Value',
    rating: 4.6,
    reviewCount: 8750,
    image: commonsImage('Meridian Gate, Hue (I).jpg'),
    imageAlt: 'Ngo Mon Gate at the entrance to the Imperial City of Hue, Vietnam',
    description: "Vietnam's former imperial capital, where citadel gates, royal tombs, and river light carry a solemn grace.",
    longDescription: `Hue is where imperial architecture and poetic restraint meet. At Ngo Mon Gate, the entrance to the Imperial City, the Nguyen dynasty is felt not as spectacle but as proportion: stone, tiled roofs, courtyards, and ceremonial silence arranged along a careful axis.

To come to Hue is to move slowly through royal tombs, garden houses, the Perfume River, and the echoing bell of Thien Mu Pagoda. Its beauty is dignified rather than loud, shaped by memory, scholarship, cuisine, and rain.`,
    highlights: [
      'Solemn beauty of the Nguyen Dynasty Citadel',
      'Nostalgia at the royal tombs',
      'Sunset over the Huong River',
      'Sophistication of royal cuisine',
      'Thien Mu Pagoda bell echoing in the void',
    ],
    atmosphere: 'Solemn, Graceful',
    bestTime: 'January - March',
    duration: '2-3 Days',
    featured: false,
  },

  {
    id: 'phu-quoc',
    name: 'Phu Quoc',
    location: 'Kien Giang',
    region: 'South',
    category: 'Island',
    budget: 'Luxury',
    rating: 4.8,
    reviewCount: 16340,
    image: commonsImage('Phu Quoc Beach.jpg'),
    imageAlt: 'Sandy beach and blue water on Phu Quoc Island, Vietnam',
    description: 'An island sanctuary of pale sand, warm water, fishing villages, and long sunsets over the Gulf of Thailand.',
    longDescription: `Phu Quoc invites souls seeking seclusion in the primordial beauty of the ocean. Crystal clear water and vibrant coral reefs create a magical underwater world, completely detached from the hustle outside.

Under the lush palm trees of Bai Sao or in the simple life of ancient fishing villages, Phu Quoc appears as a precious gem waiting to be discovered with respect and understanding.`,
    highlights: [
      'Stillness on the white sands of Bai Sao',
      'Vibrant coral world beneath the ocean',
      'Magnificent sunset over the Western sea',
      'Flavor of the sea in ancient villages',
      'World-class resort experience in nature',
    ],
    atmosphere: 'Pure, Secluded',
    bestTime: 'November - April',
    duration: '4-6 Days',
    featured: true,
  },

  {
    id: 'ho-chi-minh',
    name: 'Ho Chi Minh City',
    location: 'Ho Chi Minh City',
    region: 'South',
    category: 'Historical',
    budget: 'Mid-range',
    rating: 4.5,
    reviewCount: 24100,
    image: commonsImage('Central Post Office, Ho Chi Minh City.jpg'),
    imageAlt: 'Saigon Central Post Office in Ho Chi Minh City, Vietnam',
    description: 'A restless southern metropolis where colonial landmarks, cafe rituals, and new towers share the same heat.',
    longDescription: `Ho Chi Minh City is a symphony of contrasts: between glittering skyscrapers and small alleys filled with memories. Saigon always opens its heart to all cultures, creating a unique identity, both expansive and full of humanity.

The vitality of the city lies in the morning sidewalk cafes, in the elegant Indochinese architectural works, and in the rhythm that never sleeps, always urging us to explore interesting hidden corners.`,
    highlights: [
      'Indochinese traces in heritage buildings',
      'Historical breath from Cu Chi tunnels',
      'Dynamic life on walking streets',
      'Diversity of the 24/7 food paradise',
      'Panoramic city views from above',
    ],
    atmosphere: 'Dynamic, Vibrant',
    bestTime: 'December - April',
    duration: '3-5 Days',
    featured: false,
  },

  {
    id: 'da-lat',
    name: 'Da Lat',
    location: 'Lam Dong',
    region: 'South',
    category: 'Mountain',
    budget: 'Value',
    rating: 4.7,
    reviewCount: 11280,
    image: commonsImage('Da Lat, view to Xuan Huong lake.jpg'),
    imageAlt: 'View toward Xuan Huong Lake in Da Lat, Vietnam',
    description: 'A cool highland retreat of pine forests, lake mist, garden villas, and the soft ritual of morning coffee.',
    longDescription: `Da Lat is a poem written amidst the Lam Vien plateau, where the cool climate and ethereal mists weave a dreamy space. Ancient French villas hidden in pine forests and tranquil lakes create a characteristic peaceful and romantic setting.

In Da Lat, each flower season is a different emotional range. The stillness of the city of flowers brings relaxation to the soul, inviting us to slow down to feel the rich coffee flavor and the gentle beauty of highland life.`,
    highlights: [
      'Misty melody by Xuan Huong Lake',
      'Poetic beauty of flower hills',
      'Classic French architecture in pine forests',
      'Tasting rich highland coffee',
      'Majestic and poetic waterfalls',
    ],
    atmosphere: 'Romantic, Gentle',
    bestTime: 'Year-round',
    duration: '3-4 Days',
    featured: true,
  },
]

/** Get list of featured destinations */
export const getFeaturedDestinations = (): Destination[] =>
  destinations.filter((d) => d.featured)

/** Find a destination by ID */
export const getDestinationById = (id: string): Destination | undefined =>
  destinations.find((d) => d.id === id)
