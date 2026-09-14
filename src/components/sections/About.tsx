import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal.ts'
import SectionHeading from '../ui/SectionHeading.tsx'
import { personal } from '../../data/personal.ts'

export default function About() {
  const { ref, reveal } = useScrollReveal()
  const portrait = useScrollReveal<HTMLDivElement>()

  return (
    <section id="about" className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:px-8">
      <SectionHeading eyebrow="About Me" title="Engineer focused on" accent="practical AI systems." />

      <div className="mt-10 grid gap-10 md:grid-cols-[1fr_260px] md:items-start lg:grid-cols-[1fr_300px]">
        <motion.div ref={ref} {...reveal} className="max-w-3xl space-y-5 text-lg leading-relaxed text-ink-muted">
          <p>
            I'm a Software Engineer with experience building AI-powered applications, automation workflows, and
            backend systems using Python. I spend most of my time developing and integrating Generative AI
            solutions, LLM-based applications, APIs, and cloud-hosted services.
          </p>
          <p>
            Day to day, that means hands-on work with Docker, Supabase, AWS SES, and DigitalOcean — building
            automation pipelines, wiring up system integrations, and handling deployment and validation for
            AI-driven platforms.
          </p>
          <p>
            I'm drawn to the problems where AI meets real infrastructure: scalable AI systems, agent workflows, and
            data-driven applications that actually need to run reliably in production, not just in a demo.
          </p>
        </motion.div>

        <motion.div
          ref={portrait.ref}
          {...portrait.reveal}
          className="order-first mx-auto w-48 md:order-none md:mx-0 md:w-full"
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-surface/60 p-2 backdrop-blur-sm">
            <img
              src={`${import.meta.env.BASE_URL}profile.png`}
              alt={`Portrait of ${personal.name}`}
              className="aspect-[4/5] w-full rounded-xl object-cover"
              loading="lazy"
            />
          </div>
          <p className="mt-3 text-center font-mono text-xs text-ink-dim md:text-left">{personal.location}</p>
        </motion.div>
      </div>
    </section>
  )
}
