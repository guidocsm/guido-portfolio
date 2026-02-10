"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative flex min-h-[70vh] items-center px-6 pt-20">
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-12">
          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="shrink-0"
          >
            <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-border sm:h-32 sm:w-32">
              <Image
                src="/images/profile.jpg"
                alt="Guido Ignacio Crespo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Text content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <p className="mb-3 text-sm tracking-wide text-muted-foreground">
                UX Engineer &middot; Design Engineer
              </p>
              <h1 className="text-balance text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Guido Ignacio Crespo
              </h1>
            </motion.div>

            <motion.p
              className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              I design interfaces and build them. 4 years bridging design and
              development across 20+ projects — eliminating handoff friction and
              shipping products that actually work.
            </motion.p>

            <motion.div
              className="mt-3 text-sm text-muted-foreground/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.25,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              Based in Madrid &middot; Open to remote (EU)
            </motion.div>

            <motion.div
              className="mt-6 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.35,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Link
                href="/#work"
                className="inline-flex h-10 items-center rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                View Work
              </Link>
              <Link
                href="/about"
                className="inline-flex h-10 items-center rounded-lg border border-border px-5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                About Me
              </Link>
              <a
                href="https://www.linkedin.com/in/guidocsm/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center rounded-lg border border-border px-5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                LinkedIn
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
