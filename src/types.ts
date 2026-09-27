export type ResearchStatus = 'current' | 'planned' | 'completed';

export type PublicationCategory = 
  | 'Journal Publications'
  | 'Conference Publications'
  | 'Preprints'
  | 'Under Review'
  | 'Work in Progress';

export interface ResearchInterest {
  id: string;
  name: string;
  shortDesc: string;
  category: 'core' | 'methods' | 'applications';
}

export interface ResearchObjective {
  id: string;
  title: string;
  description: string;
  status: ResearchStatus;
  keyAspects: string[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  year: string;
  venue: string;
  category: PublicationCategory;
  brief: string;
  shortDescription?: string;
  doi?: string;
  pdfUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  statusTag?: string;
}

export interface ResearchProject {
  id: string;
  title: string;
  subtitle: string;
  technologies: string[];
  shortDescription: string;
  researchMotivation: string;
  methodology: string;
  resultsOrStatus: string;
  githubUrl?: string;
  paperUrl?: string;
  featured?: boolean;
  category: 'RAG Systems' | 'Knowledge Extraction' | 'Optimization & LLMs';
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  period: string;
  location: string;
  status?: string;
  thesisOrDetails?: string;
  focusAreas: string[];
}

export interface ExperienceItem {
  id: string;
  category: 'Research' | 'Teaching' | 'Software Development';
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  technologies?: string[];
}

export interface ResearchJourneyMilestone {
  id: string;
  year: string;
  stage: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  items?: string[];
}

export interface AcademicProfileLink {
  name: string;
  platform: 'Google Scholar' | 'ORCID' | 'ResearchGate' | 'GitHub' | 'LinkedIn' | 'Email';
  url: string;
  identifier?: string;
  description: string;
}

export interface TechnicalSkillGroup {
  category: string;
  skills: string[];
}
