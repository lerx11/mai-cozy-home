// ============================================================
// Sapa Mountain Lodge — Central site configuration & content
// ------------------------------------------------------------
// All copy, tour data, gallery, and reviews live in this single file
// so the whole site can be edited from one place.
//
// NOTE: Images currently use https://placehold.co placeholders with a
// green/cream color scheme. Replace with real photos in /public/images/
// (subfolders: /tours/, /gallery/, /about/) and update the paths here.
// TODO comments mark where real content is still needed.
// ============================================================

// Helper: generate a consistent placeholder image URL with the brand palette.
// bg = deep forest green (#3B6B4A), fg = warm cream (#FFF9F2).
const ph = (w, h, label) =>
  `https://placehold.co/${w}x${h}/3B6B4A/FFF9F2?text=${encodeURIComponent(
    label
  )}`;

export const siteConfig = {
  // -------- Business identity --------
  businessName: "Mai's Cozy House",
  tagline: "Rice field views and cozy comfort in Ta Van village",
  // Short blurb used in headers / SEO / footers
  shortIntro:
    "A family-run mountain lodge in the Sapa highlands offering comfortable stays, guided treks, and authentic cultural experiences.",

  // -------- Contact channels --------
  // TODO: confirm the correct WhatsApp display format (international, no "+").
  // WhatsApp is the primary contact method (email removed in favour of chat).
  whatsappNumber: "+84989091761",
  whatsappLink: "https://wa.me/84989091761",
  address: "Ta Van Village, Sapa, Vietnam",

  // -------- Google Maps --------
  maps: {
    link: "https://maps.app.goo.gl/...",
    displayText: "Get Directions",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1128.320321470335!2d103.89479719334132!3d22.299834137639845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1791374130033!5m2!1sru!2s",
  },

  // -------- Social profiles --------
  // TODO: replace "#" with the real profile URLs.
  socialLinks: {
    instagram: "#",
    facebook: "#",
    tiktok: "#",
  },

  // -------- Reputation --------
  rating: "4.95",
  reviewCount: 128, // TODO: sync with real review platform count

  // -------- Booking.com rating badge --------
  // Visible text is just "Booking.com"; the href opens the full hotel page.
  booking: {
    rating: "4.9",
    reviewCount: "36",
    link: "https://www.booking.com/hotel/vn/mais-cozy-house-ta-van-ricefield-view.en-gb.html",
    displayText: "Booking.com",
  },

  // -------- Accommodation (homestay rooms) --------
  rooms: {
    count: 20,
    priceRange: "$16 - $55 per night",
    amenities: [
      "Mountain & rice terrace views",
      "Private and dorm options",
      "Hot shower & western toilets",
      "Free Wi-Fi in common areas",
      "Home-cooked local meals",
      "Bicycle & motorbike rental",
    ],
  },

  // -------- Stay With Us section --------
  // Detailed homestay content for the dedicated home-page section.
  stay: {
    eyebrow: "Stay With Us",
    title: "Stay With Us",
    subtitle: "Experience warm highland hospitality",
    description:
      "Our traditional Giay house is nestled in the heart of Ta Van village, surrounded by breathtaking rice terraces. Each room is thoughtfully designed with high-quality mattresses, soft linens, and a heating system for your comfort. Wake up to stunning rice field views, enjoy breakfast on the terrace, and gather by the fireplace in the evening. With 20 years of hospitality experience, your host U Mai will make you feel at home.",
    priceRange: "$16 - $55 per night",
    amenities: [
      { icon: "mountain", label: "Mountain view" },
      { icon: "wifi", label: "Free WiFi" },
      { icon: "shower", label: "Hot shower" },
      { icon: "coffee", label: "Breakfast included" },
      { icon: "sun", label: "Terrace" },
      { icon: "parking", label: "Free parking" },
      { icon: "users", label: "Family rooms" },
      { icon: "meal", label: "Traditional meals" },
    ],
    images: [
      { src: "/images/rooms/room-1.jpeg", alt: "Cozy room at Mai's Cozy House" },
      { src: "/images/rooms/room-2.jpeg", alt: "Room with rice field view" },
      { src: "/images/rooms/room-3.jpeg", alt: "Comfortable bed with mountain view" },
      { src: "/images/rooms/room-4.jpeg", alt: "Room interior with warm lighting" },
      { src: "/images/rooms/room-5.jpeg", alt: "Traditional Giay house room" },
      { src: "/images/rooms/room-6.jpeg", alt: "Cozy bedroom with soft linens" },
      { src: "/images/rooms/room-7.jpeg", alt: "Room with a view of Ta Van village" },
      { src: "/images/rooms/room-8.jpeg", alt: "Peaceful room surrounded by nature" },
      { src: "/images/rooms/room-9.jpeg", alt: "Room with natural light" },
      { src: "/images/rooms/room-10.jpeg", alt: "Cozy retreat at Mai's Cozy House" },
    ],
  },

  // -------- About section --------
  about: {
    eyebrow: "Our Story",
    title: "A family home above the valley",
    subtitle: "A warm welcome from U Mai",
    story: [
      "Hello, my name is U Mai, and I am 61 years old. I built this home with the desire to welcome guests to Ta Van, where they can experience the beauty and tranquility of the village. With 20 years of experience in the hospitality industry, this is my first time establishing my own accommodation. Currently, I work as a chef at a resort in Sapa in the mornings, and in the afternoons, I can prepare delicious meals for you to enjoy. I look forward to welcoming you to our beautiful home.",
      "Our home is nestled deep in Ta Van village, surrounded by breathtaking terraced rice fields. It is truly a retreat from the outside world, offering one of the most stunning rice field views in Ta Van. This traditional Giay house has been thoughtfully redesigned to be both elegant and comfortable. At its heart is a fireplace, creating a warm gathering space where guests can connect. Though the rooms are small, I have paid great attention to the details — high-quality mattresses, soft blankets, premium linens, plush pillows, and a heating system — to ensure you have the most restful sleep after a long journey. One of our guests once said: 'They came here for an authentic local experience but received both five-star hospitality and meals prepared by a five-star chef.' I believe you will have an unforgettable experience here!",
    ],
    mission:
      "To share the beauty of Sapa with travelers while supporting our local community.",
    values: [
      {
        icon: "leaf",
        title: "Rooted in nature",
        text: "Our trails follow the seasons, the rivers, and the rice cycles. We leave nothing behind and take only memories.",
      },
      {
        icon: "users",
        title: "Local & family-run",
        text: "Every guide is from this valley. Your stay directly supports the local families of Sapa, not a distant corporation.",
      },
      {
        icon: "compass",
        title: "Authentic culture",
        text: "Indigo dyeing, herbal baths, village life — we share our traditions as they really are, not staged for show.",
      },
    ],
    images: [
      "/images/about/su-sisters.jpeg",
      "/images/about/homestay-exterior.jpeg",
      "/images/about/about-extra.jpeg",
    ],
  },

  // -------- Hero --------
  hero: {
    title: "Mai's Cozy House",
    subtitle: "Rice field views in the heart of Ta Van village",
    description:
      "A traditional Giay house surrounded by rice terraces — your cozy retreat in Sapa.",
    backgroundImage: "/images/hero/hero-bg.jpeg",
  },

  // -------- Tours --------
  // 3 core tours. Each slug drives the dynamic route app/tours/[slug].
  tours: [
    {
      slug: "hmong-village-trekking",
      name: "Village Trek",
      duration: "1 Day",
      difficulty: "Easy",
      price: "$20 - $25",
      priceGroup: "$20",
      pricePrivate: "$25",
      priceNote: "per person",
      shortDescription:
        "Walk through traditional highland villages, bamboo forests, and sweeping mountain views",
      fullDescription:
        "Meet your guide at the lodge in the morning and set out along quiet footpaths that link a string of traditional villages. Walk past terraced rice fields, through cool bamboo forest, and across small streams as your guide shares stories of daily mountain life. Climb to the highest point for panoramic views of the peaks, the valley, and the town of Sapa in the distance, then follow the trail back down to the lodge through villages that have stood for generations.",
      highlights: [
        "Visit several traditional highland villages",
        "Walk through rice terraces and bamboo forest",
        "Cross small streams and quiet footpaths",
        "Panoramic views of the mountains and valley",
        "Learn about local daily life from your guide",
      ],
      itinerary: [
        {
          time: "9:30 AM",
          title: "Meet your guide at the lodge",
        },
        {
          time: "10:00 AM",
          title: "Visit the first traditional village",
        },
        {
          time: "11:00 AM",
          title: "Walk through bamboo forest and cross a stream",
        },
        {
          time: "11:30 AM",
          title: "Explore a village among the rice terraces",
        },
        {
          time: "12:30 PM",
          title: "Lunch break",
        },
        {
          time: "1:30 PM",
          title: "Climb to the highest viewpoint",
        },
        {
          time: "2:30 PM",
          title: "Enjoy panoramic views of the valley and peaks",
        },
        {
          time: "4:00 PM",
          title: "Return to the lodge",
        },
      ],
      included: [
        "Local English-speaking guide",
        "Home-cooked lunch",
        "Entrance fees to villages",
        "Bottled water & snacks",
      ],
      notIncluded: [
        "Transport to/from Sapa town",
        "Travel insurance",
        "Personal expenses",
        "Tips for guides",
      ],
      meetingPoint: "Sapa Mountain Lodge, Sapa, Vietnam",
      startTime: "08:30",
      endTime: "16:00",
      images: [
        "/images/tours/hmong-village/1.jpeg",
        "/images/tours/hmong-village/2.jpeg",
        "/images/tours/hmong-village/3.jpeg",
      ],
    },
    {
      slug: "herbal-trekking-red-dao",
      name: "Waterfall & Herbal Tour",
      duration: "1 Day",
      difficulty: "Medium",
      price: "$30 - $35",
      priceGroup: "$30",
      pricePrivate: "$35",
      priceNote: "per person",
      shortDescription:
        "Trek through rice terraces and forest to a mountain waterfall, and relax with a traditional herbal foot bath",
      fullDescription:
        "Head off the main trails to discover a quieter side of the Sapa highlands. Trek through rice terraces and bamboo forest to a mountain waterfall, then visit a small village where local families have preserved a tradition of forest herbs. Enjoy a soothing herbal foot bath and gentle massage, learn a little about the plants and healing customs of the mountains, and sit down to a home-cooked lunch before returning along the streams and terraces.",
      highlights: [
        "Trek through rice terraces, bamboo forest, and a mountain waterfall",
        "Visit a local village and learn about traditional herbal plants",
        "Relax with a traditional herbal foot bath and massage",
        "Enjoy a home-cooked lunch in the highlands",
        "Take in quiet, uncrowded mountain trails",
      ],
      itinerary: [
        {
          time: "09:30",
          title: "Depart from the lodge with a local guide",
        },
        {
          time: "10:00",
          title: "Trek through rice terraces and bamboo forest",
        },
        {
          time: "11:30",
          title: "Visit a mountain waterfall",
        },
        {
          time: "12:00",
          title: "Arrive at the village for a local lunch",
        },
        {
          time: "13:30",
          title: "Traditional herbal foot bath and massage",
        },
        {
          time: "14:30",
          title: "Trek along streams and rice terraces",
        },
        {
          time: "15:30",
          title: "Return to the lodge",
        },
      ],
      included: [
        "Local English-speaking guide",
        "Scenic trek through rice terraces and bamboo forest",
        "Visit to a mountain waterfall",
        "Guided walk through mountain forests",
        "Local lunch in the village",
        "Traditional herbal foot bath and massage",
        "Transport from/to Sapa",
      ],
      notIncluded: [
        "Personal expenses",
        "Tips",
      ],
      meetingPoint: "Sapa Mountain Lodge (transport to the trailhead included)",
      startTime: "09:00",
      endTime: "16:30",
      images: [
        "/images/tours/herbal-trekking/1.jpeg",
        "/images/tours/herbal-trekking/2.jpeg",
        "/images/tours/herbal-trekking/3.jpeg",
      ],
    },
    {
      slug: "2d1n-hmong-red-dao-combo",
      name: "2D1N Mountain Combo",
      duration: "2 Days 1 Night",
      difficulty: "Medium",
      price: "$55",
      priceNote: "per person",
      shortDescription:
        "A 2-day trek through villages and forests with an overnight stay, cooking class, and herbal bath",
      fullDescription:
        "Settle into a two-day journey through the Sapa highlands, where terraced rice fields and forest trails pass through a string of traditional villages. On the first day you trek between the valleys, share lunch overlooking the fields, and arrive at the lodge for an evening together — join a cooking class and enjoy dinner with the family. On the second day you walk through ancient forest, learn a little about the herbs of the mountains, and end with a relaxing herbal bath before returning to town.",
      highlights: [
        "Immerse yourself in local mountain culture",
        "Trek through rice terraces and forest trails",
        "Stay overnight with a local family at the lodge",
        "Join a cooking class and home-style dinner",
        "Finish with a soothing traditional herbal bath",
      ],
      itinerary: [
        {
          time: "Day 1",
          title: "Start from the lodge and trek through the valleys",
        },
        {
          time: "9:00 AM",
          title: "Pick up at the lodge and begin trekking",
          text: "Walk through terraced fields with clouds drifting over the peaks",
        },
        {
          time: "12:00",
          title: "Lunch with views of the rice terraces",
        },
        {
          time: "1:30 PM",
          title: "Visit a traditional mountain village",
        },
        {
          time: "4:00 PM",
          title: "Arrive at the lodge for the night",
        },
        {
          time: "6:00 PM",
          title: "Cooking class and dinner with the family",
        },
        {
          time: "Day 2",
          title: "Trek through the forest and back to town",
        },
        {
          time: "8:30 AM",
          title: "Breakfast",
        },
        {
          time: "9:30 AM",
          title: "Walk with your guide through the bamboo forest",
        },
        {
          time: "11:00 AM",
          title: "Visit the ancient forest and learn about mountain herbs",
        },
        {
          time: "12:30 PM",
          title: "Lunch in a small village",
        },
        {
          time: "1:30 PM",
          title: "Relax with a traditional herbal bath",
        },
        {
          time: "3:30 PM",
          title: "Return to the lodge",
        },
      ],
      included: [
        "Local English-speaking guides",
        "Lunch on both days",
        "Overnight stay at the lodge",
        "Cultural performance",
        "Traditional herbal bath",
        "Transport of luggage",
        "Dinner on Day 1",
      ],
      notIncluded: [
        "Personal expenses",
        "Tips",
      ],
      meetingPoint: "Sapa Mountain Lodge, Sapa, Vietnam",
      startTime: "Day 1 · 08:30",
      endTime: "Day 2 · 16:30",
      images: [
        "/images/tours/2d1n-combo/1.jpeg",
        "/images/tours/2d1n-combo/2.jpeg",
        "/images/tours/2d1n-combo/3.jpeg",
      ],
    },
  ],

  // -------- Gallery (masonry grid) --------
  gallery: [
    // 3 gallery photos
    { src: "/images/gallery/photo1.jpeg", alt: "Sapa rice terraces" },
    { src: "/images/gallery/photo2.jpeg", alt: "Local village" },
    { src: "/images/gallery/photo3.jpeg", alt: "Traditional herbal bath" },
    // 3 photos from each tour
    { src: "/images/tours/hmong-village/1.jpeg", alt: "Village trekking route" },
    { src: "/images/tours/hmong-village/2.jpeg", alt: "Traditional village houses" },
    { src: "/images/tours/hmong-village/3.jpeg", alt: "Village panorama" },
    { src: "/images/tours/herbal-trekking/1.jpeg", alt: "Herbal trek through the mountains" },
    { src: "/images/tours/herbal-trekking/2.jpeg", alt: "Forest herbs" },
    { src: "/images/tours/herbal-trekking/3.jpeg", alt: "Mountain village valley" },
    { src: "/images/tours/2d1n-combo/1.jpeg", alt: "Terraced rice fields" },
    { src: "/images/tours/2d1n-combo/2.jpeg", alt: "Mountain valley" },
    { src: "/images/tours/2d1n-combo/3.jpeg", alt: "Cooking class at the lodge" },
    // 3 room photos
    { src: "/images/rooms/room-1.jpeg", alt: "Room at Sapa Mountain Lodge" },
    { src: "/images/rooms/room-2.jpeg", alt: "Room with mountain view" },
    { src: "/images/rooms/room-3.jpeg", alt: "Comfortable bed with warm linens" },
  ],

  // -------- Guest reviews --------
  // TODO: replace with verified reviews (e.g. Google, TripAdvisor).
  reviews: [
    {
      name: "Alex",
      country: "United Kingdom",
      rating: 5,
      text: "Everything about our stay was amazing. Mai is such a warm and generous host, her food was some of the best we ate on our whole trip, and her house is indeed cozy and in such a beautiful setting!",
    },
    {
      name: "Jule",
      country: "Germany",
      rating: 5,
      text: "Absolute recommendation. It is the last house in the whole village so it is really the best view you can get. If you want a nature, rice field experience, go there.",
    },
    {
      name: "Damien",
      country: "France",
      rating: 5,
      text: "Mai is so nice, you feel at home at the first second, in the middle of rice fields. Her garden is full of flowers and different colors. And the delicious dinner — wow!",
    },
    {
      name: "Natalia",
      country: "Poland",
      rating: 5,
      text: "Beautiful location and house, very kind host, comfortable bed, clean room, great breakfast, and a lovely cat that stole our hearts.",
    },
  ],

  // -------- Navigation --------
  // Anchors are root-relative so the links work from any page (e.g. tour pages)
  // and still scroll smoothly when already on the home page.
  nav: [
    { label: "About", href: "/#about" },
    { label: "Tours", href: "/#tours" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Reviews", href: "/#reviews" },
    { label: "Contact", href: "/#contact" },
  ],
};

// -------- Helpers --------
// Build a WhatsApp deep-link with a pre-filled message.
export function buildWhatsappLink(message = "") {
  const base = siteConfig.whatsappLink;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

// Build a per-tour WhatsApp booking link.
export function buildTourBookingLink(tourName) {
  return buildWhatsappLink(
    `Hi! I'm interested in the "${tourName}" tour. Is it available?`
  );
}

// Look up a tour by slug (used by the dynamic [slug] page).
export function getTourBySlug(slug) {
  return siteConfig.tours.find((t) => t.slug === slug);
}

// Get other tours (for the "similar tours" section on a tour page).
export function getSimilarTours(currentSlug, limit = 3) {
  return siteConfig.tours
    .filter((t) => t.slug !== currentSlug)
    .slice(0, limit);
}

export default siteConfig;
