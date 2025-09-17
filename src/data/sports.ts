import { Sport } from '@/lib/types';

export const sports: Sport[] = [
  {
    slug: 'football',
    name: 'Football',
    logo: '/images/logos/football-logo.webp',
    heroImage: '/images/football-hero.webp',
    intro: 'Rejoignez notre équipe de football et développez vos compétences techniques et tactiques dans une ambiance conviviale. Notre club accueille tous les niveaux, des débutants aux joueurs expérimentés.',
    contentImage: '/images/football-content.webp',
    schedule: [
      { day: 'Lundi', time: '18h00 - 20h00', location: 'Terrain A', note: 'Entrainement technique' },
      { day: 'Mercredi', time: '19h30 - 21h30', location: 'Terrain A', note: 'Entrainement physique' },
      { day: 'Samedi', time: '14h00 - 16h00', location: 'Terrain A', note: 'Match amical' },
    ],
    contacts: {
      facebook: 'https://www.facebook.com/USPrecigne',
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
    logo: '/images/logos/gym-logo.webp',
    heroImage: '/images/gym-hero.jpg',
    intro: 'La section gym a plus de 40 ans (création fin 1977) et c\'est à la salle des fêtes que se déroulaient les premières séances. La section est présidée par Nicole LANGLAIS. Depuis, la section a continué de se structurer et s\'est affiliée à la FFEPGV (Fédération Française d\'Éducation Physique et de Gymnastique Volontaire). Elle compte aujourd\'hui 38 inscrits. L\'objectif est de proposer une activité physique et sportive de loisirs et de bien-être pour tous.',
    contentImage: '/images/gym-2.jpg',
    schedule: [
      { day: 'Jeudi', time: '19:00 - 20:00', location: 'Salle omnisports' },
      { day: 'Jeudi', time: '20:00 - 21:00', location: 'Salle omnisports' },
    ],
    contacts: {
      email: 'nicetjolanglais@orange.fr',
      phone: '+33 6 31 73 57 54',
    },
    pdfs: [
      { label: 'Affiche reprise gym', file: '/pdfs/affiche_reprise_gym.pdf' },
      { label: 'Fiche inscription gym 2025-2026', file: '/pdfs/fiche_inscription_gym_2025_2026.pdf' },
      { label: 'Questionnaire santé', file: '/pdfs/questionnaire_sante.pdf' },
      { label: 'Résumé des garanties MAIF', file: '/pdfs/resume_garanties_MAIF.pdf' },
    ],
  },
  {
    slug: 'judo',
    name: 'Judo',
    logo: '/images/logos/judo-logo.webp',
    heroImage: '/images/judo-hero.jpg',
    intro: 'L\'USP judo est un club de sport familial et chaleureux, ouvert pour le loisir comme pour la compétition. Accueil dès 4 ans (entrée en Moyenne Section au 1er septembre). Mathias ETOURMY, professeur diplômé, formé au club, enseigne le judo depuis 2003 et le taïso (renforcement musculaire ouvert à tous, judoka et non-judoka) à partir de 14 ans depuis septembre 2020. Il transmet sa passion pour le judo et l\'arbitrage qu\'il pratique au plus haut niveau national.',
    contentImage: '/images/judo-2.jpg',
    schedule: [
      { day: 'Lundi', time: 'Soir', location: 'Dojo (Alain Rougé / Champagne)' },
      { day: 'Mercredi', time: 'Toute la journée', location: 'Dojo (Alain Rougé / Champagne)' },
      { day: 'Jeudi', time: 'Soir', location: 'Dojo (Alain Rougé / Champagne)' },
    ],
    contacts: {
      website: 'https://www.usprecignejudo.com/',
      facebook: 'https://www.facebook.com/profile.php?id=100057526297878',
      email: 'precignejudo@gmail.com',
      phone: '+33 6 09 33 57 78',
    },
    pdfs: [],
  },
  {
    slug: 'tennis',
    name: 'Tennis',
    logo: '/images/logos/tennis-logo.webp',
    heroImage: '/images/tennis-hero.jpg',
    intro: 'La section tennis créée au milieu des années 70 est affiliée à la FFT et propose découverte et pratique du tennis en loisir et en compétition, via différentes activités : école de tennis (4 à 18 ans) : initiation et perfectionnement ; cours adultes : initiation et perfectionnement ; découverte de la compétition jeunes et femmes débutantes (compétition libre, raquettes FFT) ; organisation de compétitions (tournois open et interne) ; participations aux championnats.',
    contentImage: '/images/tennis-2.jpg',
    schedule: [
      { day: 'Mercredi', time: 'École de tennis (enfants) – matin', location: 'Courts de tennis' },
      { day: 'Samedi', time: 'École de tennis (enfants) – matin', location: 'Courts de tennis' },
    ],
    contacts: {
      email: 'mariviemoreau@orange.fr',
      phone: '+33 6 66 84 52 94',
    },
    pdfs: [
      { label: 'Fiche inscription 2025-2026', file: '/pdfs/tennis_fiche_inscription_2025_2026.pdf' },
      { label: 'Tarifs 2025-2026', file: '/pdfs/tennis_tarifs_2025_2026.pdf' },
      { label: 'Formulaire QP sport majeurs', file: '/pdfs/tennis_formulaire_qp_sport_majeurs.pdf' },
      { label: 'Questionnaire santé mineurs', file: '/pdfs/tennis_questionnaire_sante_mineurs.pdf' },
      { label: 'Modèle certificat médical', file: '/pdfs/tennis_modele_certificat_medical.pdf' },
      { label: 'Modèle attestation adulte', file: '/pdfs/tennis_modele_attestation_adulte.pdf' },
      { label: 'Modèle attestation mineur', file: '/pdfs/tennis_modele_attestation_mineur.pdf' },
    ],
  },
  {
    slug: 'yoga',
    name: 'Yoga',
    logo: '/images/logos/yoga-logo.webp',
    heroImage: '/images/yoga-hero.jpg',
    intro: 'Section créée en 2016 avec une soixantaine d\'adhérents adultes. Présidente : Nelly CHOQUET. Secrétariat : Sylvie BOURREAU. Trésorerie : Murielle REGNER. Cours assurés par Anna GEOFFROY (saison 2024/2025), enseignante diplômée de Yoga Alliance International, formée en Hatha et Vinyasa Yoga ainsi qu\'en Yoga Thérapie (méthode Green Yoga). Yoga adapté à tous les niveaux (débutants à expérimentés) avec séance incluant une méditation guidée. 1ère séance d\'essai gratuite.',
    contentImage: '/images/yoga-2.jpg',
    schedule: [
      { day: 'Lundi', time: '14:30 - 16:00', location: 'Salle des Rivauderies (route de Sablé, près du stade de foot) — Précigné' },
      { day: 'Lundi', time: '16:15 - 17:45', location: 'Salle des Rivauderies — Précigné' },
      { day: 'Lundi', time: '18:15 - 19:45', location: 'Salle des Rivauderies — Précigné' },
      { day: 'Lundi', time: '20:00 - 21:30', location: 'Salle des Rivauderies — Précigné' },
      { day: 'Jeudi', time: '14:30 - 16:00', location: 'Salle des Rivauderies — Précigné' },
    ],
    contacts: {
      facebook: 'https://www.facebook.com/profile.php?id=100083001805365#',
      email: 'omnisportsyogaprecigne@gmail.com',
      phone: '+33 6 87 06 68 78',
    },
    pdfs: [
      { label: 'Bulletin d\'inscription 2025-2026', file: '/pdfs/yoga_bulletin_inscription_2025_2026.pdf' },
      { label: 'Questionnaire santé CERFA', file: '/pdfs/yoga_questionnaire_sante_cerfa.pdf' },
      { label: 'Flyer Yoga 2025-2026', file: '/pdfs/yoga_flyer_2025_2026.pdf' },
    ],
  },
];