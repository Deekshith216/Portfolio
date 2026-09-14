import { Github, Linkedin } from 'lucide-react'
import { personal } from '../../data/personal.ts'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
        <p className="text-sm text-ink-dim">© 2026 {personal.name}. Built with React &amp; TypeScript.</p>
        <div className="flex gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-accent hover:text-accent"
          >
            <Github size={16} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-accent hover:text-accent"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
