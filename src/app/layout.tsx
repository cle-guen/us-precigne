import Header from '@/components/Header'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'US Précigné - Accueil',
  description:
    'Union Sportive de Précigné - Association omnisports créée en 1921 : Football, Gymnastique, Judo, Tennis et Yoga.',
  keywords:
    'US Précigné, sport, association, football, gym, judo, tennis, yoga, Précigné',
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

        <main role="main">{children}</main>

        <footer className="bg-gray-900 text-white mt-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <div className="space-y-2 text-gray-300">
                  <a
                    href="mailto:usprecigne.omnisports@gmail.com"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-5 h-5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    usprecigne.omnisports@gmail.com
                  </a>
                  <a
                    href="tel:+33123456789"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-5 h-5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    +33 1 23 45 67 89
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Nos Sports</h3>
                <div className="space-y-2">
                  <Link
                    href="/sports/football"
                    className="block text-gray-300 hover:text-white transition-colors"
                  >
                    Football
                  </Link>
                  <Link
                    href="/sports/gym"
                    className="block text-gray-300 hover:text-white transition-colors"
                  >
                    Gymnastique
                  </Link>
                  <Link
                    href="/sports/judo"
                    className="block text-gray-300 hover:text-white transition-colors"
                  >
                    Judo
                  </Link>
                  <Link
                    href="/sports/tennis"
                    className="block text-gray-300 hover:text-white transition-colors"
                  >
                    Tennis
                  </Link>
                  <Link
                    href="/sports/yoga"
                    className="block text-gray-300 hover:text-white transition-colors"
                  >
                    Yoga
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Informations</h3>
                <div className="space-y-2">
                  <Link
                    href="/actualites"
                    className="block text-gray-300 hover:text-white transition-colors"
                  >
                    Actualités
                  </Link>
                  <Link
                    href="/mentions-legales"
                    className="block text-gray-300 hover:text-white transition-colors"
                  >
                    Mentions légales
                  </Link>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400">
                  © 2025 Union Sportive de Précigné. Tous droits réservés.
                </p>
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.ffco.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src="/images/logo-ffco-new.png"
                      alt="Logo FFCO"
                      width={60}
                      height={40}
                      className="object-contain"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <SpeedInsights />
      </body>
    </html>
  )
}
