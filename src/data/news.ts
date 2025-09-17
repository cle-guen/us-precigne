import { NewsItem } from '@/lib/types';

export const news: NewsItem[] = [
  {
    id: '1',
    title: 'Tournoi de tennis d\'été 2024',
    date: '2024-06-15',
    excerpt: 'Venez nombreux participer à notre tournoi annuel de tennis qui se déroulera tout le week-end du 29-30 juin.',
    body: 'Notre club organise son tournoi de tennis d\'été traditionnel les 29 et 30 juin prochains. Ouvert à tous les niveaux, ce tournoi friendly permettra aux membres de se mesurer dans une ambiance conviviale. Inscription jusqu\'au 25 juin auprès de l\'accueil.',
  },
  {
    id: '2',
    title: 'Nouvelle section Yoga prénatal',
    date: '2024-05-20',
    excerpt: 'Nous ouvrons une nouvelle section dédiée au yoga prénatal avec une professeure certifiée.',
    body: 'À partir de septembre, notre association propose des cours de yoga spécialement adaptés aux femmes enceintes. Ces séances permettront de maintenir une activité physique douce et de préparer l\'accouchement en toute sérénité. Cours tous les jeudis à 16h30.',
  },
  {
    id: '3',
    title: 'Assemblée générale 2024',
    date: '2024-04-10',
    excerpt: 'Retrouvez le compte-rendu de notre assemblée générale annuelle et les projets pour la saison prochaine.',
    pdf: '/pdfs/ag-2024.pdf',
  },
];