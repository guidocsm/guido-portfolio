export interface ProjectImage {
  src: string
  alt: string
  type: "mobile" | "desktop" | "terminal"
}

export interface Project {
  slug: string
  title: string
  subtitle: string
  role: string
  year: string
  stack: string[]
  tags: string[]
  challenge: string
  myRole: string
  features: string[]
  results: string[]
  howItWorks?: string[]
  whyBuilt?: string[]
  images: ProjectImage[]
  thumbnail: string
  cover: string
}

export const projects: Project[] = [
  {
    slug: "turbowash-terminal",
    title: "Turbowash Terminal",
    subtitle: "Payment interface for automated car wash kiosks",
    role: "Design + Development",
    year: "2025",
    stack: ["React Native", "Expo", "Figma", "Hardware Integration"],
    tags: ["Figma", "React Native"],
    challenge:
      "Turbowash needed a payment interface for outdoor kiosks \u2014 crystal clear in bright sunlight, supporting card and cash, and communicating with wash hardware via pulse signals.",
    myRole:
      "Complete UX/UI design in Figma and frontend development in React Native. Key challenge: integrating real-time pulse communication for wash start, pause, and completion states.",
    features: [
      "Card and cash payment support",
      "Time-based and euro-based wash modes",
      "Real-time pulse communication with hardware",
      "Outdoor-optimized UI (high contrast, large touch targets)",
    ],
    results: [
      "Deployed across 5+ locations processing real transactions daily",
      "Zero-training interface \u2014 customers use it without assistance",
    ],
    thumbnail: "/images/turbowash-terminal-1.png",
    cover: "/images/cover-turbowash.png",
    images: [
      {
        src: "/images/turbowash-terminal-1.png",
        alt: "Turbowash terminal home screen with pay-per-use pricing",
        type: "terminal",
      },
      {
        src: "/images/turbowash-terminal-2.png",
        alt: "Turbowash wash in progress with countdown timer",
        type: "terminal",
      },
      {
        src: "/images/turbowash-terminal-3.png",
        alt: "Turbowash active wash with elapsed time and amount",
        type: "terminal",
      },
      {
        src: "/images/turbowash-terminal-4.png",
        alt: "Turbowash club member pricing with bonus credits",
        type: "terminal",
      },
      {
        src: "/images/turbowash-terminal-5.png",
        alt: "Turbowash coupon selection screen",
        type: "terminal",
      },
    ],
  },
  {
    slug: "turbowash-portal",
    title: "Turbowash Client Portal",
    subtitle: "Customer dashboard for vehicle and service management",
    role: "Design + Development",
    year: "2025",
    stack: ["React", "Figma", "REST API Integration"],
    tags: ["Figma", "React"],
    challenge:
      "Turbowash customers needed a way to manage their accounts online \u2014 wash history, vehicles, invoices, and loyalty coupons. Premium feel, simple navigation.",
    myRole:
      "Interface design in Figma and frontend development. Key sections: user profile, vehicle management with type/color selector, invoice history, and coupon system.",
    features: [
      "Vehicle management with visual type/color selector",
      "Service history with detailed wash records",
      "Invoice download and billing management",
      "Loyalty program with coupon redemption",
    ],
    results: [
      "Clean, intuitive dashboard serving Turbowash customers",
      "Reduced support requests for billing inquiries",
    ],
    thumbnail: "/images/turbowash-area-cliente-1.png",
    cover: "/images/cover-turbowash.png",
    images: [
      {
        src: "/images/turbowash-area-cliente-1.png",
        alt: "Turbowash client dashboard with QR code and service history",
        type: "mobile",
      },
      {
        src: "/images/turbowash-area-cliente-2.png",
        alt: "Turbowash loyalty coupons list",
        type: "mobile",
      },
      {
        src: "/images/turbowash-area-cliente-3.png",
        alt: "Turbowash vehicle management screen",
        type: "mobile",
      },
    ],
  },
  {
    slug: "impostor-game",
    title: "Impostor Game",
    subtitle: "A party game about deception and deduction",
    role: "Design + Development (Personal Project)",
    year: "2025",
    stack: ["React", "Figma"],
    tags: ["Figma", "React"],
    challenge:
      "A digital version of a social deduction game I love. Everyone receives a secret word except the impostor, who must blend in while others try to identify them through word clues.",
    myRole:
      "Personal project from start to finish \u2014 game flow design, visual identity in Figma, and full development in React.",
    features: [
      "Theme and secret word selection",
      "Role assignment with hidden impostor",
      "Turn-based clue giving system",
      "Voting and reveal mechanics",
    ],
    howItWorks: [
      "Choose a theme and secret word",
      "All players except the impostor see the word",
      "Players take turns giving one-word clues",
      "Vote on who you think is the impostor",
      "Impostor wins if they stay hidden or guess the word",
    ],
    whyBuilt: [
      "Creating things that bring people together",
      "Challenge myself with game logic and state management",
      "Perfect excuse to obsess over micro-interactions",
    ],
    results: [
      "Successfully used at multiple game nights",
      "Friends keep asking me to add new features",
    ],
    thumbnail: "/images/impostor-1.png",
    cover: "/images/cover-impostor.png",
    images: [
      {
        src: "/images/impostor-1.png",
        alt: "Impostor game role reveal screen",
        type: "mobile",
      },
      {
        src: "/images/impostor-2.png",
        alt: "Impostor game lobby with room code and players",
        type: "mobile",
      },
      {
        src: "/images/impostor-3.png",
        alt: "Impostor game configuration with categories",
        type: "mobile",
      },

    ],
  },
  {
    slug: "wetour",
    title: "Wetour",
    subtitle: "Community platform for Spain's leading fitness network",
    role: "Design + Development",
    year: "2024",
    stack: ["Next.js", "React", "Figma", "SEO Optimization"],
    tags: ["Figma", "Next.js"],
    challenge:
      "Wezone, a fitness network with 11 centers and 15K+ active members, needed a platform to unify their community \u2014 discover events, connect with sports centers, and engage with content.",
    myRole:
      "End-to-end design and frontend development. UX research, visual design in Figma, and production build with Next.js (SEO-first).",
    features: [
      "300+ sports centers directory",
      "800+ monthly events with registration",
      "Gamification system (challenges, WZN passport)",
      "Payment integration for event subscriptions",
      "1.2K+ community publications",
    ],
    results: [
      "Platform live with organic growth via SEO-first architecture",
      "New revenue stream through paid event registrations",
    ],
    thumbnail: "/images/wetour-desktop-5.png",
    cover: "/images/cover-wetour.png",
    images: [
      {
        src: "/images/wetour-desktop-5.png",
        alt: "WeTour community feed with topic filters and publications",
        type: "desktop",
      },
      {
        src: "/images/wetour-desktop-6.png",
        alt: "WeTour gym detail page showing Wezone Plaza Castilla",
        type: "desktop",
      },
      {
        src: "/images/wetour-desktop-4.png",
        alt: "WeTour user profile with badges and achievements",
        type: "desktop",
      },
      {
        src: "/images/wetour-mobile-1.png",
        alt: "WeTour mobile events listing",
        type: "mobile",
      },
      {
        src: "/images/wetour-mobile-2.png",
        alt: "WeTour mobile map view with gym locations",
        type: "mobile",
      },
      {
        src: "/images/wetour-mobile-3.png",
        alt: "WeTour mobile gym detail with reviews",
        type: "mobile",
      },
    ],
  },
  {
    slug: "goiko-ordering",
    title: "Goiko Ordering",
    subtitle:
      "Full eCommerce platform for Spain's iconic burger chain",
    role: "Frontend Development",
    year: "2022-2023",
    stack: ["Vue 3", "Vuex", "JavaScript", "Paycomet", "Deliverect", "Google Maps API"],
    tags: ["Vue"],
    challenge:
      "Goiko, one of Spain's most recognized burger chains with 100+ locations, needed a custom online ordering platform. The solution had to handle delivery and pickup orders, integrate with multiple third-party services, and provide a seamless experience that matched their bold brand identity.",
    myRole:
      "I was responsible for the frontend development of the entire eCommerce platform. Working closely with backend developers and the design team, I built a fast, responsive application that handles real orders across all their locations daily.",
    features: [
      "Geolocation-based restaurant assignment for delivery and pickup",
      "Password-less authentication via magic link email",
      "Real-time order tracking with rider location on Google Maps",
      "Automatic menu sync with Deliverect across all locations",
      "Paycomet integration for secure card payments with tokenization",
      "Scheduled orders based on kitchen capacity",
      "Smart upselling at cart and checkout stages",
      "Coupon validation integrated with Goiko's BI platform",
    ],
    results: [
      "Live platform processing real orders daily across 100+ locations",
      "Seamless integration with existing POS systems via Deliverect",
      "Reduced dependency on third-party delivery apps",
      "Conversion tracking feeding directly into business intelligence",
    ],
    thumbnail: "/images/goiko-desktop-1.png",
    cover: "/images/cover-goiko.png",
    images: [
      {
        src: "/images/goiko-desktop-1.png",
        alt: "Goiko product detail modal with burger customization options",
        type: "desktop",
      },
      {
        src: "/images/goiko-desktop-5.png",
        alt: "Goiko desktop checkout with order summary sidebar",
        type: "desktop",
      },
      {
        src: "/images/goiko-mobile-2.png",
        alt: "Goiko mobile menu with combos and burger categories",
        type: "mobile",
      },
      {
        src: "/images/goiko-mobile-3.png",
        alt: "Goiko mobile cart with order items and total",
        type: "mobile",
      },
      {
        src: "/images/goiko-mobile-4.png",
        alt: "Goiko mobile checkout with personal data and pickup details",
        type: "mobile",
      },
    ],
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug)
  const prev = index > 0 ? projects[index - 1] : null
  const next = index < projects.length - 1 ? projects[index + 1] : null
  return { prev, next }
}
