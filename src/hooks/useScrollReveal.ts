import { useRef } from 'react'
import { useInView, type UseInViewOptions } from 'framer-motion'

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions & { margin?: string } = {}
) {
  const ref = useRef<T>(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '0px 0px -8% 0px',
    ...options,
  } as UseInViewOptions)

  const reveal = {
    initial: { opacity: 0, y: 20 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }

  return { ref, isInView, reveal }
}
