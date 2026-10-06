import SectionHeading from '../components/SectionHeading'
import { experiences } from '../data/experience'
import { useT } from '../settings'

export default function Experience() {
  const t = useT()
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading kicker="Experience" title="Professional & Organizational" />
      <div className="space-y-6">
        {experiences.map((e) => (
          <article key={e.title} className="rounded-xl border border-white/5 bg-ink-900/60 p-6 glow-card">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-slate-100">
                {t(e.title)} <span className="text-teal-300">· {e.organization}</span>
              </h3>
              <p className="font-mono text-xs text-slate-500">{t(e.period)}</p>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-400">
              {e.description.map((d) => (
                <li key={d.slice(0, 40)}>{t(d)}</li>
              ))}
            </ul>
            {e.technologies && (
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {e.technologies.map((tech) => (
                  <li key={tech} className="rounded bg-ink-800 px-2 py-0.5 font-mono text-[11px] text-slate-400">
                    {t(tech)}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
