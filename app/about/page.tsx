import type { Metadata } from "next"
import { AboutContent } from "@/components/about-content"

export const metadata: Metadata = {
  title: "About — Guido Ignacio Crespo",
  description:
    "UX Engineer based in Madrid with 4 years of experience bridging the gap between design and development.",
}

export default function AboutPage() {
  return <AboutContent />
}
