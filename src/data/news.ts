import { NewsItem } from '@/lib/types'

export const news: NewsItem[] = [
  {
    id: 'judo-ecoles-decouvertes',
    title: 'Journées découvertes avec les écoles Judo',
    date: '2025-07-01',
    excerpt:
      "Le Judo proposera des journées découvertes avec l'école publique et privée.",
    body: "Le Judo proposera des journées découvertes avec l'école publique et privée. École privée de St Jean St Joseph le vendredi 1er juillet, puis école publique de la Voutonnière les 4 et 5 juillet.",
    sportSlug: 'judo',
  },
  {
    id: 'tennis-portes-ouvertes',
    title: 'Portes Ouvertes Tennis',
    date: '2025-06-22',
    excerpt:
      'Les mercredis 22 et 29 juin : Portes ouvertes Tennis, de 14h à 18h.',
    body: 'Les mercredis 22 et 29 juin : Portes ouvertes Tennis, de 14h à 18h sur les terrains extérieurs de Précigné.',
    additionalImages: ['/images/news/flyer-portes-ouvertes-2022.avif'],
    sportSlug: 'tennis',
  },
  {
    id: 'yoga-portes-ouvertes',
    title: 'Portes Ouvertes Yoga',
    date: '2025-06-20',
    excerpt: 'Le Yoga ouvre ses portes le lundi 20 juin.',
    body: 'Le Yoga ouvre ses portes le lundi 20 juin aux heures habituelles des cours de 18h30 et 20h30. Participation libre pour les intéressés.',
    additionalImages: ['/images/news/affiche-portes-ouvertes-yoga.avif'],
    sportSlug: 'yoga',
  },
  {
    id: 'yoga-initiation-ecole',
    title: "Journée initiation avec l'école publique Yoga",
    date: '2025-06-10',
    excerpt:
      "Les 10 et 17 juin, initiation Yoga pour les élèves de l'école publique.",
    body: "Les 10 et 17 juin, initiation Yoga pour les élèves de l'école publique de St Jean St Joseph.",
    sportSlug: 'yoga',
  },
  {
    id: 'judo-portes-ouvertes',
    title: 'Portes Ouvertes Judo',
    date: '2025-06-08',
    excerpt: 'Le Judo propose des portes ouvertes les mercredis en juin.',
    body: 'Le Judo propose aussi des portes ouvertes les mercredis 8, 15, 22 et 29 juin. Venez nombreux !',
    additionalImages: ['/images/news/affiche-portes-ouvertes-judo.avif'],
    sportSlug: 'judo',
  },
  {
    id: 'foot-tournoi-jeunes',
    title: 'Tournoi des jeunes à Précigné',
    date: '2025-06-05',
    excerpt: 'Le 5 juin, tournoi des jeunes à Précigné (catégories U7 à U18).',
    body: 'Le 5 juin, tournoi des jeunes à Précigné (catégories U7 à U18). Venez encourager nos jeunes !',
    additionalImages: ['/images/news/tournoi-precigne.avif'],
    sportSlug: 'football',
  },
  {
    id: 'tennis-open',
    title: 'Tournoi Tennis Open',
    date: '2025-05-20',
    excerpt: 'Le tournoi Tennis Open a eu lieu du 20 mai au 12 juin.',
    body: 'Le tournoi Tennis Open a eu lieu du 20 mai au 12 juin. Ouvert à tous les licenciés NC à 15€ pour les hommes et NC à 15/2 pour les dames.',
    sportSlug: 'tennis',
  },
  {
    id: 'yoga-ecole-privee',
    title: "Journées Découvertes Yoga pour l'école privée",
    date: '2025-05-05',
    excerpt:
      "Les 5 et 6 mai, journées découvertes Yoga pour les enfants de l'école privée.",
    body: "Le 5 et 6 mai, journées découvertes Yoga pour les enfants de l'école privée St Jean St Joseph.",
    additionalImages: [
      '/images/news/yoga-prive-1.avif',
      '/images/news/yoga-prive-3.avif',
    ],
    sportSlug: 'yoga',
  },
  {
    id: 'foot-100ans',
    title: '100 ans du Foot',
    date: '2023-07-01',
    excerpt:
      'Pour les 100 ans du Club de Football de Précigné, une soirée est organisée.',
    body: 'Pour les 100 ans du Club de Football de Précigné, une soirée est organisée le 1er juillet 2023 (reportée à cause de la crise sanitaire).',
    sportSlug: 'football',
  },
]
