import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'US Précigné - Accueil',
  description: 'Union Sportive de Précigné - Association omnisports créée en 1921 : Football, Gymnastique, Judo, Tennis et Yoga.',
  keywords: 'US Précigné, sport, association, football, gym, judo, tennis, yoga, Précigné',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />

        <main role="main">
          {children}
        </main>

        <footer className="bg-gray-900 text-white mt-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <div className="space-y-2 text-gray-300">
                  <p>📧 usprecigne.omnisports@gmail.com</p>
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
            <div className="border-t border-gray-700 mt-8 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400">&copy; 2024 Association Sportive. Tous droits réservés.</p>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-sm">Partenaire :</span>
                  <Image
                    src="/images/logo-ffco.avif"
                    alt="Logo FFCO"
                    width={60}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}