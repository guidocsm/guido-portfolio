"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { getProject, getAdjacentProjects } from "@/lib/projects"
import { ImageCarousel } from "@/components/image-carousel"
import { TechTag } from "@/components/tech-tag"
import { ExternalLink } from "lucide-react"

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
}

export function ProjectDetail({ slug }: { slug: string }) {
  const project = getProject(slug)
  if (!project) return null

  const { prev, next } = getAdjacentProjects(slug)

  return (
    <div className="px-6 pb-20 pt-28">
      <div className="mx-auto max-w-4xl">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Link
            href="/#work"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {"\u2190 All Projects"}
          </Link>
        </motion.div>

        {/* Title row with circular cover */}
        <motion.div
          className="mt-6 flex items-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-border sm:h-20 sm:w-20">
            <Image
              src={project.cover || "/placeholder.svg"}
              alt={`${project.title} logo`}
              fill
              className="object-cover"
              sizes="80px"
              priority
            />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
              {project.title}
            </h1>
            <p className="mt-1 text-base text-muted-foreground">
              {project.subtitle}
            </p>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-sm text-primary transition-opacity hover:opacity-80"
              >
                Visit project <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </motion.div>

        {/* Meta tags */}
        <motion.div
          className="mt-5 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {project.tags.map((tag) => (
            <TechTag key={tag} tag={tag} />
          ))}
          <span className="rounded-md bg-secondary px-3 py-1.5 text-xs text-muted-foreground">
            {project.year}
          </span>
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Challenge & Role — 2-column grid */}
        <motion.div {...fadeUp} className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-5">
            <h2 className="text-xs font-medium uppercase tracking-widest text-primary">
              The Challenge
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              {project.challenge}
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <h2 className="text-xs font-medium uppercase tracking-widest text-primary">
              My Role
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              {project.myRole}
            </p>
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          {...fadeUp}
          className="mt-4 rounded-xl border border-border bg-card p-5"
        >
          <h2 className="text-xs font-medium uppercase tracking-widest text-primary">
            Key Features
          </h2>
          <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
            {project.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/80"
              >
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* How It Works (for Impostor Game) */}
        {project.howItWorks && (
          <motion.div
            {...fadeUp}
            className="mt-4 rounded-xl border border-border bg-card p-5"
          >
            <h2 className="text-xs font-medium uppercase tracking-widest text-primary">
              How It Works
            </h2>
            <ol className="mt-3 space-y-2.5">
              {project.howItWorks.map((step, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/80"
                >
                  <span className="mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary text-xs text-primary">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </motion.div>
        )}

        {/* Why I Built This */}
        {project.whyBuilt && (
          <motion.div
            {...fadeUp}
            className="mt-4 rounded-xl border border-border bg-card p-5"
          >
            <h2 className="text-xs font-medium uppercase tracking-widest text-primary">
              Why I Built This
            </h2>
            <ul className="mt-3 space-y-2.5">
              {project.whyBuilt.map((reason, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/80"
                >
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {reason}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Results */}
        <motion.div
          {...fadeUp}
          className="mt-4 rounded-xl border border-border bg-card p-5"
        >
          <h2 className="text-xs font-medium uppercase tracking-widest text-primary">
            The Outcome
          </h2>
          <ul className="mt-3 space-y-2.5">
            {project.results.map((result, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/80"
              >
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {result}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Image Carousel */}
        {project.images.length > 0 && (
          <motion.div {...fadeUp} className="mt-12">
            <h2 className="mb-5 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Gallery
            </h2>
            <ImageCarousel images={project.images} />
          </motion.div>
        )}

        {/* Navigation */}
        <div className="mt-12 h-px bg-border" />
        <div className="mt-6 flex items-center justify-between">
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="transition-transform group-hover:-translate-x-1">
                {"\u2190"}
              </span>
              {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {next.title}
              <span className="transition-transform group-hover:translate-x-1">
                {"\u2192"}
              </span>
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </div>
  )
}
