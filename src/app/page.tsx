import SportCard from '@/components/SportCard'
import { sports } from '@/data/sports'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-50 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-lg border-l-8 border-red-700 p-8 md:p-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              US Précigné
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600">
              Union Sportive de Précigné - Association omnisports depuis 1921
            </p>
            <a
              href="#presentation"
              className="inline-block bg-red-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors shadow-lg"
            >
              Découvrir notre histoire
            </a>
          </div>
        </div>
      </section>

      {/* Présentation Section */}
      <section id="presentation" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Présentation USP
            </h2>
          </div>

          <div className="prose prose-lg max-w-4xl mx-auto text-gray-700 leading-relaxed">
            <p className="mb-6">
              L‘union sportive de Précigné est association loi 1901, née au
              lendemain de la guerre 14/18. Elle a été créée en{' '}
              <strong>1921 (le 19/11/1921)</strong> et déclarée en
              sous-préfecture en 1922 où elle a reçu à cette occasion l‘agrément
              jeunesse et sports.
            </p>

            <p className="mb-6">
              Elle a d‘emblée revêtu le caractère d‘association omnisports, même
              si, à ses débuts, les activités proposées se limitaient au
              football et à des activités de tir.
            </p>

            <p className="mb-6">
              Au fil du temps, des sections tennis, puis gymnastique adultes ont
              été ouvertes. En <strong>1986</strong>, c‘est la section judo qui
              voit le jour. Enfin la section yoga a été créée en{' '}
              <strong>2016</strong>.
            </p>

            <p className="mb-8">
              L‘association comporte donc aujourd‘hui{' '}
              <strong>5 sections</strong> (football, tennis, judo, gymnastique
              adulte et yoga). Elle seule a la capacité juridique. A ce titre,
              elle prend toutes les décisions relatives à la gestion,
              l‘administration, au budget, etc. Elle est l‘interlocutrice des
              instances administratives pour toutes les sections.
            </p>

            <p className="mb-8">
              Son objectif est d‘une part de coordonner et faciliter le travail
              des sections, d‘autre part de favoriser la pratique sportive sur
              Précigné. Son conseil d‘administration est composé de
              représentants des sections dont le nombre dépend du nombre
              d‘adhérents dans chaque section. Le conseil d‘administration est
              dirigé par un comité directeur.
            </p>
          </div>
        </div>
      </section>

      {/* Comité Directeur Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Comité Directeur
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              A ce jour les membres du comité directeur sont les suivants :
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Président
              </h3>
              <p className="text-lg font-semibold text-gray-700 mb-1">
                Thierry COQUEREAU
              </p>
              <p className="text-sm text-gray-600">
                Membre de la section tennis
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-12 h-12 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Trésorière
              </h3>
              <p className="text-lg font-semibold text-gray-700 mb-1">
                Marivie MOREAU
              </p>
              <p className="text-sm text-gray-600">
                Présidente de la section tennis et trésorière de la section
                gymnastique
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Secrétaire
              </h3>
              <p className="text-lg font-semibold text-gray-700 mb-1">
                Caroline RENAULT
              </p>
              <p className="text-sm text-gray-600">
                Secrétaire de l‘association
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Section */}
      <section id="sports" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos 5 Sections Sportives
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Que vous soyez débutant ou expérimenté, nous avons une activité
              qui vous correspond. Rejoignez-nous pour vivre votre passion du
              sport&nbsp;!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sports.map((sport) => (
              <SportCard key={sport.slug} sport={sport} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nous contacter
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contactez-nous pour plus d&apos;informations ou venez nous rendre
            visite&nbsp;!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto sm:max-w-none">
            <a
              href="mailto:usprecigne.omnisports@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-red-700 text-white font-semibold rounded-lg hover:bg-red-800 transition-colors"
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
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              usprecigne.omnisports@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
