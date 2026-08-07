export default function Footer() {
  return (
    <footer className="border-t border-surface-2 px-6 py-8 text-center">
      <a
        href="#hero"
        className="text-xs font-medium uppercase tracking-[0.12em] text-ink-muted transition-colors hover:text-ink"
      >
        © {new Date().getFullYear()} Deekshith H Gatty — Back to top ↑
      </a>
    </footer>
  )
}
