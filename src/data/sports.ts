import { Sport } from '@/lib/types';

export const sports: Sport[] = [
  {
    slug: 'football',
    name: 'Football',
    logo: '/images/logos/football-logo.png',
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
    logo: '/images/logos/gym-logo.png',
    heroImage: '/images/gym-hero.avif',
    intro: 'La section gym a plus de 40 ans (création fin 1977) et c\'est à la salle des fêtes que se déroulaient les premières séances. La Section est présidée par Nicole LANGLAIS.\n\nDepuis, la section a continué de se structurer et s\'est affiliée à la fédération française d\'éducation physique et de gymnastique volontaire (FFEPGV).\n\nElle compte aujourd\'hui 38 inscrits.\n\nL\'objectif de la section est de proposer une activité physique et sportive de loisirs et de bien-être permettant d\'améliorer sa condition physique tout en se faisant plaisir pour toute personne âgée de 15 ans et plus.\n\n**Activités principales :** step, cardio, abdos, stretching, pilates, HIIT (entraînement fractionné haute intensité) et aussi en juin l\'aquagym ou la randonnée.\n\nLes séances ont lieu le jeudi de 19h00 à 20h00 ou de 20h00 à 21h00 à la salle omnisports et sont encadrées par un animateur diplômé.',
    schedule: [
      { day: 'Jeudi', time: '19:00 - 20:00', location: 'Salle omnisports', note: 'Encadrement par animateur diplômé - 38 inscrits' },
      { day: 'Jeudi', time: '20:00 - 21:00', location: 'Salle omnisports', note: 'Encadrement par animateur diplômé' },
      { day: 'Juin', time: 'Horaires variables', location: 'Extérieur/Piscine', note: 'Aquagym ou randonnée (activités spéciales)' },
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
    logo: '/images/logos/judo-logo.png',
    heroImage: '/images/judo-hero.avif',
    intro: 'L\'USP judo est un club de sport familial et chaleureux, ouvert aussi bien pour le loisir que pour ceux qui veulent faire de la compétition.\n\nNous accueillons les enfants dès l\'âge de 4 ans (enfants entrant en Moyenne Section au 1er septembre).\n\nMathias ETOURMY, professeur diplômé, a grandi et s\'est formé au sein du club. Il y enseigne le judo depuis 2003 et le taïso (renforcement musculaire ouvert à tous, judoka et non judoka) à partir de 14 ans) depuis septembre 2020. Il transmet durant ses cours sa passion pour le judo et l\'arbitrage qu\'il pratique au plus haut niveau national.\n\n**2 dojos :** Alain Rougé (salle omnisports) et salle Champagne (Rue des Écoles)\n\nLes lundis et jeudis soirs, pédibus entre la garderie périscolaire et la salle Champagne.\n\n**Club référencé au Handiguide :** inclusion des enfants porteurs d\'une difficulté ou d\'un handicap sur les cours classiques, cours judo adapté / parajudo pour les adultes le mercredi matin.',
    schedule: [
      { day: 'Lundi', time: 'Soir', location: 'Dojo Alain Rougé (salle omnisports) / Salle Champagne (Rue des Écoles)', note: 'Pédibus disponible depuis la garderie périscolaire' },
      { day: 'Mercredi', time: 'Toute la journée', location: 'Dojo Alain Rougé (salle omnisports) / Salle Champagne (Rue des Écoles)', note: 'Cours judo adapté/parajudo adultes le matin' },
      { day: 'Jeudi', time: 'Soir', location: 'Dojo Alain Rougé (salle omnisports) / Salle Champagne (Rue des Écoles)', note: 'Pédibus disponible depuis la garderie périscolaire' },
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
    logo: '/images/logos/tennis-logo.png',
    heroImage: '/images/tennis-hero.avif',
    intro: 'La section tennis créée au milieu des années 70 est affiliée à la fédération française de tennis (FFT) et propose la découverte et la pratique du tennis et activités annexes, en loisirs et en compétition, au travers de ses différentes activités :\n\n• École de tennis (jeunes de 4 à 18 ans) : initiation et perfectionnement\n• Cours adultes : initiation et perfectionnement\n• Découverte de la compétition jeunes et femmes débutantes (compétition libre, raquettes FFT)\n• Organisation de compétitions (tournois open et interne)\n• Participations aux championnats départementaux jeunes, seniors (masculin et féminin) et seniors+ 35 ans féminin\n• Animations diverses, portes ouvertes\n\nLa section compte cette saison 87 licenciés et dispose de 2 courts extérieurs et d\'un court couvert à la salle omnisports et est présidée par Marivie Moreau.\n\n40 enfants sont inscrits à l\'école de tennis (mercredi et samedi matin).\n\n4 équipes seniors sont engagées en championnat (2 équipes hommes et 2 équipes femmes).',
    contentImage: '/images/tennis-content.avif',
    schedule: [
      { day: 'Mercredi', time: '9h00 - 12h00', location: 'Courts extérieurs + court couvert', note: 'École de tennis (4-18 ans) - 40 enfants inscrits' },
      { day: 'Samedi', time: '9h00 - 12h00', location: 'Courts extérieurs + court couvert', note: 'École de tennis (4-18 ans)' },
      { day: 'Semaine', time: 'Horaires variables', location: 'Courts extérieurs + court couvert', note: 'Cours adultes & entraînements équipes' },
    ],
    contacts: {
      email: 'mariviemoreau@orange.fr',
      phone: '+33 6 66 84 52 94',
    },
    pdfs: [
      { label: 'Fiche inscription 2025-2026', file: '/pdfs/tennis_fiche_inscription_2025_2026.pdf' },
      { label: 'Tarifs 2021-2022', file: '/pdfs/tennis_tarifs_2025_2026.pdf' },
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
    logo: '/images/logos/yoga-logo.png',
    heroImage: '/images/yoga-hero.avif',
    intro: 'La section a été créée en 2016 et compte une soixantaine d\'adhérents adultes. La section est présidée par Nelly CHOQUET. Sylvie BOURREAU assure le secrétariat et Murielle REGNER les fonctions de trésorière.\n\nLes cours adultes sont assurés par Anna GEOFFROY depuis la saison 2024/2025, enseignante diplômée de Yoga Alliance International, formée en Hatha et Vinyasa Yoga ainsi qu\'en Yoga Thérapie ostéo articulaire (méthode Green Yoga). Elle propose un yoga adapté à tous les niveaux (débutants à expérimentés) et clôture les séances avec une méditation guidée. Chacun fait selon son niveau et ses possibilités.\n\nLe yoga contribue à répondre aux enjeux de bien-être et de santé. Les cours comportent des pratiques de relaxation, des exercices respiratoires (pranayamas), des pratiques de concentration, des postures (asanas), des gestes (mudras) et des verrous (bandhas), etc… Chaque pratique fait progresser dans l\'acquisition d\'une maîtrise générale du corps, du souffle, des émotions...\n\n• 1ère séance gratuite\n• Des portes ouvertes sont organisées tous les ans en fin de saison (fin juin)',
    schedule: [
      { day: 'Lundi', time: '14:30 - 16:00', location: 'Salle des Rivauderies — Précigné', note: 'Cours 1 (1h30) - route de Sablé, près du stade de foot' },
      { day: 'Lundi', time: '16:15 - 17:45', location: 'Salle des Rivauderies — Précigné', note: 'Cours 2 (1h30)' },
      { day: 'Lundi', time: '18:15 - 19:45', location: 'Salle des Rivauderies — Précigné', note: 'Cours 3 (1h30)' },
      { day: 'Lundi', time: '20:00 - 21:30', location: 'Salle des Rivauderies — Précigné', note: 'Cours 4 (1h30)' },
      { day: 'Jeudi', time: '14:30 - 16:00', location: 'Salle des Rivauderies — Précigné', note: 'Cours 5 (1h30)' },
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