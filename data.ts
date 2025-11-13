
import { User, Resource, Badge, Subject, Level, DocumentType, Term } from './types';

export const users: User[] = [
  { id: 'u1', name: 'Jean Dupont', email: 'jean.dupont@garanderie.edu', avatar: 'https://picsum.photos/seed/jdupont/100/100', role: 'Administrateur', status: 'Actif', lastActivity: '12/03/2024' },
  { id: 'u2', name: 'Amélie Dubois', email: 'amelie.dubois@garanderie.edu', avatar: 'https://picsum.photos/seed/adubois/100/100', role: 'Enseignant', status: 'Actif', lastActivity: '12/03/2024' },
  { id: 'u3', name: 'Marie Curie', email: 'marie.curie@garanderie.edu', avatar: 'https://picsum.photos/seed/mcurie/100/100', role: 'Modérateur', status: 'Actif', lastActivity: '12/03/2024' },
  { id: 'u4', name: 'Albert Einstein', email: 'albert.einstein@garanderie.edu', avatar: 'https://picsum.photos/seed/aeinstein/100/100', role: 'Enseignant', status: 'Actif', lastActivity: '11/03/2024' },
  { id: 'u5', name: 'Isaac Newton', email: 'isaac.newton@garanderie.edu', avatar: 'https://picsum.photos/seed/inewton/100/100', role: 'Enseignant', status: 'Actif', lastActivity: '10/03/2024' },
  { id: 'u6', name: 'Galileo Galilei', email: 'galileo.galilei@garanderie.edu', avatar: 'https://picsum.photos/seed/ggalilei/100/100', role: 'Enseignant', status: 'Inactif', lastActivity: '01/02/2024' },
  { id: 'u7', name: 'Louis Pasteur', email: 'louis.pasteur@garanderie.edu', avatar: 'https://picsum.photos/seed/lpasteur/100/100', role: 'Enseignant', status: 'Actif', lastActivity: '12/03/2024' },
  { id: 'u8', name: 'M. Bernard', email: 'm.bernard@garanderie.edu', avatar: 'https://picsum.photos/seed/mbernard/100/100', role: 'Enseignant', status: 'Actif', lastActivity: '12/03/2024' },
];

export const resources: Resource[] = [
  {
    id: 'r1',
    title: 'Introduction to Algebraic Equations',
    author: users[2],
    subject: Subject.MATHS,
    level: Level.QUATRIEME,
    type: DocumentType.COURS,
    term: Term.T1,
    schoolYear: '2023-2024',
    creationDate: '12 Sept 2023',
    keywords: ['Algebra', 'Equations', 'Variables'],
    description: 'A comprehensive lesson plan covering the fundamentals of algebraic equations, including variables, constants, and solving single-variable equations. This resource includes a presentation, a worksheet, and an answer key, designed to engage 4ème students and build a strong foundation in algebra.',
    rating: 4.2,
    ratingCount: 15,
    downloads: 254,
    fileUrl: '#',
    fileType: 'pdf',
    comments: [
      { id: 'c1', author: users[7], content: 'Excellent resource! The worksheet was particularly helpful for my students.', timestamp: '2 days ago', replies: [
        { id: 'c2', author: users[2], content: 'Glad to hear it was useful!', timestamp: '1 day ago', replies: [] }
      ]},
      { id: 'c3', author: users[1], content: 'Has anyone tried adapting this for 5ème students? Wondering if it\'s too advanced.', timestamp: '3 hours ago', replies: [] }
    ],
  },
  { id: 'r2', title: 'Analyse de "L\'Étranger"', author: users[2], subject: Subject.FRANCAIS, level: Level.TROISIEME, type: DocumentType.COURS, term: Term.T2, schoolYear: '2023-2024', creationDate: '15 Oct 2023', keywords: ['Camus', 'Littérature', 'Analyse'], description: 'Analyse détaillée du roman de Camus.', rating: 4.8, ratingCount: 22, downloads: 189, fileUrl: '#', fileType: 'docx', comments: [] },
  { id: 'r3', title: 'Labo: La Photosynthèse', author: users[3], subject: Subject.SVT, level: Level.CINQUIEME, type: DocumentType.DEVOIR, term: Term.T3, schoolYear: '2023-2024', creationDate: '05 Nov 2023', keywords: ['Biologie', 'Plantes'], description: 'Protocole de laboratoire pour observer la photosynthèse.', rating: 4.2, ratingCount: 18, downloads: 312, fileUrl: '#', fileType: 'pptx', comments: [] },
  { id: 'r4', title: 'French Revolution Timeline', author: users[0], subject: Subject.HISTO_GEO, level: Level.QUATRIEME, type: DocumentType.COURS, term: Term.T1, schoolYear: '2023-2024', creationDate: '20 Sept 2023', keywords: ['Histoire', 'France', 'Révolution'], description: 'An interactive timeline of the French Revolution for 8th-grade history students.', rating: 4.5, ratingCount: 30, downloads: 450, fileUrl: '#', fileType: 'pdf', comments: [] },
  { id: 'r5', title: 'Poetry Analysis Worksheet', author: users[6], subject: Subject.FRANCAIS, level: Level.CINQUIEME, type: DocumentType.INTERROGATION, term: Term.T2, schoolYear: '2022-2023', creationDate: '10 Jan 2023', keywords: ['Poésie', 'Analyse'], description: 'A versatile worksheet for analyzing any poem, suitable for 7th-10th grade.', rating: 4.9, ratingCount: 50, downloads: 152, fileUrl: '#', fileType: 'docx', comments: [] },
  { id: 'r6', title: 'Évaluation sur le théorème de Pythagore', author: users[1], subject: Subject.MATHS, level: Level.QUATRIEME, type: DocumentType.EPREUVE_NATIONALE, term: Term.T2, schoolYear: '2022-2023', creationDate: '05/09/2023', keywords: ['géométrie', 'théorème'], description: 'Évaluation sommative sur le théorème de Pythagore et sa réciproque.', rating: 4.9, ratingCount: 5, downloads: 189, fileUrl: '#', fileType: 'pdf', comments: [] },
  { id: 'r7', title: 'Exercices pratiques sur les fractions', author: users[3], subject: Subject.MATHS, level: Level.SIXIEME, type: DocumentType.DEVOIR, term: Term.T1, schoolYear: '2022-2023', creationDate: '28/08/2023', keywords: ['calcul', 'fractions'], description: 'Série d\'exercices pour s\'entraîner sur les opérations de fractions.', rating: 4.6, ratingCount: 5, downloads: 312, fileUrl: '#', fileType: 'pdf', comments: [] },
];

export const badges: Badge[] = [
    { name: 'Contributeur Or', description: 'A partagé plus de 40 ressources.', icon: 'gold' },
    { name: 'Expert Maths', description: 'Évaluation moyenne > 4.5 en maths.', icon: 'math' },
    { name: 'Pilier Communauté', description: 'Actif depuis plus de 2 ans.', icon: 'pillar' }
];

export const currentUser: User = users[0];
