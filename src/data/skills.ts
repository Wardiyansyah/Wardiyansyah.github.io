import type { SkillGroup } from '../types'

export const skillGroups: SkillGroup[] = [
  {
    category: 'Programming / Web',
    items: ['PHP', 'JavaScript', 'HTML', 'CSS', 'Python', 'C++'],
  },
  {
    category: 'Backend / Database',
    items: ['MySQL', 'PostgreSQL', 'Supabase', 'REST API', 'PHP backend development'],
  },
  {
    category: 'Framework / Tools',
    items: ['Scriptcase 9', 'Flutter', 'Node.js', 'React', 'Next.js', 'Streamlit', 'Git', 'GitHub'],
  },
  {
    category: 'Server / Infrastructure',
    items: ['Linux', 'Ubuntu Server', 'Nginx', 'PHP-FPM', 'MariaDB', 'Docker'],
  },
  {
    category: 'Hardware / IoT',
    items: ['Arduino UNO', 'ESP32', 'HC-SR04', 'L298N', 'LM2596', 'PlatformIO', 'Embedded (Arduino-style)'],
  },
  {
    category: 'Development Environment',
    items: ['VS Code', 'Neovim', 'Arduino IDE', 'Navicat', 'Linux dev environments', 'Windows dev environments'],
  },
]
