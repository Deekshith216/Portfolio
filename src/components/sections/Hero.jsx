import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import StatCounter from '../shared/StatCounter.jsx'

const RESUME_URL = 'https://drive.google.com/file/d/1neMB-r_ncVRRaAnWD4e20lS0rdO74bW5/view?usp=sharing'

export default function Hero() {
  const stageRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: stageRef, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 160])

  const peekRef = useRef(null)
  const peekInView = useInView(peekRef, { margin: '0px 0px -50% 0px' })

  return (
    <section id="hero" className="relative">
      <div ref={stageRef} className="relative min-h-screen overflow-hidden pt-28">
        <motion.div
          style={{ y: bgY }}
          className="pointer-events-none absolute left-4 top-12 select-none font-sans text-[clamp(5rem,15vw,13rem)] font-black leading-[0.85] text-accent opacity-85"
          aria-hidden="true"
        >
          AI.
        </motion.div>

        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-alt" />
              Available for new opportunities
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-ink-light">Mangaluru, India</span>
          </div>

          <h1 className="max-w-[16ch] font-display text-[clamp(2rem,5.5vw,4rem)] font-bold leading-tight">
            <motion.span
              initial={{ opacity: 0, x: -70, rotate: -6 }}
              animate={{ opacity: 1, x: 0, rotate: -1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block bg-ink px-3 py-1 text-bg"
            >
              Deekshith H Gatty
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 70, rotate: 6 }}
              animate={{ opacity: 1, x: 0, rotate: 1 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-2 block"
            >
              builds AI systems
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: -40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="block text-accent-alt"
            >
              &amp; automation.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-6 max-w-[42ch] text-[1.05rem] leading-relaxed text-ink-muted"
          >
            A software engineer building AI-powered tools, simple automations, and backend systems that make things
            work smoothly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.15 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener"
              className="rounded-full bg-ink px-6 py-3 text-sm font-bold text-bg"
            >
              Download Resume →
            </a>
            <a href="#work" className="rounded-full border-2 border-ink px-6 py-3 text-sm font-bold text-ink">
              View Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="mt-10 text-xs uppercase tracking-[0.08em]"
          >
            ↓ scroll
          </motion.div>
        </div>
      </div>

      <div className="h-[45vh]" />

      <div className="mx-auto flex max-w-3xl flex-wrap gap-10 px-6">
        <StatCounter target={2} label="Years building" />
        <StatCounter target={4} label="Shipped projects" />
        <StatCounter target={8} label="Tools & tech" />
      </div>

      <div ref={peekRef} className="h-[35vh]" />

      <motion.div
        initial={{ y: 140, opacity: 0 }}
        animate={peekInView ? { y: 0, opacity: 1 } : { y: 140, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="fixed bottom-8 left-1/2 z-30 w-[min(90vw,480px)] -translate-x-1/2 bg-accent-alt p-6 text-bg shadow-[8px_8px_0_var(--color-ink)]"
      >
        <div className="text-xs font-bold uppercase tracking-[0.08em] opacity-85">GenAI · LLM</div>
        <h3 className="mt-1 font-display text-xl font-black">Smart Study Assistant</h3>
        <p className="mt-1 text-sm opacity-95">Keep scrolling to see the full case study.</p>
      </motion.div>
    </section>
  )
}
