import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin } from 'lucide-react'
import { personal } from '../../data/personal.ts'
import Terminal from '../ui/Terminal.tsx'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
})

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-28 pb-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 md:grid-cols-2 md:px-8">
        <div>
          <motion.div
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-medium text-ink-muted backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-2 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-2" />
            </span>
            Open to AI &amp; Software Engineering Opportunities
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="mt-6 text-[clamp(2.3rem,5vw,3.4rem)] font-extrabold leading-[1.08] tracking-tight text-ink"
          >
            Building <span className="text-accent">AI-Powered Applications</span> &amp; Automation Systems
          </motion.h1>

          <motion.p {...fadeUp(0.22)} className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted">
            Software Engineer focused on Generative AI, LLM applications, Python automation, backend systems, and
            cloud-hosted solutions.
          </motion.p>

          <motion.div {...fadeUp(0.34)} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-6 py-3.5 text-sm font-semibold text-ink backdrop-blur-sm transition-colors hover:border-accent"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              className="flex h-[46px] w-[46px] items-center justify-center rounded-lg border border-border text-ink-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Linkedin size={17} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center md:justify-end"
        >
          <Terminal />
        </motion.div>
      </div>
    </section>
  )
}
