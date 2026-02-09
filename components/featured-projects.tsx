"use client"

import { motion } from "framer-motion"
import { projects } from "@/lib/projects"
import { ProjectCard } from "@/components/project-card"

export function FeaturedProjects() {
  return (
    <section id="work" className="px-6 py-14">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8"
        >
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Selected Work
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
