/** Prefixes a path in /public with the configured base (e.g. /hanning-dev-portfolio/). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
