import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal.ts'

const HIGHLIGHTS = [
  { value: '2+ Years', label: 'Software Engineering Experience' },
  { value: 'AI + Automation', label: 'Core Engineering Focus' },
  { value: 'Cloud Systems', label: 'AWS & DigitalOcean' },
  { value: 'Backend Workflows', label: 'APIs & Database Integrations' },
]

function HighlightCard({ value, label, index }: { value: string; label: string; index: number }) {
  const { ref, reveal } = useScrollReveal()
  return (
    <motion.div
      ref={ref}
      {...reveal}
      transition={{ ...reveal.transition, delay: index * 0.08 }}
      className="rounded-xl border border-border bg-surface/60 p-6 text-center backdrop-blur-sm"
    >
      <div className="font-mono text-xl font-bold text-accent-2 md:text-2xl">{value}</div>
      <div className="mt-2 text-sm text-ink-muted">{label}</div>
    </motion.div>
  )
}

export default function Highlights() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:px-8">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {HIGHLIGHTS.map((h, i) => (
          <HighlightCard key={h.value} value={h.value} label={h.label} index={i} />
        ))}
      </div>
    </section>
  )
}
