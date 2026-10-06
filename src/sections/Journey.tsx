import SectionHeading from '../components/SectionHeading'
import { timeline } from '../data/timeline'
import { useT } from '../settings'

export default function Journey() {
  const t = useT()
  return (
    <section id="journey" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        kicker="Progression"
        title="Development Journey"
        subtitle="Student → learner → builder → IT practitioner."
      />
      <ol className="relative border-l border-teal-400/20 pl-8">
        {timeline.map((item, i) => (
          <li key={i} className="relative pb-10">
            <span className="absolute -left-[37px] mt-1 h-3 w-3 rounded-full border-2 border-teal-400 bg-ink-950 shadow-[0_0_10px_rgba(45,212,191,0.6)]" aria-hidden="true" />
            <p className="font-mono text-xs text-teal-300">{t(item.period)}</p>
            <h3 className="mt-1 font-semibold text-slate-100">{t(item.title)}</h3>
            <p className="mt-1 text-sm text-slate-400">{t(item.description)}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
