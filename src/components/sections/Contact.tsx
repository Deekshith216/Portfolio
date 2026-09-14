import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Send } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal.ts'
import { personal } from '../../data/personal.ts'
import { submitContactForm } from '../../lib/contact.ts'
import SectionHeading from '../ui/SectionHeading.tsx'

interface FormState {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!form.name.trim()) errors.name = 'Name is required.'
  if (!form.email.trim()) errors.email = 'Email is required.'
  else if (!EMAIL_RE.test(form.email)) errors.email = 'Enter a valid email address.'
  if (!form.message.trim()) errors.message = 'Message is required.'
  else if (form.message.trim().length < 10) errors.message = 'Message should be at least 10 characters.'
  return errors
}

export default function Contact() {
  const { ref, reveal } = useScrollReveal<HTMLFormElement>()
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<{ tone: 'idle' | 'success' | 'error'; message: string }>({
    tone: 'idle',
    message: '',
  })
  const [sending, setSending] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const validation = validate(form)
    setErrors(validation)
    if (Object.keys(validation).length > 0) return

    setSending(true)
    setStatus({ tone: 'idle', message: '' })
    const result = await submitContactForm(form)
    setSending(false)

    if (result.ok) {
      setStatus({ tone: 'success', message: 'Thanks — your message is on its way.' })
      setForm({ name: '', email: '', message: '' })
    } else {
      setStatus({ tone: 'error', message: result.error ?? 'Something went wrong.' })
    }
  }

  return (
    <section id="contact" className="relative z-10 mx-auto max-w-5xl px-6 py-24 md:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Build"
        accent="Something Useful"
        description="Interested in AI engineering, backend development, automation, or building intelligent applications? I'd be happy to connect."
        align="center"
      />

      <div className="mt-12 grid gap-10 md:grid-cols-[0.8fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex flex-col gap-3">
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-3 rounded-lg border border-border bg-surface/60 px-4 py-3.5 text-sm text-ink transition-colors hover:border-accent"
          >
            <Mail size={17} className="text-accent" />
            {personal.email}
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-3 rounded-lg border border-border bg-surface/60 px-4 py-3.5 text-sm text-ink transition-colors hover:border-accent"
          >
            <Github size={17} className="text-accent" />
            GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-3 rounded-lg border border-border bg-surface/60 px-4 py-3.5 text-sm text-ink transition-colors hover:border-accent"
          >
            <Linkedin size={17} className="text-accent" />
            LinkedIn
          </a>
        </motion.div>

        <motion.form ref={ref} {...reveal} onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-xs font-medium uppercase tracking-[0.12em] text-ink-muted">
              Name
            </label>
            <input
              id="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border border-border bg-surface/60 px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
              placeholder="Jane Doe"
            />
            {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-xs font-medium uppercase tracking-[0.12em] text-ink-muted">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg border border-border bg-surface/60 px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
              placeholder="you@company.com"
            />
            {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-xs font-medium uppercase tracking-[0.12em] text-ink-muted">
              Message
            </label>
            <textarea
              id="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              className="w-full resize-y rounded-lg border border-border bg-surface/60 px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
              placeholder="Tell me a little about your project or idea…"
            />
            {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={sending}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:opacity-60"
          >
            {sending ? 'Sending…' : 'Send Message'}
            <Send size={15} />
          </button>

          {status.message && (
            <p role="status" aria-live="polite" className={`text-sm ${status.tone === 'error' ? 'text-red-400' : 'text-accent-2'}`}>
              {status.message}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
