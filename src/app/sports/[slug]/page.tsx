import SportPage from '@/components/SportPage'
import { sports } from '@/data/sports'
import { config } from '@/lib/config'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

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

export async function generateMetadata({
  params,
}: SportPageProps): Promise<Metadata> {
  const sport = sports.find((s) => s.slug === params.slug)

  if (!sport) {
    return {
      title: 'Sport non trouvé - US Précigné',
      description: "Le sport demandé n'a pas été trouvé.",
    }
  }

  const baseUrl = config.baseUrl
  const sportUrl = `${baseUrl}/sports/${sport.slug}`

  return {
    title: `${sport.name} - US Précigné`,
    description: `${sport.intro} Découvrez nos cours, horaires et inscriptions pour ${sport.name.toLowerCase()} à l'US Précigné.`,
    keywords: `${sport.name}, ${sport.name.toLowerCase()}, US Précigné, sport, association, cours, horaires, inscription, Précigné`,
    authors: [{ name: 'US Précigné' }],
    creator: 'US Précigné',
    publisher: 'US Précigné',
    alternates: {
      canonical: sportUrl,
    },
    openGraph: {
      type: 'website',
      locale: 'fr_FR',
      url: sportUrl,
      siteName: 'US Précigné',
      title: `${sport.name} - US Précigné`,
      description: `${sport.intro} Découvrez nos cours, horaires et inscriptions pour ${sport.name.toLowerCase()} à l'US Précigné.`,
      images: [
        {
          url: '/images/logos/usp-logo.png',
          width: 1200,
          height: 630,
          alt: `${sport.name} - US Précigné`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${sport.name} - US Précigné`,
      description: `${sport.intro} Découvrez nos cours, horaires et inscriptions pour ${sport.name.toLowerCase()} à l'US Précigné.`,
      images: ['/images/logos/usp-logo.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default function SportDetailPage({ params }: SportPageProps) {
  const sport = sports.find((s) => s.slug === params.slug)

  if (!sport) {
    notFound()
  }

  return <SportPage sport={sport} />
}
