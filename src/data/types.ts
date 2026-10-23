/**
 * Shapes for the portfolio content. Everything in src/data is derived from
 * the CV; components only render what these types describe.
 */

type Month = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12';

/** `YYYY` or `YYYY-MM`. */
export type DateString = `${number}` | `${number}-${Month}`;

export interface Period {
  start: DateString;
  /** Omit for work that fits in a single month or year; `'present'` if ongoing. */
  end?: DateString | 'present';
}

/** An external link. Rendered with a new-tab indicator. */
export interface Link {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  /** Short professional title, used in the page title and social previews. */
  title: string;
  /** One-sentence introduction under the name in the hero. */
  headline: string;
  /** Paragraphs for the About section. */
  about: string[];
  email: string;
  links: {
    github: string;
    linkedin: string;
  };
  /**
   * Path to a résumé PDF inside /public (e.g. `resume.pdf`). When set, the
   * hero and contact section show a Résumé link. Leave unset if there is none.
   */
  resume?: string;
  photo: {
    /** Replace src/assets/profile.jpg to change the portrait. */
    src: ImageMetadata;
    alt: string;
    /** CSS object-position, used when the photo is cropped to a square on small screens. */
    focus: string;
  };
}

export interface Experience {
  company: string;
  /** Program, team or parent organisation, shown next to the role. */
  team?: string;
  role: string;
  location: string;
  period: Period;
  highlights: string[];
  tech: string[];
  links?: Link[];
}

export interface Project {
  name: string;
  /** One line under the name. Shown on featured projects. */
  tagline?: string;
  role?: string;
  /** Where the work happened: "Personal project", "Networking lab", a company… */
  context?: string;
  period: Period;
  summary: string;
  /** Detail points. Shown on featured projects. */
  highlights?: string[];
  tech: string[];
  links?: Link[];
  /** Featured projects get a full card; the rest share a compact grid. */
  featured?: boolean;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Education {
  school: string;
  degree: string;
  field: string;
  location: string;
  graduation: DateString;
  /** True while the graduation date is still expected. */
  expected: boolean;
  coursework: string[];
  activities: { label: string; title: string; detail: string }[];
}

export interface Certification {
  name: string;
  issuer: string;
}
