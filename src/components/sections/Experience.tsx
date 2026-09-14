import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal.ts'
import SectionHeading from '../ui/SectionHeading.tsx'
import { experience, type ExperienceEntry } from '../../data/experience.ts'

function ExperienceItem({ item }: { item: ExperienceEntry }) {
  const { ref, reveal } = useScrollReveal()

  return (
    <motion.div ref={ref} {...reveal} className="relative border-l border-border pb-14 pl-8 last:pb-0">
      <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg" />

      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-xl font-semibold text-ink">{item.role}</h3>
        <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent-2">{item.when}</span>
      </div>
      <p className="mt-1 text-ink-muted">
        {item.company} · {item.location}
      </p>

      {item.description && <p className="mt-4 max-w-2xl leading-relaxed text-ink-muted">{item.description}</p>}

      {item.bullets && (
        <ul className="mt-4 max-w-2xl space-y-2">
          {item.bullets.map((b) => (
            <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-ink-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {b}
            </li>
          ))}
        </ul>
      )}

      {item.tech && (
        <div className="mt-5 flex flex-wrap gap-2">
          {item.tech.map((t) => (
            <span key={t} className="rounded-md border border-border bg-surface-2/70 px-2.5 py-1 font-mono text-xs text-ink-muted">
              {t}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 mx-auto max-w-4xl px-6 py-24 md:px-8">
      <SectionHeading eyebrow="Experience" title="Where I've" accent="been building." />

      <div className="mt-12">
        {experience.map((item) => (
          <ExperienceItem key={item.role + item.company} item={item} />
        ))}
      </div>
    </section>
  )
}
