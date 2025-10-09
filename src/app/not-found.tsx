import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-300px)] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-extrabold text-red-700">
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
          <div className="w-12 h-12 text-red-600 animate-bounce">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
          <div
            className="w-12 h-12 text-red-600 animate-bounce"
            style={{ animationDelay: '0.2s' }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
          <div
            className="w-12 h-12 text-red-600 animate-bounce"
            style={{ animationDelay: '0.4s' }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-red-700 text-white font-semibold rounded-lg hover:bg-red-800 transition-colors shadow-lg border-2 border-red-700"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Retour à l‘accueil
          </Link>
          <Link
            href="/actualites"
            className="inline-flex items-center px-6 py-3 bg-white text-red-700 font-semibold rounded-lg border-2 border-red-700 hover:bg-red-50 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
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
              className="text-sm text-gray-700 hover:text-red-700 transition-colors font-medium"
            >
              Football
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/sports/gym"
              className="text-sm text-gray-700 hover:text-red-700 transition-colors font-medium"
            >
              Gymnastique
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/sports/judo"
              className="text-sm text-gray-700 hover:text-red-700 transition-colors font-medium"
            >
              Judo
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/sports/tennis"
              className="text-sm text-gray-700 hover:text-red-700 transition-colors font-medium"
            >
              Tennis
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/sports/yoga"
              className="text-sm text-gray-700 hover:text-red-700 transition-colors font-medium"
            >
              Yoga
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
