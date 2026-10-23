/** Site-wide metadata and the page's sections. */
export const site = {
  /** Canonical address, from the CV. Used for canonical and social preview URLs. */
  url: 'https://mrpumpkin92.github.io/hanning-dev-portfolio/',
  description:
    'Han Ning Wei is a Software Engineering student at the University of Western Ontario who builds secure, well-tested backend services, web platforms and iOS apps.',
  locale: 'en_CA',
  /** Social preview image in /public. */
  ogImage: { path: 'og.jpg', width: 1200, height: 630 },
  /** In page order. Each id is also the section's anchor and nav target. */
  sections: [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    {
      id: 'projects',
      label: 'Projects',
      intro: 'The ones I’d start with, followed by labs, class projects and hackathon builds.',
    },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    {
      id: 'contact',
      label: 'Contact',
      intro: 'Whether it’s a role, a project or a question about something here, email is the best way to reach me.',
    },
  ],
} as const;
