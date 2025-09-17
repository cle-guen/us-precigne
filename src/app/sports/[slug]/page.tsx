import { notFound } from 'next/navigation'
import { sports } from '@/data/sports'
import SportPage from '@/components/SportPage'
import type { Metadata } from 'next'

interface SportPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return sports.map((sport) => ({
    slug: sport.slug,
  }))
}

export async function generateMetadata({ params }: SportPageProps): Promise<Metadata> {
  const sport = sports.find((s) => s.slug === params.slug)
  
  if (!sport) {
    return {
      title: 'Sport non trouvé - Association Sportive'
    }
  }

  return {
    title: `${sport.name} - Association Sportive`,
    description: sport.intro,
    keywords: `${sport.name}, sport, association, cours, horaires`,
  }
}

export default function SportDetailPage({ params }: SportPageProps) {
  const sport = sports.find((s) => s.slug === params.slug)

  if (!sport) {
    notFound()
  }

  return <SportPage sport={sport} />
}