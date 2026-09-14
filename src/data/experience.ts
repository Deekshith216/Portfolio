export interface ExperienceEntry {
  role: string
  company: string
  when: string
  location: string
  description?: string
  bullets?: string[]
  tech?: string[]
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Software Engineer',
    company: 'MicroDegree',
    when: 'March 2025 — Present',
    location: 'Mangaluru, India',
    description:
      'Working on AI-powered applications, automation systems, backend workflows, and cloud-hosted platform operations.',
    bullets: [
      'Developed and maintained Python-based automation systems supporting platform operations and communication workflows.',
      'Implemented and managed a self-hosted Listmonk email marketing platform integrated with AWS SES.',
      'Designed backend workflows for email delivery, subscriber management, and campaign automation.',
      'Worked with Supabase for database management, data validation, and backend integrations.',
      'Assisted in testing and deployment of browser automation solutions using Playwright.',
      'Validated and monitored AI-generated content workflows to improve output quality and consistency.',
      'Troubleshot production issues across cloud-hosted services on DigitalOcean and AWS.',
      'Collaborated with developers to improve system reliability, automation efficiency, and platform performance.',
    ],
    tech: ['Python', 'AWS', 'DigitalOcean', 'Docker', 'Supabase', 'Playwright', 'Listmonk', 'Automation', 'AI'],
  },
  {
    role: 'Quality Control and Production Intern',
    company: 'Rexnord Electronics and Control Ltd',
    when: '06/2024 — 12/2024',
    location: 'Vasai, Maharashtra',
    bullets: [
      'Worked in the DC fan assembly division, supporting quality control and inspection processes.',
      'Assisted in testing electronic components and ensuring compliance with production and quality standards.',
      'Monitored manufacturing workflows to identify defects and deviations.',
      'Gained practical exposure to electronics systems, production testing, and process quality assurance.',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'EvoluteIQ Intelligent Business Automation',
    when: 'February 2024 — April 2024',
    location: 'Remote',
    bullets: [
      'Worked on workflow automation projects.',
      'Validated system logic and data flow.',
      'Assisted in testing low-code/no-code automation platforms.',
      'Participated in test case validation.',
      'Worked on process mapping and automation strategy discussions.',
    ],
  },
]
