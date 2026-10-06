import { useEffect, useMemo, useRef, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import { projectCategories, projects } from '../data/projects'
import { useT } from '../settings'

export default function Projects() {
  const t = useT()
  const [filter, setFilter] = useState<string>('All')
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [perView, setPerView] = useState(3)
  const trackRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number | null>(null)

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )
  const maxIndex = Math.max(0, visible.length - perView)

  useEffect(() => {
    const update = () =>
      setPerView(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    if (paused || visible.length <= perView) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const id = window.setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1))
    }, 4500)
    return () => window.clearInterval(id)
  }, [paused, maxIndex, visible.length, perView])

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        kicker="Selected work"
        title="Projects"
        subtitle="Real systems, academic work, and workshop builds. Filter by category."
      />
      <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label={t('Project filters')}>
        {projectCategories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={filter === c}
            onClick={() => {
              setFilter(c)
              setIndex(0)
            }}
            className={`rounded-full border px-4 py-1.5 font-mono text-xs transition ${filter === c
                ? 'border-teal-400/60 bg-teal-400/10 text-teal-300'
                : 'border-white/10 text-slate-400 hover:border-teal-400/30 hover:text-teal-300'
              }`}
          >
            {t(c)}
          </button>
        ))}
      </div>

      <div
        className="overflow-hidden touch-pan-y"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX
        }}
        onTouchEnd={(e) => {
          const dx = e.changedTouches[0].clientX - (touchStartX.current ?? 0)
          if (Math.abs(dx) > 50) {
            setIndex((i) => (dx < 0 ? (i >= maxIndex ? 0 : i + 1) : i <= 0 ? maxIndex : i - 1))
          }
        }}
      >
        <div
          ref={trackRef}
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
        >
          {visible.map((p) => (
            <div key={p.title} className="w-full shrink-0 px-2.5 mt-4 sm:w-1/2 lg:w-1/3">
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>

      {visible.length > perView && (
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            aria-label="Previous projects"
            onClick={() => setIndex((i) => (i <= 0 ? maxIndex : i - 1))}
            className="rounded-full border border-white/10 p-2 text-slate-400 transition hover:border-teal-400/40 hover:text-teal-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <div className="flex gap-1.5">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-teal-400' : 'w-1.5 bg-slate-600'
                  }`}
              />
            ))}
          </div>
          <button
            aria-label="Next projects"
            onClick={() => setIndex((i) => (i >= maxIndex ? 0 : i + 1))}
            className="rounded-full border border-white/10 p-2 text-slate-400 transition hover:border-teal-400/40 hover:text-teal-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </section>
  )
}
