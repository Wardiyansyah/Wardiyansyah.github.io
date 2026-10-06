import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/profile'
import { useT } from '../settings'

export default function Contact() {
  const t = useT()
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading kicker="Get in touch" title="Contact" />
      <div className="rounded-2xl border border-white/5 bg-ink-900/60 p-8 glow-card">
        <p className="max-w-xl text-slate-400">
          {t('Have a project, collaboration, or technical discussion? Feel free to get in touch.')}
        </p>
        <ul className="mt-6 space-y-3 font-mono text-sm">
          <li>
            <a className="text-slate-300 hover:text-teal-300" href={`mailto:${profile.email}`}>
              ✉ {profile.email}
            </a>
          </li>
          <li>
            <a className="text-slate-300 hover:text-teal-300" href={profile.github} target="_blank" rel="noreferrer">
              GitHub → {profile.github}
            </a>
          </li>
          <li>
            <a className="text-slate-300 hover:text-teal-300" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn → {profile.linkedin}
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
