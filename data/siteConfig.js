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
  businessName: "Sapa Mountain Lodge",
  tagline: "Nature, Comfort & Mountain Views",
  // Short blurb used in headers / SEO / footers
  shortIntro:
    "A family-run mountain lodge in the Sapa highlands offering comfortable stays, guided treks, and authentic cultural experiences.",

  // -------- Contact channels --------
  // TODO: confirm the correct WhatsApp display format (international, no "+").
  // WhatsApp is the primary contact method (email removed in favour of chat).
  whatsappNumber: "+84358888888",
  whatsappLink: "https://wa.me/84358888888",
  address: "Sapa, Vietnam",

  // -------- Google Maps --------
  maps: {
    link: "https://maps.google.com/?q=Sapa,+Vietnam",
    displayText: "Get Directions",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d25701.601003321026!2d103.84873989966243!3d22.337642308709597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1791372263256!5m2!1sru!2s",
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
    rating: "4.8",
    reviewCount: "250",
    link: "https://www.booking.com",
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
      "Our lodge features comfortable rooms with stunning mountain views. Wake up to sweeping vistas of misty peaks and rice terraces, and enjoy hearty home-cooked meals prepared by our family.",
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
      { src: "/images/rooms/room-1.jpeg", alt: "Room at Sapa Mountain Lodge" },
      { src: "/images/rooms/room-2.jpeg", alt: "Room with mountain view" },
      { src: "/images/rooms/room-3.jpeg", alt: "Comfortable bed with warm linens" },
      { src: "/images/rooms/room-4.jpeg", alt: "Bathroom" },
      { src: "/images/rooms/room-5.jpeg", alt: "Balcony view of the valley" },
      { src: "/images/rooms/room-6.jpg", alt: "Traditionally styled room" },
      { src: "/images/rooms/room-7.jpg", alt: "Cozy bedroom interior" },
      { src: "/images/rooms/room-8.jpg", alt: "Twin beds with mountain view" },
      { src: "/images/rooms/room-9.jpg", alt: "Room with wooden decor" },
      { src: "/images/rooms/room-10.jpg", alt: "Sunlit bedroom" },
      { src: "/images/rooms/room-11.jpg", alt: "Family room" },
      { src: "/images/rooms/room-12.jpg", alt: "Panoramic window room" },
      { src: "/images/rooms/room-13.jpg", alt: "Room with rice terrace view" },
      { src: "/images/rooms/room-14.jpg", alt: "Attic style sleeping area" },
      { src: "/images/rooms/room-15.jpg", alt: "Private balcony room" },
      { src: "/images/rooms/room-16.jpg", alt: "Evening room lighting" },
      { src: "/images/rooms/room-17.jpg", alt: "Shared dormitory space" },
    ],
  },

  // -------- About section --------
  about: {
    eyebrow: "Our Story",
    title: "A family home above the valley",
    subtitle:
      "We are a local family sharing our mountain, our trails, and our traditions with travellers who want more than a postcard.",
    story: [
      "Nestled in the mountains of northern Vietnam, our family-run lodge has welcomed travelers from around the world for over a decade. We offer comfortable rooms with breathtaking views, authentic local cuisine, and guided treks through the most beautiful landscapes of Sapa. Whether you're seeking adventure or relaxation, our team is here to make your stay unforgettable.",
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
      name: "Sarah",
      country: "UK",
      rating: 5,
      date: "March 2026",
      text: "A wonderful stay with incredible mountain views. The food was delicious and the trekking was well organised. Highly recommended!",
    },
    {
      name: "Michael",
      country: "Australia",
      rating: 5,
      date: "February 2026",
      text: "The perfect base for exploring Sapa. Comfortable rooms, friendly staff, and the guided treks were the highlight of our trip.",
    },
    {
      name: "Anna",
      country: "Germany",
      rating: 5,
      date: "January 2026",
      text: "Lovely family-run lodge. We felt at home from the moment we arrived and the views from our room were breathtaking.",
    },
    {
      name: "Tom",
      country: "USA",
      rating: 5,
      date: "December 2025",
      text: "Great value and a truly relaxing stay. The team went above and beyond to make our visit special.",
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
