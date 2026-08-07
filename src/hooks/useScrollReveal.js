import { useRef } from 'react'
import { useInView } from 'framer-motion'

// Shared scroll-reveal: fade + slide up once, when the element enters the viewport.
export function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '0px 0px -8% 0px',
    ...options,
  })

  const reveal = {
    initial: { opacity: 0, y: 20 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }

  return { ref, isInView, reveal }
}
