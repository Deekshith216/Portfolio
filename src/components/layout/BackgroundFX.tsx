const PARTICLES = [
  { top: '12%', left: '8%', delay: '0s', size: 3 },
  { top: '22%', left: '82%', delay: '1.2s', size: 2 },
  { top: '38%', left: '18%', delay: '2.4s', size: 2 },
  { top: '55%', left: '70%', delay: '0.6s', size: 3 },
  { top: '68%', left: '30%', delay: '3.1s', size: 2 },
  { top: '80%', left: '88%', delay: '1.8s', size: 2 },
  { top: '90%', left: '12%', delay: '2.9s', size: 3 },
]

// Fixed, low-cost visual layer: fine grid + radial glow + a handful of floating
// dots. Pure CSS transforms/opacity so it stays cheap even on low-end devices.
export default function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="bg-grid absolute inset-0 opacity-60" />
      <div
        className="absolute left-1/2 top-[-10%] h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, var(--color-accent), transparent 70%)' }}
      />
      <div
        className="absolute bottom-[-15%] right-[-10%] h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, var(--color-accent-2), transparent 70%)' }}
      />
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="particle absolute rounded-full bg-accent-2"
          style={{ top: p.top, left: p.left, width: p.size, height: p.size, animationDelay: p.delay }}
        />
      ))}
    </div>
  )
}
