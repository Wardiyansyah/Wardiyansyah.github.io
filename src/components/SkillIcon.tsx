import { genericIcons, skillIcons } from '../data/skillIcons'

// Very dark brand colors (e.g. Next.js black) would disappear on the dark theme,
// so those fall back to the current text color.
function isTooDark(hex: string) {
  const n = parseInt(hex, 16)
  const r = (n >> 16) & 255
  const g = (n >> 8) & 255
  const b = n & 255
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 60
}

export default function SkillIcon({ name }: { name: string }) {
  const icon = skillIcons[name] ?? 'code'

  if (typeof icon === 'string') {
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
        className="shrink-0 text-teal-300/80"
        aria-hidden="true"
      >
        <path d={genericIcons[icon]} />
      </svg>
    )
  }

  const color = icon.hex && !isTooDark(icon.hex) ? `#${icon.hex}` : 'currentColor'
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill={color}
      className="shrink-0 text-slate-200"
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  )
}
