import { GraveEntity } from '@/types/graveyard';
import { SEED_ENTITIES as BATCH_1 } from './seed-entities';
import { BATCH_3_ENTITIES } from './seed-entities-batch3';
import graveyardData from './graveyard.json';

export const ADDITIONAL_ENTITIES: GraveEntity[] = [
  {
    id: "grave-kazaa-031",
    slug: "kazaa",
    name: "Kazaa",
    tagline: "The FastTrack P2P titan with the blue butterfly logo.",
    description: "Kazaa was a peer-to-peer file sharing application using the FastTrack protocol licensed by Consumer Empowerment in the Netherlands (founded by Niklas Zennström and Janus Friis). In 2003, it was the most downloaded internet software in the world with over 60 million copies downloaded, becoming the center of global music and film sharing before crippling adware bundling and a $100M settlement with the music industry ended it.",
    category: "Streaming",
    status: "CONFIRMED_DEAD",
    status_reason: "Settled with record labels for $100M in 2006; relaunched as an obscure legal music subscription that shut down in 2012.",
    founded_year: 2001,
    death_date: "August 15, 2012",
    death_year: 2012,
    lifespan: "2001 — 2012",
    cause_of_death_summary: "Massive copyright lawsuits from the RIAA and MPAA; ruined by aggressive malware/spyware bundling (Cydoor, Altnet); settled for $100M.",
    cause_category: "Legal & Regulatory",
    logo_url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=200&auto=format&fit=crop&q=80",
    hero_image_url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&auto=format&fit=crop&q=80",
    primary_domain: "kazaa.com",
    popularity_peak: "Most downloaded program in the world (2003); 60 million active users",
    peak_users: "60 Million",
    country: "Netherlands / Estonia",
    parent_company: "Sharman Networks",
    confidence_score: 100,
    candle_count: 3120,
    is_verified: true,
    verified_at: "2012-08-15T00:00:00Z",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    related_slugs: ["napster", "grooveshark"],
    last_known_state: {
      website: { status_code: 404, state_desc: "Domain parked.", final_url: "https://kazaa.com" },
      app: { store_status: "Defunct", state_desc: "Client non-functional." },
      api: { endpoint_status: "410 Gone", state_desc: "FastTrack supernodes offline." },
      community: { platform: "History", state_desc: "Pioneered VoIP concepts used to create Skype." },
      domain: { ownership: "Domain Investor", state_desc: "Parked." }
    },
    final_moments: "In July 2006, Sharman Networks agreed to pay $100 million in damages to Universal Music, Sony BMG, EMI, and Warner Music. A subscription revival fizzled out and officially shut its doors in August 2012.",
    timeline: [
      { id: "t-kz1", entity_id: "grave-kazaa-031", year: 2001, date_str: "March 2001", title: "Niklas & Janus Launch Kazaa", description: "FastTrack distributed protocol launched to succeed Napster.", event_type: "LAUNCH", order_index: 1 },
      { id: "t-kz2", entity_id: "grave-kazaa-031", year: 2003, date_str: "May 2003", title: "#1 Download in History", description: "Overtakes ICQ as the most downloaded program on CNET Download.com.", event_type: "MILESTONE", order_index: 2 },
      { id: "t-kz3", entity_id: "grave-kazaa-031", year: 2006, date_str: "July 2006", title: "$100 Million Settlement", description: "Agrees to pay major record labels $100M and introduce filters.", event_type: "DECLINE", order_index: 3 },
      { id: "t-kz4", entity_id: "grave-kazaa-031", year: 2012, date_str: "August 2012", title: "Final Demise", description: "Subscription site goes dark.", event_type: "DISCONTINUED", order_index: 4 }
    ],
    evidence: [
      { id: "e-kz1", entity_id: "grave-kazaa-031", source_name: "BBC News", source_type: "Reputable News", url: "https://news.bbc.co.uk/2/hi/entertainment/5220468.stm", timestamp: "2006-07-27", evidence_type: "REPUTABLE_REPORT", reliability: "VERY_HIGH", weight: 45, extracted_claim: "Kazaa reaches landmark $100M settlement with music industry.", is_verified: true }
    ],
    successors: [
      { id: "s-kz1", entity_id: "grave-kazaa-031", name: "Limewire (Historic)", relationship_type: "Replaced By", description: "Absorbed users seeking P2P downloads before its own legal demise.", url: "https://limewire.com" }
    ],
    archives: [
      { id: "arc-kz1", entity_id: "grave-kazaa-031", year: 2003, date_captured: "April 1, 2003", wayback_url: "https://web.archive.org/web/20030401000000*/kazaa.com", title: "Kazaa Media Desktop Portal" }
    ],
    epitaphs: [
      { id: "ep-kz1", entity_id: "grave-kazaa-031", author_name: "KazaaLiteWarrior", content: "We used Kazaa Lite K++ just to strip out your 40 bundled spyware toolbars. What a chaotic era.", years_used: "2001-2005", candle_lit: true, status: "APPROVED", created_at: "2024-02-15T11:00:00Z" }
    ]
  },
  {
    id: "grave-turntable-032",
    slug: "turntable-fm",
    name: "Turntable.fm",
    tagline: "Be the DJ for your friends in a pixelated virtual lounge.",
    description: "Turntable.fm was an interactive social music service founded in 2011 by Billy Chasen and Seth Sternberg. Users gathered in virtual chat rooms with custom avatars and took turns as DJs, playing music while the crowd voted 'Awesome' (making avatars bob their heads) or 'Lame' (speeding up DJ rotation). Despite cult popularity among tech workers, exorbitant music licensing fees forced it offline in 2013.",
    category: "Streaming",
    status: "CONFIRMED_DEAD",
    status_reason: "Shut down on December 2, 2013 due to crushing music licensing costs and international expansion restrictions.",
    founded_year: 2011,
    death_date: "December 2, 2013",
    death_year: 2013,
    lifespan: "2011 — 2013",
    cause_of_death_summary: "High statutory royalty fees per streamed listener; blocked outside the United States due to licensing; pivot to live events couldn't save it.",
    cause_category: "Lack of Monetization",
    logo_url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=200&auto=format&fit=crop&q=80",
    hero_image_url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&auto=format&fit=crop&q=80",
    primary_domain: "turntable.fm",
    popularity_peak: "1 million users in its first month; iconic in Silicon Valley startups",
    peak_users: "1 Million",
    country: "United States",
    parent_company: "Stickybits Inc.",
    confidence_score: 100,
    candle_count: 2450,
    is_verified: true,
    verified_at: "2013-12-02T00:00:00Z",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    related_slugs: ["grooveshark", "rdio"],
    last_known_state: {
      website: { status_code: 301, state_desc: "Domain parked with revival notes.", final_url: "https://turntable.fm" },
      app: { store_status: "Defunct", state_desc: "None." },
      api: { endpoint_status: "410 Gone", state_desc: "Virtual audio mixer nodes offline." },
      community: { platform: "Discord", state_desc: "Communities moved to Discord music bots." },
      domain: { ownership: "Billy Chasen", state_desc: "Parked." }
    },
    final_moments: "On November 22, 2013, Billy Chasen published a blog post: 'Turntable.fm is shutting down on December 2.' He noted that music licensing made operating costs impossible without a massive subscription base.",
    timeline: [
      { id: "t-tt1", entity_id: "grave-turntable-032", year: 2011, date_str: "May 2011", title: "Billy Chasen Launches Turntable", description: "Created as a pivot from QR code app Stickybits; explodes virally on Twitter.", event_type: "LAUNCH", order_index: 1 },
      { id: "t-tt2", entity_id: "grave-turntable-032", year: 2011, date_str: "September 2011", title: "$7M Funding Round", description: "Union Square Ventures leads round as Silicon Valley works to Turntable rooms.", event_type: "MILESTONE", order_index: 2 },
      { id: "t-tt3", entity_id: "grave-turntable-032", year: 2013, date_str: "December 2, 2013", title: "Final DJ Set", description: "The avatars bob their heads one final time as the servers shut down.", event_type: "DISCONTINUED", order_index: 3 }
    ],
    evidence: [
      { id: "e-tt1", entity_id: "grave-turntable-032", source_name: "Turntable.fm Official Farewell", source_type: "Official Announcement", url: "https://blog.turntable.fm/post/67776495146/turntable-is-shutting-down", timestamp: "2013-11-22", evidence_type: "OFFICIAL_ANNOUNCEMENT", reliability: "VERY_HIGH", weight: 45, extracted_claim: "Turntable.fm confirms shutdown on December 2, 2013.", is_verified: true }
    ],
    successors: [
      { id: "s-tt1", entity_id: "grave-turntable-032", name: "JQBX & Discord Listen Along", relationship_type: "Spiritual Successor", description: "Integrated Spotify listening rooms inside Discord and web extensions.", url: "https://discord.com" }
    ],
    archives: [
      { id: "arc-tt1", entity_id: "grave-turntable-032", year: 2012, date_captured: "January 1, 2012", wayback_url: "https://web.archive.org/web/20120101000000*/turntable.fm", title: "Turntable Virtual Lounge View" }
    ],
    epitaphs: [
      { id: "ep-tt1", entity_id: "grave-turntable-032", author_name: "DjCatAvatar", content: "Headbobbing with 5 strangers at 2am to Japanese funk. The warmest room on the internet.", years_used: "2011-2013", candle_lit: true, status: "APPROVED", created_at: "2024-02-10T19:00:00Z" }
    ]
  },
  {
    id: "grave-meerkat-033",
    slug: "meerkat",
    name: "Meerkat",
    tagline: "The viral SXSW darling cut off by Twitter in 14 days.",
    description: "Meerkat was a live video streaming mobile app developed by Ben Rubin and Life On Air. Launched in February 2015, it became the breakout sensation of the South by Southwest (SXSW) festival. Users could tap a single button to stream video directly to their Twitter followers. Sensing an existential threat to its own upcoming Periscope app, Twitter abruptly cut off Meerkat's access to the Twitter Social Graph, starving it of distribution and killing it within a year.",
    category: "Streaming",
    status: "CONFIRMED_DEAD",
    status_reason: "Shut down on October 4, 2016 after Twitter revoked its social graph API access and launched rival Periscope.",
    founded_year: 2015,
    death_date: "October 4, 2016",
    death_year: 2016,
    lifespan: "2015 — 2016",
    cause_of_death_summary: "Platform dependency weaponized against it; Twitter disabled its access to followers just as SXSW began, then acquired and promoted Periscope.",
    cause_category: "Market Competition",
    logo_url: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=200&auto=format&fit=crop&q=80",
    hero_image_url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80",
    primary_domain: "meerkatapp.co",
    popularity_peak: "The undisputed hit of SXSW 2015; raised $14M in 3 weeks",
    peak_users: "2 Million",
    country: "Israel / United States",
    parent_company: "Life On Air, Inc.",
    confidence_score: 100,
    candle_count: 1890,
    is_verified: true,
    verified_at: "2016-10-04T00:00:00Z",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    related_slugs: ["periscope", "vine"],
    last_known_state: {
      website: { status_code: 404, state_desc: "Domain inactive.", final_url: "https://meerkatapp.co" },
      app: { store_status: "Delisted", state_desc: "Pulled from stores." },
      api: { endpoint_status: "410 Gone", state_desc: "RTMP ingest servers killed." },
      community: { platform: "Houseparty", state_desc: "Team pivoted to Houseparty, which was acquired by Epic Games (and later shut down too)." },
      domain: { ownership: "Life on Air", state_desc: "Expired." }
    },
    final_moments: "On March 13, 2015, on the opening day of SXSW, Twitter revoked Meerkat's access to its follower graph. Founders pivoted to Houseparty, and on October 4, 2016, Ben Rubin officially pulled Meerkat from the App Store.",
    timeline: [
      { id: "t-mk1", entity_id: "grave-meerkat-033", year: 2015, date_str: "February 27, 2015", title: "Meerkat Launches", description: "Ben Rubin quietly launches app on Product Hunt.", event_type: "LAUNCH", order_index: 1 },
      { id: "t-mk2", entity_id: "grave-meerkat-033", year: 2015, date_str: "March 13, 2015", title: "Twitter Revokes Graph", description: "Twitter cuts off Meerkat API access right as SXSW starts.", event_type: "DECLINE", order_index: 2 },
      { id: "t-mk3", entity_id: "grave-meerkat-033", year: 2016, date_str: "October 4, 2016", title: "Official App Removal", description: "Meerkat removed from App Store as team shifts 100% to Houseparty.", event_type: "DISCONTINUED", order_index: 3 }
    ],
    evidence: [
      { id: "e-mk1", entity_id: "grave-meerkat-033", source_name: "TechCrunch", source_type: "Reputable News", url: "https://techcrunch.com/2016/09/30/rip-meerkat/", timestamp: "2016-09-30", evidence_type: "REPUTABLE_REPORT", reliability: "VERY_HIGH", weight: 45, extracted_claim: "TechCrunch reports official death of Meerkat as founders pivot to Houseparty.", is_verified: true }
    ],
    successors: [
      { id: "s-mk1", entity_id: "grave-meerkat-033", name: "Houseparty", relationship_type: "Direct Successor", description: "The pivot created by the same team, later acquired by Epic Games for $35M.", url: "https://epicgames.com" }
    ],
    archives: [
      { id: "arc-mk1", entity_id: "grave-meerkat-033", year: 2015, date_captured: "March 20, 2015", wayback_url: "https://web.archive.org/web/20150320000000*/meerkatapp.co", title: "Meerkat Yellow Mascot Homepage" }
    ],
    epitaphs: [
      { id: "ep-mk1", entity_id: "grave-meerkat-033", author_name: "SXSW2015", content: "The ultimate cautionary tale of building your entire castle on someone else's API land.", years_used: "2015-2015", candle_lit: true, status: "APPROVED", created_at: "2024-02-16T14:00:00Z" }
    ]
  },
  {
    id: "grave-digg-034",
    slug: "digg-v4",
    name: "Digg (v4 Collapse)",
    tagline: "The front page of the internet destroyed in a single afternoon.",
    description: "Digg was a social news website founded in November 2004 by Kevin Rose, Owen Byrne, Ron Gorodetzky, and Jay Adelson. Users submitted web links and voted them 'Up' (dugg) or 'Down' (buried). In the mid-2000s, Digg was the undisputed king of internet traffic; getting the 'Digg Effect' would knock multi-million dollar servers offline. In August 2010, Digg launched its disastrous 'v4' redesign, favoring corporate publisher RSS feeds over user submissions, causing immediate mass exodus to Reddit.",
    category: "Communities",
    status: "ZOMBIE",
    status_reason: "Original user-driven social voting platform died in August 2010 during the v4 exodus; sold for parts ($500K) to Betaworks in 2012; operates today as a curated blog.",
    founded_year: 2004,
    death_date: "August 25, 2010",
    death_year: 2010,
    lifespan: "2004 — 2010 (Original Social Network)",
    cause_of_death_summary: "The hated 'v4' redesign stripped power from users, eliminated the 'bury' button, and auto-submitted sponsor RSS feeds; Reddit capitalized by welcoming fleeing users.",
    cause_category: "Community Collapse",
    logo_url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&auto=format&fit=crop&q=80",
    hero_image_url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop&q=80",
    primary_domain: "digg.com",
    popularity_peak: "Over 40 million monthly unique visitors in 2008; offered $200M buyout by Google",
    peak_users: "40 Million",
    country: "United States",
    parent_company: "Betaworks / BuySellAds",
    confidence_score: 95,
    candle_count: 5120,
    is_verified: true,
    verified_at: "2010-08-25T00:00:00Z",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    related_slugs: ["delicious", "stumbleupon"],
    last_known_state: {
      website: { status_code: 200, state_desc: "Operates as an editorial news aggregation blog without public voting algorithms.", final_url: "https://digg.com" },
      app: { store_status: "Active Zombie", state_desc: "RSS news reader app." },
      api: { endpoint_status: "Defunct", state_desc: "Original v1-v3 social APIs dead." },
      community: { platform: "Reddit", state_desc: "100% of the active community migrated to Reddit in August 2010." },
      domain: { ownership: "BuySellAds", state_desc: "Editorial blog." }
    },
    final_moments: "On August 25, 2010, Digg deployed v4. The front page immediately filled with sponsored corporate posts. Users rebelled by upvoting Reddit links to the top of Digg, then abandoned the site en masse. Kevin Rose resigned, and in July 2012, Digg's domain and assets were sold for a measly $500,000.",
    timeline: [
      { id: "t-dg1", entity_id: "grave-digg-034", year: 2004, date_str: "November 2004", title: "Kevin Rose Launches Digg", description: "Created for $1,000 as a community voting portal.", event_type: "LAUNCH", order_index: 1 },
      { id: "t-dg2", entity_id: "grave-digg-034", year: 2007, date_str: "May 1, 2007", title: "The AACS Encryption Revolt", description: "Users flood the front page with HD DVD processing key, defying corporate cease-and-desist orders.", event_type: "MILESTONE", order_index: 2 },
      { id: "t-dg3", entity_id: "grave-digg-034", year: 2010, date_str: "August 25, 2010", title: "Version 4 Catastrophe", description: "V4 launches; site traffic drops 50% in weeks as users flee to Reddit.", event_type: "DECLINE", order_index: 3 },
      { id: "t-dg4", entity_id: "grave-digg-034", year: 2012, date_str: "July 12, 2012", title: "Sold for $500,000", description: "Betaworks acquires brand for less than a San Francisco condo.", event_type: "DISCONTINUED", order_index: 4 }
    ],
    evidence: [
      { id: "e-dg1", entity_id: "grave-digg-034", source_name: "Wall Street Journal", source_type: "Reputable News", url: "https://www.wsj.com/articles/SB10001424052702304373804577523233827827820", timestamp: "2012-07-12", evidence_type: "REPUTABLE_REPORT", reliability: "VERY_HIGH", weight: 45, extracted_claim: "Digg sold in pieces for $500,000 to Betaworks after losing audience to Reddit.", is_verified: true }
    ],
    successors: [
      { id: "s-dg1", entity_id: "grave-digg-034", name: "Reddit", relationship_type: "Direct Successor", description: "Reddit received 100% of the displaced Digg community, permanently becoming the front page of the internet.", url: "https://reddit.com" }
    ],
    archives: [
      { id: "arc-dg1", entity_id: "grave-digg-034", year: 2006, date_captured: "October 1, 2006", wayback_url: "https://web.archive.org/web/20061001000000*/digg.com", title: "Digg v3 Golden Era" }
    ],
    epitaphs: [
      { id: "ep-dg1", entity_id: "grave-digg-034", author_name: "DuggPowerUser", content: "09 F9 11 02 9D 74 E3 5B D8 41 56 C5 63 56 88 C0. Never forget when we broke the internet to defend freedom.", years_used: "2005-2010", candle_lit: true, status: "APPROVED", created_at: "2024-01-19T22:00:00Z" }
    ]
  },
  {
    id: "grave-heardle-035",
    slug: "heardle",
    name: "Heardle",
    tagline: "Name that tune in 1 second. Acquired and silenced by Spotify in 10 months.",
    description: "Heardle was a daily music trivia guessing game created in early 2022 inspired by the viral Wordle phenomenon. Players listened to 1 second of an intro, unlocking an additional second with each incorrect guess. Millions of music fans played every morning. Spotify acquired Heardle in July 2022 to promote music discovery, but failed to maintain the experience and permanently killed it on May 5, 2023.",
    category: "Gaming",
    status: "CONFIRMED_DEAD",
    status_reason: "Killed by Spotify on May 5, 2023 less than a year after acquisition.",
    founded_year: 2022,
    death_date: "May 5, 2023",
    death_year: 2023,
    lifespan: "2022 — 2023",
    cause_of_death_summary: "Acquired by Spotify; botched regional licensing restricted half of previous players; Spotify decided to focus on other internal audio discovery projects.",
    cause_category: "Acquired & Discontinued",
    logo_url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=200&auto=format&fit=crop&q=80",
    hero_image_url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&auto=format&fit=crop&q=80",
    primary_domain: "heardle.app",
    popularity_peak: "Over 40 million monthly visits during spring 2022 viral peak",
    peak_users: "40 Million",
    country: "United Kingdom",
    parent_company: "Spotify AB",
    confidence_score: 100,
    candle_count: 1750,
    is_verified: true,
    verified_at: "2023-05-05T00:00:00Z",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
    related_slugs: ["vine", "flappy-bird"],
    last_known_state: {
      website: { status_code: 404, state_desc: "Redirects to generic Spotify app or shows sunset splash.", final_url: "https://spotify.com" },
      app: { store_status: "None", state_desc: "Web-based puzzle." },
      api: { endpoint_status: "410 Gone", state_desc: "Audio snippet streaming disabled." },
      community: { platform: "Reddit", state_desc: "Fans created open-source clones like HeardleDecades." },
      domain: { ownership: "Spotify", state_desc: "Parked." }
    },
    final_moments: "On April 14, 2023, visitors to Heardle saw a banner: 'Thanks for playing Heardle. The game will be shutting down on May 5.' On May 5, Spotify switched off the daily puzzle, closing a 10-month corporate acquisition tragedy.",
    timeline: [
      { id: "t-hd1", entity_id: "grave-heardle-035", year: 2022, date_str: "February 2022", title: "Independent Creator Launches Heardle", description: "Viral sensation sweeps social media as daily audio puzzle.", event_type: "LAUNCH", order_index: 1 },
      { id: "t-hd2", entity_id: "grave-heardle-035", year: 2022, date_str: "July 12, 2022", title: "Spotify Acquisition", description: "Spotify buys Heardle for undisclosed sum.", event_type: "ACQUISITION", order_index: 2 },
      { id: "t-hd3", entity_id: "grave-heardle-035", year: 2023, date_str: "May 5, 2023", title: "Spotify Kills It", description: "Game taken offline permanently.", event_type: "DISCONTINUED", order_index: 3 }
    ],
    evidence: [
      { id: "e-hd1", entity_id: "grave-heardle-035", source_name: "Variety", source_type: "Reputable News", url: "https://variety.com/2023/digital/news/spotify-shutting-down-heardle-music-trivia-game-1235583569/", timestamp: "2023-04-14", evidence_type: "REPUTABLE_REPORT", reliability: "VERY_HIGH", weight: 45, extracted_claim: "Variety reports Spotify is shutting down Heardle less than one year after acquisition.", is_verified: true }
    ],
    successors: [
      { id: "s-hd1", entity_id: "grave-heardle-035", name: "SongTrivia2", relationship_type: "Spiritual Successor", description: "Fan-made alternative trivia game.", url: "https://songtrivia2.io" }
    ],
    archives: [
      { id: "arc-hd1", entity_id: "grave-heardle-035", year: 2022, date_captured: "March 1, 2022", wayback_url: "https://web.archive.org/web/20220301000000*/heardle.app", title: "Original Heardle Clean Interface" }
    ],
    epitaphs: [
      { id: "ep-hd1", entity_id: "grave-heardle-035", author_name: "DailyGuesser", content: "Guessing Fleetwood Mac from 0.8 seconds of guitar drum snare was the peak of my morning coffee.", years_used: "2022-2023", candle_lit: true, status: "APPROVED", created_at: "2024-01-13T09:30:00Z" }
    ]
  }
];

export const ALL_SEED_ENTITIES: GraveEntity[] = 
  (graveyardData.entities as unknown as GraveEntity[]) || [...BATCH_1, ...ADDITIONAL_ENTITIES, ...BATCH_3_ENTITIES];
