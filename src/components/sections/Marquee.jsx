const ITEMS = ['Python', 'Automation', 'LLMs', 'Prompt Engineering', 'RAG', 'Playwright', 'Streamlit', 'Backend']

export default function Marquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap border-y border-surface-2 bg-surface py-4" aria-hidden="true">
      <div className="animate-marquee inline-flex gap-12 pl-12">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-12 font-display text-[clamp(1.35rem,2.6vw,2rem)] italic text-ink after:text-accent after:content-['·']"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
