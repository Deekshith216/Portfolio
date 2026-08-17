import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import StatCounter from '../shared/StatCounter.jsx'

const RESUME_URL = 'https://drive.google.com/file/d/1UQjeU1YNt0giHskO-yQEcfcJChyTDCQ0/view?usp=sharing'

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const stageRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: stageRef, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <section id="hero" className="relative">
      <div ref={stageRef} className="relative min-h-screen overflow-hidden pt-24 md:pt-28">
        <motion.div
          style={{ y: bgY }}
          className="pointer-events-none absolute left-4 top-12 z-0 hidden select-none font-sans text-[clamp(5.2rem,15vw,11rem)] font-black leading-none text-accent opacity-[0.14] md:block"
          aria-hidden="true"
        >
          AI.
        </motion.div>

        <div className="relative z-10 mx-auto max-w-3xl px-4 md:px-6">
          <motion.div
            {...fadeUp(0)}
            className="mb-4 flex flex-col items-start gap-2 md:mb-8 md:flex-row md:items-center md:justify-between md:gap-3"
          >
            <span className="inline-flex items-center gap-2 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-ink-muted md:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-alt" />
              Available for new opportunities
            </span>
            <span className="text-[0.62rem] font-medium uppercase tracking-[0.18em] text-ink-light md:text-xs">
              Mangaluru, India
            </span>
          </motion.div>

          <h1 className="relative z-10 max-w-[11ch] font-display text-[clamp(3rem,11vw,5rem)] font-bold leading-[0.72] tracking-[-0.08em] md:max-w-[16ch] md:leading-[0.92]">
            <motion.span {...fadeUp(0.1)} className="block">
              Deekshith H Gatty
            </motion.span>
            <motion.span {...fadeUp(0.22)} className="mt-1 block md:mt-2">
              builds AI systems
            </motion.span>
            <motion.span {...fadeUp(0.34)} className="block text-accent-alt">
              &amp; automation.
            </motion.span>
          </h1>

          <motion.p
            {...fadeUp(0.5)}
            className="mt-6 max-w-[42ch] text-[1.03rem] leading-[1.45] text-ink-muted md:text-[1.05rem]"
          >
            A software engineer building AI-powered tools, simple automations, and backend systems that make things
            work smoothly.
          </motion.p>

          <motion.div {...fadeUp(0.62)} className="mt-8 flex w-full max-w-[420px] flex-col gap-4 md:flex-row md:gap-4">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener"
              className="flex items-center justify-center rounded-full bg-ink px-5 py-3.5 text-[1.05rem] font-bold text-bg md:px-6 md:text-sm"
            >
              Download Resume →
            </a>
            <a
              href="#work"
              className="flex items-center justify-center rounded-full border-2 border-ink px-5 py-3.5 text-[1.05rem] font-bold text-ink md:px-6 md:text-sm"
            >
              View Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="mt-10 text-xs uppercase tracking-[0.08em]"
          >
            ↓ scroll
          </motion.div>
        </div>
      </div>

      <div className="mx-auto flex max-w-3xl flex-wrap gap-10 px-6 pb-20 pt-12 md:pb-28 md:pt-16">
        <StatCounter target={2} label="Years building" />
        <StatCounter target={4} label="Shipped projects" />
        <StatCounter target={8} label="Tools & tech" />
      </div>
    </section>
  )
}
