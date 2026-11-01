# Massive Expansion Dataset: Authentic Web Landmarks, Casualties, Radar & Zombie Relics

EXPANSION_BATCH = [
    # ==========================================
    # 1. GOOGLE GRAVEYARD EXPANSIONS (DEAD)
    # ==========================================
    ("Google Answers", "google-answers", "answers.google.com", "Search", "CONFIRMED_DEAD", 2002, 2006, "Lack of Monetization",
     "Google's bounty-based research marketplace where researchers were paid $2 to $200 per answer.",
     "Conceived by Larry Page, Google Answers hired vetted research contractors to answer deep inquiries with guaranteed references.",
     "Free collaborative alternatives like Yahoo Answers and Wikipedia captured user mindshare; closed in December 2006.", "Google", "United States", "800K Researched Answers"),

    ("Google Catalogs", "google-catalogs", "catalogs.google.com", "Search", "CONFIRMED_DEAD", 2001, 2009, "Technological Obsolescence",
     "Google's project to scan, OCR, and index thousands of mail-order print retail catalogs.",
     "Enabled shoppers to flip through high-resolution digitized paper catalogs from J.Crew, Lands' End, and Sears with search overlays.",
     "Retailers transitioned directly to e-commerce storefronts, rendering scanned print mail catalogs obsolete in 2009.", "Google", "United States", "5M Scanned Pages"),

    ("Google Desktop", "google-desktop", "desktop.google.com", "Developer tools", "CONFIRMED_DEAD", 2004, 2011, "Technological Obsolescence",
     "Google's desktop search indexer and sidebar widget dock for Windows and Mac.",
     "Brought instant PageRank local search to hard drive files, Outlook emails, and chat logs, featuring customizable sidebar gadgets.",
     "Modern operating systems (Windows Vista/7 Windows Search, Mac OS X Spotlight) built native instant search, leading Google to discontinue it in 2011.", "Google", "United States", "40M Desktops"),

    ("Google Toolbar", "google-toolbar", "toolbar.google.com", "Web technology", "CONFIRMED_DEAD", 2000, 2021, "Technological Obsolescence",
     "The browser add-on that introduced PageRank display, pop-up blocking, and instant search bars.",
     "Before browsers integrated search boxes into address bars (Omnibox), Google Toolbar was the essential Internet Explorer plugin for millions.",
     "Google Chrome's dominance and integrated search bars across all modern browsers made separate toolbars obsolete; retired in December 2021.", "Google", "United States", "100M Installs"),

    ("Google Notebook", "google-notebook", "notebook.google.com", "Developer tools", "CONFIRMED_DEAD", 2006, 2011, "Strategic Pivot",
     "The early web clipping and personal note-taking predecessor to Google Keep.",
     "Allowed users to save text excerpts, links, and images from web pages into categorized spiral-themed notebooks in browser sidebars.",
     "Development halted in 2009 to prioritize Google Docs; fully shut down in 2011 with notes migrated to Google Docs.", "Google", "United States", "3M Notetakers"),

    ("Google Health (Original)", "google-health-original", "health.google.com", "Web technology", "CONFIRMED_DEAD", 2008, 2012, "Lack of Monetization",
     "Google's first personal health record and medical data consolidation portal.",
     "Partnered with pharmacies (Walgreens, CVS) and hospitals to let patients aggregate medical records, prescription histories, and lab results.",
     "Failed to achieve mass consumer adoption due to hospital data interoperability silos and patient privacy anxieties; sunset in January 2012.", "Google", "United States", "500K Patients"),

    ("Google Base", "google-base", "base.google.com", "Web technology", "CONFIRMED_DEAD", 2005, 2010, "Strategic Pivot",
     "Google's open structured database that took on Craigslist and eBay classifieds.",
     "Allowed individuals and merchants to submit structured data (jobs, used cars, recipes, real estate) directly into Google's search index.",
     "Dismantled and repurposed into the underlying feed architecture for Google Merchant Center and Google Shopping.", "Google", "United States", "10M Listings"),

    ("Google Knol", "google-knol", "knol.google.com", "Communities", "CONFIRMED_DEAD", 2008, 2012, "Market Competition",
     "Google's 'unit of knowledge' author-credited encyclopedia designed to compete with Wikipedia.",
     "Offered verified author bylaws and ad revenue sharing via AdSense for experts publishing authoritative essays.",
     "Plagued by commercial spam, low article quality compared to Wikipedia's collaborative model, and low traffic; closed in April 2012.", "Google", "United States", "100K Articles"),

    ("Google Latitude", "google-latitude", "latitude.google.com", "Social", "CONFIRMED_DEAD", 2009, 2013, "Strategic Pivot",
     "Google Maps' continuous real-time friend-location tracking layer.",
     "Allowed friends and family to see each other's live coordinates on Google Maps with passive background phone tracking.",
     "Retired in August 2013 in an effort to force users onto Google+ Locations; later re-emerged as Google Maps Location Sharing.", "Google", "United States", "10M Users"),

    ("Google Schemer", "google-schemer", "schemer.google.com", "Social", "CONFIRMED_DEAD", 2011, 2014, "Strategic Pivot",
     "Google's local bucket list and activity discovery network powered by Google+.",
     "Users curated lists of things to do ('Eat a cronut', 'Hike Half Dome') and marked them completed with friends.",
     "Tied strictly to the struggling Google+ ecosystem; failed to gain engagement and shut down in February 2014.", "Google", "United States", "500K Users"),

    ("Google Offers", "google-offers", "offers.google.com", "Web technology", "CONFIRMED_DEAD", 2011, 2014, "Strategic Pivot",
     "Google's daily deals service launched after Groupon rejected its $6 billion buyout bid.",
     "Delivered daily discounted coupons for restaurants, spas, and entertainment across major US metropolitan markets.",
     "The daily deal boom cratered nationwide; Google shuttered the standalone service in March 2014.", "Google", "United States", "5M Shoppers"),

    ("Google Shopper", "google-shopper", "google.com/shopper", "Web technology", "CONFIRMED_DEAD", 2010, 2014, "Strategic Pivot",
     "The barcode scanning and deal-comparison mobile app for physical store shoppers.",
     "Allowed users to scan product barcodes, book covers, and retail labels with phone cameras to compare in-store prices against online merchants.",
     "Core scanning features absorbed directly into the Google Search mobile app and Google Lens; retired in 2014.", "Google", "United States", "10M Downloads"),

    ("Google Checkout", "google-checkout", "checkout.google.com", "Web technology", "CONFIRMED_DEAD", 2006, 2013, "Strategic Pivot",
     "Google's merchant payment service that challenged PayPal with shopping cart badge integration.",
     "Offered one-click checkouts across participating web stores and discounted merchant processing fees tied to AdWords spend.",
     "Merged into Google Wallet and eventually rebranded into Google Pay, retiring the original checkout portal in November 2013.", "Google", "United States", "25M Shoppers"),

    ("Google Correlate", "google-correlate", "correlate.google.com", "Search", "CONFIRMED_DEAD", 2011, 2019, "Technological Obsolescence",
     "The data science research tool that found search queries matching custom drawn curves.",
     "Researchers could upload a time series curve or draw a shape with a mouse, and Google returned queries with matching search trends.",
     "Low usage and maintenance overhead led to its termination in December 2019.", "Google", "United States", "50K Researchers"),

    ("Google Trends for Websites", "google-trends-websites", "trends.google.com/websites", "Search", "CONFIRMED_DEAD", 2008, 2012, "Strategic Pivot",
     "Google's public traffic analytics tool that revealed visitor numbers for any domain.",
     "Provided estimated daily unique visitors, regional breakdown, and related websites visited using aggregated Google data.",
     "Folded into Google Ad Planner and Google Display Network research tools; public lookup deprecated in 2012.", "Google", "United States", "2M Webmasters"),

    ("Google Page Creator", "google-page-creator", "pages.google.com", "Web technology", "CONFIRMED_DEAD", 2006, 2008, "Acquired & Discontinued",
     "Google's browser-based WYSIWYG website builder that gave users 100MB of free hosting at username.googlepages.com.",
     "Launched in 2006 with simple drag-and-drop templates, it overwhelmed Google's servers on launch day with traffic.",
     "Replaced by JotSpot technology which Google acquired to create Google Sites, closing Page Creator in 2008.", "Google", "United States", "3M Hosted Pages"),

    ("Google Moderator", "google-moderator", "moderator.google.com", "Communities", "CONFIRMED_DEAD", 2008, 2015, "Strategic Pivot",
     "The crowd-voted town hall tool used by President Barack Obama for citizen questions.",
     "Conceived by Google engineer Tal Dayan during 20% time, it let audiences submit questions and upvote the best inquiries for live broadcasts.",
     "Google sunset the service in June 2015 due to low ongoing developer investment.", "Google", "United States", "1M Town Hall Voters"),

    ("Google Cloud Print", "google-cloud-print", "cloudprint.google.com", "Web technology", "CONFIRMED_DEAD", 2010, 2020, "Technological Obsolescence",
     "The service that let Chromebooks and smartphones print to legacy printers over the web.",
     "Routed print jobs through Google servers to physical printers connected to desktop Chrome instances, enabling printing on ChromeOS.",
     "Native ChromeOS printing protocols (CUPS) matured across standard network printers; Google terminated Cloud Print on Dec 31, 2020.", "Google", "United States", "50M Print Jobs/Mo"),

    ("Google Station", "google-station", "station.google.com", "Web technology", "CONFIRMED_DEAD", 2015, 2020, "Strategic Pivot",
     "Google's high-speed public Wi-Fi initiative across railway stations in India and developing nations.",
     "Brought free gigabit Wi-Fi to over 400 Indian railway stations and thousands of public venues across Indonesia, Nigeria, and Mexico.",
     "Plummeting mobile 4G mobile data prices in India (via Reliance Jio) made public Wi-Fi stations redundant; shut down in 2020.", "Google", "India / Worldwide", "10M Daily Commuters"),

    ("Google Hire", "google-hire", "hire.google.com", "Developer tools", "CONFIRMED_DEAD", 2017, 2020, "Strategic Pivot",
     "Google's applicant tracking system (ATS) tailored for small and medium businesses using G Suite.",
     "Seamlessly synced job applicants, resume reviews, interview calendar scheduling, and Gmail feedback directly into G Suite.",
     "Google chose to focus enterprise resources on broader Google Cloud products, sun setting Hire in September 2020.", "Google", "United States", "50K Employers"),

    ("Google App Maker", "google-app-maker", "appmaker.google.com", "Developer tools", "CONFIRMED_DEAD", 2016, 2021, "Strategic Pivot",
     "Google's low-code visual application development platform for enterprise G Suite customers.",
     "Allowed business analysts to assemble custom internal database apps with drag-and-drop UI and Cloud SQL integrations.",
     "Google acquired AppSheet in 2020, declaring App Maker obsolete and shutting it down permanently in January 2021.", "Google", "United States", "100K Enterprise Apps"),

    ("Google Jamboard", "google-jamboard", "jamboard.google.com", "Developer tools", "CONFIRMED_DEAD", 2016, 2024, "Strategic Pivot",
     "Google's collaborative digital whiteboard application and companion 55-inch hardware screen.",
     "Used extensively in classrooms and remote teams for sticky notes, drawing, and brainstorming jams during Workspace calls.",
     "Google announced sunset in late 2023, turning all apps and companion hardware into read-only archives on October 1, 2024, partnering with FigJam and Miro.", "Google", "United States", "15M Students & Teams"),

    ("Google Domains", "google-domains", "domains.google.com", "Web technology", "CONFIRMED_DEAD", 2014, 2023, "Acquired & Discontinued",
     "Google's clean, transparent domain registrar with free WHOIS privacy and DNSSEC.",
     "Lauded by developers for its clean ad-free dashboard, lack of aggressive checkout upselling, and instant Google Workspace DNS integration.",
     "Google abruptly sold all domain assets (over 10 million registrations) to Squarespace for $180M in June 2023, shuttering Google Domains.", "Google / Squarespace", "United States", "10M Registered Domains"),

    ("Google Search Appliance", "google-search-appliance", "google.com/enterprise/gsa", "Hardware", "CONFIRMED_DEAD", 2002, 2018, "Strategic Pivot",
     "The iconic bright yellow rackmount server that brought PageRank to corporate intranets.",
     "Plugged into company datacenters to crawl and index enterprise documents, intranets, and file shares with Google's search algorithms.",
     "Discontinued in favor of Google Cloud Search and SaaS enterprise indexers, shutting down hardware renewals in 2018.", "Google", "United States", "10K Enterprise Datacenters"),

    # ==========================================
    # 2. MICROSOFT GRAVEYARD EXPANSIONS (DEAD)
    # ==========================================
    ("MSN Groups", "msn-groups", "groups.msn.com", "Communities", "CONFIRMED_DEAD", 1995, 2009, "Acquired & Discontinued",
     "Microsoft's massive community message boards and photo galleries.",
     "Hosted millions of hobby clubs, fan discussions, school projects, and family message boards before modern social networks existed.",
     "Migrated to Multiply in February 2009, which itself later shut down, wiping out historic group archives.", "Microsoft", "United States", "15M Communities"),

    ("MSN Soapbox", "msn-soapbox", "soapbox.msn.com", "Streaming", "CONFIRMED_DEAD", 2006, 2009, "Market Competition",
     "Microsoft's video-sharing portal created to challenge YouTube.",
     "Integrated into MSN Messenger and Hotmail with customizable video playlists and video embeds.",
     "Copyright liabilities and low viewer engagement compared to Google's YouTube forced Microsoft to shut it down in August 2009.", "Microsoft", "United States", "5M Viewers"),

    ("Windows Live Spaces", "windows-live-spaces", "spaces.live.com", "Social", "CONFIRMED_DEAD", 2004, 2011, "Strategic Pivot",
     "Microsoft's MSN Spaces blogging network that connected 120 million global users to Live Messenger.",
     "Allowed MSN Messenger contacts to browse photo albums, music playlists, and blog updates right from the buddy list.",
     "Partnered with Automattic in 2010 to migrate all remaining user blogs to WordPress.com, decommissioning Spaces in March 2011.", "Microsoft", "United States", "120M Spaces"),

    ("Windows Live Mesh", "windows-live-mesh", "mesh.live.com", "Developer tools", "CONFIRMED_DEAD", 2008, 2013, "Strategic Pivot",
     "Ray Ozzie's visionary peer-to-peer cloud folder synchronization and remote desktop service.",
     "Allowed seamless peer-to-peer file synchronization between multiple PCs and Macs without uploading through a central cloud.",
     "Replaced by Microsoft SkyDrive (OneDrive), which abandoned peer-to-peer sync in favor of central cloud servers in February 2013.", "Microsoft", "United States", "5M Syncers"),

    ("Windows Live Essentials", "windows-live-essentials", "explore.live.com/windows-live-essentials", "Web technology", "CONFIRMED_DEAD", 2006, 2017, "Technological Obsolescence",
     "The suite of Windows Movie Maker, Photo Gallery, Mail, and Writer beloved by creators.",
     "Brought lightweight desktop photo editing, blogging (Live Writer), video editing, and mail sync to Windows 7 users.",
     "Support ended in January 2017 as Windows 10 transitioned to built-in universal apps and web services.", "Microsoft", "United States", "100M PC Users"),

    ("Zune Marketplace", "zune-marketplace", "zune.net", "Streaming", "CONFIRMED_DEAD", 2006, 2012, "Strategic Pivot",
     "Microsoft's music store and Zune Pass subscription with monthly keep-10-tracks credits.",
     "Pioneered the 'all-you-can-eat' $14.99/mo streaming model years before Apple Music or Spotify gained US traction, paired with the beloved Zune desktop player.",
     "Rebranded to Xbox Music in 2012, later Groove Music, and finally retired in favor of Spotify partnerships.", "Microsoft", "United States", "3M Subscribers"),

    ("Wunderlist", "wunderlist", "wunderlist.com", "Developer tools", "CONFIRMED_DEAD", 2011, 2020, "Acquired & Discontinued",
     "Christian Reber's gorgeous Berlin-crafted to-do list app with the satisfying chime ding.",
     "Won Apple App of the Year with its elegant wood-grain backgrounds, real-time shared lists, and seamless syncing.",
     "Microsoft acquired 6Wunderkinder in 2015 for $150M; rebuilt it into Microsoft To Do and permanently terminated Wunderlist on May 6, 2020.", "Microsoft / 6Wunderkinder", "Germany", "13M Users"),

    ("Sunrise Calendar", "sunrise-calendar", "calendar.sunrise.am", "Developer tools", "CONFIRMED_DEAD", 2013, 2016, "Acquired & Discontinued",
     "Pierre Valade and Jeremy Le Van's gorgeous keyboard-first calendar for iPhone and Mac.",
     "Unified Google Calendar, iCloud, Exchange, Asana, and Evernote into a gorgeous, cohesive calendar experience.",
     "Microsoft acquired Sunrise in 2015 for $100M, integrated its interface directly into Outlook Mobile, and shut down Sunrise in August 2016.", "Microsoft", "United States", "3M Calendars"),

    ("Terraserver", "terraserver-ms", "terraserver.microsoft.com", "Search", "CONFIRMED_DEAD", 1998, 2012, "Strategic Pivot",
     "Microsoft and USGS's historic online satellite map database that predated Google Earth.",
     "Created by Jim Gray and Microsoft Research, TerraServer was one of the first massive public web databases, serving USGS aerial photographs and satellite tiles.",
     "Absorbed into Virtual Earth and Bing Maps, retiring the original historical portal.", "Microsoft Research", "United States", "30M Queries"),

    ("Microsoft Bob", "microsoft-bob", "microsoft.com/bob", "Web technology", "CONFIRMED_DEAD", 1995, 1996, "Market Competition",
     "Melinda French Gates' user-interface experiment where Windows was represented as a living room.",
     "Replaced traditional desktop file menus with a cartoon living room where Rover the dog guided users to checkbooks and letter writing.",
     "Widely panned by tech critics as condescending and slow; canceled after one year and immortalized in computing folklore.", "Microsoft", "United States", "50K Units"),

    # ==========================================
    # 3. YAHOO! GRAVEYARD EXPANSIONS (DEAD)
    # ==========================================
    ("Yahoo! Directory", "yahoo-directory", "dir.yahoo.com", "Search", "CONFIRMED_DEAD", 1994, 2014, "Technological Obsolescence",
     "Jerry Yang and David Filo's hand-curated directory that organized the World Wide Web.",
     "Started as 'Jerry and David's Guide to the World Wide Web', hiring teams of 'surfers' to categorize every important website into hierarchical trees.",
     "Automated search algorithms rendered manual hierarchical human directories obsolete; Yahoo officially shut it down on Dec 31, 2014.", "Yahoo!", "United States", "100M Portal Surfers"),

    ("Yahoo! Screen", "yahoo-screen", "screen.yahoo.com", "Streaming", "CONFIRMED_DEAD", 2006, 2016, "Lack of Monetization",
     "Yahoo's multi-million dollar original streaming hub that saved Community Season 6.",
     "Spearheaded by Marissa Mayer, Yahoo spent over $100M developing original shows like Community Season 6, Sin City Saints, and Other Space.",
     "Yahoo took a disastrous $42 million write-down on original video programming, shuttering the portal in January 2016.", "Yahoo!", "United States", "15M Viewers"),

    ("Yahoo! Buzz", "yahoo-buzz", "buzz.yahoo.com", "Communities", "CONFIRMED_DEAD", 2008, 2011, "Market Competition",
     "Yahoo's community-driven social news voting portal designed to counter Digg and Reddit.",
     "Allowed users to submit news articles and vote them to the front page of Yahoo's massive portal network.",
     "Failed to match Digg's community authenticity and suffered programmatic spam; closed in April 2011.", "Yahoo!", "United States", "8M Readers"),

    ("Yahoo! Games (Classic)", "yahoo-games-classic", "games.yahoo.com", "Gaming", "CONFIRMED_DEAD", 1998, 2016, "Technological Obsolescence",
     "The beloved casual multiplayer hub of Yahoo! Pool, Checkers, Chess, and Literati.",
     "Built on acquired ClassicGames.com technology, millions played real-time multiplayer board games and chatted in nostalgic game lounges.",
     "Changes in browser security, Flash/Java deprecation, and Yahoo's corporate downsizing led to its final shutdown in May 2016.", "Yahoo!", "United States", "20M Players"),

    ("Yahoo! Avatars", "yahoo-avatars", "avatars.yahoo.com", "Social", "CONFIRMED_DEAD", 2004, 2012, "Strategic Pivot",
     "The customizable cartoon avatars that appeared across Yahoo! Messenger and Answers.",
     "Users dressed pixel avatars in branded clothing, accessories, and emotional poses to represent themselves across Yahoo services.",
     "Yahoo retired the avatar system in December 2012 as modern social media shifted to real photos.", "Yahoo!", "United States", "50M Avatars"),

    ("Yahoo! Widgets", "yahoo-widgets", "widgets.yahoo.com", "Developer tools", "CONFIRMED_DEAD", 2003, 2012, "Technological Obsolescence",
     "Konfabulator — Arlo Rose and Perry Clarke's gorgeous JavaScript desktop widget engine.",
     "Introduced floating desktop widgets for clocks, weather, and battery monitors with translucent alpha-channel graphics. Yahoo bought it in 2005 for $25M.",
     "Windows Vista/7 gadgets and smartphone widgets made desktop widget runtimes obsolete; discontinued in 2012.", "Yahoo!", "United States", "10M Desktops"),

    ("Yahoo! 360", "yahoo-360", "360.yahoo.com", "Social", "CONFIRMED_DEAD", 2005, 2009, "Market Competition",
     "Yahoo's blogging and social networking portal that exploded in Vietnam.",
     "Combined personal blogs, photo albums, and friend lists. While struggling in the US against MySpace, it became the undisputed national blog platform in Vietnam.",
     "Yahoo failed to maintain servers or localize features, shuttering the service in July 2009 to user outcry in Southeast Asia.", "Yahoo!", "United States / Vietnam", "10M Users"),

    ("Broadcast.com", "broadcast-com", "broadcast.com", "Streaming", "CONFIRMED_DEAD", 1995, 2002, "Acquired & Discontinued",
     "Mark Cuban and Todd Wagner's audio-streaming company that Yahoo bought for $5.7 billion.",
     "Originally AudioNet, it broadcast college sports and radio stations over early 14.4k modems, making Mark Cuban a billionaire in the largest dot-com acquisition.",
     "Yahoo dismantled the streaming technology and integrated fragments into Yahoo! Music, completely writing off the $5.7B acquisition.", "Yahoo!", "United States", "500K Streamers"),

    # ==========================================
    # 4. AOL, APPLE & TECH PIONEERS (DEAD)
    # ==========================================
    ("AOL Hometown", "aol-hometown", "hometown.aol.com", "Communities", "CONFIRMED_DEAD", 1998, 2008, "Strategic Pivot",
     "AOL's free web hosting community where millions published their first personal homepages.",
     "Gave AOL subscribers free server space to build homepages about their hobbies, pets, and favorite bands using easy web forms.",
     "AOL shut down Hometown in October 2008 with short notice, deleting a decade of personal 90s cyberculture.", "AOL", "United States", "10M Homepages"),

    ("Apple Ping", "apple-ping", "apple.com/itunes/ping", "Social", "CONFIRMED_DEAD", 2010, 2012, "Market Competition",
     "Steve Jobs' music-oriented social network built directly inside iTunes.",
     "Pitched by Steve Jobs as 'like Facebook and Twitter meet iTunes', it let users follow favorite artists and see friends' music purchases.",
     "Plagued by spam accounts on day one and lack of integration with Facebook; Tim Cook acknowledged its failure and shut it down in Sept 2012.", "Apple", "United States", "2M Users"),

    ("Apple MobileMe", "apple-mobileme", "me.com", "Web technology", "CONFIRMED_DEAD", 2008, 2012, "Strategic Pivot",
     "Steve Jobs' $99/year push email, calendar, and iDisk suite whose launch disaster infuriated Apple.",
     "Promised 'exchange for the rest of us' with seamless over-the-air push sync between Macs, iPhones, and the web.",
     "Server outages and sync failures plagued launch; Steve Jobs famously gathered the team and asked 'Can anyone tell me what MobileMe is supposed to do? Then why doesn't it do it?'; replaced by iCloud.", "Apple", "United States", "3M Subscribers"),

    ("Apple Dark Sky", "dark-sky-app", "darksky.net", "Web technology", "CONFIRMED_DEAD", 2012, 2023, "Acquired & Discontinued",
     "The beloved hyperlocal weather radar app with down-to-the-minute rain notifications.",
     "Pioneered predictive precipitation radar maps and minute-by-minute rain forecasts, winning Apple Design Awards.",
     "Apple acquired Dark Sky in 2020, rolled radar tech into the native iOS Weather app, and killed the standalone app and site on Jan 1, 2023.", "Apple", "United States", "15M Weather Watchers"),

    # ==========================================
    # 5. AT-RISK & SUNSET RADAR WEBSITES (AT_RISK)
    # ==========================================
    ("Skiff Mail", "skiff-mail", "skiff.com", "Developer tools", "CONFIRMED_DEAD", 2020, 2024, "Acquired & Discontinued",
     "Jason Ginsberg's privacy-first end-to-end encrypted workspace acquired by Notion.",
     "Offered encrypted email, collaborative docs, calendar, and decentralized file storage on IPFS.",
     "Acquired by Notion in February 2024; immediately issued a 6-month shutdown notice, terminating all email services on August 10, 2024.", "Notion Labs", "United States", "2M Accounts"),

    ("InVision", "invision-app", "invisionapp.com", "Developer tools", "CONFIRMED_DEAD", 2011, 2024, "Strategic Pivot",
     "Clark Valberg's $2 billion design prototyping titan crushed by Figma's multiplayer canvas.",
     "The undisputed standard for digital product design prototypes and design systems (DSM) throughout the 2010s.",
     "Lost virtually all design market share to Figma; officially announced in January 2024 that all design collaboration products would shut down permanently at the end of 2024.", "InVisionApp Inc.", "United States", "7M Designers"),

    ("Visual Studio App Center", "app-center", "appcenter.ms", "Developer tools", "AT_RISK", 2017, None, "Strategic Pivot",
     "Microsoft's mobile DevOps hub for building, testing, and distributing iOS and Android apps.",
     "Combines HockeyApp and Xamarin Test Cloud into continuous cloud builds, diagnostics, and test distribution.",
     "Microsoft officially announced the service will be retired on March 31, 2025, directing developers to Azure DevOps and GitHub Actions.", "Microsoft", "United States", "500K Mobile Developers"),

    ("Clubhouse", "clubhouse-audio", "clubhouse.com", "Social", "AT_RISK", 2020, None, "Market Competition",
     "Paul Davison and Rohan Seth's drop-in audio chat app that gripped the tech world during 2020 lockdowns.",
     "Reached a $4 billion valuation as Elon Musk, Oprah, and millions gathered in virtual audio rooms to debate ideas.",
     "Lockdowns lifted, and competitors (Twitter Spaces, Discord Stages) cloned the feature; active daily users plummeted by over 80%.", "Alpha Exploration Co.", "United States", "30M Peak Downloads"),

    ("BeReal", "bereal-app", "bereal.com", "Social", "AT_RISK", 2020, None, "Acquired & Discontinued",
     "Alexis Barreyat's anti-influencer app that alerted everyone to snap simultaneous front/back photos.",
     "Sent a daily push notification giving users 2 minutes to capture unfiltered, unedited photos of whatever they were doing.",
     "Suffered severe user fatigue after the novelty faded; acquired by French mobile game publisher Voodoo for €500M in June 2024.", "Voodoo / BeReal SAS", "France", "20M Peak DAU"),

    ("Photobucket", "photobucket", "photobucket.com", "Web technology", "AT_RISK", 2003, None, "Lack of Monetization",
     "The image hosting giant that broke millions of forum avatars when it enacted a $399 paywall.",
     "Alex Welch's platform was the default photo host for MySpace, eBay, and early forums, hosting over 10 billion images.",
     "In 2017, it abruptly broke 3rd-party image hotlinking across the entire web behind a $399/year fee, destroying user trust permanently.", "Photobucket Inc.", "United States", "100M Photographers"),

    # ==========================================
    # 6. ZOMBIE RELICS & SHELL DOMAINS (ZOMBIE)
    # ==========================================
    ("Myspace Today", "myspace-today", "myspace.com", "Social", "ZOMBIE", 2003, None, "Market Competition",
     "The ghost of the former king of social media, surviving as an ad-strewn music news portal.",
     "Once the most visited website in the US, MySpace was acquired by News Corp for $580M and later sold to Specific Media for $35M.",
     "In 2019, an accidental server migration erased 12 years of user music uploads (50 million tracks); operates as a zombie entertainment news shell.", "Viant / Meredith", "United States", "3M Residual Visitors"),

    ("LimeWire Reborn", "limewire-reborn", "limewire.com", "Web technology", "ZOMBIE", 2022, None, "Strategic Pivot",
     "The historic P2P brand resurrected as an AI content generator and NFT marketplace.",
     "After being shut down by federal injunction in 2010, the brand name was purchased by Austrian entrepreneurs in 2022.",
     "Operates as a generative AI music and image platform, having no technical or philosophical connection to the original P2P file-sharing software.", "LimeWire GmbH", "Austria", "1M AI Creators"),

    ("Napster Web3", "napster-web3", "napster.com", "Streaming", "ZOMBIE", 2022, None, "Strategic Pivot",
     "Shawn Fanning's revolutionary P2P brand passed between Roxio, Best Buy, Rhapsody, and crypto consortiums.",
     "Acquired by blockchain investment firm Hivemind and Algorand in 2022 to launch Web3 music streaming initiatives.",
     "A corporate shell traded across five ownership groups since its 2001 federal court shutdown.", "Hivemind / Algorand", "United States", "2M Shell Users"),

    ("RadioShack Crypto", "radioshack-crypto", "radioshack.com", "Web technology", "ZOMBIE", 2021, None, "Bankruptcy",
     "The century-old electronics hobbyist store resurrected by Tai Lopez as a crypto decentralized swap.",
     "After filing for Chapter 11 bankruptcy twice, RadioShack's IP was bought by Retail Ecommerce Ventures and turned into a meme token swap on DeFi.",
     "Functions as a surreal relic of corporate IP rehypothecation.", "Retail Ecommerce Ventures", "United States", "100K Speculators"),

    ("Blockbuster.com", "blockbuster-shell", "blockbuster.com", "Streaming", "ZOMBIE", 2011, None, "Bankruptcy",
     "The video rental giant whose website survived as a single promotional holding page for Dish Network.",
     "Once boasting 9,000 stores, Blockbuster famously turned down buying Netflix for $50 million in 2000 before filing for bankruptcy in 2010.",
     "The website displays nostalgic retro branding and directs visitors to Dish On Demand or the single surviving store in Bend, Oregon.", "Dish Network", "United States", "Parked Brand Shell"),
]

print(f"EXPANSION_BATCH prepared with {len(EXPANSION_BATCH)} items.")
