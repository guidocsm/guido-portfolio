"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import type { Project } from "@/lib/projects"
import { TechTag } from "@/components/tech-tag"

export function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group flex items-start gap-4 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/30 hover:bg-card/80"
      >
        {/* Circular cover */}
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-border sm:h-20 sm:w-20">
          <Image
            src={project.cover || "/placeholder.svg"}
            alt={`${project.title} logo`}
            fill
            className="object-cover"
            sizes="80px"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base font-medium text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <span className="shrink-0 text-xs text-muted-foreground">
              {project.year}
            </span>
          </div>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {project.subtitle}
          </p>
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <TechTag key={tag} tag={tag} />
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
