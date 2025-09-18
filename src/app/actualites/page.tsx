import NewsList from '@/components/NewsList'
import { news } from '@/data/news'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Actualités - Association Sportive',
  description:
    'Suivez toutes les actualités de notre association sportive : événements, tournois et nouvelles activités.',
  keywords: 'actualités, sport, association, événements, tournois, nouvelles',
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
