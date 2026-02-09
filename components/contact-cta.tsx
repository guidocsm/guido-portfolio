"use client"

import { motion } from "framer-motion"

export function ContactCTA() {
  return (
    <section className="px-6 py-14">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-balance text-2xl font-medium tracking-tight sm:text-3xl">
            {"Let\u2019s work together"}
          </h2>
          <p className="mt-4 text-muted-foreground">
            Have a project in mind? I'd love to hear about it.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
            <a
              href="mailto:guidoignaciocrespo@gmail.com"
              className="inline-flex h-10 items-center rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              guidoignaciocrespo@gmail.com
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center rounded-lg border border-border px-5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {'LinkedIn \u2197'}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
