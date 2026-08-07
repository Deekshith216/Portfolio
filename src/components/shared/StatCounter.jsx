import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'

// Animated count-up, triggered once when scrolled into view.
export default function StatCounter({ target, suffix = '+', label, duration = 1200 }) {
  const { ref, isInView, reveal } = useScrollReveal({ margin: '0px 0px -20% 0px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const start = performance.now()
    let frame
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(target * eased))
      if (p < 1) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [isInView, target, duration])

  return (
    <motion.div ref={ref} initial={reveal.initial} animate={reveal.animate} transition={reveal.transition}>
      <div className="font-display font-black text-[clamp(2.2rem,4vw,3rem)] leading-none tracking-tight text-ink">
        {value}
        <span className="text-accent">{suffix}</span>
      </div>
      <div className="mt-2 text-xs uppercase tracking-[0.18em] text-ink-muted font-medium">{label}</div>
    </motion.div>
  )
}
