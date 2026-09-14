import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const COMMAND = 'python build_ai_system.py'
const OUTPUT_LINES = [
  'Initializing AI workflow...',
  'Connecting to APIs...',
  'Running automation...',
  'Validating output...',
  '✓ System deployed successfully',
]

export default function Terminal() {
  const reducedMotion = useReducedMotion()
  const [typed, setTyped] = useState(reducedMotion ? COMMAND : '')
  const [lineCount, setLineCount] = useState(reducedMotion ? OUTPUT_LINES.length : 0)

  useEffect(() => {
    if (reducedMotion) return

    let i = 0
    const typeInterval = window.setInterval(() => {
      i += 1
      setTyped(COMMAND.slice(0, i))
      if (i >= COMMAND.length) window.clearInterval(typeInterval)
    }, 45)

    return () => window.clearInterval(typeInterval)
  }, [reducedMotion])

  useEffect(() => {
    if (reducedMotion || typed !== COMMAND) return

    let n = 0
    const lineInterval = window.setInterval(() => {
      n += 1
      setLineCount(n)
      if (n >= OUTPUT_LINES.length) window.clearInterval(lineInterval)
    }, 420)

    return () => window.clearInterval(lineInterval)
  }, [typed, reducedMotion])

  return (
    <div className="w-full max-w-lg overflow-hidden rounded-xl border border-border bg-surface/80 shadow-2xl shadow-black/40 backdrop-blur-sm">
      <div className="flex items-center gap-2 border-b border-border bg-surface-2/80 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-3 font-mono text-xs text-ink-dim">build_ai_system.py</span>
      </div>
      <div className="p-5 font-mono text-sm leading-relaxed">
        <div className="text-ink">
          <span className="text-accent-2">$</span> {typed}
          {typed.length < COMMAND.length && <span className="caret-blink text-ink">▌</span>}
        </div>
        <div className="mt-3 flex flex-col gap-1.5">
          {OUTPUT_LINES.slice(0, lineCount).map((line, i) => (
            <motion.div
              key={line}
              initial={reducedMotion ? false : { opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className={line.startsWith('✓') ? 'text-accent-2' : 'text-ink-muted'}
            >
              {i === OUTPUT_LINES.length - 1 ? line : `> ${line}`}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
