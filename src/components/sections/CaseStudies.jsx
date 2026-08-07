import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'
import { caseStudies } from '../../data/caseStudies.js'
import CaseStudyTabs from '../shared/CaseStudyTabs.jsx'

export default function CaseStudies() {
  const eyebrow = useScrollReveal()
  const title = useScrollReveal()
  const tabs = useScrollReveal()

  return (
    <section id="work" className="section mx-auto max-w-5xl px-6 py-24">
      <motion.span ref={eyebrow.ref} {...eyebrow.reveal} className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
        Case studies · 03
      </motion.span>
      <motion.h2
        ref={title.ref}
        {...title.reveal}
        className="mt-3 max-w-[20ch] font-display text-[clamp(2.4rem,5vw,4rem)] font-medium leading-tight"
      >
        GenAI tools,
        <br />
        <em className="font-normal italic text-accent">built and shipped.</em>
      </motion.h2>
      <p className="mt-4 max-w-[50ch] text-ink-muted">
        Each project is open source. Browse the code, fork it, or reach out if you'd like to chat about how it
        works.
      </p>

      <motion.div ref={tabs.ref} {...tabs.reveal} className="mt-12">
        <CaseStudyTabs studies={caseStudies} />
      </motion.div>
    </section>
  )
}
