
export type Page = 'Dashboard' | 'Resources' | 'MyContent' | 'Discussions' | 'Calendar' | 'Profile' | 'UserManagement' | 'Settings' | 'Help' | 'ResourceDetail' | 'UploadResource';

export enum Subject {
  MATHS = "Mathématiques",
  PCT = "Physique-Chimie-Technologie",
  ANGLAIS = "Anglais",
  HISTO_GEO = "Histoire-Géographie",
  SVT = "SVT",
  FRANCAIS = "Français",
  ECM = "Éducation Civique et Morale",
}

export enum Level {
  SIXIEME = "6ème",
  CINQUIEME = "5ème",
  QUATRIEME = "4ème",
  TROISIEME = "3ème",
}

export enum DocumentType {
  PROGRAMME = "Programme",
  COURS = "Cours",
  INTERROGATION = "Interrogation",
  DEVOIR = "Devoir",
  COMPOSITION = "Composition",
  EPREUVE_NATIONALE = "Épreuve nationale",
}

export enum Term {
  T1 = "Trimestre 1",
  T2 = "Trimestre 2",
  T3 = "Trimestre 3",
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'Enseignant' | 'Modérateur' | 'Administrateur';
  status: 'Actif' | 'Inactif';
  lastActivity: string;
}

export interface Comment {
  id: string;
  author: User;
  content: string;
  timestamp: string;
  replies: Comment[];
}

export interface Resource {
  id: string;
  title: string;
  author: User;
  subject: Subject;
  level: Level;
  type: DocumentType;
  term: Term;
  schoolYear: string;
  creationDate: string;
  keywords: string[];
  description: string;
  rating: number;
  ratingCount: number;
  downloads: number;
  fileUrl: string;
  fileType: 'pdf' | 'docx' | 'pptx' | 'zip';
  comments: Comment[];
}

export interface Badge {
    name: string;
    description: string;
    icon: string; // URL or identifier for the icon
}
