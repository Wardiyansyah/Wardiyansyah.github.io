import HeroVisual from '../components/HeroVisual'
import { profile } from '../data/profile'
import { useT } from '../settings'

export default function Hero() {
  const t = useT()
  return (
    <section id="home" className="relative pt-28 pb-20">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" aria-hidden="true" />
      <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" aria-hidden="true" />
      <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal-300/80">{t('// Software Engineering')}</p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-100 sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-xl font-semibold sm:text-2xl">
            <span className="text-gradient">{t(profile.headline)}</span>
          </p>
          <p className="mt-5 max-w-xl text-lg text-slate-400">{t(profile.tagline)}</p>
          <p className="mt-3 font-mono text-sm text-slate-500">
            Web · Backend/API · Mobile · IoT · Linux
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-lg bg-teal-400 px-5 py-2.5 text-sm font-semibold text-ink-950 transition hover:bg-teal-300">
              {t('View Projects')}
            </a>
            <a href="#about" className="rounded-lg border border-white/10 px-5 py-2.5 text-sm text-slate-300 transition hover:border-teal-400/40 hover:text-teal-300">
              {t('About Me')}
            </a>
            <a href="#contact" className="rounded-lg border border-white/10 px-5 py-2.5 text-sm text-slate-300 transition hover:border-teal-400/40 hover:text-teal-300">
              {t('Contact')}
            </a>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  )
}
