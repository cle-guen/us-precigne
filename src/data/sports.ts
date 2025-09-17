import { Sport } from '@/lib/types';

export const sports: Sport[] = [
  {
    slug: 'football',
    name: 'Football',
    heroImage: '/images/football-hero.jpg',
    intro: 'Rejoignez notre équipe de football et développez vos compétences techniques et tactiques dans une ambiance conviviale. Notre club accueille tous les niveaux, des débutants aux joueurs expérimentés.',
    contentImage: '/images/football-2.jpg',
    schedule: [
      { day: 'Lundi', time: '18h00 - 20h00', location: 'Terrain A', note: 'Entrainement technique' },
      { day: 'Mercredi', time: '19h30 - 21h30', location: 'Terrain A', note: 'Entrainement physique' },
      { day: 'Samedi', time: '14h00 - 16h00', location: 'Terrain A', note: 'Match amical' },
    ],
    contacts: {
      facebook: 'https://facebook.com/football-club',
      phone: '+33123456789',
      email: 'football@association.fr',
    },
    pdfs: [
      { label: 'Fiche d\'inscription Football', file: '/pdfs/inscription-football.pdf' },
      { label: 'Règlement intérieur', file: '/pdfs/reglement.pdf' },
    ],
  },
  {
    slug: 'gym',
    name: 'Gymnastique',
    heroImage: '/images/gym-hero.jpg',
    intro: 'Découvrez la gymnastique artistique et rythmique dans notre salle équipée. Nos cours s\'adressent à tous les âges et tous les niveaux, avec un encadrement professionnel.',
    contentImage: '/images/gym-2.jpg',
    schedule: [
      { day: 'Mardi', time: '17h00 - 18h30', location: 'Salle de gym', note: 'Débutants enfants' },
      { day: 'Jeudi', time: '18h30 - 20h00', location: 'Salle de gym', note: 'Niveau intermédiaire' },
      { day: 'Samedi', time: '10h00 - 12h00', location: 'Salle de gym', note: 'Cours avancé' },
    ],
    contacts: {
      phone: '+33123456790',
      email: 'gym@association.fr',
      website: 'https://gym-club.fr',
    },
    pdfs: [
      { label: 'Programme des cours', file: '/pdfs/programme-gym.pdf' },
      { label: 'Certificat médical', file: '/pdfs/certificat-medical.pdf' },
    ],
  },
  {
    slug: 'judo',
    name: 'Judo',
    heroImage: '/images/judo-hero.jpg',
    intro: 'Apprenez l\'art martial du judo dans le respect des traditions japonaises. Discipline, respect et maîtrise de soi sont au cœur de notre enseignement.',
    contentImage: '/images/judo-2.jpg',
    schedule: [
      { day: 'Lundi', time: '19h00 - 20h30', location: 'Dojo', note: 'Adultes débutants' },
      { day: 'Mercredi', time: '16h30 - 17h30', location: 'Dojo', note: 'Enfants 6-10 ans' },
      { day: 'Vendredi', time: '20h00 - 21h30', location: 'Dojo', note: 'Perfectionnement' },
    ],
    contacts: {
      facebook: 'https://facebook.com/judo-club',
      phone: '+33123456791',
      email: 'judo@association.fr',
    },
    pdfs: [
      { label: 'Guide du judoka', file: '/pdfs/guide-judo.pdf' },
      { label: 'Tarifs et inscriptions', file: '/pdfs/tarifs-judo.pdf' },
    ],
  },
  {
    slug: 'tennis',
    name: 'Tennis',
    heroImage: '/images/tennis-hero.jpg',
    intro: 'Perfectionnez votre jeu sur nos courts de tennis extérieurs et couverts. Cours individuels et collectifs avec des moniteurs diplômés d\'État.',
    contentImage: '/images/tennis-2.jpg',
    schedule: [
      { day: 'Mardi', time: '09h00 - 10h30', location: 'Court 1', note: 'Cours collectif adultes' },
      { day: 'Jeudi', time: '14h00 - 15h00', location: 'Court 2', note: 'École de tennis enfants' },
      { day: 'Samedi', time: '08h00 - 12h00', location: 'Courts 1-3', note: 'Tournoi interne' },
    ],
    contacts: {
      phone: '+33123456792',
      email: 'tennis@association.fr',
      website: 'https://tennis-club.fr',
    },
    pdfs: [
      { label: 'Planning des cours', file: '/pdfs/planning-tennis.pdf' },
      { label: 'Réservation courts', file: '/pdfs/reservation-tennis.pdf' },
    ],
  },
  {
    slug: 'yoga',
    name: 'Yoga',
    heroImage: '/images/yoga-hero.jpg',
    intro: 'Trouvez votre équilibre intérieur grâce à nos cours de yoga. Hatha, Vinyasa et yoga prénatal dans un environnement zen et bienveillant.',
    contentImage: '/images/yoga-2.jpg',
    schedule: [
      { day: 'Lundi', time: '18h30 - 19h45', location: 'Studio yoga', note: 'Hatha yoga débutants' },
      { day: 'Mercredi', time: '12h15 - 13h15', location: 'Studio yoga', note: 'Cours du midi' },
      { day: 'Vendredi', time: '19h00 - 20h15', location: 'Studio yoga', note: 'Vinyasa flow' },
    ],
    contacts: {
      facebook: 'https://facebook.com/yoga-zen',
      phone: '+33123456793',
      email: 'yoga@association.fr',
    },
    pdfs: [
      { label: 'Bienfaits du yoga', file: '/pdfs/bienfaits-yoga.pdf' },
      { label: 'Postures de base', file: '/pdfs/postures-yoga.pdf' },
    ],
  },
];