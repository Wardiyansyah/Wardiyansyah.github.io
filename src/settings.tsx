import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { id as idTranslations } from './i18n/translations'

export type Lang = 'en' | 'id'
export type Theme = 'dark' | 'light'

interface Settings {
  lang: Lang
  setLang: (l: Lang) => void
  theme: Theme
  toggleTheme: () => void
  toggleLang: () => void
}

const SettingsContext = createContext<Settings | null>(null)

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('lang')
    if (saved === 'id' || saved === 'en') return saved
    return navigator.language?.toLowerCase().startsWith('id') ? 'id' : 'en'
  })
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme')
    return saved === 'light' ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  const value = useMemo<Settings>(
    () => ({
      lang,
      setLang,
      theme,
      toggleTheme: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
      toggleLang: () => setLang((l) => (l === 'id' ? 'en' : 'id')),
    }),
    [lang, theme],
  )

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>
}

export function useSettings(): Settings {
  const ctx = useContext(SettingsContext)
  if (!ctx) throw new Error('useSettings must be used within SettingsProvider')
  return ctx
}

export function useT() {
  const { lang } = useSettings()
  return (text: string): string => (lang === 'id' ? (idTranslations[text] ?? text) : text)
}
