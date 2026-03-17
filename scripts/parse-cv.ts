#!/usr/bin/env tsx
/**
 * parse-cv.ts — Standalone LaTeX CV parser
 *
 * Usage:
 *   npx tsx scripts/parse-cv.ts path/to/cv.tex
 *   npx tsx scripts/parse-cv.ts cv.tex --out src/content/cv-parsed.json
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const args = process.argv.slice(2);
const inputFile = args[0];
const outFlag = args.indexOf('--out');
const outputFile = outFlag >= 0 ? args[outFlag + 1] : 'src/content/cv-parsed.json';

if (!inputFile) {
  console.error('Usage: npx tsx scripts/parse-cv.ts <cv.tex> [--out output.json]');
  process.exit(1);
}

const tex = readFileSync(resolve(inputFile), 'utf-8');
const clean = tex.replace(/%.*$/gm, '').replace(/\r\n/g, '\n').trim();

function stripLatex(s: string) {
  return s
    .replace(/\\textbf\{([^}]*)\}/g, '$1')
    .replace(/\\textit\{([^}]*)\}/g, '$1')
    .replace(/\\small\{?/g, '')
    .replace(/\\href\{[^}]*\}\{([^}]*)\}/g, '$1')
    .replace(/\\[a-zA-Z]+\{?/g, '')
    .replace(/[{}]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// Name
const nameMatch = clean.match(/\\textbf\{\\Huge\s+\\scshape\s+([^}]+)\}/);
const name = nameMatch ? nameMatch[1].trim() : 'Unknown';

// Email
const emailMatch = clean.match(/\\href\{mailto:([^}]+)\}/);
const email = emailMatch ? emailMatch[1].trim() : '';

// LinkedIn
const liMatch = clean.match(/\\href\{(https?:\/\/[^}]*linkedin[^}]*)\}/);
const linkedin = liMatch ? liMatch[1].trim() : '';

// Summary
const summaryMatch = clean.match(/\\section\*?\{Summary\}([\s\S]*?)\\section/);
const summary = summaryMatch ? stripLatex(summaryMatch[1]) : '';

// Skills
const skillsMatch = clean.match(/\\section\{Technical Skills\}([\s\S]*?)\\section/);
const skills: { category: string; items: string[] }[] = [];
if (skillsMatch) {
  const groups = skillsMatch[1].matchAll(/\\textbf\{([^}]+)\}\{:\s*([^\\]+)\}/g);
  for (const g of groups) {
    const cat = g[1].trim();
    const items = g[2].split(',').map(s =>
      s.replace(/\\textbf\{([^}]*)\}/g, '$1').replace(/[{}]/g, '').trim()
    ).filter(Boolean);
    if (cat && items.length) skills.push({ category: cat, items });
  }
}

// Certs
const certsMatch = clean.match(/\\textbf\{Certs\}\{:\s*([^}\\]+(?:\\textbf\{[^}]*\}[^}\\]*)*)\}/);
const certifications: string[] = [];
if (certsMatch) {
  certsMatch[1].match(/\\textbf\{([^}]+)\}/g)?.forEach(c => {
    certifications.push(c.replace(/\\textbf\{|\}/g, '').trim());
  });
}

// Education
const eduSection = clean.match(/\\section\{Education\}([\s\S]*?)\\section/);
const education: unknown[] = [];
if (eduSection) {
  const entries = [...eduSection[1].matchAll(/\\resumeSubheading\s*\{([^}]*)\}\{([^}]*)\}\s*\{([^}]*)\}\{([^}]*)\}/g)];
  entries.forEach((e, idx) => {
    const chunk = eduSection[1].slice(e.index!);
    const bullets = [...chunk.matchAll(/\\resumeItem\{([^}]+)\}/g)]
      .slice(0, 6).map(b => stripLatex(b[1]));
    education.push({
      institution: e[1].trim(),
      dates: e[2].trim(),
      degree: e[3].trim(),
      location: e[4].trim(),
      bullets,
    });
  });
}

// Experience
const expSection = clean.match(/\\section\{Professional Experience\}([\s\S]*?)\\section/);
const experience: unknown[] = [];
if (expSection) {
  const block = expSection[1];
  const entries = [...block.matchAll(/\\resumeSubheading\s*\{([^}]*)\}\{([^}]*)\}\s*\{([^}]*)\}\{([^}]*)\}/g)];
  entries.forEach((e, idx) => {
    const end = entries[idx + 1]?.index ?? block.length;
    const chunk = block.slice(e.index!, end);
    const bullets = [...chunk.matchAll(/\\resumeItem\{([^}]+)\}/g)]
      .map(b => stripLatex(b[1]));
    const tech = e[3].match(/\\textbf\{([^}]+)\}/g)
      ?.map(t => t.replace(/\\textbf\{|\}/g, '')) ?? [];
    experience.push({
      company: e[1].trim(),
      location: e[2].trim(),
      title: stripLatex(e[3].split('$|$')[0]),
      dates: e[4].trim(),
      tech,
      bullets,
    });
  });
}

// Projects
const projSection = clean.match(/\\section\{Technical Projects\}([\s\S]*?)(?:\\end\{document\}|$)/);
const projects: unknown[] = [];
if (projSection) {
  const block = projSection[1];
  const entries = [...block.matchAll(/\\resumeSubheading\s*\{([^}]*)\}\{([^}]*)\}\s*\{([^}]*)\}\{([^}]*)\}/g)];
  entries.forEach((e, idx) => {
    const end = entries[idx + 1]?.index ?? block.length;
    const chunk = block.slice(e.index!, end);
    const bullets = [...chunk.matchAll(/\\resumeItem\{([^}]+)\}/g)]
      .map(b => stripLatex(b[1]));
    const tech = e[3].match(/\\textbf\{([^}]+)\}/g)
      ?.map(t => t.replace(/\\textbf\{|\}/g, '')) ?? [];
    projects.push({
      name: e[1].trim(),
      location: e[2].trim(),
      role: stripLatex(e[3].split('$|$')[0]),
      dates: e[4].trim(),
      tech,
      bullets,
    });
  });
}

const output = { name, email, linkedin, summary, skills, certifications, education, experience, projects };

writeFileSync(resolve(outputFile), JSON.stringify(output, null, 2));

console.log(`
✓ Parsed CV for: ${name}
  Email:        ${email}
  Skills:       ${skills.length} groups, ${skills.reduce((a, s) => a + s.items.length, 0)} items
  Experience:   ${(experience as unknown[]).length} entries
  Projects:     ${(projects as unknown[]).length} entries
  Education:    ${(education as unknown[]).length} entries
  Certs:        ${certifications.length}

Output → ${outputFile}
`);
