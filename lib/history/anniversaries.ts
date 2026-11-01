import { ALL_SEED_ENTITIES } from '@/data/seed-entities-batch2';
import { GraveEntity } from '@/types/graveyard';

export interface HistoricalEvent {
  id: string;
  day: number;
  month: number; // 1-12
  monthName: string;
  year: number;
  entitySlug: string;
  entityName: string;
  category: string;
  eventType: 'SHUTDOWN' | 'ANNOUNCEMENT' | 'LAUNCH' | 'ACQUISITION';
  headline: string;
  details: string;
  quote?: string;
}

export const CURATED_HISTORICAL_DISPATCHES: HistoricalEvent[] = [
  {
    id: 'h-vine-shutdown-announce',
    month: 10,
    day: 27,
    monthName: 'October',
    year: 2016,
    entitySlug: 'vine',
    entityName: 'Vine',
    category: 'Social',
    eventType: 'ANNOUNCEMENT',
    headline: 'Twitter Announces the Discontinuation of Vine Mobile App',
    details: 'Twitter blindsided the creator community by announcing Vine would be wound down. Top creators had already begun defecting to YouTube and Instagram after monetization requests were denied.',
    quote: 'To all the creators out there — thank you for taking a chance on this app.'
  },
  {
    id: 'h-vine-dark',
    month: 1,
    day: 17,
    monthName: 'January',
    year: 2017,
    entitySlug: 'vine',
    entityName: 'Vine',
    category: 'Social',
    eventType: 'SHUTDOWN',
    headline: 'Vine Upload Servers Permanently Go Dark',
    details: 'After 4 years of redefining internet comedy into 6-second loops, the original Vine network permanently ceased accepting uploads and transitioned into a crippled standalone camera app.',
    quote: 'Don’t sell your company. Don’t sell your company to Twitter. — Colin Kroll'
  },
  {
    id: 'h-google-reader-sunset',
    month: 7,
    day: 1,
    monthName: 'July',
    year: 2013,
    entitySlug: 'google-reader',
    entityName: 'Google Reader',
    category: 'Developer tools',
    eventType: 'SHUTDOWN',
    headline: 'Google Reader Shuts Down, Triggering the Great RSS Diaspora',
    details: 'Despite international petitions and public outrage, Google severed access to Reader as part of a company-wide push toward Google+. Hundreds of thousands of displaced readers migrated to Feedly.',
    quote: 'There are two kinds of people: those who loved Google Reader, and those who never used it.'
  },
  {
    id: 'h-club-penguin-shutdown',
    month: 3,
    day: 29,
    monthName: 'March',
    year: 2017,
    entitySlug: 'club-penguin',
    entityName: 'Club Penguin',
    category: 'Gaming',
    eventType: 'SHUTDOWN',
    headline: 'Club Penguin Servers Melt After 12 Years of Virtual Blizzard',
    details: 'Disney formally turned off the original Flash-based servers for Club Penguin. On the final night, millions of penguins crowded into the Iceberg to tip it one last time before connection errors severed the world.',
    quote: 'Waddle on, friends. The iceberg will always remember.'
  },
  {
    id: 'h-omegle-closure',
    month: 11,
    day: 8,
    monthName: 'November',
    year: 2023,
    entitySlug: 'omegle',
    entityName: 'Omegle',
    category: 'Messaging',
    eventType: 'SHUTDOWN',
    headline: 'Omegle Closes Doors After 14 Years of Stranger Video Chats',
    details: 'Founder Leif K-Brooks published a heartfelt farewell letter explaining that the psychological stress and escalating financial costs of fighting bad actors on the open web had become insurmountable.',
    quote: 'The battle for the internet has been lost. Omegle is no more.'
  },
  {
    id: 'h-geocities-closure',
    month: 10,
    day: 26,
    monthName: 'October',
    year: 2009,
    entitySlug: 'geocities',
    entityName: 'GeoCities',
    category: 'Communities',
    eventType: 'SHUTDOWN',
    headline: 'Yahoo Wipes 38 Million Handcrafted GeoCities Neighborhoods',
    details: 'Yahoo permanently pulled the plug on GeoCities, deleting an estimated 38 million personal homepages adorned with blinking text, under-construction GIFs, and MIDI soundtracks.',
    quote: 'A digital Library of Alexandria burned down because Yahoo couldn’t monetize 90s nostalgia.'
  },
  {
    id: 'h-grooveshark-settlement',
    month: 4,
    day: 30,
    monthName: 'April',
    year: 2015,
    entitySlug: 'grooveshark',
    entityName: 'Grooveshark',
    category: 'Streaming',
    eventType: 'SHUTDOWN',
    headline: 'Grooveshark Immediately Shuts Down Following $736M Legal Threat',
    details: 'Facing $736 million in statutory copyright infringement damages from major record labels, Escape Media abruptly wiped all user playlists and posted a formal apology letter.',
    quote: 'We started out with the best of intentions, but made terrible mistakes. We apologize. Without reservation.'
  },
  {
    id: 'h-yahoo-answers-archive',
    month: 5,
    day: 4,
    monthName: 'May',
    year: 2021,
    entitySlug: 'yahoo-answers',
    entityName: 'Yahoo! Answers',
    category: 'Communities',
    eventType: 'SHUTDOWN',
    headline: 'Yahoo Answers Ceases Operation: 16 Years of Internet Curiosity Archived',
    details: 'After fielding hundreds of millions of genuine, absurd, and iconic questions since 2005, Yahoo closed submissions and redirected the domain to the Yahoo homepage.',
    quote: 'How is babby formed? Forever answered, never forgotten.'
  },
  {
    id: 'h-adobe-flash-eol',
    month: 12,
    day: 31,
    monthName: 'December',
    year: 2020,
    entitySlug: 'adobe-flash',
    entityName: 'Adobe Flash',
    category: 'Web technology',
    eventType: 'SHUTDOWN',
    headline: 'Adobe Flash Player Reaches Official End of Life',
    details: 'Adobe formally discontinued Flash Player, blocking Flash content from running in major web browsers and ending the era of browser-based vector interactive media.',
    quote: 'The tool that built the interactive web quietly stopped ticking at midnight.'
  },
  {
    id: 'h-quibi-implosion',
    month: 10,
    day: 21,
    monthName: 'October',
    year: 2020,
    entitySlug: 'quibi',
    entityName: 'Quibi',
    category: 'Streaming',
    eventType: 'SHUTDOWN',
    headline: 'Quibi Announces Shutdown Just 6 Months After Raising $1.75 Billion',
    details: 'Jeffrey Katzenberg and Meg Whitman announced the liquidation of Quibi after burning through over a billion dollars in six months with minimal subscriber retention.',
    quote: 'We likely failed because the idea wasn’t strong enough to stand on its own.'
  },
  {
    id: 'h-icq-final-farewell',
    month: 6,
    day: 26,
    monthName: 'June',
    year: 2024,
    entitySlug: 'icq',
    entityName: 'ICQ',
    category: 'Messaging',
    eventType: 'SHUTDOWN',
    headline: 'ICQ Shuts Down Forever After 28 Continuous Years Online',
    details: 'VK, the Russian internet giant that owned ICQ, officially shut down the messaging protocol that introduced UINs and "Uh-oh!" message chimes to the first 100M internet users.',
    quote: 'User ID 11223344 is now offline forever.'
  }
];

export function getDispatchesForDate(date: Date = new Date()): {
  todayDispatch: HistoricalEvent;
  upcomingDispatches: HistoricalEvent[];
  allDispatches: HistoricalEvent[];
} {
  const targetMonth = date.getMonth() + 1;
  const targetDay = date.getDate();

  // Try exact day match
  let exactMatch = CURATED_HISTORICAL_DISPATCHES.find(
    d => d.month === targetMonth && d.day === targetDay
  );

  // If no exact match today, pick the closest or day-of-year indexed dispatch
  if (!exactMatch) {
    // Pick based on day of year so each day consistently gets an interesting event
    const startOfYear = new Date(date.getFullYear(), 0, 0);
    const diff = date.getTime() - startOfYear.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    const index = dayOfYear % CURATED_HISTORICAL_DISPATCHES.length;
    exactMatch = CURATED_HISTORICAL_DISPATCHES[index];
  }

  const otherDispatches = CURATED_HISTORICAL_DISPATCHES.filter(d => d.id !== exactMatch?.id);

  return {
    todayDispatch: exactMatch,
    upcomingDispatches: otherDispatches.slice(0, 4),
    allDispatches: CURATED_HISTORICAL_DISPATCHES
  };
}
