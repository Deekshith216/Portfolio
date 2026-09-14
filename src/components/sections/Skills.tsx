import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal.ts'
import SectionHeading from '../ui/SectionHeading.tsx'
import { skillGroups } from '../../data/skills.ts'

function SkillCard({ category, items, index }: { category: string; items: string[]; index: number }) {
  const { ref, reveal } = useScrollReveal()
  return (
    <motion.div
      ref={ref}
      {...reveal}
      transition={{ ...reveal.transition, delay: (index % 3) * 0.06 }}
      className="group rounded-xl border border-border bg-surface/60 p-6 backdrop-blur-sm transition-colors hover:border-accent/50"
    >
      <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent-2">{category}</h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-md border border-border bg-surface-2/70 px-3 py-1.5 text-sm text-ink-muted transition-colors group-hover:text-ink"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:px-8">
      <SectionHeading
        eyebrow="Skills"
        title="Tools I use to"
        accent="ship real systems."
        description="No percentages — just the stack I actually build with, day to day."
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <SkillCard key={group.category} category={group.category} items={group.items} index={i} />
        ))}
      </div>
    </section>
  )
}
