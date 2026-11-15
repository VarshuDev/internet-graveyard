export interface ColdCaseExhibit {
  id: string;
  title: string;
  type: 'MEMO' | 'FINANCIAL' | 'CODE' | 'TESTIMONY';
  date: string;
  snippet: string;
  content: string;
}

export interface GhostDialogue {
  prompt: string;
  response: string;
}

export interface CaseVerdictOption {
  id: string;
  title: string;
  summary: string;
  isPrimaryCause: boolean;
  score: number; // 0 - 100
  historicalAnalysis: string;
}

export interface ColdCase {
  id: string;
  slug: string; // Links to grave slug if available
  title: string;
  subtitle: string;
  victim: string;
  victimLifespan: string;
  category: string;
  classificationStatus: 'UNSOLVED' | 'CONTESTED' | 'SOLVED_ARCHIVAL';
  suspects: string[];
  bannerHue: string;
  executiveSummary: string;
  theCrimeScene: string;
  exhibits: ColdCaseExhibit[];
  ghostDialogues: GhostDialogue[];
  verdictOptions: CaseVerdictOption[];
}

export const COLD_CASES: ColdCase[] = [
  {
    id: 'assassination-of-vine',
    slug: 'vine',
    title: 'The Assassination of Vine',
    subtitle: 'The 6-Second Monoculture, The Creator Revolt, and Twitter Cannibalism',
    victim: 'Vine (Vine Labs / Twitter Inc.)',
    victimLifespan: '2013 — 2017',
    category: 'Social Video & Short-form',
    classificationStatus: 'SOLVED_ARCHIVAL',
    suspects: [
      'Twitter Corporate Neglect',
      'The 18-Creator Sunset Pact',
      'Instagram 15-Second Video Clone',
      'Pre-TikTok Algorithmic Incompetence'
    ],
    bannerHue: 'from-emerald-950/70 to-zinc-950',
    executiveSummary: 'Vine pioneered the entire format of mobile vertical looped video, capturing 200 million monthly active users and giving birth to modern internet humor. Yet within 48 months of Twitter purchasing it for $30M, the platform hemorrhaged its top 50 creators, failed to deploy pre-roll monetization, and was abruptly decommissioned.',
    theCrimeScene: 'On October 27, 2016, Twitter announced it was shuttering the Vine mobile apps as part of an emergency 9% workforce restructuring. Vines were frozen into read-only archives. Months later, Musical.ly and ByteDance (TikTok) adopted the exact same core loop mechanics to build a $250 billion monopoly.',
    exhibits: [
      {
        id: 'exhibit-v1',
        title: 'Confidential 18-Creator Sunset Summit at Sunset Blvd Diner',
        type: 'TESTIMONY',
        date: 'Fall 2015',
        snippet: '18 top creators control billions of loops, demanding $1.2M each to remain on the platform.',
        content: 'Amanda Cerny, Marcus Johns, King Bach, and 15 other premier Vine stars met secretly with Vine leadership at a Sunset Boulevard diner. They presented an ultimatum: pay each top creator a guaranteed $1.2 million annually and build native revenue-share monetization within 6 months, or they would permanently migrate their audiences to YouTube and Instagram. Twitter leadership rejected the demand. Within weeks, 17 of the 18 halted original production.'
      },
      {
        id: 'exhibit-v2',
        title: 'Internal Twitter Engineering Memo: Video Ad Revenue Friction',
        type: 'FINANCIAL',
        date: 'March 2015',
        snippet: 'How do you insert a 15-second commercial in front of a 6-second video?',
        content: 'Financial analysts were baffled by how to monetize a 6-second loop. Traditional pre-roll advertising was structurally impossible—no viewer would tolerate a 15-second unskippable commercial to watch a 6-second gag. Twitter leadership refused to build tipping, creator funds, or sponsored badge networks, treating Vine as an auxiliary media attachment rather than an independent business.'
      },
      {
        id: 'exhibit-v3',
        title: 'Instagram Video Release & Rapid Feature Duplication',
        type: 'MEMO',
        date: 'June 20, 2013',
        snippet: 'Kevin Systrom and Mark Zuckerberg deploy 15-second video with custom filters.',
        content: 'Just five months after Vine achieved #1 on the iOS App Store, Facebook responded by adding 15-second video recording and cinema stabilization to Instagram. Instagram offered larger follower graphs, direct brand sponsorships, and better discovery tools, draining Vine of cross-platform momentum.'
      }
    ],
    ghostDialogues: [
      {
        prompt: 'Why did you restrict users strictly to 6 seconds?',
        response: 'The 6-second constraint was not a limitation; it was a rhythmic poetic meter. It forced creators to eliminate filler, master comedic timing, and make videos designed to loop infinitely. But when our creators wanted to evolve into long-form narrative sketches, our architecture had nowhere for them to grow.'
      },
      {
        prompt: 'Did Twitter save you or murder you?',
        response: 'They bought us before we even publicly launched in 2012. They gave us server bandwidth to survive explosive growth, but once their own stock price plummeted, we were treated like an expensive video bandwidth liability instead of the future of the web.'
      }
    ],
    verdictOptions: [
      {
        id: 'twitter_neglect',
        title: 'Corporate Neglect & Monetization Paralysis',
        summary: 'Twitter failed to understand video infrastructure economics and refused to build creator monetization rails.',
        isPrimaryCause: true,
        score: 95,
        historicalAnalysis: 'Accurate. Post-mortems confirm Twitter viewed Vine as an expense rather than a standalone platform. When top creators asked for viable livelihoods, Twitter walked away, leaving an open market vacuum that ByteDance exploited with TikTok.'
      },
      {
        id: 'instagram_clone',
        title: 'Facebook / Instagram Feature Duplication',
        summary: 'Instagram 15-second video and Stories crushed Vine through raw distribution scale.',
        isPrimaryCause: false,
        score: 75,
        historicalAnalysis: 'Partially true. Instagram was a severe headwind, but Vine retained massive cultural cachet and original comedy virality until creator relations completely broke down inside Twitter.'
      },
      {
        id: 'natural_novelty',
        title: 'The 6-Second Format Was Inherently a Fading Novelty',
        summary: 'Users simply grew tired of short looping clips.',
        isPrimaryCause: false,
        score: 20,
        historicalAnalysis: 'Completely false. Short vertical video became the most dominant, high-engagement consumer media format in human history over the following decade.'
      }
    ]
  },
  {
    id: 'the-flash-execution',
    slug: 'adobe-flash',
    title: 'The Flash Execution',
    subtitle: 'Steve Jobs’ Thoughts on Flash, The Mobile Transition, and HTML5 Web Standards',
    victim: 'Adobe Flash Player (FutureSplash / Macromedia)',
    victimLifespan: '1996 — 2020',
    category: 'Browser Runtimes & Animation',
    classificationStatus: 'SOLVED_ARCHIVAL',
    suspects: [
      'Steve Jobs / Apple Inc. iOS Lockout',
      'The "Thoughts on Flash" Open Letter',
      'Chronic Zero-Day Security Exploits',
      'W3C HTML5 Canvas & WebGL Consortium'
    ],
    bannerHue: 'from-red-950/70 to-zinc-950',
    executiveSummary: 'For 15 years, Adobe Flash was the interactive nervous system of the web. It powered Newgrounds, Homestar Runner, Club Penguin, YouTube, and 98% of all online browser games. Its sudden fall was triggered when Apple banned it from the iPhone, citing disastrous battery drain, touchscreen incompatibility, and catastrophic security vulnerabilities.',
    theCrimeScene: 'On April 29, 2010, Steve Jobs published a blistering 1,700-word public treatise entitled "Thoughts on Flash." Over the next decade, Google Chrome sandboxed it, Adobe surrendered mobile Flash development, and on December 31, 2020, Adobe permanently triggered an internal timebomb in the runtime to block all Flash content.',
    exhibits: [
      {
        id: 'exhibit-f1',
        title: 'Steve Jobs’ Public Memorandum: "Thoughts on Flash"',
        type: 'MEMO',
        date: 'April 29, 2010',
        snippet: 'Flash was designed for PCs and mice, not mobile touchscreens and batteries.',
        content: 'Jobs declared: "Flash was created during the PC era—for PCs and mice. Flash is a successful business for Adobe, and we can understand why they want to push it beyond PCs. But the mobile era is about low power devices, touch interfaces and open web standards—all areas where Flash falls short. Flash is the number one reason Macs crash."'
      },
      {
        id: 'exhibit-f2',
        title: 'CVE Database: The Endless Zero-Day Exploit Torrent',
        type: 'CODE',
        date: '2010 — 2016',
        snippet: 'Over 1,000 recorded Critical Remote Code Execution vulnerabilities.',
        content: 'Between 2005 and 2020, security researchers discovered more than 1,070 documented Common Vulnerabilities and Exposures (CVEs) in the Flash Player NPAPI plugin. Malicious advertising networks (malvertising) weaponized Flash to silently install drive-by ransomware on millions of PCs through simple banner impressions.'
      },
      {
        id: 'exhibit-f3',
        title: 'Google Chrome Project: Deprecate Plugins & Block Auto-Play',
        type: 'MEMO',
        date: '2015',
        snippet: 'Chrome begins pausing background Flash content by default to save battery.',
        content: 'In late 2015, Google Chrome engineers shifted Flash into click-to-play mode, followed by complete removal in Chrome 88. Major video distribution (YouTube, Vimeo, Twitch) rapidly finalized HTML5 <video> transitions, leaving Flash solely as a relic of legacy browser games.'
      }
    ],
    ghostDialogues: [
      {
        prompt: 'Was Steve Jobs right about your security and battery performance?',
        response: 'He was technically accurate, but strategically ruthless. We were a proprietary gatekeeper between developers and Apple’s App Store. By banning Flash from iOS, Apple ensured every game had to be written natively for iOS and pay Apple a 30% cut.'
      },
      {
        prompt: 'What happened to the millions of creative animations and games?',
        response: 'A century of digital folklore was wiped from the live web in a single afternoon. If not for community preservation emulators like Ruffle and the Flashpoint archive, our cultural era would have been erased forever.'
      }
    ],
    verdictOptions: [
      {
        id: 'mobile_paradigm_shift',
        title: 'Architectural Incompatibility with Mobile & Open Standards',
        summary: 'Flash was fundamentally engineered for mouse cursors and heavy desktop CPUs, unable to adapt to battery limits and touchscreens.',
        isPrimaryCause: true,
        score: 96,
        historicalAnalysis: 'Conclusive. Even if Apple had tolerated Flash, its proprietary closed architecture, lack of hardware GPU video decoding on smartphones, and mouse-hover events made it fatal for mobile computing.'
      },
      {
        id: 'apple_app_store_greed',
        title: 'Apple Monopolistic Elimination of Cross-Platform Runtimes',
        summary: 'Apple banned Flash purely to protect the App Store 30% toll booth.',
        isPrimaryCause: false,
        score: 65,
        historicalAnalysis: 'A major contributing business factor, but not the singular cause. Android initially attempted to support mobile Flash, and even Adobe publicly conceded it was unmaintainable and drained batteries in minutes.'
      },
      {
        id: 'security_paralysis',
        title: 'Unpatchable Security Vulnerabilities',
        summary: 'Enterprises and web browsers could no longer stomach the risk of remote exploit code.',
        isPrimaryCause: false,
        score: 80,
        historicalAnalysis: 'A massive catalyst. The relentless flood of drive-by malware exploits forced browser vendors (Mozilla, Google, Microsoft) to coordinate its final retirement.'
      }
    ]
  },
  {
    id: 'the-google-reader-deprecation',
    slug: 'google-reader',
    title: 'The Google Reader Deprecation',
    subtitle: 'The Destruction of the Open RSS Web and the Forced Google+ Pivot',
    victim: 'Google Reader',
    victimLifespan: '2005 — 2013',
    category: 'RSS & News Aggregation',
    classificationStatus: 'SOLVED_ARCHIVAL',
    suspects: [
      'The Google+ Social Pivot',
      'The "Spring Cleaning" Cost Cuts',
      'Lack of Direct Advertising Revenue',
      'The Shift to Algorithmic Walled Gardens'
    ],
    bannerHue: 'from-amber-950/70 to-zinc-950',
    executiveSummary: 'Google Reader was the beloved town square of journalists, developers, and knowledge workers. It empowered users to curate hundreds of independent blogs and news feeds chronologically without algorithms or clickbait. Its termination is widely regarded as the original sin of the centralized algorithmic internet.',
    theCrimeScene: 'On March 13, 2013, Google announced Google Reader would be retired on July 1, 2013, as part of a "spring clean." A petition signed by hundreds of thousands of furious users was completely ignored. Google attempted to funnel users into Google+, which failed catastrophically years later.',
    exhibits: [
      {
        id: 'exhibit-r1',
        title: 'Official Google "Spring Cleaning" Deprecation Announcement',
        type: 'MEMO',
        date: 'March 13, 2013',
        snippet: 'Urs Hölzle announces shutdown citing declining usage and focus on fewer products.',
        content: 'Google SVP Urs Hölzle wrote: "We launched Google Reader in 2005 in an effort to make it easy for people to discover and keep tabs on their favorite websites. While the product has a loyal following, over the years usage has declined. So, on July 1, 2013, we will retire Google Reader."'
      },
      {
        id: 'exhibit-r2',
        title: 'Former Google Reader Engineer Testimony on Google+ Cannibalism',
        type: 'TESTIMONY',
        date: '2014',
        snippet: 'Engineering resources were forcibly stripped and reallocated to Google+.',
        content: 'Former engineers revealed that Google leadership was terrified of Facebook’s ascendancy. CEO Larry Page tied company-wide executive bonuses to Google+ adoption. Reader’s beloved social sharing features were systematically stripped and redirected to Google+. When users rebelled against the Google+ integration, executives deemed Reader incompatible with the new corporate vision.'
      },
      {
        id: 'exhibit-r3',
        title: 'The Algorithmic Feeds vs. Chronological RSS Economic Conflict',
        type: 'FINANCIAL',
        date: '2013',
        snippet: 'RSS feeds did not allow Google to track clicks or inject sponsored algorithmic ad units.',
        content: 'RSS is an open decentralized protocol. When a user reads articles via RSS, publishers and ad networks cannot force users into centralized tracking cookies or inject algorithmic engagement bait. Centralized platforms (Facebook, Twitter) could extract 100x more monetization by keeping users inside closed, algorithmic walls.'
      }
    ],
    ghostDialogues: [
      {
        prompt: 'Why did millions of people mourn a simple RSS reader?',
        response: 'Because I was the last great tool of digital autonomy. I gave you a chronological stream of pure ideas chosen by YOU, not an engagement algorithm trying to generate outrage for ad impressions.'
      },
      {
        prompt: 'Did Google+ accomplish anything by killing your team?',
        response: 'Nothing. Google+ was abandoned five years later after massive data leaks and ghost-town engagement. They destroyed the greatest open web aggregator for a social network nobody wanted.'
      }
    ],
    verdictOptions: [
      {
        id: 'walled_gardens_monetization',
        title: 'The Death of the Open Web for Algorithmic Advertising',
        summary: 'Open RSS gave Google no ad impressions or engagement telemetry compared to closed feeds.',
        isPrimaryCause: true,
        score: 94,
        historicalAnalysis: 'Decisive. RSS could not be monetized with Google AdSense in the same lucrative manner as algorithmic discovery surfaces. Shutting Reader cleared the field for centralized social platforms.'
      },
      {
        id: 'google_plus_obsession',
        title: 'The Google+ Internal Power Struggle',
        summary: 'Leadership forced all teams to abandon decentralized tools in favor of Google+.',
        isPrimaryCause: false,
        score: 82,
        historicalAnalysis: 'A massive internal driver. Reader was actively starved of engineers so talent could be shifted to Larry Page’s doomed war against Facebook.'
      },
      {
        id: 'declining_usage',
        title: 'True Organic User Decline',
        summary: 'Mainstream consumers abandoned RSS for mobile apps and social feeds.',
        isPrimaryCause: false,
        score: 35,
        historicalAnalysis: 'While mainstream users preferred mobile feeds, Reader had an intensely devoted power-user base that provided disproportionate cultural curation for the entire internet.'
      }
    ]
  },
  {
    id: 'the-napster-injunction',
    slug: 'napster',
    title: 'The Napster Injunction',
    subtitle: 'The Peer-to-Peer MP3 Revolution, Metallica, and the Federal Subpoenas',
    victim: 'Napster (Shawn Fanning & Sean Parker)',
    victimLifespan: '1999 — 2001',
    category: 'P2P File Sharing & Digital Music',
    classificationStatus: 'SOLVED_ARCHIVAL',
    suspects: [
      'Recording Industry Association of America (RIAA)',
      'Metallica (Lars Ulrich Legal Action)',
      'A&M Records v. Napster Inc. Court Injunction',
      'The Centralized Server Architecture Flaw'
    ],
    bannerHue: 'from-blue-950/70 to-zinc-950',
    executiveSummary: 'In the summer of 1999, an 18-year-old college dropout named Shawn Fanning launched Napster. Within months, over 80 million registered users were exchanging gigabytes of MP3 files for free over dial-up modems. It triggered the most seismic intellectual property war in modern history.',
    theCrimeScene: 'In July 2001, Federal District Judge Marilyn Patel issued a fatal preliminary injunction ordering Napster to remove all copyrighted music files within 72 hours or disconnect entirely. Unable to filter millions of hashed filenames from its centralized index, Napster shut its servers on July 11, 2001, and filed for Chapter 11 bankruptcy.',
    exhibits: [
      {
        id: 'exhibit-n1',
        title: 'Lars Ulrich’s 335,000-User Subpoena Hand-Delivery',
        type: 'TESTIMONY',
        date: 'May 3, 2000',
        snippet: 'Metallica drummer Lars Ulrich personally delivers 13 boxes of printed usernames.',
        content: 'After an unreleased demo of Metallica’s "I Disappear" leaked onto radio stations via Napster, drummer Lars Ulrich arrived at Napster headquarters in San Mateo with 13 cardboard boxes containing printouts of 335,435 Napster usernames who had shared Metallica songs, demanding their immediate account termination.'
      },
      {
        id: 'exhibit-n2',
        title: 'A&M Records, Inc. v. Napster, Inc. (9th Circuit Court of Appeals)',
        type: 'MEMO',
        date: 'February 12, 2001',
        snippet: 'Centralized indexing servers disqualified Napster from DMCA Safe Harbor protection.',
        content: 'The 9th Circuit ruled that because Napster maintained a centralized database of file listings on its own company servers, it had "actual knowledge" of copyright infringement and possessed the supervisory ability to police its users, nullifying DMCA Section 512 safe harbor defenses.'
      },
      {
        id: 'exhibit-n3',
        title: 'The Hydra Effect: Gnutella, Kazaa, and BitTorrent Dispersion',
        type: 'CODE',
        date: '2001 — 2004',
        snippet: 'Napster’s demise spawned fully decentralized serverless protocols.',
        content: 'By killing Napster’s centralized indexing server, the music industry unwittingly created a decentralized monster. Developers immediately created Gnutella, Kazaa, eDonkey2000, and Bram Cohen’s BitTorrent—protocols with no central servers, no company to sue, and no off-switch.'
      }
    ],
    ghostDialogues: [
      {
        prompt: 'Did you set out to destroy musicians and record labels?',
        response: 'We loved music. The CD format was overpriced ($18 for one good song and 11 filler tracks) and unplayable on computers. We proved the world wanted instant, infinite, celestial digital music. The labels spent millions suing us instead of building Spotify ten years earlier.'
      },
      {
        prompt: 'What was your fatal engineering flaw?',
        response: 'Our central index server. The audio files were transferred directly peer-to-peer between users, but our servers maintained the search catalog. That single IP address gave the federal marshals a physical plug to pull.'
      }
    ],
    verdictOptions: [
      {
        id: 'centralized_server_liability',
        title: 'Centralized Architecture Legal Injunction',
        summary: 'Napster maintained centralized catalog servers, giving the RIAA an identifiable corporate entity and server farm to shutter.',
        isPrimaryCause: true,
        score: 97,
        historicalAnalysis: 'Definitive legal verdict. The 9th Circuit ruled Napster was liable for vicarious copyright infringement because its central directory gave it the ability to locate and remove infringing files.'
      },
      {
        id: 'riaa_refusal_to_license',
        title: 'Record Industry Refusal to License Digital Rights',
        summary: 'Major labels refused all settlement and subscription licensing proposals to preserve physical CD sales.',
        isPrimaryCause: false,
        score: 85,
        historicalAnalysis: 'A decisive strategic cause. Napster offered the labels a paid subscription model with equity, but the labels insisted on total annihilation to protect lucrative physical manufacturing margins.'
      },
      {
        id: 'metallica_pr_backlash',
        title: 'Metallica and Artist Backlash',
        summary: 'Public opposition from prominent recording artists destroyed Napster’s public goodwill.',
        isPrimaryCause: false,
        score: 40,
        historicalAnalysis: 'Culturally loud, but legally secondary. The federal copyright infringement lawsuit was already well underway under RIAA leadership.'
      }
    ]
  }
];

export function getAllColdCases(): ColdCase[] {
  return COLD_CASES;
}

export function getColdCaseById(id: string): ColdCase | undefined {
  return COLD_CASES.find(c => c.id === id);
}
