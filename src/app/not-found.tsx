import Link from 'next/link'
import { FaFutbol, FaHouse, FaNewspaper } from 'react-icons/fa6'

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-300px)] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-extrabold text-accent">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Page introuvable
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Désolé, la page que vous recherchez n‘existe pas ou a été déplacée.
          </p>
        </div>

        {/* Sport Icons Animation */}
        <div className="flex justify-center gap-4 mb-12 opacity-60">
          <FaFutbol className="w-12 h-12 text-accent animate-bounce" />
          <FaFutbol
            className="w-12 h-12 text-accent animate-bounce"
            style={{ animationDelay: '0.2s' }}
          />
          <FaFutbol
            className="w-12 h-12 text-accent animate-bounce"
            style={{ animationDelay: '0.4s' }}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors shadow-lg border-2 border-accent"
          >
            <FaHouse className="w-5 h-5 mr-2" />
            Retour à l‘accueil
          </Link>
          <Link
            href="/actualites"
            className="inline-flex items-center px-6 py-3 bg-white text-accent font-semibold rounded-lg border-2 border-accent hover:bg-red-50 transition-colors"
          >
            <FaNewspaper className="w-5 h-5 mr-2" />
            Voir les actualités
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-4">
            Vous pouvez aussi découvrir nos sections sportives :
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/sports/football"
              className="text-sm text-gray-700 hover:text-accent transition-colors font-medium"
            >
              Football
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/sports/gym"
              className="text-sm text-gray-700 hover:text-accent transition-colors font-medium"
            >
              Gymnastique
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/sports/judo"
              className="text-sm text-gray-700 hover:text-accent transition-colors font-medium"
            >
              Judo
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/sports/tennis"
              className="text-sm text-gray-700 hover:text-accent transition-colors font-medium"
            >
              Tennis
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/sports/yoga"
              className="text-sm text-gray-700 hover:text-accent transition-colors font-medium"
            >
              Yoga
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
