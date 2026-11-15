import { SunsetEvent } from '@/lib/history/sunsetSchedule';

function formatIcsDate(date: Date): string {
  const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);
  return (
    date.getUTCFullYear() +
    pad(date.getUTCMonth() + 1) +
    pad(date.getUTCDate()) +
    'T' +
    pad(date.getUTCHours()) +
    pad(date.getUTCMinutes()) +
    pad(date.getUTCSeconds()) +
    'Z'
  );
}

export function generateIcsString(event: SunsetEvent): string {
  const targetDate = new Date(event.targetSunsetDate);
  const endDate = new Date(targetDate.getTime() + 60 * 60 * 1000); // 1 hour ceremony
  const createdDate = new Date();

  const uid = `sunset-${event.id}-${targetDate.getTime()}@internetgraveyard.net`;
  const summary = `[Funeral Vigil] ${event.name} Official Sunset`;
  const description = [
    `OFFICIAL DECEASED SERVICE NOTICE: ${event.name}`,
    `Status: ${event.status}`,
    `Severance Stage: ${event.severanceStage}`,
    `Cause / Rationale: ${event.rationale}`,
    `Recommended Successor: ${event.replacementRecommendation || 'None listed'}`,
    `Archival Memorial: https://internetgraveyard.net/dying-now`,
    `Official Source: ${event.officialAnnouncementUrl || 'N/A'}`
  ].join('\\n');

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Internet Graveyard//Sunset Deathwatch//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${formatIcsDate(createdDate)}`,
    `DTSTART:${formatIcsDate(targetDate)}`,
    `DTEND:${formatIcsDate(endDate)}`,
    `SUMMARY:${summary}`,
    `DESCRIPTION:${description}`,
    'LOCATION:Internet Graveyard Digital Necropolis (Online)',
    'STATUS:CONFIRMED',
    'CLASS:PUBLIC',
    'BEGIN:VALARM',
    'TRIGGER:-PT24H',
    'ACTION:DISPLAY',
    `DESCRIPTION:24-hour final deathwatch warning for ${event.name}`,
    'END:VALARM',
    'BEGIN:VALARM',
    'TRIGGER:-PT1H',
    'ACTION:DISPLAY',
    `DESCRIPTION:1-hour final deathwatch vigil for ${event.name}`,
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');
}

export function downloadSunsetCalendarInvite(event: SunsetEvent): void {
  if (typeof window === 'undefined') return;

  const icsData = generateIcsString(event);
  const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `funeral-vigil-${event.id}.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
