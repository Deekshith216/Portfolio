import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal.ts'
import SectionHeading from '../ui/SectionHeading.tsx'

const STEPS = ['Idea', 'Design', 'Build', 'Integrate', 'Validate', 'Deploy', 'Monitor']

export default function EngineeringApproach() {
  const { ref, reveal } = useScrollReveal()

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:px-8">
      <SectionHeading eyebrow="Engineering Approach" title="How I get from" accent="idea to production." align="center" />

      <motion.div
        ref={ref}
        {...reveal}
        className="mt-14 flex flex-wrap items-center justify-center gap-x-2 gap-y-4"
      >
        {STEPS.map((step, i) => (
          <div key={step} className="flex items-center gap-2">
            <span className="rounded-lg border border-border bg-surface/60 px-4 py-2.5 font-mono text-sm text-ink backdrop-blur-sm">
              {step}
            </span>
            {i < STEPS.length - 1 && <ArrowRight size={16} className="text-ink-dim" />}
          </div>
        ))}
      </motion.div>

      <p className="mx-auto mt-10 max-w-xl text-center text-ink-muted leading-relaxed">
        I focus on building practical systems that are reliable, maintainable, and useful in real-world
        environments.
      </p>
    </section>
  )
}
