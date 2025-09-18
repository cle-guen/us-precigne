import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales — US Précigné',
  description:
    "Mentions légales du site de l'US Précigné. Ce site est informatif et ne collecte pas de données personnelles.",
}

export default function MentionsLegalesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pt-16">
      <h1 className="text-3xl font-bold mb-6">Mentions légales</h1>

      <section className="space-y-6 text-gray-700">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Éditeur du site</h2>
          <p>
            Le site est édité par l’Union Sportive de Précigné (US Précigné),
            association loi 1901.
          </p>
          <p>
            Siège social :{' '}
            <span className="text-gray-900 font-medium">
              XXXXXX (adresse complète)
            </span>
          </p>
          <p>
            Adresse e-mail de contact :{' '}
            <a
              className="underline hover:text-gray-900"
              href="mailto:usprecigne.omnisports@gmail.com"
            >
              usprecigne.omnisports@gmail.com
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            2. Directeur de la publication
          </h2>
          <p>
            Directeur de la publication :{' '}
            <span className="text-gray-900 font-medium">
              XXXXXX (nom du président de l’association ou représentant légal)
            </span>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. Hébergeur du site</h2>
          <p>
            Le site est hébergé par :{' '}
            <span className="text-gray-900 font-medium">Vercel Inc.</span>
          </p>
          <p>
            Adresse :{' '}
            <span className="text-gray-900 font-medium">
              340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
            </span>
          </p>
          <p>
            Site web :{' '}
            <span className="text-gray-900 font-medium">
              https://vercel.com
            </span>
          </p>
          <p>
            Contact :{' '}
            <span className="text-gray-900 font-medium">
              support@vercel.com
            </span>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. Objet du site</h2>
          <p>
            Ce site a pour objet de diffuser des informations sur l’association
            et ses sections sportives. Il ne propose aucun service de vente en
            ligne et ne met en place aucune fonctionnalité de compte
            utilisateur.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            5. Données personnelles
          </h2>
          <p>
            Aucune collecte de données personnelles n’est effectuée via ce site.
            Aucun formulaire de contact ni système de suivi nominatif n’est mis
            en place.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">6. Cookies</h2>
          <p>
            Le site utilise uniquement des cookies techniques nécessaires à son
            fonctionnement (le cas échéant). Aucun cookie à des fins de mesure
            d’audience, de publicité ou de profilage n’est déposé par l’éditeur.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            7. Contenus et propriété intellectuelle
          </h2>
          <p>
            Les textes, images et logos présentés sur le site sont la propriété
            de leurs auteurs respectifs et ne peuvent être reproduits sans
            autorisation préalable. Les images des sections sportives peuvent
            appartenir aux sections ou à leurs partenaires.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            8. Limitation de responsabilité
          </h2>
          <p>
            L’Union Sportive de Précigné s’efforce d’assurer l’exactitude des
            informations publiées mais ne saurait être tenue responsable
            d’erreurs, d’omissions ou de l’indisponibilité du service. Les liens
            externes, lorsqu’ils existent, ne relèvent pas de la responsabilité
            de l’association.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">9. Contact</h2>
          <p>
            Pour toute question relative au site ou à son contenu, vous pouvez
            écrire à :
            <a
              className="underline hover:text-gray-900 ml-1"
              href="mailto:usprecigne.omnisports@gmail.com"
            >
              usprecigne.omnisports@gmail.com
            </a>
          </p>
        </div>

        <p className="text-sm text-gray-500">
          Dernière mise à jour : {new Date().getFullYear()}
        </p>
      </section>
    </div>
  )
}
