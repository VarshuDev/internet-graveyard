# Batch 2: Social Networks, Messaging, Microblogging, Forums & Communities (180+ Entities)

BATCH_2 = [
    # --- SOCIAL NETWORKS & MICROBLOGGING ---
    ("SixDegrees", "sixdegrees", "sixdegrees.com", "Social", "CONFIRMED_DEAD", 1997, 2000, "Lack of Monetization",
     "The primordial social networking service based on the 'six degrees of separation' theory.",
     "Created by Andrew Weinreich in 1997, SixDegrees allowed users to list contacts, friends, and bulletin boards before the consumer web was ready for social graph infrastructure.",
     "Early internet users were wary of putting real identities online; infrastructure costs exceeded low advertising returns.", "YouthStream Media", "United States", "3.5M Users"),

    ("AsianAve", "asianave", "asianave.com", "Social", "ZOMBIE", 1997, 2012, "Market Competition",
     "One of the earliest ethnic affinity social networks for Asian Americans.",
     "Founded by Peter Chen and Benjamin Sun under Community Connect Inc., AsianAve was a pioneering hub for young Asian Americans to network, blog, and share music.",
     "Declined as Facebook, MySpace, and modern social platforms consolidated niche demographics.", "Community Connect", "United States", "1.5M Members"),

    ("BlackPlanet", "blackplanet", "blackplanet.com", "Social", "ZOMBIE", 1999, 2011, "Market Competition",
     "The influential African American social and professional network that inspired early Web 2.0.",
     "Launched in 1999 by Omar Wasow, BlackPlanet was one of the first multi-million user social networks, pioneering custom user profiles, forums, and matchmaking.",
     "Acquired by Radio One for $38M in 2008, BlackPlanet suffered severe user attrition to MySpace, Twitter, and Facebook.", "Urban One", "United States", "20M Registered"),

    ("MiGente", "migente", "migente.com", "Social", "CONFIRMED_DEAD", 2000, 2012, "Market Competition",
     "The premier digital community and social portal for the Latino diaspora in the early 2000s.",
     "MiGente offered Spanish and English forums, cultural features, classifieds, and personal blogs for Hispanic youth and young professionals.",
     "Market consolidation by Facebook and Instagram rendered standalone demographic platforms obsolete.", "Community Connect", "United States", "3M Members"),

    ("Makeoutclub", "makeoutclub", "makeoutclub.com", "Social", "CONFIRMED_DEAD", 2000, 2008, "Community Collapse",
     "The cult indie, emo, and hardcore music community that foreshadowed hipster social media.",
     "Created by Christian Nourie in 2000, Makeoutclub was infamous for its brutal elitism, music discussion, and black-and-white photos of early scene culture.",
     "Infighting, trolling, and the explosive rise of MySpace Music pulled the scene away.", "Independent", "United States", "50K Members"),

    ("Consumating", "consumating", "consumating.com", "Social", "CONFIRMED_DEAD", 2003, 2008, "Acquired & Discontinued",
     "The witty tag-based dating and social network created by Ben Brown and Mark Trammell.",
     "Consumating introduced gamified social networking, 'weekly questions', photo tagging, and user ratings before CNET acquired it in 2005.",
     "CNET neglected the platform post-acquisition, and community managers departed as traffic collapsed.", "CNET Networks", "United States", "500K Users"),

    ("Dodgeball", "dodgeball", "dodgeball.com", "Social", "CONFIRMED_DEAD", 2000, 2009, "Acquired & Discontinued",
     "The SMS-based mobile social check-in network created by Dennis Crowley and Alex Rainert.",
     "Dodgeball allowed friends to broadcast their bar and venue check-ins via SMS text message across NYC and major cities. Acquired by Google in 2005.",
     "Google neglected the service, prompting founders to quit and launch Foursquare in 2009. Google killed Dodgeball shortly after.", "Google", "United States", "100K Users"),

    ("Gowalla", "gowalla", "gowalla.com", "Social", "CONFIRMED_DEAD", 2007, 2012, "Acquired & Discontinued",
     "The passport-themed location discovery service with beautifully illustrated digital stamps.",
     "Founded by Josh Williams in Austin, Gowalla competed directly with Foursquare during the SXSW 2010 location boom with charming custom badges.",
     "Facebook acquired Gowalla in December 2011 for its engineering team and promptly shut down the service in March 2012.", "Facebook", "United States", "2M Users"),

    ("Brightkite", "brightkite", "brightkite.com", "Social", "CONFIRMED_DEAD", 2007, 2011, "Lack of Monetization",
     "The pioneer in geo-social streams allowing real-time photo sharing and venue check-ins.",
     "Launched in Burlingame, Brightkite allowed users to see what strangers and friends were doing at specific geographic coordinates.",
     "Acquired by Limbo, pivoted to SMS group messaging, and shut down after burning through venture funding.", "Limbo Inc.", "United States", "2M Check-ins"),

    ("Loopt", "loopt", "loopt.com", "Social", "CONFIRMED_DEAD", 2005, 2012, "Acquired & Discontinued",
     "Sam Altman's Y Combinator inaugural batch location-sharing social utility.",
     "Loopt gave mobile subscribers continuous real-time friend-finder maps on carrier feature phones like Boost Mobile, Sprint, and Verizon.",
     "Struggled with battery drain, privacy backlashes, and low smartphone engagement; acquired by Green Dot for $43M.", "Green Dot", "United States", "5M Carrier Users"),

    ("Path", "path", "path.com", "Social", "CONFIRMED_DEAD", 2010, 2018, "Market Competition",
     "Dave Morin's gorgeous, intimate 50-friend limit social journal for iPhone.",
     "Designed by former Apple and Facebook engineers, Path offered an exquisite user interface restricted to 50 close contacts (later 150).",
     "Acquired by Korean giant Daum Kakao in 2015 after US growth stalled, Path was officially sunset in October 2018.", "Kakao", "United States", "10M Users"),

    ("Ello", "ello", "ello.co", "Social", "CONFIRMED_DEAD", 2014, 2023, "Bankruptcy",
     "The ad-free, anti-Facebook minimalist creator network that went wildly viral in 2014.",
     "Ello promised: 'You are not a product.' When Facebook enforced real-name policies on artists and drag queens, Ello saw 30,000 signups per hour.",
     "Could not retain mass consumer engagement; pivoted to an art marketplace and quietly went dark in mid-2023.", "Ello PBC", "United States", "4M Signups"),

    ("Peach", "peach", "peach.cool", "Social", "OFFLINE", 2016, 2022, "Abandoned",
     "Dom Hofmann's whimsical 'magic words' micro-journaling app that gripped the tech world.",
     "Created by the co-founder of Vine, Peach let users type keywords like 'shout', 'draw', or 'song' to instantly share interactive status snippets.",
     "Viral hype faded within weeks; servers ran unattended for years until Apple iOS updates broke compatibility.", "Byte Inc.", "United States", "1M Downloads"),

    ("Pownce", "pownce", "pownce.com", "Social", "CONFIRMED_DEAD", 2007, 2008, "Acquired & Discontinued",
     "Kevin Rose and Leah Culver's multimedia microblogging platform for file sharing and events.",
     "Built on Django, Pownce allowed users to send files, events, and links directly inside social micro-messages before Twitter supported media.",
     "Acquired by Six Apart in December 2008; service was permanently shut down 10 days later.", "Six Apart", "United States", "500K Users"),

    ("Jaiku", "jaiku", "jaiku.com", "Social", "CONFIRMED_DEAD", 2006, 2012, "Acquired & Discontinued",
     "The Helsinki-born microblogging service that parsed phone presence and Bluetooth status.",
     "Founded by Jyri Engeström and Petteri Koponen, Jaiku was acquired by Google in 2007 to take on Twitter.",
     "Google stalled its development, released it to open source as JaikuEngine, and officially closed it in 2012.", "Google", "Finland", "1M Feeds"),

    ("Plurk", "plurk", "plurk.com", "Social", "ACTIVE", 2008, None, "Market Competition",
     "The horizontal timeline microblogging network with customizable karma and rich emotes.",
     "Plurk pioneered horizontal scrolling timelines and karma badges in 2008. While eclipsed by Twitter in the West, it maintains an active community in Taiwan and Southeast Asia.",
     "Operational under dedicated independent stewardship serving international anime, gaming, and lifestyle microbloggers.", "Plurk Inc.", "Taiwan", "5M Registered"),

    ("FriendFeed", "friendfeed", "friendfeed.com", "Social", "CONFIRMED_DEAD", 2007, 2015, "Acquired & Discontinued",
     "Bret Taylor and Paul Buchheit's aggregator that invented the ubiquitous 'Like' button.",
     "FriendFeed aggregated blogs, tweets, Flickr photos, and Delicious bookmarks into a unified discussion thread. Facebook acquired it in 2009 for $50M.",
     "Facebook incorporated the Like button and team members, leaving FriendFeed in maintenance until pulling the plug in 2015.", "Facebook", "United States", "2M Power Users"),

    ("Google Buzz", "google-buzz", "buzz.google.com", "Social", "CONFIRMED_DEAD", 2010, 2011, "Security & Privacy",
     "Google's disastrous social layer forced directly into every Gmail inbox.",
     "Launched in February 2010, Buzz automatically followed users' most-emailed Gmail contacts, exposing private relationships, ex-spouses, and journalists' sources to the public.",
     "Massive FTC privacy complaints, class action settlements, and user outrage forced Google to sunset Buzz in October 2011.", "Google", "United States", "30M Gmail Auto-Followers"),

    ("Google Wave", "google-wave", "wave.google.com", "Social", "CONFIRMED_DEAD", 2009, 2010, "Technological Obsolescence",
     "Lars and Jens Rasmussen's ambitious real-time collaborative communication protocol.",
     "Google Wave combined email, chat, document editing, and wiki collaboration into live typing 'waves' that bewildered mainstream internet users.",
     "User confusion over what Wave was actually for, combined with severe browser rendering lag, led Google to cancel it after one year.", "Google", "Australia / US", "1M Testers"),

    ("Google+", "google-plus", "plus.google.com", "Social", "CONFIRMED_DEAD", 2011, 2019, "Security & Privacy",
     "Google's $585M corporate crusade to conquer Facebook with Circles and mandatory logins.",
     "Launched by Vic Gundotra in 2011, Google+ tied together YouTube comments, Search, and Android under one social graph. Despite rapid initial signups, engagement remained negligible.",
     "Consumer API security breaches exposing 52M user profiles, coupled with 90% of user sessions lasting under 5 seconds, killed it.", "Google", "United States", "395M Registered Profiles"),

    ("Meerkat", "meerkat", "meerkatapp.co", "Social", "CONFIRMED_DEAD", 2015, 2016, "Market Competition",
     "The breakout SXSW 2015 live-streaming app that sparked the mobile streaming war.",
     "Created by Ben Rubin, Meerkat let users broadcast live video directly to their Twitter followers with a single tap, becoming an overnight phenomenon.",
     "Twitter abruptly cut off Meerkat's access to its social graph at SXSW, launching its own competing app Periscope and smothering Meerkat's viral loop.", "Life On Air", "United States", "2M Streamers"),

    ("Periscope", "periscope", "pscp.tv", "Social", "CONFIRMED_DEAD", 2015, 2021, "Strategic Pivot",
     "The mobile live video broadcasting pioneer that put global breaking news in your pocket.",
     "Acquired by Twitter for $100M before launch, Periscope allowed millions to broadcast protests, space launches, and sunsets with floating hearts and live chat.",
     "Twitter folded live broadcasting into the core Twitter app, and Periscope's standalone infrastructure was discontinued in March 2021.", "Twitter", "United States", "10M Daily Viewers"),

    ("Tout", "tout", "tout.com", "Social", "CONFIRMED_DEAD", 2010, 2018, "Market Competition",
     "The 15-second video microblogging service championed by Shaquille O'Neal.",
     "Tout offered rapid 15-second video updates across smartphones, securing deals with WWE and major television networks.",
     "Crushed by Vine, Instagram Video, and Snapchat Stories; traffic dwindled to zero.", "Tout Inc.", "United States", "3M Users"),

    ("Viddy", "viddy", "viddy.com", "Social", "CONFIRMED_DEAD", 2011, 2014, "Strategic Pivot",
     "The 'Instagram for video' that exploded on Facebook's Open Graph before collapsing.",
     "Viddy offered video filters and 15-second clips. In early 2012, Facebook Open Graph integrations propelled it to 30M users and a $370M valuation.",
     "Facebook tweaked its algorithm to suppress frictionless sharing spam; daily active users cratered by 80% overnight.", "Supernova / Fullscreen", "United States", "35M Signups"),

    ("Socialcam", "socialcam", "socialcam.com", "Social", "CONFIRMED_DEAD", 2011, 2015, "Market Competition",
     "Justin Kan's viral video app acquired by Autodesk for $60 million.",
     "Spun out of Justin.tv, Socialcam used aggressive Facebook Open Graph feeds to surge to 60 million registered users in 2012.",
     "Once Facebook curbed auto-posting on the News Feed, active users plummeted. Autodesk discontinued the app in 2015.", "Autodesk", "United States", "60M Users"),

    ("Dailybooth", "dailybooth", "dailybooth.com", "Social", "CONFIRMED_DEAD", 2009, 2012, "Acquired & Discontinued",
     "The photo-a-day webcam social network that created early internet micro-celebrities.",
     "Founded by Jon Wheatley and Ryan Freitas, Dailybooth encouraged members to upload one photo and caption per day, creating visual life streams.",
     "Acquired by Airbnb for its design talent; the platform was shuttered in November 2012.", "Airbnb", "United States", "3M Photos"),

    ("12seconds", "12seconds", "12seconds.tv", "Social", "CONFIRMED_DEAD", 2008, 2010, "Lack of Monetization",
     "The pre-Vine video status platform that limited clips to twelve seconds.",
     "Founded by Sol Lipman and David Manshoor, 12seconds anticipated the short-form video craze years before mobile camera hardware was ready.",
     "Video processing costs outpaced seed funding; founders shut down the service in October 2010.", "12cm Inc.", "United States", "250K Users"),

    ("Formspring", "formspring", "formspring.me", "Social", "CONFIRMED_DEAD", 2009, 2013, "Community Collapse",
     "The viral anonymous Q&A platform that took high schools and the web by storm in 2010.",
     "Founded by Ade Olonoh, Formspring let users ask anonymous questions to friends' profiles, surging to 20 million users in a matter of months.",
     "Severe cyberbullying scandals, harassment PR crises, and user fatigue caused engagement to collapse; shut down in 2013.", "Formspring Inc.", "United States", "30M Accounts"),

    ("Secret", "secret-app", "secret.ly", "Social", "CONFIRMED_DEAD", 2014, 2015, "Community Collapse",
     "David Byttow and Chrys Bader's stylish anonymous Silicon Valley rumor confessional.",
     "Secret let users share anonymous text confessions over pastel gradients, quickly becoming the primary venue for startup leaks, salary talk, and industry gossip.",
     "Toxic bullying, doxxing, and international regulatory bans forced founder David Byttow to shut down the company and return remaining VC funds.", "Secret Inc.", "United States", "15M Posts"),

    ("Whisper", "whisper", "whisper.sh", "Social", "CONFIRMED_DEAD", 2012, 2023, "Security & Privacy",
     "The anonymous confession app that paired users' intimate secrets with stock imagery.",
     "Whisper grew into a massive global repository of anonymous confessions, secrets, and local geotagged confessions.",
     "A Washington Post exposé revealed Whisper was tracking exact user locations contrary to privacy promises; the app fell into decline and disappeared from app stores.", "MediaLab AI", "United States", "30M MAU"),

    ("Sarahah", "sarahah", "sarahah.com", "Social", "CONFIRMED_DEAD", 2016, 2021, "Security & Privacy",
     "The Saudi Arabian honest anonymous feedback app that topped global App Store charts.",
     "Created by Zain al-Abidin Tawfiq, Sarahah ('honesty' in Arabic) let coworkers and friends send anonymous constructive criticism.",
     "Banned from Apple and Google app stores after petitions and revelations that it uploaded phone contact books without consent.", "Sarahah Ltd", "Saudi Arabia", "300M Users"),

    ("Curious Cat", "curious-cat", "curiouscat.live", "Social", "OFFLINE", 2016, 2022, "Security & Privacy",
     "The anonymous Q&A companion app for Twitter and fandom communities.",
     "Curious Cat enabled fandom creators and artists to field questions from their Twitter followers, generating billions of interaction impressions.",
     "Plagued by server instability, phishing scandals, data leaks, and bot spam; domain became inaccessible.", "Curious Cat Ltd", "United Kingdom", "12M Users"),

    ("Cohost", "cohost", "cohost.org", "Social", "CONFIRMED_DEAD", 2022, 2024, "Lack of Monetization",
     "The anti-algorithm, union-run social network that refused advertising and venture capital.",
     "Created by anti-software software club, Cohost promised chronological feeds, CSS crime formatting, no tracking, and worker-owned operations.",
     "Subscription revenues failed to cover server and hosting costs; officially shut down in October 2024.", "anti-software software club", "United States", "150K Members"),

    ("Post.news", "post-news", "post.news", "Social", "CONFIRMED_DEAD", 2022, 2024, "Market Competition",
     "Noam Bardin's micro-tipping news platform created during the Twitter acquisition exodus.",
     "Backed by Andreessen Horowitz, Post.news offered micropayments for premium journalism articles and publisher integrations.",
     "Consumer willingness to pay micro-cents per article was virtually non-existent; CEO Noam Bardin closed the service in April 2024.", "Post Media", "United States", "650K Signups"),

    ("Artifact", "artifact-news", "artifact.news", "Social", "CONFIRMED_DEAD", 2023, 2024, "Market Competition",
     "Instagram founders Kevin Systrom and Mike Krieger's AI-curated personalized news feed.",
     "Artifact used advanced recommendation transformers to deliver high-quality news and social discussion, winning Google Play's 2023 Everyday Essential award.",
     "Founders determined the market opportunity was not large enough to justify ongoing investment; acquired by Yahoo in April 2024.", "Kevin Systrom / Yahoo", "United States", "1M Downloads"),

    ("Polyvore", "polyvore", "polyvore.com", "Social", "CONFIRMED_DEAD", 2007, 2018, "Acquired & Discontinued",
     "The community mood board and fashion collage platform acquired and erased by SSENSE.",
     "Founded by Pasha Sadri in 2007, Polyvore let millions of fashion enthusiasts curate sets, mix clothing styles, and discover retail items.",
     "Acquired by Canadian luxury retailer SSENSE in April 2018, which instantly redirected polyvore.com to SSENSE and destroyed 11 years of user archives.", "SSENSE", "United States", "20M Monthly Users"),

    ("Wanelo", "wanelo", "wanelo.co", "Social", "CONFIRMED_DEAD", 2012, 2020, "Bankruptcy",
     "The 'digital mall' social shopping platform named from 'Want, Need, Love'.",
     "Created by Deena Varshavskaya, Wanelo was a viral social catalog where teens curated wishlists and discovered indie fashion products.",
     "High transaction fees, counterfeit product disputes, and Instagram Shopping direct checkout killed the business.", "Wanelo Inc.", "United States", "11M Members"),

    # --- MESSAGING, CHAT & VOIP ---
    ("Palringo", "palringo", "palringo.com", "Messaging", "CONFIRMED_DEAD", 2006, 2020, "Strategic Pivot",
     "The UK-born multi-protocol instant messenger and voice push-to-talk platform.",
     "Palringo combined MSN, AIM, Yahoo, and ICQ into a single client on early mobile devices, later pivoting into gamified social chatrooms.",
     "Pivoted into mobile gaming under the name WOLF, decommissioning its original messaging servers.", "Palringo Ltd", "United Kingdom", "80M Users"),

    ("Nimbuzz", "nimbuzz", "nimbuzz.com", "Messaging", "CONFIRMED_DEAD", 2006, 2019, "Market Competition",
     "The cross-platform messaging and VoIP application dominant across South Asia and the Middle East.",
     "Nimbuzz enabled VoIP calls, chatroom group discussions, and social network aggregation across Symbian, BlackBerry, Java ME, and Android.",
     "WhatsApp's global dominance, combined with VoIP blocking by telecommunication monopolies, eroded its user base.", "Nimbuzz BV", "Netherlands / India", "150M Users"),

    ("Fring", "fring", "fring.com", "Messaging", "CONFIRMED_DEAD", 2006, 2017, "Market Competition",
     "The pioneer of mobile 4-way group video calling on Symbian and early iPhone.",
     "Fring introduced free mobile internet calls, Skype bridging, and video calling long before FaceTime existed.",
     "Skype blocked Fring's API gateway in 2010; acquired by Genband for $50M and retired.", "Genband", "Israel", "40M Users"),

    ("Gizmo5", "gizmo5", "gizmo5.com", "Messaging", "CONFIRMED_DEAD", 2003, 2011, "Acquired & Discontinued",
     "Michael Robertson's open-SIP softphone client acquired by Google to build Google Voice.",
     "Formerly Gizmo Project, Gizmo5 offered free internet-to-telephone calling over standard SIP protocols on Linux, Mac, and Windows.",
     "Acquired by Google in November 2009 for $30M; technology integrated into Google Voice and Hangouts before Gizmo5 was shut in 2011.", "Google", "United States", "6M Users"),

    ("Tinychat", "tinychat", "tinychat.com", "Messaging", "ZOMBIE", 2009, 2018, "Market Competition",
     "The disposable multi-cam video chatroom platform that powered online teen culture.",
     "Tinychat allowed anyone to generate an instant 12-camera live video room via short URL without software installation.",
     "Struggled with content moderation, spam, and adult content; acquired by PeerStream and eclipsed by Discord.", "PeerStream", "United States", "10M Users"),

    ("Stickam", "stickam", "stickam.com", "Messaging", "CONFIRMED_DEAD", 2005, 2013, "Lack of Monetization",
     "The pioneer of live streaming video chatrooms and webcam broadcaster communities.",
     "Stickam hosted millions of young webcam broadcasters, bands, and podcast pioneers streaming real-time video directly to profile widgets.",
     "Prohibitive bandwidth and server hosting costs, combined with YouTube Live and Twitch competition, forced its closure in January 2013.", "Advanced Network Technologies", "United States", "9M Registered"),

    ("BlogTV", "blogtv", "blogtv.com", "Messaging", "CONFIRMED_DEAD", 2007, 2013, "Acquired & Discontinued",
     "The Israeli social broadcasting platform that pioneered co-hosted live webcasts.",
     "BlogTV gave vloggers a live interactive stage to chat with fans and invite guest co-hosts on screen.",
     "Acquired by YouNow in March 2013, which absorbed its top broadcasters and shut down the legacy site.", "YouNow", "Israel", "5M Broadcasters"),

    ("Justin.tv", "justin-tv", "justin.tv", "Messaging", "CONFIRMED_DEAD", 2007, 2014, "Strategic Pivot",
     "Justin Kan's lifecasting platform that accidentally spawned Twitch and modern streaming.",
     "Justin Kan strapped a camera to his head in 2007. The site opened to public channels, and its gaming category grew so massive it spun out as Twitch.",
     "Twitch completely outgrew the original platform; founders shut down Justin.tv in August 2014 to focus 100% on Twitch.", "Twitch Interactive", "United States", "30M MAU"),

    ("BBM", "bbm", "bbm.com", "Messaging", "CONFIRMED_DEAD", 2005, 2019, "Market Competition",
     "BlackBerry Messenger — the cultural status symbol of PINs, 'D' and 'R' receipt marks.",
     "BBM was the undisputed king of instant enterprise and teenage mobile messaging with proprietary encryption and low latency over RIM's NOC.",
     "RIM delayed releasing BBM for iOS and Android until late 2013, by which time WhatsApp had already captured global smartphone communications.", "Emtek / BlackBerry", "Canada", "90M MAU"),

    ("Voxer", "voxer", "voxer.com", "Messaging", "ACTIVE", 2011, None, "Market Competition",
     "The push-to-talk walkie-talkie voice messaging app created by a US military veteran.",
     "Tom Katis built Voxer to solve communication lag experienced on battlefields. The app went wildly viral in 2011, allowing real-time voice streaming as you spoke.",
     "Active niche service catering to construction, logistics, and frontline workers requiring push-to-talk radio audio.", "Voxer LLC", "United States", "50M Downloads"),

    ("Houseparty", "houseparty", "houseparty.com", "Messaging", "CONFIRMED_DEAD", 2016, 2021, "Acquired & Discontinued",
     "The serendipitous face-to-face group video hangout app that exploded during 2020 lockdowns.",
     "Created by the makers of Meerkat, Houseparty alerted friends when you were 'in the house' so they could drop in unannounced.",
     "Acquired by Epic Games for $35M; Epic shut it down in October 2021 to repurpose the team for Fortnite in-game social features.", "Epic Games", "United States", "50M Users"),

    ("FireChat", "firechat", "opengarden.com", "Messaging", "CONFIRMED_DEAD", 2014, 2018, "Technological Obsolescence",
     "The off-grid mesh networking messenger used during the Hong Kong Umbrella Movement.",
     "Developed by Open Garden, FireChat let users chat without internet or cell service by hopping peer-to-peer over Bluetooth and Wi-Fi antennas.",
     "High battery drain, severe security vulnerabilities, and Open Garden's corporate bankruptcy caused its disappearance.", "Open Garden Inc.", "United States", "5M Protesters"),

    ("HipChat", "hipchat", "hipchat.com", "Messaging", "CONFIRMED_DEAD", 2010, 2019, "Acquired & Discontinued",
     "Atlassian's team chat solution that dominated developer workplaces before Slack.",
     "Created by Pete Curley and Garret Heaton, HipChat provided IRC-like group rooms with Jira integration, file sharing, and API bots.",
     "Crushed by Slack's superior consumer polish; Atlassian formed a partnership with Slack in 2018, selling HipChat and Stride IP to Slack for sunsetting.", "Atlassian", "United States", "4M Enterprise Users"),

    ("Campfire", "campfire", "campfirenow.com", "Messaging", "CONFIRMED_DEAD", 2006, 2014, "Strategic Pivot",
     "37signals' beloved minimalist web chat tool for real-time team collaboration.",
     "Designed by Jason Fried and David Heinemeier Hansson, Campfire introduced real-time team chat, inline images, and sound effects before modern team messengers existed.",
     "Folded directly into Basecamp 3 as 'Campfires', retiring the standalone service.", "Basecamp LLC", "United States", "1M Teams"),

    ("Flowdock", "flowdock", "flowdock.com", "Messaging", "CONFIRMED_DEAD", 2009, 2022, "Acquired & Discontinued",
     "The team chat tool that unified live chat with an integrated developer inbox.",
     "Created in Finland, Flowdock merged team conversations side-by-side with Git commits, Jira tickets, and server monitoring alerts.",
     "Acquired by Rally Software, then CA Technologies, and finally Broadcom, where it withered until shutdown in August 2022.", "Broadcom / CA", "Finland / US", "500K Users"),

    ("Wickr Me", "wickr-me", "wickr.com", "Messaging", "CONFIRMED_DEAD", 2012, 2023, "Acquired & Discontinued",
     "The military-grade ephemeral encrypted messaging app acquired by Amazon Web Services.",
     "Founded by cyber-security experts, Wickr Me offered peer-to-peer end-to-end encryption with zero-knowledge shredding and no phone number required.",
     "Acquired by AWS in 2021; Amazon shut down consumer-facing Wickr Me in December 2023 to focus exclusively on enterprise AWS Wickr.", "Amazon Web Services", "United States", "10M Downloads"),

    ("Keybase", "keybase", "keybase.io", "Messaging", "ACTIVE", 2014, None, "Acquired & Discontinued",
     "The cryptographic identity mapping and secure end-to-end team messaging platform.",
     "Keybase mapped cryptographic PGP public keys to Twitter, GitHub, and Reddit handles, offering encrypted git, chat, and cloud files. Acquired by Zoom in 2020.",
     "Maintained under Zoom stewardship primarily for security enthusiasts and cryptographic team communication.", "Zoom Video Communications", "United States", "1M Power Users"),

    # --- BLOGGING, RSS & PERSONAL PUBLISHING ---
    ("DeadJournal", "deadjouurnal", "deadjouurnal.com", "Social", "CONFIRMED_DEAD", 2001, 2014, "Community Collapse",
     "The goth and dark alternative answer to LiveJournal with invite-only blood codes.",
     "Created as a rebellious sibling to LiveJournal, DeadJournal required an existing member's invite code and featured dark gothic layouts and unfiltered poetry.",
     "Server outages, lack of maintenance, and changing subcultural aesthetics led to total abandonment.", "Independent", "United States", "100K Accounts"),

    ("Xanga", "xanga", "xanga.com", "Social", "CONFIRMED_DEAD", 1999, 2013, "Market Competition",
     "The iconic teenage blogging platform of custom eProps and glowing HTML backgrounds.",
     "Xanga was the center of middle and high school social life in the early 2000s, hosting millions of daily weblogs, poetry, and web rings.",
     "Failed to transition to modern mobile feeds; held a crowdfunding drive in 2013 that failed to revive the platform.", "Xanga.com Inc.", "United States", "27M Active Blogs"),

    ("OpenDiary", "opendiary", "opendiary.com", "Social", "CONFIRMED_DEAD", 1998, 2014, "Security & Privacy",
     "The website that invented the word 'reader' and the weblog comment section.",
     "Founded by Bruce Ableson in 1998, Open Diary was the very first platform to allow reader comments on personal journal entries, inventing the modern blog dynamic.",
     "Suffered major security breaches and database corruption in 2014, forcing the original historical service offline.", "Bruce Ableson", "United States", "5M Entries"),

    ("Diaryland", "diaryland", "diaryland.com", "Social", "ZOMBIE", 1999, 2010, "Technological Obsolescence",
     "Andrew Smales' quirky, beloved hand-crafted journaling platform.",
     "Launched in 1999, Diaryland was celebrated for its intimate, community-first ethos, simple template editor, and non-commercial vibe.",
     "Never scaled infrastructure or modern mobile features; frozen in time as a nostalgic shell.", "Andrew Smales", "Canada", "2M Diaries"),

    ("TypePad", "typepad", "typepad.com", "Social", "CONFIRMED_DEAD", 2003, 2020, "Market Competition",
     "Six Apart's paid premier blogging service favored by major political and tech thinkers.",
     "Created by Mena and Ben Trott, TypePad powered high-profile blogs like Seth Godin and TechCrunch in the early 2000s.",
     "WordPress and Medium captured the modern publishing ecosystem; Six Apart froze new registrations in 2020.", "Endurance International", "United States", "5M Hosted Blogs"),

    ("Posterous", "posterous", "posterous.com", "Social", "CONFIRMED_DEAD", 2008, 2013, "Acquired & Discontinued",
     "The dead-simple microblogging platform where you published simply by sending an email.",
     "Founded by Sachin Agarwal and Garry Tan, Posterous allowed users to post photos, MP3s, and text by emailing post@posterous.com.",
     "Acquired by Twitter in 2012 for its engineering talent; Twitter shut down all Posterous spaces on April 30, 2013.", "Twitter", "United States", "15M Monthly Readers"),

    ("Storify", "storify", "storify.com", "Social", "CONFIRMED_DEAD", 2010, 2018, "Acquired & Discontinued",
     "The social journalism tool that let reporters weave tweets and photos into live timelines.",
     "Created by Burt Herman and Xavier Damman, Storify was the essential tool for live event reporting across Arab Spring, elections, and breaking news.",
     "Acquired by Livefyre, which was then acquired by Adobe; Adobe shut down Storify in May 2018.", "Adobe Systems", "United States", "8M Stories"),

    ("Bloglines", "bloglines", "bloglines.com", "Search", "CONFIRMED_DEAD", 2003, 2010, "Market Competition",
     "Mark Fletcher's pioneering web-based RSS reader that educated the world on feed syndication.",
     "Bloglines was the premier way to read RSS feeds without desktop software, indexing billions of weblog articles. Acquired by Ask Jeeves in 2005.",
     "Ask.com failed to innovate against Google Reader; announced shutdown in 2010 and later sold off as a shell.", "Ask.com / IAC", "United States", "2M Feeds"),

    ("Netvibes", "netvibes", "netvibes.com", "Web technology", "ZOMBIE", 2005, 2015, "Acquired & Discontinued",
     "The French Ajax personalized startpage that turned RSS into a customized dashboard.",
     "Founded by Tariq Krim, Netvibes let millions organize RSS feeds, podcasts, and weather widgets into rich tabbed drag-and-drop startpages.",
     "Acquired by Dassault Systèmes in 2012 for €20M, shifting focus to corporate business dashboards while consumer startpages languished.", "Dassault Systèmes", "France", "10M Users"),

    ("Pageflakes", "pageflakes", "pageflakes.com", "Web technology", "CONFIRMED_DEAD", 2005, 2012, "Lack of Monetization",
     "The Web 2.0 desktop startpage with 'Flakes' modular draggable content widgets.",
     "Created in Germany, Pageflakes offered shared public dashboards and RSS feeds. Acquired by LiveUniverse in 2008.",
     "LiveUniverse suffered corporate financial problems; Pageflakes went offline without user export notifications.", "LiveUniverse", "Germany / US", "5M Users"),

    ("iGoogle", "igoogle", "google.com/ig", "Web technology", "CONFIRMED_DEAD", 2005, 2013, "Strategic Pivot",
     "Google's beloved personalized portal with themes that changed from day to night.",
     "Launched as Google Personalized Homepage in 2005, iGoogle let users customize widgets for Gmail, Google News, games, and weather alongside a search bar.",
     "Google claimed mobile Chrome and modern Android apps made personalized startpages redundant, sunsetting it in November 2013.", "Google", "United States", "50M Users"),

    ("My Yahoo Classic", "my-yahoo-classic", "my.yahoo.com", "Search", "ZOMBIE", 1996, 2013, "Technological Obsolescence",
     "The original customizable web portal that defined the 1990s startpage experience.",
     "My Yahoo! allowed millions of early internet users to arrange stock tickers, sports scores, weather, and horoscopes using Yahoo's directory.",
     "Smartphones and mobile feeds eroded traditional desktop portal startpages; maintained as an ad-heavy shell.", "Yahoo!", "United States", "70M Portal Visitors"),

    # --- FORUMS, MESSAGE BOARDS & QUESTION HUBS ---
    ("Kuro5hin", "kuro5hin", "kuro5hin.org", "Forums", "CONFIRMED_DEAD", 1999, 2016, "Community Collapse",
     "Rusty Foster's collaborative technology and culture discussion board powered by Scoop.",
     "Kuro5hin ('Technology and Culture, from the Trenches') pioneered collaborative article moderation where users voted stories onto the front page.",
     "Plagued by troll wars, declining moderation, and site crashes; founder Rusty Foster pulled the plug on May 1, 2016.", "Rusty Foster", "United States", "100K Tech Readers"),

    ("Plastic.com", "plastic-com", "plastic.com", "Forums", "CONFIRMED_DEAD", 2001, 2011, "Lack of Monetization",
     "The witty pop culture and media discussion community born from Suck.com alumni.",
     "Operated by Joey Anuff and Carl Steadman, Plastic curated irreverent commentary on news, politics, and internet absurdity.",
     "Advertising revenue dried up, and community activity migrated to Reddit and Twitter, closing its doors in 2011.", "Automatic Media", "United States", "250K Monthly Readers"),

    ("Voat", "voat", "voat.co", "Forums", "CONFIRMED_DEAD", 2014, 2020, "Lack of Monetization",
     "The censorship-free Reddit alternative born out of Switzerland as 'WhoaVerse'.",
     "Founded by Atif Colo, Voat gained massive traffic spikes whenever Reddit banned controversial or hateful subreddits.",
     "Payment processors and hosting providers dropped the platform due to hate speech; servers permanently shut down on Christmas 2020.", "Voat Ltd", "Switzerland", "5M Visitors"),

    ("ChaCha", "chacha", "chacha.com", "Search", "CONFIRMED_DEAD", 2006, 2016, "Bankruptcy",
     "The human-guided search engine where college students answered your questions via SMS.",
     "Founded by Scott Jones, ChaCha paid thousands of human search guides pennies per question to answer queries sent via text message to 242-242.",
     "High carrier SMS fees and the rapid rise of mobile Siri and Google Search made human-powered SMS queries obsolete.", "ChaCha Search Inc.", "United States", "2 Billion Questions Answered"),

    ("KGB Answers", "kgb-answers", "kgb.com", "Search", "CONFIRMED_DEAD", 2008, 2014, "Technological Obsolescence",
     "The 'Knowledge Generation Bureau' human-answered text message directory at 542542.",
     "Promoted with multi-million dollar Super Bowl ads, KGB charged 99 cents per SMS question answered by human agents.",
     "Smartphones and ubiquitous 4G mobile search eliminated paid text-query directories completely.", "KGB Inc.", "United States", "50M Texts"),

    ("Aardvark", "aardvark", "vark.com", "Search", "CONFIRMED_DEAD", 2007, 2011, "Acquired & Discontinued",
     "The social search engine that routed questions to friends-of-friends over instant messenger.",
     "Founded by Max Ventilla and Damon Horowitz, Aardvark used machine learning to match subjective questions to experts in your social graph via chat.",
     "Acquired by Google in 2010 for $50M; dismantled shortly after as Google consolidated resources on Google+.", "Google", "United States", "1M Users"),

    ("Ask MetaFilter", "ask-metafilter", "ask.metafilter.com", "Communities", "ACTIVE", 2003, None, "Market Competition",
     "The thoughtful, crowd-sourced human advice repository famous for solving impossible queries.",
     "A dedicated sub-site of MetaFilter where users pay a one-time $5 fee to ask deep questions regarding ethics, obscure books, DIY repairs, and life choices.",
     "Proudly operational under community-funded independent stewardship.", "MetaFilter LLC", "United States", "500K Archived Threads"),

    ("NeoGAF Classic", "neogaf-classic", "neogaf.com", "Gaming", "CONFIRMED_DEAD", 2004, 2017, "Community Collapse",
     "The premier gaming industry forum where developers, journalists, and insiders broke news.",
     "Originating as Gaming-Age Forums, NeoGAF was the undisputed center of video game industry leaks, E3 hype, and sales figures.",
     "Following sexual misconduct allegations against site owner Tyler Malka in 2017, moderators resigned en masse, and the community migrated to ResetEra.", "Tyler Malka", "United States", "1M Gamers"),

    ("Facepunch Studios", "facepunch", "facepunch.com", "Gaming", "CONFIRMED_DEAD", 2004, 2019, "Community Collapse",
     "Garry Newman's chaotic video game modding forum that birthed Garry's Mod and Rust.",
     "Facepunch Forums were famous for Source engine modding, video game leaks, computer hardware banter, and distinctive user rating icons.",
     "Moderation overhead and aging forum software led Garry Newman to archive the legendary forums in 2019.", "Facepunch Studios", "United Kingdom", "500K Registered Members"),

    ("DigitalPoint Forums", "digitalpoint", "forums.digitalpoint.com", "Forums", "ZOMBIE", 2004, 2014, "Market Competition",
     "The chaotic hub of early webmasters, search engine optimizers, and link traders.",
     "Created by Shawn Hogan, DigitalPoint was the Wild West of Google AdSense arbitrage, SEO black-hat tips, and domain trading in the mid-2000s.",
     "Google algorithmic penalties on link buying, combined with modern ad networks, turned the forum into a ghost town.", "Digital Point Solutions", "United States", "800K Webmasters"),

    ("Warrior Forum", "warrior-forum", "warriorforum.com", "Forums", "ZOMBIE", 1997, 2015, "Market Competition",
     "The notorious online marketing forum where digital affiliate marketing was born.",
     "Founded by Clifton Allen, Warrior Forum hosted thousands of 'Warrior Special Offers' (WSOs) selling affiliate ebooks, sales funnels, and email lists.",
     "Acquired by Freelancer.com in 2014; the era of PDF marketing tactics gave way to YouTube and modern performance ads.", "Freelancer.com", "United States", "1.1M Marketers"),

    ("WebmasterWorld", "webmasterworld", "webmasterworld.com", "Forums", "ACTIVE", 1998, None, "Market Competition",
     "The venerable professional discussion forum tracking Google algorithm updates since PageRank.",
     "Founded by Brett Tabke (creator of Pubcon), WebmasterWorld has tracked every major search algorithm shakeup from Florida and Jagger to Panda and Penguin.",
     "Remains active as a respected professional community for veteran webmasters and technical SEO specialists.", "Brett Tabke", "United States", "250K Webmasters"),
]
