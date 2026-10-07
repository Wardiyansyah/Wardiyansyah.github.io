import SectionHeading from '../components/SectionHeading'
import SkillIcon from '../components/SkillIcon'
import { skillGroups } from '../data/skills'
import { useT } from '../settings'

export default function Skills() {
  const t = useT()
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        kicker="Tech stack"
        title="Skills & Tools"
        subtitle="Technologies I work with — some daily, some explored through projects and experiments."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g) => (
          <div key={g.category} className="rounded-xl border border-white/5 bg-ink-900/60 p-5 glow-card">
            <h3 className="font-mono text-xs uppercase tracking-widest text-teal-300">{t(g.category)}</h3>
            <ul className="mt-4 space-y-2">
              {g.items.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-slate-300">
                  <SkillIcon name={item} />
                  {t(item)}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
