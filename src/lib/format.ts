import type { DateString, Period } from '../data/types';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** `2026-03` → `Mar 2026`; `2026` → `2026`. */
export function formatDate(date: DateString): string {
  const [year, month] = date.split('-');
  return month ? `${MONTHS[Number(month) - 1]} ${year}` : year;
}

/** `Sep 2026 – Present`, `Jan – Apr 2024`, or a single date. */
export function formatPeriod({ start, end }: Period): string {
  if (!end) return formatDate(start);
  if (end === 'present') return `${formatDate(start)} – Present`;

  const [startYear, startMonth] = start.split('-');
  const [endYear] = end.split('-');
  if (startMonth && startYear === endYear) return `${MONTHS[Number(startMonth) - 1]} – ${formatDate(end)}`;
  return `${formatDate(start)} – ${formatDate(end)}`;
}

export function isCurrent(period: Period): boolean {
  return period.end === 'present';
}
