import type { SkillGroup } from './types';

/**
 * From the CV's Technical Skills section. The CV's single "Tools" list is
 * split into narrower groups so each row reads as one kind of thing.
 */
export const skills: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'C++', 'C#', 'Java', 'Go', 'Swift', 'SQL (PostgreSQL, MySQL)', 'HTML/CSS'],
  },
  {
    label: 'Frameworks',
    items: ['React', 'React Native', 'Angular', 'Node.js', 'Express', '.NET Core', 'Django', 'Flask', 'Capacitor', 'TensorFlow', 'Unity'],
  },
  {
    label: 'Platforms',
    items: ['AWS', 'Azure', 'Supabase', 'Docker', 'Linux'],
  },
  {
    label: 'Networking & hardware',
    items: ['Wireshark', 'MiniNet', 'Cisco Packet Tracer', 'FPGA'],
  },
  {
    label: 'Collaboration',
    items: ['Git/GitHub', 'Jira', 'Confluence', 'Microsoft 365'],
  },
  {
    label: 'AI tools',
    items: ['Claude', 'Claude Code', 'Gemini'],
  },
];
