// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// GitHub Pages serves this site from /hanning-dev-portfolio/, so the deploy
// workflow passes that path in. Everywhere else (local dev, Vercel) uses /.
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  base,
  build: {
    // One page with ~20 KB of CSS: inlining it saves two render-blocking requests.
    inlineStylesheets: 'always',
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: ['400 700'],
      styles: ['normal'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Newsreader',
      cssVariable: '--font-newsreader',
      weights: ['400 600'],
      styles: ['normal'],
      fallbacks: ['Georgia', 'serif'],
    },
  ],
});
