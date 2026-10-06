import SectionHeading from '../components/SectionHeading'
import { useT } from '../settings'

const trainings = [
  {
    title: 'HMSE 101: Your First Step into Programming',
    description:
      'A weekly programming series for beginners covering Python introduction and history, installation, running programs, Hello World, comments, data types, variables, operators, and conditions.',
  },
  {
    title: 'JavaScript Fundamentals',
    description:
      'Hands-on sessions for HMSE members covering variables, operators, string manipulation, and the DOM.',
  },
  {
    title: 'Smart Donation Box Workshop',
    description:
      'A two-day ESP32 workshop — Day 1: theory, Tinkercad, and project introduction. Day 2: hands-on implementation with hardware and firmware basics.',
  },
]

export default function HMSE() {
  const t = useT()
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        kicker="Organization"
        title="HMSE — Himpunan Mahasiswa Software Engineering"
        subtitle="Kadiv Litbang (Head of Research & Development Division): technical training, curriculum planning, workshops, project development, technical events, and recruitment/interviews."
      />
      <div className="grid gap-5 md:grid-cols-3">
        <p className="text-sm text-slate-500 md:col-span-3">
          {t("My HMSE path started in Litbang — creating learning curricula, preparing training materials, and developing the organization's website — and now continues as Kadiv Litbang.")}
        </p>
        {trainings.map((tr) => (
          <div key={tr.title} className="rounded-xl border border-white/5 bg-ink-900/60 p-6 glow-card">
            <h3 className="font-semibold text-slate-100">{t(tr.title)}</h3>
            <p className="mt-3 text-sm text-slate-400">{t(tr.description)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
