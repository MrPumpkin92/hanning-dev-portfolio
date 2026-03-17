# Adrian Wei — Portfolio

A dark, cinematic portfolio site built with **Astro 4** and deployed on **Vercel**. Features a LaTeX CV parser, interactive skills visualization, scroll-driven animations, and a hidden admin panel for live CV imports.

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Astro 4 (hybrid SSR) |
| Deployment | Vercel (@astrojs/vercel) |
| Styling | Vanilla CSS with CSS variables |
| Fonts | JetBrains Mono + Syne (Google Fonts) |
| Email | Resend API |
| Analytics | Vercel Web Analytics |

---

## Project Structure

```
adrian-portfolio/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── scripts/
│   └── parse-cv.ts          ← standalone CLI parser
├── src/
│   ├── content/
│   │   └── cv.ts            ← your CV data (edit this)
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro        ← terminal typewriter
│   │   ├── Experience.astro  ← timeline
│   │   ├── Projects.astro    ← filterable grid + modals
│   │   ├── Skills.astro      ← bubble canvas + education
│   │   └── Contact.astro     ← form + footer
│   ├── layouts/
│   │   └── Layout.astro      ← cursor aura, Konami egg, scroll reveal
│   ├── pages/
│   │   ├── index.astro
│   │   ├── admin.astro       ← CV import panel
│   │   ├── 404.astro
│   │   └── api/
│   │       └── contact.ts    ← Resend email endpoint
│   ├── styles/
│   │   └── global.css
│   └── types.ts
├── astro.config.mjs
├── vercel.json
├── tsconfig.json
└── package.json
```

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → http://localhost:4321
```

---

## Updating Your CV

### Option A — Edit directly

Open `src/content/cv.ts` and update any field. The site rebuilds automatically in dev mode.

### Option B — Parse from LaTeX

```bash
# Parse your .tex file and output to JSON for review
npx tsx scripts/parse-cv.ts path/to/your-cv.tex

# Custom output path
npx tsx scripts/parse-cv.ts cv.tex --out src/content/cv-parsed.json
```

Then copy the extracted values back into `src/content/cv.ts`.

### Option C — Admin UI (live, in-browser)

1. Run the dev server: `npm run dev`
2. Navigate to `http://localhost:4321/admin`
3. Paste your `.tex` source into the textarea
4. Click **parse cv** — a live preview appears instantly
5. If it looks correct, copy the values into `cv.ts`

> The admin page is blocked from search engines via `robots.txt` (`Disallow: /admin`).

---

## Deployment (Vercel)

### First deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (follow prompts)
vercel

# Or connect via Vercel dashboard → Import Git Repository
```

### Environment variables

Set these in your Vercel project dashboard under **Settings → Environment Variables**:

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | Optional | Enables the contact form to actually send emails |
| `CONTACT_EMAIL` | Optional | Where contact form emails are delivered (defaults to CV email) |

Without `RESEND_API_KEY`, the contact form logs submissions to the console (dev only) and returns a success response so the UI still works.

### Get a Resend API key

1. Sign up at [resend.com](https://resend.com) (free tier: 3,000 emails/month)
2. Add and verify your domain
3. Create an API key → paste into Vercel env vars
4. Update the `from:` address in `src/pages/api/contact.ts` to match your domain

---

## Features

### Interactive
- **Terminal hero** — typewriter sequence on load, role cycling subtitle
- **Hover glitch** — hover your name in the hero for a glitch effect
- **Cursor aura** — cyan particle trail follows your mouse
- **Scroll reveal** — elements fade in as you scroll
- **Skills bubbles** — canvas animation, hover skill tags to nudge bubbles
- **Project filters** — filter by: all / security / full stack / data+ml
- **Project modals** — click any card for full bullet details
- **Konami code** — ↑↑↓↓←→←→ba unlocks a secret overlay

### Pages
- `/` — main portfolio
- `/admin` — LaTeX CV import panel with live preview
- `/404` — custom terminal-style error page

### SEO
- JSON-LD structured data
- Open Graph meta tags
- Auto-generated sitemap (Astro)
- `robots.txt` blocking `/admin`

---

## Customization

### Colors

All color tokens are in `src/styles/global.css` under `:root`. Key ones:

```css
--accent: #00e5ff;      /* cyan — primary highlight */
--accent-2: #7c3aed;    /* purple — secondary, research badges */
--bg: #060608;          /* near-black page background */
```

### Fonts

Swap in `global.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_MONO_FONT&family=YOUR_DISPLAY_FONT&display=swap');

--font-mono: 'Your Mono Font', monospace;
--font-display: 'Your Display Font', sans-serif;
```

### Domain

Update `site` in `astro.config.mjs`:

```js
site: 'https://yourdomain.com',
```

And update the `from:` email in `src/pages/api/contact.ts`.

---

## LaTeX CV Format

The parser is designed for the **Jake's Resume** template (the most common LaTeX resume template on Overleaf). It targets these commands:

| Command | Extracts |
|---|---|
| `\textbf{\Huge \scshape Name}` | Your name |
| `\href{mailto:...}` | Email |
| `\href{https://linkedin...}` | LinkedIn URL |
| `\section*{Summary}` | Bio text |
| `\textbf{Category}{: items...}` | Skill groups |
| `\resumeSubheading{Co}{Loc}{Role}{Dates}` | Experience & project entries |
| `\resumeItem{bullet}` | Bullet points |

If your template uses different commands, open `scripts/parse-cv.ts` and adjust the regex patterns — each section is clearly labeled.

---

## License

MIT — use freely, attribution appreciated.
