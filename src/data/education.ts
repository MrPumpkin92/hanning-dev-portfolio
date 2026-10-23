import type { Certification, Education } from './types';

export const education: Education = {
  school: 'University of Western Ontario',
  degree: 'Bachelor of Engineering',
  field: 'Software Engineering',
  location: 'London, ON',
  graduation: '2028-05',
  expected: true,
  coursework: [
    'Algorithms & Data Structures',
    'Operating Systems',
    'Network Security',
    'Database Management Systems',
    'Computer Networks',
    'Discrete Structures',
  ],
  activities: [
    {
      label: 'Athletic leadership',
      title: 'Varsity table tennis MVP',
      detail: '2024–25 and 2025–26. Coached and managed team logistics.',
    },
  ],
};

export const certifications: Certification[] = [
  { name: 'Certified in Cybersecurity (CC)', issuer: 'ISC2' },
  { name: 'Azure Fundamentals (AZ-900)', issuer: 'Microsoft' },
];
