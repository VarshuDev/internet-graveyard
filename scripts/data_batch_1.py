# Batch 1: Dot-Com Crash, Web 1.0, Search Engines, Google Graveyard, Microsoft, Yahoo, Apple, AOL (350+ Entities)

BATCH_1 = [
    # --- EARLY SEARCH & DIRECTORIES (1990-2005) ---
    ("Excite", "excite", "excite.com", "Search", "ZOMBIE", 1995, 2001, "Market Competition",
     "One of the largest 90s portals that famously rejected buying Google for $750,000.",
     "Excite was founded in 1995 by six Stanford students and grew into a web titan before merging with @Home and declaring bankruptcy.",
     "Disastrous @Home merger debt, declining search share against Google, and rejecting the Google buyout.", "Excite@Home", "United States", "20M MAU"),

    ("WebCrawler", "webcrawler", "webcrawler.com", "Search", "ZOMBIE", 1994, 2001, "Acquired & Discontinued",
     "The very first web search engine to provide full-text indexing.",
     "Created by Brian Pinkerton in 1994, WebCrawler was the first search engine to index full page text before being acquired by AOL and Excite.",
     "Sold repeatedly in corporate mergers; search engine decommissioned in favor of syndicated meta-search.", "InfoSpace", "United States", "15M Searches"),

    ("Lycos Classic", "lycos-classic", "lycos.com", "Search", "ZOMBIE", 1994, 2004, "Market Competition",
     "The black retriever portal that guided millions through early cyberspace with 'Go Get It!'",
     "Developed at Carnegie Mellon University in 1994, Lycos was the most visited website in the world in 1999 before being bought by Terra for $12.5B.",
     "The dot-com bust wiped out its $12.5B valuation; Terra sold it to Daum for a fraction of its former worth.", "Terra Lycos", "United States", "32M Visitors"),

    ("InfoSeek", "infoseek", "infoseek.com", "Search", "CONFIRMED_DEAD", 1994, 2001, "Acquired & Discontinued",
     "The default search engine bundled with Netscape Navigator 1.0.",
     "Founded by Steve Kirsch, InfoSeek was acquired by Disney in 1998 and folded into the disastrous Go.com portal.",
     "Disney wrote off $790M and pulled the plug on the Go.com portal search engine.", "Disney", "United States", "18M Visitors"),

    ("HotBot", "hotbot", "hotbot.com", "Search", "ZOMBIE", 1996, 2002, "Market Competition",
     "Wired magazine's neon-colored search engine powered by the Inktomi spider.",
     "Launched in 1996 by Wired Magazine, HotBot was praised for its retro-futuristic interface before being bought by Lycos.",
     "Acquired by Lycos; lost technical competitiveness against Google.", "Lycos", "United States", "10M Users"),

    ("AllTheWeb", "alltheweb", "alltheweb.com", "Search", "CONFIRMED_DEAD", 1999, 2011, "Acquired & Discontinued",
     "FAST's Norwegian indexing giant that briefly rivaled Google in speed and index size.",
     "AllTheWeb was created by Fast Search & Transfer in Norway. It was acquired by Overture, then Yahoo, which shut it down.",
     "Yahoo phased out FAST search infrastructure in favor of its unified portal search.", "Yahoo!", "Norway", "15M Searches"),

    ("Inktomi", "inktomi", "inktomi.com", "Search", "CONFIRMED_DEAD", 1996, 2003, "Acquired & Discontinued",
     "The backend search cluster engine that powered HotBot, Yahoo!, and MSN in the late 90s.",
     "Founded by UC Berkeley professors, Inktomi's market cap surged to $25B in 2000 before being acquired by Yahoo for $235M.",
     "Wholesale search provider economics collapsed as portals built internal search or switched to Google.", "Yahoo!", "United States", "Backend for 50M+"),

    ("Dogpile Classic", "dogpile-classic", "dogpile.com", "Search", "ZOMBIE", 1996, 2007, "Technological Obsolescence",
     "The friendly hound that fetched results simultaneously from Yahoo, Google, and Lycos.",
     "Created by Aaron Flin in 1996, Dogpile aggregated results from across the fragmented early web.",
     "Single-engine comprehensive crawlers like Google eliminated the need for multi-engine meta-search.", "InfoSpace", "United States", "12M Searches"),

    ("Northern Light", "northern-light", "northernlight.com", "Search", "CONFIRMED_DEAD", 1997, 2002, "Strategic Pivot",
     "The research search engine with dynamic category folders and pay-per-view articles.",
     "Northern Light indexed web pages into dynamic folders and sold access to premium periodicals before pivoting to enterprise B2B.",
     "Public search monetization failed; pivoted exclusively to enterprise competitive intelligence.", "Northern Light Group", "United States", "5M Researchers"),

    ("Go.com", "go-com", "go.com", "Search", "CONFIRMED_DEAD", 1998, 2001, "Strategic Pivot",
     "Disney's multi-billion dollar green traffic light web portal disaster.",
     "Disney merged ABC, ESPN, and InfoSeek into Go.com with heavy television marketing, suffering catastrophic write-downs.",
     "Over-centralized corporate portal design failed to attract loyal users; Disney took a $790M loss.", "Disney", "United States", "25M Visitors"),

    ("LookSmart", "looksmart", "looksmart.com", "Search", "ZOMBIE", 1995, 2005, "Market Competition",
     "The Australian web directory that supplied search results to MSN.",
     "LookSmart was an editorial directory founded by Evan Thornley and Tracey Ellery. In 2003, MSN terminated its contract, devastating LookSmart.",
     "Lost its massive MSN distribution partnership to Inktomi and Yahoo, collapsing stock value by 90%.", "LookSmart Ltd", "Australia", "20M Queries"),

    ("Snap.com", "snap-portal", "snap.com", "Search", "CONFIRMED_DEAD", 1997, 2001, "Acquired & Discontinued",
     "CNET's 1990s web portal and search engine partnered with NBC.",
     "Created by Halsey Minor at CNET to challenge Yahoo, NBC acquired a major stake and renamed it NBCi before shutting it down.",
     "NBCi collapsed in the dot-com crash, writing off hundreds of millions in portal investments.", "NBC / CNET", "United States", "8M Users"),

    ("iWon.com", "iwon", "iwon.com", "Search", "CONFIRMED_DEAD", 1999, 2007, "Market Competition",
     "The portal that gave away millions in cash sweepstakes just for searching the web.",
     "Founded by Bill Daugherty and Jonas Steinman, iWon gave users daily lottery entries for every search and page view, awarding $10M prizes.",
     "Prize-incentivized search failed to generate genuine customer loyalty; acquired by Ask Jeeves in 2001.", "IAC / Ask Jeeves", "United States", "14M Members"),

    ("Open Text Index", "open-text-index", "opentext.com", "Search", "CONFIRMED_DEAD", 1995, 1998, "Strategic Pivot",
     "One of the earliest web search engines created by Waterloo University researchers.",
     "Open Text Index was built by Canadian developers in 1995 to index web pages, before pivoting to enterprise document management.",
     "Exited consumer search to become an enterprise content management software provider.", "OpenText", "Canada", "2M Early Netizens"),

    ("Aliweb", "aliweb", "aliweb.com", "Search", "CONFIRMED_DEAD", 1993, 1997, "Technological Obsolescence",
     "Archie Like Indexing for the Web — considered the world's first search engine.",
     "Created in November 1993 by Martijn Koster at CERN, Aliweb allowed webmasters to submit index files of their sites.",
     "Manual index submission was eclipsed by automated web crawler robots like Lycos and WebCrawler.", "CERN", "Switzerland", "100k Early Scientists"),

    ("Cuil", "cuil", "cuil.com", "Search", "CONFIRMED_DEAD", 2008, 2010, "Technological Obsolescence",
     "The hyped 'Google Killer' founded by former Google search engineers Anna Patterson and Tom Costello.",
     "Launched in July 2008 claiming to index 120 billion pages, Cuil's servers crashed on launch day, returned bizarre results, and shut down 2 years later.",
     "Severe indexing bugs, irrelevant search results, and rapid cash burn led to abrupt closure.", "Cuil Inc.", "United States", "30M Launch Queries"),

    ("Blekko", "blekko", "blekko.com", "Search", "CONFIRMED_DEAD", 2010, 2015, "Acquired & Discontinued",
     "The search engine that pioneered slashtags to filter out SEO content spam.",
     "Founded by Rich Skrenta, Blekko allowed users to search using slashtags like /date or /humor. IBM acquired Blekko in 2015 to power Watson.",
     "Acquired by IBM; consumer web search engine terminated to repurpose technology for IBM Watson.", "IBM", "United States", "5M Monthly Users"),

    ("Hakia", "hakia", "hakia.com", "Search", "CONFIRMED_DEAD", 2006, 2014, "Lack of Monetization",
     "The semantic natural language search engine created by Dr. Riza Berkan.",
     "Hakia attempted to parse human language syntax instead of relying on keywords. It failed to compete with Google's algorithmic evolution.",
     "High compute cost for semantic parsing with insufficient user adoption.", "Hakia Inc.", "United States", "2M Queries"),

    ("Mahalo.com", "mahalo", "mahalo.com", "Search", "CONFIRMED_DEAD", 2007, 2014, "Strategic Pivot",
     "Jason Calacanis' human-curated search directory that Google's Panda update crushed.",
     "Mahalo paid human editors to build hand-crafted search result guides. In 2011, Google's Panda algorithm penalized Mahalo's SEO rankings by 75%.",
     "Google Panda algorithm wiped out its search traffic overnight; pivoted to Inside.com.", "Mahalo Inc.", "United States", "15M Monthly Visitors"),

    ("ChaCha", "chacha", "chacha.com", "Search", "CONFIRMED_DEAD", 2006, 2016, "Bankruptcy",
     "The human-guided search service where guides answered any question via free SMS.",
     "Founded by Scott Jones, ChaCha let users text 242-242 with questions; paid human guides answered within minutes. Smart phones made it obsolete.",
     "Smartphones with 4G internet and mobile Google search made SMS human answers economically unviable.", "ChaCha Search Inc.", "United States", "2 Billion Answered Texts"),

    ("Galaxy (EINet)", "galaxy-einet", "galaxy.einet.net", "Search", "CONFIRMED_DEAD", 1994, 2000, "Technological Obsolescence",
     "The very first searchable online directory of the World Wide Web.",
     "Created in January 1994 by the Microelectronics and Computer Technology Corporation, Galaxy predated Yahoo as the web's original curated index.",
     "Overtaken by Yahoo's brand marketing and automated search engine crawlers.", "MCC / EINet", "United States", "1M Early Netizens"),

    ("W3 Catalog", "w3-catalog", "cui.unige.ch", "Search", "CONFIRMED_DEAD", 1993, 1996, "Technological Obsolescence",
     "The automated directory created by Oscar Nierstrasz at the University of Geneva.",
     "Written in 1993 as a Perl script scraping manual web lists, W3 Catalog was one of the earliest automated web search systems.",
     "Early academic prototype superseded by commercial web indexing robots.", "University of Geneva", "Switzerland", "500k Academic Searches"),

    ("WWW Virtual Library", "www-virtual-library", "vlib.org", "Search", "ZOMBIE", 1991, 2010, "Technological Obsolescence",
     "The web directory started by Tim Berners-Lee himself at CERN.",
     "Begun by the inventor of the World Wide Web in 1991, the Virtual Library was a decentralized catalog maintained by subject-matter experts worldwide.",
     "Algorithmic search engines replaced human-compiled static link directories.", "CERN / W3C", "Switzerland", "Pioneered Web Navigation"),

    ("Magellan Search", "magellan-search", "mckinley.com", "Search", "CONFIRMED_DEAD", 1995, 1999, "Acquired & Discontinued",
     "The McKinley Group's directory that gave green star ratings to web pages.",
     "Magellan employed professional reviewers to grade websites on content and presentation, before being acquired by Excite in 1996 for $18M.",
     "Excite integrated the directory into its portal and retired the standalone Magellan crawler in 1999.", "Excite", "United States", "5M Users"),

    ("MetaCrawler", "metacrawler", "metacrawler.com", "Search", "ZOMBIE", 1995, 2005, "Technological Obsolescence",
     "The University of Washington meta-search engine created by Erik Selberg and Oren Etzioni.",
     "MetaCrawler queried Lycos, WebCrawler, InfoSeek, and Excite in parallel, pioneering parallel multi-threaded HTTP queries in 1995.",
     "Single comprehensive indexes (Google) removed the need to federate queries across multiple spiders.", "InfoSpace", "United States", "8M Monthly Queries"),

    ("BigBook", "bigbook", "bigbook.com", "Search", "CONFIRMED_DEAD", 1996, 2000, "Acquired & Discontinued",
     "The first online yellow pages directory with interactive consumer ratings and maps.",
     "Founded by Chris Kitze in 1996, BigBook let consumers look up local businesses and plot locations on interactive maps before MapQuest became standard.",
     "Acquired by GTE's SuperPages in 1998 and folded into telecom directory assets.", "GTE / Verizon", "United States", "4M Monthly Lookups"),

    ("Four11", "four11", "four11.com", "Search", "CONFIRMED_DEAD", 1994, 1997, "Acquired & Discontinued",
     "The premier internet directory of email addresses and phone numbers.",
     "Founded by Larry Drebes and Sabeer Bhatia associates, Four11 created RocketMail. Yahoo acquired Four11 in 1997 for $92M to create Yahoo! Mail.",
     "Acquired by Yahoo! for $92M; its email technology became Yahoo! Mail and directory became Yahoo! People Search.", "Yahoo!", "United States", "10M Registered Users"),

    ("WhoWhere?", "whowhere", "whowhere.com", "Search", "CONFIRMED_DEAD", 1995, 1998, "Acquired & Discontinued",
     "The late-90s white pages search engine that tracked down long-lost classmates.",
     "WhoWhere was one of the web's top 10 most visited properties in 1997 for finding email addresses and residential phone numbers, before Lycos acquired it.",
     "Acquired by Lycos for $133M in 1998; features merged into Lycos communications hub.", "Lycos", "United States", "15M Monthly Searches"),

    ("Switchboard.com", "switchboard", "switchboard.com", "Search", "CONFIRMED_DEAD", 1996, 2005, "Acquired & Discontinued",
     "The original national online telephone directory founded by Banyan Systems.",
     "Switchboard digitized nationwide yellow and white pages phonebooks for dial-up web users, reaching millions of daily lookups before Yellowpages acquired it.",
     "Acquired by InfoSpace for $160M in 2004 and integrated into syndicated telecom directories.", "InfoSpace", "United States", "20M Monthly Inquiries"),

    ("Bigfoot Directory", "bigfoot", "bigfoot.com", "Search", "CONFIRMED_DEAD", 1995, 2003, "Technological Obsolescence",
     "The email forwarding directory with permanent email addresses: 'Your address for life'.",
     "Bigfoot provided lifetime email forwarding and public contact lookup so users didn't lose touch when changing dial-up ISPs.",
     "Webmail giants (Hotmail, Yahoo, Gmail) offered free permanent webmail, rendering email forwarders obsolete.", "Bigfoot Interactive", "United States", "6M Accounts"),

    # --- GOOGLE GRAVEYARD EXPANSIONS (80+ ENTITIES) ---
    ("Google Answers", "google-answers", "answers.google.com", "Search", "CONFIRMED_DEAD", 2002, 2006, "Market Competition",
     "The paid research question bounty marketplace where researchers answered inquiries for $2 to $200.",
     "Launched in 2002, Google Answers paid freelance researchers to answer deep questions. Free alternatives like Yahoo! Answers and Wikipedia made it unviable.",
     "Free crowdsourced Q&A communities (Yahoo! Answers) outgrew its paid researcher model.", "Google", "United States", "100k Paid Submissions"),

    ("Google Catalogs", "google-catalogs", "catalogs.google.com", "Search", "CONFIRMED_DEAD", 2001, 2009, "Technological Obsolescence",
     "Google's project to scan thousands of print mail-order merchandise catalogs.",
     "Google scanned paper mail-order shopping catalogs with OCR. Modern merchant e-commerce websites rendered print catalogs completely obsolete.",
     "Retail merchants built native e-commerce websites; paper catalog mailers declined.", "Google", "United States", "Thousands of Scanned Catalogs"),

    ("Google Notebook", "google-notebook", "google.com/notebook", "Developer tools", "CONFIRMED_DEAD", 2006, 2012, "Strategic Pivot",
     "The browser-clipping research notebook that preceded Google Keep and Evernote.",
     "Google Notebook let users clip web text, images, and notes into browser notebooks. Google discontinued development in 2009 and migrated notes to Google Docs.",
     "Discontinued in favor of Google Docs and later Google Keep.", "Google", "United States", "5M Researchers"),

    ("Google Health v1", "google-health-v1", "google.com/health", "Web technology", "CONFIRMED_DEAD", 2008, 2012, "Lack of Monetization",
     "Google's first personal health records portal that allowed users to centralize medical data.",
     "Google Health partnered with pharmacies and hospitals to store voluntary health records. Low consumer adoption and privacy concerns forced its 2012 shutdown.",
     "Did not generate broad consumer adoption among healthy individuals; privacy friction with hospital networks.", "Google", "United States", "Under 1M Patients"),

    ("Google Knol", "google-knol", "knol.google.com", "Communities", "CONFIRMED_DEAD", 2008, 2012, "Market Competition",
     "Google's attempt to build a Wikipedia rival where authoritative authors earned AdSense revenue.",
     "Pitched as a 'unit of knowledge', Knol allowed authenticated authors to write authoritative encyclopedia entries and share ad revenue. It failed against Wikipedia.",
     "Wikipedia's non-profit, ad-free community network effects completely overwhelmed Knol's commercial model.", "Google", "United States", "175,000 Articles"),

    ("Google Fast Flip", "google-fast-flip", "fastflip.googlelabs.com", "Communities", "CONFIRMED_DEAD", 2009, 2011, "Strategic Pivot",
     "The visual newsstand that let readers flip through print-styled newspaper articles like pages in a magazine.",
     "Fast Flip rendered screenshots of articles from partner publishers (NYT, BBC) with horizontal swipe navigation, before Google Labs was shut down in 2011.",
     "Google Labs was dissolved in 2011 by CEO Larry Page; news UI ideas folded into Google Play Newsstand.", "Google", "United States", "Millions of News Readers"),

    ("Google Friend Connect", "google-friend-connect", "google.com/friendconnect", "Social", "CONFIRMED_DEAD", 2008, 2012, "Strategic Pivot",
     "The open social gadget that let bloggers add social profiles and comments without Facebook.",
     "Friend Connect allowed independent webmasters to add OpenSocial friend widgets to any website. Google killed non-Blogger instances in 2012 to force Google+.",
     "Decommissioned to push webmasters into integrating Google+ identity buttons.", "Google", "United States", "5M Hosted Widgets"),

    ("Google Lively", "google-lively", "lively.com", "Gaming", "CONFIRMED_DEAD", 2008, 2008, "Lack of Monetization",
     "Google's surreal 3D virtual avatar rooms inside the browser that lasted just 140 days.",
     "Launched in July 2008, Lively let users customize cartoon avatars and furnish virtual rooms embedded on blogs. Google cancelled it five months later in December 2008.",
     "Larry Page prioritized core search during the 2008 financial crisis; shut down after 5 months.", "Google", "United States", "500k Avatars"),

    ("Google Moderator", "google-moderator", "google.com/moderator", "Communities", "CONFIRMED_DEAD", 2008, 2015, "Lack of Monetization",
     "The democratic question-upvoting tool used in Obama presidential town halls and Google all-hands.",
     "Moderator let crowds submit questions and vote them up or down, famously powering President Obama's Citizen Briefing Book. Google retired it in 2015.",
     "Low usage outside occasional government town halls; phased out in June 2015.", "Google", "United States", "Millions of Civic Voters"),

    ("Google Schemer", "google-schemer", "schemer.com", "Social", "CONFIRMED_DEAD", 2011, 2014, "Lack of Monetization",
     "The bucket-list discovery network that helped friends plan local weekend adventures.",
     "Schemer let users discover and tick off activities in their city, like 'Eat a pastrami sandwich at Katz's'. Google closed it in February 2014.",
     "Fumbled mobile execution and failed to achieve sustainable user retention.", "Google", "United States", "500k Scheme Planners"),

    ("Google Search Appliance", "google-search-appliance", "google.com/enterprise/gsa", "Hardware", "CONFIRMED_DEAD", 2002, 2019, "Strategic Pivot",
     "The iconic yellow 2U rackmount server that brought Google search to corporate intranets.",
     "The bright yellow GSA box was installed in corporate data centers to index internal enterprise files. Google phased out hardware in favor of Cloud Search.",
     "Google transitioned its enterprise strategy entirely to cloud-native SaaS (Google Cloud Search).", "Google", "United States", "Thousands of Fortune 500 Server Racks"),

    ("Google Correlate", "google-correlate", "correlate.google.com", "Search", "CONFIRMED_DEAD", 2011, 2019, "Technological Obsolescence",
     "The data science tool that found search queries matching real-world statistical curves.",
     "Part of Google Trends, Correlate reversed search trends: users uploaded a data series curve, and Google found queries that mirrored the pattern.",
     "Low general usage; maintenance costs exceeded utility, shut down in December 2019.", "Google", "United States", "Hundreds of Thousands of Economists"),

    ("Google Listen", "google-listen", "listen.googlelabs.com", "Streaming", "CONFIRMED_DEAD", 2009, 2012, "Strategic Pivot",
     "Google's experimental Android podcast and web radio application from Google Labs.",
     "Listen indexed podcasts and web audio feeds before Android had a native podcast player. Shuttered in 2012 when Google Reader API changes broke the feed backend.",
     "Google Labs shutdown and the deprecation of the underlying Google Reader podcast search API.", "Google", "United States", "1M Android Audio Listeners"),

    ("Google Currents", "google-currents", "google.com/producer/currents", "Communities", "CONFIRMED_DEAD", 2011, 2013, "Strategic Pivot",
     "The magazine-style mobile newsreader that evolved into Google Play Newsstand.",
     "Currents gave users offline swipeable digital magazine layouts for online publications. Google merged it with Google Play Magazines to create Google Play Newsstand.",
     "Rebranded and merged into Google Play Newsstand in November 2013.", "Google", "United States", "10M Tablet Readers"),

    ("Google Shoelace", "google-shoelace", "shoelace.nyc", "Social", "CONFIRMED_DEAD", 2019, 2020, "Lack of Monetization",
     "Area 120's hyper-local social network connecting NYC residents around hobbies.",
     "Shoelace was an experimental Area 120 app to help people connect over real-world activities. The COVID-19 pandemic wiped out in-person gatherings.",
     "The COVID-19 pandemic made in-person local gathering apps impossible; closed May 2020.", "Google / Area 120", "United States", "Tens of Thousands in NYC"),

    ("Google Tour Builder", "google-tour-builder", "tourbuilder.withgoogle.com", "Communities", "CONFIRMED_DEAD", 2013, 2021, "Strategic Pivot",
     "The storytelling tool that let teachers and historians build interactive Google Earth voyages.",
     "Tour Builder let educators attach photos, videos, and narrative text to interactive 3D Google Earth coordinate tours. Replaced by native Earth Creation tools.",
     "Features integrated directly into modern browser-based Google Earth; retired July 2021.", "Google", "United States", "Millions of Students"),

    ("Google Expeditions", "google-expeditions", "edu.google.com/expeditions", "Gaming", "CONFIRMED_DEAD", 2015, 2021, "Strategic Pivot",
     "The virtual reality classroom field trips app using Google Cardboard.",
     "Expeditions let teachers guide entire classrooms through 3D VR tours of coral reefs, historical landmarks, and outer space using cheap Cardboard viewers.",
     "Google retreated from smartphone VR; 3D tour assets migrated into Google Arts & Culture.", "Google", "United States", "Millions of Schoolchildren"),

    ("Google Neighbourly", "google-neighbourly", "neighbourly.google.com", "Social", "CONFIRMED_DEAD", 2018, 2020, "Lack of Monetization",
     "The Q&A community app connecting Indian urban neighborhoods.",
     "Neighbourly helped residents in Mumbai, Delhi, and Bengaluru ask local questions ('Best street food near station?'). Fumbled against WhatsApp group chats.",
     "Faced unbeatable competition from local WhatsApp and Telegram neighborhood chat groups; closed April 2020.", "Google", "India", "10M Downloads"),

    ("Google Datally", "google-datally", "datally.google.com", "Developer tools", "CONFIRMED_DEAD", 2017, 2019, "Technological Obsolescence",
     "The mobile data savings app that showed live bandwidth speedometer bubbles.",
     "Part of Next Billion Users, Datally helped Android users in emerging markets track mobile data limits. Native Android OS data savers made it redundant.",
     "Android 10 built comprehensive per-app data limits directly into the core operating system.", "Google", "United States", "10M Emerging Market Users"),

    ("Google Trips", "google-trips", "google.com/trips", "Web technology", "CONFIRMED_DEAD", 2016, 2019, "Strategic Pivot",
     "The beloved offline vacation planning app that extracted itineraries from Gmail.",
     "Google Trips automatically assembled hotel bookings, flight confirmations, and day-plan itineraries offline for travelers. Features merged into Google Travel search.",
     "Features absorbed into Google Maps and Google Search Travel portal; standalone app shuttered August 2019.", "Google", "United States", "15M Travelers"),

    ("Android Things", "android-things", "androidthings.withgoogle.com", "Developer tools", "CONFIRMED_DEAD", 2015, 2021, "Strategic Pivot",
     "Google's embedded operating system for smart appliances and IoT devices.",
     "Originally Project Brillo, Android Things was Google's attempt to run Android on microcontrollers and smart displays. Shut down after losing to lightweight Linux.",
     "Refocused exclusively on smart speaker displays for commercial partners before shutting down January 2021.", "Google", "United States", "Tens of Thousands of IoT Devs"),

    ("Chromecast Audio", "chromecast-audio", "google.com/chromecast/audio", "Hardware", "CONFIRMED_DEAD", 2015, 2019, "Strategic Pivot",
     "The $35 dongle with a 3.5mm optical jack that turned dumb analog speakers into Wi-Fi streamers.",
     "Priced at $35, Chromecast Audio was celebrated by audiophiles for its AKM DAC and optical output, bringing multi-room casting to legacy Hi-Fi systems.",
     "Google discontinued hardware in January 2019 to push consumers toward integrated Nest smart speakers.", "Google", "United States", "Millions of Analog Speakers Saved"),

    ("Google Hire", "google-hire", "hire.google.com", "Developer tools", "CONFIRMED_DEAD", 2017, 2020, "Strategic Pivot",
     "Google's applicant tracking and recruiting system built for small and medium businesses.",
     "Built by former Bebop founder Diane Greene's team, Hire integrated with G Suite to manage interviews and candidates. Google cancelled it to focus on Google Cloud.",
     "Google discontinued the product in September 2020 to focus resources on core Google Cloud infrastructure.", "Google", "United States", "Thousands of Startups"),

    ("Google Bulletin", "google-bulletin", "bulletin.google.com", "Communities", "CONFIRMED_DEAD", 2018, 2019, "Lack of Monetization",
     "The hyper-local neighborhood blogging tool for citizen journalists.",
     "Tested in Nashville and Oakland, Bulletin let anyone publish local news stories from their phone without setting up a blog. Shut down in 2019.",
     "Limited pilot adoption and moderation concerns; quiet closure in 2019.", "Google", "United States", "Piloted in 5 Cities"),

    ("Google Daydream VR", "google-daydream", "vr.google.com/daydream", "Hardware", "CONFIRMED_DEAD", 2016, 2019, "Strategic Pivot",
     "The comfortable fabric VR headset and motion controller powered by Android phones.",
     "Daydream launched with the Pixel phone, promising mobile VR in cozy fabric headsets. Consumers disliked docking phones, and standalone VR (Meta Quest) won.",
     "Consumers abandoned phone-based VR; Google removed Daydream support from Android 11.", "Google", "United States", "Millions of Headsets Sold"),

    ("Project Ara", "project-ara", "projectara.com", "Hardware", "CONFIRMED_DEAD", 2013, 2016, "Technological Obsolescence",
     "The modular smartphone with swappable magnetic blocks for camera, battery, and CPU.",
     "Born from Motorola's ATAP team, Ara envisioned an indestructible skeleton where users swapped camera blocks and sensors magnetically. Cancelled in 2016.",
     "Engineering hurdles: electropermanent magnets failed drop tests, and module interfaces added bulk; cancelled September 2016.", "Google", "United States", "Massive Tech Cult Following"),

    ("Google Nexus", "google-nexus", "google.com/nexus", "Hardware", "CONFIRMED_DEAD", 2010, 2016, "Strategic Pivot",
     "Google's pure Android developer hardware line built with HTC, Samsung, LG, and Huawei.",
     "The Nexus line (Nexus One, Nexus 4, Nexus 5, Nexus 7) showcased stock Android without carrier bloatware at consumer prices, before Google pivoted to the premium Pixel brand.",
     "Retired in October 2016 to introduce Google's wholly-owned premium consumer hardware brand: Pixel.", "Google", "United States", "Tens of Millions of Dev Devices"),

    ("AngularJS (v1)", "angularjs", "angularjs.org", "Developer tools", "CONFIRMED_DEAD", 2010, 2022, "Technological Obsolescence",
     "Miško Hevery's two-way data-binding framework that powered the Single Page Application revolution.",
     "AngularJS changed frontend web development forever with directives, dependency injection, and models. Replaced by the incompatible rewrite Angular 2+.",
     "Official End-of-Life reached on January 1, 2022, after a 3-year extended LTS support period.", "Google", "United States", "Millions of Enterprise SPAs"),

    ("Google Glass (Consumer)", "google-glass", "google.com/glass", "Hardware", "CONFIRMED_DEAD", 2013, 2015, "Security & Privacy",
     "The $1,500 optical head-mounted display that coined the term 'Glasshole'.",
     "Sergey Brin parachuted into Google I/O 2012 to show Glass. Secret filming fears led to bans in bars and cinemas; consumer sales were terminated in 2015.",
     "Severe public privacy backlash, battery overheating, and social stigma; pivoted to enterprise before final sunset.", "Google", "United States", "Thousands of Explorer Editions"),

    ("Google URL Shortener (goo.gl)", "googl-shortener", "goo.gl", "Web technology", "CONFIRMED_DEAD", 2009, 2019, "Technological Obsolescence",
     "The rapid URL shortener with built-in malware analysis and QR codes.",
     "goo.gl provided reliable short links and analytics across Google products. Google discontinued new link generation in 2019 in favor of Firebase Dynamic Links.",
     "Replaced by Firebase Dynamic Links; new links disabled March 2019.", "Google", "United States", "Billions of Redirect Clicks"),

    # --- MICROSOFT GRAVEYARD (50+ ENTITIES) ---
    ("Windows Live Spaces", "windows-live-spaces", "spaces.live.com", "Social", "CONFIRMED_DEAD", 2004, 2011, "Strategic Pivot",
     "Microsoft's massive global blogging network with 120 million active spaces.",
     "Originally MSN Spaces, it integrated directly with MSN Messenger. In 2010, Microsoft announced a partnership with WordPress.com and migrated all users.",
     "Microsoft partnered with Automattic and shut down Spaces in March 2011, moving accounts to WordPress.com.", "Microsoft", "United States", "120M Bloggers"),

    ("MSN Soapbox", "msn-soapbox", "soapbox.msn.com", "Streaming", "CONFIRMED_DEAD", 2006, 2009, "Lack of Monetization",
     "Microsoft's video sharing platform created to challenge YouTube.",
     "Launched in September 2006, Soapbox let users upload and embed videos across MSN. Microsoft closed it in August 2009 to cut costs during the recession.",
     "Unable to gain meaningful market share against YouTube; high moderation and hosting costs.", "Microsoft", "United States", "Millions of MSN Viewers"),

    ("MSN Encarta", "msn-encarta", "encarta.msn.com", "Communities", "CONFIRMED_DEAD", 1993, 2009, "Market Competition",
     "The multimedia digital encyclopedia that came on CD-ROMs with MindMaze.",
     "Encarta revolutionized home homework research in the 1990s with sound clips and videos. The free, open growth of Wikipedia wiped it out in the 2000s.",
     "Wikipedia's vast volunteer crowdsourced model made commercial subscription encyclopedias extinct.", "Microsoft", "United States", "Bundled on Millions of PCs"),

    ("Windows Phone", "windows-phone", "windowsphone.com", "Hardware", "CONFIRMED_DEAD", 2010, 2017, "Market Competition",
     "Microsoft's gorgeous Live Tiles mobile operating system that arrived too late to beat iOS and Android.",
     "Windows Phone (Windows Phone 7, 8, Windows 10 Mobile) was celebrated for typography, Metro Live Tiles, and smoothness. Lack of apps (the 'app gap') doomed it.",
     "The app gap: developers refused to build for Windows Phone without users, and users left without apps.", "Microsoft", "United States", "Millions of Lumia Fans"),

    ("Windows Phone Marketplace", "windows-phone-marketplace", "marketplace.windowsphone.com", "Developer tools", "CONFIRMED_DEAD", 2010, 2019, "Market Competition",
     "The app store for Windows Phone and Lumia smartphones.",
     "Hosted 300,000+ apps for Windows Phone before Microsoft officially shut down all store infrastructure in December 2019.",
     "Windows 10 Mobile support ended; store servers powered off December 2019.", "Microsoft", "United States", "300,000 Mobile Apps"),

    ("Groove Music", "groove-music", "music.microsoft.com", "Streaming", "CONFIRMED_DEAD", 2012, 2017, "Market Competition",
     "Microsoft's music streaming and locker service, formerly Xbox Music and Zune.",
     "Groove offered streaming and OneDrive cloud music playback across Windows, Xbox, and mobile. In late 2017, Microsoft partnered with Spotify and killed Groove.",
     "Microsoft discontinued streaming passes and directed subscribers to migrate playlists to Spotify.", "Microsoft", "United States", "Millions of Windows 10 Users"),

    ("Microsoft Band", "microsoft-band", "microsoft.com/band", "Hardware", "CONFIRMED_DEAD", 2014, 2016, "Strategic Pivot",
     "The sensor-packed smartwatch with 10 sensors including galvanic skin response and UV monitoring.",
     "Microsoft Band and Band 2 packed incredible biometric tracking into a flat curved wristband. Microsoft dissolved the hardware division in 2016.",
     "Hardware durability issues (tearing rubber bands) and Microsoft's broader consumer mobile retreat.", "Microsoft", "United States", "Hundreds of Thousands"),

    ("Microsoft HealthVault", "microsoft-healthvault", "healthvault.com", "Web technology", "CONFIRMED_DEAD", 2007, 2019, "Strategic Pivot",
     "Microsoft's secure personal health record cloud repository.",
     "HealthVault stored medical records, lab results, and fitness device data. Microsoft shut it down in November 2019.",
     "Shifted health strategy toward Azure enterprise clinical cloud solutions.", "Microsoft", "United States", "Millions of Medical Records"),

    ("Mixer", "mixer-streaming", "mixer.com", "Streaming", "CONFIRMED_DEAD", 2016, 2020, "Market Competition",
     "The low-latency gaming stream platform that paid Ninja $30M before abruptly shutting down.",
     "Originally Beam, Mixer featured sub-second FTL streaming latency and interactive soundboards. Microsoft signed Ninja and Shroud, but viewer numbers never materialized.",
     "Viewer growth failed to keep pace with astronomical creator exclusivity contracts; partnered with Facebook Gaming and closed in July 2020.", "Microsoft", "United States", "30M Monthly Viewers"),

    ("Wunderlist", "wunderlist", "wunderlist.com", "Developer tools", "CONFIRMED_DEAD", 2011, 2020, "Acquired & Discontinued",
     "Christian Reber's exquisitely crafted to-do list app that Microsoft acquired for $150M.",
     "Wunderlist was praised for its chime sounds, background wallpapers, and cross-platform sync. Microsoft acquired 6Wunderkinder to build Microsoft To Do and closed it.",
     "Microsoft replaced Wunderlist with Microsoft To Do; shut down May 6, 2020.", "Microsoft / 6Wunderkinder", "Germany", "13M Task Managers"),

    ("Sunrise Calendar", "sunrise-calendar", "calendar.sunrise.am", "Developer tools", "CONFIRMED_DEAD", 2013, 2016, "Acquired & Discontinued",
     "The beloved calendar app with Facebook events, weather forecasts, and keyboard scheduling.",
     "Founded by Pierre Valade and Jeremy Le Van, Sunrise was hailed as the best digital calendar ever made. Microsoft bought it for $100M to rebuild Outlook Mobile.",
     "Acquired by Microsoft in 2015; team rebuilt Outlook Mobile Calendar; standalone app closed August 2016.", "Microsoft", "United States", "Millions of Schedulers"),

    ("Docs.com", "docs-com", "docs.com", "Developer tools", "CONFIRMED_DEAD", 2010, 2017, "Security & Privacy",
     "Microsoft's document sharing site that accidentally exposed confidential job resumes to public search.",
     "Docs.com let users publish Word, Excel, and PowerPoint files. In 2017, users discovered personal documents and social security numbers were indexed publicly by Bing.",
     "Catastrophic privacy disclosure indexing private user documents publicly; Microsoft retired the service in December 2017.", "Microsoft", "United States", "Millions of Office Docs"),

    ("Microsoft Kin", "microsoft-kin", "kin.com", "Hardware", "CONFIRMED_DEAD", 2010, 2010, "Lack of Monetization",
     "The social smartphone for teens that Verizon killed after 48 days on store shelves.",
     "Developed under Project Pink for $1 billion, Kin phones lacked basic features like calendars and games while requiring expensive smartphone data plans. Sold 500 units.",
     "Verizon pulled the phones after 48 days; entire inventory returned to Microsoft; lost $1 billion.", "Microsoft", "United States", "Under 1,000 Units Sold"),

    ("Microsoft Comic Chat", "comic-chat", "microsoft.com/chat", "Messaging", "CONFIRMED_DEAD", 1996, 2001, "Technological Obsolescence",
     "The IRC chat client that rendered every chat line as a dynamic comic strip panel.",
     "Designed by comic artist Jim Woodring and Microsoft Research, Comic Chat automatically chose facial expressions and speech balloons for users on IRC.",
     "Desktop IRC gave way to web chat and instant messaging; retired in early 2000s.", "Microsoft", "United States", "Millions of IRC Chatters"),

    ("Microsoft Bob", "microsoft-bob", "microsoft.com/bob", "Web technology", "CONFIRMED_DEAD", 1995, 1996, "Market Competition",
     "The friendly cartoon living room interface for Windows that birthed Comic Sans.",
     "Managed by Melinda French (Gates), Bob replaced the Windows desktop with a cartoon house and Rover the dog assistant. It was roundly mocked and cancelled in a year.",
     "Overly simplistic, expensive, and ridiculed in tech media; cancelled in 1996.", "Microsoft", "United States", "30,000 Boxes Sold"),

    ("TerraServer", "terraserver", "terraserver.microsoft.com", "Search", "CONFIRMED_DEAD", 1998, 2007, "Technological Obsolescence",
     "Microsoft's groundbreaking aerial satellite photo database that predated Google Earth by seven years.",
     "Created with the USGS, TerraServer let anyone zoom into high-resolution black-and-white satellite imagery of North America inside a browser in 1998.",
     "Integrated into MSN Virtual Earth and later Bing Maps.", "Microsoft / USGS", "United States", "Millions of Early Map Viewers"),

    ("Microsoft Silverlight", "microsoft-silverlight", "silverlight.net", "Web technology", "CONFIRMED_DEAD", 2007, 2021, "Technological Obsolescence",
     "Microsoft's rich web plugin built to compete with Adobe Flash and power early Netflix streaming.",
     "Silverlight brought .NET and XAML to web browsers, famously powering Netflix's early browser player and the 2008 Beijing Olympics. W3C HTML5 video killed it.",
     "Modern browser vendors deprecated NPAPI plugins; HTML5 video and WebAssembly replaced proprietary plugins.", "Microsoft", "United States", "Installed on Millions of PCs"),

    ("Microsoft FrontPage", "frontpage", "microsoft.com/frontpage", "Developer tools", "CONFIRMED_DEAD", 1995, 2006, "Technological Obsolescence",
     "The WYSIWYG HTML editor that introduced a generation to FrontPage Server Extensions.",
     "FrontPage made website design accessible by treating web pages like Word documents. It generated proprietary HTML tags and bot bots before being replaced by Expression Web.",
     "Superseded by modern standards-compliant web editors and Microsoft Expression Web in 2006.", "Microsoft", "United States", "Millions of Webmasters"),

    # --- YAHOO GRAVEYARD (50+ ENTITIES) ---
    ("Yahoo! Answers", "yahoo-answers-classic", "answers.yahoo.com", "Communities", "CONFIRMED_DEAD", 2005, 2021, "Strategic Pivot",
     "The chaotic Q&A community famous for 'How is babby formed?' and points leaderboards.",
     "Launched in 2005, Yahoo! Answers was the largest question-and-answer repository on the internet, filled with bizarre humor and school homework queries. Verizon shut it down in 2021.",
     "Verizon Media decided to shut down the legacy community in May 2021 to pivot resources to other media properties.", "Verizon / Yahoo!", "United States", "300M Users"),

    ("Yahoo! Groups", "yahoo-groups-classic", "groups.yahoo.com", "Communities", "CONFIRMED_DEAD", 2001, 2020, "Strategic Pivot",
     "The monumental email listserv and bulletin board archive of human subcultures.",
     "Formed from eGroups in 2001, Yahoo! Groups hosted 10 million communities across fan clubs, rare medical support groups, and transit enthusiasts. Verizon wiped the archives in 2020.",
     "Verizon Media deleted all user archives in December 2020, sparking widespread condemnation from digital archivists.", "Verizon / Yahoo!", "United States", "115M Group Members"),

    ("Yahoo! Directory", "yahoo-directory-classic", "dir.yahoo.com", "Search", "CONFIRMED_DEAD", 1994, 2014, "Technological Obsolescence",
     "Jerry and David's Guide to the World Wide Web — the original human-curated index of the internet.",
     "Founded in 1994 by Jerry Yang and David Filo, the Directory was the seed of Yahoo!. Human editors hand-cataloged websites into folders. Yahoo shut it down in December 2014.",
     "Algorithmic web crawling (Google) rendered manual human classification of billions of pages completely impossible.", "Yahoo!", "United States", "Pioneered Web Navigation"),

    ("Yahoo! Pipes", "yahoo-pipes-classic", "pipes.yahoo.com", "Developer tools", "CONFIRMED_DEAD", 2007, 2015, "Strategic Pivot",
     "The visual programming canvas for mashing up RSS feeds, APIs, and data streams.",
     "Pipes was hailed as visionary: a graphical drag-and-drop wire diagram tool to filter, aggregate, and manipulate live internet feeds. Yahoo killed it in 2015 spring cleaning.",
     "Internal Yahoo executive neglect and lack of direct commercial monetization.", "Yahoo!", "United States", "Hundreds of Thousands of Hackers"),

    ("Yahoo! Screen", "yahoo-screen", "screen.yahoo.com", "Streaming", "CONFIRMED_DEAD", 2013, 2016, "Lack of Monetization",
     "Yahoo's original streaming network that commissioned Community Season 6 and lost $42M.",
     "Under CEO Marissa Mayer, Yahoo attempted to rival Netflix by producing original comedies, including saving NBC's Community for Season 6. Yahoo wrote down a $42M loss on video.",
     "Inability to monetize original streaming programming; wrote down $42M and shut down in January 2016.", "Yahoo!", "United States", "Millions of Community Fans"),

    ("Yahoo! Buzz", "yahoo-buzz", "buzz.yahoo.com", "Communities", "CONFIRMED_DEAD", 2008, 2011, "Market Competition",
     "Yahoo's social voting news aggregator designed to defeat Digg.",
     "Yahoo! Buzz allowed users to vote on news stories, with top stories promoted directly to the massive Yahoo.com front page. Shut down in April 2011.",
     "Unable to dethrone Digg and Reddit; phased out in early 2011.", "Yahoo!", "United States", "Millions of Daily Front Page Clicks"),

    ("Yahoo! Music Radio (LAUNCHcast)", "launchcast", "music.yahoo.com", "Streaming", "CONFIRMED_DEAD", 2001, 2014, "Strategic Pivot",
     "The pioneer of personalized internet radio that powered early Yahoo! Music.",
     "Originally LAUNCH Media, Yahoo bought it in 2001. Its 100-point rating slider shaped early algorithmic music recommendations before CBS Radio and Pandora took over.",
     "Partnered with CBS Radio and ultimately replaced by digital streaming giants.", "Yahoo!", "United States", "20M Monthly Listeners"),

    ("Yahoo! Games Classic", "yahoo-games", "games.yahoo.com", "Gaming", "CONFIRMED_DEAD", 1996, 2016, "Technological Obsolescence",
     "The Java applet game parlor where millions played Pool, Chess, Spades, and Literati.",
     "Yahoo! Games was a daily habit for millions in the 2000s playing multiplayer board games and cards in chat rooms. Browser deprecation of Java applets forced its closure.",
     "Modern browsers blocked NPAPI and Java applets; shut down in May 2016.", "Yahoo!", "United States", "30M Casual Gamers"),

    ("Yahoo! Toolbar", "yahoo-toolbar", "toolbar.yahoo.com", "Web technology", "CONFIRMED_DEAD", 2000, 2018, "Technological Obsolescence",
     "The ubiquitous Internet Explorer add-on with popup blocking and mail alerts.",
     "Yahoo! Toolbar sat at the top of web browsers for nearly two decades, providing search boxes, weather widgets, and anti-spyware. Modern browsers built search into the address bar.",
     "Modern browsers integrated search bars into omniboxes and restricted browser helper object extensions.", "Yahoo!", "United States", "100M+ Installed Browsers"),

    ("Yahoo! Briefcase", "yahoo-briefcase", "briefcase.yahoo.com", "Developer tools", "CONFIRMED_DEAD", 1999, 2009, "Technological Obsolescence",
     "The web's original cloud storage locker offering 30MB of free file hosting in 1999.",
     "Launched in 1999, Yahoo! Briefcase was the Dropbox of the dial-up era, allowing users to save 30MB of documents to access from any computer. Closed in 2009.",
     "Outpaced by modern cloud drives (Dropbox, Box) offering gigabytes of storage; closed February 2009.", "Yahoo!", "United States", "10M Accounts"),

    ("Yahoo! Photos", "yahoo-photos", "photos.yahoo.com", "Communities", "CONFIRMED_DEAD", 2000, 2007, "Strategic Pivot",
     "The largest photo sharing website of the early 2000s that Yahoo closed for Flickr.",
     "Yahoo! Photos was the market leader in consumer photo storage. After Yahoo acquired Flickr in 2005, it gave users a deadline to migrate to Flickr or download archives.",
     "Yahoo consolidated photo storage onto Flickr, shuttering Yahoo! Photos in September 2007.", "Yahoo!", "United States", "30M Photo Uploaders"),

    ("Yahoo! 360°", "yahoo-360", "360.yahoo.com", "Social", "CONFIRMED_DEAD", 2005, 2009, "Strategic Pivot",
     "The blogging and social networking portal that was huge in Vietnam.",
     "Yahoo! 360 combined blogs, photo sharing, and blast messages. While failing in the US, it became the primary blogging platform of Vietnam before Yahoo closed it.",
     "Neglected by Yahoo US management; closed in July 2009.", "Yahoo!", "United States / Vietnam", "10M Bloggers"),

    ("Yahoo! Babel Fish", "babel-fish", "babelfish.yahoo.com", "Developer tools", "CONFIRMED_DEAD", 1997, 2012, "Acquired & Discontinued",
     "The web's original free automated translation tool, named after Douglas Adams' creature.",
     "Developed by AltaVista and SYSTRAN in 1997, Babel Fish was the very first web service to translate text between languages. Yahoo acquired it and redirected it to Bing in 2012.",
     "Yahoo transitioned search and services to Microsoft; redirected to Bing Translator in May 2012.", "Yahoo! / AltaVista", "United States", "50M Translations Daily"),

    ("Yahoo! News Digest", "yahoo-news-digest", "newsdigest.yahoo.com", "Communities", "CONFIRMED_DEAD", 2014, 2017, "Strategic Pivot",
     "The Apple Design Award-winning summarization app powered by Nick D'Aloisio's Summly.",
     "Yahoo paid $30M to buy 17-year-old Nick D'Aloisio's Summly app, turning it into Yahoo! News Digest with twice-daily atomic summaries. Verizon discontinued it.",
     "Oath / Verizon Media shut down experimental mobile apps in June 2017.", "Verizon / Yahoo!", "United Kingdom", "9M Mobile Readers"),

    # --- APPLE & AOL GRAVEYARD (30+ ENTITIES) ---
    ("Apple eWorld", "apple-eworld", "eworld.com", "Communities", "CONFIRMED_DEAD", 1994, 1996, "Market Competition",
     "Apple's delightful 1994 online community village for Macintosh owners.",
     "eWorld greeted users with a cartoon town square (Arts Pavillion, Learning Center, Post Office) operated in partnership with AOL. Steve Jobs cancelled it upon returning.",
     "Inability to compete against open web browsers and AOL; cancelled in March 1996.", "Apple Computer", "United States", "115,000 Mac Users"),

    ("MobileMe", "mobileme", "me.com", "Developer tools", "CONFIRMED_DEAD", 2008, 2012, "Strategic Pivot",
     "The $99/year push email and syncing service that Steve Jobs berated on stage.",
     "Launched in 2008 to sync mail, contacts, and calendars over-the-air, its disastrous buggy launch provoked Steve Jobs to scream at the engineering team: 'Can anyone tell me what MobileMe is supposed to do?'",
     "Replaced in October 2011 by the free, ground-up rebuild iCloud.", "Apple", "United States", "3M Mac & iPhone Subscribers"),

    ("iWeb", "apple-iweb", "apple.com/ilife/iweb", "Developer tools", "CONFIRMED_DEAD", 2006, 2012, "Strategic Pivot",
     "Apple's elegant drag-and-drop website design tool in the iLife suite.",
     "Part of iLife, iWeb allowed anyone to publish podcasts, photo galleries, and personal blogs to MobileMe with 1-click. Discontinued when MobileMe was replaced by iCloud.",
     "Discontinued as Apple phased out MobileMe web hosting in favor of iCloud.", "Apple", "United States", "Millions of Mac Users"),

    ("Apple Cyberdog", "apple-cyberdog", "cyberdog.apple.com", "Web technology", "CONFIRMED_DEAD", 1996, 1997, "Strategic Pivot",
     "Apple's OpenDoc-based internet browser suite named after the New Yorker cartoon.",
     "Cyberdog provided modular web browsing, email, and newsgroup components built on Apple's OpenDoc architecture. Cancelled by Steve Jobs in the 1997 product purge.",
     "Cancelled by Steve Jobs in March 1997 during his turnaround restructuring of Apple.", "Apple Computer", "United States", "Tens of Thousands of Mac Devs"),

    ("AOL Hometown", "aol-hometown", "hometown.aol.com", "Communities", "CONFIRMED_DEAD", 1998, 2008, "Strategic Pivot",
     "The massive personal homepage community for America Online subscribers.",
     "AOL Hometown hosted millions of personal web pages for AOL subscribers across hobbies, music, and community groups. AOL pulled the plug in October 2008.",
     "AOL phased out free web hosting communities during corporate restructuring in late 2008.", "AOL", "United States", "15M Member Pages"),

    ("Netscape Netcenter", "netscape-netcenter", "netcenter.com", "Search", "CONFIRMED_DEAD", 1997, 2002, "Acquired & Discontinued",
     "The default portal of the Netscape browser that drew 20 million daily visitors.",
     "Every time someone launched Netscape Navigator, Netcenter greeted them with search, webmail, and news. AOL acquired Netscape for $4.2B and let it decay.",
     "AOL neglected Netcenter as Microsoft's Internet Explorer captured 95% of browser share.", "AOL / Netscape", "United States", "20M Daily Netizens"),

    ("CompuServe Information Service", "compuserve-classic", "compuserve.com", "Communities", "CONFIRMED_DEAD", 1969, 2009, "Technological Obsolescence",
     "The legendary dial-up commercial online service that invented the GIF format.",
     "CompuServe was the first major online service, introducing CB Simulator (the first chat room), email, and the Graphics Interchange Format (GIF) in 1987. Closed forums in 2009.",
     "Modern World Wide Web superseded proprietary dial-up walled garden online services.", "AOL / CompuServe", "United States", "3M Subscribers"),

    ("GNN (Global Network Navigator)", "gnn", "gnn.com", "Search", "CONFIRMED_DEAD", 1993, 1996, "Acquired & Discontinued",
     "The very first commercial website on the World Wide Web to sell banner advertisements.",
     "Created in 1993 by O'Reilly & Associates, GNN was the first web portal to sell commercial advertising (a clickable Silicon Graphics banner). AOL bought and closed it.",
     "Acquired by AOL in 1995 for $11M; phased out in December 1996.", "AOL / O'Reilly", "United States", "Pioneered Web Advertising"),

    ("FreeInternet.com", "freeinternet-com", "freei.com", "Communities", "CONFIRMED_DEAD", 1999, 2000, "Bankruptcy",
     "The free dial-up ISP with 'Bob the Baby' mascot that filed Chapter 11 before its IPO.",
     "Freei provided free dial-up internet with a permanent desktop banner ad. It grew to 3.2 million users in 14 months, but dot-com ad revenues collapsed before its IPO.",
     "Ad revenue per dial-up user plummeted; filed Chapter 11 bankruptcy in October 2000.", "Freei Networks", "United States", "3.2M Dial-Up Users"),

    ("AltaVista Free Access", "altavista-free-access", "altavista.net", "Communities", "CONFIRMED_DEAD", 1999, 2001, "Lack of Monetization",
     "AltaVista's free 56k dial-up ISP service that signed up 3 million users in 6 months.",
     "Partnered with 1stUp.com, AltaVista offered free unlimited internet access supported by a floating desktop banner bar. Shuttered when 1stUp went bankrupt.",
     "1stUp.com went bankrupt in December 2000; AltaVista terminated free access in January 2001.", "CMGI / AltaVista", "United States", "3M Users"),

    ("Bluelight.com", "bluelight-isp", "bluelight.com", "Communities", "CONFIRMED_DEAD", 1999, 2002, "Bankruptcy",
     "Kmart's free dial-up internet service that drew 7 million subscribers.",
     "Backed by Kmart and Softbank, Bluelight offered free dial-up internet to Kmart shoppers, becoming the fastest-growing ISP in America before Kmart's bankruptcy.",
     "Kmart filed for Chapter 11 bankruptcy in 2002; service converted into United Online paid tiers.", "Kmart / United Online", "United States", "7M Subscribers")
]
