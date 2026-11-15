export interface SunsetEvent {
  id: string;
  slug?: string;
  name: string;
  category: string;
  targetSunsetDate: string; // ISO 8601 string
  announcementDate: string;
  status: 'SCHEDULED_DEATH' | 'TERMINAL_PHASE' | 'CRITICAL_RISK' | 'RECENTLY_EXTINCT';
  severanceStage: string;
  parentCompany?: string;
  officialAnnouncementUrl?: string;
  replacementRecommendation?: string;
  rationale: string;
  historicalContext: string;
  riskScore: number; // 0 - 100
}

export const SUNSET_SCHEDULE: SunsetEvent[] = [
  {
    id: 'windows-10',
    slug: 'windows-10',
    name: 'Windows 10 Operating System',
    category: 'Operating Systems',
    targetSunsetDate: '2025-10-14T00:00:00Z',
    announcementDate: '2021-06-24',
    status: 'SCHEDULED_DEATH',
    severanceStage: 'Phase 3: End of Free Security & Quality Patches',
    parentCompany: 'Microsoft',
    officialAnnouncementUrl: 'https://learn.microsoft.com/en-us/lifecycle/products/windows-10-home-and-pro',
    replacementRecommendation: 'Windows 11 or Linux Mint / Debian for unsupported hardware',
    rationale: 'Microsoft officially announced the final retirement of Windows 10 Home, Pro, and Enterprise, moving legacy machines to an expensive Extended Security Updates (ESU) paid subscription.',
    historicalContext: 'Released on July 29, 2015, with the famous slogan "the last version of Windows," it powered over 1.4 billion machines for over a decade before being superseded.',
    riskScore: 98
  },
  {
    id: 'chrome-manifest-v2',
    slug: 'chrome-manifest-v2',
    name: 'Chrome Manifest V2 Extension Protocol',
    category: 'Developer Platforms',
    targetSunsetDate: '2025-06-30T00:00:00Z',
    announcementDate: '2023-11-16',
    status: 'TERMINAL_PHASE',
    severanceStage: 'Phased Deprecation & Enterprise Policy Lockout',
    parentCompany: 'Google',
    officialAnnouncementUrl: 'https://developer.chrome.com/docs/extensions/develop/migrate/manifest-v3',
    replacementRecommendation: 'Manifest V3 extensions, Firefox / Librewolf with full webRequest API',
    rationale: 'Google has systematically deprecated Manifest V2 extensions across Chrome channels, crippling network-level declarative blocking relied upon by classic uBlock Origin and privacy extensions.',
    historicalContext: 'Manifest V2 was the foundational extension standard from 2012 to 2024, enabling the entire modern ecosystem of content filters, script injection, and browser customization.',
    riskScore: 92
  },
  {
    id: 'skype-for-business',
    slug: 'skype-for-business',
    name: 'Skype for Business Server & Legacy Auth',
    category: 'Enterprise / Messaging',
    targetSunsetDate: '2025-10-14T00:00:00Z',
    announcementDate: '2022-04-12',
    status: 'SCHEDULED_DEATH',
    severanceStage: 'Extended Support Termination & Server Decommissioning',
    parentCompany: 'Microsoft',
    officialAnnouncementUrl: 'https://learn.microsoft.com/en-us/lifecycle/products/skype-for-business-server-2015',
    replacementRecommendation: 'Microsoft Teams, Mattermost, Matrix / Element',
    rationale: 'Microsoft is terminating all on-premise Skype for Business Server extended support, completing the final phase of retiring the Lync/Skype unified communications legacy.',
    historicalContext: 'Originally launched as Microsoft Office Communicator in 2007 and rebranded to Lync in 2010 and Skype for Business in 2015, it was the backbone of corporate chat for two decades.',
    riskScore: 89
  },
  {
    id: 'xbox-360-marketplace',
    slug: 'xbox-360-marketplace',
    name: 'Xbox 360 Digital Marketplace',
    category: 'Gaming / Digital Stores',
    targetSunsetDate: '2024-07-29T00:00:00Z',
    announcementDate: '2023-08-17',
    status: 'RECENTLY_EXTINCT',
    severanceStage: 'Complete Digital Storefront Decommission',
    parentCompany: 'Microsoft',
    officialAnnouncementUrl: 'https://support.xbox.com/en-US/help/xbox-360/store/xbox-360-marketplace-update',
    replacementRecommendation: 'Xbox Backward Compatibility Program / Physical Disc Archives',
    rationale: 'Microsoft permanently turned off the Xbox 360 Marketplace and Xbox 360 Store on July 29, 2024, rendering over 220 digital-only arcade games permanently unavailable for legal purchase.',
    historicalContext: 'Launched in November 2005 alongside Xbox Live Arcade, it pioneered the modern digital indie game distribution revolution with titles like Braid, Castle Crashers, and Limbo.',
    riskScore: 100
  },
  {
    id: 'nintendo-3ds-wiiu-servers',
    slug: 'nintendo-3ds-wiiu-servers',
    name: 'Nintendo 3DS & Wii U Online Network',
    category: 'Gaming / Online Services',
    targetSunsetDate: '2024-04-08T23:59:00Z',
    announcementDate: '2023-10-04',
    status: 'RECENTLY_EXTINCT',
    severanceStage: 'Multiplayer Infrastructure Disconnect',
    parentCompany: 'Nintendo',
    officialAnnouncementUrl: 'https://en-americas-support.nintendo.com/app/answers/detail/a_id/63227',
    replacementRecommendation: 'Pretendo Network (Community Reverse-Engineered Replacement)',
    rationale: 'Nintendo halted all online play, internet rankings, and data distribution for the Nintendo 3DS family and Wii U, shutting down a beloved generation of multiplayer games.',
    historicalContext: 'For 13 years, the Nintendo Network carried millions of hours of Mario Kart 7, Super Smash Bros, Animal Crossing: New Leaf, and Splatoon matchmaking.',
    riskScore: 100
  },
  {
    id: 'icq-messenger',
    slug: 'icq-messenger',
    name: 'ICQ Instant Messenger',
    category: 'Messaging',
    targetSunsetDate: '2024-06-26T00:00:00Z',
    announcementDate: '2024-05-24',
    status: 'RECENTLY_EXTINCT',
    severanceStage: 'Full Server Shutdown & Domain Defunct',
    parentCompany: 'VK (formerly Mail.ru / AOL)',
    officialAnnouncementUrl: 'https://icq.com',
    replacementRecommendation: 'Matrix / Element, Signal, Telegram',
    rationale: 'After 28 continuous years of operation, ICQ announced it would stop operating on June 26, 2024, terminating the oldest surviving real-time chat network on the internet.',
    historicalContext: 'Created in 1996 by Mirabilis in Israel, ICQ popularized the UIN numeric ID, the iconic flower icon, and the universally recognized "Uh-oh!" notification sound.',
    riskScore: 100
  }
];

export function getUpcomingSunsets(): SunsetEvent[] {
  const now = new Date().getTime();
  return SUNSET_SCHEDULE.filter(event => {
    return new Date(event.targetSunsetDate).getTime() >= now;
  }).sort((a, b) => new Date(a.targetSunsetDate).getTime() - new Date(b.targetSunsetDate).getTime());
}

export function getHistoricalSunsets(): SunsetEvent[] {
  const now = new Date().getTime();
  return SUNSET_SCHEDULE.filter(event => {
    return new Date(event.targetSunsetDate).getTime() < now;
  }).sort((a, b) => new Date(b.targetSunsetDate).getTime() - new Date(a.targetSunsetDate).getTime());
}

export function getAllSunsets(): SunsetEvent[] {
  return SUNSET_SCHEDULE;
}
