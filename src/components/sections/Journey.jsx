import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'
import { experience, education } from '../../data/journey.js'

function TimelineItem({ item }) {
  const { ref, reveal } = useScrollReveal()
  return (
    <motion.li ref={ref} {...reveal} className="relative border-b border-surface-2 py-5 pl-0 last:border-b-0">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h4 className="font-display text-[clamp(1.3rem,2.2vw,1.75rem)] font-medium leading-tight">{item.role}</h4>
        <span className="whitespace-nowrap text-xs font-medium uppercase tracking-[0.18em] text-accent">
          {item.when}
        </span>
      </div>
      <p className="mt-1.5 text-ink-muted">
        <b className="font-medium text-ink">{item.company}</b>
        {item.location ? ` · ${item.location}` : ''}
      </p>
      {item.description && <p className="mt-3 max-w-[68ch] leading-relaxed text-ink-muted">{item.description}</p>}
    </motion.li>
  )
}

function Timeline({ label, items }) {
  const sub = useScrollReveal()
  return (
    <div>
      <motion.p ref={sub.ref} {...sub.reveal} className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
        {label}
      </motion.p>
      <ol className="mt-4 border-l-2 border-accent/45 pl-6">
        {items.map((item) => (
          <TimelineItem key={item.role} item={item} />
        ))}
      </ol>
    </div>
  )
}

export default function Journey() {
  const eyebrow = useScrollReveal()
  const title = useScrollReveal()

  return (
    <section id="journey" className="section mx-auto max-w-5xl px-6 py-24">
      <motion.span ref={eyebrow.ref} {...eyebrow.reveal} className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
        Journey · 04
      </motion.span>
      <motion.h2
        ref={title.ref}
        {...title.reveal}
        className="mt-3 max-w-[16ch] font-display text-[clamp(2.4rem,5vw,4rem)] font-medium leading-tight"
      >
        Where I've been,
        <br />
        <em className="font-normal italic text-accent">what I've studied.</em>
      </motion.h2>

      <div className="mt-12 grid gap-14 lg:grid-cols-2">
        <Timeline label="Experience" items={experience} />
        <Timeline label="Education" items={education} />
      </div>
    </section>
  )
}
