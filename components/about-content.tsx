"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const designSkills = [
  "Figma",
  "UX Research",
  "Usability Testing",
  "Prototyping",
  "Design Systems",
  "Accessibility",
]

const devSkills = [
  "React",
  "Next.js",
  "Vue 3",
  "React Native",
  "Expo",
  "Vite",
  "Zustand",
  "Git",
]

const education = [
  { year: "2025", label: "Design-Led Strategy" },
  { year: "2024", label: "UX Specialization \u2014 UX Learn Academy" },
  { year: "2024", label: "Enterprise UX Design \u2014 Shifta Academy" },
  { year: "2022", label: "Full-Stack Web Development \u2014 Ironhack" },
]

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
}

export function AboutContent() {
  return (
    <div className="px-6 pb-20 pt-28">
      <div className="mx-auto max-w-3xl">
        {/* Heading + Photo */}
        <motion.div {...fadeUp} className="flex items-center gap-6">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-border sm:h-24 sm:w-24">
            <Image
              src="/images/profile.jpg"
              alt="Guido Ignacio Crespo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
            About Me
          </h1>
        </motion.div>

        {/* Professional story */}
        <motion.div {...fadeUp} className="mt-8 space-y-4">
          <p className="text-base leading-relaxed text-muted-foreground">
            {"I\u2019m a UX Engineer based in Madrid with 4 years of experience bridging the gap between design and development."}
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            I started as a Full-Stack developer at Ironhack, but quickly
            gravitated toward the intersection of design and code. Today, I
            design interfaces in Figma and build them with React, Next.js, Vue,
            and React Native.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            This dual expertise means I can take a product from research and
            wireframes to pixel-perfect, production-ready code — eliminating
            handoff friction and accelerating iteration cycles.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            {"I\u2019ve worked with clients ranging from restaurant chains with 100+ locations to fitness networks with 15K+ members, always focused on creating products that are both beautiful and functional."}
          </p>
        </motion.div>

        {/* Divider */}
        <div className="my-10 h-px bg-border" />

        {/* Beyond work */}
        <motion.div {...fadeUp}>
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Beyond Work
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {"When I\u2019m not designing or coding, you\u2019ll find me exploring new places, playing board games with friends, or keeping up with the latest in tech and design. I believe the best digital products come from people who are curious about the world beyond screens."}
          </p>
        </motion.div>

        {/* Divider */}
        <div className="my-10 h-px bg-border" />

        {/* Skills */}
        <motion.div {...fadeUp}>
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Skills
          </h2>

          <div className="mt-6 grid gap-8 sm:grid-cols-2">
            {/* Design */}
            <div>
              <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-foreground/70">
                Design
              </h3>
              <div className="flex flex-wrap gap-2">
                {designSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-secondary px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Development */}
            <div>
              <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-foreground/70">
                Development
              </h3>
              <div className="flex flex-wrap gap-2">
                {devSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-secondary px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="my-10 h-px bg-border" />

        {/* Education */}
        <motion.div {...fadeUp}>
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Education
          </h2>

          <div className="mt-6 space-y-0">
            {education.map((item, i) => (
              <div
                key={i}
                className="flex items-baseline gap-6 border-b border-border py-4 first:border-t"
              >
                <span className="shrink-0 text-sm tabular-nums text-primary">
                  {item.year}
                </span>
                <span className="text-sm text-muted-foreground">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
