import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal.ts'
import SectionHeading from '../ui/SectionHeading.tsx'

const AREAS = [
  {
    num: '01',
    title: 'AI Applications',
    description: 'LLM-powered applications, AI workflows, prompt engineering, and intelligent automation.',
  },
  {
    num: '02',
    title: 'Backend Systems',
    description: 'APIs, databases, integrations, cloud-hosted backend services, and automation workflows.',
  },
  {
    num: '03',
    title: 'Automation',
    description: 'Python automation, browser automation, communication workflows, and operational automation.',
  },
  {
    num: '04',
    title: 'Cloud & DevOps',
    description: 'Dockerized applications, Linux environments, AWS services, DigitalOcean deployments, and production troubleshooting.',
  },
]

function AreaCard({ num, title, description, index }: { num: string; title: string; description: string; index: number }) {
  const { ref, reveal } = useScrollReveal()
  return (
    <motion.div
      ref={ref}
      {...reveal}
      transition={{ ...reveal.transition, delay: (index % 2) * 0.08 }}
      whileHover={{ y: -4 }}
      className="rounded-xl border border-border bg-surface/60 p-7 backdrop-blur-sm transition-colors hover:border-accent/50"
    >
      <span className="font-mono text-3xl font-bold text-border">{num}</span>
      <h3 className="mt-3 text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{description}</p>
    </motion.div>
  )
}

export default function WhatIBuild() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:px-8">
      <SectionHeading eyebrow="What I Build" title="Four areas I" accent="focus my work on." />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {AREAS.map((a, i) => (
          <AreaCard key={a.num} {...a} index={i} />
        ))}
      </div>
    </section>
  )
}
