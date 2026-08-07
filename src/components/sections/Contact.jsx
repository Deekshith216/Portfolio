import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'

const RESUME_URL = 'https://drive.google.com/file/d/1neMB-r_ncVRRaAnWD4e20lS0rdO74bW5/view?usp=sharing'

export default function Contact() {
  const pre = useScrollReveal()
  const title = useScrollReveal()
  const email = useScrollReveal()
  const form = useScrollReveal()
  const foot = useScrollReveal()

  const [status, setStatus] = useState({ message: '', tone: 'muted' })
  const [sending, setSending] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.target)
    if (data.get('botcheck')) return // honeypot tripped — silent drop

    const name = (data.get('name') || '').toString().trim()
    const emailValue = (data.get('email') || '').toString().trim()
    const message = (data.get('message') || '').toString().trim()

    if (!name || !emailValue || !message) {
      setStatus({ message: 'Please fill in every field.', tone: 'accent' })
      return
    }

    setSending(true)
    setStatus({ message: '', tone: 'muted' })

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORM,
          subject: `New portfolio message from ${name}`,
          from_name: name,
          name,
          email: emailValue,
          message,
        }),
      })
      const result = await res.json()
      if (result.success) {
        setStatus({ message: "Thanks — your message is on its way.", tone: 'accent-alt' })
        e.target.reset()
      } else {
        throw new Error(result.message || 'Submission failed.')
      }
    } catch (err) {
      console.error('Web3Forms error:', err)
      setStatus({ message: 'Something went wrong. Please email me directly at deekshithh60@gmail.com.', tone: 'accent' })
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-28">
      <motion.p ref={pre.ref} {...pre.reveal} className="text-xs font-medium uppercase tracking-[0.22em] text-ink-muted">
        Contact · 05
      </motion.p>
      <motion.h2
        ref={title.ref}
        {...title.reveal}
        className="mt-6 font-display text-[clamp(2.75rem,8vw,6.5rem)] font-medium leading-[1.02] tracking-tight"
      >
        Let's build
        <br />
        <em className="font-medium italic text-accent">something good.</em>
      </motion.h2>

      <motion.a
        ref={email.ref}
        {...email.reveal}
        href="mailto:deekshithh60@gmail.com"
        className="mt-10 inline-block border-b border-accent pb-1 font-display text-[clamp(1.4rem,3.5vw,2.5rem)] italic text-accent"
      >
        deekshithh60@gmail.com →
      </motion.a>

      <motion.form
        ref={form.ref}
        {...form.reveal}
        onSubmit={handleSubmit}
        className="mt-14 grid max-w-xl gap-5 rounded-xl border border-surface-2 bg-surface p-8 shadow-[0_12px_30px_rgba(140,100,60,0.08)]"
      >
        <input type="checkbox" name="botcheck" tabIndex="-1" autoComplete="off" className="absolute left-[-9999px] opacity-0" aria-hidden="true" />
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor="cf-name" className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
              Your name
            </label>
            <input
              id="cf-name"
              name="name"
              type="text"
              placeholder="Jane Doe"
              required
              className="w-full rounded-lg border border-surface-2 bg-bg px-4 py-3.5 focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="cf-email" className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
              Your email
            </label>
            <input
              id="cf-email"
              name="email"
              type="email"
              placeholder="you@studio.com"
              required
              className="w-full rounded-lg border border-surface-2 bg-bg px-4 py-3.5 focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
            />
          </div>
        </div>
        <div className="grid gap-2">
          <label htmlFor="cf-message" className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
            Message
          </label>
          <textarea
            id="cf-message"
            name="message"
            placeholder="Tell me a little about your project or idea…"
            required
            className="min-h-[140px] w-full rounded-lg border border-surface-2 bg-bg px-4 py-3.5 leading-relaxed focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10"
          />
        </div>
        <div className="mt-1 flex flex-wrap items-center gap-4">
          <button type="submit" disabled={sending} className="rounded-full bg-accent px-6 py-3 text-sm font-bold text-bg disabled:opacity-60">
            {sending ? 'Sending…' : 'Send message →'}
          </button>
          <p className="max-w-[38ch] text-xs leading-relaxed text-ink-light">
            Sends straight to my inbox. Or write directly to{' '}
            <a href="mailto:deekshithh60@gmail.com" className="text-accent">
              deekshithh60@gmail.com
            </a>
            .
          </p>
          {status.message && (
            <p role="status" aria-live="polite" className={status.tone === 'accent' ? 'text-sm font-medium text-accent' : 'text-sm font-medium text-accent-alt'}>
              {status.message}
            </p>
          )}
        </div>
      </motion.form>

      <motion.div ref={foot.ref} {...foot.reveal} className="mt-16 grid gap-9 border-t border-surface-2 pt-10 sm:grid-cols-3">
        <div>
          <div className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-ink-light">Phone</div>
          <a href="tel:+917411185356" className="hover:text-accent">
            +91 74111 85356
          </a>
        </div>
        <div>
          <div className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-ink-light">Based in</div>
          Mangaluru, India
        </div>
        <div>
          <div className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-ink-light">Elsewhere</div>
          <div className="flex flex-wrap gap-5">
            <a href="https://github.com/Deekshith216" target="_blank" rel="noopener" className="border-b border-transparent hover:border-current hover:text-accent">
              GitHub
            </a>
            <a href="https://linkedin.com/in/deekshith-h-gatty-807477205" target="_blank" rel="noopener" className="border-b border-transparent hover:border-current hover:text-accent">
              LinkedIn
            </a>
            <a href="mailto:deekshithh60@gmail.com" className="border-b border-transparent hover:border-current hover:text-accent">
              Email
            </a>
            <a href={RESUME_URL} target="_blank" rel="noopener" className="border-b border-transparent hover:border-current hover:text-accent">
              Resume
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
