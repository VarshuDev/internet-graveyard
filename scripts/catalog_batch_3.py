# Batch 3: Streaming, Audio, Video, P2P, Gaming, Virtual Worlds & Web Culture (100+ Entities)

BATCH_3 = [
    # --- P2P, FILE SHARING & TORRENTS ---
    ("Gnutella", "gnutella", "gnutella.wego.com", "Web technology", "CONFIRMED_DEAD", 2000, 2010, "Technological Obsolescence",
     "Justin Frankel's fully decentralized peer-to-peer file sharing protocol.",
     "Created by Nullsoft founder Justin Frankel and Tom Pepper in 2000, Gnutella was the first decentralized P2P network with no central server index, surviving Napster's legal takedowns.",
     "Prone to query flooding, slow routing cascades, and was eventually surpassed by BitTorrent and FastTrack.", "Nullsoft / AOL", "United States", "10M Nodes"),

    ("BearShare", "bearshare", "bearshare.com", "Streaming", "CONFIRMED_DEAD", 2000, 2016, "Legal & Regulatory",
     "The bright orange bear logo P2P file sharing client built on Gnutella.",
     "Founded by Vincent Falco and Free Peers Inc., BearShare was one of the most popular Windows file sharing clients in the mid-2000s.",
     "Acquired by MusicLab for $30M following RIAA lawsuits, stripped of free P2P, relaunched as a paid subscription, and shut down in 2016.", "MusicLab LLC", "United States", "20M Downloads"),

    ("Morpheus", "morpheus-p2p", "musiccity.com", "Streaming", "CONFIRMED_DEAD", 2001, 2008, "Legal & Regulatory",
     "StreamCast Networks' FastTrack and Gnutella client at the center of Supreme Court copyright law.",
     "Led by Michael Weiss, Morpheus peaked with 30 million downloads and was the lead defendant in the landmark MGM Studios, Inc. v. Grokster, Ltd. Supreme Court battle.",
     "Lost Supreme Court decision on contributory copyright infringement liability; bankrupt by 2008.", "StreamCast Networks", "United States", "30M Downloads"),

    ("Grokster", "grokster", "grokster.com", "Streaming", "CONFIRMED_DEAD", 2001, 2005, "Legal & Regulatory",
     "The P2P file-sharing network that established the Supreme Court inducement copyright standard.",
     "Based in Nevis, Grokster licensed FastTrack technology and allowed millions to trade MP3s and movies without centralized index servers.",
     "Unanimous US Supreme Court ruling (MGM v. Grokster) found it liable for copyright infringement; agreed to a $50M settlement and ceased operations.", "Grokster Ltd", "West Indies", "15M Users"),

    ("eDonkey2000", "edonkey2000", "edonkey2000.com", "Streaming", "CONFIRMED_DEAD", 2000, 2006, "Legal & Regulatory",
     "Jed McCaleb's hash-based file sharing protocol that pioneered multi-source downloads.",
     "Created by Jed McCaleb (who later created Mt. Gox and Ripple), eDonkey2000 split large files into chunks identified by MD4 hashes, becoming dominant across Europe.",
     "MetaMachine paid the RIAA $30 million in settlement in September 2006 and decommissioned all client software.", "MetaMachine Inc.", "United States", "20M Simultaneous Users"),

    ("Audiogalaxy", "audiogalaxy", "audiogalaxy.com", "Streaming", "CONFIRMED_DEAD", 1998, 2002, "Legal & Regulatory",
     "Michael Merhej's web-orchestrated MP3 satellite downloader with the iconic green dish.",
     "Audiogalaxy combined a massive web directory of rare indie and bootleg music with a lightweight background desktop client that queued downloads automatically.",
     "RIAA copyright infringement lawsuit forced Audiogalaxy to filter all copyrighted tracks in June 2002; acquired by Dropbox a decade later for talent.", "Audiogalaxy Inc.", "United States", "35M Members"),

    ("WinMX", "winmx", "winmx.com", "Streaming", "CONFIRMED_DEAD", 2000, 2005, "Legal & Regulatory",
     "Frontcode Technologies' peer-to-peer client powered by the proprietary WinMX Peer Network.",
     "Hugely popular in Japan, Canada, and Europe, WinMX featured customizable chat channels, bandwidth throttles, and multiple server connections.",
     "Frontcode received RIAA cease-and-desist letters in September 2005 and shut down primary connection servers.", "Frontcode Technologies", "Canada", "5M Users"),

    ("Mininova", "mininova", "mininova.org", "Streaming", "CONFIRMED_DEAD", 2005, 2017, "Legal & Regulatory",
     "The Dutch BitTorrent indexing titan created by SuprNova alumni that served billions of torrents.",
     "Mininova was the most visited torrent indexing site in the world from 2006 to 2008, hosting millions of active torrents and user comments.",
     "Lost landmark Dutch court lawsuit by anti-piracy group BREIN; forced to filter copyright torrents in 2009, collapsing traffic until shuttering in 2017.", "Mininova BV", "Netherlands", "50M Unique Visitors"),

    ("TorrentSpy", "torrentspy", "torrentspy.com", "Streaming", "CONFIRMED_DEAD", 2004, 2008, "Legal & Regulatory",
     "Justin Bunnell's top-ranked torrent search directory ordered to pay $110 million in damages.",
     "TorrentSpy offered lightning-fast torrent searches and community forums, drawing tens of millions of monthly pageviews.",
     "MPAA hired private investigators who paid a contractor to steal TorrentSpy server emails; federal court entered a $110M default judgment against it.", "Valence Media", "United States", "25M Visitors"),

    ("isoHunt", "isohunt", "isohunt.com", "Streaming", "CONFIRMED_DEAD", 2003, 2013, "Legal & Regulatory",
     "Gary Fung's Canadian torrent search engine that battled Hollywood in court for a decade.",
     "Founded by Gary Fung in 2003, isoHunt crawled over 13 million torrents, becoming the third largest torrent site on the internet.",
     "Agreed to a $110M settlement with the MPAA in October 2013, shutting down all servers ahead of a high-stakes court ruling.", "Gary Fung", "Canada", "13M Torrents"),

    ("KickassTorrents", "kickasstorrents", "kat.cr", "Streaming", "CONFIRMED_DEAD", 2008, 2016, "Legal & Regulatory",
     "The world's biggest torrent portal from 2014 to 2016 with clean UI and active community reviews.",
     "Surpassing The Pirate Bay in monthly visits, KAT featured robust verified badges, multiple domain mirrors, and high community trust.",
     "US Department of Justice seized primary domains in July 2016 and arrested alleged Ukrainian operator Artem Vaulin in Poland.", "Independent", "Ukraine", "50M Monthly Unique"),

    ("ExtraTorrent", "extratorrent", "extratorrent.cc", "Streaming", "CONFIRMED_DEAD", 2006, 2017, "Legal & Regulatory",
     "The second-largest torrent search community famed for in-house release groups ETTV and EthD.",
     "ExtraTorrent was a massive entertainment indexing portal with millions of registered forum members and seeders.",
     "Voluntarily shut down permanently on May 17, 2017, posting a farewell message warning users against clone phishing sites.", "Independent", "Worldwide", "30M Monthly Unique"),

    ("RARBG", "rarbg", "rarbg.to", "Streaming", "CONFIRMED_DEAD", 2008, 2023, "Bankruptcy",
     "The Bulgarian tracker famous for high-quality video encodes and standard release specs.",
     "RARBG was a pillar of internet media preservation and torrent streaming, providing consistent bitrate movies and software for 15 years.",
     "War in Ukraine, rising datacenter electricity prices in Europe, and operator health issues led the team to pull the plug in May 2023.", "RARBG Team", "Bulgaria", "40M Monthly Unique"),

    ("What.cd", "what-cd", "what.cd", "Streaming", "CONFIRMED_DEAD", 2007, 2016, "Legal & Regulatory",
     "The legendary invite-only private tracker and greatest digital music library in human history.",
     "Born on the day OiNK was raided, What.cd cataloged almost 3 million unique torrents encompassing virtually every recorded audio release, vinyl rip, and CD booklet in FLAC.",
     "French cybercrime police (C3N) raided 12 servers in OVH and Free datacenters in November 2016; operators wiped all databases to protect user privacy.", "What.cd Staff", "Worldwide", "200K Audiophiles"),

    ("Oink's Pink Palace", "oinks-pink-palace", "oink.me.uk", "Streaming", "CONFIRMED_DEAD", 2004, 2007, "Legal & Regulatory",
     "Alan Ellis' pristine private music tracker praised by Trent Reznor as an immaculate music archive.",
     "OiNK required stringent audio rip verification, complete ID3 tags, and strict upload/download ratios, serving as the cultural epicenter of early music leaks.",
     "Raided by British police and IFPI in Operation Ark Royal in October 2007; founder Alan Ellis was later acquitted of conspiracy to defraud by a jury.", "Alan Ellis", "United Kingdom", "180K Members"),

    ("RapidShare", "rapidshare", "rapidshare.com", "Web technology", "CONFIRMED_DEAD", 2002, 2015, "Market Competition",
     "The Swiss one-click file hosting giant that consumed hundreds of gigabits of internet traffic.",
     "Founded by Christian Schmid, RapidShare pioneered one-click cyberlocker file downloads with countdown timers, captchas, and premium speed accounts.",
     "Aggressive anti-piracy upload filtering and severe bandwidth restrictions destroyed user popularity; ceased operations in March 2015.", "RapidShare AG", "Switzerland", "40M Daily Visits"),

    ("Hotfile", "hotfile", "hotfile.com", "Web technology", "CONFIRMED_DEAD", 2006, 2013, "Legal & Regulatory",
     "Anton Titov's rapid cyberlocker that offered cash affiliate rewards for downloaded files.",
     "Hotfile paid uploaders cash commissions based on download popularity, fueling massive distribution of copyrighted movies and software.",
     "MPAA won a $80M copyright infringement lawsuit and permanent injunction in federal court in December 2013, shuttering the site.", "Hotfile Corp.", "Panama / US", "100M Uploads"),

    ("Filesonic", "filesonic", "filesonic.com", "Web technology", "CONFIRMED_DEAD", 2010, 2012, "Legal & Regulatory",
     "The mega-cyberlocker that panicked and disabled all public sharing after Megaupload's raid.",
     "Filesonic was generating tens of millions in premium account revenues before the FBI raided Kim Dotcom's Megaupload mansion in January 2012.",
     "Immediately disabled all file sharing capabilities out of fear of criminal prosecution, destroying its value proposition within 24 hours.", "Filesonic Ltd", "United Kingdom", "25M Users"),

    ("FileServe", "fileserve", "fileserve.com", "Web technology", "CONFIRMED_DEAD", 2009, 2012, "Legal & Regulatory",
     "The fast-growing Swiss-owned file locker that terminated affiliate payouts overnight.",
     "FileServe offered gigabit download speeds and lucrative uploader rewards. Like FileSonic, it shut down public sharing and affiliate payouts post-Megaupload.",
     "Users abandoned the platform instantly; company folded under legal pressure.", "FileServe Ltd", "Switzerland / HK", "20M Users"),

    ("DepositFiles", "depositfiles", "depositfiles.com", "Web technology", "ZOMBIE", 2006, 2016, "Market Competition",
     "The ubiquitous 2000s cyberlocker with iconic gold bar premium download buttons.",
     "DepositFiles was a staple of internet file sharing forums, offering 2GB uploads and multi-language download gateways.",
     "Overtaken by cloud storage (Google Drive, Mega) and legal enforcement; exists as an ad-strewn remnant.", "DepositFiles LLC", "Cyprus", "30M Uploads"),

    ("Zippyshare", "zippyshare", "zippyshare.com", "Web technology", "CONFIRMED_DEAD", 2006, 2023, "Lack of Monetization",
     "The beloved 100% free, no-registration, no-throttle file hosting sanctuary.",
     "Zippyshare gave the internet 500MB free file uploads with zero speed limits, no wait times, and direct download links for 17 years.",
     "Rampant ad-blocker usage by 95% of users and skyrocketing European electricity costs forced operators to shut down the servers in March 2023.", "Zippyshare Team", "France", "100M Monthly Visits"),

    # --- STREAMING, MUSIC & AUDIO PLATFORMS ---
    ("MP3.com Classic", "mp3-com-classic", "mp3.com", "Streaming", "CONFIRMED_DEAD", 1997, 2003, "Legal & Regulatory",
     "Michael Robertson's historic digital music store and My.MP3.com cloud music pioneer.",
     "MP3.com allowed independent artists to sell CDs and stream digital tracks, later launching 'Beam-it' where users proved CD ownership to stream from the cloud in 2000.",
     "Judge Jed Rakoff ruled My.MP3.com was copyright infringement, awarding record labels over $160M; assets sold to Vivendi Universal for pennies.", "Michael Robertson", "United States", "25M Music Fans"),

    ("Rdio", "rdio", "rdio.com", "Streaming", "CONFIRMED_DEAD", 2010, 2015, "Bankruptcy",
     "The gorgeous, typography-first music streaming darling built by Skype's founders.",
     "Created by Niklas Zennström and Janus Friis, Rdio featured an exquisite interface, social friend queues, and zero ads, widely revered by designers.",
     "Outspent on marketing by Spotify; filed for Chapter 11 bankruptcy in November 2015 and sold key technology assets to Pandora for $75M.", "Rdio Inc.", "United States", "5M Subscribers"),

    ("Songza", "songza", "songza.com", "Streaming", "CONFIRMED_DEAD", 2007, 2016, "Acquired & Discontinued",
     "The 'Concierge' music curation service that played music based on your exact mood and activity.",
     "Founded by Aza Raskin, Peter Asbill, and Elias Roman, Songza curated playlists for 'Working out', 'Studying without words', and 'Sunny Sunday barbecue'.",
     "Acquired by Google in 2014; concierge technology merged into Google Play Music and YouTube Music before Songza was retired in January 2016.", "Google", "United States", "6M Listeners"),

    ("Lala.com", "lala", "lala.com", "Streaming", "CONFIRMED_DEAD", 2006, 2010, "Acquired & Discontinued",
     "Bill Nguyen's CD-swapping network that pivoted to 10-cent web music streaming.",
     "Lala offered 10-cent web streams and full CD matching in web browsers with zero software installs, securing deals with all major labels.",
     "Apple acquired Lala in December 2009 for $80M to acquire its web audio engineering team; shut down the site in May 2010 to build iTunes in the Cloud.", "Apple", "United States", "2M Music Fans"),

    ("MOG", "mog-music", "mog.com", "Streaming", "CONFIRMED_DEAD", 2005, 2014, "Acquired & Discontinued",
     "David Hyman's music blogging network that launched high-fidelity 320kbps on-demand streaming.",
     "MOG was one of the earliest platforms to offer pristine 320kbps audio streaming on mobile devices and car dashboards.",
     "Acquired by Beats Electronics in 2012 for $14M to create Beats Music, which was in turn bought by Apple to build Apple Music.", "Beats Electronics / Apple", "United States", "1M Subscribers"),

    ("Turntable.fm", "turntable-fm", "turntable.fm", "Streaming", "CONFIRMED_DEAD", 2011, 2013, "Lack of Monetization",
     "Billy Chasen and Seth Goldstein's viral collaborative DJ booth hangout with bobbing avatars.",
     "Users took turns spinning tracks from SoundCloud and Spotify as custom cartoon avatars while the room voted 'Awesome' or 'Lame' to make the DJ bob their head.",
     "Music licensing royalties cost over $1M/year, international rights negotiations failed, and room retention dwindled; shut down in December 2013.", "Stickybits Inc.", "United States", "1M DJs"),

    ("Plug.dj", "plug-dj", "plug.dj", "Streaming", "CONFIRMED_DEAD", 2011, 2021, "Bankruptcy",
     "The international collaborative social DJ community that connected anime, K-pop, and EDM rooms.",
     "Plug.dj allowed global users to queue YouTube and SoundCloud videos in synchronized virtual rooms with custom pixel avatars.",
     "Struggled with ongoing server costs and low subscription conversions; filed for bankruptcy and went offline permanently in 2021.", "Plug DJ Inc.", "United States", "3M Registered DJs"),

    ("Muxtape", "muxtape", "muxtape.com", "Streaming", "CONFIRMED_DEAD", 2008, 2008, "Legal & Regulatory",
     "Justin Ouellette's beautiful 12-track minimalist digital cassette mixtape revolution.",
     "Launched in March 2008, Muxtape let anyone upload 12 MP3 tracks to create a digital mixtape with a clean pastel interface that went instantly viral.",
     "RIAA lawyers shut it down after only five months of operation over lack of statutory webcasting licenses.", "Justin Ouellette", "United States", "500K Mixtapes"),

    ("8tracks", "8tracks", "8tracks.com", "Streaming", "CONFIRMED_DEAD", 2008, 2019, "Legal & Regulatory",
     "David Porter's artisanal community mixtape platform for music discovery and indie aesthetics.",
     "8tracks required users to include at least 8 tracks per mix, cultivating a massive library of indie, study, and mood mixes created by passionate curators.",
     "Royalty rates set by the US Copyright Royalty Board rose significantly, while ad revenue failed to cover costs; ceased streaming in December 2019.", "8tracks Inc.", "United States", "8M Monthly Active"),

    ("Stage6", "stage6", "stage6.divx.com", "Streaming", "CONFIRMED_DEAD", 2006, 2008, "Lack of Monetization",
     "DivX's breathtaking high-definition video portal that outclassed 2006 YouTube.",
     "While YouTube was still streaming blurry 240p Flash video, Stage6 offered 1080p and 720p DivX encoded videos with crystal clarity.",
     "Bandwidth expenses exceeded $1M per month, while users uploaded massive quantities of copyrighted movies; DivX shut it down in February 2008.", "DivX Inc.", "United States", "15M Visitors"),

    ("Joost", "joost", "joost.com", "Streaming", "CONFIRMED_DEAD", 2006, 2012, "Technological Obsolescence",
     "The 'Venice Project' — Niklas Zennström and Janus Friis' peer-to-peer interactive television dream.",
     "Joost raised $45M to distribute broadcast-quality TV channels over P2P software with semi-transparent channel guides and interactive chat.",
     "Heavy desktop software download requirements failed against instant in-browser web players like Hulu and Netflix; sold for parts in 2009.", "Adconion Media", "Luxembourg / UK", "1M Downloads"),

    ("Babelgum", "babelgum", "babelgum.com", "Streaming", "CONFIRMED_DEAD", 2007, 2012, "Lack of Monetization",
     "Silvio Scaglia's high-definition indie film and music video P2P streaming experiment.",
     "Babelgum sought to combine broadcast-quality independent cinema with interactive festivals, funding indie shorts and music videos.",
     "Failed to secure mainstream viewer engagement against YouTube's open ecosystem; dissolved quietly.", "Fastweb / Scaglia", "Italy / UK", "500K Viewers"),

    ("Blip.tv", "blip-tv", "blip.tv", "Streaming", "CONFIRMED_DEAD", 2005, 2015, "Acquired & Discontinued",
     "The independent digital video network that nurtured Red vs. Blue, Nostalgia Critic, and webseries.",
     "Blip offered high revenue sharing for independent video creators, syndicating episodes to iTunes video podcasts and custom video players.",
     "Acquired by Maker Studios in 2013, which was acquired by Disney; Disney shut down Blip in August 2015 and deleted all creator archives.", "Maker Studios / Disney", "United States", "30M Monthly Views"),

    ("Revver", "revver", "revver.com", "Streaming", "CONFIRMED_DEAD", 2005, 2011, "Lack of Monetization",
     "The first video sharing platform in history to share advertising revenue with creators.",
     "Revver attached a static advertising card to the end of QuickTime and Flash videos, splitting ad earnings 50/50 with content creators (paying out the viral 'Diet Coke & Mentos' video).",
     "Acquired by LiveUniverse for $5M in 2008; technical degradation and unpaid royalties killed the community.", "LiveUniverse", "United States", "10M Video Streams"),

    ("Metacafe", "metacafe", "metacafe.com", "Streaming", "CONFIRMED_DEAD", 2003, 2021, "Market Competition",
     "The Israeli short-form video sharing site famous for the 'Producer Rewards Program'.",
     "Metacafe specialized in short video clips, comedy stunts, and video game highlights, paying creators $5 per 1,000 views once a video surpassed 20,000 views.",
     "Unable to compete with YouTube's massive scale and content library; traffic dwindled to zero before quiet shutdown in 2021.", "Metacafe Inc.", "Israel / US", "40M Monthly Visitors"),

    ("Break.com", "break-com", "break.com", "Streaming", "CONFIRMED_DEAD", 1998, 2018, "Market Competition",
     "BigFatBaby turned Break.com — the home of funny viral videos, pranks, and office fails.",
     "Operated by Defy Media, Break.com catered to young men with humorous clips, extreme stunts, and video games.",
     "Defy Media suddenly collapsed in November 2018 amid advertising fraud scandals and financial insolvency, taking Break.com offline.", "Defy Media", "United States", "20M Monthly Visitors"),

    # --- GAMING, VIRTUAL WORLDS & FLASH CULTURE ---
    ("Toontown Online", "toontown-online", "toontown.com", "Gaming", "CONFIRMED_DEAD", 2003, 2013, "Lack of Monetization",
     "Disney's 3D cartoon MMO where players fought corporate Cogs with cream pies and gags.",
     "Developed by Disney Virtual Reality Studio under Mike Goslin, Toontown let kids battle business robot 'Cogs' with slapstick gags across themed neighborhoods.",
     "Disney shifted corporate focus and resources to Club Penguin and mobile games, pulling the plug on September 19, 2013.", "Disney Interactive", "United States", "15M Toons Created"),

    ("Pixie Hollow", "pixie-hollow", "pixiehollow.com", "Gaming", "CONFIRMED_DEAD", 2008, 2013, "Lack of Monetization",
     "Disney's magical fairy virtual world where players decorated hollows and created fashion.",
     "Part of the Disney Fairies franchise, Pixie Hollow allowed young players to design custom fairies, forage ingredients, and play seasonal mini-games.",
     "Disney closed Pixie Hollow alongside Toontown and Pirates Online on September 19, 2013 to pivot toward mobile apps.", "Disney Interactive", "United States", "8M Fairies"),

    ("Pirates of the Caribbean Online", "potco", "piratesonline.com", "Gaming", "CONFIRMED_DEAD", 2007, 2013, "Lack of Monetization",
     "Disney's high-seas MMORPG featuring pirate ship combat, cannon duels, and cursed voodoo.",
     "Developed by Disney's VR Studio, players sailed customized galleons, formed pirate crews, and explored Tortuga and Port Royal.",
     "Closed alongside Disney's other MMO properties in September 2013 as PC subscription revenues declined.", "Disney Interactive", "United States", "5M Pirates"),

    ("Virtual Magic Kingdom", "vmk", "vmk.com", "Gaming", "CONFIRMED_DEAD", 2005, 2008, "Acquired & Discontinued",
     "Disney's beloved theme park MMO created by Amy Jupiter and Sulake for Disneyland's 50th Anniversary.",
     "VMK faithfully recreated Tomorrowland, Adventureland, and Fantasyland, offering virtual park pins redeemed via in-park Disneyland and Disney World quests.",
     "Originally conceived as a limited promotional event for Disneyland's 50th; despite passionate protests and parent petitions, Disney closed it in May 2008.", "Walt Disney Parks and Resorts", "United States", "2M Players"),

    ("FusionFall", "fusionfall", "fusionfall.com", "Gaming", "CONFIRMED_DEAD", 2009, 2013, "Lack of Monetization",
     "Cartoon Network's anime-styled apocalyptic MMO where Dexter and Ben 10 fought Planet Fusion.",
     "Developed by Grigon Entertainment using Unity Web Player, FusionFall brought together 50+ Cartoon Network characters to defend Earth from Lord Fuse.",
     "Transition to a free-to-play model in 2010 failed to generate sufficient revenue; servers closed in August 2013.", "Cartoon Network", "South Korea / US", "8M Players"),

    ("Free Realms", "free-realms", "freerealms.com", "Gaming", "CONFIRMED_DEAD", 2009, 2014, "Lack of Monetization",
     "Sony Online Entertainment's whimsical family MMO featuring kart racing, ninjas, and farming.",
     "Free Realms launched with immense fanfare, reaching 10 million registered players within one year on PC and PlayStation 3.",
     "Sony Online Entertainment restructured, determining the game was no longer economically viable to maintain; servers shut down in March 2014.", "Sony Online Entertainment", "United States", "20M Registered"),

    ("Clone Wars Adventures", "clone-wars-adventures", "clonewarsadventures.com", "Gaming", "CONFIRMED_DEAD", 2010, 2014, "Acquired & Discontinued",
     "Sony Online Entertainment's virtual companion to the Star Wars: The Clone Wars TV series.",
     "Players engaged in lightsaber duels, starfighter dogfights, and customized clone trooper armor alongside Anakin Skywalker and Obi-Wan Kenobi.",
     "Shutdown coincided with Disney's acquisition of Lucasfilm and SOE's MMO portfolio consolidation in March 2014.", "Sony Online Entertainment / LucasArts", "United States", "10M Players"),

    ("Star Wars Galaxies", "star-wars-galaxies", "starwarsgalaxies.station.sony.com", "Gaming", "CONFIRMED_DEAD", 2003, 2011, "Acquired & Discontinued",
     "Raph Koster's legendary sandbox MMO featuring complex player-run economies and cities.",
     "SWG let players live as cantina entertainers, moisture farmers, and starship architects in an emergent galaxy before the controversial 'New Game Enhancements' (NGE).",
     "LucasArts and SOE shut down the servers in December 2011 ahead of the launch of Star Wars: The Old Republic.", "Sony Online Entertainment", "United States", "1M Subscribers"),

    ("The Matrix Online", "matrix-online", "thematrixonline.warnerbros.com", "Gaming", "CONFIRMED_DEAD", 2005, 2009, "Lack of Monetization",
     "The official canonical continuation of The Wachowskis' Matrix trilogy where Morpheus was killed.",
     "Developed by Monolith Productions, MxO featured wire-fu martial arts combat, live actor events, and canonical plotlines supervised by the Wachowskis.",
     "Player subscriptions fell below sustainable thresholds (under 500 active players); servers went dark in July 2009 with a dramatic 'memory dump' event.", "Sony Online Entertainment / WB", "United States", "100K Players"),

    ("City of Heroes", "city-of-heroes", "cityofheroes.com", "Gaming", "CONFIRMED_DEAD", 2004, 2012, "Strategic Pivot",
     "Cryptic Studios and Paragon Studios' beloved comic book superhero MMORPG.",
     "Set in Paragon City, City of Heroes featured the most flexible costume creator of its generation, letting players design any imaginable superhero or villain.",
     "Publisher NCSoft abruptly closed Paragon Studios in August 2012 and shut down the servers in November 2012 despite player rallies in Atlas Park.", "NCSoft", "United States", "2M Superheroes"),

    ("Warhammer Online: Age of Reckoning", "warhammer-online", "warhammeronline.com", "Gaming", "CONFIRMED_DEAD", 2008, 2013, "Legal & Regulatory",
     "Mythic Entertainment's massive Realm vs. Realm fantasy MMORPG with Public Quests.",
     "Warhammer Online pitted Order against Destruction with revolutionary RvR siege warfare, fortress captures, and the innovative Tome of Knowledge.",
     "Licensing agreement between Electronic Arts and Games Workshop expired; EA declined renewal and closed the servers in December 2013.", "Electronic Arts / Mythic", "United States", "1.5M Players"),

    ("Tabula Rasa", "tabula-rasa", "rgtr.com", "Gaming", "CONFIRMED_DEAD", 2007, 2009, "Bankruptcy",
     "Richard Garriott's ill-fated $100 million sci-fi shooter MMORPG.",
     "Lord British's ambitious shooter set on alien worlds featured dynamic battlefield frontlines and alien language logos.",
     "Launched with technical bugs and low subscriber numbers; NCSoft ousted Garriott while he was in space and closed the game in February 2009.", "NCSoft", "United States", "200K Players"),

    ("WildStar", "wildstar", "wildstar-online.com", "Gaming", "CONFIRMED_DEAD", 2014, 2018, "Market Competition",
     "Carbine Studios' vibrant sci-fi MMO featuring telegraph combat and hardcore 40-man raids.",
     "Created by veteran World of Warcraft developers, WildStar combined quirky humor, Pixar-style animation, and intricate housing systems on Planet Nexus.",
     "Punishing hardcore endgame difficulty aliened casual players; NCSoft shut down Carbine Studios and the game in November 2018.", "NCSoft / Carbine", "United States", "3M Players"),

    ("FarmVille", "farmville-original", "farmville.com", "Gaming", "CONFIRMED_DEAD", 2009, 2020, "Technological Obsolescence",
     "Mark Pincus and Zynga's Facebook phenomenon that addicted 83 million farmers to crop harvesting.",
     "FarmVille defined early Facebook gaming: players planted strawberries, sent mystery gifts, and received notifications to harvest crops before they withered.",
     "Adobe ended support for Flash Player on December 31, 2020; Zynga chose not to port the original game to HTML5, shutting it down on New Year's Eve.", "Zynga", "United States", "83M Monthly Active"),

    ("Mafia Wars", "mafia-wars", "mafiawars.com", "Gaming", "CONFIRMED_DEAD", 2008, 2016, "Lack of Monetization",
     "Zynga's text-based browser mobster game that flooded every Facebook feed with job requests.",
     "Players recruited Facebook friends into their mafia families, equipped weapons, and fought rivals across New York, Cuba, and Moscow.",
     "Facebook's news feed algorithmic changes suppressed spam game requests; active players plummeted until Zynga retired it in June 2016.", "Zynga", "United States", "25M Players"),

    ("Pet Society", "pet-society", "petsociety.com", "Gaming", "CONFIRMED_DEAD", 2008, 2013, "Acquired & Discontinued",
     "Playfish's delightful virtual pet game where players decorated pastel dollhouse rooms.",
     "Players dressed adorable custom animal pets, washed them with soap, played ball, and visited friends' houses to earn coins.",
     "Electronic Arts acquired Playfish for $400M in 2009; EA shut down Pet Society in June 2013 to shift resources to mobile games, sparking fan protests.", "Electronic Arts / Playfish", "United Kingdom", "50M Players"),

    ("Restaurant City", "restaurant-city", "restaurantcity.com", "Gaming", "CONFIRMED_DEAD", 2009, 2012, "Acquired & Discontinued",
     "The culinary simulation game where you hired your Facebook friends as waiters and chefs.",
     "Players designed floor plans, traded ingredient cards (lemons, pasta, chocolate), and leveled up recipes from burgers to gourmet cuisine.",
     "Electronic Arts discontinued Restaurant City in June 2012 as player retention shifted from desktop Facebook to iOS and Android.", "Electronic Arts / Playfish", "United Kingdom", "18M Players"),

    ("HQ Trivia", "hq-trivia", "hqtrivia.com", "Gaming", "CONFIRMED_DEAD", 2017, 2020, "Bankruptcy",
     "Rus Yusupov and Colin Kroll's live appointment-viewing mobile trivia phenomenon.",
     "Hosted by Scott Rogowsky, HQ Trivia broadcast live at 9 PM daily, pulling 2.3 million simultaneous players answering 12 questions for real cash prizes.",
     "Tragic death of co-founder Colin Kroll, internal boardroom coup attempts, and failed acquisition deals forced sudden company liquidation in February 2020.", "Intermedia Labs", "United States", "2.3M Concurrent Players"),

    ("Draw Something", "draw-something", "drawsomething.com", "Gaming", "CONFIRMED_DEAD", 2012, 2015, "Acquired & Discontinued",
     "OMGPOP's overnight drawing sensation that Zynga acquired for $180 million at its exact peak.",
     "Dan Porter and OMGPOP built an addictive Pictionary-like game that logged 50 million downloads in 50 days.",
     "Zynga acquired OMGPOP for $180M just as player fatigue set in; active users collapsed from 14M to 10M within weeks of the acquisition.", "Zynga / OMGPOP", "United States", "50M Downloads"),

    ("QuizUp", "quizup", "quizup.com", "Gaming", "CONFIRMED_DEAD", 2013, 2021, "Lack of Monetization",
     "Thor Fridriksson's fast-paced competitive trivia battle app with millions of specialized topics.",
     "QuizUp allowed users to duel friends and strangers in real-time across niche categories from Harry Potter to Organic Chemistry.",
     "Acquired by Glu Mobile; server operational costs for global real-time synchronization could not be covered by advertising; shut down in March 2021.", "Glu Mobile / Plain Vanilla", "Iceland", "100M Players"),

    ("Flappy Bird", "flappy-bird-original", "flappybird.com", "Gaming", "CONFIRMED_DEAD", 2013, 2014, "Strategic Pivot",
     "Dong Nguyen's maddening one-button arcade game that took over the world and was pulled in guilt.",
     "Created by Vietnamese developer Dong Nguyen, Flappy Bird generated $50,000 per day in ad revenue as players repeatedly tapped to fly between green Mario-style pipes.",
     "Nguyen pulled the game from app stores in February 2014, citing overwhelming personal anxiety and guilt over its addictive, destructive nature.", ".GEARS Studios", "Vietnam", "50M Downloads"),

    ("Homestar Runner", "homestar-runner", "homestarrunner.com", "Web technology", "ACTIVE", 2000, None, "Technological Obsolescence",
     "Mike and Matt Chapman's legendary Flash animation universe of Strong Bad Emails and Trogdor.",
     "Created in 2000, Homestar Runner was the gold standard of early internet humor, rejecting outside advertising and merchandise licensing deals.",
     "Maintained and preserved using modern Ruffle Flash emulators; creators occasionally publish new Strong Bad cartoons.", "The Brothers Chaps", "United States", "10M Fans"),

    ("Albino Blacksheep", "albino-blacksheep", "albinoblacksheep.com", "Web technology", "ACTIVE", 2000, None, "Market Competition",
     "Steve Lerner's curated museum of viral early Flash animations, audio gags, and browser games.",
     "The site that popularized 'Badger Badger Badger', 'The End of the World', and 'Llama Song' in the early 2000s.",
     "Preserved and operational with modern HTML5 and Ruffle Flash emulation.", "Steve Lerner", "Canada", "5M Monthly Visitors"),

    ("Stickdeath", "stickdeath", "stickdeath.com", "Web technology", "CONFIRMED_DEAD", 1999, 2013, "Technological Obsolescence",
     "Rob Dobi's gory stick figure anti-theft and anti-crime animation portal.",
     "Stickdeath gained cult status in early school computer labs with 'Supercop' and slapstick stick figure car alarm defenses set to heavy metal guitars.",
     "Flash player deprecation and creator artistic burnout led to its closure in 2013.", "Rob Dobi", "United States", "2M Fans"),

    ("Joe Cartoon", "joe-cartoon", "joecartoon.com", "Web technology", "CONFIRMED_DEAD", 1998, 2016, "Lack of Monetization",
     "Joe Shields' interactive Flash portal famous for 'Frog in a Blender' and 'Gerbil Microwave'.",
     "One of the first viral Flash animation sites to negotiate multi-million dollar syndication deals with Hollywood talent agencies.",
     "Shock humor faded in cultural appeal, and advertising rates plummeted; site went offline.", "Joe Shields", "United States", "10M Views"),
]
