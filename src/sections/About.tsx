import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/profile'
import { useT } from '../settings'

export default function About() {
  const t = useT()
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading kicker="Who I am" title="About Me" />
      <div className="grid gap-8 md:grid-cols-3">
        <div className="space-y-4 text-slate-400 md:col-span-2">
          <p>{t(profile.bio)}</p>
          <p>
            {t(
              "The through-line of my journey: TKJ fundamentals, IT support, and networking first — then embedded/robotics builds — then Software Engineering, HMSE technical work, and professional IT development. Today I'm most interested in web and backend development, mobile development, system development, and IoT/embedded projects.",
            )}
          </p>
          <p>
            {t(
              'My approach is simple: learn by building real systems, troubleshoot real problems, and share what I learn with others.',
            )}
          </p>
        </div>
        <dl className="rounded-xl border border-white/5 bg-ink-900/60 p-6 glow-card font-mono text-sm">
          <div className="py-2">
            <dt className="text-slate-500">{t('Location')}</dt>
            <dd className="text-slate-200">{t(profile.location)}</dd>
          </div>
          <div className="py-2">
            <dt className="text-slate-500">{t('Education')}</dt>
            <dd className="mt-1 space-y-3 text-slate-200">
              <div>
                <p className="font-medium">Universitas Insan Pembangunan Indonesia</p>
                <p className="text-slate-400">{t('Software Engineering')}</p>
                <p className="font-mono text-xs text-teal-300/80">{t('Currently studying')}</p>
              </div>
              <div>
                <p className="font-medium">SMKS Binong Permai</p>
                <p className="text-slate-400">Teknik Komputer dan Jaringan (TKJ)</p>
                <p className="font-mono text-xs text-teal-300/80">2021–2024</p>
              </div>
            </dd>
          </div>
          <div className="py-2">
            <dt className="text-slate-500">{t('Focus')}</dt>
            <dd className="text-slate-200">Web · Backend · Mobile · IoT</dd>
          </div>
          <div className="py-2">
            <dt className="text-slate-500">{t('Role')}</dt>
            <dd className="text-slate-200">IT Staff · PT. Buntara Megah Inti</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
