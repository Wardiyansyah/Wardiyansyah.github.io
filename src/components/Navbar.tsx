import { useState } from 'react'
import { useSettings, useT } from '../settings'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#journey', label: 'Journey' },
  { href: '#publications', label: 'Publications' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { lang, theme, toggleLang, toggleTheme } = useSettings()
  const t = useT()

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink-950/80 backdrop-blur">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5"
        aria-label="Primary"
      >
        <a href="#home" className="font-mono text-sm font-semibold text-teal-300">
          &lt;wardiyansyah.dev /&gt;
        </a>

        <div className="flex items-center gap-1 md:order-last">
          <button
            onClick={toggleLang}
            aria-label={lang === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
            className="rounded-md px-2 py-1.5 font-mono text-xs text-slate-400 transition hover:text-teal-300"
          >
            {lang === 'id' ? 'ID' : 'EN'}
          </button>
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Ganti ke mode gelap'}
            className="rounded-md p-2 text-slate-400 transition hover:text-teal-300"
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              </svg>
            )}
          </button>

          <button
            className="rounded-md p-2 text-slate-300 md:hidden"
            aria-label={t('Toggle navigation')}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a className="text-sm text-slate-400 transition hover:text-teal-300" href={l.href}>
                {t(l.label)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <ul
        className={`border-t border-white/5 bg-ink-950 px-5 transition-all duration-300 ease-out md:hidden ${
          open ? 'max-h-96 py-4 opacity-100' : 'max-h-0 overflow-hidden py-0 opacity-0'
        }`}
      >
        {links.map((l) => (
          <li key={l.href}>
            <a
              className="block py-2 text-sm text-slate-300"
              href={l.href}
              onClick={() => setOpen(false)}
            >
              {t(l.label)}
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}
