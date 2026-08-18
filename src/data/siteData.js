/**
 * ============================================================
 *  SITE DATA — Edit this file to customize the entire website
 * ============================================================
 *
 * Replace all demo content below with your friend's real info.
 * Every section of the site reads from this single file.
 *
 * For photos: put images in public/photos/ and reference as
 * "/photos/your-image.jpg" — much more reliable than external URLs.
 */

// Verified working demo images (concert / party / wedding themed)
const imgs = {
  hero: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&q=80&auto=format&fit=crop",
  djPortrait: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&q=80&auto=format&fit=crop",
  clubCrowd: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80&auto=format&fit=crop",
  festival: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80&auto=format&fit=crop",
  party: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80&auto=format&fit=crop",
  wedding: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80&auto=format&fit=crop",
  diwali: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&q=80&auto=format&fit=crop",
  concert: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80&auto=format&fit=crop",
  event: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80&auto=format&fit=crop",
  crowd: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&q=80&auto=format&fit=crop",
};

export const siteData = {
  djName: "DJ Desi Beats",
  tagline: "Bollywood · Tollywood · Hollywood",
  subtitle:
    "The #1 Indian DJ for Bollywood Nights, Tollywood Parties & Desi Events across the USA",
  location: "Dallas, TX — Serving Indian Communities Nationwide",
  email: "bookings@djdesibeats.com",
  phone: "+1 (555) 987-6543",
  yearsExperience: 10,

  social: {
    instagram: "https://instagram.com/djdesibeats",
    soundcloud: "https://soundcloud.com/djdesibeats",
    youtube: "https://youtube.com/@djdesibeats",
    spotify: "https://open.spotify.com/artist/djdesibeats",
    tiktok: "https://tiktok.com/@djdesibeats",
  },

  hero: {
    headline: "Desi Beats.",
    headlineAccent: "American Nights.",
    description:
      "From Bollywood bash to Tollywood takeover — I bring the energy of India to every dance floor in America. Book me for your next Desi party, wedding sangeet, or community festival.",
    ctaPrimary: "Book Your Night",
    ctaSecondary: "Hear My Mixes",
    backgroundImage: imgs.hero,
  },

  nightThemes: [
    {
      id: "bollywood",
      title: "Bollywood Night",
      tagline: "Hindi Hits & Chartbusters",
      description:
        "Non-stop Bollywood bangers — from classic 90s to latest chart-toppers. Perfect for weddings, sangeets, Diwali parties, and college events.",
      highlights: [
        "Latest Hindi chartbusters",
        "Classic 90s & 2000s throwbacks",
        "Wedding sangeet specials",
        "Diwali & festival sets",
      ],
      gradientClass: "gradient-text-bollywood",
      borderClass: "neon-border-bollywood",
      accentColor: "from-red-500 to-orange-500",
      image: imgs.clubCrowd,
    },
    {
      id: "tollywood",
      title: "Tollywood Night",
      tagline: "Telugu & South Indian Vibes",
      description:
        "Mass beats from Tollywood, foot-tapping Telugu hits, and South Indian fusion. Ideal for Telugu association events, Ugadi, Sankranti, and community galas.",
      highlights: [
        "Latest Telugu mass songs",
        "Classic Tollywood hits",
        "Ugadi & Sankranti specials",
        "Telugu wedding receptions",
      ],
      gradientClass: "gradient-text-tollywood",
      borderClass: "neon-border-tollywood",
      accentColor: "from-yellow-500 to-orange-600",
      image: imgs.festival,
    },
    {
      id: "hollywood",
      title: "Hollywood Night",
      tagline: "Top 40 · EDM · Hip-Hop",
      description:
        "American club energy meets Desi flavor. Top 40, EDM drops, hip-hop bangers — perfect for mixed crowds at corporate events, NYE parties, and club nights.",
      highlights: [
        "Top 40 & Billboard hits",
        "EDM & festival drops",
        "Hip-hop & R&B sets",
        "Desi × Western fusion mixes",
      ],
      gradientClass: "gradient-text-hollywood",
      borderClass: "neon-border-hollywood",
      accentColor: "from-purple-600 to-cyan-500",
      image: imgs.party,
    },
  ],

  communities: {
    title: "Serving Indian Communities Across America",
    cities: [
      "Dallas", "Houston", "Austin", "New Jersey", "New York",
      "Bay Area", "Chicago", "Atlanta", "Seattle", "Los Angeles",
      "Phoenix", "Charlotte", "Boston", "DC Metro", "Detroit",
    ],
    description:
      "Trusted by Indian associations, event organizers, and families in 50+ cities. I travel nationwide for your Desi celebration.",
  },

  about: {
    title: "About Me",
    photo: imgs.djPortrait,
    paragraphs: [
      "I'm Arjun Sharma — known as DJ Desi Beats. Born in Hyderabad, raised in Dallas, I've spent 10+ years making Indian communities across America dance like they're back home.",
      "I specialize in Bollywood, Tollywood, and Hollywood fusion sets. Whether it's a 200-guest sangeet in New Jersey or a 2,000-person Diwali festival in Houston, I know exactly when to drop that Arijit Singh slow song and when to switch to a Ram Charan mass beat.",
      "Trusted by Telugu associations, Gujarati garba organizers, Punjabi dhol teams, and Tamil community groups — I bring professional sound, seamless mixing, and energy that keeps every generation on the floor.",
    ],
    stats: [
      { value: "600+", label: "Desi Events" },
      { value: "10+", label: "Years Experience" },
      { value: "50+", label: "US Cities" },
      { value: "100%", label: "5-Star Reviews" },
    ],
  },

  mixes: [
    {
      title: "Bollywood Wedding Sangeet Mix",
      genre: "Bollywood / Hindi",
      duration: "75 min",
      embedUrl:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/demo&color=%23ff9933",
      coverImage: imgs.wedding,
      plays: "18.2K",
    },
    {
      title: "Tollywood Mass Beats Vol. 2",
      genre: "Telugu / Tollywood",
      duration: "60 min",
      embedUrl:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/demo&color=%23ff9933",
      coverImage: imgs.festival,
      plays: "14.5K",
    },
    {
      title: "Diwali Festival Mix 2025",
      genre: "Bollywood / Punjabi / Fusion",
      duration: "90 min",
      embedUrl:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/demo&color=%23ff9933",
      coverImage: imgs.diwali,
      plays: "22.8K",
    },
    {
      title: "Desi × Hollywood Club Mix",
      genre: "Fusion / Top 40 / EDM",
      duration: "55 min",
      embedUrl:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/demo&color=%23ff9933",
      coverImage: imgs.concert,
      plays: "9.3K",
    },
  ],

  services: [
    {
      icon: "bollywood",
      title: "Bollywood Nights",
      description:
        "Sangeets, mehendi, reception — full Bollywood experience with latest hits and classic throwbacks.",
      startingPrice: "$1,200",
    },
    {
      icon: "tollywood",
      title: "Tollywood Events",
      description:
        "Telugu weddings, Ugadi, Sankranti, community galas — mass beats that get every auntie dancing.",
      startingPrice: "$1,200",
    },
    {
      icon: "wedding",
      title: "Indian Weddings",
      description:
        "Multi-day coverage: sangeet, mehendi, baraat, reception. Coordination with dhol teams & planners.",
      startingPrice: "$2,500",
    },
    {
      icon: "festival",
      title: "Community Festivals",
      description:
        "Diwali melas, garba nights, Holi parties, cultural association events — stage-ready production.",
      startingPrice: "$1,800",
    },
    {
      icon: "corporate",
      title: "Corporate & College",
      description:
        "Company Diwali parties, college Indian student association events, networking galas.",
      startingPrice: "$1,000",
    },
    {
      icon: "party",
      title: "Private Desi Parties",
      description:
        "Birthdays, graduations, house parties — I'll bring the speakers and the perfect Desi playlist.",
      startingPrice: "$800",
    },
  ],

  pastEvents: [
    {
      name: "TANA Convention After-Party",
      location: "Dallas, TX",
      date: "July 2025",
      attendees: "2,500+",
      type: "Tollywood",
      image: imgs.festival,
    },
    {
      name: "Diwali Mela — NJ Indian Association",
      location: "Edison, NJ",
      date: "November 2024",
      attendees: "3,000+",
      type: "Bollywood",
      image: imgs.diwali,
    },
    {
      name: "Priya & Rahul Sangeet",
      location: "Houston, TX",
      date: "September 2024",
      attendees: "350",
      type: "Bollywood",
      image: imgs.wedding,
    },
    {
      name: "Garba Night — Gujarati Samaj",
      location: "Atlanta, GA",
      date: "October 2024",
      attendees: "800+",
      type: "Bollywood",
      image: imgs.hero,
    },
    {
      name: "Telugu Association Annual Gala",
      location: "Bay Area, CA",
      date: "August 2024",
      attendees: "600",
      type: "Tollywood",
      image: imgs.event,
    },
    {
      name: "NYE Bollywood Bash",
      location: "Chicago, IL",
      date: "December 2024",
      attendees: "1,200+",
      type: "Hollywood",
      image: imgs.party,
    },
  ],

  testimonials: [
    {
      quote:
        "DJ Desi Beats made our sangeet unforgettable! He knew exactly when to play old Kishore Kumar for the elders and Badshah for us youngsters. Dance floor was packed all night!",
      name: "Priya & Rahul K.",
      event: "Wedding Sangeet — Houston, TX",
      rating: 5,
    },
    {
      quote:
        "We've used him for 3 years at our Diwali Mela. He understands Indian crowds — knows the difference between a garba set and a Bollywood set. Highly recommend for any association event.",
      name: "Rajesh Patel",
      event: "Event Chair — NJ Indian Association",
      rating: 5,
    },
    {
      quote:
        "Best Tollywood DJ in Texas! He played every mass song we requested and the energy was insane. Our Telugu association gala was the talk of the town.",
      name: "Srinivas Reddy",
      event: "Telugu Association Gala — Dallas, TX",
      rating: 5,
    },
  ],

  gallery: [
    imgs.hero,
    imgs.diwali,
    imgs.wedding,
    imgs.clubCrowd,
    imgs.party,
    imgs.festival,
    imgs.event,
    imgs.djPortrait,
  ],

  booking: {
    title: "Book Your Event",
    subtitle:
      "Tell me about your Desi celebration — I'll respond within 24 hours with availability and a custom quote.",
    eventTypes: [
      "Bollywood Night",
      "Tollywood Night",
      "Hollywood / Club Night",
      "Indian Wedding (Sangeet/Mehendi/Reception)",
      "Diwali / Festival Event",
      "Garba / Navratri Night",
      "Community / Association Event",
      "Corporate Desi Party",
      "Private Birthday / House Party",
      "Other",
    ],
    demoMode: true,
  },
};
