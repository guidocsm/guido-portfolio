export interface ProjectImage {
  src: string
  alt: string
  type: "mobile" | "desktop" | "terminal" | "wireframe"
}

export interface UxProcess {
  title: string
  description: string
}

export interface UserTestInsight {
  area: string
  finding: string
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
  uxProcess?: UxProcess[]
  userTestInsights?: UserTestInsight[]
  keyFindings?: string[]
  figmaUrl?: string
  images: ProjectImage[]
  thumbnail: string
  cover: string
  url?: string
}

export const projects: Project[] = [
  {
    slug: "turbowash-terminal",
    title: "Turbowash Terminal",
    subtitle: "Payment interface for automated car wash kiosks",
    url: "https://turbowash.es/",
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
    url: "https://turbowash.es/",
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
    url: "https://imp0stor.netlify.app/",
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
    slug: "iryo-booking-redesign",
    title: "Iryo Booking Redesign",
    subtitle: "UX/UI redesign of the ticket purchasing experience for Spain's high-speed rail operator",
    role: "UX/UI Design",
    year: "2024",
    stack: ["Figma", "User Research", "Usability Testing", "Wireframing", "Prototyping"],
    tags: ["Figma"],
    challenge:
      "Iryo's ticket purchasing platform presented multiple usability issues: confusing ticket type hierarchy, frustrating seat selection, intrusive upselling of add-ons, and a passenger form that blurred the line between buyer and traveler data. Users rated the experience between 3 and 9 out of 10, with an average around 6.",
    myRole:
      "End-to-end UX/UI design process: mapped the full user journey, conducted 9 moderated usability tests on the existing platform, synthesized findings into actionable insights, and designed high-fidelity wireframes addressing every identified pain point.",
    features: [
      "Searchable origin/destination fields replacing scroll-only dropdowns",
      "Clearer ticket type hierarchy with visual differentiation between Inicial, Singular and Infinita Bistro",
      "Redesigned seat selection with coach dropdown navigator and real-time price feedback",
      "Streamlined upgrade flow with explicit pricing and visual confirmation states",
      "Improved passenger forms separating buyer from traveler data clearly",
      "Non-intrusive complementary services that don't block the purchase flow",
    ],
    uxProcess: [
      {
        title: "User Journey Mapping",
        description: "Documented the complete 7-step purchase flow from destination selection through seat assignment, identifying each decision point and potential friction area."
      },
      {
        title: "Usability Testing (9 users)",
        description: "Conducted moderated tests observing real users navigate the existing platform. Captured confusion points, emotional responses, and task completion barriers at each stage."
      },
      {
        title: "Insight Synthesis",
        description: "Analyzed test results to identify 4 critical problem areas: visual hierarchy, form design, seat selection UX, and add-on intrusiveness."
      },
      {
        title: "Wireframing & Prototyping",
        description: "Designed high-fidelity wireframes in Figma addressing every pain point, then built interactive prototypes for each step of the redesigned flow."
      },
    ],
    userTestInsights: [
      {
        area: "Ticket Selection",
        finding: "Users couldn't distinguish between ticket types (Inicial, Singular, Infinita Bistro). Colors and naming were confusing, with no quick way to compare what each includes."
      },
      {
        area: "Seat Selection",
        finding: "Navigating between coaches required going one-by-one. Price changes from seat selection weren't shown in real-time, and the X icon to deselect was mistaken for deleting a passenger."
      },
      {
        area: "Passenger Forms",
        finding: "Users confused the buyer form with the traveler form. Data felt disorganized and duplicated, with no clear separation between who pays and who travels."
      },
      {
        area: "Add-ons & Upselling",
        finding: "Complementary services expanded intrusively, hiding the continue button. Users felt they lost focus and couldn't easily skip optional purchases."
      },
    ],
    keyFindings: [
      "Average user satisfaction: 6.2/10 -- with scores ranging from 3 to 9",
      "Most confusing step: seat selection and passenger forms (cited by 7 of 9 users)",
      "Users wanted searchable text input for station selection instead of scroll-only dropdowns",
      "Price transparency was a recurring demand -- users wanted to know costs before committing",
      "Visual hierarchy was rated as the top improvement area across all test participants",
    ],
    results: [
      "Complete high-fidelity wireframe set covering all 5 purchase steps",
      "9 moderated usability tests with detailed findings documentation",
      "Actionable redesign proposals backed by real user feedback",
      "Improved information architecture separating buyer, traveler, and payment data",
    ],
    figmaUrl: "https://www.figma.com/design/qVgpKOx3AKkcHmHin5xduz/Iryo?node-id=1-7&t=zuFJSsDbA04gNwNX-1",
    thumbnail: "/images/iryo-1.png",
    cover: "/images/cover-iryo.jpg",
    images: [
      {
        src: "/images/iryo-1.png",
        alt: "Iryo current homepage with destination selector and promotional banner",
        type: "mobile",
      },
      {
        src: "/images/iryo-2.png",
        alt: "Iryo current schedule view with train times and ticket type pricing",
        type: "mobile",
      },
      {
        src: "/images/iryo-3.png",
        alt: "Iryo current seat selection with coach navigator and passenger assignment",
        type: "mobile",
      },
      {
        src: "/images/iryo-4.png",
        alt: "Wireframe: redesigned destination and date selection with searchable inputs",
        type: "wireframe",
      },
      {
        src: "/images/iryo-5.png",
        alt: "Wireframe: redesigned schedule view with filters, upgrade flow and ticket details",
        type: "wireframe",
      },
      {
        src: "/images/iryo-6.png",
        alt: "Wireframe: redesigned seat selection with coach dropdown and real-time price updates",
        type: "wireframe",
      },
    ],
  },
  {
    slug: "wetour",
    title: "Wetour",
    subtitle: "Community platform for Spain's leading fitness network",
    url: "https://wetourfit.com/",
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
    url: "https://www.goiko.com/es/delivery",
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
