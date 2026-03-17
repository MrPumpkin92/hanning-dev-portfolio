export interface Experience {
  title: string;
  company: string;
  location: string;
  dates: string;
  tech: string[];
  bullets: string[];
  type: 'work' | 'research';
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  dates: string;
  bullets: string[];
}

export interface Project {
  name: string;
  location: string;
  role: string;
  tech: string[];
  dates: string;
  bullets: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface CVData {
  name: string;
  email: string;
  linkedin: string;
  summary: string;
  skills: SkillGroup[];
  education: Education[];
  experience: Experience[];
  projects: Project[];
  certifications: string[];
}
