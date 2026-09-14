import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal.ts'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  accent?: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ eyebrow, title, accent, description, align = 'left' }: SectionHeadingProps) {
  const { ref, reveal } = useScrollReveal()
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <motion.div ref={ref} {...reveal} className={`flex flex-col ${alignClass} max-w-2xl`}>
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">{eyebrow}</span>
      <h2 className="mt-3 text-[clamp(1.9rem,4vw,2.75rem)] font-bold leading-tight tracking-tight text-ink">
        {title} {accent && <span className="text-accent">{accent}</span>}
      </h2>
      {description && <p className="mt-4 max-w-xl text-ink-muted leading-relaxed">{description}</p>}
    </motion.div>
  )
}
