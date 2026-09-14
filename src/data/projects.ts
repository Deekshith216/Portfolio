export interface Project {
  title: string
  category: string
  description: string
  features: string[]
  tech: string[]
  viewUrl?: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    title: 'Smart Text Summarizer',
    category: 'AI Application',
    description: 'An AI-powered text summarization application built with Python, Streamlit, and OpenAI APIs.',
    features: [
      'LLM-based text processing',
      'AI summarization',
      'Prompt engineering',
      'Response quality optimization',
      'Streamlit interface',
      'OpenAI API integration',
    ],
    tech: ['Python', 'Streamlit', 'OpenAI API', 'Generative AI'],
    // TODO: replace with the live deployed app URL when available
    viewUrl: 'https://github.com/Deekshith216/smart_text_summarizer',
    githubUrl: 'https://github.com/Deekshith216/smart_text_summarizer',
  },
  {
    title: 'Smart Agriculture System using IoT',
    category: 'IoT / Embedded Systems',
    description:
      'An IoT-based solution designed to monitor soil and environmental conditions and validate system behavior across multiple scenarios.',
    features: [
      'Environmental monitoring',
      'Sensor data collection',
      'Sensor accuracy validation',
      'Structured data validation',
      'System reliability testing',
    ],
    tech: ['IoT', 'Sensors', 'Data Validation'],
    // TODO: replace with the project writeup/repo URL when available
    viewUrl: '#',
  },
  {
    title: 'AI & Automation Systems',
    category: 'Professional Engineering Work',
    description:
      'Python-based automation and backend workflows designed to improve platform operations, communication workflows, AI content validation, and system reliability.',
    features: [],
    tech: ['Python', 'Playwright', 'Supabase', 'AWS SES', 'Docker', 'DigitalOcean', 'APIs'],
  },
]
