export interface RivalryItem {
  id: string;
  slugA: string;
  slugB: string;
  nameA: string;
  nameB: string;
  category: string;
  lifespanA: string;
  lifespanB: string;
  statusA: string;
  statusB: string;
  taglineA: string;
  taglineB: string;
  peakScaleA: string;
  peakScaleB: string;
  fatalFlawA: string;
  survivalFactorB: string;
  postMortemVerdict: string;
  lessons: string[];
}

export const CURATED_RIVALRIES: RivalryItem[] = [
  {
    id: 'vine-vs-tiktok',
    slugA: 'vine',
    slugB: 'tiktok',
    nameA: 'Vine',
    nameB: 'TikTok',
    category: 'Short-Form Video',
    lifespanA: '2013 — 2017',
    lifespanB: '2016 — Present',
    statusA: 'CONFIRMED DEAD',
    statusB: 'ACTIVE (DOMINANT)',
    taglineA: 'The 6-second cultural comedy engine of early mobile video.',
    taglineB: 'The algorithmic hyper-personalized entertainment feed.',
    peakScaleA: '200M monthly active loops; billions of video loops.',
    peakScaleB: '1.5B+ global monthly active users.',
    fatalFlawA: 'Refused to build creator monetization or revenue sharing; Twitter neglected product iteration, causing top creators to defect to YouTube and Instagram.',
    survivalFactorB: 'Built an unstoppable recommendation algorithm (For You page), integrated copyright-cleared music directly, and launched multimillion-dollar creator funds.',
    postMortemVerdict: 'Vine invented the modern short-form loop, but TikTok recognized that creators require compensation and viewers require algorithmic hyper-personalization rather than chronological social graphs.',
    lessons: [
      'Community love does not retain creators without financial incentives.',
      'Content constraints (6 seconds) foster incredible early creativity but eventually restrict format evolution.',
      'Corporate parent neglect (Twitter) can suffocate a revolutionary product in hyper-competitive markets.'
    ]
  },
  {
    id: 'myspace-vs-facebook',
    slugA: 'myspace',
    slugB: 'facebook',
    nameA: 'MySpace',
    nameB: 'Facebook',
    category: 'Social Networking',
    lifespanA: '2003 — 2008 (Golden Era)',
    lifespanB: '2004 — Present',
    statusA: 'ZOMBIE SERVICE',
    statusB: 'ACTIVE (META)',
    taglineA: 'The customized teenage clubhouse and indie music revolution.',
    taglineB: 'The verified, standardized collegiate social directory.',
    peakScaleA: '75.9M monthly US visitors (surpassed Google in 2006).',
    peakScaleB: '3B+ monthly active users worldwide.',
    fatalFlawA: 'Allowed chaotic, unvalidated custom HTML/CSS and autoplay music that broke pages; plagued by spam, phishing, and slow page load times after the News Corp buyout.',
    survivalFactorB: 'Enforced clean, standardized typography and UI; relied on real-name identity verification; maintained strict infrastructure speed and reliability.',
    postMortemVerdict: 'Freedom of expression gave MySpace its initial meteoric rise, but chaos without guardrails destroyed its usability. Facebook won by being dependable, clean, and fast.',
    lessons: [
      'Unrestricted customization degrades user experience and creates technical debt.',
      'Acquisition by traditional media conglomerates often imposes short-term ad revenue quotas at the expense of product quality.',
      'Simplicity and identity trust beat novelty in mass-market communication.'
    ]
  },
  {
    id: 'napster-vs-spotify',
    slugA: 'napster',
    slugB: 'spotify',
    nameA: 'Napster',
    nameB: 'Spotify',
    category: 'Digital Music Distribution',
    lifespanA: '1999 — 2001',
    lifespanB: '2008 — Present',
    statusA: 'CONFIRMED DEAD (ORIGINAL P2P)',
    statusB: 'ACTIVE (MARKET LEADER)',
    taglineA: 'The peer-to-peer MP3 revolution that broke the music industry monopoly.',
    taglineB: 'The licensed streaming jukebox that rebuilt the music industry.',
    peakScaleA: '80M registered users exchanging millions of MP3s concurrently.',
    peakScaleB: '600M+ active listeners, 230M+ paying subscribers.',
    fatalFlawA: 'Operated entirely outside legal copyright frameworks; centralized index servers made it an easy target for federal injunctions from Metallica and the RIAA.',
    survivalFactorB: 'Secured legitimate licensing agreements with major record labels (Universal, Sony, Warner) by offering equity stakes and guaranteed royalty pools.',
    postMortemVerdict: 'Napster proved that humans wanted the celestial jukebox—every song ever recorded, instantly searchable. Spotify solved the economics that made that dream legally sustainable.',
    lessons: [
      'Disruptive technology proves consumer appetite; institutional diplomacy builds durable longevity.',
      'Centralized servers in a decentralized file protocol create single points of legal failure.',
      'Frictionless access almost always defeats ownership when priced reasonably.'
    ]
  },
  {
    id: 'rdio-vs-spotify',
    slugA: 'rdio',
    slugB: 'spotify',
    nameA: 'Rdio',
    nameB: 'Spotify',
    category: 'Streaming Music',
    lifespanA: '2010 — 2015',
    lifespanB: '2008 — Present',
    statusA: 'BANKRUPT & DISCONTINUED',
    statusB: 'ACTIVE',
    taglineA: 'The impeccably designed, typography-first social music player.',
    taglineB: 'The relentless freemium streaming distribution machine.',
    peakScaleA: 'Under 10M registered listeners.',
    peakScaleB: 'Dominant global streaming platform.',
    fatalFlawA: 'Insisted on a strict $10/month paywall without an ad-supported free tier; ran out of runway while burning licensing fees before achieving user density.',
    survivalFactorB: 'Offered an irresistible free tier with audio ads that captured millions of university students who later converted into lifetime premium subscribers.',
    postMortemVerdict: 'Rdio was universally revered by designers and audiophiles, but Spotify proved that distribution and freemium customer acquisition trump aesthetic perfection.',
    lessons: [
      'A better product does not win without a superior customer acquisition engine.',
      'In high-fixed-cost licensing industries, scale is the only moat.',
      'Freemium acts as a protective fortress against paid-only competitors.'
    ]
  },
  {
    id: 'google-reader-vs-feedly',
    slugA: 'google-reader',
    slugB: 'feedly',
    nameA: 'Google Reader',
    nameB: 'Feedly',
    category: 'RSS & Content Syndication',
    lifespanA: '2005 — 2013',
    lifespanB: '2008 — Present',
    statusA: 'DISCONTINUED BY GOOGLE',
    statusB: 'ACTIVE & PROFITABLE',
    taglineA: 'The indispensable open-web RSS consumption engine.',
    taglineB: 'The indie RSS successor turned enterprise intelligence aggregator.',
    peakScaleA: 'Estimated 30M+ active power users and journalists.',
    peakScaleB: '15M+ users, profitable self-sustaining SaaS.',
    fatalFlawA: 'Killed during Google’s "spring cleaning" to forcibly migrate users to Google+; generated no direct advertising revenue inside Google’s corporate structure.',
    survivalFactorB: 'Built a 1-to-1 clone of the Google Reader API within 48 hours of the shutdown notice, absorbed 3 million displaced users in a week, and built sustainable paid tiers.',
    postMortemVerdict: 'Google treated RSS as an obsolete artifact of the decentralized web, but Feedly demonstrated that power users will eagerly pay for reliable curation infrastructure.',
    lessons: [
      'Never rely on a free utility from an ad-driven conglomerate whose priorities may shift.',
      'A giant’s sunset is an agile startup’s greatest customer acquisition event.',
      'Direct user subscription revenue protects software from arbitrary executive termination.'
    ]
  },
  {
    id: 'club-penguin-vs-roblox',
    slugA: 'club-penguin',
    slugB: 'roblox',
    nameA: 'Club Penguin',
    nameB: 'Roblox',
    category: 'Virtual Worlds & Gaming',
    lifespanA: '2005 — 2017',
    lifespanB: '2006 — Present',
    statusA: 'DISCONTINUED BY DISNEY',
    statusB: 'ACTIVE (PUBLIC META-PLATFORM)',
    taglineA: 'The safe 2D snow-covered virtual community for kids.',
    taglineB: 'The 3D multiplayer metaverse powered by user creators.',
    peakScaleA: '200M+ created penguin avatars.',
    peakScaleB: '70M+ daily active players, billions in developer payouts.',
    fatalFlawA: 'Built entirely on Adobe Flash; failed to transition smoothly to modern mobile apps; content was limited to whatever Disney’s internal developers drew and programmed.',
    survivalFactorB: 'Turned users into developers by providing the Roblox Studio engine and Lua scripting; players created millions of diverse games, creating infinite replayability.',
    postMortemVerdict: 'Club Penguin was a lovingly handcrafted theme park that melted when its underlying tech (Flash) died. Roblox built an open playground where the visitors build the rides.',
    lessons: [
      'User-generated content (UGC) always scales faster than internal studio content.',
      'Relying on proprietary browser plugins (Flash) is fatal when open web standards shift.',
      'Incentivizing community developers creates unstoppable ecosystem momentum.'
    ]
  }
];
