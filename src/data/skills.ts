export interface SkillGroup {
  category: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  { category: 'Programming', items: ['Python', 'TypeScript', 'JavaScript'] },
  {
    category: 'AI & Generative AI',
    items: ['Generative AI', 'LLM Applications', 'OpenAI APIs', 'Prompt Engineering', 'AI Workflows'],
  },
  { category: 'Backend & Databases', items: ['APIs', 'Supabase', 'Database Integration', 'Backend Automation'] },
  {
    category: 'Automation & Testing',
    items: ['Playwright', 'Browser Automation', 'Workflow Automation', 'System Validation'],
  },
  { category: 'Cloud & DevOps', items: ['Docker', 'Linux', 'AWS', 'AWS SES', 'DigitalOcean'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'Streamlit'] },
]
