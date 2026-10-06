export interface Profile {
  name: string
  headline: string
  tagline: string
  bio: string
  location: string
  email: string
  github: string
  linkedin: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export type ProjectCategory =
  | 'Web'
  | 'Backend'
  | 'Mobile'
  | 'IoT'
  | 'Academic'
  | 'HMSE'
  | 'Server'

export interface Project {
  title: string
  category: ProjectCategory
  description: string
  technologies: string[]
  role: string
  learned: string
  status: string
  featured?: boolean
  links?: { label: string; url: string }[]
}

export interface Experience {
  title: string
  organization: string
  period: string
  description: string[]
  technologies?: string[]
}

export interface TimelineItem {
  period: string
  title: string
  description: string
}
