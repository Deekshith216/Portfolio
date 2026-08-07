import { useEffect, useState } from 'react'
import { useHideOnScroll } from '../../hooks/useHideOnScroll.js'

const LINKS = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const { hidden, scrolled } = useHideOnScroll()
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 bg-bg/85 backdrop-blur-md transition-transform duration-300 ${
          scrolled ? 'border-b border-surface-2' : 'border-b border-transparent'
        } ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
      >
        <a href="#hero" className="font-display font-medium text-lg tracking-tight text-ink">
          Deekshith&nbsp;H&nbsp;Gatty
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex gap-9 text-sm">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={`relative pb-1 transition-colors ${
                    active === l.id ? 'text-ink' : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`block h-[1.5px] w-[22px] bg-ink transition-transform ${menuOpen ? 'translate-y-[7.5px] rotate-45' : ''}`} />
          <span className={`block h-[1.5px] w-[22px] bg-ink transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-[1.5px] w-[22px] bg-ink transition-transform ${menuOpen ? '-translate-y-[7.5px] -rotate-45' : ''}`} />
        </button>
      </header>

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-0 z-40 flex flex-col items-start justify-center gap-1 bg-bg px-6 pt-24 pb-12 transition-opacity duration-300 md:hidden ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <ul className="grid gap-1">
          {LINKS.map((l, i) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setMenuOpen(false)}
                className="flex items-baseline gap-4 font-display text-[clamp(2.2rem,9vw,3.75rem)] font-medium leading-tight text-ink"
              >
                <span className="font-sans text-xs tracking-[0.18em] text-accent">{String(i + 1).padStart(2, '0')}</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-8 text-sm text-ink-muted">
          <div className="mb-6 flex flex-wrap gap-3">
            <a
              href="https://linkedin.com/in/deekshith-h-gatty-807477205"
              target="_blank"
              rel="noopener"
              className="rounded-md border border-surface-2 px-4 py-2.5 text-xs font-medium uppercase tracking-[0.08em] text-ink"
            >
              LinkedIn →
            </a>
          </div>
          deekshithh60@gmail.com
          <br />
          Mangaluru, India
        </div>
      </div>
    </>
  )
}
