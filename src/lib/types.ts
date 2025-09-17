export interface ContactLinks {
  facebook?: string
  phone?: string
  email?: string
  website?: string
}

export interface ScheduleEntry {
  day: string
  time: string
  location?: string
  note?: string
}

export interface Sport {
  slug: string
  name: string
  logo?: string
  heroImage: string
  intro: string
  contentImage?: string
  schedule: ScheduleEntry[]
  contacts: ContactLinks
  pdfs?: { label: string; file: string }[]
}

export interface NewsItem {
  id: string
  title: string
  date?: string
  body?: string
  pdf?: string
  image?: string
  additionalImages?: string[]
  sportSlug?: string
}
