import SectionHeading from '../components/SectionHeading'
import { publications } from '../data/publications'
import { useT } from '../settings'

export default function Publications() {
  const t = useT()
  return (
    <section id="publications" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        kicker="Research"
        title="Publications"
        subtitle="Journals and papers I have contributed to."
      />
      <ul className="space-y-4">
        {publications.map((p) => (
          <li key={p.url} className="rounded-xl border border-white/5 bg-ink-900/60 p-6 glow-card">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold text-slate-100">{p.title}</h3>
              <span className="font-mono text-xs text-teal-300">{p.year}</span>
            </div>
            <p className="mt-1 text-sm text-slate-400">
              {p.journal} · {p.detail}
            </p>
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block font-mono text-xs text-teal-300 hover:underline"
            >
              {t('View article')} →
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
