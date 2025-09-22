// Configuration des métadonnées pour l'US Précigné

export const siteConfig = {
  name: 'US Précigné',
  description:
    'Union Sportive de Précigné - Association omnisports créée en 1921 : Football, Gymnastique, Judo, Tennis et Yoga.',
  url: 'https://usprecigne.fr',
  ogImage: '/images/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/usprecigne',
    facebook: 'https://facebook.com/usprecigne',
    instagram: 'https://instagram.com/usprecigne',
  },
  contact: {
    email: 'usprecigne.omnisports@gmail.com',
    phone: '+33 1 23 45 67 89', // Remplacez par le vrai numéro
  },
  address: {
    street: 'Rue de la Mairie',
    city: 'Précigné',
    postalCode: '72300',
    country: 'France',
  },
  sports: ['Football', 'Gymnastique', 'Judo', 'Tennis', 'Yoga'],
  keywords: [
    'US Précigné',
    'sport',
    'association',
    'omnisports',
    'football',
    'gymnastique',
    'judo',
    'tennis',
    'yoga',
    'Précigné',
    'Sarthe',
    'club sportif',
    'cours',
    'horaires',
    'inscription',
    'compétition',
    'tournoi',
  ],
}

export const generateMetadata = (
  title: string,
  description: string,
  image?: string,
  url?: string,
) => {
  return {
    title: `${title} - ${siteConfig.name}`,
    description,
    keywords: siteConfig.keywords.join(', '),
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    alternates: {
      canonical: url ? `${siteConfig.url}${url}` : siteConfig.url,
    },
    openGraph: {
      type: 'website',
      locale: 'fr_FR',
      url: url ? `${siteConfig.url}${url}` : siteConfig.url,
      siteName: siteConfig.name,
      title: `${title} - ${siteConfig.name}`,
      description,
      images: [
        {
          url: image || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${title} - ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} - ${siteConfig.name}`,
      description,
      images: [image || siteConfig.ogImage],
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
}
