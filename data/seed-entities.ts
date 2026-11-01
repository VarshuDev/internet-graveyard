import { GraveEntity } from '@/types/graveyard';

export const SEED_ENTITIES: GraveEntity[] = [
  {
    id: "grave-vine-001",
    slug: "vine",
    name: "Vine",
    tagline: "Six seconds of looping infinite creativity.",
    description: "Vine was an American short-form video hosting service founded in June 2012 by Dom Hofmann, Rus Yusupov, and Colin Kroll. Acquired by Twitter in October 2012 before its official launch, Vine allowed users to record and share six-second looping video clips. It spawned a vibrant subculture of internet comedians, musicians, and creators before struggling with creator monetization, executive leadership churn, and fierce competition from Instagram.",
    category: "Social",
    status: "CONFIRMED_DEAD",
    status_reason: "Discontinued by parent company Twitter due to lack of monetization, creator defections to YouTube/Instagram, and product stagnation.",
    founded_year: 2012,
    death_date: "January 17, 2017",
    death_year: 2017,
    lifespan: "2013 — 2017",
    cause_of_death_summary: "Acquired by Twitter prior to launch; failed to implement revenue sharing for top stars who migrated to YouTube and Instagram; Twitter shut down the upload network during company-wide cost-cutting.",
    cause_category: "Acquired & Discontinued",
    logo_url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&auto=format&fit=crop&q=80",
    hero_image_url: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&auto=format&fit=crop&q=80",
    primary_domain: "vine.co",
    popularity_peak: "200M+ active viewers; 1.5B loop impressions/day",
    peak_users: "200 Million",
    country: "United States",
    parent_company: "Twitter, Inc.",
    confidence_score: 100,
    candle_count: 3842,
    is_verified: true,
    verified_at: "2017-01-17T00:00:00Z",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    related_slugs: ["periscope", "meerkat", "google-plus"],
    last_known_state: {
      website: {
        status_code: 301,
        state_desc: "Redirects to Twitter/X help center or archived portal; no loop player accessible.",
        final_url: "https://vine.co"
      },
      app: {
        store_status: "Delisted from Apple App Store & Google Play",
        state_desc: "Rebranded temporarily as 'Vine Camera' before being completely pulled."
      },
      api: {
        endpoint_status: "410 Gone",
        state_desc: "Underlying Vine endpoints and video CDN clusters were decommissioned."
      },
      community: {
        platform: "Reddit / Twitter",
        state_desc: "r/vine remains archived as a nostalgic memorial; creators shifted to TikTok."
      },
      domain: {
        ownership: "Owned by X Corp (formerly Twitter)",
        state_desc: "Active DNS pointing to static archive landing."
      }
    },
    final_moments: "On October 27, 2016, Twitter announced it would be discontinuing the Vine mobile app. Users were given a brief grace period to download their archives. On January 17, 2017, the original network was permanently shuttered, transitioning into a standalone camera app before fading into digital folklore.",
    timeline: [
      { id: "t-v1", entity_id: "grave-vine-001", year: 2012, date_str: "June 2012", title: "Founded in NYC", description: "Dom Hofmann, Rus Yusupov, and Colin Kroll found Vine to reinvent short mobile video.", event_type: "FOUNDED", order_index: 1 },
      { id: "t-v2", entity_id: "grave-vine-001", year: 2012, date_str: "October 2012", title: "Acquired by Twitter", description: "Twitter acquires Vine for a reported $30 million before its public debut.", event_type: "ACQUISITION", order_index: 2 },
      { id: "t-v3", entity_id: "grave-vine-001", year: 2013, date_str: "January 24, 2013", title: "Official Launch", description: "Vine debuts on iOS, rapidly climbing to the #1 free app spot on the US App Store.", event_type: "LAUNCH", order_index: 3 },
      { id: "t-v4", entity_id: "grave-vine-001", year: 2014, date_str: "August 2014", title: "Cultural Zenith", description: "Vine hits 100M monthly active users. Viral memes like 'Do it for the Vine' dominate youth culture.", event_type: "MILESTONE", order_index: 4 },
      { id: "t-v5", entity_id: "grave-vine-001", year: 2015, date_str: "Late 2015", title: "Creator Exodus", description: "Top creators demand compensation; Instagram video expansion siphons audience and brand sponsors.", event_type: "DECLINE", order_index: 5 },
      { id: "t-v6", entity_id: "grave-vine-001", year: 2016, date_str: "October 27, 2016", title: "Shutdown Announced", description: "Twitter publicly announces the discontinuation of the Vine service and mobile applications.", event_type: "SHUTDOWN_ANNOUNCED", order_index: 6 },
      { id: "t-v7", entity_id: "grave-vine-001", year: 2017, date_str: "January 17, 2017", title: "Service Discontinued", description: "The Vine service officially shuts down. Millions of six-second loops are archived.", event_type: "DISCONTINUED", order_index: 7 }
    ],
    evidence: [
      { id: "e-v1", entity_id: "grave-vine-001", source_name: "Official Medium Announcement", source_type: "Official Blog", url: "https://medium.com/@vine/important-news-about-vine-909c5f23a7ab", timestamp: "2016-10-27", evidence_type: "OFFICIAL_ANNOUNCEMENT", reliability: "VERY_HIGH", weight: 40, extracted_claim: "Twitter and Vine announced the service would be discontinued in the coming months.", is_verified: true },
      { id: "e-v2", entity_id: "grave-vine-001", source_name: "New York Times", source_type: "Reputable News", url: "https://www.nytimes.com/2016/10/28/technology/vine-twitter-shutdown.html", timestamp: "2016-10-28", evidence_type: "REPUTABLE_REPORT", reliability: "VERY_HIGH", weight: 25, extracted_claim: "Twitter to Shut Down Vine as It Trims Staff and Slashes Overhead Costs.", is_verified: true },
      { id: "e-v3", entity_id: "grave-vine-001", source_name: "Wayback Machine Archive", source_type: "Internet Archive", url: "https://web.archive.org/web/20170117000000*/vine.co", timestamp: "2017-01-17", evidence_type: "ARCHIVE_SNAPSHOT", reliability: "VERY_HIGH", weight: 20, extracted_claim: "Web archive confirms redirect to static archive and disappearance of active feed endpoints.", is_verified: true },
      { id: "e-v4", entity_id: "grave-vine-001", source_name: "Automated HTTP Probe", source_type: "Diagnostic Scanner", url: "https://vine.co/api/v1/posts/timeline", timestamp: "2024-01-01", evidence_type: "HTTP_PROBE", reliability: "HIGH", weight: 15, extracted_claim: "HTTP probe returns 404/410; service API entirely dismantled.", is_verified: true }
    ],
    successors: [
      { id: "s-v1", entity_id: "grave-vine-001", name: "TikTok", relationship_type: "Inherited Audience", description: "Inherited the short-form mobile video format with algorithmic feed and music integration.", url: "https://tiktok.com" },
      { id: "s-v2", entity_id: "grave-vine-001", name: "Byte / Clash", relationship_type: "Direct Successor", description: "Created by Vine co-founder Dom Hofmann as an intentional spiritual successor.", url: "https://byte.co" },
      { id: "s-v3", entity_id: "grave-vine-001", name: "YouTube Shorts", relationship_type: "Replaced By", description: "YouTube's micro-video format capturing ex-Viners and modern creator economies.", url: "https://youtube.com" }
    ],
    archives: [
      { id: "arc-v1", entity_id: "grave-vine-001", year: 2013, date_captured: "April 14, 2013", wayback_url: "https://web.archive.org/web/20130414000000*/vine.co", title: "Vine Launch Homepage" },
      { id: "arc-v2", entity_id: "grave-vine-001", year: 2015, date_captured: "June 20, 2015", wayback_url: "https://web.archive.org/web/20150620000000*/vine.co", title: "Vine Peak Popular Channels" },
      { id: "arc-v3", entity_id: "grave-vine-001", year: 2017, date_captured: "January 18, 2017", wayback_url: "https://web.archive.org/web/20170118000000*/vine.co", title: "Vine Farewell Archive Notice" }
    ],
    epitaphs: [
      { id: "ep-v1", entity_id: "grave-vine-001", author_name: "Maya L.", content: "You taught an entire generation how to make six seconds matter. We will never forget 'Look at all those chickens'.", years_used: "2013-2016", candle_lit: true, status: "APPROVED", created_at: "2024-02-12T14:22:00Z" },
      { id: "ep-v2", entity_id: "grave-vine-001", author_name: "RetroCurator", content: "Before algorithmic brainrot, Vine had raw, unhinged timing and true comic genius.", years_used: "2013-2017", candle_lit: true, status: "APPROVED", created_at: "2024-03-01T09:15:00Z" }
    ]
  },
  {
    id: "grave-google-reader-002",
    slug: "google-reader",
    name: "Google Reader",
    tagline: "The beating heart of the open, independent RSS web.",
    description: "Google Reader was a web-based aggregator capable of reading Atom and RSS feeds online or offline. Launched by Google engineer Chris Wetherell in 2005 through Google Labs, it became the undisputed central nervous system of internet publishing, journalism, and personal blog curation before Google abruptly announced its termination in 2013 to refocus on Google+.",
    category: "Web technology",
    status: "CONFIRMED_DEAD",
    status_reason: "Killed in Google's Spring Cleaning initiative in 2013 as part of a company push toward Google+.",
    founded_year: 2005,
    death_date: "July 1, 2013",
    death_year: 2013,
    lifespan: "2005 — 2013",
    cause_of_death_summary: "Google decided RSS curation did not align with its algorithmic engagement goals; prioritized Google+ social integration; shut down despite fierce protests and petitions.",
    cause_category: "Strategic Pivot",
    logo_url: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=200&auto=format&fit=crop&q=80",
    hero_image_url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80",
    primary_domain: "google.com/reader",
    popularity_peak: "Tens of millions of daily power readers; backbone of tech journalism",
    peak_users: "30 Million",
    country: "United States",
    parent_company: "Google Inc.",
    confidence_score: 100,
    candle_count: 5120,
    is_verified: true,
    verified_at: "2013-07-01T00:00:00Z",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    related_slugs: ["google-wave", "google-plus", "stumbleupon"],
    last_known_state: {
      website: {
        status_code: 404,
        state_desc: "URL redirects to Google support sunset page.",
        final_url: "https://google.com/reader"
      },
      app: {
        store_status: "Defunct",
        state_desc: "Official mobile interface killed simultaneously."
      },
      api: {
        endpoint_status: "404 Not Found",
        state_desc: "API completely shut down; caused numerous third-party apps like Reeder to break."
      },
      community: {
        platform: "Open Web / Twitter",
        state_desc: "Mass migration of power users to Feedly, Inoreader, and NewsBlur."
      },
      domain: {
        ownership: "Google LLC",
        state_desc: "Path permanently disabled."
      }
    },
    final_moments: "On March 13, 2013, Google posted 'A second spring of cleaning' on its official blog, announcing Reader would shut down on July 1. A public petition gathered over 150,000 signatures in days, but Google refused to budge. At midnight UTC on July 1, the servers ceased accepting feed syncs.",
    timeline: [
      { id: "t-gr1", entity_id: "grave-google-reader-002", year: 2005, date_str: "October 7, 2005", title: "Labs Release", description: "Launched as a 20% project from engineer Chris Wetherell.", event_type: "LAUNCH", order_index: 1 },
      { id: "t-gr2", entity_id: "grave-google-reader-002", year: 2007, date_str: "September 2007", title: "Graduates from Labs", description: "Google Reader redesign introduces keyboard navigation (J/K shortcuts) that defined power reading.", event_type: "MILESTONE", order_index: 2 },
      { id: "t-gr3", entity_id: "grave-google-reader-002", year: 2011, date_str: "October 2011", title: "Social Features Stripped", description: "Google removes beloved built-in sharing and comments to force Google+ integration, causing intense backlash.", event_type: "DECLINE", order_index: 3 },
      { id: "t-gr4", entity_id: "grave-google-reader-002", year: 2013, date_str: "March 13, 2013", title: "Death Warrant Issued", description: "Google announces Reader will be discontinued in July 2013.", event_type: "SHUTDOWN_ANNOUNCED", order_index: 4 },
      { id: "t-gr5", entity_id: "grave-google-reader-002", year: 2013, date_str: "July 1, 2013", title: "The Lights Go Out", description: "The service is formally taken offline. Feedly gains 3 million users in 10 days.", event_type: "DISCONTINUED", order_index: 5 }
    ],
    evidence: [
      { id: "e-gr1", entity_id: "grave-google-reader-002", source_name: "Google Official Blog", source_type: "Official Announcement", url: "https://googleblog.blogspot.com/2013/03/a-second-spring-of-cleaning.html", timestamp: "2013-03-13", evidence_type: "OFFICIAL_ANNOUNCEMENT", reliability: "VERY_HIGH", weight: 40, extracted_claim: "Google announced Reader would be discontinued on July 1, 2013 due to declining usage.", is_verified: true },
      { id: "e-gr2", entity_id: "grave-google-reader-002", source_name: "Wired Deep Dive", source_type: "Reputable News", url: "https://www.wired.com/2013/03/google-reader-death/", timestamp: "2013-03-14", evidence_type: "REPUTABLE_REPORT", reliability: "VERY_HIGH", weight: 25, extracted_claim: "Why Google Killed Its Best Product and How It Broke the RSS Ecosystem.", is_verified: true },
      { id: "e-gr3", entity_id: "grave-google-reader-002", source_name: "Wayback Machine Snapshot", source_type: "Internet Archive", url: "https://web.archive.org/web/20130630000000*/google.com/reader", timestamp: "2013-06-30", evidence_type: "ARCHIVE_SNAPSHOT", reliability: "VERY_HIGH", weight: 20, extracted_claim: "Last known snapshot of functional Google Reader web interface with export OPML prompt.", is_verified: true }
    ],
    successors: [
      { id: "s-gr1", entity_id: "grave-google-reader-002", name: "Feedly", relationship_type: "Inherited Audience", description: "Built a clone of the Reader API in 48 hours to preserve third-party sync apps.", url: "https://feedly.com" },
      { id: "s-gr2", entity_id: "grave-google-reader-002", name: "Inoreader", relationship_type: "Spiritual Successor", description: "Powerful power-user RSS reader with rule automation and search filtering.", url: "https://inoreader.com" }
    ],
    archives: [
      { id: "arc-gr1", entity_id: "grave-google-reader-002", year: 2008, date_captured: "May 10, 2008", wayback_url: "https://web.archive.org/web/20080510000000*/google.com/reader", title: "Classic Google Reader Interface" }
    ],
    epitaphs: [
      { id: "ep-gr1", entity_id: "grave-google-reader-002", author_name: "David Karp", content: "The internet became fundamentally worse when Google Reader died. Algorithms took over what humans curated.", years_used: "2006-2013", candle_lit: true, status: "APPROVED", created_at: "2024-01-10T11:00:00Z" }
    ]
  },
  {
    id: "grave-geocities-003",
    slug: "geocities",
    name: "GeoCities",
    tagline: "The original homestead of the weird, personal World Wide Web.",
    description: "GeoCities was a web hosting service founded in November 1994 by David Bohnett and John Rezner. Users selected a 'neighborhood' based on their topic (e.g., Hollywood for film, SiliconValley for tech, Area51 for sci-fi) and received free web space. It became the third-most visited website on Earth before being acquired by Yahoo in 1999 for $3.57 billion and eventually neglected to death.",
    category: "Communities",
    status: "CONFIRMED_DEAD",
    status_reason: "Yahoo shut down GeoCities in the US on October 26, 2009, wiping millions of unique personal web pages.",
    founded_year: 1994,
    death_date: "October 26, 2009",
    death_year: 2009,
    lifespan: "1994 — 2009",
    cause_of_death_summary: "Acquired by Yahoo during the dot-com bubble; suffered from lack of product vision, rise of modern social media (MySpace, Facebook), and Yahoo server cost cuts.",
    cause_category: "Acquired & Discontinued",
    logo_url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&auto=format&fit=crop&q=80",
    hero_image_url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop&q=80",
    primary_domain: "geocities.com",
    popularity_peak: "3rd most visited website in the world (1999); 38M+ user pages",
    peak_users: "38 Million",
    country: "United States",
    parent_company: "Yahoo! Inc.",
    confidence_score: 100,
    candle_count: 7390,
    is_verified: true,
    verified_at: "2009-10-26T00:00:00Z",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    related_slugs: ["netscape-navigator", "altavista", "delicious"],
    last_known_state: {
      website: {
        status_code: 301,
        state_desc: "Redirects to Yahoo Small Business / web hosting.",
        final_url: "https://geocities.com"
      },
      app: {
        store_status: "Non-existent",
        state_desc: "Pre-mobile app era."
      },
      api: {
        endpoint_status: "None",
        state_desc: "HTML and FTP based; no API."
      },
      community: {
        platform: "Archive Team / Neocities",
        state_desc: "Archive Team managed to scrape 1 Terabyte of pages right before Yahoo pulled the plug; inspired Neocities."
      },
      domain: {
        ownership: "Yahoo! / Apollo Global Management",
        state_desc: "Preserved for marketing redirects."
      }
    },
    final_moments: "On April 23, 2009, Yahoo announced it would shutter GeoCities later that year. On October 26, 2009, Yahoo pulled the plug, deleting millions of user websites overnight. Jason Scott and the Archive Team mounted a heroic last-minute scraping mission to preserve whatever they could on BitTorrent.",
    timeline: [
      { id: "t-gc1", entity_id: "grave-geocities-003", year: 1994, date_str: "November 1994", title: "Beverly Hills Internet", description: "David Bohnett and John Rezner launch the neighborhood concept.", event_type: "FOUNDED", order_index: 1 },
      { id: "t-gc2", entity_id: "grave-geocities-003", year: 1999, date_str: "January 1999", title: "Yahoo Acquisition", description: "Yahoo buys GeoCities for $3.57 billion at the absolute height of the dot-com bubble.", event_type: "ACQUISITION", order_index: 2 },
      { id: "t-gc3", entity_id: "grave-geocities-003", year: 2009, date_str: "April 23, 2009", title: "Death Notice", description: "Yahoo announces GeoCities will be closed down permanently.", event_type: "SHUTDOWN_ANNOUNCED", order_index: 3 },
      { id: "t-gc4", entity_id: "grave-geocities-003", year: 2009, date_str: "October 26, 2009", title: "The Great Erasure", description: "Servers go dark. The Archive Team releases the 'GeoCities Torrent' preserving 641 GB.", event_type: "DISCONTINUED", order_index: 4 }
    ],
    evidence: [
      { id: "e-gc1", entity_id: "grave-geocities-003", source_name: "Yahoo Press Release", source_type: "Official Announcement", url: "https://web.archive.org/web/20090426000000*/help.yahoo.com/l/us/yahoo/geocities/close/", timestamp: "2009-04-23", evidence_type: "OFFICIAL_ANNOUNCEMENT", reliability: "VERY_HIGH", weight: 40, extracted_claim: "Yahoo confirms closure of free GeoCities hosting services effective late 2009.", is_verified: true },
      { id: "e-gc2", entity_id: "grave-geocities-003", source_name: "Internet Archive GeoCities Project", source_type: "Internet Archive", url: "https://archive.org/web/geocities.php", timestamp: "2010-01-01", evidence_type: "ARCHIVE_SNAPSHOT", reliability: "VERY_HIGH", weight: 30, extracted_claim: "Archive.org confirms permanent preservation of over 30 million salvaged pages.", is_verified: true }
    ],
    successors: [
      { id: "s-gc1", entity_id: "grave-geocities-003", name: "Neocities", relationship_type: "Spiritual Successor", description: "Kyle Drake founded Neocities to revive the raw, artisanal, independent homepage web.", url: "https://neocities.org" },
      { id: "s-gc2", entity_id: "grave-geocities-003", name: "Tumblr", relationship_type: "Inherited Audience", description: "Captured the youth aesthetic customization spirit that GeoCities popularized.", url: "https://tumblr.com" }
    ],
    archives: [
      { id: "arc-gc1", entity_id: "grave-geocities-003", year: 1996, date_captured: "October 19, 1996", wayback_url: "https://web.archive.org/web/19961019000000*/geocities.com", title: "GeoCities Neighborhood Directory" }
    ],
    epitaphs: [
      { id: "ep-gc1", entity_id: "grave-geocities-003", author_name: "PixelMonk", content: "Under construction GIFs, MIDI background music, and starry night tiled backgrounds. You were the real internet.", years_used: "1997-2004", candle_lit: true, status: "APPROVED", created_at: "2024-01-18T16:40:00Z" }
    ]
  },
  {
    id: "grave-msn-messenger-004",
    slug: "msn-messenger",
    name: "MSN Messenger",
    tagline: "The soundtrack of after-school dial-up connections and nudges.",
    description: "MSN Messenger (later rebranded Windows Live Messenger) was an instant messaging client created by Microsoft in 1999. It became the dominant communication channel for global teens throughout the 2000s, pioneering nudges, custom animated emoticons, status songs with Windows Media Player, and webcam video calls before being killed in favor of Skype.",
    category: "Messaging",
    status: "CONFIRMED_DEAD",
    status_reason: "Phased out globally in 2013 and China in 2014 following Microsoft's $8.5B acquisition of Skype.",
    founded_year: 1999,
    death_date: "October 31, 2014",
    death_year: 2014,
    lifespan: "1999 — 2014",
    cause_of_death_summary: "Microsoft acquired Skype in 2011 for $8.5 billion and migrated all MSN user accounts into Skype, dismantling the MSN Messenger protocol servers.",
    cause_category: "Strategic Pivot",
    logo_url: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=200&auto=format&fit=crop&q=80",
    hero_image_url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80",
    primary_domain: "messenger.msn.com",
    popularity_peak: "330M active monthly users (2009)",
    peak_users: "330 Million",
    country: "United States",
    parent_company: "Microsoft Corporation",
    confidence_score: 100,
    candle_count: 8912,
    is_verified: true,
    verified_at: "2014-10-31T00:00:00Z",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    related_slugs: ["icq", "skype-for-business", "yik-yak"],
    last_known_state: {
      website: {
        status_code: 301,
        state_desc: "Redirects to Skype homepage.",
        final_url: "https://skype.com"
      },
      app: {
        store_status: "Defunct",
        state_desc: "Desktop client blocked by Microsoft auth servers; patched only by fan reverse-engineering (Escargot)."
      },
      api: {
        endpoint_status: "410 Gone",
        state_desc: "MSNP notification servers disabled."
      },
      community: {
        platform: "Escargot Chat",
        state_desc: "Nostalgic developers created private server reimplementations like Escargot."
      },
      domain: {
        ownership: "Microsoft",
        state_desc: "Redirects to Skype."
      }
    },
    final_moments: "In November 2012, Microsoft announced plans to merge Windows Live Messenger into Skype. The rollout began in April 2013 across North America and Europe, with the final server in mainland China permanently unplugged on October 31, 2014.",
    timeline: [
      { id: "t-msn1", entity_id: "grave-msn-messenger-004", year: 1999, date_str: "July 22, 1999", title: "Launch of MSN Messenger Service", description: "Microsoft debuts MSN Messenger to compete with AOL Instant Messenger (AIM).", event_type: "LAUNCH", order_index: 1 },
      { id: "t-msn2", entity_id: "grave-msn-messenger-004", year: 2005, date_str: "April 2005", title: "Version 7.0 & Nudges", description: "MSN 7 launches with screen shakes (Nudges) and animated Winks, defining early 2000s chat culture.", event_type: "MILESTONE", order_index: 2 },
      { id: "t-msn3", entity_id: "grave-msn-messenger-004", year: 2011, date_str: "May 10, 2011", title: "Microsoft Buys Skype", description: "Microsoft seals $8.5B Skype purchase, sealing Messenger's fate.", event_type: "ACQUISITION", order_index: 3 },
      { id: "t-msn4", entity_id: "grave-msn-messenger-004", year: 2013, date_str: "April 8, 2013", title: "Western Shutdown", description: "Messenger client officially retired across all territories except China.", event_type: "SHUTDOWN_ANNOUNCED", order_index: 4 },
      { id: "t-msn5", entity_id: "grave-msn-messenger-004", year: 2014, date_str: "October 31, 2014", title: "Final Server Dark", description: "MSN China server turned off. 15 years of Messenger history concludes.", event_type: "DISCONTINUED", order_index: 5 }
    ],
    evidence: [
      { id: "e-msn1", entity_id: "grave-msn-messenger-004", source_name: "Microsoft Skype Blog", source_type: "Official Announcement", url: "https://blogs.skype.com/2012/11/06/skype-and-messenger-coming-together/", timestamp: "2012-11-06", evidence_type: "OFFICIAL_ANNOUNCEMENT", reliability: "VERY_HIGH", weight: 40, extracted_claim: "Microsoft announces transition of Windows Live Messenger into Skype.", is_verified: true },
      { id: "e-msn2", entity_id: "grave-msn-messenger-004", source_name: "BBC Technology", source_type: "Reputable News", url: "https://www.bbc.com/news/technology-29393166", timestamp: "2014-08-29", evidence_type: "REPUTABLE_REPORT", reliability: "VERY_HIGH", weight: 30, extracted_claim: "MSN Messenger closes in China, marking end of 15-year era.", is_verified: true }
    ],
    successors: [
      { id: "s-msn1", entity_id: "grave-msn-messenger-004", name: "Skype", relationship_type: "Replaced By", description: "Microsoft merged all MSN contacts into Skype client.", url: "https://skype.com" },
      { id: "s-msn2", entity_id: "grave-msn-messenger-004", name: "Discord", relationship_type: "Spiritual Successor", description: "Adopted status sharing, rich presence, and audio/video channels for communities.", url: "https://discord.com" }
    ],
    archives: [
      { id: "arc-msn1", entity_id: "grave-msn-messenger-004", year: 2004, date_captured: "March 12, 2004", wayback_url: "https://web.archive.org/web/20040312000000*/messenger.msn.com", title: "MSN Messenger 6.0 Feature Portal" }
    ],
    epitaphs: [
      { id: "ep-msn1", entity_id: "grave-msn-messenger-004", author_name: "Elena V.", content: "*NUDGE* *NUDGE* *plays Avril Lavigne on status* ... You made teenage loneliness tolerable.", years_used: "2001-2010", candle_lit: true, status: "APPROVED", created_at: "2024-01-22T20:18:00Z" }
    ]
  },
  {
    id: "grave-adobe-flash-005",
    slug: "adobe-flash",
    name: "Adobe Flash",
    tagline: "The wild, interactive canvas that powered two decades of web creativity.",
    description: "Adobe Flash (originally FutureSplash Animator, then Macromedia Flash) was a multimedia software platform used for production of animations, rich web applications, desktop applications, mobile apps, and browser games. It allowed an entire generation of indie animators and developers to build games like Alien Hominid, FarmVille, and Homestar Runner before open web standards (HTML5, WebGL) and Apple's refusal to support it on iOS sealed its demise.",
    category: "Web technology",
    status: "CONFIRMED_DEAD",
    status_reason: "Officially sunset by Adobe on December 31, 2020; blocked from running in all modern web browsers on January 12, 2021.",
    founded_year: 1996,
    death_date: "December 31, 2020",
    death_year: 2020,
    lifespan: "1996 — 2020",
    cause_of_death_summary: "Notorious security exploits, extreme battery consumption on mobile devices, Steve Jobs' famous 2010 'Thoughts on Flash' memo, and the rise of native HTML5/CSS3/JavaScript rendering.",
    cause_category: "Technological Obsolescence",
    logo_url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=200&auto=format&fit=crop&q=80",
    hero_image_url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&auto=format&fit=crop&q=80",
    primary_domain: "adobe.com/products/flashplayer",
    popularity_peak: "Installed on over 98% of internet-connected desktop computers (2005)",
    peak_users: "1+ Billion Desktops",
    country: "United States",
    parent_company: "Adobe Inc.",
    confidence_score: 100,
    candle_count: 12400,
    is_verified: true,
    verified_at: "2020-12-31T00:00:00Z",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    related_slugs: ["club-penguin", "geocities", "netscape-navigator"],
    last_known_state: {
      website: {
        status_code: 200,
        state_desc: "Adobe End of Life support page explaining the deprecation.",
        final_url: "https://www.adobe.com/products/flashplayer/end-of-life.html"
      },
      app: {
        store_status: "Banned",
        state_desc: "Never allowed on iOS; killed on Android in 2012."
      },
      api: {
        endpoint_status: "Disabled",
        state_desc: "Time-bomb kill switch inside Flash runtime prevents SWF execution past Jan 12, 2021."
      },
      community: {
        platform: "Ruffle / Flashpoint",
        state_desc: "Preserved by open-source Rust emulator Ruffle and BlueMaxima's Flashpoint archive project."
      },
      domain: {
        ownership: "Adobe",
        state_desc: "Official EOL documentation page."
      }
    },
    final_moments: "In July 2017, Adobe partnered with Apple, Google, Microsoft, and Mozilla to announce that Flash Player would be retired at the end of 2020. Adobe embedded a logic bomb in version 32.0.0.371 that stopped Flash Player from loading SWF content after January 12, 2021.",
    timeline: [
      { id: "t-fl1", entity_id: "grave-adobe-flash-005", year: 1996, date_str: "May 1996", title: "FutureSplash Animator", description: "Charlie Jackson and Jonathan Gay develop FutureSplash, later acquired by Macromedia.", event_type: "FOUNDED", order_index: 1 },
      { id: "t-fl2", entity_id: "grave-adobe-flash-005", year: 2005, date_str: "December 2005", title: "Adobe Buys Macromedia", description: "Adobe acquires Macromedia for $3.4 billion, gaining Flash, Dreamweaver, and Director.", event_type: "ACQUISITION", order_index: 2 },
      { id: "t-fl3", entity_id: "grave-adobe-flash-005", year: 2010, date_str: "April 29, 2010", title: "Thoughts on Flash", description: "Steve Jobs publishes his manifesto banning Flash from iPhone and iPad, citing security and battery life.", event_type: "DECLINE", order_index: 3 },
      { id: "t-fl4", entity_id: "grave-adobe-flash-005", year: 2017, date_str: "July 25, 2017", title: "Sunset Agreement", description: "Adobe, Apple, Google, and Mozilla announce coordinated 2020 retirement.", event_type: "SHUTDOWN_ANNOUNCED", order_index: 4 },
      { id: "t-fl5", entity_id: "grave-adobe-flash-005", year: 2020, date_str: "December 31, 2020", title: "Official End of Life", description: "Support ends. On Jan 12, 2021, the runtime activates its internal block switch.", event_type: "DISCONTINUED", order_index: 5 }
    ],
    evidence: [
      { id: "e-fl1", entity_id: "grave-adobe-flash-005", source_name: "Adobe Official Announcement", source_type: "Official EOL Notice", url: "https://www.adobe.com/products/flashplayer/end-of-life.html", timestamp: "2017-07-25", evidence_type: "OFFICIAL_ANNOUNCEMENT", reliability: "VERY_HIGH", weight: 40, extracted_claim: "Adobe announced plans to stop updating and distributing the Flash Player at the end of 2020.", is_verified: true },
      { id: "e-fl2", entity_id: "grave-adobe-flash-005", source_name: "Apple Thoughts on Flash", source_type: "Steve Jobs Open Letter", url: "https://web.archive.org/web/20100501000000*/apple.com/hotnews/thoughts-on-flash/", timestamp: "2010-04-29", evidence_type: "REPUTABLE_REPORT", reliability: "VERY_HIGH", weight: 25, extracted_claim: "Steve Jobs detailed why Apple refused to allow Flash on iOS.", is_verified: true }
    ],
    successors: [
      { id: "s-fl1", entity_id: "grave-adobe-flash-005", name: "Ruffle", relationship_type: "Spiritual Successor", description: "Open-source Flash Player emulator written in Rust using WebAssembly.", url: "https://ruffle.rs" },
      { id: "s-fl2", entity_id: "grave-adobe-flash-005", name: "HTML5 Canvas & WebGL", relationship_type: "Replaced By", description: "Native standards-based browser animation and game runtime.", url: "https://w3.org" }
    ],
    archives: [
      { id: "arc-fl1", entity_id: "grave-adobe-flash-005", year: 2006, date_captured: "November 5, 2006", wayback_url: "https://web.archive.org/web/20061105000000*/macromedia.com/software/flash/about/", title: "Macromedia Flash About Page" }
    ],
    epitaphs: [
      { id: "ep-fl1", entity_id: "grave-adobe-flash-005", author_name: "NewgroundsVeteran", content: "Newgrounds, Armor Games, Kongregate, Miniclip... without you, indie gaming wouldn't exist today.", years_used: "1999-2015", candle_lit: true, status: "APPROVED", created_at: "2024-01-05T18:30:00Z" }
    ]
  },
  {
    id: "grave-napster-006",
    slug: "napster",
    name: "Napster (Original)",
    tagline: "The P2P earthquake that tore the music industry wide open.",
    description: "Napster was a pioneering peer-to-peer file sharing Internet service created in 1999 by Shawn Fanning and Sean Parker. It focused on sharing digital audio files, primarily MP3s. At its peak, 80 million registered users traded billions of songs without copyright authorization, triggering historic lawsuits from Metallica, Dr. Dre, and the RIAA that eventually crushed the original architecture in federal court.",
    category: "Streaming",
    status: "ZOMBIE",
    status_reason: "The original revolutionary P2P decentralized protocol died in 2001. The trademark was auctioned, sold to Roxio, Best Buy, Rhapsody, and now exists as a generic paid streaming zombie.",
    founded_year: 1999,
    death_date: "July 11, 2001",
    death_year: 2001,
    lifespan: "1999 — 2001 (Original)",
    cause_of_death_summary: "Shut down following landmark federal copyright infringement injunctions (A&M Records, Inc. v. Napster, Inc.); filed for Chapter 11 bankruptcy in 2002; assets liquidated.",
    cause_category: "Legal & Regulatory",
    logo_url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=200&auto=format&fit=crop&q=80",
    hero_image_url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&auto=format&fit=crop&q=80",
    primary_domain: "napster.com",
    popularity_peak: "80 million registered users; over 2 billion songs downloaded",
    peak_users: "80 Million",
    country: "United States",
    parent_company: "Napster Inc. (Liquidated 2002)",
    confidence_score: 95,
    candle_count: 4210,
    is_verified: true,
    verified_at: "2001-07-11T00:00:00Z",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    related_slugs: ["kazaa", "grooveshark", "rdio"],
    last_known_state: {
      website: {
        status_code: 200,
        state_desc: "Operates as a generic corporate music streaming platform owned by Hivemind and Algorand.",
        final_url: "https://napster.com"
      },
      app: {
        store_status: "Active Zombie",
        state_desc: "App exists on iOS/Android, but has 0% relationship to the original decentralized MP3 network."
      },
      api: {
        endpoint_status: "Defunct",
        state_desc: "Original central indexing servers permanently silenced in 2001."
      },
      community: {
        platform: "History",
        state_desc: "Paved the way for Limewire, Kazaa, BitTorrent, the iTunes Store, and Spotify."
      },
      domain: {
        ownership: "Hivemind / Algorand",
        state_desc: "Domain passed through 5 corporate owners since bankruptcy auction."
      }
    },
    final_moments: "On March 5, 2001, Judge Marilyn Hall Patel issued a preliminary injunction ordering Napster to remove all copyrighted music listed by plaintiffs within 72 hours. On July 11, 2001, Napster shut down its entire network to comply with the order. It never reopened as a free service.",
    timeline: [
      { id: "t-np1", entity_id: "grave-napster-006", year: 1999, date_str: "June 1, 1999", title: "Fanning Releases Beta", description: "Shawn Fanning writes the Windows client; Sean Parker helps incorporate Napster.", event_type: "LAUNCH", order_index: 1 },
      { id: "t-np2", entity_id: "grave-napster-006", year: 2000, date_str: "April 13, 2000", title: "Metallica Sues", description: "Metallica files landmark copyright infringement suit after their unreleased track 'I Disappear' leaks.", event_type: "DECLINE", order_index: 2 },
      { id: "t-np3", entity_id: "grave-napster-006", year: 2001, date_str: "July 11, 2001", title: "Servers Disconnected", description: "Napster network disabled to comply with federal court injunction.", event_type: "DISCONTINUED", order_index: 3 },
      { id: "t-np4", entity_id: "grave-napster-006", year: 2002, date_str: "June 3, 2002", title: "Bankruptcy Auction", description: "Napster files Chapter 11; brand name auctioned off to Roxio.", event_type: "ACQUISITION", order_index: 4 }
    ],
    evidence: [
      { id: "e-np1", entity_id: "grave-napster-006", source_name: "US 9th Circuit Court of Appeals", source_type: "Court Ruling", url: "https://scholar.google.com/scholar_case?case=1767175494793739777", timestamp: "2001-02-12", evidence_type: "REPUTABLE_REPORT", reliability: "VERY_HIGH", weight: 45, extracted_claim: "Federal court affirmed Napster was liable for contributory copyright infringement.", is_verified: true },
      { id: "e-np2", entity_id: "grave-napster-006", source_name: "CNN Business", source_type: "Reputable News", url: "https://money.cnn.com/2001/07/12/technology/napster_shut/index.htm", timestamp: "2001-07-12", evidence_type: "REPUTABLE_REPORT", reliability: "VERY_HIGH", weight: 35, extracted_claim: "Napster halts free file-sharing service under court pressure.", is_verified: true }
    ],
    successors: [
      { id: "s-np1", entity_id: "grave-napster-006", name: "Spotify", relationship_type: "Direct Successor", description: "Daniel Ek stated Napster directly inspired Spotify by showing people wanted instant access to all music.", url: "https://spotify.com" },
      { id: "s-np2", entity_id: "grave-napster-006", name: "BitTorrent", relationship_type: "Spiritual Successor", description: "Bram Cohen developed decentralized BitTorrent without central indexing servers to resist legal takedowns.", url: "https://bittorrent.com" }
    ],
    archives: [
      { id: "arc-np1", entity_id: "grave-napster-006", year: 2000, date_captured: "November 10, 2000", wayback_url: "https://web.archive.org/web/20001110000000*/napster.com", title: "Original Napster Cat Head Homepage" }
    ],
    epitaphs: [
      { id: "ep-np1", entity_id: "grave-napster-006", author_name: "LarsFan99", content: "You died so streaming could live. Every time I open Spotify, I remember downloading 128kbps MP3s overnight.", years_used: "1999-2001", candle_lit: true, status: "APPROVED", created_at: "2024-02-04T12:00:00Z" }
    ]
  },
  {
    id: "grave-club-penguin-007",
    slug: "club-penguin",
    name: "Club Penguin",
    tagline: "Waddle around and meet new friends.",
    description: "Club Penguin was a massively multiplayer online game involving a virtual world that contained a range of online games and activities. Created by New Horizon Interactive in 2005, players used cartoon penguin-avatars and lived in a snow-covered virtual world. Acquired by Disney in 2007 for $350 million, it became a cultural milestone for Millennial and Gen Z childhoods before being shut down in 2017 to promote mobile app Club Penguin Island.",
    category: "Gaming",
    status: "CONFIRMED_DEAD",
    status_reason: "Disney shut down Club Penguin desktop servers on March 29, 2017; mobile successor Club Penguin Island also died in 2018.",
    founded_year: 2005,
    death_date: "March 29, 2017",
    death_year: 2017,
    lifespan: "2005 — 2017",
    cause_of_death_summary: "Flash deprecation, declining desktop web traffic, Disney refocusing on mobile app 'Club Penguin Island' (which failed and shut down a year later).",
    cause_category: "Acquired & Discontinued",
    logo_url: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&auto=format&fit=crop&q=80",
    hero_image_url: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=1200&auto=format&fit=crop&q=80",
    primary_domain: "clubpenguin.com",
    popularity_peak: "Over 200 million registered penguin accounts; 30M monthly players",
    peak_users: "200 Million",
    country: "Canada",
    parent_company: "The Walt Disney Company",
    confidence_score: 100,
    candle_count: 9812,
    is_verified: true,
    verified_at: "2017-03-29T00:00:00Z",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    related_slugs: ["adobe-flash", "vine", "orkut"],
    last_known_state: {
      website: {
        status_code: 301,
        state_desc: "Redirects to generic Disney games portal.",
        final_url: "https://disney.com"
      },
      app: {
        store_status: "Club Penguin Island shut down in 2018",
        state_desc: "All official mobile titles retired."
      },
      api: {
        endpoint_status: "404 Not Found",
        state_desc: "SmartFoxServer game servers decommissioned."
      },
      community: {
        platform: "Private Servers",
        state_desc: "Private fan servers (Club Penguin Rewritten) faced DMCA copyright actions by Disney in 2022."
      },
      domain: {
        ownership: "Disney",
        state_desc: "Parked / redirect."
      }
    },
    final_moments: "On January 30, 2017, Club Penguin announced it would be shutting down on March 29, 2017. In the game's final hours, thousands of players gathered on the iceberg attempting to tip it one last time. At 00:01 AM PST on March 30, the connection dialog displayed: 'The connection has been lost. Thank you for playing Club Penguin. Waddle on!'",
    timeline: [
      { id: "t-cp1", entity_id: "grave-club-penguin-007", year: 2005, date_str: "October 24, 2005", title: "Public Launch", description: "Created by Lane Merrifield, Dave Krysko, and Lance Priebe in Kelowna, BC.", event_type: "LAUNCH", order_index: 1 },
      { id: "t-cp2", entity_id: "grave-club-penguin-007", year: 2007, date_str: "August 2007", title: "Disney Acquisition", description: "Disney purchases Club Penguin for $350 million plus earn-outs.", event_type: "ACQUISITION", order_index: 2 },
      { id: "t-cp3", entity_id: "grave-club-penguin-007", year: 2017, date_str: "January 30, 2017", title: "Sunset Announcement", description: "Club Penguin announces shutdown to launch Club Penguin Island mobile game.", event_type: "SHUTDOWN_ANNOUNCED", order_index: 3 },
      { id: "t-cp4", entity_id: "grave-club-penguin-007", year: 2017, date_str: "March 29, 2017", title: "Final Waddle", description: "Servers go dark as iceberg flips. Millions bid farewell.", event_type: "DISCONTINUED", order_index: 4 }
    ],
    evidence: [
      { id: "e-cp1", entity_id: "grave-club-penguin-007", source_name: "Disney Club Penguin Official Blog", source_type: "Official Announcement", url: "https://web.archive.org/web/20170131000000*/clubpenguin.com/blog/2017/01/important-announcement-regarding-club-penguin-desktop-and-mobile-devices", timestamp: "2017-01-30", evidence_type: "OFFICIAL_ANNOUNCEMENT", reliability: "VERY_HIGH", weight: 40, extracted_claim: "Club Penguin announces shutdown of desktop world on March 29, 2017.", is_verified: true },
      { id: "e-cp2", entity_id: "grave-club-penguin-007", source_name: "Polygon", source_type: "Reputable News", url: "https://www.polygon.com/2017/1/31/14451992/club-penguin-shutting-down", timestamp: "2017-01-31", evidence_type: "REPUTABLE_REPORT", reliability: "VERY_HIGH", weight: 30, extracted_claim: "Polygon reports on final shutdown and Disney mobile pivot.", is_verified: true }
    ],
    successors: [
      { id: "s-cp1", entity_id: "grave-club-penguin-007", name: "Roblox", relationship_type: "Inherited Audience", description: "Became the dominant social sandbox world for kids and young creators.", url: "https://roblox.com" }
    ],
    archives: [
      { id: "arc-cp1", entity_id: "grave-club-penguin-007", year: 2008, date_captured: "September 15, 2008", wayback_url: "https://web.archive.org/web/20080915000000*/clubpenguin.com", title: "Club Penguin Snowfall Homepage" }
    ],
    epitaphs: [
      { id: "ep-cp1", entity_id: "grave-club-penguin-007", author_name: "PenguinFan08", content: "Waddle on, old friend. We finally tipped the iceberg.", years_used: "2007-2017", candle_lit: true, status: "APPROVED", created_at: "2024-01-14T03:30:00Z" }
    ]
  },
  {
    id: "grave-orkut-008",
    slug: "orkut",
    name: "Orkut",
    tagline: "The social network that ignited Brazil and India.",
    description: "Orkut was a social networking website owned and operated by Google. Named after its creator, Google employee Orkut Büyükkökten, it launched in January 2004. While struggling against Myspace and Facebook in the United States, Orkut became an absolute cultural juggernaut in Brazil and India, boasting hundreds of millions of passionate community members sharing testimonials, scraps, and crush meters before Google phased it out in 2014.",
    category: "Social",
    status: "CONFIRMED_DEAD",
    status_reason: "Google shut down Orkut on September 30, 2014 to focus resources on Google+, YouTube, and Blogger.",
    founded_year: 2004,
    death_date: "September 30, 2014",
    death_year: 2014,
    lifespan: "2004 — 2014",
    cause_of_death_summary: "Google shifted focus to Google+; Orkut was plagued by spam, architectural slowdowns, and lost its entire Brazilian base to Facebook between 2011 and 2012.",
    cause_category: "Strategic Pivot",
    logo_url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&auto=format&fit=crop&q=80",
    hero_image_url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&auto=format&fit=crop&q=80",
    primary_domain: "orkut.com",
    popularity_peak: "Over 300 million users; #1 social network in Brazil for 7 consecutive years",
    peak_users: "300 Million",
    country: "United States / Brazil",
    parent_company: "Google Inc.",
    confidence_score: 100,
    candle_count: 5620,
    is_verified: true,
    verified_at: "2014-09-30T00:00:00Z",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    related_slugs: ["google-plus", "friendster", "path"],
    last_known_state: {
      website: {
        status_code: 200,
        state_desc: "Displays an emotional open letter from founder Orkut Büyükkökten explaining his philosophy.",
        final_url: "https://orkut.com"
      },
      app: {
        store_status: "Defunct",
        state_desc: "Removed from stores in 2014."
      },
      api: {
        endpoint_status: "404 Not Found",
        state_desc: "All endpoints terminated."
      },
      community: {
        platform: "Historic Archive",
        state_desc: "Google preserved a read-only archive of public communities until 2016, now offline."
      },
      domain: {
        ownership: "Orkut Büyükkökten",
        state_desc: "Personal portfolio / tribute note."
      }
    },
    final_moments: "On June 30, 2014, Google posted an announcement on the Orkut blog stating that Orkut would be discontinued on September 30, 2014. Google allowed users to export their profile information and photos via Google Takeout until September 2016.",
    timeline: [
      { id: "t-ok1", entity_id: "grave-orkut-008", year: 2004, date_str: "January 22, 2004", title: "Orkut Launches", description: "Created by Google engineer Orkut Büyükkökten as a 20% project.", event_type: "LAUNCH", order_index: 1 },
      { id: "t-ok2", entity_id: "grave-orkut-008", year: 2008, date_str: "August 2008", title: "Management Moves to Brazil", description: "With over 50% of traffic originating in Brazil, Google transfers Orkut operations to Google Brazil in Belo Horizonte.", event_type: "MILESTONE", order_index: 2 },
      { id: "t-ok3", entity_id: "grave-orkut-008", year: 2011, date_str: "December 2011", title: "Facebook Surpasses Orkut", description: "Facebook overtakes Orkut in Brazil for the first time, sparking irreversible decline.", event_type: "DECLINE", order_index: 3 },
      { id: "t-ok4", entity_id: "grave-orkut-008", year: 2014, date_str: "September 30, 2014", title: "Official Shutdown", description: "Orkut closes down globally.", event_type: "DISCONTINUED", order_index: 4 }
    ],
    evidence: [
      { id: "e-ok1", entity_id: "grave-orkut-008", source_name: "Google Orkut Official Announcement", source_type: "Official Announcement", url: "https://support.google.com/orkut/answer/6055531", timestamp: "2014-06-30", evidence_type: "OFFICIAL_ANNOUNCEMENT", reliability: "VERY_HIGH", weight: 40, extracted_claim: "Google confirms Orkut will be discontinued on September 30, 2014.", is_verified: true },
      { id: "e-ok2", entity_id: "grave-orkut-008", source_name: "Reuters", source_type: "Reputable News", url: "https://www.reuters.com/article/technology/google-to-shut-orkut-social-network-on-sept-30-idUSKBN0F51US/", timestamp: "2014-06-30", evidence_type: "REPUTABLE_REPORT", reliability: "VERY_HIGH", weight: 30, extracted_claim: "Google to shut Orkut social network to focus on other platforms.", is_verified: true }
    ],
    successors: [
      { id: "s-ok1", entity_id: "grave-orkut-008", name: "Instagram & WhatsApp", relationship_type: "Inherited Audience", description: "Captured the daily social life of Brazil and India.", url: "https://instagram.com" }
    ],
    archives: [
      { id: "arc-ok1", entity_id: "grave-orkut-008", year: 2007, date_captured: "November 2, 2007", wayback_url: "https://web.archive.org/web/20071102000000*/orkut.com", title: "Orkut Classic Profile & Scrapbook" }
    ],
    epitaphs: [
      { id: "ep-ok1", entity_id: "grave-orkut-008", author_name: "Thiago Silva", content: "'Só add com scrap'. O Brasil nunca foi tão feliz numa rede social como no Orkut.", years_used: "2005-2012", candle_lit: true, status: "APPROVED", created_at: "2024-01-09T08:12:00Z" }
    ]
  },
  {
    id: "grave-google-wave-009",
    slug: "google-wave",
    name: "Google Wave",
    tagline: "The real-time collaboration miracle that arrived a decade too early.",
    description: "Google Wave was a dynamic personal communication and collaborative web tool announced by Google at Google I/O on May 27, 2009. Developed by the Rasmussen brothers (creators of Google Maps), it merged email, instant messaging, wiki, and document editing into a single live stream with real-time character-by-character typing and playback. It overwhelmed users with complexity and was abandoned by Google in 2010.",
    category: "Developer tools",
    status: "CONFIRMED_DEAD",
    status_reason: "Google ceased development in August 2010 due to low adoption, handing the code to the Apache Software Foundation before complete retirement in 2012.",
    founded_year: 2009,
    death_date: "April 30, 2012",
    death_year: 2012,
    lifespan: "2009 — 2012",
    cause_of_death_summary: "Extreme product complexity, slow web performance in 2009 browsers, lack of clear enterprise use cases, and invite-only exclusivity that killed initial viral momentum.",
    cause_category: "Lack of Monetization",
    logo_url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=200&auto=format&fit=crop&q=80",
    hero_image_url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80",
    primary_domain: "wave.google.com",
    popularity_peak: "1M invited preview users; hailed as 'future of the web' at Google I/O 2009",
    peak_users: "1 Million",
    country: "United States / Australia",
    parent_company: "Google Inc.",
    confidence_score: 100,
    candle_count: 2410,
    is_verified: true,
    verified_at: "2012-04-30T00:00:00Z",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    related_slugs: ["google-reader", "google-plus"],
    last_known_state: {
      website: {
        status_code: 404,
        state_desc: "URL redirects to Google Workspace homepage.",
        final_url: "https://wave.google.com"
      },
      app: {
        store_status: "Defunct",
        state_desc: "Web-only platform."
      },
      api: {
        endpoint_status: "404 Not Found",
        state_desc: "Wave Federation Protocol disabled."
      },
      community: {
        platform: "Apache Wave",
        state_desc: "Handed to Apache Incubator, officially retired in January 2018."
      },
      domain: {
        ownership: "Google LLC",
        state_desc: "Disabled."
      }
    },
    final_moments: "On August 4, 2010, Google announced it would suspend standalone Wave development due to disappointing adoption. Access to Wave was terminated on April 30, 2012. Crucial components of its operational transformation technology were subsequently extracted and integrated into Google Docs.",
    timeline: [
      { id: "t-gw1", entity_id: "grave-google-wave-009", year: 2009, date_str: "May 27, 2009", title: "Google I/O Unveiling", description: "Jens and Lars Rasmussen deliver legendary 80-minute demonstration receiving standing ovations.", event_type: "LAUNCH", order_index: 1 },
      { id: "t-gw2", entity_id: "grave-google-wave-009", year: 2009, date_str: "September 2009", title: "Invite Frenzy", description: "Wave invites sell for $100 on eBay as tech enthusiasts clamor for access.", event_type: "MILESTONE", order_index: 2 },
      { id: "t-gw3", entity_id: "grave-google-wave-009", year: 2010, date_str: "August 4, 2010", title: "Plug Pulled on Development", description: "Google announces it will halt development due to lack of traction.", event_type: "SHUTDOWN_ANNOUNCED", order_index: 3 },
      { id: "t-gw4", entity_id: "grave-google-wave-009", year: 2012, date_str: "April 30, 2012", title: "Final Server Shutdown", description: "Wave servers go dark permanently.", event_type: "DISCONTINUED", order_index: 4 }
    ],
    evidence: [
      { id: "e-gw1", entity_id: "grave-google-wave-009", source_name: "Google Official Blog", source_type: "Official Announcement", url: "https://googleblog.blogspot.com/2010/08/update-on-google-wave.html", timestamp: "2010-08-04", evidence_type: "OFFICIAL_ANNOUNCEMENT", reliability: "VERY_HIGH", weight: 40, extracted_claim: "Google confirms it will stop development of Wave as a standalone product.", is_verified: true },
      { id: "e-gw2", entity_id: "grave-google-wave-009", source_name: "Apache Foundation", source_type: "Open Source Notice", url: "https://incubator.apache.org/projects/wave.html", timestamp: "2018-01-15", evidence_type: "OFFICIAL_ANNOUNCEMENT", reliability: "VERY_HIGH", weight: 25, extracted_claim: "Apache Software Foundation declares Apache Wave officially retired in Incubator.", is_verified: true }
    ],
    successors: [
      { id: "s-gw1", entity_id: "grave-google-wave-009", name: "Slack & Notion", relationship_type: "Spiritual Successor", description: "Notion and Slack successfully built the modular document and live collaborative messaging Wave promised.", url: "https://notion.so" },
      { id: "s-gw2", entity_id: "grave-google-wave-009", name: "Google Docs Realtime", relationship_type: "Direct Successor", description: "Wave's core real-time character concurrency engine was merged into Google Docs.", url: "https://docs.google.com" }
    ],
    archives: [
      { id: "arc-gw1", entity_id: "grave-google-wave-009", year: 2009, date_captured: "October 1, 2009", wayback_url: "https://web.archive.org/web/20091001000000*/wave.google.com", title: "Google Wave Preview Portal" }
    ],
    epitaphs: [
      { id: "ep-gw1", entity_id: "grave-google-wave-009", author_name: "ArchTech", content: "You showed us what the web could be when browsers could barely run basic JavaScript. A tragic visionary masterpiece.", years_used: "2009-2010", candle_lit: true, status: "APPROVED", created_at: "2024-02-17T19:00:00Z" }
    ]
  },
  {
    id: "grave-icq-010",
    slug: "icq",
    name: "ICQ",
    tagline: "The original instant messaging grandfather that said 'Uh-oh!'.",
    description: "ICQ (a play on 'I Seek You') was the world's first widely adopted standalone instant messaging client, created in 1996 by Israeli company Mirabilis. Users were identified by numeric UINs (User Identification Numbers). Acquired by AOL in 1998 for $407 million and later sold to Mail.ru/VK in 2010, ICQ survived for 28 years until its servers were officially disconnected on June 26, 2024.",
    category: "Messaging",
    status: "CONFIRMED_DEAD",
    status_reason: "VK formally shut down ICQ services on June 26, 2024, urging remaining users to transition to VK Messenger.",
    founded_year: 1996,
    death_date: "June 26, 2024",
    death_year: 2024,
    lifespan: "1996 — 2024",
    cause_of_death_summary: "Defeated by MSN Messenger, then smartphones and WhatsApp; parent company VK discontinued the legacy service to consolidate onto VK Workspace.",
    cause_category: "Technological Obsolescence",
    logo_url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=200&auto=format&fit=crop&q=80",
    hero_image_url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&auto=format&fit=crop&q=80",
    primary_domain: "icq.com",
    popularity_peak: "Over 100 million active accounts in early 2000s; iconic flower logo and horn sounds",
    peak_users: "100 Million",
    country: "Israel / Russia",
    parent_company: "VK (formerly Mail.ru)",
    confidence_score: 100,
    candle_count: 6180,
    is_verified: true,
    verified_at: "2024-06-26T00:00:00Z",
    created_at: "2024-06-27T00:00:00Z",
    updated_at: "2024-06-27T00:00:00Z",
    related_slugs: ["msn-messenger", "skype-for-business"],
    last_known_state: {
      website: {
        status_code: 200,
        state_desc: "Shows farewell message with link to VK Messenger.",
        final_url: "https://icq.com"
      },
      app: {
        store_status: "Delisted",
        state_desc: "Removed from App Store and Google Play in 2024."
      },
      api: {
        endpoint_status: "410 Gone",
        state_desc: "OSCAR / ICQ network servers deactivated."
      },
      community: {
        platform: "VK / Historical",
        state_desc: "End of an uninterrupted 28-year run."
      },
      domain: {
        ownership: "VK Company",
        state_desc: "Static farewell landing."
      }
    },
    final_moments: "On May 24, 2024, the official ICQ website posted a simple notification: 'ICQ will stop working on June 26.' On that date, after nearly three decades of service, login attempts ceased and the last green flower turned dark.",
    timeline: [
      { id: "t-icq1", entity_id: "grave-icq-010", year: 1996, date_str: "November 15, 1996", title: "Mirabilis Debuts ICQ", description: "Four Israeli students launch the first version of ICQ for Windows 95.", event_type: "LAUNCH", order_index: 1 },
      { id: "t-icq2", entity_id: "grave-icq-010", year: 1998, date_str: "June 1998", title: "AOL Acquisition", description: "AOL acquires Mirabilis for $407 million cash.", event_type: "ACQUISITION", order_index: 2 },
      { id: "t-icq3", entity_id: "grave-icq-010", year: 2010, date_str: "April 2010", title: "Sale to Digital Sky / Mail.ru", description: "AOL sells ICQ to Russian group Digital Sky Technologies (later VK) for $187.5 million.", event_type: "ACQUISITION", order_index: 3 },
      { id: "t-icq4", entity_id: "grave-icq-010", year: 2024, date_str: "June 26, 2024", title: "Final Farewell", description: "ICQ shuts down permanently after 28 years.", event_type: "DISCONTINUED", order_index: 4 }
    ],
    evidence: [
      { id: "e-icq1", entity_id: "grave-icq-010", source_name: "ICQ Official Website Farewell", source_type: "Official Announcement", url: "https://icq.com", timestamp: "2024-05-24", evidence_type: "OFFICIAL_ANNOUNCEMENT", reliability: "VERY_HIGH", weight: 45, extracted_claim: "ICQ officially announced it would cease operations on June 26, 2024.", is_verified: true },
      { id: "e-icq2", entity_id: "grave-icq-010", source_name: "The Verge", source_type: "Reputable News", url: "https://www.theverge.com/2024/5/25/24164580/icq-shut-down-date-june-26", timestamp: "2024-05-25", evidence_type: "REPUTABLE_REPORT", reliability: "VERY_HIGH", weight: 30, extracted_claim: "ICQ, one of the oldest instant messengers, is shutting down after 28 years.", is_verified: true }
    ],
    successors: [
      { id: "s-icq1", entity_id: "grave-icq-010", name: "Telegram & WhatsApp", relationship_type: "Inherited Audience", description: "Modern mobile chat platforms inheriting direct instant messaging.", url: "https://telegram.org" }
    ],
    archives: [
      { id: "arc-icq1", entity_id: "grave-icq-010", year: 1998, date_captured: "December 6, 1998", wayback_url: "https://web.archive.org/web/19981206000000*/icq.com", title: "Mirabilis ICQ Download Portal" }
    ],
    epitaphs: [
      { id: "ep-icq1", entity_id: "grave-icq-010", author_name: "UIN_3921820", content: "3921820 will forever be memorized in my head. Uh-oh!", years_used: "1997-2006", candle_lit: true, status: "APPROVED", created_at: "2024-06-27T10:00:00Z" }
    ]
  },
  {
    id: "grave-stumbleupon-011",
    slug: "stumbleupon",
    name: "StumbleUpon",
    tagline: "One button to traverse the forgotten corners of the internet.",
    description: "StumbleUpon was a web discovery and serendipity recommendation engine launched in 2001 by Garrett Camp, Geoff Smith, Justin LaFrance, and Eric Boyd. By clicking a single 'Stumble' button, users were teleported to high-quality websites matching their selected interests. It drove more referral traffic than Facebook in 2010 before being acquired by eBay, bought back by founders, and eventually shuttered in 2018 in favor of Mix.com.",
    category: "Search",
    status: "CONFIRMED_DEAD",
    status_reason: "Co-founder Garrett Camp closed StumbleUpon on June 30, 2018 to focus on Mix.com.",
    founded_year: 2001,
    death_date: "June 30, 2018",
    death_year: 2018,
    lifespan: "2001 — 2018",
    cause_of_death_summary: "Declining traffic in the age of algorithmic infinite scroll social feeds (Twitter, Reddit, Instagram); founders pivoted to Mix.com.",
    cause_category: "Strategic Pivot",
    logo_url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=200&auto=format&fit=crop&q=80",
    hero_image_url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80",
    primary_domain: "stumbleupon.com",
    popularity_peak: "40 million active discovery curators; over 25 billion stumbles delivered",
    peak_users: "40 Million",
    country: "Canada / United States",
    parent_company: "Garrett Camp / Expa",
    confidence_score: 100,
    candle_count: 5310,
    is_verified: true,
    verified_at: "2018-06-30T00:00:00Z",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    related_slugs: ["delicious", "digg-v4", "geocities"],
    last_known_state: {
      website: {
        status_code: 301,
        state_desc: "Redirects permanently to Mix.com.",
        final_url: "https://mix.com"
      },
      app: {
        store_status: "Defunct",
        state_desc: "Mobile apps discontinued."
      },
      api: {
        endpoint_status: "410 Gone",
        state_desc: "Discovery routing engine dismantled."
      },
      community: {
        platform: "Reddit / Mix",
        state_desc: "Community lamented loss of random serendipity."
      },
      domain: {
        ownership: "Expa / Garrett Camp",
        state_desc: "Redirects to Mix."
      }
    },
    final_moments: "On May 23, 2018, Garrett Camp posted on Medium: 'Goodbye, StumbleUpon. Hello, Mix.' After 16 years and over 25 billion recommendations, the iconic toolbar and website were officially retired on June 30, 2018.",
    timeline: [
      { id: "t-su1", entity_id: "grave-stumbleupon-011", year: 2001, date_str: "November 2001", title: "Founded in Calgary", description: "Created while Garrett Camp was a graduate student.", event_type: "FOUNDED", order_index: 1 },
      { id: "t-su2", entity_id: "grave-stumbleupon-011", year: 2007, date_str: "May 2007", title: "Acquired by eBay", description: "eBay buys StumbleUpon for $75 million.", event_type: "ACQUISITION", order_index: 2 },
      { id: "t-su3", entity_id: "grave-stumbleupon-011", year: 2009, date_str: "April 2009", title: "Bought Back", description: "Garrett Camp and investors buy StumbleUpon back from eBay as an independent startup.", event_type: "MILESTONE", order_index: 3 },
      { id: "t-su4", entity_id: "grave-stumbleupon-011", year: 2018, date_str: "June 30, 2018", title: "Final Stumble", description: "StumbleUpon closes permanently; accounts transitioned to Mix.com.", event_type: "DISCONTINUED", order_index: 4 }
    ],
    evidence: [
      { id: "e-su1", entity_id: "grave-stumbleupon-011", source_name: "Garrett Camp Official Medium Post", source_type: "Official Announcement", url: "https://medium.com/@gc/goodbye-stumbleupon-hello-mix-a8b273760ba", timestamp: "2018-05-23", evidence_type: "OFFICIAL_ANNOUNCEMENT", reliability: "VERY_HIGH", weight: 40, extracted_claim: "Co-founder Garrett Camp confirms full shutdown of StumbleUpon in June 2018.", is_verified: true },
      { id: "e-su2", entity_id: "grave-stumbleupon-011", source_name: "TechCrunch", source_type: "Reputable News", url: "https://techcrunch.com/2018/05/24/goodbye-stumbleupon-hello-mix/", timestamp: "2018-05-24", evidence_type: "REPUTABLE_REPORT", reliability: "VERY_HIGH", weight: 30, extracted_claim: "TechCrunch covers retirement of StumbleUpon after 16 years.", is_verified: true }
    ],
    successors: [
      { id: "s-su1", entity_id: "grave-stumbleupon-011", name: "Mix.com", relationship_type: "Direct Successor", description: "Official replacement platform built by the original founders.", url: "https://mix.com" }
    ],
    archives: [
      { id: "arc-su1", entity_id: "grave-stumbleupon-011", year: 2008, date_captured: "August 1, 2008", wayback_url: "https://web.archive.org/web/20080801000000*/stumbleupon.com", title: "StumbleUpon Toolbar Web Interface" }
    ],
    epitaphs: [
      { id: "ep-su1", entity_id: "grave-stumbleupon-011", author_name: "WandererWeb", content: "You showed me flash games, science articles, obscure poetry, and surreal art at 3am. The modern web has lost that magic.", years_used: "2006-2015", candle_lit: true, status: "APPROVED", created_at: "2024-03-02T15:40:00Z" }
    ]
  },
  {
    id: "grave-flappy-bird-012",
    slug: "flappy-bird",
    name: "Flappy Bird",
    tagline: "The viral mobile fever dream pulled by its own creator.",
    description: "Flappy Bird was a mobile game developed by Vietnamese video game artist and programmer Dong Nguyen under his game development studio .GEARS. Released in May 2013, it experienced a sudden viral surge in early 2014, making an estimated $50,000 a day in in-game ads. Overwhelmed by media scrutiny, death threats, and guilt over the game's addictiveness, Nguyen abruptly pulled the game from app stores at the absolute peak of its fame.",
    category: "Gaming",
    status: "ABANDONED",
    status_reason: "Voluntarily removed from the App Store and Google Play on February 9, 2014 by its creator.",
    founded_year: 2013,
    death_date: "February 9, 2014",
    death_year: 2014,
    lifespan: "2013 — 2014",
    cause_of_death_summary: "Creator Dong Nguyen felt overwhelming guilt that the game was ruining lives through extreme addiction, coupled with relentless paparazzi stalking and harassment.",
    cause_category: "Strategic Pivot",
    logo_url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=200&auto=format&fit=crop&q=80",
    hero_image_url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&auto=format&fit=crop&q=80",
    primary_domain: "dotgears.com",
    popularity_peak: "50 million downloads; #1 free game in over 100 countries",
    peak_users: "50 Million",
    country: "Vietnam",
    parent_company: ".GEARS Studios",
    confidence_score: 98,
    candle_count: 4890,
    is_verified: true,
    verified_at: "2014-02-09T00:00:00Z",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    related_slugs: ["vine", "heardle"],
    last_known_state: {
      website: {
        status_code: 200,
        state_desc: "Developer studio portfolio remains static.",
        final_url: "https://dotgears.com"
      },
      app: {
        store_status: "Delisted forever",
        state_desc: "iPhones with original Flappy Bird pre-installed famously sold for $10,000 on eBay."
      },
      api: {
        endpoint_status: "None",
        state_desc: "Standalone local game; leaderboards defunct."
      },
      community: {
        platform: "History",
        state_desc: "Spawned thousands of clones and web recreations."
      },
      domain: {
        ownership: "Nguyen Ha Dong",
        state_desc: "Active studio domain."
      }
    },
    final_moments: "On February 8, 2014, Dong Nguyen tweeted: 'I am sorry 'Flappy Bird' users, 22 hours from now, I will take 'Flappy Bird' down. I cannot take this anymore.' Exactly 22 hours later, the app was removed from the iOS App Store and Google Play.",
    timeline: [
      { id: "t-fb1", entity_id: "grave-flappy-bird-012", year: 2013, date_str: "May 24, 2013", title: "Quiet App Store Debut", description: "Nguyen releases Flappy Bird alongside other arcade mini-games.", event_type: "LAUNCH", order_index: 1 },
      { id: "t-fb2", entity_id: "grave-flappy-bird-012", year: 2014, date_str: "January 2014", title: "Viral Explosion", description: "PewDiePie streams Flappy Bird; game explodes to the #1 spot worldwide.", event_type: "MILESTONE", order_index: 2 },
      { id: "t-fb3", entity_id: "grave-flappy-bird-012", year: 2014, date_str: "February 8, 2014", title: "The 22-Hour Tweet", description: "Dong Nguyen announces he will take down the game due to immense mental stress.", event_type: "SHUTDOWN_ANNOUNCED", order_index: 3 },
      { id: "t-fb4", entity_id: "grave-flappy-bird-012", year: 2014, date_str: "February 9, 2014", title: "Removed from Stores", description: "The app disappears from stores forever.", event_type: "DISCONTINUED", order_index: 4 }
    ],
    evidence: [
      { id: "e-fb1", entity_id: "grave-flappy-bird-012", source_name: "Dong Nguyen Official Tweet", source_type: "Official Social Post", url: "https://twitter.com/dongnguyen/status/432227971173003264", timestamp: "2014-02-08", evidence_type: "OFFICIAL_SOCIAL", reliability: "VERY_HIGH", weight: 40, extracted_claim: "Dong Nguyen posted: 'I am sorry 'Flappy Bird' users, 22 hours from now, I will take 'Flappy Bird' down.'", is_verified: true },
      { id: "e-fb2", entity_id: "grave-flappy-bird-012", source_name: "Rolling Stone Exclusive Interview", source_type: "Reputable News", url: "https://www.rollingstone.com/culture/culture-news/the-flight-of-the-birdman-flappy-bird-creator-dong-nguyen-45196/", timestamp: "2014-03-11", evidence_type: "REPUTABLE_REPORT", reliability: "VERY_HIGH", weight: 35, extracted_claim: "Dong Nguyen reveals the guilt, stress, and sudden wealth that led to pulling the game.", is_verified: true }
    ],
    successors: [
      { id: "s-fb1", entity_id: "grave-flappy-bird-012", name: "Crossy Road", relationship_type: "Inherited Audience", description: "Took the viral simple tap-arcade formula and turned it into an enduring mobile hit.", url: "https://crossyroad.com" }
    ],
    archives: [
      { id: "arc-fb1", entity_id: "grave-flappy-bird-012", year: 2014, date_captured: "February 1, 2014", wayback_url: "https://web.archive.org/web/20140201000000*/itunes.apple.com/us/app/flappy-bird/id642099621", title: "Apple App Store Listing at Peak" }
    ],
    epitaphs: [
      { id: "ep-fb1", entity_id: "grave-flappy-bird-012", author_name: "TapKing", content: "High score: 47. Broken phone screens: 1. Legendary exit: priceless.", years_used: "2014-2014", candle_lit: true, status: "APPROVED", created_at: "2024-01-20T17:15:00Z" }
    ]
  },
  {
    id: "grave-pebble-013",
    slug: "pebble",
    name: "Pebble",
    tagline: "The open, week-long battery smartwatch we all loved.",
    description: "Pebble was a smartwatch developed by Pebble Technology Corporation, founded by Eric Migicovsky. Funded via a record-breaking $10.2 million Kickstarter campaign in 2012, Pebble featured an always-on memory LCD e-paper display, tactile physical buttons, 7-day battery life, and an open SDK for developers. It was acquired by Fitbit in December 2016 and shut down, though its loyal community resurrected it as Rebble.",
    category: "Hardware",
    status: "CONFIRMED_DEAD",
    status_reason: "Acquired by Fitbit on December 7, 2016 for its software assets; hardware production stopped immediately and cloud servers were shut down in 2018.",
    founded_year: 2012,
    death_date: "December 7, 2016",
    death_year: 2016,
    lifespan: "2012 — 2016",
    cause_of_death_summary: "Cash-flow crisis, declining consumer hardware margins, aggressive competition from Apple Watch, and failed debt renegotiation; sold to Fitbit for just $23M.",
    cause_category: "Acquired & Discontinued",
    logo_url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&auto=format&fit=crop&q=80",
    hero_image_url: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=1200&auto=format&fit=crop&q=80",
    primary_domain: "pebble.com",
    popularity_peak: "Over 2 million smartwatches sold; #1 most-funded Kickstarter project in history at the time",
    peak_users: "2 Million",
    country: "United States",
    parent_company: "Fitbit / Google",
    confidence_score: 100,
    candle_count: 4580,
    is_verified: true,
    verified_at: "2016-12-07T00:00:00Z",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    related_slugs: ["wunderlist", "quibi"],
    last_known_state: {
      website: {
        status_code: 301,
        state_desc: "Redirects to Fitbit / Google Store.",
        final_url: "https://fitbit.com"
      },
      app: {
        store_status: "Abandoned",
        state_desc: "Official companion apps removed from modern stores."
      },
      api: {
        endpoint_status: "410 Gone",
        state_desc: "Official Pebble cloud and app store servers shut down on June 30, 2018."
      },
      community: {
        platform: "Rebble.io",
        state_desc: "Rebble community reverse engineered server infrastructure so Pebble watches remain functional in 2024."
      },
      domain: {
        ownership: "Google LLC",
        state_desc: "Redirects to Google Store."
      }
    },
    final_moments: "On December 7, 2016, Eric Migicovsky announced that Pebble would cease all operations, cancel pending Kickstarter orders for the Pebble Time 2, and sell its intellectual property to Fitbit. Pebble cloud servers were given an 18-month stay of execution before permanently shutting down on June 30, 2018.",
    timeline: [
      { id: "t-pb1", entity_id: "grave-pebble-013", year: 2012, date_str: "April 11, 2012", title: "Record Kickstarter", description: "Pebble raises $10.27 million on Kickstarter, becoming the most funded project ever.", event_type: "LAUNCH", order_index: 1 },
      { id: "t-pb2", entity_id: "grave-pebble-013", year: 2015, date_str: "March 2015", title: "Pebble Time Raises $20M", description: "Pebble smashes its own record with the Pebble Time raising over $20.3 million.", event_type: "MILESTONE", order_index: 2 },
      { id: "t-pb3", entity_id: "grave-pebble-013", year: 2016, date_str: "December 7, 2016", title: "Acquired by Fitbit", description: "Fitbit buys Pebble software assets; hardware line canceled.", event_type: "ACQUISITION", order_index: 3 },
      { id: "t-pb4", entity_id: "grave-pebble-013", year: 2018, date_str: "June 30, 2018", title: "Cloud Servers Go Dark", description: "Official cloud app store and weather services deactivated; Rebble activates.", event_type: "DISCONTINUED", order_index: 4 }
    ],
    evidence: [
      { id: "e-pb1", entity_id: "grave-pebble-013", source_name: "Official Pebble Kickstarter Post", source_type: "Official Announcement", url: "https://www.kickstarter.com/projects/getpebble/pebble-2-time-2-and-core-an-entirely-new-3g-ultra/posts/1752948", timestamp: "2016-12-07", evidence_type: "OFFICIAL_ANNOUNCEMENT", reliability: "VERY_HIGH", weight: 40, extracted_claim: "Pebble ceases all operations; Fitbit acquires specific software assets.", is_verified: true },
      { id: "e-pb2", entity_id: "grave-pebble-013", source_name: "Bloomberg", source_type: "Reputable News", url: "https://www.bloomberg.com/news/articles/2016-12-07/fitbit-buys-pebble-assets-for-less-than-40-million", timestamp: "2016-12-07", evidence_type: "REPUTABLE_REPORT", reliability: "VERY_HIGH", weight: 30, extracted_claim: "Fitbit buys Pebble assets for approximately $23 million.", is_verified: true }
    ],
    successors: [
      { id: "s-pb1", entity_id: "grave-pebble-013", name: "Rebble", relationship_type: "Direct Successor", description: "Community-driven revival operating alternative web services and firmware patches.", url: "https://rebble.io" }
    ],
    archives: [
      { id: "arc-pb1", entity_id: "grave-pebble-013", year: 2014, date_captured: "March 15, 2014", wayback_url: "https://web.archive.org/web/20140315000000*/getpebble.com", title: "Pebble Smartwatch Homepage" }
    ],
    epitaphs: [
      { id: "ep-pb1", entity_id: "grave-pebble-013", author_name: "WristHacker", content: "7 days of battery life in 2013. Apple still can't match it in 2024. Long live Rebble.", years_used: "2012-2018", candle_lit: true, status: "APPROVED", created_at: "2024-01-30T21:20:00Z" }
    ]
  },
  {
    id: "grave-omegle-014",
    slug: "omegle",
    name: "Omegle",
    tagline: "Talk to strangers.",
    description: "Omegle was a free online chat website that paired random users in one-on-one sessions where they chatted anonymously using the names 'You' and 'Stranger'. Founded by 18-year-old Leif K-Brooks in 2009, Omegle pioneered the video chat roulette phenomenon before succumbing to catastrophic moderation challenges, relentless bots, legal liabilities, and operating costs in late 2023.",
    category: "Communities",
    status: "CONFIRMED_DEAD",
    status_reason: "Permanently closed down on November 8, 2023 by founder Leif K-Brooks due to insurmountable moderation and legal costs.",
    founded_year: 2009,
    death_date: "November 8, 2023",
    death_year: 2023,
    lifespan: "2009 — 2023",
    cause_of_death_summary: "Operating costs, legal battles regarding child safety and illicit use, and psychological toll of fighting bad actors without external funding.",
    cause_category: "Legal & Regulatory",
    logo_url: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=200&auto=format&fit=crop&q=80",
    hero_image_url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop&q=80",
    primary_domain: "omegle.com",
    popularity_peak: "Over 70 million monthly visitors during peak pandemic lock-downs",
    peak_users: "70 Million",
    country: "United States",
    parent_company: "Leif K-Brooks",
    confidence_score: 100,
    candle_count: 5120,
    is_verified: true,
    verified_at: "2023-11-08T00:00:00Z",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    related_slugs: ["secret", "yik-yak"],
    last_known_state: {
      website: {
        status_code: 200,
        state_desc: "Shows a tombstone logo with Leif K-Brooks' poignant 9-page farewell essay.",
        final_url: "https://omegle.com"
      },
      app: {
        store_status: "Defunct",
        state_desc: "No official mobile apps active."
      },
      api: {
        endpoint_status: "410 Gone",
        state_desc: "WebRTC and text session matching daemons disabled."
      },
      community: {
        platform: "Internet History",
        state_desc: "Content creators who built YouTube careers on Omegle made tribute videos."
      },
      domain: {
        ownership: "Leif K-Brooks",
        state_desc: "Retained for the farewell letter."
      }
    },
    final_moments: "On November 8, 2023, without advance warning, Omegle replaced its chat portal with a graphic of an Omegle tombstone and a long letter titled 'Omegle: 2009–2023'. Brooks wrote: 'There can be no honest accounting of Omegle without acknowledging that some people misused it... Operating Omegle is no longer sustainable, financially nor psychologically.'",
    timeline: [
      { id: "t-om1", entity_id: "grave-omegle-014", year: 2009, date_str: "March 25, 2009", title: "Launched by 18-Year Old", description: "Leif K-Brooks launches text-only random chat service from his bedroom in Vermont.", event_type: "LAUNCH", order_index: 1 },
      { id: "t-om2", entity_id: "grave-omegle-014", year: 2010, date_str: "March 2010", title: "Video Mode Added", description: "Video pairing introduced, propelling Omegle to global viral fame.", event_type: "MILESTONE", order_index: 2 },
      { id: "t-om3", entity_id: "grave-omegle-014", year: 2020, date_str: "2020", title: "Pandemic Renaissance", description: "TikTok influencers and lockdown boredom drive record 70M monthly visitors.", event_type: "MILESTONE", order_index: 3 },
      { id: "t-om4", entity_id: "grave-omegle-014", year: 2023, date_str: "November 8, 2023", title: "Sudden Closure", description: "Service terminated with tombstone essay.", event_type: "DISCONTINUED", order_index: 4 }
    ],
    evidence: [
      { id: "e-om1", entity_id: "grave-omegle-014", source_name: "Omegle Official Farewell Letter", source_type: "Official Announcement", url: "https://www.omegle.com", timestamp: "2023-11-08", evidence_type: "OFFICIAL_ANNOUNCEMENT", reliability: "VERY_HIGH", weight: 45, extracted_claim: "Founder Leif K-Brooks publishes letter ending Omegle operations permanently.", is_verified: true },
      { id: "e-om2", entity_id: "grave-omegle-014", source_name: "BBC News", source_type: "Reputable News", url: "https://www.bbc.com/news/technology-67364634", timestamp: "2023-11-09", evidence_type: "REPUTABLE_REPORT", reliability: "VERY_HIGH", weight: 30, extracted_claim: "Omegle shuts down after 14 years, citing online abuse fight.", is_verified: true }
    ],
    successors: [
      { id: "s-om1", entity_id: "grave-omegle-014", name: "OmeTV", relationship_type: "Inherited Audience", description: "Mobile video matching app that absorbed displaced creators.", url: "https://ome.tv" }
    ],
    archives: [
      { id: "arc-om1", entity_id: "grave-omegle-014", year: 2011, date_captured: "July 12, 2011", wayback_url: "https://web.archive.org/web/20110712000000*/omegle.com", title: "Omegle Text and Video Matcher" }
    ],
    epitaphs: [
      { id: "ep-om1", entity_id: "grave-omegle-014", author_name: "Stranger404", content: "You: Hello\nStranger: Asl?\nYou: 21 m us\nStranger has disconnected.\nA simpler, stranger internet died with you.", years_used: "2010-2022", candle_lit: true, status: "APPROVED", created_at: "2024-01-11T12:00:00Z" }
    ]
  },
  {
    id: "grave-google-plus-015",
    slug: "google-plus",
    name: "Google+",
    tagline: "The multi-billion dollar social graph that nobody asked for.",
    description: "Google+ (Google Plus) was a social network owned and operated by Google, launched in June 2011 under CEO Larry Page and Vic Gundotra. Built as an existential defensive response to Facebook, Google spent billions forcing Google+ integration into YouTube comments, Android sign-ins, and Google Reader. Despite claiming 500 million accounts, active user engagement was virtually nonexistent (average session time was reportedly 3 seconds). It was shut down for consumers in April 2019 following API security breaches.",
    category: "Social",
    status: "CONFIRMED_DEAD",
    status_reason: "Consumer service terminated on April 2, 2019 due to low consumer adoption and discovery of two major security vulnerabilities.",
    founded_year: 2011,
    death_date: "April 2, 2019",
    death_year: 2019,
    lifespan: "2011 — 2019",
    cause_of_death_summary: "Forced integrations caused user outrage; ghost-town user engagement; two severe API vulnerabilities exposed 52 million user profile data points.",
    cause_category: "Security & Privacy",
    logo_url: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=200&auto=format&fit=crop&q=80",
    hero_image_url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80",
    primary_domain: "plus.google.com",
    popularity_peak: "540 million registered 'users' (via compulsory YouTube and Android accounts)",
    peak_users: "540 Million",
    country: "United States",
    parent_company: "Google Inc.",
    confidence_score: 100,
    candle_count: 3120,
    is_verified: true,
    verified_at: "2019-04-02T00:00:00Z",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    related_slugs: ["google-reader", "orkut", "google-wave"],
    last_known_state: {
      website: {
        status_code: 301,
        state_desc: "Redirects to Google Workspace.",
        final_url: "https://plus.google.com"
      },
      app: {
        store_status: "Defunct",
        state_desc: "Pre-installed apps replaced by Google Currents (which also shut down in 2023)."
      },
      api: {
        endpoint_status: "404 Not Found",
        state_desc: "All People and Circles APIs shut down March 2019."
      },
      community: {
        platform: "Archive Team",
        state_desc: "Archive Team scraped public Google+ posts before the April 2 deadline."
      },
      domain: {
        ownership: "Google LLC",
        state_desc: "Path inactive."
      }
    },
    final_moments: "In October 2018, Google revealed a software glitch had exposed personal data of hundreds of thousands of users to third-party developers, prompting a 10-month shutdown timeline. Two months later, a second bug affecting 52.5 million users accelerated the consumer shutdown date to April 2, 2019, when all accounts and pages were deleted.",
    timeline: [
      { id: "t-gp1", entity_id: "grave-google-plus-015", year: 2011, date_str: "June 28, 2011", title: "Circles & Hangouts Launch", description: "Google debuts Google+ with invite-only hype and Hangouts video chat.", event_type: "LAUNCH", order_index: 1 },
      { id: "t-gp2", entity_id: "grave-google-plus-015", year: 2013, date_str: "November 2013", title: "Forced YouTube Comments", description: "Google forces YouTube users to link Google+ accounts to comment, triggering massive revolt and petition.", event_type: "DECLINE", order_index: 2 },
      { id: "t-gp3", entity_id: "grave-google-plus-015", year: 2018, date_str: "October 8, 2018", title: "Bug Revealed & Shutdown Set", description: "Google discloses API privacy leak and announces 2019 consumer sunset.", event_type: "SHUTDOWN_ANNOUNCED", order_index: 3 },
      { id: "t-gp4", entity_id: "grave-google-plus-015", year: 2019, date_str: "April 2, 2019", title: "Deletion of Consumer Accounts", description: "All consumer Google+ accounts wiped.", event_type: "DISCONTINUED", order_index: 4 }
    ],
    evidence: [
      { id: "e-gp1", entity_id: "grave-google-plus-015", source_name: "Google Keyword Blog", source_type: "Official Announcement", url: "https://www.blog.google/technology/safety-security/project-strobe/", timestamp: "2018-10-08", evidence_type: "OFFICIAL_ANNOUNCEMENT", reliability: "VERY_HIGH", weight: 45, extracted_claim: "Google confirms shutdown of consumer Google+ due to low usage and API bug.", is_verified: true },
      { id: "e-gp2", entity_id: "grave-google-plus-015", source_name: "Wall Street Journal", source_type: "Investigative Report", url: "https://www.wsj.com/articles/google-exposed-user-data-feared-repercussions-of-disclosing-to-public-1539017194", timestamp: "2018-10-08", evidence_type: "REPUTABLE_REPORT", reliability: "VERY_HIGH", weight: 35, extracted_claim: "Google exposed user data and delayed disclosure, expediting shutdown.", is_verified: true }
    ],
    successors: [
      { id: "s-gp1", entity_id: "grave-google-plus-015", name: "Google Meet", relationship_type: "Direct Successor", description: "Google Hangouts, born within Google+, survived and became Google Meet.", url: "https://meet.google.com" }
    ],
    archives: [
      { id: "arc-gp1", entity_id: "grave-google-plus-015", year: 2012, date_captured: "July 1, 2012", wayback_url: "https://web.archive.org/web/20120701000000*/plus.google.com", title: "Google+ Circles Feed" }
    ],
    epitaphs: [
      { id: "ep-gp1", entity_id: "grave-google-plus-015", author_name: "CircleMember", content: "You forced me to make an account just to leave a comment on a guitar tutorial video. Rest in pieces.", years_used: "2011-2019", candle_lit: true, status: "APPROVED", created_at: "2024-02-09T18:00:00Z" }
    ]
  },
  {
    id: "grave-quibi-016",
    slug: "quibi",
    name: "Quibi",
    tagline: "Quick bites. Big stories. Billions wasted in six months.",
    description: "Quibi (short for 'Quick Bites') was an American short-form streaming platform founded in August 2018 in Los Angeles by Jeffrey Katzenberg and led by Meg Whitman. Aimed at younger viewers on the go, Quibi raised $1.75 billion from major Hollywood studios and tech giants, producing premium 10-minute episodes starring stars like Christoph Waltz and Liam Hemsworth. Launching right as COVID-19 lockdowns eliminated commuters, Quibi lasted just six months before collapsing.",
    category: "Streaming",
    status: "CONFIRMED_DEAD",
    status_reason: "Ceased operations on December 1, 2020; content catalog sold to Roku for less than $100M.",
    founded_year: 2018,
    death_date: "December 1, 2020",
    death_year: 2020,
    lifespan: "2020 — 2020",
    cause_of_death_summary: "Arrogant assumption that consumers would pay $8/month for 10-minute mobile videos when TikTok and YouTube were free; forbidden screenshotting; catastrophic launch timing during COVID-19 lockdowns.",
    cause_category: "Bankruptcy",
    logo_url: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=200&auto=format&fit=crop&q=80",
    hero_image_url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&auto=format&fit=crop&q=80",
    primary_domain: "quibi.com",
    popularity_peak: "Raised $1.75B in venture capital; peaked at 500,000 active subscribers",
    peak_users: "500,000 Subscribers",
    country: "United States",
    parent_company: "Quibi Holdings LLC",
    confidence_score: 100,
    candle_count: 2190,
    is_verified: true,
    verified_at: "2020-12-01T00:00:00Z",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    related_slugs: ["vine", "rdio"],
    last_known_state: {
      website: {
        status_code: 301,
        state_desc: "Redirects to The Roku Channel.",
        final_url: "https://therokuchannel.roku.com"
      },
      app: {
        store_status: "Delisted",
        state_desc: "Mobile apps disabled and removed."
      },
      api: {
        endpoint_status: "410 Gone",
        state_desc: "Video streaming clusters shut down."
      },
      community: {
        platform: "Historic Case Study",
        state_desc: "Regarded as one of the fastest and most expensive venture failures in media history."
      },
      domain: {
        ownership: "Roku, Inc.",
        state_desc: "Redirects to Roku originals."
      }
    },
    final_moments: "On October 21, 2020, just six months after its April 6 launch, Katzenberg and Whitman published an open letter to employees and investors announcing Quibi would wind down and return remaining cash to shareholders. On December 1, 2020, streaming ceased completely.",
    timeline: [
      { id: "t-qb1", entity_id: "grave-quibi-016", year: 2018, date_str: "August 2018", title: "Founded with $1B Initial Fund", description: "Katzenberg recruits Meg Whitman and raises $1 billion before a single line of code is written.", event_type: "FOUNDED", order_index: 1 },
      { id: "t-qb2", entity_id: "grave-quibi-016", year: 2020, date_str: "April 6, 2020", title: "App Store Debut in Lockdowns", description: "Launches globally during global quarantine lockdowns when nobody is commuting.", event_type: "LAUNCH", order_index: 2 },
      { id: "t-qb3", entity_id: "grave-quibi-016", year: 2020, date_str: "October 21, 2020", title: "Surrender Announced", description: "Founders announce shutdown and return of remaining capital.", event_type: "SHUTDOWN_ANNOUNCED", order_index: 3 },
      { id: "t-qb4", entity_id: "grave-quibi-016", year: 2020, date_str: "December 1, 2020", title: "Broadcast Extinguished", description: "Quibi streams go silent forever.", event_type: "DISCONTINUED", order_index: 4 }
    ],
    evidence: [
      { id: "e-qb1", entity_id: "grave-quibi-016", source_name: "Katzenberg & Whitman Open Letter", source_type: "Official Announcement", url: "https://medium.com/@quibi/an-open-letter-to-the-employees-investors-and-partners-who-have-supported-quibi-from-jeffrey-and-b0fa138971f4", timestamp: "2020-10-21", evidence_type: "OFFICIAL_ANNOUNCEMENT", reliability: "VERY_HIGH", weight: 45, extracted_claim: "Quibi leadership officially announced wind down and liquidation of assets.", is_verified: true },
      { id: "e-qb2", entity_id: "grave-quibi-016", source_name: "The Hollywood Reporter", source_type: "Reputable News", url: "https://www.hollywoodreporter.com/business/digital-business/quibi-to-shut-down-4075191/", timestamp: "2020-10-21", evidence_type: "REPUTABLE_REPORT", reliability: "VERY_HIGH", weight: 30, extracted_claim: "Hollywood Reporter details Quibi's sudden surrender and return of funds.", is_verified: true }
    ],
    successors: [
      { id: "s-qb1", entity_id: "grave-quibi-016", name: "Roku Originals", relationship_type: "Replaced By", description: "Roku acquired the library of 75+ Quibi shows to stream for free on The Roku Channel.", url: "https://therokuchannel.roku.com" }
    ],
    archives: [
      { id: "arc-qb1", entity_id: "grave-quibi-016", year: 2020, date_captured: "April 10, 2020", wayback_url: "https://web.archive.org/web/20200410000000*/quibi.com", title: "Quibi Launch Promotional Portal" }
    ],
    epitaphs: [
      { id: "ep-qb1", entity_id: "grave-quibi-016", author_name: "VentureAutopsy", content: "Burning $1.75 billion in 6 months takes true visionary talent. You were the Fyre Festival of streaming.", years_used: "2020-2020", candle_lit: true, status: "APPROVED", created_at: "2024-01-29T14:10:00Z" }
    ]
  },
  {
    id: "grave-netscape-017",
    slug: "netscape-navigator",
    name: "Netscape Navigator",
    tagline: "The browser that sparked the commercial World Wide Web.",
    description: "Netscape Navigator was the flagship web browser developed by Netscape Communications Corporation, founded in 1994 by Marc Andreessen and Jim Clark. In the mid-1990s, Netscape held over 80% market share and defined web standards, introducing JavaScript, SSL, and cookies. It lost the infamous First Browser War when Microsoft bundled Internet Explorer directly into Windows, resulting in landmark antitrust trials and Netscape's eventual dissolution.",
    category: "Web technology",
    status: "CONFIRMED_DEAD",
    status_reason: "AOL officially terminated all support and development on March 1, 2008, recommending users switch to Firefox.",
    founded_year: 1994,
    death_date: "March 1, 2008",
    death_year: 2008,
    lifespan: "1994 — 2008",
    cause_of_death_summary: "Microsoft abused its Windows OS monopoly by bundling Internet Explorer for free; Netscape open-sourced its code as Mozilla, while the commercial brand was absorbed and retired by AOL.",
    cause_category: "Market Competition",
    logo_url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=200&auto=format&fit=crop&q=80",
    hero_image_url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&auto=format&fit=crop&q=80",
    primary_domain: "netscape.com",
    popularity_peak: "Over 86% worldwide web browser market share in 1996",
    peak_users: "90% of Early Web Users",
    country: "United States",
    parent_company: "AOL Inc.",
    confidence_score: 100,
    candle_count: 8490,
    is_verified: true,
    verified_at: "2008-03-01T00:00:00Z",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    related_slugs: ["geocities", "altavista"],
    last_known_state: {
      website: {
        status_code: 200,
        state_desc: "Netscape.com is a generic news aggregation clickbait portal owned by Apollo Global / Yahoo.",
        final_url: "https://netscape.com"
      },
      app: {
        store_status: "Defunct",
        state_desc: "Last standalone release was Netscape Navigator 9 in 2008."
      },
      api: {
        endpoint_status: "None",
        state_desc: "No modern web services."
      },
      community: {
        platform: "Mozilla Foundation",
        state_desc: "Netscape's open-source release lives on as the engine of Mozilla Firefox."
      },
      domain: {
        ownership: "Yahoo! Inc.",
        state_desc: "News portal."
      }
    },
    final_moments: "On December 28, 2007, AOL announced it would discontinue all development of Netscape Navigator browsers on February 1, 2008, later extending support to March 1, 2008. AOL urged users to migrate to Mozilla Firefox, the direct descendant of Netscape's source code.",
    timeline: [
      { id: "t-nn1", entity_id: "grave-netscape-017", year: 1994, date_str: "December 15, 1994", title: "Navigator 1.0 Releases", description: "Marc Andreessen and team release Netscape 1.0; web traffic explodes.", event_type: "LAUNCH", order_index: 1 },
      { id: "t-nn2", entity_id: "grave-netscape-017", year: 1995, date_str: "August 9, 1995", title: "Historic IPO", description: "Netscape goes public; stock doubles on day one, triggering the dot-com boom.", event_type: "MILESTONE", order_index: 2 },
      { id: "t-nn3", entity_id: "grave-netscape-017", year: 1998, date_str: "January 22, 1998", title: "Birth of Mozilla", description: "Netscape announces its source code will be free and open source, founding Mozilla.", event_type: "MILESTONE", order_index: 3 },
      { id: "t-nn4", entity_id: "grave-netscape-017", year: 1999, date_str: "March 17, 1999", title: "AOL Acquisition", description: "AOL buys Netscape for $4.2 billion.", event_type: "ACQUISITION", order_index: 4 },
      { id: "t-nn5", entity_id: "grave-netscape-017", year: 2008, date_str: "March 1, 2008", title: "Official Sunset", description: "AOL ceases all security patches and directs all users to Firefox.", event_type: "DISCONTINUED", order_index: 5 }
    ],
    evidence: [
      { id: "e-nn1", entity_id: "grave-netscape-017", source_name: "Netscape Official Blog Sunset Notice", source_type: "Official Announcement", url: "https://web.archive.org/web/20080101000000*/blog.netscape.com/2007/12/28/end-of-support-for-netscape-web-browsers/", timestamp: "2007-12-28", evidence_type: "OFFICIAL_ANNOUNCEMENT", reliability: "VERY_HIGH", weight: 45, extracted_claim: "AOL officially announces end of life for all Netscape web browsers.", is_verified: true },
      { id: "e-nn2", entity_id: "grave-netscape-017", source_name: "CNET", source_type: "Reputable News", url: "https://www.cnet.com/tech/services-and-software/aol-pulls-plug-on-netscape-browser/", timestamp: "2007-12-28", evidence_type: "REPUTABLE_REPORT", reliability: "VERY_HIGH", weight: 30, extracted_claim: "AOL pulls the plug on legendary Netscape browser.", is_verified: true }
    ],
    successors: [
      { id: "s-nn1", entity_id: "grave-netscape-017", name: "Mozilla Firefox", relationship_type: "Direct Successor", description: "Firefox was born directly from the Netscape open-source codebase in 1998.", url: "https://firefox.com" }
    ],
    archives: [
      { id: "arc-nn1", entity_id: "grave-netscape-017", year: 1996, date_captured: "October 20, 1996", wayback_url: "https://web.archive.org/web/19961020000000*/netscape.com", title: "Netscape Communications Homepage" }
    ],
    epitaphs: [
      { id: "ep-nn1", entity_id: "grave-netscape-017", author_name: "WebPioneer", content: "You gave us JavaScript, SSL, and showed the world that software could change human communication forever.", years_used: "1994-2002", candle_lit: true, status: "APPROVED", created_at: "2024-01-02T13:45:00Z" }
    ]
  },
  {
    id: "grave-grooveshark-018",
    slug: "grooveshark",
    name: "Grooveshark",
    tagline: "The freewheeling browser jukebox sued into oblivion.",
    description: "Grooveshark was an internationally available web-based music streaming service based in Gainesville, Florida, founded in 2006 by University of Florida students Sam Tarantino, Josh Greenberg, and Andrés Barreto. Users could upload MP3 files to a shared library and stream songs instantly on demand without a paid subscription. Inevitably, major record labels sued for statutory copyright damages of $736 million, resulting in immediate liquidation in 2015.",
    category: "Streaming",
    status: "CONFIRMED_DEAD",
    status_reason: "Surrendered unconditionally on April 30, 2015 under a legal settlement with Universal, Sony, and Warner Music.",
    founded_year: 2006,
    death_date: "April 30, 2015",
    death_year: 2015,
    lifespan: "2006 — 2015",
    cause_of_death_summary: "Federal court found founders personally liable for willful copyright infringement (direct employee uploads); faced $736M in damages; settled by destroying all servers and transferring IP to labels.",
    cause_category: "Legal & Regulatory",
    logo_url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=200&auto=format&fit=crop&q=80",
    hero_image_url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&auto=format&fit=crop&q=80",
    primary_domain: "grooveshark.com",
    popularity_peak: "35 million monthly active users streaming over 1 billion tracks per month",
    peak_users: "35 Million",
    country: "United States",
    parent_company: "Escape Media Group",
    confidence_score: 100,
    candle_count: 4890,
    is_verified: true,
    verified_at: "2015-04-30T00:00:00Z",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    related_slugs: ["napster", "rdio"],
    last_known_state: {
      website: {
        status_code: 200,
        state_desc: "Displays the famous court-mandated apology letter admitting wrong-doing.",
        final_url: "https://grooveshark.com"
      },
      app: {
        store_status: "Defunct",
        state_desc: "Banned from App Store and Play Store years prior to closure."
      },
      api: {
        endpoint_status: "410 Gone",
        state_desc: "All music storage wiped pursuant to court order."
      },
      community: {
        platform: "Historic",
        state_desc: "Co-founder Josh Greenberg tragically passed away months after the settlement."
      },
      domain: {
        ownership: "RIAA / Record Labels",
        state_desc: "Turned over under settlement."
      }
    },
    final_moments: "On the evening of April 30, 2015, Grooveshark abruptly wiped its entire music library. Visitors to grooveshark.com were greeted with a stark black-and-white message: 'Dear music fans, today we are shutting down Grooveshark... We failed to secure licenses from rights holders for a vast amount of the music on the service. That was wrong. We apologize.'",
    timeline: [
      { id: "t-gs1", entity_id: "grave-grooveshark-018", year: 2006, date_str: "March 2006", title: "Founded in Gainesville", description: "Created by UF students building a peer-to-peer music network.", event_type: "FOUNDED", order_index: 1 },
      { id: "t-gs2", entity_id: "grave-grooveshark-018", year: 2010, date_str: "2010", title: "Browser Streaming Jukebox", description: "HTML5 player allows instant in-browser playback of any song without sign-up.", event_type: "MILESTONE", order_index: 2 },
      { id: "t-gs3", entity_id: "grave-grooveshark-018", year: 2014, date_str: "September 2014", title: "Guilty of Willful Infringement", description: "Federal Judge Thomas Griesa finds Escape Media liable for willful copyright infringement.", event_type: "DECLINE", order_index: 3 },
      { id: "t-gs4", entity_id: "grave-grooveshark-018", year: 2015, date_str: "April 30, 2015", title: "Immediate Closure & Apology", description: "Grooveshark signs settlement, surrenders domains, and shuts down instantly.", event_type: "DISCONTINUED", order_index: 4 }
    ],
    evidence: [
      { id: "e-gs1", entity_id: "grave-grooveshark-018", source_name: "Grooveshark Official Apology Letter", source_type: "Court Mandated Settlement Notice", url: "https://grooveshark.com", timestamp: "2015-04-30", evidence_type: "OFFICIAL_ANNOUNCEMENT", reliability: "VERY_HIGH", weight: 45, extracted_claim: "Grooveshark published official letter apologizing to record labels and ending operations.", is_verified: true },
      { id: "e-gs2", entity_id: "grave-grooveshark-018", source_name: "Billboard", source_type: "Reputable News", url: "https://www.billboard.com/pro/grooveshark-shut-down-settlement-labels/", timestamp: "2015-04-30", evidence_type: "REPUTABLE_REPORT", reliability: "VERY_HIGH", weight: 30, extracted_claim: "Grooveshark shuts down to settle copyright infringement lawsuit.", is_verified: true }
    ],
    successors: [
      { id: "s-gs1", entity_id: "grave-grooveshark-018", name: "Spotify Free Web", relationship_type: "Replaced By", description: "Spotify's browser player offered legitimate free streaming funded by audio ads.", url: "https://spotify.com" }
    ],
    archives: [
      { id: "arc-gs1", entity_id: "grave-grooveshark-018", year: 2011, date_captured: "April 1, 2011", wayback_url: "https://web.archive.org/web/20110401000000*/grooveshark.com", title: "Grooveshark Browser Player" }
    ],
    epitaphs: [
      { id: "ep-gs1", entity_id: "grave-grooveshark-018", author_name: "CollegeDJ", content: "You ran every college dorm party from 2008 to 2012 without a single commercial. RIP Josh Greenberg.", years_used: "2008-2015", candle_lit: true, status: "APPROVED", created_at: "2024-02-14T02:00:00Z" }
    ]
  },
  {
    id: "grave-yikyak-019",
    slug: "yik-yak",
    name: "Yik Yak (Original)",
    tagline: "The anonymous five-mile campus bulletin board.",
    description: "Yik Yak was an anonymous location-based mobile bulletin board app founded in 2013 by Tyler Droll and Brooks Buffington. It allowed users within a 5-mile radius to post and upvote anonymous short messages called 'yaks'. Spreading through college campuses across the United States, it reached a $400 million valuation in 2014 before getting banned by universities over cyberbullying and bomb threats, shedding 90% of its users, and shutting down in 2017.",
    category: "Social",
    status: "ZOMBIE",
    status_reason: "Original company liquidated in April 2017 with tech sold to Square; brand relaunched in 2021 as a different iOS-only app requiring phone verification.",
    founded_year: 2013,
    death_date: "May 5, 2017",
    death_year: 2017,
    lifespan: "2013 — 2017 (Original)",
    cause_of_death_summary: "Severe campus harassment scandals, school geofence bans, removal of anonymity (which destroyed user engagement), and failure to generate revenue; sold engineering team to Square for $1M.",
    cause_category: "Community Collapse",
    logo_url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&auto=format&fit=crop&q=80",
    hero_image_url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&auto=format&fit=crop&q=80",
    primary_domain: "yikyak.com",
    popularity_peak: "Used on over 2,000 college campuses; $400M valuation in 2014",
    peak_users: "10 Million",
    country: "United States",
    parent_company: "Yik Yak, Inc.",
    confidence_score: 95,
    candle_count: 2950,
    is_verified: true,
    verified_at: "2017-05-05T00:00:00Z",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    related_slugs: ["secret", "vine"],
    last_known_state: {
      website: {
        status_code: 200,
        state_desc: "New owners operate a revamped mobile app requiring phone verification.",
        final_url: "https://yikyak.com"
      },
      app: {
        store_status: "Relaunched by new owners",
        state_desc: "The original anonymous, unverified geolocation network was permanently extinguished in 2017."
      },
      api: {
        endpoint_status: "410 Gone",
        state_desc: "Original AWS clusters decommissioned."
      },
      community: {
        platform: "Historic",
        state_desc: "University culture moved to Sidechat and Fizz."
      },
      domain: {
        ownership: "Sidechat / Yik Yak Acquisition Corp",
        state_desc: "Relaunch landing."
      }
    },
    final_moments: "On April 28, 2017, Yik Yak co-founders published a farewell blog post confirming the app would be shut down in the coming week. Jack Dorsey's Square paid just $1 million to acqui-hire its remaining engineering team.",
    timeline: [
      { id: "t-yy1", entity_id: "grave-yikyak-019", year: 2013, date_str: "November 2013", title: "Founded at Furman University", description: "Tyler Droll and Brooks Buffington launch the app for local campus chatter.", event_type: "FOUNDED", order_index: 1 },
      { id: "t-yy2", entity_id: "grave-yikyak-019", year: 2014, date_str: "November 2014", title: "$62M Sequoia Round", description: "Valued at $400 million as Yik Yak conquers hundreds of US colleges.", event_type: "MILESTONE", order_index: 2 },
      { id: "t-yy3", entity_id: "grave-yikyak-019", year: 2016, date_str: "March 2016", title: "Mandatory Handles", description: "Yik Yak removes anonymity, causing massive user boycott and 76% decline in downloads.", event_type: "DECLINE", order_index: 3 },
      { id: "t-yy4", entity_id: "grave-yikyak-019", year: 2017, date_str: "May 5, 2017", title: "Servers Extinguished", description: "Original app formally shuts down.", event_type: "DISCONTINUED", order_index: 4 }
    ],
    evidence: [
      { id: "e-yy1", entity_id: "grave-yikyak-019", source_name: "Yik Yak Farewell Blog Post", source_type: "Official Announcement", url: "https://web.archive.org/web/20170428000000*/blog.yikyak.com", timestamp: "2017-04-28", evidence_type: "OFFICIAL_ANNOUNCEMENT", reliability: "VERY_HIGH", weight: 45, extracted_claim: "Yik Yak co-founders announce closure of original service after 4 years.", is_verified: true },
      { id: "e-yy2", entity_id: "grave-yikyak-019", source_name: "TechCrunch", source_type: "Reputable News", url: "https://techcrunch.com/2017/04/28/yik-yak-shuts-down/", timestamp: "2017-04-28", evidence_type: "REPUTABLE_REPORT", reliability: "VERY_HIGH", weight: 30, extracted_claim: "Yik Yak officially shuts down after selling engineers to Square.", is_verified: true }
    ],
    successors: [
      { id: "s-yy1", entity_id: "grave-yikyak-019", name: "Fizz & Sidechat", relationship_type: "Direct Successor", description: "School-verified private campus community apps that captured the college audience.", url: "https://fizzsocial.app" }
    ],
    archives: [
      { id: "arc-yy1", entity_id: "grave-yikyak-019", year: 2014, date_captured: "December 1, 2014", wayback_url: "https://web.archive.org/web/20141201000000*/yikyak.com", title: "Yik Yak Homepage at Peak" }
    ],
    epitaphs: [
      { id: "ep-yy1", entity_id: "grave-yikyak-019", author_name: "CampusYakker", content: "Finding out classes were canceled before the university even sent the email. A golden chaotic era.", years_used: "2014-2015", candle_lit: true, status: "APPROVED", created_at: "2024-02-18T11:20:00Z" }
    ]
  },
  {
    id: "grave-wunderlist-020",
    slug: "wunderlist",
    name: "Wunderlist",
    tagline: "The cloud to-do list that set the benchmark for modern productivity.",
    description: "Wunderlist was a cloud-based task management application developed by 6Wunderkinder in Berlin, Germany. Launched in 2011 by Christian Reber, it won Apple's App of the Year with its wooden texture, sound design (the satisfying 'ding!' on completion), and seamless synchronization across platforms. Acquired by Microsoft in 2015 for an estimated $100–200 million, it was systematically disassembled in favor of Microsoft To Do.",
    category: "Developer tools",
    status: "CONFIRMED_DEAD",
    status_reason: "Microsoft officially shut down Wunderlist servers on May 6, 2020 in favor of Microsoft To Do.",
    founded_year: 2011,
    death_date: "May 6, 2020",
    death_year: 2020,
    lifespan: "2011 — 2020",
    cause_of_death_summary: "Acquired by Microsoft; legacy backend built on Ruby/MongoDB proved difficult to integrate into Office 365, leading Microsoft to rebuild it as Microsoft To Do and sunset Wunderlist.",
    cause_category: "Acquired & Discontinued",
    logo_url: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=200&auto=format&fit=crop&q=80",
    hero_image_url: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=1200&auto=format&fit=crop&q=80",
    primary_domain: "wunderlist.com",
    popularity_peak: "Over 13 million active users; Apple App of the Year 2013",
    peak_users: "13 Million",
    country: "Germany",
    parent_company: "Microsoft Corporation",
    confidence_score: 100,
    candle_count: 3640,
    is_verified: true,
    verified_at: "2020-05-06T00:00:00Z",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    related_slugs: ["pebble", "google-reader"],
    last_known_state: {
      website: {
        status_code: 301,
        state_desc: "Redirects to Microsoft To Do portal.",
        final_url: "https://todo.microsoft.com"
      },
      app: {
        store_status: "Defunct",
        state_desc: "Apps no longer sync with servers."
      },
      api: {
        endpoint_status: "410 Gone",
        state_desc: "Sync backend dismantled."
      },
      community: {
        platform: "Superlist",
        state_desc: "Founder Christian Reber launched Superlist in 2024 as a direct successor."
      },
      domain: {
        ownership: "Microsoft",
        state_desc: "Redirects to To Do."
      }
    },
    final_moments: "In September 2019, founder Christian Reber publicly tweeted offering to buy Wunderlist back from Microsoft to prevent its shutdown. Microsoft declined, and on May 6, 2020, the sync servers were permanently terminated.",
    timeline: [
      { id: "t-wl1", entity_id: "grave-wunderlist-020", year: 2011, date_str: "February 2011", title: "6Wunderkinder Launches", description: "Christian Reber and 5 friends release Wunderlist in Berlin.", event_type: "LAUNCH", order_index: 1 },
      { id: "t-wl2", entity_id: "grave-wunderlist-020", year: 2015, date_str: "June 1, 2015", title: "Microsoft Acquisition", description: "Microsoft purchases 6Wunderkinder for an estimated $150 million.", event_type: "ACQUISITION", order_index: 2 },
      { id: "t-wl3", entity_id: "grave-wunderlist-020", year: 2019, date_str: "September 6, 2019", title: "Reber's Buyback Offer", description: "Founder asks Microsoft to sell it back; Microsoft refuses.", event_type: "DECLINE", order_index: 3 },
      { id: "t-wl4", entity_id: "grave-wunderlist-020", year: 2020, date_str: "May 6, 2020", title: "Final Server Disconnection", description: "Sync disabled worldwide.", event_type: "DISCONTINUED", order_index: 4 }
    ],
    evidence: [
      { id: "e-wl1", entity_id: "grave-wunderlist-020", source_name: "Microsoft Official To Do Blog", source_type: "Official Announcement", url: "https://www.microsoft.com/en-us/microsoft-365/blog/2019/12/09/wunderlist-to-shut-down-on-may-6-2020/", timestamp: "2019-12-09", evidence_type: "OFFICIAL_ANNOUNCEMENT", reliability: "VERY_HIGH", weight: 45, extracted_claim: "Microsoft announces Wunderlist will shut down on May 6, 2020.", is_verified: true },
      { id: "e-wl2", entity_id: "grave-wunderlist-020", source_name: "The Verge", source_type: "Reputable News", url: "https://www.theverge.com/2020/5/6/21249216/wunderlist-shut-down-date-microsoft-to-do-switch", timestamp: "2020-05-06", evidence_type: "REPUTABLE_REPORT", reliability: "VERY_HIGH", weight: 30, extracted_claim: "Wunderlist officially shuts down today.", is_verified: true }
    ],
    successors: [
      { id: "s-wl1", entity_id: "grave-wunderlist-020", name: "Superlist", relationship_type: "Spiritual Successor", description: "Built by original Wunderlist founder Christian Reber as its true next-gen successor.", url: "https://superlist.com" },
      { id: "s-wl2", entity_id: "grave-wunderlist-020", name: "Microsoft To Do", relationship_type: "Replaced By", description: "Microsoft's official replacement built using Wunderlist design elements.", url: "https://todo.microsoft.com" }
    ],
    archives: [
      { id: "arc-wl1", entity_id: "grave-wunderlist-020", year: 2013, date_captured: "May 1, 2013", wayback_url: "https://web.archive.org/web/20130501000000*/wunderlist.com", title: "Wunderlist 2 Portal" }
    ],
    epitaphs: [
      { id: "ep-wl1", entity_id: "grave-wunderlist-020", author_name: "ChecklistObsessed", content: "That crisp chime when you completed a task was dopamine in its purest audio form.", years_used: "2012-2020", candle_lit: true, status: "APPROVED", created_at: "2024-01-25T16:00:00Z" }
    ]
  },
  // Additional Authentic Classics & At Risk entities
  {
    id: "grave-altavista-021",
    slug: "altavista",
    name: "AltaVista",
    tagline: "The supercharged search engine before Google existed.",
    description: "AltaVista was an early web search engine created in 1995 by researchers at Digital Equipment Corporation's Western Research Laboratory. It was the first searchable full-text database of a large part of the World Wide Web, featuring pioneering crawlers and Babel Fish translation. Sold to Compaq, CMGI, Overture, and eventually Yahoo, it was decommissioned in 2013.",
    category: "Search",
    status: "CONFIRMED_DEAD",
    status_reason: "Yahoo officially shut down AltaVista on July 8, 2013, redirecting traffic to Yahoo Search.",
    founded_year: 1995,
    death_date: "July 8, 2013",
    death_year: 2013,
    lifespan: "1995 — 2013",
    cause_of_death_summary: "Lost the search algorithm race to Google's PageRank; cluttered with Yahoo portal ads and neglected.",
    cause_category: "Market Competition",
    logo_url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=200&auto=format&fit=crop&q=80",
    hero_image_url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80",
    primary_domain: "altavista.com",
    popularity_peak: "13 million queries per day in 1996; dominant search engine of Web 1.0",
    peak_users: "13 Million/day",
    country: "United States",
    parent_company: "Yahoo! Inc.",
    confidence_score: 100,
    candle_count: 2980,
    is_verified: true,
    verified_at: "2013-07-08T00:00:00Z",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    related_slugs: ["netscape-navigator", "geocities"],
    last_known_state: {
      website: { status_code: 301, state_desc: "Redirects to search.yahoo.com", final_url: "https://search.yahoo.com" },
      app: { store_status: "None", state_desc: "Pre-mobile web." },
      api: { endpoint_status: "Defunct", state_desc: "Crawler engines dismantled." },
      community: { platform: "History", state_desc: "Pioneered Babel Fish." },
      domain: { ownership: "Yahoo", state_desc: "Redirects." }
    },
    final_moments: "On June 28, 2013, Yahoo's Qi Lu announced on the Yahoo corporate blog that AltaVista would close on July 8, 2013. On that day, 18 years of independent search was redirected to generic Yahoo Search.",
    timeline: [
      { id: "t-av1", entity_id: "grave-altavista-021", year: 1995, date_str: "December 15, 1995", title: "DEC Launches AltaVista", description: "Launched with multi-threaded crawler indexing 20 million pages.", event_type: "LAUNCH", order_index: 1 },
      { id: "t-av2", entity_id: "grave-altavista-021", year: 1997, date_str: "December 1997", title: "Babel Fish Debuts", description: "Launches first automated real-time web translation service.", event_type: "MILESTONE", order_index: 2 },
      { id: "t-av3", entity_id: "grave-altavista-021", year: 2013, date_str: "July 8, 2013", title: "Yahoo Shuts It Down", description: "Servers redirected to Yahoo Search.", event_type: "DISCONTINUED", order_index: 3 }
    ],
    evidence: [
      { id: "e-av1", entity_id: "grave-altavista-021", source_name: "Yahoo Corporate Blog", source_type: "Official Announcement", url: "https://yahoo.tumblr.com/post/54125001019/keeping-our-focus-on-whats-next", timestamp: "2013-06-28", evidence_type: "OFFICIAL_ANNOUNCEMENT", reliability: "VERY_HIGH", weight: 45, extracted_claim: "Yahoo confirms closure of AltaVista search engine on July 8, 2013.", is_verified: true }
    ],
    successors: [
      { id: "s-av1", entity_id: "grave-altavista-021", name: "Google Search", relationship_type: "Replaced By", description: "Google revolutionized indexing with PageRank and displaced AltaVista.", url: "https://google.com" }
    ],
    archives: [
      { id: "arc-av1", entity_id: "grave-altavista-021", year: 1997, date_captured: "January 1, 1997", wayback_url: "https://web.archive.org/web/19970101000000*/altavista.digital.com", title: "AltaVista Digital Web Search" }
    ],
    epitaphs: [
      { id: "ep-av1", entity_id: "grave-altavista-021", author_name: "DEC_Veteran", content: "Before Google was a glimmer in Stanford's eye, AltaVista showed us the infinite scale of the web.", years_used: "1995-2000", candle_lit: true, status: "APPROVED", created_at: "2024-01-04T10:00:00Z" }
    ]
  },
  {
    id: "grave-periscope-022",
    slug: "periscope",
    name: "Periscope",
    tagline: "Explore the world through someone else's eyes in real time.",
    description: "Periscope was a live video streaming app for iOS and Android developed by Kayvon Beykpour and Joe Bernstein. Acquired by Twitter in February 2015 before public launch for $100 million, it became the global standard for mobile citizen journalism and live broadcasting before being phased out in 2021 due to declining usage and high operating costs.",
    category: "Streaming",
    status: "CONFIRMED_DEAD",
    status_reason: "Twitter officially discontinued the Periscope apps on March 31, 2021.",
    founded_year: 2014,
    death_date: "March 31, 2021",
    death_year: 2021,
    lifespan: "2015 — 2021",
    cause_of_death_summary: "High infrastructure costs for live video; Twitter integrated native broadcast features directly into the core Twitter app; standalone user base withered.",
    cause_category: "Acquired & Discontinued",
    logo_url: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=200&auto=format&fit=crop&q=80",
    hero_image_url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80",
    primary_domain: "pscp.tv",
    popularity_peak: "Over 10 million registered accounts in 4 months; 200M broadcasts created",
    peak_users: "10 Million",
    country: "United States",
    parent_company: "Twitter, Inc.",
    confidence_score: 100,
    candle_count: 2410,
    is_verified: true,
    verified_at: "2021-03-31T00:00:00Z",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    related_slugs: ["vine", "meerkat"],
    last_known_state: {
      website: { status_code: 301, state_desc: "Redirects to X help center.", final_url: "https://pscp.tv" },
      app: { store_status: "Delisted", state_desc: "Removed from iOS and Android stores March 2021." },
      api: { endpoint_status: "410 Gone", state_desc: "Live RTMP stream ingestion servers offline." },
      community: { platform: "X / Twitter", state_desc: "Shifted to X Live Broadcasts." },
      domain: { ownership: "X Corp", state_desc: "Redirect." }
    },
    final_moments: "In December 2020, Twitter stated that Periscope was in an 'unsustainable maintenance-mode state' with declining usage and soaring infrastructure costs. On March 31, 2021, the app was removed and broadcast capability ceased.",
    timeline: [
      { id: "t-ps1", entity_id: "grave-periscope-022", year: 2014, date_str: "February 2014", title: "Founded during Istanbul Protests", description: "Kayvon Beykpour conceives live streaming while visiting Taksim Square during riots.", event_type: "FOUNDED", order_index: 1 },
      { id: "t-ps2", entity_id: "grave-periscope-022", year: 2015, date_str: "March 26, 2015", title: "Official Launch", description: "Twitter launches Periscope, rapidly overtaking rival Meerkat.", event_type: "LAUNCH", order_index: 2 },
      { id: "t-ps3", entity_id: "grave-periscope-022", year: 2021, date_str: "March 31, 2021", title: "Final Stream", description: "Periscope apps deactivated permanently.", event_type: "DISCONTINUED", order_index: 3 }
    ],
    evidence: [
      { id: "e-ps1", entity_id: "grave-periscope-022", source_name: "Periscope Medium Farewell Post", source_type: "Official Announcement", url: "https://medium.com/@periscope/farewell-periscope-1869e96e737c", timestamp: "2020-12-15", evidence_type: "OFFICIAL_ANNOUNCEMENT", reliability: "VERY_HIGH", weight: 45, extracted_claim: "Periscope team officially announces retirement by March 2021.", is_verified: true }
    ],
    successors: [
      { id: "s-ps1", entity_id: "grave-periscope-022", name: "Instagram Live", relationship_type: "Inherited Audience", description: "Captured mainstream mobile streaming with comments and floating hearts.", url: "https://instagram.com" }
    ],
    archives: [
      { id: "arc-ps1", entity_id: "grave-periscope-022", year: 2015, date_captured: "April 1, 2015", wayback_url: "https://web.archive.org/web/20150401000000*/periscope.tv", title: "Periscope Live Map Interface" }
    ],
    epitaphs: [
      { id: "ep-ps1", entity_id: "grave-periscope-022", author_name: "CitizenStream", content: "Floating hearts fluttering up the right side of the screen while seeing protests on the other side of Earth. Groundbreaking.", years_used: "2015-2020", candle_lit: true, status: "APPROVED", created_at: "2024-02-12T17:00:00Z" }
    ]
  },
  {
    id: "grave-path-023",
    slug: "path",
    name: "Path",
    tagline: "The intimate 50-friend journal that fought social overwhelm.",
    description: "Path was an anti-social network mobile photo sharing and messaging service founded in 2010 by Dave Morin, Shawn Fanning, and Dustin Mierau. Unlike Facebook's broadcast-to-thousands ethos, Path strictly limited friends to 50 (later 150) closest relationships. Its mobile UI design—featuring the radial flower menu, clock-scroller, and sleep/wake badges—set the gold standard for early iOS app craftsmanship before being shuttered in 2018.",
    category: "Social",
    status: "CONFIRMED_DEAD",
    status_reason: "Parent company Daum Kakao permanently shuttered Path on October 18, 2018.",
    founded_year: 2010,
    death_date: "October 18, 2018",
    death_year: 2018,
    lifespan: "2010 — 2018",
    cause_of_death_summary: "Difficulty scaling revenue with a hard limit on friend connections; privacy controversy in 2012; acquired by Kakao and eventually sunset.",
    cause_category: "Acquired & Discontinued",
    logo_url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&auto=format&fit=crop&q=80",
    hero_image_url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&auto=format&fit=crop&q=80",
    primary_domain: "path.com",
    popularity_peak: "50 million registered users; wildly popular in Indonesia",
    peak_users: "50 Million",
    country: "United States",
    parent_company: "Kakao Corp",
    confidence_score: 100,
    candle_count: 3120,
    is_verified: true,
    verified_at: "2018-10-18T00:00:00Z",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    related_slugs: ["orkut", "vine"],
    last_known_state: {
      website: { status_code: 301, state_desc: "Redirects to Daum Kakao portal.", final_url: "https://path.com" },
      app: { store_status: "Delisted", state_desc: "Removed from stores October 2018." },
      api: { endpoint_status: "410 Gone", state_desc: "Sync APIs dead." },
      community: { platform: "Design History", state_desc: "UI designers still study Path 2.0 interface recipes." },
      domain: { ownership: "Kakao", state_desc: "Parked." }
    },
    final_moments: "On September 17, 2018, Path announced it would discontinue services in a month. On October 18, 2018, the servers ceased accepting check-ins, concluding 8 years of intimate sharing.",
    timeline: [
      { id: "t-pa1", entity_id: "grave-path-023", year: 2010, date_str: "November 2010", title: "Launch of 50-Friend Limit", description: "Dave Morin leaves Facebook to launch intimate network.", event_type: "LAUNCH", order_index: 1 },
      { id: "t-pa2", entity_id: "grave-path-023", year: 2011, date_str: "November 2011", title: "Path 2.0 Masterpiece", description: "Redesign wins praise across tech industry for revolutionary mobile animations.", event_type: "MILESTONE", order_index: 2 },
      { id: "t-pa3", entity_id: "grave-path-023", year: 2015, date_str: "May 2015", title: "Sold to Daum Kakao", description: "Kakao acquires Path to strengthen Southeast Asian presence.", event_type: "ACQUISITION", order_index: 3 },
      { id: "t-pa4", entity_id: "grave-path-023", year: 2018, date_str: "October 18, 2018", title: "Service Ceases", description: "Path shuts down forever.", event_type: "DISCONTINUED", order_index: 4 }
    ],
    evidence: [
      { id: "e-pa1", entity_id: "grave-path-023", source_name: "Path Official Goodbye Notice", source_type: "Official Announcement", url: "https://web.archive.org/web/20180917000000*/path.com/goodbye", timestamp: "2018-09-17", evidence_type: "OFFICIAL_ANNOUNCEMENT", reliability: "VERY_HIGH", weight: 45, extracted_claim: "Path confirms full shutdown effective October 18, 2018.", is_verified: true }
    ],
    successors: [
      { id: "s-pa1", entity_id: "grave-path-023", name: "BeReal", relationship_type: "Spiritual Successor", description: "Revived the demand for authentic, small-circle sharing without influencer curation.", url: "https://bereal.com" }
    ],
    archives: [
      { id: "arc-pa1", entity_id: "grave-path-023", year: 2012, date_captured: "April 1, 2012", wayback_url: "https://web.archive.org/web/20120401000000*/path.com", title: "Path 2.0 Mobile Portal" }
    ],
    epitaphs: [
      { id: "ep-pa1", entity_id: "grave-path-023", author_name: "DieterRamsFan", content: "The best designed iOS application of the skeuomorphic and early flat era. Pure digital craftsmanship.", years_used: "2011-2015", candle_lit: true, status: "APPROVED", created_at: "2024-01-28T09:00:00Z" }
    ]
  },
  {
    id: "grave-rdio-024",
    slug: "rdio",
    name: "Rdio",
    tagline: "The minimalist music streaming app that was too beautiful to survive.",
    description: "Rdio was an ad-free music streaming service founded in 2010 by Janus Friis and Niklas Zennström (co-founders of Skype and Kazaa). Universally lauded by designers and audiophiles for its gorgeous, distraction-free typography, social following queues, and collaborative playlists, Rdio failed to convert free listeners into subscribers, ran out of cash, filed for Chapter 11 bankruptcy, and sold its core technology to Pandora for $75 million in 2015.",
    category: "Streaming",
    status: "CONFIRMED_DEAD",
    status_reason: "Shut down worldwide on December 22, 2015 following Chapter 11 bankruptcy filing and sale of assets to Pandora.",
    founded_year: 2010,
    death_date: "December 22, 2015",
    death_year: 2015,
    lifespan: "2010 — 2015",
    cause_of_death_summary: "High label licensing fees, inadequate marketing budget compared to Spotify's aggressive venture capital, and refusal to adopt a sustainable free tier until it was too late.",
    cause_category: "Bankruptcy",
    logo_url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=200&auto=format&fit=crop&q=80",
    hero_image_url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&auto=format&fit=crop&q=80",
    primary_domain: "rdio.com",
    popularity_peak: "35 million tracks catalog; revered by tech design community",
    peak_users: "5 Million",
    country: "United States",
    parent_company: "Pulser Media, Inc.",
    confidence_score: 100,
    candle_count: 3820,
    is_verified: true,
    verified_at: "2015-12-22T00:00:00Z",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    related_slugs: ["grooveshark", "napster"],
    last_known_state: {
      website: { status_code: 301, state_desc: "Redirects to Pandora.", final_url: "https://pandora.com" },
      app: { store_status: "Defunct", state_desc: "Removed from stores Dec 2015." },
      api: { endpoint_status: "410 Gone", state_desc: "Playback servers disabled." },
      community: { platform: "Historic", state_desc: "Alumni created playlist export tools to Spotify." },
      domain: { ownership: "Pandora / SiriusXM", state_desc: "Redirect." }
    },
    final_moments: "On November 16, 2015, Rdio filed for Chapter 11 bankruptcy and announced an asset purchase agreement with Pandora. On December 22, 2015, Rdio played its final stream and permanently disabled its apps.",
    timeline: [
      { id: "t-rd1", entity_id: "grave-rdio-024", year: 2010, date_str: "August 2010", title: "Skype Founders Launch Rdio", description: "Janus Friis and Niklas Zennström launch sleek subscription service.", event_type: "LAUNCH", order_index: 1 },
      { id: "t-rd2", entity_id: "grave-rdio-024", year: 2015, date_str: "November 16, 2015", title: "Bankruptcy Filing", description: "Rdio files Chapter 11 bankruptcy; Pandora acquires key assets for $75M.", event_type: "SHUTDOWN_ANNOUNCED", order_index: 2 },
      { id: "t-rd3", entity_id: "grave-rdio-024", year: 2015, date_str: "December 22, 2015", title: "The Music Stops", description: "Rdio ceases worldwide streaming.", event_type: "DISCONTINUED", order_index: 3 }
    ],
    evidence: [
      { id: "e-rd1", entity_id: "grave-rdio-024", source_name: "Rdio Farewell Notice", source_type: "Official Announcement", url: "https://web.archive.org/web/20151222000000*/rdio.com/farewell", timestamp: "2015-12-22", evidence_type: "OFFICIAL_ANNOUNCEMENT", reliability: "VERY_HIGH", weight: 45, extracted_claim: "Rdio formally shuts down services on December 22, 2015.", is_verified: true }
    ],
    successors: [
      { id: "s-rd1", entity_id: "grave-rdio-024", name: "Apple Music", relationship_type: "Inherited Audience", description: "Adopted many of Rdio's clean typographic and editorial queue concepts.", url: "https://music.apple.com" }
    ],
    archives: [
      { id: "arc-rd1", entity_id: "grave-rdio-024", year: 2014, date_captured: "March 1, 2014", wayback_url: "https://web.archive.org/web/20140301000000*/rdio.com", title: "Rdio Web Player" }
    ],
    epitaphs: [
      { id: "ep-rd1", entity_id: "grave-rdio-024", author_name: "TypographySnob", content: "No algorithmic junk, no podcast bloat, just beautiful album art and pure music. You were too good for this world.", years_used: "2011-2015", candle_lit: true, status: "APPROVED", created_at: "2024-01-16T14:30:00Z" }
    ]
  },
  {
    id: "grave-delicious-025",
    slug: "delicious",
    name: "Delicious (del.icio.us)",
    tagline: "The mother of folksonomy and social bookmarking.",
    description: "Delicious (originally del.icio.us) was a social bookmarking web service founded by Joshua Schachter in 2003. It popularized the concept of social tagging ('folksonomy') and delicious domain hacks. Acquired by Yahoo in 2005 for an estimated $15–30 million, it suffered a decade of neglect, was sold to AVOS Systems (YouTube founders), then Science Inc., then Pinboard, which converted it into a read-only historical monument.",
    category: "Web technology",
    status: "ZOMBIE",
    status_reason: "Passed through 5 different corporate owners; acquired by rival Pinboard in 2017 and made read-only; modern delicious.com redirects to Maciej Cegłowski's Pinboard.",
    founded_year: 2003,
    death_date: "June 1, 2017",
    death_year: 2017,
    lifespan: "2003 — 2017 (Active)",
    cause_of_death_summary: "Yahoo neglect and botched redesigns; users fled to Twitter and Pinboard; sold repeatedly until shuttered.",
    cause_category: "Acquired & Discontinued",
    logo_url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=200&auto=format&fit=crop&q=80",
    hero_image_url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop&q=80",
    primary_domain: "delicious.com",
    popularity_peak: "5.3 million users; 180 million unique bookmarked URLs in 2008",
    peak_users: "5.3 Million",
    country: "United States",
    parent_company: "Pinboard / Maciej Cegłowski",
    confidence_score: 95,
    candle_count: 2650,
    is_verified: true,
    verified_at: "2017-06-01T00:00:00Z",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    related_slugs: ["geocities", "stumbleupon"],
    last_known_state: {
      website: { status_code: 301, state_desc: "Redirects to Pinboard.in.", final_url: "https://pinboard.in" },
      app: { store_status: "Defunct", state_desc: "No apps." },
      api: { endpoint_status: "410 Gone", state_desc: "Classic v1/v2 bookmark APIs disabled." },
      community: { platform: "Pinboard", state_desc: "Bookmarks migrated to Pinboard." },
      domain: { ownership: "Maciej Cegłowski", state_desc: "Redirect." }
    },
    final_moments: "On June 1, 2017, Pinboard founder Maciej Cegłowski purchased Delicious for $35,000, declaring: 'I bought Delicious so it wouldn't die or get sold to an ad network.' He turned off active bookmarking and safely preserved the database.",
    timeline: [
      { id: "t-del1", entity_id: "grave-delicious-025", year: 2003, date_str: "September 2003", title: "Joshua Schachter Launches del.icio.us", description: "Invented the tag-based bookmarking system.", event_type: "LAUNCH", order_index: 1 },
      { id: "t-del2", entity_id: "grave-delicious-025", year: 2005, date_str: "December 2005", title: "Yahoo Acquisition", description: "Yahoo buys del.icio.us for $15M.", event_type: "ACQUISITION", order_index: 2 },
      { id: "t-del3", entity_id: "grave-delicious-025", year: 2017, date_str: "June 1, 2017", title: "Acquired by Pinboard", description: "Pinboard buys Delicious and turns it into a preserved archive.", event_type: "DISCONTINUED", order_index: 3 }
    ],
    evidence: [
      { id: "e-del1", entity_id: "grave-delicious-025", source_name: "Pinboard Official Announcement", source_type: "Official Blog", url: "https://blog.pinboard.in/2017/06/pinboard_acquires_delicious/", timestamp: "2017-06-01", evidence_type: "OFFICIAL_ANNOUNCEMENT", reliability: "VERY_HIGH", weight: 45, extracted_claim: "Pinboard confirms acquisition and archival closure of Delicious.", is_verified: true }
    ],
    successors: [
      { id: "s-del1", entity_id: "grave-delicious-025", name: "Pinboard", relationship_type: "Direct Successor", description: "Anti-social bookmarking built for power users by Maciej Cegłowski.", url: "https://pinboard.in" },
      { id: "s-del2", entity_id: "grave-delicious-025", name: "Raindrop.io", relationship_type: "Spiritual Successor", description: "Modern all-in-one bookmark manager.", url: "https://raindrop.io" }
    ],
    archives: [
      { id: "arc-del1", entity_id: "grave-delicious-025", year: 2004, date_captured: "November 1, 2004", wayback_url: "https://web.archive.org/web/20041101000000*/del.icio.us", title: "Classic del.icio.us Tag Cloud" }
    ],
    epitaphs: [
      { id: "ep-del1", entity_id: "grave-delicious-025", author_name: "TagCurator", content: "You invented tagging before hashtags even existed. The true intellectual index of Web 2.0.", years_used: "2004-2011", candle_lit: true, status: "APPROVED", created_at: "2024-02-19T08:00:00Z" }
    ]
  },
  // Additional notable graves
  {
    id: "grave-mixer-026",
    slug: "mixer",
    name: "Mixer",
    tagline: "Microsoft's multi-million streamer buyout that collapsed in 4 years.",
    description: "Mixer (originally Beam) was a video game live streaming platform co-founded in 2016 by Matt Salsamendi and James Boehm. Acquired by Microsoft in August 2016, Mixer boasted ultra-low-latency FTL protocol (sub-second lag) and interactive viewer buttons. In 2019, Microsoft paid hundreds of millions to sign mega-streamers Ninja and Shroud away from Twitch. Despite the fanfare, viewership barely budged, and Microsoft abruptly shut it down in July 2020.",
    category: "Streaming",
    status: "CONFIRMED_DEAD",
    status_reason: "Microsoft abruptly shut down Mixer on July 22, 2020, partnering with Facebook Gaming.",
    founded_year: 2016,
    death_date: "July 22, 2020",
    death_year: 2020,
    lifespan: "2016 — 2020",
    cause_of_death_summary: "Inability to compete with Twitch's entrenched network effects; high streamer contract payouts ($30M to Ninja, $10M to Shroud) with negligible market share gain.",
    cause_category: "Market Competition",
    logo_url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&auto=format&fit=crop&q=80",
    hero_image_url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&auto=format&fit=crop&q=80",
    primary_domain: "mixer.com",
    popularity_peak: "30 million monthly active viewers; signed Ninja and Shroud exclusively in 2019",
    peak_users: "30 Million",
    country: "United States",
    parent_company: "Microsoft Corporation",
    confidence_score: 100,
    candle_count: 2120,
    is_verified: true,
    verified_at: "2020-07-22T00:00:00Z",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    related_slugs: ["quibi", "vine"],
    last_known_state: {
      website: { status_code: 301, state_desc: "Redirects to Xbox.com gaming portal.", final_url: "https://xbox.com" },
      app: { store_status: "Delisted", state_desc: "Apps removed July 2020." },
      api: { endpoint_status: "410 Gone", state_desc: "FTL streaming protocol ingestion clusters terminated." },
      community: { platform: "Twitch", state_desc: "Ninja and Shroud returned to Twitch with huge contract buyouts." },
      domain: { ownership: "Microsoft", state_desc: "Redirects to Xbox." }
    },
    final_moments: "On June 22, 2020, Phil Spencer announced Microsoft would shut down Mixer in one month and transition partners to Facebook Gaming. Ninja and Shroud opted out of Facebook and took their full contract payouts back to Twitch.",
    timeline: [
      { id: "t-mx1", entity_id: "grave-mixer-026", year: 2016, date_str: "January 2016", title: "Beam Wins TechCrunch Disrupt", description: "FTL sub-second streaming technology debuts.", event_type: "LAUNCH", order_index: 1 },
      { id: "t-mx2", entity_id: "grave-mixer-026", year: 2016, date_str: "August 2016", title: "Microsoft Acquisition", description: "Microsoft buys Beam, later rebranding as Mixer.", event_type: "ACQUISITION", order_index: 2 },
      { id: "t-mx3", entity_id: "grave-mixer-026", year: 2019, date_str: "August 2019", title: "Ninja Signs Exclusive Contract", description: "Ninja leaves Twitch in a blockbuster deal worth an estimated $30M.", event_type: "MILESTONE", order_index: 3 },
      { id: "t-mx4", entity_id: "grave-mixer-026", year: 2020, date_str: "July 22, 2020", title: "Sudden Shutter", description: "Mixer shuts down completely.", event_type: "DISCONTINUED", order_index: 4 }
    ],
    evidence: [
      { id: "e-mx1", entity_id: "grave-mixer-026", source_name: "Xbox Wire Official Blog", source_type: "Official Announcement", url: "https://news.xbox.com/en-us/2020/06/22/bringing-more-players-into-our-gaming-vision/", timestamp: "2020-06-22", evidence_type: "OFFICIAL_ANNOUNCEMENT", reliability: "VERY_HIGH", weight: 45, extracted_claim: "Microsoft announces closure of Mixer and partnership with Facebook Gaming.", is_verified: true }
    ],
    successors: [
      { id: "s-mx1", entity_id: "grave-mixer-026", name: "Twitch", relationship_type: "Replaced By", description: "Twitch reclaimed 100% of the audience and top streamers.", url: "https://twitch.tv" }
    ],
    archives: [
      { id: "arc-mx1", entity_id: "grave-mixer-026", year: 2019, date_captured: "September 1, 2019", wayback_url: "https://web.archive.org/web/20190901000000*/mixer.com", title: "Mixer Homepage featuring Ninja" }
    ],
    epitaphs: [
      { id: "ep-mx1", entity_id: "grave-mixer-026", author_name: "FTLViewer", content: "The sub-second latency was legitimately better than Twitch. But you can't buy a community with bags of cash.", years_used: "2016-2020", candle_lit: true, status: "APPROVED", created_at: "2024-02-01T12:00:00Z" }
    ]
  },
  {
    id: "grave-friendster-027",
    slug: "friendster",
    name: "Friendster",
    tagline: "The social network that gave birth to the modern social web.",
    description: "Friendster was a social gaming and networking site founded in 2002 by Jonathan Abrams and Peter Chin in Mountain View, California. Considered the 'grandfather of social networking', it reached 3 million users in months, turning down a $30 million buyout offer from Google in 2003. Crippled by catastrophic server slowdowns and early user identity policing (banning 'Fakesters'), Friendster ceded the West to Myspace and Facebook, pivoted to Southeast Asian gaming, and died in 2015.",
    category: "Social",
    status: "CONFIRMED_DEAD",
    status_reason: "Friendster shut down gaming and social services on June 14, 2015; dissolved company in 2018.",
    founded_year: 2002,
    death_date: "June 14, 2015",
    death_year: 2015,
    lifespan: "2002 — 2015",
    cause_of_death_summary: "Catastrophic server scalability failures in 2003; heavy-handed banning of creative profiles; rise of Myspace and Facebook; final pivot to gaming failed.",
    cause_category: "Market Competition",
    logo_url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&auto=format&fit=crop&q=80",
    hero_image_url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&auto=format&fit=crop&q=80",
    primary_domain: "friendster.com",
    popularity_peak: "Over 115 million registered accounts; #1 site in the Philippines and Malaysia (2008)",
    peak_users: "115 Million",
    country: "United States / Malaysia",
    parent_company: "MOL Global",
    confidence_score: 100,
    candle_count: 3410,
    is_verified: true,
    verified_at: "2015-06-14T00:00:00Z",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    related_slugs: ["orkut", "geocities"],
    last_known_state: {
      website: { status_code: 404, state_desc: "Domain parked with placeholder.", final_url: "https://friendster.com" },
      app: { store_status: "Defunct", state_desc: "None." },
      api: { endpoint_status: "None", state_desc: "All legacy databases deleted." },
      community: { platform: "History", state_desc: "Pioneered the 'Circle of Friends' patent." },
      domain: { ownership: "Private Investor", state_desc: "Inactive." }
    },
    final_moments: "On June 14, 2015, MOL Global took Friendster offline, citing 'an evolving landscape in the challenging industry.' The company surrendered all servers and trademarks were transferred.",
    timeline: [
      { id: "t-fr1", entity_id: "grave-friendster-027", year: 2002, date_str: "March 2002", title: "Jonathan Abrams Launches Friendster", description: "Pioneers the concept of connecting through real-life friends of friends.", event_type: "LAUNCH", order_index: 1 },
      { id: "t-fr2", entity_id: "grave-friendster-027", year: 2003, date_str: "October 2003", title: "Google Buyout Rejected", description: "Rejects $30 million acquisition offer from Google in favor of VC funding.", event_type: "MILESTONE", order_index: 2 },
      { id: "t-fr3", entity_id: "grave-friendster-027", year: 2011, date_str: "May 2011", title: "Pivot to Gaming", description: "Deletes all user social profiles to become a pure gaming site in Asia.", event_type: "DECLINE", order_index: 3 },
      { id: "t-fr4", entity_id: "grave-friendster-027", year: 2015, date_str: "June 14, 2015", title: "Final Game Over", description: "Friendster permanently takes down its servers.", event_type: "DISCONTINUED", order_index: 4 }
    ],
    evidence: [
      { id: "e-fr1", entity_id: "grave-friendster-027", source_name: "Friendster Official Statement", source_type: "Official Announcement", url: "https://web.archive.org/web/20150615000000*/friendster.com", timestamp: "2015-06-14", evidence_type: "OFFICIAL_ANNOUNCEMENT", reliability: "VERY_HIGH", weight: 45, extracted_claim: "Friendster announces indefinite pause of services and shutdown of accounts.", is_verified: true }
    ],
    successors: [
      { id: "s-fr1", entity_id: "grave-friendster-027", name: "Facebook", relationship_type: "Replaced By", description: "Mark Zuckerberg learned from Friendster's database caching bottlenecks to build Facebook.", url: "https://facebook.com" }
    ],
    archives: [
      { id: "arc-fr1", entity_id: "grave-friendster-027", year: 2003, date_captured: "April 1, 2003", wayback_url: "https://web.archive.org/web/20030401000000*/friendster.com", title: "Friendster Original Circle Interface" }
    ],
    epitaphs: [
      { id: "ep-fr1", entity_id: "grave-friendster-027", author_name: "FakesterOriginal", content: "You proved that humans wanted to see their real-life relationships on a computer screen. RIP.", years_used: "2002-2005", candle_lit: true, status: "APPROVED", created_at: "2024-01-08T15:00:00Z" }
    ]
  },
  {
    id: "grave-yahoo-answers-028",
    slug: "yahoo-answers",
    name: "Yahoo Answers",
    tagline: "The chaotic, earnest, unhinged Q&A sanctuary of the internet.",
    description: "Yahoo Answers was a community-driven question-and-answer platform launched by Yahoo in 2005. For 16 years, anyone could ask anything and receive answers from real humans worldwide. While it started as an earnest information exchange, it became immortalized as a legendary comedy generator for questions like 'How is babby formed?' and 'Can u get pregante?'. Yahoo shut it down and wiped all archives on May 4, 2021.",
    category: "Forums",
    status: "CONFIRMED_DEAD",
    status_reason: "Yahoo shut down the website and permanently deleted 16 years of community questions on May 4, 2021.",
    founded_year: 2005,
    death_date: "May 4, 2021",
    death_year: 2021,
    lifespan: "2005 — 2021",
    cause_of_death_summary: "Overrun by trolls, spam, and conspiracy theories; unable to monetize; Yahoo shifted resources to modern editorial content.",
    cause_category: "Community Collapse",
    logo_url: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=200&auto=format&fit=crop&q=80",
    hero_image_url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop&q=80",
    primary_domain: "answers.yahoo.com",
    popularity_peak: "Over 120 million active monthly questioners at peak in 2009",
    peak_users: "120 Million",
    country: "United States",
    parent_company: "Verizon Media / Yahoo",
    confidence_score: 100,
    candle_count: 6710,
    is_verified: true,
    verified_at: "2021-05-04T00:00:00Z",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    related_slugs: ["geocities", "altavista"],
    last_known_state: {
      website: { status_code: 301, state_desc: "Redirects to Yahoo homepage.", final_url: "https://yahoo.com" },
      app: { store_status: "Defunct", state_desc: "None." },
      api: { endpoint_status: "404 Not Found", state_desc: "Database completely erased." },
      community: { platform: "Archive Team", state_desc: "Archive Team scraped hundreds of millions of questions before Yahoo wiped the servers." },
      domain: { ownership: "Yahoo", state_desc: "Redirect." }
    },
    final_moments: "On April 5, 2021, Yahoo announced that Answers would become read-only on April 20, 2021, and would be shut down completely on May 4, 2021. Users were given a brief window to request their data via Yahoo Takeout.",
    timeline: [
      { id: "t-ya1", entity_id: "grave-yahoo-answers-028", year: 2005, date_str: "June 28, 2005", title: "Launch of Yahoo Answers", description: "Yahoo launches public beta to replace Ask Yahoo!.", event_type: "LAUNCH", order_index: 1 },
      { id: "t-ya2", entity_id: "grave-yahoo-answers-028", year: 2006, date_str: "August 2006", title: "'How is babby formed?'", description: "User asks famous question, launching internet folklore.", event_type: "MILESTONE", order_index: 2 },
      { id: "t-ya3", entity_id: "grave-yahoo-answers-028", year: 2021, date_str: "May 4, 2021", title: "The Purge", description: "16 years of questions and answers deleted forever.", event_type: "DISCONTINUED", order_index: 3 }
    ],
    evidence: [
      { id: "e-ya1", entity_id: "grave-yahoo-answers-028", source_name: "Yahoo Help Official Sunset FAQ", source_type: "Official Announcement", url: "https://help.yahoo.com/kb/SLN35642.html", timestamp: "2021-04-05", evidence_type: "OFFICIAL_ANNOUNCEMENT", reliability: "VERY_HIGH", weight: 45, extracted_claim: "Yahoo confirms complete shutdown and deletion of Yahoo Answers on May 4, 2021.", is_verified: true }
    ],
    successors: [
      { id: "s-ya1", entity_id: "grave-yahoo-answers-028", name: "Reddit (r/NoStupidQuestions)", relationship_type: "Inherited Audience", description: "Reddit became the primary home for absurd and sincere public questioning.", url: "https://reddit.com/r/nostupidquestions" },
      { id: "s-ya2", entity_id: "grave-yahoo-answers-028", name: "Quora", relationship_type: "Replaced By", description: "Structured Q&A network with real identities.", url: "https://quora.com" }
    ],
    archives: [
      { id: "arc-ya1", entity_id: "grave-yahoo-answers-028", year: 2008, date_captured: "March 15, 2008", wayback_url: "https://web.archive.org/web/20080315000000*/answers.yahoo.com", title: "Yahoo Answers Golden Age" }
    ],
    epitaphs: [
      { id: "ep-ya1", entity_id: "grave-yahoo-answers-028", author_name: "BabbyScholar", content: "They need to do way instain mother who kill their babbys. Rest in peace to the wildest archive of human curiosity.", years_used: "2006-2021", candle_lit: true, status: "APPROVED", created_at: "2024-01-21T18:00:00Z" }
    ]
  },
  // AT RISK ENTITIES SHOWCASING MULTI-SIGNAL DETECTION
  {
    id: "grave-risk-029",
    slug: "classic-bulletin-network",
    name: "Classic Bulletin Network",
    tagline: "Legacy forum hosting system showing rapid multi-signal degradation.",
    description: "Classic Bulletin Network is an aging bulletin board provider hosting over 14,000 legacy community forums created between 2002 and 2012. Over the last 18 months, our automated archaeological probes detected chronic DNS failure, unrenewed SSL certificates, total developer radio silence, and declining active databases, placing it at catastrophic risk of imminent permanent blackout.",
    category: "Forums",
    status: "AT_RISK",
    status_reason: "Multiple warning signals detected: 0 commits in 22 months, periodic DNS drops, SSL expired, official support unresponsive.",
    founded_year: 2004,
    lifespan: "2004 — Present (Fragile)",
    cause_of_death_summary: "Not confirmed dead yet, but shows 82% risk score across 5 independent forensic metrics.",
    cause_category: "Technological Obsolescence",
    logo_url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&auto=format&fit=crop&q=80",
    hero_image_url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop&q=80",
    primary_domain: "classicbulletin.net",
    popularity_peak: "14,000 legacy forums still indexed",
    peak_users: "500,000 Archive Records",
    country: "United Kingdom",
    confidence_score: 82,
    candle_count: 140,
    is_verified: true,
    verified_at: "2024-08-15T00:00:00Z",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-08-15T00:00:00Z",
    related_slugs: ["geocities", "yahoo-answers"],
    last_known_state: {
      website: { status_code: 503, state_desc: "Intermittent 503 Service Unavailable / Gateway Timeouts.", final_url: "https://classicbulletin.net" },
      app: { store_status: "None", state_desc: "Web only." },
      api: { endpoint_status: "Failing", state_desc: "Database connection pool timeouts." },
      community: { platform: "Discourse", state_desc: "Forum admins frantically attempting manual SQL dumps." },
      domain: { ownership: "Expiring within 60 days", state_desc: "WHOIS registry indicates unrenewed state." }
    },
    final_moments: "Monitoring in progress. The service has not officially posted a shutdown announcement, but automated archaeological probes have detected cascading hardware faults.",
    risk_signals: [
      { id: "rs-1", label: "No official updates / blog posts in 24 months", points: 20, detected: true, evidence_claim: "Last official blog entry dates back to September 2022." },
      { id: "rs-2", label: "Last code release > 14 months ago", points: 15, detected: true, evidence_claim: "GitHub repo archived / 0 commits recorded since 2023." },
      { id: "rs-3", label: "Domain & DNS instability detected", points: 10, detected: true, evidence_claim: "DNS probes return SERVFAIL intermittently on 3 of 4 root nameservers." },
      { id: "rs-4", label: "Community activity declining sharply (-85%)", points: 15, detected: true, evidence_claim: "Forum post velocity dropped from 1,200 posts/day to under 15." },
      { id: "rs-5", label: "SSL Certificate expired or warnings active", points: 12, detected: true, evidence_claim: "Let's Encrypt certificate expired without automated renewal." },
      { id: "rs-6", label: "Official shutdown announcement posted", points: 18, detected: false, evidence_claim: "No formal announcement issued yet." }
    ],
    timeline: [
      { id: "t-cb1", entity_id: "grave-risk-029", year: 2004, date_str: "2004", title: "Network Established", description: "Launched free phpBB and vBulletin hosting.", event_type: "LAUNCH", order_index: 1 },
      { id: "t-cb2", entity_id: "grave-risk-029", year: 2012, date_str: "2012", title: "Peak Community", description: "Over 14,000 forums active across cars, gaming, and local history.", event_type: "MILESTONE", order_index: 2 },
      { id: "t-cb3", entity_id: "grave-risk-029", year: 2023, date_str: "2023", title: "Degradation Begins", description: "Founders cease replying to support tickets; database corruption reports mount.", event_type: "DECLINE", order_index: 3 }
    ],
    evidence: [
      { id: "e-cb1", entity_id: "grave-risk-029", source_name: "Automated Diagnostic Prober", source_type: "HTTP/DNS Monitoring", url: "https://classicbulletin.net", timestamp: "2024-08-01", evidence_type: "DNS_FAILURE", reliability: "HIGH", weight: 25, extracted_claim: "Automated probe confirms 42% packet loss and 503 gateway timeouts.", is_verified: true },
      { id: "e-cb2", entity_id: "grave-risk-029", source_name: "Archive Team Alert", source_type: "Preservation Warning", url: "https://wiki.archiveteam.org", timestamp: "2024-07-20", evidence_type: "ARCHIVE_SNAPSHOT", reliability: "HIGH", weight: 25, extracted_claim: "Archive Team flagged network for emergency warrior scrapers.", is_verified: true }
    ],
    successors: [
      { id: "s-cb1", entity_id: "grave-risk-029", name: "Discourse", relationship_type: "Spiritual Successor", description: "Modern open-source community platform.", url: "https://discourse.org" }
    ],
    archives: [
      { id: "arc-cb1", entity_id: "grave-risk-029", year: 2010, date_captured: "July 1, 2010", wayback_url: "https://web.archive.org", title: "Classic Bulletin Network Directory" }
    ],
    epitaphs: [
      { id: "ep-cb1", entity_id: "grave-risk-029", author_name: "ForumArchivist", content: "Saving what we can before the hard drives give out. So many vintage car repair guides are on here.", years_used: "2005-present", candle_lit: true, status: "APPROVED", created_at: "2024-08-20T10:00:00Z" }
    ]
  },
  {
    id: "grave-zombie-030",
    slug: "ask-jeeves",
    name: "Ask Jeeves (Original)",
    tagline: "The butler who politely searched the early web.",
    description: "Ask Jeeves was an early search engine founded in 1996 by Garrett Gruener and David Warthen in Berkeley, California. Personified by the dapper cartoon butler Jeeves (named after P.G. Wodehouse's fictional valet), it allowed users to ask questions in plain English rather than rigid keyword boolean strings. While the domain ask.com still technically exists, the beloved butler was killed off in 2006, and the search engine is now a zombie content-farm redirect.",
    category: "Search",
    status: "ZOMBIE",
    status_reason: "Jeeves character retired in 2006; search algorithm discontinued in 2010; now operates as a zombie advertising syndication portal owned by IAC.",
    founded_year: 1996,
    death_date: "February 27, 2006",
    death_year: 2006,
    lifespan: "1996 — 2006 (Original Butler)",
    cause_of_death_summary: "Rebranded to Ask.com; surrendered its proprietary search technology to Google in 2010; transformed into a click-arbitrage syndication site.",
    cause_category: "Strategic Pivot",
    logo_url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=200&auto=format&fit=crop&q=80",
    hero_image_url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop&q=80",
    primary_domain: "askjeeves.com",
    popularity_peak: "Top 5 US search engine in 1999; millions asked Jeeves questions daily",
    peak_users: "20 Million",
    country: "United States",
    parent_company: "IAC / InterActiveCorp",
    confidence_score: 96,
    candle_count: 3120,
    is_verified: true,
    verified_at: "2006-02-27T00:00:00Z",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    related_slugs: ["altavista", "yahoo-answers"],
    last_known_state: {
      website: { status_code: 200, state_desc: "Redirects to Ask.com, a hollow ad portal powered by Google search syndication.", final_url: "https://ask.com" },
      app: { store_status: "Defunct", state_desc: "None." },
      api: { endpoint_status: "None", state_desc: "Proprietary natural language answer database retired." },
      community: { platform: "History", state_desc: "Nostalgic memory of 90s internet." },
      domain: { ownership: "IAC", state_desc: "Active ad-farm domain." }
    },
    final_moments: "In 2006, IAC announced Jeeves would be 'retired' to give Ask.com a modern corporate makeover. In 2010, Ask conceded defeat to Google and dismantled its remaining search engineering division.",
    timeline: [
      { id: "t-aj1", entity_id: "grave-zombie-030", year: 1996, date_str: "1996", title: "Jeeves Appears", description: "Gruener and Warthen create natural language search.", event_type: "LAUNCH", order_index: 1 },
      { id: "t-aj2", entity_id: "grave-zombie-030", year: 2005, date_str: "July 2005", title: "IAC Buyout", description: "Barry Diller's IAC purchases Ask Jeeves for $1.85 billion.", event_type: "ACQUISITION", order_index: 2 },
      { id: "t-aj3", entity_id: "grave-zombie-030", year: 2006, date_str: "February 27, 2006", title: "Jeeves Retired", description: "The butler is officially erased and site renamed Ask.com.", event_type: "DISCONTINUED", order_index: 3 },
      { id: "t-aj4", entity_id: "grave-zombie-030", year: 2010, date_str: "November 2010", title: "Search Engineering Halted", description: "Ask.com gives up building search algorithms; becomes syndication portal.", event_type: "DISCONTINUED", order_index: 4 }
    ],
    evidence: [
      { id: "e-aj1", entity_id: "grave-zombie-030", source_name: "BBC News", source_type: "Reputable News", url: "https://news.bbc.co.uk/2/hi/technology/4717148.stm", timestamp: "2006-02-15", evidence_type: "REPUTABLE_REPORT", reliability: "VERY_HIGH", weight: 40, extracted_claim: "Ask Jeeves officially retires cartoon butler to become Ask.com.", is_verified: true },
      { id: "e-aj2", entity_id: "grave-zombie-030", source_name: "Reuters", source_type: "Reputable News", url: "https://www.reuters.com/article/technology/askcom-to-stop-competing-with-google-in-web-search-idUSTRE6A86L220101109/", timestamp: "2010-11-09", evidence_type: "REPUTABLE_REPORT", reliability: "VERY_HIGH", weight: 35, extracted_claim: "Ask.com stops competing with Google and cuts 130 search engineering jobs.", is_verified: true }
    ],
    successors: [
      { id: "s-aj1", entity_id: "grave-zombie-030", name: "Perplexity AI", relationship_type: "Spiritual Successor", description: "Fulfilling Jeeves' promise of natural language conversational answers backed by citations.", url: "https://perplexity.ai" }
    ],
    archives: [
      { id: "arc-aj1", entity_id: "grave-zombie-030", year: 1999, date_captured: "November 28, 1999", wayback_url: "https://web.archive.org/web/19991128000000*/askjeeves.com", title: "Classic Ask Jeeves Portal" }
    ],
    epitaphs: [
      { id: "ep-aj1", entity_id: "grave-zombie-030", author_name: "OldSchoolSurfer", content: "I used to write 'Please, Jeeves, can you tell me...' because I thought being polite gave better search results.", years_used: "1998-2004", candle_lit: true, status: "APPROVED", created_at: "2024-02-11T13:00:00Z" }
    ]
  }
];
