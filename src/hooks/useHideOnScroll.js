import { useEffect, useRef, useState } from 'react'

// Nav behavior: hides when scrolling down past a threshold, reappears scrolling up.
export function useHideOnScroll() {
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const y = window.scrollY
        setScrolled(y > 30)
        setHidden(y > 120 && y > lastY.current)
        lastY.current = y
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return { hidden, scrolled }
}
