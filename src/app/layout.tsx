import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Association Sportive - Accueil',
  description: 'Découvrez nos activités sportives : Football, Gymnastique, Judo, Tennis et Yoga.',
  keywords: 'sport, association, football, gym, judo, tennis, yoga',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <header className="bg-white shadow-sm border-b border-gray-200">
          <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Navigation principale">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors">
                Association Sportive
              </Link>
              <div className="flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Accueil
                </Link>
                <div className="relative group">
                  <button className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                    Sports
                  </button>
                </div>
                <Link href="/actualites" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Actualités
                </Link>
              </div>
            </div>
          </nav>
        </header>

        <main role="main">
          {children}
        </main>

        <footer className="bg-gray-900 text-white mt-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <div className="space-y-2 text-gray-300">
                  <p>📧 contact@association.fr</p>
                  <p>📞 +33 1 23 45 67 89</p>
                  <p>📍 123 Rue du Sport, 75000 Paris</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Nos Sports</h3>
                <div className="space-y-2">
                  <Link href="/sports/football" className="block text-gray-300 hover:text-white transition-colors">
                    Football
                  </Link>
                  <Link href="/sports/gym" className="block text-gray-300 hover:text-white transition-colors">
                    Gymnastique
                  </Link>
                  <Link href="/sports/judo" className="block text-gray-300 hover:text-white transition-colors">
                    Judo
                  </Link>
                  <Link href="/sports/tennis" className="block text-gray-300 hover:text-white transition-colors">
                    Tennis
                  </Link>
                  <Link href="/sports/yoga" className="block text-gray-300 hover:text-white transition-colors">
                    Yoga
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Informations</h3>
                <div className="space-y-2">
                  <Link href="/actualites" className="block text-gray-300 hover:text-white transition-colors">
                    Actualités
                  </Link>
                  <p className="text-gray-300">Horaires d&apos;ouverture:</p>
                  <p className="text-gray-300 text-sm">Lun-Ven: 8h-22h</p>
                  <p className="text-gray-300 text-sm">Sam-Dim: 8h-20h</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Association Sportive. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}