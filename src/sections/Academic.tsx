import SectionHeading from '../components/SectionHeading'
import { useT } from '../settings'

const topics = [
  {
    title: 'Student Attendance System',
    description:
      'Software Project Management academic case — project planning, system development, a 12-week timeline, and an estimated budget of Rp76.450.000.',
  },
  {
    title: 'Data Warehouse / Data Mining',
    description: 'Academic work on data warehousing, data mining, and database analysis.',
  },
  {
    title: 'Cloud Computing',
    description: 'Academic research and project work around cloud computing.',
  },
  {
    title: 'Business Information Technology',
    description:
      'Technology business topics including TalentDNA and low-capital IT business concepts.',
  },
]

export default function Academic() {
  const t = useT()
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading kicker="Coursework" title="Academic Projects & Topics" />
      <div className="grid gap-5 sm:grid-cols-2">
        {topics.map((topic) => (
          <div key={topic.title} className="rounded-xl border border-white/5 bg-ink-900/60 p-6 glow-card">
            <h3 className="font-semibold text-slate-100">{t(topic.title)}</h3>
            <p className="mt-2 text-sm text-slate-400">{t(topic.description)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
