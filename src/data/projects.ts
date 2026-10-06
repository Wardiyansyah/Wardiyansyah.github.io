import type { Project } from '../types'

export const projects: Project[] = [
  {
    title: 'Sales Force Management (SFM)',
    category: 'Mobile',
    description:
      'A mobile-oriented sales visit management system involving authentication, customer visits, GPS validation, and visit tracking.',
    technologies: ['Flutter', 'Scriptcase', 'PHP', 'MySQL', 'REST API', 'GPS', 'Token auth'],
    role: 'Developer — Flutter app and Scriptcase API/backend integration, visit logic validation.',
    learned:
      'Token-based API authentication, GPS radius validation, visit duration rules, and end-to-end visit tracking flows.',
    status: 'In use (internal)',
    featured: true,
  },
  {
    title: 'Scriptcase Dashboard & Reporting',
    category: 'Backend',
    description:
      'Dashboards, reports, PDF exports, and financial/reporting systems built with Scriptcase 9, PHP 8.1/8.2, MySQL, and REST APIs.',
    technologies: ['Scriptcase 9', 'PHP', 'MySQL', 'REST API', 'PDF reports', 'Nested grids'],
    role: 'Developer — built reports, dashboards, and debugged production issues.',
    learned:
      'Troubleshooting real differences between development and production environments: HTTP/HTTPS, JSON responses, API headers, PHP compatibility, and report formatting.',
    status: 'Delivered',
    featured: true,
  },
  {
    title: 'SMARTBOT — ESP32 Autonomous Rover',
    category: 'IoT',
    description:
      'A small four-wheel robot built for an HMSE/PKKMB technology demo with autonomous movement, obstacle detection, and web-based manual control over Wi-Fi.',
    technologies: ['ESP32', 'L298N', 'HC-SR04', 'LM2596', 'TP4056', 'PlatformIO', 'Wi-Fi'],
    role: 'Builder — hardware assembly, firmware, and Wi-Fi control interface.',
    learned:
      'Sensor calibration, power supply stability, ESP32 Wi-Fi resilience, motor current handling, common ground, and voltage regulation.',
    status: 'Completed demo',
    featured: true,
  },
  {
    title: 'HMSE Website',
    category: 'Web',
    description:
      'Managed and developed the website for the Himpunan Mahasiswa Software Engineering (HMSE).',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    role: 'Developer',
    learned: 'Maintaining a real organizational website and translating member needs into web features.',
    status: '2024',
  },
  {
    title: 'Line Follower Robot',
    category: 'IoT',
    description:
      'A line follower robot built on Arduino with infrared sensors, developed during the SMK (TKJ) period.',
    technologies: ['Arduino', 'Infrared sensors'],
    role: 'Team Lead',
    learned: 'Coordinating a small team and integrating sensors with motor control logic.',
    status: '2024 · High School period',
  },
  {
    title: 'Automatic Lamp Prototype',
    category: 'IoT',
    description:
      'An automatic lamp prototype based on Arduino and a light sensor, built during the SMK (TKJ) period.',
    technologies: ['Arduino', 'Light sensor'],
    role: 'Team Lead',
    learned: 'Reading analog light sensor input and triggering actuators automatically.',
    status: '2024 · High School period',
  },
  {
    title: 'Smart Donation Box',
    category: 'IoT',
    description:
      'An ESP32-based donation box concept built during a two-day HMSE technical workshop, combining Tinkercad simulation and hands-on implementation.',
    technologies: ['ESP32', 'Tinkercad', 'Embedded programming'],
    role: 'Instructor support — workshop facilitation and mentoring participants.',
    learned:
      'How to teach hardware/software integration step by step, from theory to a working prototype.',
    status: 'Workshop completed',
  },
  {
    title: 'Ubuntu Server Lab',
    category: 'Server',
    description:
      'A self-hosted learning server running Nginx, PHP-FPM, MariaDB, Fail2ban, and Docker, with bridged virtual machine networking and AppArmor troubleshooting.',
    technologies: ['Ubuntu Server', 'Nginx', 'PHP-FPM', 'MariaDB', 'Docker', 'Fail2ban'],
    role: 'Sole experimenter — set up, hardened, and troubleshot the environment.',
    learned:
      'Server configuration, systemd services, SSH hardening, bridged networking in VMs, and debugging service permissions.',
    status: 'Ongoing learning',
  },
  {
    title: 'Student Attendance System',
    category: 'Academic',
    description:
      'A Software Project Management academic case covering planning, system development, a 12-week project timeline, and an estimated budget of Rp76.450.000.',
    technologies: ['Project management', 'Documentation', 'Planning'],
    role: 'Team member — planning and documentation.',
    learned:
      'How to structure a 12-week software project, estimate scope, and document assumptions.',
    status: 'Academic case',
  },
  {
    title: 'Data Warehouse & Data Mining Study',
    category: 'Academic',
    description:
      'Academic work involving data warehouse concepts, data mining, and database analysis.',
    technologies: ['SQL', 'Data analysis', 'Data warehouse concepts'],
    role: 'Student — analysis and reporting.',
    learned:
      'Fundamentals of warehousing data and extracting insights from relational datasets.',
    status: 'Academic',
  },
  {
    title: 'Cloud Computing Research',
    category: 'Academic',
    description:
      'Academic research and project work exploring cloud computing concepts and services.',
    technologies: ['Cloud computing concepts'],
    role: 'Student — research and presentation.',
    learned:
      'How cloud services map to real deployment needs and trade-offs.',
    status: 'Academic',
  },
  {
    title: 'Business IT Concepts',
    category: 'Academic',
    description:
      'Business Information Technology coursework covering technology businesses, TalentDNA, and low-capital IT business concepts.',
    technologies: ['Business analysis'],
    role: 'Student — research and case discussion.',
    learned:
      'How to evaluate IT business ideas and present them clearly.',
    status: 'Academic',
  },
]

export const projectCategories = [
  'All',
  'Web',
  'Backend',
  'Mobile',
  'IoT',
  'Academic',
  // 'HMSE',
  'Server',
] as const
