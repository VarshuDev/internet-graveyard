# Batch 4: Developer Tools, Cloud, Platforms, APIs, Browsers & Web Technology (100+ Entities)

BATCH_4 = [
    # --- DEVELOPER PLATFORMS & CLOUD ---
    ("Parse.com", "parse-com", "parse.com", "Developer tools", "CONFIRMED_DEAD", 2011, 2017, "Acquired & Discontinued",
     "Ilya Sukhar's Backend-as-a-Service pioneer acquired and shuttered by Facebook.",
     "Parse revolutionized mobile app development with push notifications, cloud code, and database hosting for 500,000 apps.",
     "Facebook acquired Parse for $85M in 2013, then abruptly announced full shutdown in January 2016, releasing open-source Parse Server.", "Facebook", "United States", "500K Mobile Apps"),

    ("Heroku Free Tier", "heroku-free-tier", "heroku.com", "Developer tools", "CONFIRMED_DEAD", 2007, 2022, "Strategic Pivot",
     "The beloved free eco-dyno and Postgres tier that educated a generation of web developers.",
     "Heroku's free dynos allowed student coders, hobbyists, and bootcamps to deploy Ruby, Node, and Python apps with a simple 'git push heroku main'.",
     "Salesforce sunset free dynos and Postgres in November 2022, citing high server maintenance and crypto-mining abuse.", "Salesforce", "United States", "13M Hosted Apps"),

    ("Cloud9 IDE", "cloud9-ide", "c9.io", "Developer tools", "CONFIRMED_DEAD", 2010, 2019, "Acquired & Discontinued",
     "Ruben Daniels and Rik Arends' browser-based development environment with collaborative terminals.",
     "Cloud9 let developers spin up Ubuntu docker workspaces in Chrome with integrated Node.js runtimes and real-time paired typing.",
     "Amazon Web Services acquired Cloud9 in 2016; transitioned to AWS Cloud9 requiring AWS credit cards and shut down c9.io.", "Amazon Web Services", "Netherlands / US", "1M Developers"),

    ("Nitrous.io", "nitrous-io", "nitrous.io", "Developer tools", "CONFIRMED_DEAD", 2012, 2016, "Lack of Monetization",
     "The rapid cloud development environment backed by Bessemer and 500 Startups.",
     "Nitrous gave developers instant cloud terminals and editors configured for Rails, Python, and Go without local dev environment headaches.",
     "Cloud infrastructure costs exceeded low conversion rates for paid professional tiers; closed doors on November 14, 2016.", "Nitrous Inc.", "Singapore / US", "500K Programmers"),

    ("Koding", "koding", "koding.com", "Developer tools", "CONFIRMED_DEAD", 2011, 2018, "Strategic Pivot",
     "Devrim Yasar's community-driven browser development platform with free VMs.",
     "Koding provided every member a free 3GB Amazon EC2 development server, community chat, and multi-cursor code pairing.",
     "Burned through venture funding maintaining free idle VMs; pivoted to enterprise hackathons before going dark.", "Koding Inc.", "United States", "1.5M Members"),

    ("StackMob", "stackmob", "stackmob.com", "Developer tools", "CONFIRMED_DEAD", 2010, 2014, "Acquired & Discontinued",
     "Ty Amell's mobile API backend platform that competed head-to-head with Parse.",
     "StackMob offered custom server logic, OAuth integration, and push messaging for iOS and Android developers.",
     "Acquired by PayPal in December 2013; PayPal shuttered the public developer platform in May 2014 to deploy the team on internal payments.", "PayPal", "United States", "50K Developers"),

    ("DotCloud", "dotcloud", "dotcloud.com", "Developer tools", "CONFIRMED_DEAD", 2010, 2016, "Strategic Pivot",
     "Solomon Hykes' multi-language PaaS company that gave birth to Docker.",
     "DotCloud was a versatile PaaS supporting Python, Java, Ruby, and PHP. In 2013, founder Solomon Hykes open-sourced their internal container system: Docker.",
     "Docker became a multi-billion dollar revolution; DotCloud PaaS was sold to cloudControl in 2014 and shut down when cloudControl went bankrupt.", "cloudControl", "France / US", "20K Apps"),

    ("Joyent Public Cloud", "joyent-cloud", "joyent.com", "Developer tools", "CONFIRMED_DEAD", 2004, 2019, "Strategic Pivot",
     "Bryan Cantrill's high-performance SmartOS and Node.js infrastructure cloud.",
     "Joyent sponsored Ryan Dahl's Node.js project and provided ultra-fast ZFS and DTrace container infrastructure for Twitter and LinkedIn.",
     "Samsung acquired Joyent in 2016; shut down the public cloud in November 2019 to transition entirely to Samsung internal infrastructure.", "Samsung Electronics", "United States", "100K Containers"),

    ("AppFog", "appfog", "appfog.com", "Developer tools", "CONFIRMED_DEAD", 2010, 2017, "Acquired & Discontinued",
     "Lucas Carlson's multi-cloud PaaS built on Cloud Foundry.",
     "AppFog allowed coders to deploy web applications across AWS, Rackspace, and HP Cloud with simple command-line commands.",
     "Acquired by Savvis / CenturyLink in 2013; merged into CenturyLink Cloud and discontinued as a standalone developer service.", "CenturyLink", "United States", "100K Hosted Apps"),

    ("Google Code", "google-code", "code.google.com", "Developer tools", "CONFIRMED_DEAD", 2006, 2016, "Market Competition",
     "Google's fast, ad-free Subversion and Git open-source project repository.",
     "Hosted legendary open-source tools including Android ROMs, WinDirStat, and Chromium mirrors with clean issue trackers and wiki documentation.",
     "Lost virtually all open-source market share to GitHub; Google officially archived all project repositories in January 2016.", "Google", "United States", "350K Projects"),

    ("CodePlex", "codeplex", "codeplex.com", "Developer tools", "CONFIRMED_DEAD", 2006, 2017, "Market Competition",
     "Microsoft's open-source project hosting website for .NET and Windows developers.",
     "CodePlex hosted thousands of C#, VB.NET, and F# libraries, supporting Mercurial, TFS, and Git version control systems.",
     "Microsoft embraced GitHub across the enterprise (eventually acquiring it); CodePlex was transitioned to read-only archive in December 2017.", "Microsoft", "United States", "100K Projects"),

    ("Gitorious", "gitorious", "gitorious.org", "Developer tools", "CONFIRMED_DEAD", 2008, 2015, "Acquired & Discontinued",
     "The Norwegian open-source Git hosting platform favored by Qt and open-source purists.",
     "Created by Johan Sørensen, Gitorious was the leading open-source alternative to proprietary GitHub, powering Qt, KDE, and openSUSE.",
     "Acquired by rival GitLab in March 2015, which migrated all repositories to GitLab.com and sunset Gitorious servers.", "GitLab", "Norway", "100K Repositories"),

    ("Freshmeat", "freshmeat", "freecode.com", "Developer tools", "CONFIRMED_DEAD", 1997, 2014, "Technological Obsolescence",
     "The definitive daily announcement board for Unix, Linux, and open-source software releases.",
     "Founded by Scoop in 1997, Freshmeat (later Freecode) was the first place developers checked every morning for Linux kernel patches and tarball releases.",
     "GitHub releases, package managers (apt, npm, pip), and social feeds made centralized tarball announcement registries obsolete.", "Dice Holdings", "United States", "500K Software Releases"),

    ("Dark Sky API", "dark-sky-api", "darksky.net", "APIs", "CONFIRMED_DEAD", 2012, 2023, "Acquired & Discontinued",
     "Adam Grossman and Jack Turner's hyperlocal down-to-the-minute precipitation API.",
     "Dark Sky provided incredible radar-backed rain forecasts down to the exact minute for thousands of third-party weather apps, smart mirrors, and IoT devices.",
     "Apple acquired Dark Sky in March 2020; integrated features into Apple Weather and shut down the public developer API on March 31, 2023.", "Apple", "United States", "10B Daily API Calls"),

    ("Weather Underground API", "wunderground-api", "wunderground.com", "APIs", "CONFIRMED_DEAD", 1995, 2018, "Acquired & Discontinued",
     "The beloved grassroots personal weather station (PWS) developer API.",
     "Weather Underground aggregated real-time weather readings from over 250,000 personal weather stations in backyards across the globe.",
     "The Weather Company was acquired by IBM in 2015; IBM sunset the free and affordable developer API tiers in December 2018 to monetize IBM Watson Weather.", "The Weather Company / IBM", "United States", "250K Weather Stations"),

    ("Yahoo! Pipes", "yahoo-pipes", "pipes.yahoo.com", "Web technology", "CONFIRMED_DEAD", 2007, 2015, "Technological Obsolescence",
     "The revolutionary visual node-wiring tool that let anyone remix RSS feeds and APIs.",
     "Created by Pasha Sadri, Pipes gave non-programmers an interactive canvas to fetch, filter, regex, and merge web feeds into custom JSON/RSS feeds.",
     "Yahoo's ongoing corporate contraction and security overhead led to its termination in August 2015, leaving a hole never filled in the open web.", "Yahoo!", "United States", "2M Pipelines"),

    ("Freebase", "freebase", "freebase.com", "APIs", "CONFIRMED_DEAD", 2007, 2015, "Acquired & Discontinued",
     "Metaweb's open, collaborative graph database of human knowledge.",
     "Created by Danny Hillis and Robert Cook, Freebase built a structured graph of entities and relationships, queried using the MQL language.",
     "Google acquired Metaweb in 2010 to form the core foundation of the Google Knowledge Graph; Freebase was turned off in 2015 and migrated to Wikidata.", "Google", "United States", "44M Entities"),

    ("Google Fusion Tables", "google-fusion-tables", "fusiontables.google.com", "Developer tools", "CONFIRMED_DEAD", 2009, 2019, "Strategic Pivot",
     "Google's cloud data management tool that powered data journalism maps across the web.",
     "Fusion Tables allowed journalists and cartographers to upload massive CSV datasets and automatically merge them with Google Maps polygons.",
     "Google deprecated the tool on December 3, 2019, directing users to BigQuery and Google Cloud Maps APIs.", "Google", "United States", "1M Visualized Datasets"),

    ("Adobe Flash Player", "adobe-flash-player", "adobe.com/flash", "Web technology", "CONFIRMED_DEAD", 1996, 2020, "Technological Obsolescence",
     "The plugin runtime that powered 25 years of web games, animations, and interactive creativity.",
     "Created by Charlie Jackson, Jonathan Gay, and Michelle Welsh as FutureSplash Animator, Flash enabled rich multimedia, vector art, and sound on the early web.",
     "Steve Jobs' 2010 'Thoughts on Flash' memo, rampant zero-day vulnerabilities, and HTML5 video killed Flash; Adobe officially executed Flash on Dec 31, 2020.", "Adobe Systems", "United States", "1 Billion Desktops"),

    ("Adobe Shockwave", "adobe-shockwave", "adobe.com/shockwave", "Web technology", "CONFIRMED_DEAD", 1995, 2019, "Technological Obsolescence",
     "Macromedia Director's heavy 3D and rich media browser player.",
     "Shockwave was the engine behind complex CD-ROM style interactive web games, Habbo Hotel's initial versions, and LEGO 3D web games.",
     "Superseded by Flash and modern WebGL engines; Adobe retired the player runtime on April 9, 2019.", "Adobe Systems", "United States", "450M Desktops"),

    ("Microsoft Silverlight", "microsoft-silverlight", "microsoft.com/silverlight", "Web technology", "CONFIRMED_DEAD", 2007, 2021, "Technological Obsolescence",
     "Microsoft's WPF and .NET answer to Adobe Flash and early Netflix streaming.",
     "Silverlight brought C# and XAML to web browsers, powering the 2008 Beijing Olympics streams and Netflix's first desktop browser player.",
     "Chrome and Edge dropped NPAPI plugin architecture; Microsoft officially ended all Silverlight support in October 2021.", "Microsoft", "United States", "300M Installations"),

    ("Unity Web Player", "unity-web-player", "unity3d.com/webplayer", "Gaming", "CONFIRMED_DEAD", 2006, 2016, "Technological Obsolescence",
     "The browser plugin that brought console-grade 3D games to web portals.",
     "Unity Web Player powered 3D browser games on Kongregate, Miniclip, and Facebook before WebGL reached maturity.",
     "NPAPI security deprecation across major browsers killed the plugin; Unity transitioned completely to WebGL compilation.", "Unity Technologies", "Denmark / US", "200M Players"),

    # --- BROWSERS & OPERATING SYSTEMS ---
    ("Internet Explorer", "internet-explorer", "microsoft.com/ie", "Web technology", "CONFIRMED_DEAD", 1995, 2022, "Technological Obsolescence",
     "The web browser that crushed Netscape in the First Browser War and ruled 95% of the web.",
     "Bundled free with Windows 95 OSR2 and Windows 98, IE introduced XMLHttpRequest (creating Ajax) and CSS, but stagnated for years as IE6.",
     "Security flaws, non-standard rendering bugs, and Chrome's ascent eroded its share; retired on June 15, 2022 in favor of Microsoft Edge.", "Microsoft", "United States", "95% Global Web Share"),

    ("Netscape Navigator", "netscape-navigator", "netscape.com", "Web technology", "CONFIRMED_DEAD", 1994, 2008, "Market Competition",
     "Marc Andreessen and Jim Clark's historic browser whose 1995 IPO sparked the Dot-Com Boom.",
     "Netscape Navigator commercialized the World Wide Web, invented JavaScript, SSL encryption, and cookies, becoming an instant cultural icon.",
     "Microsoft bundled Internet Explorer for free into Windows, crushing Netscape's retail business; AOL acquired Netscape and terminated it in 2008.", "AOL / Netscape Communications", "United States", "90% Early Web Share"),

    ("Mosaic Browser", "ncsa-mosaic", "ncsa.illinois.edu/mosaic", "Web technology", "CONFIRMED_DEAD", 1993, 1997, "Technological Obsolescence",
     "The NCSA graphical browser that first displayed inline images and unlocked the World Wide Web.",
     "Developed by Marc Andreessen and Eric Bina at the University of Illinois Urbana-Champaign, Mosaic transformed the web from academic text into a visual medium.",
     "Development ended in January 1997 as the team left to create Netscape Navigator.", "NCSA", "United States", "Pioneered Web Graphics"),

    ("Flock Browser", "flock-browser", "flock.com", "Web technology", "CONFIRMED_DEAD", 2005, 2011, "Market Competition",
     "The 'Social Web Browser' with built-in Flickr, Twitter, Facebook, and RSS bars.",
     "Created by Bart Decrem and Troy Toman, Flock integrated social bookmarks, photo upload bars, and blogging editors directly into Firefox's Gecko engine.",
     "Major social networks released their own rich web apps and mobile apps; Flock shut down in April 2011.", "Flock Inc.", "United States", "10M Downloads"),

    ("RockMelt", "rockmelt", "rockmelt.com", "Web technology", "CONFIRMED_DEAD", 2010, 2013, "Acquired & Discontinued",
     "Marc Andreessen-backed Chromium browser designed entirely around Facebook and Twitter edges.",
     "RockMelt flanked web pages with interactive friend chat drawers and live social notification feeds on the left and right gutters.",
     "Acquired by Yahoo in August 2013 for $60M; Yahoo terminated the browser shortly after.", "Yahoo!", "United States", "5M Users"),

    ("Camino Browser", "camino-browser", "caminobrowser.org", "Web technology", "CONFIRMED_DEAD", 2002, 2013, "Technological Obsolescence",
     "The native Mac OS X Cocoa browser powered by Mozilla's Gecko layout engine.",
     "Developed by Mike Pinkerton and Dave Hyatt, Camino was celebrated for delivering Mac-native UI, Apple Keychain integration, and Bonjour bookmarks.",
     "Could not keep pace with rapid Apple WebKit (Safari) and Google Chrome release cycles; project retired in May 2013.", "Camino Project", "United States", "1M Mac Users"),

    ("WebOS", "webos-palm", "hpwebos.com", "Web technology", "CONFIRMED_DEAD", 2009, 2012, "Strategic Pivot",
     "Jon Rubinstein and Palm's brilliant gesture-driven card OS programmed entirely in HTML/JS.",
     "WebOS introduced gesture navigation, swipe-to-dismiss multitasking cards, and Synergy cloud account linking on the Palm Pre.",
     "HP acquired Palm for $1.2B in 2010, launched the TouchPad, and canceled all hardware 49 days later; open-sourced WebOS and sold it to LG for TVs.", "HP / Palm", "United States", "3M Devices"),

    ("Windows Phone", "windows-phone", "windowsphone.com", "Hardware", "CONFIRMED_DEAD", 2010, 2017, "Market Competition",
     "Microsoft's bold typographic Metro Live Tile mobile operating system.",
     "Windows Phone 7 and 8 won acclaim for smooth 60fps animations, Live Tiles, and Nokia Lumia hardware with peerless Carl Zeiss cameras.",
     "Fatal 'app gap' — Google refused to build YouTube or Maps, and developers bypassed the platform; Microsoft wrote off $7.6B and ceased development.", "Microsoft", "United States", "110M Lumias Sold"),

    ("Firefox OS", "firefox-os", "firefoxos.mozilla.org", "Web technology", "CONFIRMED_DEAD", 2013, 2016, "Market Competition",
     "Mozilla's 'Boot to Gecko' mobile OS where every smartphone app was a pure open web standard.",
     "Targeting low-cost $25 smartphones in developing markets, Firefox OS demonstrated that modern smartphones could run entirely on HTML5 and JavaScript.",
     "Hardware performance was sluggish on entry-level silicon, while cheap Android devices saturated target markets; Mozilla ceased phone sales in 2016.", "Mozilla Foundation", "Worldwide", "20 Mobile Models"),

    ("Pebble Smartwatch", "pebble-smartwatch", "pebble.com", "Hardware", "CONFIRMED_DEAD", 2012, 2016, "Acquired & Discontinued",
     "Eric Migicovsky's record-breaking Kickstarter e-paper smartwatch beloved by hackers.",
     "Pebble featured week-long battery life, transflective sunlight readability, tactile clicky buttons, and an open C/JS developer SDK.",
     "Apple Watch entered the market; Pebble suffered inventory cash crunches and sold its software assets to Fitbit in 2016 for $23M.", "Fitbit / Pebble Inc.", "United States", "2M Smartwatches"),

    ("Ouya", "ouya-console", "ouya.tv", "Hardware", "CONFIRMED_DEAD", 2012, 2015, "Acquired & Discontinued",
     "Julie Uhrman's $99 open Android hackable microconsole that raised $8.5 million on Kickstarter.",
     "Ouya promised to democratize TV video game publishing with an open indie store where every game had a free trial.",
     "Dogged by a cheap controller with mushy buttons and poor Wi-Fi; acquired by Razer in 2015, which shut down Ouya services in June 2019.", "Razer / Ouya Inc.", "United States", "200K Consoles"),

    ("OnLive", "onlive", "onlive.com", "Gaming", "CONFIRMED_DEAD", 2009, 2015, "Bankruptcy",
     "Steve Perlman's jaw-dropping cloud gaming pioneer that streamed Borderlands over thin clients.",
     "Unveiled at GDC 2009, OnLive compressed 720p game frames on server GPUs and streamed them to micro-consoles and PCs with minimal input latency.",
     "Server infrastructure and GPU cluster costs outpaced subscriber revenue; restructured, sold assets to Sony Computer Entertainment for PlayStation Now.", "Sony / OnLive Inc.", "United States", "2.5M Registered"),

    ("Mixer", "mixer-streaming", "mixer.com", "Streaming", "CONFIRMED_DEAD", 2016, 2020, "Market Competition",
     "Microsoft's low-latency interactive streaming platform (formerly Beam) that signed Ninja for $30M.",
     "Mixer pioneered sub-second FTL streaming and Spark currency that let viewers trigger interactive buttons inside streamers' gameplay.",
     "Failed to grow viewers despite signing multi-million dollar exclusivity deals with Ninja and Shroud; Microsoft shut it down in July 2020 and partnered with Facebook Gaming.", "Microsoft", "United States", "30M MAU"),

    ("Smashcast", "smashcast", "smashcast.tv", "Streaming", "CONFIRMED_DEAD", 2017, 2020, "Lack of Monetization",
     "The merger of Hitbox and Azubu that tried to build a high-bitrate esports competitor to Twitch.",
     "Featured 4K 60fps streaming and zero chat delays tailored for European and competitive gaming esports fans.",
     "High streaming bandwidth bills and inability to attract mainstream streamer personalities forced its demise in late 2020.", "Azubu / Hitbox", "Austria / US", "5M Esports Fans"),

    ("Own3d.tv", "own3d-tv", "own3d.tv", "Streaming", "CONFIRMED_DEAD", 2009, 2013, "Bankruptcy",
     "The Austrian gaming video platform that broadcast the first League of Legends World Championship.",
     "Own3d was the market leader in gaming livestreaming in 2011, hosting CLG, TSM, and early StarCraft II tournaments.",
     "Suffered severe liquidity crises and failed to pay months of streamer ad earnings; streamers migrated to Twitch, and Own3d filed for bankruptcy in January 2013.", "Own3d Media GmbH", "Austria", "4M Gamers"),
]
