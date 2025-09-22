import NewsList from '@/components/NewsList'
import { news } from '@/data/news'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Actualités - US Précigné',
  description:
    "Suivez toutes les actualités de l'US Précigné : événements, tournois, résultats de compétitions et nouvelles activités de notre association omnisports.",
  keywords:
    'actualités, US Précigné, sport, association, événements, tournois, nouvelles, compétitions, résultats',
  authors: [{ name: 'US Précigné' }],
  creator: 'US Précigné',
  publisher: 'US Précigné',
  alternates: {
    canonical: 'https://usprecigne.fr/actualites',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://usprecigne.fr/actualites',
    siteName: 'US Précigné',
    title: 'Actualités - US Précigné',
    description:
      "Suivez toutes les actualités de l'US Précigné : événements, tournois, résultats de compétitions et nouvelles activités de notre association omnisports.",
    images: [
      {
        url: '/actualites/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Actualités US Précigné',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Actualités - US Précigné',
    description:
      "Suivez toutes les actualités de l'US Précigné : événements, tournois, résultats de compétitions et nouvelles activités.",
    images: ['/actualites/opengraph-image'],
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

export default function ActualitesPage() {
  return (
    <div className="min-h-screen py-8 sm:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <header className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Actualités
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Restez informés de toute l&apos;actualité de notre association :
            événements à venir, résultats de compétitions et nouveautés.
          </p>
        </header>

        <NewsList news={news} />
      </div>
    </div>
  )
}
