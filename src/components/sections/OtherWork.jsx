import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'
import { otherWork } from '../../data/otherWork.js'

function OtherWorkCard({ project }) {
  const { ref, reveal } = useScrollReveal()
  return (
    <motion.div ref={ref} {...reveal} className="rounded-lg border border-surface-2 bg-surface p-6">
      <h3 className="font-display text-xl font-medium">{project.title}</h3>
      <p className="mt-2 max-w-[58ch] text-ink-muted">{project.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <li key={t} className="rounded-full bg-surface-2 px-3 py-1 text-xs">
            {t}
          </li>
        ))}
      </ul>
      <a
        href={project.link}
        target="_blank"
        rel="noopener"
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium hover:text-accent"
      >
        View source →
      </a>
    </motion.div>
  )
}

export default function OtherWork() {
  const eyebrow = useScrollReveal()

  return (
    <section id="other-work" className="mx-auto max-w-5xl px-6 py-16">
      <motion.span ref={eyebrow.ref} {...eyebrow.reveal} className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
        Other work
      </motion.span>

      <div className="mt-6 grid gap-4">
        {otherWork.map((project) => (
          <OtherWorkCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
