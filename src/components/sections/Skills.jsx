import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'

const GROUPS = [
  { title: 'Languages', items: ['Python', 'JavaScript'] },
  { title: 'AI & LLM', items: ['OpenAI / GPT', 'Prompt Engineering', 'RAG', 'FAISS'] },
  { title: 'Automation', items: ['Playwright', 'Browser Automation', 'Scheduled Workflows'] },
  { title: 'Apps & Tooling', items: ['Streamlit', 'React', 'Git', 'REST APIs'] },
]

function SkillGroup({ group }) {
  const { ref, reveal } = useScrollReveal()
  return (
    <motion.div ref={ref} {...reveal} className="border-t border-surface-2 pt-6">
      <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
        {group.title} <span className="text-accent">{String(group.items.length).padStart(2, '0')}</span>
      </h3>
      <ul className="mt-5 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-accent bg-surface px-3.5 py-2 text-sm transition-colors hover:bg-accent hover:text-bg"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function Skills() {
  const eyebrow = useScrollReveal()
  const title = useScrollReveal()

  return (
    <section id="skills" className="section mx-auto max-w-5xl px-6 py-24">
      <motion.span ref={eyebrow.ref} {...eyebrow.reveal} className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
        Toolkit · 02
      </motion.span>
      <motion.h2
        ref={title.ref}
        {...title.reveal}
        className="mt-3 max-w-[16ch] font-display text-[clamp(2.4rem,5vw,4rem)] font-medium leading-tight"
      >
        The materials
        <br />
        <em className="font-normal italic text-accent">I build with.</em>
      </motion.h2>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {GROUPS.map((group) => (
          <SkillGroup key={group.title} group={group} />
        ))}
      </div>
    </section>
  )
}
