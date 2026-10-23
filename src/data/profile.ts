import photo from '../assets/profile.jpg';
import type { Profile } from './types';

export const profile: Profile = {
  name: 'Han Ning Wei',
  title: 'Software Developer',
  headline:
    'I build secure, well-tested software across the stack: backend services, web platforms and iOS apps.',
  about: [
    "I'm a Software Engineering student at the University of Western Ontario. Right now I'm interning at Scotiabank, building backend services and RAG agents for an internal onboarding tool, and helping NCTTA move a legacy PHP platform serving 150+ universities onto .NET Core.",
    "On my own time I build apps end to end: a local-first finance app for iOS, a running app that plays friends' voice cheers mid-run, and a desktop companion that runs a local LLM. Across all of them I lean on the same habits: row-level security, hardened OAuth flows, OWASP-guided reviews and a lot of automated tests.",
    "Away from the keyboard I play varsity table tennis, and I was named team MVP in 2024–25 and 2025–26.",
  ],
  email: 'hanningwei92@gmail.com',
  links: {
    // The CV links two repositories under this account; the profile URL itself
    // comes from the previous version of this site.
    github: 'https://github.com/MrPumpkin92',
    linkedin: 'https://www.linkedin.com/in/hanning-wei-92312423a22f/',
  },
  photo: {
    src: photo,
    alt: 'Portrait of Han Ning Wei in a dark suit and tie',
    focus: '50% 22%',
  },
};
