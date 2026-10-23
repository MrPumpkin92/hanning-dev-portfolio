# Portfolio: working notes

Astro 7 static site. All content lives in `src/data/*.ts` and is typed by `src/data/types.ts`; components only render it.

## When the user provides a new CV

Follow "Updating content from a new CV" in README.md. In short:

- The CV is the only source of facts. Never add jobs, skills, metrics, dates, links or claims that aren't in it. Rewording is fine, but the factual meaning must not change.
- Report additions, removals and changes to the user, then edit `src/data` only. Don't touch components or styles for a content update unless the new content can't be displayed otherwise.
- Keep the phone number off the site even though the CV includes it.
- Links commented "carried over from the previous version of this site" are not in the CV. Keep them unless the user says otherwise, and say so if one stops resolving.
- If the name, school or headline change, regenerate `public/og.jpg`.
- Finish with `npm run check && npm run build`.

## Design system

Tokens are in `src/styles/tokens.css`. Use them rather than raw values. Breakpoints are 40rem, 48rem and 64rem. Animations must stay subtle and sit behind `prefers-reduced-motion: no-preference`. Content must stay visible without JavaScript.
