import Header from '@/components/Header'
import { config } from '@/lib/config'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
                  © {new Date().getFullYear()} Union Sportive de Précigné. Tous
                  droits réservés.
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

export const metadata: Metadata = {
  title: 'US Précigné - Association Omnisports',
  description:
    'Union Sportive de Précigné - Association omnisports créée en 1921 : Football, Gymnastique, Judo, Tennis et Yoga. Rejoignez-nous pour pratiquer votre sport favori !',
  keywords:
    'US Précigné, sport, association, football, gym, judo, tennis, yoga, Précigné, omnisports, club sportif',
  authors: [{ name: 'US Précigné' }],
  creator: 'US Précigné',
  publisher: 'US Précigné',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: config.baseUrl ? new URL(config.baseUrl) : undefined,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: config.baseUrl,
    siteName: 'US Précigné',
    title: 'US Précigné - Association Omnisports',
    description:
      'Union Sportive de Précigné - Association omnisports créée en 1921 : Football, Gymnastique, Judo, Tennis et Yoga. Rejoignez-nous pour pratiquer votre sport favori !',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'US Précigné - Association Omnisports',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'US Précigné - Association Omnisports',
    description:
      'Union Sportive de Précigné - Association omnisports créée en 1921 : Football, Gymnastique, Judo, Tennis et Yoga.',
    images: ['/images/og-image.png'],
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}
