import type { Project } from './types';

/**
 * Listed in display order. Featured projects come first and get full cards;
 * the rest appear in a compact grid, with the first few shown up front.
 */
export const projects: Project[] = [
  {
    name: 'Ante',
    tagline: 'Privacy-first personal finance for iOS',
    role: 'Solo developer',
    context: 'Personal project',
    period: { start: '2026-07', end: 'present' },
    summary:
      'A local-first finance app for Canadians that covers credit cards, chequing and TFSA/RRSP/FHSA investing. Financial data never leaves the device: it lives in IndexedDB with no bank or broker link, and only ticker symbols go out for prices. Now preparing for App Store release (v0.8.1).',
    highlights: [
      'Secured the Supabase backend with row-level security on 15 tables and a rate-limited quotes proxy. Ran an OWASP MASVS review, moved session tokens into the iOS Keychain with a custom Swift plugin, and fixed a critical (CVSS 9.3) Capacitor vulnerability.',
      'Maintains 4,100+ automated tests, including PGlite tests that exercise migrations and RLS against real Postgres without Docker. Xcode Cloud gates every iOS build on type-checking and the full suite.',
      'Designed for trust: a guard holds back implausible live quotes, alongside CAD/USD investing, statement import with auto-categorization and duplicate skipping, and an insights engine for subscription detection and debt payoff.',
    ],
    tech: ['React', 'TypeScript', 'Capacitor', 'Swift', 'Supabase', 'Vitest'],
    featured: true,
  },
  {
    name: 'Hermes',
    tagline: 'A running app where friends cheer you on, live',
    context: 'Personal project',
    period: { start: '2026' },
    summary:
      'A native iOS 17 app where friends send voice “cheers” that play in the runner’s earbuds mid-run, each pinned to the point on the route where it was heard. Runs record in the background with GPS, live pace, splits and HealthKit sync. The design target is under 3 s from send to playback.',
    highlights: [
      'Cheer delivery runs on Supabase with no custom server: a Postgres trigger, private Realtime channels and a serialized AVFoundation queue that ducks music.',
      'The database row is the source of truth and Realtime only a notification. The client re-queries on reconnect and every 10 s, and uploads are idempotent upserts on (run_id, seq).',
      'Live location is protected by row-level security, column-level grants and Realtime/Storage authorization, so only accepted friends can see it. An adversarial multi-agent review found 30+ issues, 3 of them critical (including an unauthenticated RPC that could inject events into any private channel); all were fixed.',
    ],
    tech: ['Swift', 'SwiftUI', 'Supabase (Postgres, Realtime, Storage)', 'HealthKit', 'AVFoundation'],
    featured: true,
  },
  {
    name: 'Docket',
    tagline: 'An AI desktop pet that sits on top of your work',
    role: 'Solo developer',
    context: 'Personal project',
    period: { start: '2026-05', end: 'present' },
    summary:
      'A frameless, always-on-top desktop companion that chats through a local LLM and turns casual requests into calendar events and todos.',
    highlights: [
      'Runs Llama 3.2 locally through Ollama for personality-driven dialogue, with a natural-language intent router that turns “dentist Friday 10am” into a structured calendar event or todo.',
      'Hardened OAuth 2.0 for Google Calendar and Spotify (PKCE) with OS-keychain token encryption, sandboxed renderers, a strict CSP and allowlisted IPC.',
      'Handles multi-monitor, mixed-DPI setups with a 60 Hz loop and a manifest-based sprite engine.',
    ],
    tech: ['Electron', 'Node.js', 'Ollama (Llama 3.2)', 'OAuth 2.0'],
    // The CV links github.com/MrPumpkin92/tamagotchi, but that repository is not
    // public yet. Add it back here once it is.
    featured: true,
  },
  {
    name: 'Nimble',
    tagline: 'Serverless waitlist, lead routing and analytics',
    role: 'Founder & full-stack engineer',
    context: 'Toronto, ON',
    period: { start: '2026-05', end: 'present' },
    summary:
      'A serverless full stack on Cloudflare Workers and D1 that runs the waitlist, chat-lead routing and visitor analytics.',
    highlights: [
      'Batched 11 SQL queries into a single edge round-trip, saving $120+/yr in managed-database cost.',
      'Implemented OWASP-aligned admin auth with PBKDF2-SHA256, HMAC-signed stateless session cookies, per-IP brute-force lockout and constant-time comparison. Diagnosed a Workers PBKDF2 iteration cap and hot-fixed it with secret rotation in under 15 minutes, with zero downtime.',
      'Designed a vanilla JavaScript analytics dashboard (SVG sparklines, CSV export) that enforces CSP, X-Frame-Options: DENY and no-store on authenticated responses. Analytics collect no IP, user agent or cookies and run off the request path, keeping responses under 50 ms.',
    ],
    tech: ['Cloudflare Workers', 'D1 (SQLite)', 'JavaScript'],
    links: [{ label: 'n1mbl3.com', href: 'https://n1mbl3.com' }],
    featured: true,
  },
  {
    name: 'Kogtion Auction',
    role: 'Lead developer',
    context: 'Kognitive Solutions Inc.',
    period: { start: '2026-01', end: '2026-04' },
    summary:
      'Led development of a real-time private auction platform for internal corporate events, with live state in PostgreSQL/Supabase. Tracked features and system logic in Jira and Confluence in an Agile team.',
    tech: ['Angular', 'Express', 'PostgreSQL', 'Supabase'],
  },
  {
    name: 'Energy-Aware CPU Scheduling',
    context: 'Kernel-level, xv6-riscv',
    period: { start: '2026-03' },
    summary:
      'Per-process energy tracking with tick-based charging and a three-pass fallback scheduler, plus a getenergy syscall wired into the syscall table with safe copyout.',
    tech: ['C', 'RISC-V assembly', 'Python', 'Perl'],
    // Repository link carried over from the previous version of this site.
    links: [{ label: 'Repository', href: 'https://github.com/shark1Martin/group-14-OS' }],
  },
  {
    name: 'P2P Image Sharing Network',
    context: 'Networking lab',
    period: { start: '2026-03' },
    summary:
      'Kademlia-inspired DHT routing for distributed image search and transfer, over a custom binary protocol parsed with Node Buffers.',
    tech: ['JavaScript', 'Node.js', 'TCP sockets'],
    // Repository link carried over from the previous version of this site.
    links: [{ label: 'Repository', href: 'https://github.com/MrPumpkin92/p2pImageSharingNetwork' }],
  },
  {
    name: 'StocksTrader AI Workbench',
    context: 'Personal project',
    period: { start: '2026-03' },
    summary:
      'A modular ML pipeline (Black-Scholes, VIX, MLP, LSTM and transfer learning) for comparing two symbols, predicting next-day movement and ranking an S&P 500 top five.',
    tech: ['Python', 'Streamlit', 'scikit-learn', 'PyTorch', 'TensorFlow'],
  },
  {
    name: 'Finance Dashboard',
    context: 'Personal project',
    period: { start: '2026-05' },
    summary:
      'Validated CSV import pipelines and embedded Power BI analytics with Azure AD auth, embed tokens and dataset sync, covered by Vitest/Jest tests, CI and docs.',
    tech: ['TypeScript', 'Node.js', 'Azure', 'Power BI'],
  },
  {
    name: 'Automatic Temperature Fan',
    context: 'Final project',
    period: { start: '2026-03' },
    summary:
      'Interrupt-driven C firmware for an MSP430G2553 with register-level ADC and PWM and deterministic 100 ms updates. Automatic and manual modes with debouncing, backed by a Python logic model with 7 passing unit tests.',
    tech: ['C', 'MSP430G2553', 'Python'],
    // Repository link carried over from the previous version of this site.
    links: [{ label: 'Repository', href: 'https://github.com/MrPumpkin92/automatic_temperature_fan' }],
  },
  {
    name: 'Secure Course Management System',
    role: 'Full stack',
    period: { start: '2025-10' },
    summary:
      'Custom-encrypted token authentication following OWASP practices, with input validation, SQL-injection prevention and a small attack surface behind a responsive front end.',
    tech: ['Node.js', 'Express'],
    // Repository link carried over from the previous version of this site.
    links: [{ label: 'Repository', href: 'https://github.com/MrPumpkin92/CourseManagement' }],
  },
  {
    name: 'AeroDB',
    role: 'Database designer',
    period: { start: '2025-09', end: '2025-12' },
    summary:
      'A 3NF/BCNF schema with automated ingestion pipelines on AWS and optimized queries for flights and crew.',
    tech: ['SQL', 'AWS', 'JavaScript'],
  },
  {
    name: 'MiniNet DNS Simulation',
    context: 'Networking lab',
    period: { start: '2025-11' },
    summary:
      'A virtual DNS network with recursive and authoritative servers, with traffic analyzed in Wireshark to evaluate performance and vulnerabilities.',
    tech: ['MiniNet', 'Wireshark'],
  },
  {
    name: 'GitNest',
    role: 'Lead developer',
    context: 'SACHacks hackathon',
    period: { start: '2025-03' },
    summary:
      'Led an AI-assisted GitHub analytics build with secure REST endpoints, security-monitored data pipelines and strict auth around private metadata.',
    tech: ['Python', 'Requests', 'Gemini AI'],
    // Repository link carried over from the previous version of this site.
    links: [{ label: 'Repository', href: 'https://github.com/Thomson-Lam/Git-Nest' }],
  },
  {
    name: 'XR-848',
    role: 'Software developer',
    period: { start: '2025-01', end: '2025-05' },
    summary:
      'An interactive Unity app that uses spatial hashing and octrees for collision detection, built through feature branches and pull requests.',
    tech: ['C#', 'Unity', 'Git'],
  },
  {
    name: 'NBA Predictive Analytics Model',
    role: 'Data analyst',
    period: { start: '2024-11', end: '2025-01' },
    summary:
      'Forecast player performance with regression, automated a Python to Google Sheets API pipeline, and compared no-code ML (Simple ML for Sheets) with custom Python models.',
    tech: ['Python', 'Google Sheets', 'Google Cloud'],
  },
];
