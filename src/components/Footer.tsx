import { profile } from '../data/profile'
import { useT } from '../settings'

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#journey', label: 'Journey' },
  { href: '#publications', label: 'Publications' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  const t = useT()
  return (
    <footer className="border-t border-white/5 bg-ink-900/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
        <div>
          <p className="font-mono text-sm font-semibold text-teal-300">&lt;wardiyansyah.dev /&gt;</p>
          <p className="mt-3 text-sm text-slate-400">{t(profile.tagline)}</p>
        </div>
        <nav aria-label="Footer">
          <h3 className="font-mono text-xs uppercase tracking-widest text-slate-500">{t('Pages')}</h3>
          <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1.5">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-slate-400 transition hover:text-teal-300">
                  {t(l.label)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-slate-500">{t('Contact')}</h3>
          <ul className="mt-3 space-y-1.5 text-sm">
            <li>
              <a href={`mailto:${profile.email}`} className="text-slate-400 transition hover:text-teal-300">
                {profile.email}
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer" className="text-slate-400 transition hover:text-teal-300">
                GitHub
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 transition hover:text-teal-300">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-5 text-center text-sm text-slate-500">
        <p>{t('©2026 Wardiyansyah')}</p>
      </div>
    </footer>
  )
}
