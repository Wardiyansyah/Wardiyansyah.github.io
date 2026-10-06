export default function HeroVisual() {
  return (
    <div
      className="relative rounded-2xl border border-teal-400/20 bg-ink-900/70 p-5 font-mono text-[11px] leading-relaxed text-slate-400 shadow-2xl shadow-teal-500/5"
      aria-hidden="true"
    >
      <div className="mb-3 flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/60" />
      </div>
      <pre className="overflow-hidden text-slate-400">
        <code>{`$ ssh user@server
$ docker compose up -d
$ curl -X GET /api/v1/visits
[200] { "status": "ok", "visits": 42 }

> platformio run --target upload
> [esp32] motor=OK gyro=OK wifi=OK

$ flutter run --release
`}</code>
      </pre>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        {['Web', 'API', 'Flutter', 'PHP', 'IoT', 'Linux'].map((t) => (
          <span key={t} className="rounded-md border border-white/5 bg-ink-800 px-2 py-1 text-teal-300/80">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
