import { NewsItem } from '@/lib/types'

export const news: NewsItem[] = [
  {
    id: 'judo-ecoles-decouvertes',
    title: 'Journées découvertes avec les écoles Judo',
    body: "Le Judo proposera des journées découvertes avec l'école publique et privée. École privée de St Jean St Joseph le vendredi 1er juillet, puis école publique de la Voutonnière les 4 et 5 juillet.",
    sportSlug: 'judo',
  },
  {
    id: 'tennis-open',
    title: 'Tournoi Tennis Open',
    body: 'Le tournoi Tennis Open a eu lieu du 20 mai au 12 juin. Ouvert à tous les licenciés NC à 15€ pour les hommes et NC à 15/2 pour les dames.',
    sportSlug: 'tennis',
  },
  {
    id: 'foot-tournoi-jeunes',
    title: 'Tournoi des jeunes à Précigné',
    body: 'Le 5 juin, tournoi des jeunes à Précigné (catégories U7 à U18). Venez encourager nos jeunes !',
    additionalImages: ['/images/news/tournoi-precigne.avif'],
    sportSlug: 'football',
  },
  {
    id: 'judo-portes-ouvertes',
    title: 'Portes Ouvertes Judo',
    body: 'Le Judo propose aussi des portes ouvertes les mercredis 8, 15, 22 et 29 juin. Venez nombreux !',
    additionalImages: ['/images/news/affiche-portes-ouvertes-judo.avif'],
    sportSlug: 'judo',
  },
  {
    id: 'foot-100ans',
    title: '100 ans du Foot',
    body: 'Pour les 100 ans du Club de Football de Précigné, une soirée est organisée le 1er juillet 2023 (reportée à cause de la crise sanitaire).',
    sportSlug: 'football',
  },
  {
    id: 'tennis-portes-ouvertes',
    title: 'Portes Ouvertes Tennis',
    body: 'Les mercredis 22 et 29 juin : Portes ouvertes Tennis, de 14h à 18h sur les terrains extérieurs de Précigné.',
    additionalImages: ['/images/news/flyer-portes-ouvertes-2022.avif'],
    sportSlug: 'tennis',
  },
]
