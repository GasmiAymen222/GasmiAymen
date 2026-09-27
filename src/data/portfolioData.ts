import {
  ResearchInterest,
  ResearchObjective,
  Publication,
  ResearchProject,
  EducationItem,
  ExperienceItem,
  ResearchJourneyMilestone,
  AcademicProfileLink,
  TechnicalSkillGroup,
} from '../types';

export const personalInfo = {
  name: 'Aymen Gasmi',
  academicTitle: 'PhD Researcher in Computer Science',
  roleSubtitle: 'PhD Researcher in Computer Science | AI & NLP Researcher',
  institution: 'International Islamic University Malaysia (IIUM)',
  department: 'Department of Computer Science, Kulliyyah of Information and Communication Technology',
  location: 'Kuala Lumpur, Malaysia',
  email: 'gasmia203@gmail.com',
  currentResearchTopic:
    'Optimization-Driven and Explainable Natural Language Processing for Domain-Specific Knowledge Extraction',
  shortIntro:
    'I am a Computer Science PhD researcher interested in Natural Language Processing, Large Language Models, Knowledge Extraction, Explainable AI, and AI systems. My research focuses on developing optimization-driven and explainable approaches for extracting domain-specific knowledge from textual data.',
  academicBio: `I am an early-career Computer Science PhD researcher at the International Islamic University Malaysia (IIUM). My work focuses on Natural Language Processing, Large Language Models, and explainable AI systems.

With an academic foundation in Information Systems and Software Engineering, I combine theoretical deep learning research with scalable systems engineering. My doctoral research investigates optimization-driven approaches to extract domain-specific knowledge from unstructured text while improving computational efficiency and explainability.`,
  researchKeywords: [
    'NLP',
    'LLMs',
    'Knowledge Extraction',
    'Explainable AI',
    'RAG',
    'AI Systems',
  ],
  links: {
    github: 'https://github.com/GasmiAymen222',
    linkedin: 'https://www.linkedin.com/in/gasmi-aymen-a24026252/',
    googleScholar: 'https://scholar.google.com',
    orcid: 'https://orcid.org',
    researchGate: 'https://www.researchgate.net',
  },
};

export const researchInterests: ResearchInterest[] = [
  { id: 'nlp', name: 'Natural Language Processing', shortDesc: 'Neural text understanding and representation.', category: 'core' },
  { id: 'llms', name: 'Large Language Models', shortDesc: 'Inference, prompt design, and reasoning.', category: 'core' },
  { id: 'ke', name: 'Knowledge Extraction', shortDesc: 'Automated concept and assertion discovery.', category: 'methods' },
  { id: 'ner', name: 'Named Entity Recognition', shortDesc: 'Domain-adapted entity identification.', category: 'methods' },
  { id: 're', name: 'Relation Extraction', shortDesc: 'Mining semantic associations between entities.', category: 'methods' },
  { id: 'kg', name: 'Knowledge Graphs', shortDesc: 'Structured graph representation and alignment.', category: 'methods' },
  { id: 'xai', name: 'Explainable AI', shortDesc: 'Attribution analysis and decision transparency.', category: 'core' },
  { id: 'opt', name: 'Optimization & Metaheuristics', shortDesc: 'Search strategies and parameter efficiency.', category: 'methods' },
  { id: 'rag', name: 'Retrieval-Augmented Generation', shortDesc: 'Grounded question answering with verifiable citations.', category: 'applications' },
  { id: 'domain', name: 'Domain-Specific NLP', shortDesc: 'Adapting pipelines to specialized corpora.', category: 'applications' },
];

export const currentResearch = {
  problemTitle: 'Research Problem',
  problemStatement:
    'Standard NLP and LLM systems struggle on specialized or domain-specific text, often suffering from hallucinations, opaque citations, and computational inefficiencies. This research explores how to systematically extract accurate, structured knowledge from domain corpora while improving optimization and explainability.',
  currentTopic:
    'Optimization-Driven and Explainable Natural Language Processing for Domain-Specific Knowledge Extraction',
  objectives: [
    {
      id: 'obj-1',
      title: 'Domain-Specific Knowledge Extraction',
      status: 'current' as const,
      description:
        'Developing automated mechanisms to extract specialized entities, domain terms, and syntactic structures from technical corpora.',
      keyAspects: ['Domain vocabulary adaptation', 'Entity recognition', 'Relation extraction'],
    },
    {
      id: 'obj-2',
      title: 'Optimization-Driven NLP',
      status: 'current' as const,
      description:
        'Applying optimization and metaheuristic search to refine token representations, prompt configurations, and retrieval weights.',
      keyAspects: ['Metaheuristic search', 'Context optimization', 'Computational efficiency'],
    },
    {
      id: 'obj-3',
      title: 'Explainable NLP & LLM Systems',
      status: 'planned' as const,
      description:
        'Designing attribution and verification mechanisms to mathematically trace extracted insights directly back to original source texts.',
      keyAspects: ['Token attribution', 'Citation tracking', 'Hallucination reduction'],
    },
    {
      id: 'obj-4',
      title: 'Knowledge Representation & Graphs',
      status: 'planned' as const,
      description:
        'Structuring extracted knowledge into relational schemas and semantic graphs to support multi-hop reasoning and verifiable retrieval.',
      keyAspects: ['Knowledge graph construction', 'Graph-guided retrieval', 'Schema alignment'],
    },
  ],
};

export const publications: Publication[] = [
  // {
  //   id: 'pub-wip-1',
  //   title: 'Optimization-Driven Knowledge Extraction from Domain-Specific Corpora: A Systematic Review and Taxonomy',
  //   authors: ['Aymen Gasmi', 'Research Collaborator', 'Supervisor'],
  //   year: '2026',
  //   venue: 'Working Draft / Target: IEEE Access / Knowledge-Based Systems',
  //   category: 'Work in Progress',
  //   brief:
  //     'Provides a comprehensive synthesis of metaheuristic optimization and neural approaches for extracting structured domain knowledge from specialized text collections, outlining a taxonomic framework for domain adaptation.',
  //   shortDescription: 'Systematic review of optimization-driven knowledge extraction.',
  //   statusTag: 'Draft in Progress',
  // },
  // {
  //   id: 'pub-conf-1',
  //   title: 'Evaluating Faithfulness and Attribution Verification in Multilingual Retrieval-Augmented Generation',
  //   authors: ['Aymen Gasmi', 'Supervisor'],
  //   year: '2026',
  //   venue: 'Planned Conference Submission (Target: EMNLP / ACL Findings)',
  //   category: 'Under Review',
  //   brief:
  //     'Investigates token-level citation alignment and attribution verification across multilingual RAG pipelines (Arabic, English, French) to systematically quantify and mitigate hallucination rates.',
  //   shortDescription: 'Attribution verification and hallucination reduction in multilingual RAG.',
  //   statusTag: 'Under Review',
  // },
  // {
  //   id: 'pub-prep-1',
  //   title: 'Multi-Task Learning and Optimization for Domain-Specific Text Classification and Knowledge Disambiguation',
  //   authors: ['Aymen Gasmi'],
  //   year: '2026',
  //   venue: 'Research Preprint / Working Paper',
  //   category: 'Preprints',
  //   brief:
  //     'Presents an experimental framework combining multi-task loss weight optimization with shared representations to improve classification accuracy across low-resource domain corpora.',
  //   shortDescription: 'Multi-task optimization for domain text classification.',
  //   statusTag: 'Preprint',
  // },
  // {
  //   id: 'pub-placeholder-journal',
  //   title: 'Explainable Retrieval-Augmented Generation for Specialized Textual Repositories',
  //   authors: ['Aymen Gasmi', 'Co-Authors'],
  //   year: '2027 (Planned)',
  //   venue: 'Doctoral Research Submission Series',
  //   category: 'Journal Publications',
  //   brief:
  //     'Details doctoral experimental findings on integrating graph-guided retrieval with attention saliency metrics for verifiable knowledge extraction in specialized domains.',
  //   shortDescription: 'Explainable knowledge extraction with graph-guided verification.',
  //   statusTag: 'Planned Milestone',
  // },
  // {
  //   id: 'pub-placeholder-conf',
  //   title: 'Domain Adaptation of Pretrained Language Models for Structured Relation Extraction',
  //   authors: ['Aymen Gasmi', 'Co-Authors'],
  //   year: '2027 (Planned)',
  //   venue: 'International Conference on Computational Linguistics & AI',
  //   category: 'Conference Publications',
  //   brief:
  //     'Explores parameter-efficient adaptation strategies for extracting semantic relations from technical documents with minimal labeled training data.',
  //   shortDescription: 'Parameter-efficient relation extraction.',
  //   statusTag: 'Planned Milestone',
  // },
];

export const researchProjects: ResearchProject[] = [
  // {
  //   id: 'ecommerce-rag',
  //   title: 'Multilingual E-Commerce Customer Support RAG',
  //   subtitle: 'Multilingual Retrieval-Augmented Generation System',
  //   category: 'RAG Systems',
  //   shortDescription:
  //     'A multilingual retrieval-augmented generation system for customer-support and product-information tasks, grounding responses in domain catalogs to drastically reduce hallucinations.',
  //   researchMotivation:
  //     'Commercial LLMs frequently hallucinate product specs and pricing. This system enforces factual grounding by retrieving verified catalog entries across Arabic, English, and French.',
  //   methodology:
  //     'Dense vector indexing (FAISS) combined with cross-lingual embeddings, routing queries through similarity filters before LLM response generation.',
  //   technologies: ['Python', 'Flask', 'LangChain', 'FAISS', 'LLMs', 'Flutter'],
  //   resultsOrStatus:
  //     'Working client-server prototype with Android client support; demonstrated zero-shot multilingual question answering with source citations.',
  //   githubUrl: 'https://github.com/gasmi123/RAGsystem',
  //   featured: true,
  // },
  // {
  //   id: 'quran-tafsir-rag',
  //   title: 'Quran Tafsir RAG Prototype',
  //   subtitle: 'Specialized Corpus Retrieval & Classical Exegesis Knowledge Grounding',
  //   category: 'Knowledge Extraction',
  //   shortDescription:
  //     'A research prototype exploring retrieval-augmented generation over classical Quran Tafsir data, evaluating semantic retrieval across classical scholarship.',
  //   researchMotivation:
  //     'Classical scholarship corpora require high factual fidelity and nuanced morphology. This project analyzes how localized LLMs can deliver accurate exegesis retrieval without cloud dependency.',
  //   methodology:
  //     'Indexed classical scholarly texts in ChromaDB using specialized sentence embeddings and local Ollama inference for privacy and reproducibility.',
  //   technologies: ['Python', 'LangChain', 'ChromaDB', 'Ollama', 'Local LLMs'],
  //   resultsOrStatus:
  //     'Working research testbed validating semantic chunking strategies for classical Arabic exegesis.',
  //   githubUrl: 'https://github.com/GasmiAymen222',
  //   featured: true,
  // },
  // {
  //   id: 'domain-kg-extractor',
  //   title: 'Optimization-Driven Domain Knowledge Graph Extractor',
  //   subtitle: 'PhD Research Testbed (In Development)',
  //   category: 'Optimization & LLMs',
  //   shortDescription:
  //     'An ongoing research framework for extracting named entities, specialized attributes, and semantic relations from domain text to construct formal knowledge graphs.',
  //   researchMotivation:
  //     'Manual ontology construction is costly. This pipeline explores combining heuristic search with language models to semi-automatically populate knowledge bases.',
  //   methodology:
  //     'Hybrid approach: Transformer entity recognizers propose candidate nodes, while metaheuristic ranking filters edges before graph schema alignment.',
  //   technologies: ['Python', 'PyTorch', 'Transformers', 'Neo4j / NetworkX', 'spaCy'],
  //   resultsOrStatus:
  //     'Architecture design and literature review phase as part of doctoral milestone 2026.',
  //   featured: false,
  // },
];

export const educationTimeline: EducationItem[] = [
  {
    id: 'edu-phd',
    degree: 'PhD in Computer Science',
    field: 'Natural Language Processing & AI',
    institution: 'International Islamic University Malaysia (IIUM)',
    period: '2026 – Present',
    location: 'Kuala Lumpur, Malaysia',
    status: 'In Progress',
    thesisOrDetails:
      'Optimization-Driven and Explainable Natural Language Processing for Domain-Specific Knowledge Extraction.',
    focusAreas: [
      'Natural Language Processing',
      'Large Language Models (LLMs)',
      'Knowledge Extraction & Graphs',
      'Explainable AI',
      'Optimization & Metaheuristics',
    ],
  },
  {
    id: 'edu-msc',
    degree: "Master's Degree (M.Sc.)",
    field: 'Information Systems / Software Engineering',
    institution: 'University of Mohamed Boudiaf, M’sila',
    period: '2020 – 2022',
    location: 'Algeria',
    status: 'Completed with High Distinction',
    thesisOrDetails:
      'Specialized in distributed software architecture, data modeling, backend scalability, and information retrieval.',
    focusAreas: [
      'Software Engineering Methodologies',
      'Distributed Systems Architecture',
      'Database Optimization & SQL',
      'Applied Machine Learning',
    ],
  },
  {
    id: 'edu-bsc',
    degree: "Bachelor's Degree (B.Sc.)",
    field: 'Computer Systems',
    institution: 'University of M’sila',
    period: '2017 – 2020',
    location: 'Algeria',
    status: 'Completed with Honors',
    thesisOrDetails:
      'Foundation in computer science theory, algorithms, data structures, and object-oriented programming.',
    focusAreas: [
      'Algorithms & Data Structures',
      'Object-Oriented Programming (Python, C++, Java)',
      'Database Management Systems',
      'Operating Systems & Networking',
    ],
  },
];

export const academicExperiences: ExperienceItem[] = [
  {
    id: 'exp-research',
    category: 'Research',
    role: 'PhD Researcher in Computer Science',
    organization: 'International Islamic University Malaysia (IIUM)',
    location: 'Kuala Lumpur, Malaysia',
    period: '2026 — Present',
    description:
      'Conducting doctoral research on optimization-driven and explainable NLP systems. Investigating entity and relation extraction algorithms, hallucination mitigation in LLMs, and semantic knowledge graph synthesis.',
    highlights: [
      'Investigating attention attribution mechanisms for domain-specific NLP pipelines.',
      'Formulating optimization models for prompt configuration and context retrieval.',
      'Developing reproducible evaluation benchmarks for factual grounding.',
    ],
    technologies: ['Python', 'PyTorch', 'Transformers', 'LangChain', 'FAISS', 'LaTeX'],
  },
  {
    id: 'exp-teaching',
    category: 'Teaching',
    role: 'Academic & Laboratory Instructor',
    organization: 'Faculty of Computer Science / Higher Education',
    location: 'Academic Institutions',
    period: 'Academic Sessions',
    description:
      'Delivered practical laboratory sessions and tutorial instruction for undergraduate computer science students, focusing on software engineering principles and computational concepts.',
    highlights: [
      'Facilitated laboratory sessions on Object-Oriented Programming, algorithms, and data structures.',
      'Guided students in building structured software projects with clean architectural separation.',
      'Supervised academic student projects connecting database engineering and basic AI techniques.',
    ],
    technologies: ['Python', 'Java', 'SQL', 'Algorithms & Data Structures', 'Git'],
  },
  {
    id: 'exp-software',
    category: 'Software Development',
    role: 'Software Engineer (Backend & AI Systems)',
    organization: 'Engineering Systems & Technical Projects',
    location: 'Remote / Professional',
    period: '2021 — Present',
    description:
      'Designed and built high-performance backend microservices, RESTful API ecosystems, and client-server prototypes. Strong emphasis on bridging software engineering rigor with artificial intelligence pipelines.',
    highlights: [
      'Engineered scalable RESTful APIs with Python (Flask, FastAPI) and Node.js (Express.js).',
      'Architected cross-platform client-server integrations using Flutter and TypeScript/React.',
      'Implemented relational schemas, index optimization, and containerized Docker environments.',
    ],
    technologies: ['Python', 'Node.js', 'Express', 'TypeScript', 'Flutter', 'Docker', 'PostgreSQL', 'MySQL'],
  },
];

export const researchJourneyMilestones: ResearchJourneyMilestone[] = [
  {
    id: 'journey-2026-start',
    year: '2026',
    stage: 'Phase 1',
    title: 'Started PhD Research',
    description:
      'Enrolled in the PhD program in Computer Science at International Islamic University Malaysia (IIUM). Established core research scope around optimization-driven and explainable NLP.',
    status: 'in-progress',
  },
  {
    id: 'journey-2026-lit',
    year: '2026 – 2027',
    stage: 'Phase 2',
    title: 'Literature Review & Methodology',
    description:
      'Systematic review of domain knowledge extraction, metaheuristic optimization in NLP, and attribution verification in foundation models.',
    status: 'in-progress',
  },
  {
    id: 'journey-proto',
    year: '2027',
    stage: 'Phase 3',
    title: 'Research Prototypes',
    description:
      'Building experimental codebases to validate optimization-guided extraction algorithms and attribution evaluation pipelines.',
    status: 'upcoming',
  },
  {
    id: 'journey-exp',
    year: '2027 – 2028',
    stage: 'Phase 4',
    title: 'Experiments & Benchmarking',
    description:
      'Running systematic benchmarks comparing proposed approaches against baseline transformer and LLM architectures.',
    status: 'upcoming',
  },
  {
    id: 'journey-pub',
    year: '2027 – 2028',
    stage: 'Phase 5',
    title: 'Publications & Conferences',
    description:
      'Submitting peer-reviewed articles to international journals and presenting findings at recognized AI & NLP conferences.',
    status: 'upcoming',
  },
  {
    id: 'journey-thesis',
    year: '2029',
    stage: 'Phase 6',
    title: 'PhD Thesis Synthesis',
    description:
      'Synthesizing all research contributions into the final doctoral dissertation for examination and defense.',
    status: 'upcoming',
  },
];

export const academicProfiles: AcademicProfileLink[] = [
  {
    name: 'Google Scholar',
    platform: 'Google Scholar',
    url: 'https://scholar.google.com',
    identifier: 'Aymen Gasmi',
    description: 'Track citations, forthcoming publications, and research indices.',
  },
  {
    name: 'ORCID',
    platform: 'ORCID',
    url: 'https://orcid.org',
    identifier: '0009-0000-0000-0000',
    description: 'Persistent unique digital researcher identifier and scholarly record.',
  },
  {
    name: 'ResearchGate',
    platform: 'ResearchGate',
    url: 'https://www.researchgate.net',
    identifier: 'Aymen Gasmi',
    description: 'Connect with researchers, follow preprints, and access working drafts.',
  },
  {
    name: 'GitHub',
    platform: 'GitHub',
    url: 'https://github.com/GasmiAymen222',
    identifier: '@GasmiAymen222',
    description: 'Open-source research codebases, RAG prototypes, and technical repositories.',
  },
  {
    name: 'LinkedIn',
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/gasmi-aymen-a24026252/',
    identifier: 'gasmi-aymen',
    description: 'Professional networking, academic milestones, and collaborations.',
  },
];

export const technicalSkills: TechnicalSkillGroup[] = [
  {
    category: 'AI, NLP & Deep Learning',
    skills: [
      'Natural Language Processing (NLP)',
      'Large Language Models (LLMs)',
      'Retrieval-Augmented Generation (RAG)',
      'Knowledge Extraction & Graphs',
      'Explainable AI (XAI)',
      'Transformers & PyTorch',
      'LangChain & ChromaDB/FAISS',
      'Metaheuristics & Optimization',
    ],
  },
  {
    category: 'Software Engineering & Backends',
    skills: [
      'Python (Flask, FastAPI)',
      'Node.js & Express.js',
      'TypeScript & Modern JavaScript',
      'RESTful API Architecture',
      'Async Programming',
      'Docker & Containerization',
      'Git Version Control',
      'Linux Server Administration',
    ],
  },
  {
    category: 'Databases & Client Technologies',
    skills: [
      'PostgreSQL & MySQL (Relational Schema Design)',
      'Vector Databases & Embeddings',
      'MongoDB',
      'Flutter (Mobile Prototypes)',
      'React.js',
      'LaTeX Typesetting',
    ],
  },
];
