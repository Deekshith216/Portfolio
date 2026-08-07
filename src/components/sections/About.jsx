import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'
import StatCounter from '../shared/StatCounter.jsx'

export default function About() {
  const eyebrow = useScrollReveal()
  const title = useScrollReveal()
  const copy = useScrollReveal()
  const visual = useScrollReveal()

  return (
    <section id="about" className="section mx-auto max-w-5xl px-6 py-24">
      <motion.span ref={eyebrow.ref} {...eyebrow.reveal} className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
        About · 01
      </motion.span>
      <motion.h2
        ref={title.ref}
        {...title.reveal}
        className="mt-3 max-w-[16ch] font-display text-[clamp(2.4rem,5vw,4rem)] font-medium leading-tight"
      >
        Engineer first.
        <br />
        <em className="font-normal italic text-accent">Curious always.</em>
      </motion.h2>

      <div className="mt-12 grid gap-12 md:grid-cols-[1.25fr_1fr] md:items-start">
        <motion.div ref={copy.ref} {...copy.reveal}>
          <p className="max-w-[52ch] text-lg leading-relaxed">
            I'm a Software Engineer with hands on experience in workflow automation, backend systems and AI driven
            tools.
          </p>

          <blockquote className="my-8 max-w-[28ch] border-l-2 border-accent py-4 pl-6 font-display text-[clamp(1.5rem,2.5vw,2rem)] italic leading-snug">
            &ldquo;The kind of tooling that simply works while no one is looking.&rdquo;
          </blockquote>

          <p className="max-w-[52ch] text-lg leading-relaxed text-ink-muted">
            My work lives at the intersection of large language models and quiet, dependable infrastructure:
            scheduled email systems, Playwright browser automations, retrieval-augmented chatbots, and small services
            that pay back their build cost a hundred times over.
          </p>
          <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-ink-muted">
            I hold a B.E. in Electronics &amp; Communication Engineering and approach software the way I learned to
            approach circuits — patiently, with a respect for first principles and a stubborn need to understand{' '}
            <em className="text-ink">why</em> something behaves the way it does.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-surface-2 pt-8">
            <StatCounter target={2} label="Years building" />
            <StatCounter target={4} label="Shipped projects" />
            <StatCounter target={8} label="Tools & tech" />
          </div>
        </motion.div>

        <motion.div ref={visual.ref} {...visual.reveal}>
          <figure className="relative aspect-[4/5] overflow-hidden rounded-lg border border-surface-2 bg-surface shadow-[0_12px_30px_rgba(140,100,60,0.08)]">
            <img
              src={`${import.meta.env.BASE_URL}profile.jpeg`}
              alt="Portrait of Deekshith H Gatty"
              className="h-full w-full object-cover"
            />
            <figcaption className="absolute bottom-4 left-4 rounded-full border border-surface-2 bg-bg px-3.5 py-2 text-xs font-medium uppercase tracking-[0.18em]">
              <b className="text-accent">DG</b> · Mangaluru, IN
            </figcaption>
          </figure>
        </motion.div>
      </div>
    </section>
  )
}
