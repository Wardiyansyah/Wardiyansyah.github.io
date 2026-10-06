import type { Project } from '../types'
import { useT } from '../settings'

export default function ProjectCard({ project }: { project: Project }) {
  const t = useT()
  return (
    <article className="flex h-full flex-col rounded-xl border border-white/5 bg-ink-900/60 p-6 glow-card">
      <div className="flex items-center justify-between">
        <span className="rounded-full border border-teal-400/30 px-2.5 py-0.5 font-mono text-[11px] text-teal-300">
          {t(project.category)}
        </span>
        <span className="font-mono text-[11px] text-slate-500">{t(project.status)}</span>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-100">{t(project.title)}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{t(project.description)}</p>
      <p className="mt-3 text-xs text-slate-500">
        <span className="font-mono text-teal-300/70">{t('role //')} </span>
        {t(project.role)}
      </p>
      <p className="mt-2 text-xs text-slate-500">
        <span className="font-mono text-teal-300/70">{t('learned //')} </span>
        {t(project.learned)}
      </p>
      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
        {project.technologies.map((t) => (
          <li key={t} className="rounded bg-ink-800 px-2 py-0.5 font-mono text-[11px] text-slate-400">
            {t}
          </li>
        ))}
      </ul>
      {project.links && project.links.length > 0 && (
        <div className="mt-4 flex gap-4">
          {project.links.map((l) => (
            <a key={l.url} href={l.url} className="text-sm text-teal-300 hover:underline">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </article>
  )
}
