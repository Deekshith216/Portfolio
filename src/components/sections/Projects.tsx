import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal.ts'
import SectionHeading from '../ui/SectionHeading.tsx'
import { projects, type Project } from '../../data/projects.ts'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, reveal } = useScrollReveal<HTMLElement>()

  return (
    <motion.article
      ref={ref}
      {...reveal}
      transition={{ ...reveal.transition, delay: (index % 2) * 0.08 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-surface/60 p-7 backdrop-blur-sm transition-colors hover:border-accent/50 md:p-8"
    >
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-2">{project.category}</span>
      <h3 className="mt-2 text-2xl font-bold text-ink">{project.title}</h3>
      <p className="mt-3 leading-relaxed text-ink-muted">{project.description}</p>

      {project.features.length > 0 && (
        <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
          {project.features.map((f) => (
            <li key={f} className="flex gap-2 text-sm text-ink-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {f}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="rounded-md border border-border bg-surface-2/70 px-2.5 py-1 font-mono text-xs text-ink-muted">
            {t}
          </span>
        ))}
      </div>

      {(project.viewUrl || project.githubUrl) && (
        <div className="mt-7 flex flex-wrap gap-3">
          {project.viewUrl && (
            <a
              href={project.viewUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              View Project
              <ArrowUpRight size={15} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent"
            >
              <Github size={15} />
              GitHub
            </a>
          )}
        </div>
      )}
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:px-8">
      <SectionHeading eyebrow="Projects" title="Things I've" accent="actually built." />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
