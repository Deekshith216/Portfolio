import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Tabbed Deep-Dive (ticket 04): one case study visible at a time, sharp
// directional slide on switch — no fade/cross-dissolve (ticket 05).
export default function CaseStudyTabs({ studies }) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const select = (i) => {
    setDirection(i > index ? 1 : -1)
    setIndex(i)
  }

  const study = studies[index]

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {studies.map((s, i) => (
          <button
            key={s.title}
            onClick={() => select(i)}
            className={`rounded-full border-2 border-ink px-5 py-2.5 text-sm font-bold transition-colors ${
              i === index ? 'bg-ink text-bg' : 'bg-transparent text-ink'
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>

      <div className="relative mt-8 max-w-3xl overflow-hidden">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={study.title}
            custom={direction}
            initial={{ x: direction * 60, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction * -60, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className="font-display italic font-bold text-[clamp(1.6rem,4vw,2.6rem)] leading-tight relative">
              <span className="text-accent text-[1.4em] leading-none mr-1 align-top">&ldquo;</span>
              {study.problem}
            </p>
            <div className="mt-6 text-xs font-bold uppercase tracking-[0.08em] text-accent-alt">Approach</div>
            <p className="mt-2 max-w-[65ch] text-[1.05rem] leading-relaxed text-ink">{study.approach}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {study.tags.map((t) => (
                <li key={t} className="rounded-full bg-ink/8 px-3 py-1 text-xs font-bold">
                  {t}
                </li>
              ))}
            </ul>
            <a
              href={study.link}
              target="_blank"
              rel="noopener"
              className="mt-4 inline-flex items-center gap-1.5 border-b-2 border-ink pb-0.5 font-bold"
            >
              View source →
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
