import {
  siArduino,
  siCplusplus,
  siCss,
  siDocker,
  siEspressif,
  siFlutter,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siLinux,
  siMariadb,
  siMysql,
  siNeovim,
  siNextdotjs,
  siNginx,
  siNodedotjs,
  siPhp,
  siPlatformio,
  siPostgresql,
  siPython,
  siReact,
  siStreamlit,
  siSupabase,
  siUbuntu,
} from 'simple-icons'

export interface SkillIcon {
  path: string
  /** Brand color as hex without '#', or undefined to use the current text color. */
  hex?: string
}

// Generic outline icons (24x24, stroke-based) for items that have no brand logo.
export const genericIcons = {
  api: 'M8 3H6a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h2M16 3h2a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2h-2',
  chip: 'M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3M7 5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM9 9h6v6H9z',
  code: 'M16 18l6-6-6-6M8 6l-6 6 6 6',
  database:
    'M12 3c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3zM4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6',
  monitor: 'M4 4h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM8 20h8M12 16v4',
} as const

export type GenericIconName = keyof typeof genericIcons

const brand = (icon: { path: string; hex: string }): SkillIcon => ({ path: icon.path, hex: icon.hex })

// Map each skill label (as written in skills.ts) to a brand logo or a generic icon.
export const skillIcons: Record<string, SkillIcon | GenericIconName> = {
  PHP: brand(siPhp),
  JavaScript: brand(siJavascript),
  HTML: brand(siHtml5),
  CSS: brand(siCss),
  Python: brand(siPython),
  'C++': brand(siCplusplus),

  MySQL: brand(siMysql),
  PostgreSQL: brand(siPostgresql),
  Supabase: brand(siSupabase),
  'REST API': 'api',
  'PHP backend development': brand(siPhp),

  'Scriptcase 9': 'code',
  Flutter: brand(siFlutter),
  'Node.js': brand(siNodedotjs),
  React: brand(siReact),
  'Next.js': brand(siNextdotjs),
  Streamlit: brand(siStreamlit),
  Git: brand(siGit),
  GitHub: brand(siGithub),

  Linux: brand(siLinux),
  'Ubuntu Server': brand(siUbuntu),
  Nginx: brand(siNginx),
  'PHP-FPM': brand(siPhp),
  MariaDB: brand(siMariadb),
  Docker: brand(siDocker),

  'Arduino UNO': brand(siArduino),
  ESP32: brand(siEspressif),
  'HC-SR04': 'chip',
  L298N: 'chip',
  LM2596: 'chip',
  PlatformIO: brand(siPlatformio),
  'Embedded (Arduino-style)': 'chip',

  'VS Code': 'code',
  Neovim: brand(siNeovim),
  'Arduino IDE': brand(siArduino),
  Navicat: 'database',
  'Linux dev environments': brand(siLinux),
  'Windows dev environments': 'monitor',
}
