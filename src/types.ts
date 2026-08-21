export interface Project {
  id: string;
  title: string;
  category: 'rag' | 'nlp' | 'agents' | 'backend' | 'mobile';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  architectureHighlights: string[];
  technologies: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  hasInteractiveDemo: boolean;
  demoType: 'rag-query' | 'bert-ner' | 'agent-run' | 'api-bench' | 'mobile-mock';
  featured: boolean;
  stats?: { label: string; value: string }[];
}

export interface ResearchTopic {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  status: 'Published' | 'Under Review' | 'Active Research';
  venue?: string;
  year: string;
  abstract: string;
  bibtex?: string;
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'Research' | 'Industry' | 'Academic';
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  location: string;
  honors?: string;
  thesis?: string;
  focusAreas: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: {
    name: string;
    level: 'Core' | 'Advanced' | 'Expert';
    description?: string;
    tags?: string[];
  }[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
  badge: string;
  type: 'certification' | 'award' | 'publication';
}
