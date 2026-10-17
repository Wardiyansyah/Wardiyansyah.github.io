import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/profile'
import { siGithub } from 'simple-icons'

// LinkedIn was removed from simple-icons upstream, so its glyph is inlined here.
const LINKEDIN_PATH =
  'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z'
import { useT } from '../settings'

function BrandIcon({ path }: { path: string }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="shrink-0" aria-hidden="true">
      <path d={path} />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m3 6 9 7 9-7" />
    </svg>
  )
}

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
            <a
              className="inline-flex items-center gap-2.5 text-slate-300 transition hover:text-teal-300"
              href={`mailto:${profile.email}`}
            >
              <MailIcon /> {profile.email}
            </a>
          </li>
          <li>
            <a
              className="inline-flex items-center gap-2.5 text-slate-300 transition hover:text-teal-300"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <BrandIcon path={siGithub.path} /> {profile.name}
            </a>
          </li>
          <li>
            <a
              className="inline-flex items-center gap-2.5 text-slate-300 transition hover:text-teal-300"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <BrandIcon path={LINKEDIN_PATH} /> {profile.name} .
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
