# hanning-dev-portfolio

Personal portfolio of Han Ning Wei: <https://mrpumpkin92.github.io/hanning-dev-portfolio/>

A single static page built with [Astro](https://astro.build). There is no client-side framework; the only JavaScript is a few small inline scripts for the mobile menu, the active nav state, scroll reveals, the project list toggle and copy-to-clipboard. Everything works without JavaScript.

## Commands

| Command           | What it does                                      |
| ----------------- | ------------------------------------------------- |
| `npm install`     | Install dependencies (Node 22.23.4 or newer)      |
| `npm run dev`     | Start the dev server at `http://localhost:4321`   |
| `npm run build`   | Build the static site into `dist/`                |
| `npm run preview` | Serve the built site locally                      |
| `npm run check`   | Type-check the content data and components        |

## Layout

```
src/
  data/          All page content, derived from the CV
    types.ts       Shapes for everything below
    profile.ts     Name, title, headline, About copy, email, links, photo
    experience.ts  Jobs, most recent first
    projects.ts    Projects in display order (featured ones first)
    skills.ts      Skill groups
    education.ts   Degree, coursework, activities, certifications
    site.ts        Canonical URL, meta description, section labels and intros
  assets/
    profile.jpg    Portrait (optimized to AVIF/WebP at build time)
  components/    One component per section, plus small shared pieces
  layouts/       BaseLayout: <head>, SEO and social tags, fonts
  lib/           Date formatting and base-path helpers
  styles/
    tokens.css     Design tokens: color, type, spacing, radius, shadow, motion
    global.css     Base styles, buttons, links, lists, reveal and print styles
public/          Favicons and the social preview image (og.jpg)
```

Components never hard-code content. To change what the page says, edit `src/data`.

## Updating content from a new CV

The CV is the source of truth. Nothing goes on the site that isn't in it.

1. Compare the new CV with the files in `src/data`. List what was added, removed and changed.
2. Edit the data files only. Rewrite bullets into plain, first-person-friendly sentences, but keep every fact, number and date exactly as the CV states it.
3. Projects: set `featured: true` on the few that should get full cards, and order the array the way they should appear. The rest go into the compact grid. The first six show up front and the others sit behind "Show more".
4. Dates use `YYYY-MM` (or `YYYY` when the CV gives only a year). Use `end: 'present'` for ongoing work and leave `end` out for something that fits in a single month.
5. If the hero headline, About copy, section intros or the meta description in `site.ts` no longer match the CV, update them too.
6. Run `npm run check && npm run build`.

The current roles in the hero ("Now"), the structured data in the page head, and the graduation date are all computed from the data, so they update automatically.

Some repository links in `projects.ts` came from the previous version of this site rather than the CV. They are marked with a comment.

## Replacing the photo

Replace `src/assets/profile.jpg` with any portrait, ideally 4:5 and at least 800px wide. On phones the photo is cropped to a square, and `profile.photo.focus` in `src/data/profile.ts` sets which part stays in frame. Update `profile.photo.alt` to describe the new photo.

## Adding a résumé PDF

Put the file in `public/` (for example `public/resume.pdf`) and set `resume: 'resume.pdf'` in `src/data/profile.ts`. A "Résumé (PDF)" link then appears in the hero and the contact section.

## Social preview image

`public/og.jpg` (1200×630) is the image shown when the site is shared. It repeats the name, school and headline, so regenerate it if those change.

## Deployment

`.github/workflows/deploy-pages.yml` type-checks, builds and publishes `dist/` to GitHub Pages on every push to `main`. Pages serves the site from `/hanning-dev-portfolio/`, so the workflow passes that path in as `BASE_PATH`. Everywhere else (local dev, Vercel) the site is served from `/` and no configuration is needed.

Fonts (Inter and Newsreader) are downloaded at build time and self-hosted from `dist/`, so the page makes no third-party requests.
