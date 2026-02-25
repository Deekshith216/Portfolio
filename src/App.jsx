import { useState } from 'react'
import emailjs from '@emailjs/browser'

const profileData = {
  name: 'Deekshith H Gatty',
  title: 'Software Engineer',
  summary:
    'I’m a Software Engineer with hands-on experience in workflow automation, backend systems, and AI-driven tools.',
  location: 'Mangaluru, India',
  email: 'deekshithh60@gmail.com',
  phone: '+91 7411185356',
  image: 'profile.jpeg',
  resumeLink: 'https://drive.google .com/file/d/1GzekXtJCT9hgKy90DxDig9BiJsVhidj0/view?usp=sharing',
}

const projectData = [
  {
    title: 'Smart Study Assistant',
    description: 'Smart Study Assistant is a multi-role AI chatbot built using prompt engineering. It helps students learn, revise, practice, and stay motivated using a single application.',
    tech: ['Python', 'Streamlit', 'Open AI(LLM)', 'Prompt Engineering'],
    demoLink: '#',
    codeLink: 'https://github.com/Deekshith216/Smart_Study_Assistant.git',
  },
  {
    title: 'SMART TEXT SUMMARIZER',
    description: 'An AI-powered Smart Text Summarizer. This project summarizes long text into clear and concise outputs using structured prompting and a clean, extensible architecture.',
    tech: ['Python', 'Streamlit', 'Open AI(LLM)', 'Prompt Engineering'],
    demoLink: '#',
    codeLink: 'https://github.com/Deekshith216/smart_text_summarizer.git',
  },
  {
    title: 'FAQ Knowledge Assistant (RAG-based Chatbot)',
    description: 'A Retrieval-Augmented Generation (RAG) based FAQ chatbot.',
    tech: ['Python', 'Streamlit', 'Open AI(LLM)', 'Prompt Engineering', 'RAG','Faiss'],
    demoLink: '#',
    codeLink: 'https://github.com/Deekshith216/faq-knowledge-assistant.git',
  },
  {
    title: 'Naukri Automation ',
    description: 'Automated Resume update system for Naukri.com using Playwright.',
    tech: ['Python', 'Playwright'],
    demoLink: '#',
    codeLink: 'https://github.com/Deekshith216/Auto_updates.git',  
  }
]

const experienceData = [
  {
    role: 'Software Engineer',
    company: 'MicroDegree',
    duration: 'March 2025 - Present',
    details:
      'I’ve implemented end-to-end automation workflows, including scheduled email systems, Playwright-based browser automation, and AI agents GPT models for content generation.',
  },
  {
    role: 'Quality control intern',
    company: 'Rexnord Electronics and Controls Ltd',
    duration: 'June 2024 - December 2024',
    details:
      'During my internship at Rexnord Electronics and Controls Ltd, I was responsible for inspecting and testing electronic components to ensure they met quality standards. I collaborated with the production team to identify and resolve issues, contributing to improved product reliability and customer satisfaction.',
  },
]

const educationData = [
  {
    degree: 'B.E. in Electronics and Communication Engineering',
    institute: 'Sahyadri College of Engineering and Management',
    year: '2020 - 2024',
  },
  {
    degree: 'PUC - Science',
    institute: 'St Aloysius Pre-University College',
    year: '2018 - 2020',
  },
]

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-6">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-violet-300/80">{subtitle}</p>
      <h2 className="mt-2 text-3xl font-semibold text-white">{title}</h2>
    </div>
  )
}

function FloatingNavbar() {
  return (
    <header className="fixed left-1/2 top-5 z-50 w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2">
      <nav className="flex items-center justify-between rounded-full border border-white/15 bg-slate-900/70 px-4 py-3 shadow-2xl backdrop-blur-xl md:px-6">
        <a href="#hero" className="flex items-center gap-2 text-white">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-violet-500 text-xs font-bold">DG</span>
          <span className="text-sm font-semibold tracking-wide">Deekshith Gatty</span>
        </a>
        <div className="hidden items-center gap-5 text-sm text-slate-200 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

function HeroSection({ profile }) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 via-violet-950/40 to-slate-900/90 p-6 md:p-10"
    >
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="relative grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <p className="inline-flex rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-violet-200">
            {profile.title}
          </p>
          <h3 className="mt-5 max-w-2xl text-2xl font-bold leading-tight text-white sm:text-5xl lg:text-4xl">
          AI & Automation enthusiast seeking opportunities to build impactful, production-ready systems.
          </h3>
          <p className="mt-5 max-w-xl leading-7 text-slate-300">{profile.summary}</p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={profile.resumeLink}
              download
              className="rounded-xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Let’s Connect
            </a>
          </div>

          <div className="mt-7 grid max-w-md grid-cols-3 gap-3 text-center text-xs text-slate-300">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="text-lg font-semibold text-white">3+</p>
              <p>Projects</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="text-lg font-semibold text-white">1+</p>
              <p>Years</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="text-lg font-semibold text-white">100%</p>
              <p>Passion</p>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm">
          <div className="rounded-3xl border border-white/15 bg-white/5 p-3 backdrop-blur">
            <img src={profile.image} alt="Profile" className="h-[420px] w-full rounded-2xl object-cover" />
            <div className="mt-3 rounded-xl bg-slate-950/60 p-4">
              <p className="text-lg font-semibold text-white">{profile.name}</p>
              <p className="text-sm text-slate-300">{profile.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="mt-20">
      <SectionHeading title="Featured Projects" subtitle="Portfolio" />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group rounded-2xl border border-white/10 bg-slate-900/60 p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-slate-900"
          >
            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
             <div className="mt-5 flex items-center gap-4 text-sm font-medium">
              <a href={project.demoLink} className="text-violet-300 transition hover:text-violet-200">
                Live Preview
              </a>
              <a href={project.codeLink} className="text-violet-300 transition hover:text-violet-200">
                Source Code
              </a>
            </div> 
          </article>
        ))}
      </div>
    </section>
  )
}

function ExperienceSection({ experiences }) {
  return (
    <section id="experience" className="mt-20">
      <SectionHeading title="Work Experience" subtitle="Journey" />
      <div className="space-y-4">
        {experiences.map((experience) => (
          <article
            key={`${experience.role}-${experience.company}`}
            className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg font-semibold text-white">{experience.role}</h3>
              <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs text-violet-200">
                {experience.duration}
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-violet-300">{experience.company}</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">{experience.details}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function EducationSection({ education }) {
  return (
    <section id="education" className="mt-20">
      <SectionHeading title="Education" subtitle="Academic" />
      <div className="space-y-4">
        {education.map((item) => (
          <article
            key={`${item.degree}-${item.institute}`}
            className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg font-semibold text-white">{item.degree}</h3>
              <span className="rounded-full bg-fuchsia-500/15 px-3 py-1 text-xs text-fuchsia-200">
                {item.year}
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-violet-300">{item.institute}</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.info}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function ContactSection({ profile }) {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  })
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message: 'EmailJS keys are missing. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in .env',
      })
      return
    }

    setIsSending(true)
    setStatus({ type: '', message: '' })

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.user_name,
          email: formData.user_email,
          message: formData.message,
        },
        {
          publicKey,
        }
      )

      setStatus({ type: 'success', message: 'Message sent successfully. I will get back to you soon.' })
      setFormData({ user_name: '', user_email: '', message: '' })
    } catch {
      setStatus({
        type: 'error',
        message: 'Unable to send message right now. Please try again after a moment.',
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section
      id="contact"
      className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 via-violet-950/30 to-slate-900/90 p-6 md:p-8"
    >
      <SectionHeading title="Contact Me" subtitle="Get In Touch" />
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm leading-6 text-slate-300">
        .
          </p>
          <div className="mt-5 space-y-3 text-sm text-slate-200">
            <p className="rounded-xl border border-white/10 bg-slate-950/40 p-3">Email: {profile.email}</p>
            <p className="rounded-xl border border-white/10 bg-slate-950/40 p-3">Phone: {profile.phone}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label htmlFor="user_name" className="mb-2 block text-sm font-medium text-slate-200">
                Name
              </label>
              <input
                id="user_name"
                name="user_name"
                type="text"
                value={formData.user_name}
                onChange={handleInputChange}
                required
                className="w-full rounded-xl border border-white/15 bg-slate-950/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-violet-400"
                placeholder="Your name"
              />
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="user_email" className="mb-2 block text-sm font-medium text-slate-200">
                Email
              </label>
              <input
                id="user_email"
                name="user_email"
                type="email"
                value={formData.user_email}
                onChange={handleInputChange}
                required
                className="w-full rounded-xl border border-white/15 bg-slate-950/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-violet-400"
                placeholder="you@example.com"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full resize-none rounded-xl border border-white/15 bg-slate-950/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-violet-400"
                placeholder="Type your message here..."
              />
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              type="submit"
              disabled={isSending}
              className="rounded-xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
            {status.message && (
              <p className={`text-sm ${status.type === 'success' ? 'text-emerald-300' : 'text-rose-300'}`}>
                {status.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(139,92,246,0.12),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(217,70,239,0.08),_transparent_30%)]" />
      <FloatingNavbar />

      <main className="mx-auto w-full max-w-6xl px-6 pb-12 pt-28 md:pb-16 md:pt-32">
        <HeroSection profile={profileData} />
        <ProjectsSection projects={projectData} />
        <ExperienceSection experiences={experienceData} />
        <EducationSection education={educationData} />
        <ContactSection profile={profileData} />
      </main>
    </div>
  )
}

export default App
