import type { Experience } from './types';

/** Most recent first. */
export const experience: Experience[] = [
  {
    company: 'Scotiabank',
    team: 'Velocity Co-op',
    role: 'Software Engineer Intern',
    location: 'Toronto, ON',
    period: { start: '2026-09', end: 'present' },
    highlights: [
      'Built RAG agents over manager-provided onboarding materials for an internal new-hire onboarding tool.',
      'Implemented JWT authentication and authorization for the backend APIs.',
      'Developed Python and Node.js backend services on SQLAlchemy and REST integrations that cut the time new hires wait on direction from their managers by 30%.',
    ],
    tech: ['Python', 'JavaScript', 'Node.js', 'SQLAlchemy', 'JWT'],
  },
  {
    company: 'NCTTA',
    role: 'Software Developer',
    location: 'Remote / Toronto, ON',
    period: { start: '2025-11', end: 'present' },
    highlights: [
      'Migrating a legacy PHP platform to a single .NET Core MVC application serving 150+ universities, keeping content parity and accessibility intact.',
      'Replaced paper-based tournament management with built-in bracket generation and seeding, improving tournament efficiency by 40%.',
      'Designed an interface that lets officials enter match results instantly, improving real-time scoring accuracy.',
      'Work with league directors and designers to streamline registration and results. Cut boilerplate time by about 30% and automated documentation with LLM-assisted development, shipping in Agile cycles against seasonal deadlines.',
    ],
    tech: ['C#', '.NET Core MVC', 'TypeScript', 'SQL', 'Azure'],
    links: [{ label: 'nctta.app', href: 'https://nctta.app/' }],
  },
  {
    company: 'LeakSight',
    team: 'Western Cyber Society',
    role: 'Backend Developer',
    location: 'London, ON',
    period: { start: '2025-12', end: '2026-04' },
    highlights: [
      'Built a modular Python codebase for end-to-end side-channel analysis, from ingestion and preprocessing through training, evaluation and visualization, with clear package boundaries, docs and experiment notebooks.',
      'Developed deep-learning leakage classification with separate training, verification and metrics pipelines.',
    ],
    tech: ['Python', 'Machine learning', 'Side-channel research'],
    links: [{ label: 'Repository', href: 'https://github.com/MrPumpkin92/LeakSight' }],
  },
  {
    company: 'Match',
    role: 'Software Developer Intern',
    location: 'Toronto, ON',
    period: { start: '2024-01', end: '2024-04' },
    highlights: [
      'Built iOS interfaces in React Native, using Xcode simulation to speed up deployment by two weeks.',
      'Wrote Django REST endpoints backed by PostgreSQL.',
    ],
    tech: ['React Native', 'Python', 'Django', 'PostgreSQL'],
  },
];
