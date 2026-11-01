# Catalog of authentic websites across internet history (Dead, Live, At-Risk, Zombie)

RAW_ENTITIES = [
    # ==========================================
    # 1. SEARCH, DIRECTORIES & WEB 1.0 (DEAD / ZOMBIE)
    # ==========================================
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

    # ==========================================
    # 2. DOT-COM CRASH E-COMMERCE & BUSINESS
    # ==========================================
    ("Pets.com", "pets-com", "pets.com", "Web technology", "CONFIRMED_DEAD", 1998, 2000, "Bankruptcy",
     "The sock puppet mascot that became the ultimate symbol of dot-com bankruptcy.",
     "Pets.com raised $300M, ran Macy's Thanksgiving balloons and Super Bowl ads, but lost money on every bag of dog food shipped.",
     "Absurd customer acquisition costs, shipping bulky dog food at negative margins, and stock market collapse.", "Pets.com Inc.", "United States", "500k Pet Owners"),

    ("Kozmo.com", "kozmo", "kozmo.com", "Web technology", "CONFIRMED_DEAD", 1998, 2001, "Bankruptcy",
     "Free 1-hour bicycle courier delivery for a single DVD or pint of ice cream.",
     "Kozmo dispatched couriers across Manhattan, Boston, and SF with no delivery minimums, losing $10 delivering a $2 chocolate bar.",
     "Fundamentally impossible unit economics, high venture capital burn ($280M), and venture capital freeze.", "Kozmo.com Inc.", "United States", "Hundreds of Thousands"),

    ("Webvan", "webvan", "webvan.com", "Web technology", "CONFIRMED_DEAD", 1996, 2001, "Bankruptcy",
     "The $1 billion robotic warehouse grocery delivery implosion.",
     "Webvan built $30M automated distribution centers in 26 cities before establishing profitability in any single market, burning $800M.",
     "Premature infrastructure overbuilding and massive capital expenditure ahead of demand.", "Webvan Group", "United States", "750k Customers"),

    ("eToys.com", "etoys", "etoys.com", "Web technology", "CONFIRMED_DEAD", 1997, 2001, "Bankruptcy",
     "The online toy retailer whose market cap briefly surpassed Toys 'R' Us.",
     "eToys surged to an $8 billion valuation in 1999 before a disastrous Christmas logistics failure damaged customer trust.",
     "Fulfillment collapse during the 1999 holiday season, high ad spending, and dot-com crash wiped out liquidity.", "eToys Inc.", "United States", "5M Shoppers"),

    ("Boo.com", "boo-com", "boo.com", "Web technology", "CONFIRMED_DEAD", 1998, 2000, "Bankruptcy",
     "Burned $135 million in 18 months trying to sell designer sportswear with dial-up-freezing 3D mannequins.",
     "Boo.com launched in 18 countries simultaneously with 3D Flash mannequins that crashed 56k modems, burning $135M in 18 months.",
     "Excessive international burn rate, technical launch failure, and premature broadband expectations.", "Boo.com Group", "United Kingdom", "100k Dial-Up Users"),

    ("Flooz.com", "flooz", "flooz.com", "Web technology", "CONFIRMED_DEAD", 1998, 2001, "Bankruptcy",
     "The digital currency promoted by Whoopi Goldberg that Russian syndicates drained with stolen credit cards.",
     "Flooz was an online merchant credits currency that collapsed after the FBI discovered a Russian crime ring had laundered millions.",
     "Massive credit card fraud by Russian cyber syndicates and inability to recoup merchant chargebacks.", "Flooz.com Inc.", "United States", "1M Accounts"),

    ("Beenz.com", "beenz", "beenz.com", "Web technology", "CONFIRMED_DEAD", 1998, 2001, "Bankruptcy",
     "The web's original reward micropayment currency: 'The web's currency'.",
     "Users earned 'beenz' for surfing and shopping. European central banks even investigated whether Beenz was attempting to issue global fiat currency.",
     "High transaction fees, merchant skepticism, and dot-com capital market collapse.", "The Beenz.com Company", "United Kingdom", "5M Users"),

    ("CDnow", "cdnow", "cdnow.com", "Web technology", "CONFIRMED_DEAD", 1994, 2002, "Acquired & Discontinued",
     "The pioneering music e-commerce website founded by twin brothers in a Pennsylvania basement.",
     "Founded by Jason and Matthew Olim in 1994, CDnow was one of the web's earliest e-commerce pioneers before being swallowed by Bertelsmann and Amazon.",
     "Merger with Columbia House collapsed, dot-com liquidity crisis forced sale to Bertelsmann, then absorbed into Amazon.", "Bertelsmann / Amazon", "United States", "4M Music Buyers"),

    ("Cyberian Outpost", "cyberian-outpost", "outpost.com", "Web technology", "CONFIRMED_DEAD", 1995, 2001, "Acquired & Discontinued",
     "The computer store famous for shooting gerbils out of cannons in Super Bowl ads.",
     "Outpost.com was founded by Darryl Peck in 1995 and became famous for bizarre shock-value TV commercials, before Fry's Electronics bought it.",
     "Unsustainable price competition and advertising burn; acquired by Fry's Electronics for $0.25 a share.", "Fry's Electronics", "United States", "2M Shoppers"),

    ("Value America", "value-america", "valueamerica.com", "Web technology", "CONFIRMED_DEAD", 1996, 2000, "Bankruptcy",
     "The drop-shipping cyber-mall backed by Paul Allen and FedEx that collapsed in 12 months.",
     "Value America pitched itself as a frictionless cyber-mall without inventory. Its stock surged from $23 to $74 on IPO day before filing for bankruptcy in August 2000.",
     "Crippling customer return rates, drop-shipping vendor logistics failures, and massive ad burn.", "Value America Inc.", "United States", "1M Customers"),

    ("Garden.com", "garden-com", "garden.com", "Web technology", "CONFIRMED_DEAD", 1995, 2000, "Bankruptcy",
     "The premier dot-com gardening site that tried shipping live potted trees by airmail.",
     "Garden.com raised tens of millions and built complex nursery logistics software, but live plants suffered catastrophic transit mortality rates.",
     "High mortality rate shipping live horticulture, seasonal demand cliff, and dot-com cash exhaustion.", "Garden.com Inc.", "United States", "800k Gardeners"),

    ("Furniture.com", "furniture-com", "furniture.com", "Web technology", "CONFIRMED_DEAD", 1998, 2000, "Bankruptcy",
     "Offered free shipping on 300-pound oak armoires across America.",
     "Furniture.com spent $30M on advertising and offered free nationwide delivery on heavy furniture, losing hundreds of dollars on every sofa shipped.",
     "Crippling freight logistics costs and free shipping guarantees on heavy, bulky goods.", "Furniture.com Inc.", "United States", "500k Customers"),

    ("Living.com", "living-com", "living.com", "Web technology", "CONFIRMED_DEAD", 1999, 2000, "Bankruptcy",
     "Amazon's furniture partner that burned $70 million in nine months.",
     "Backed by Amazon and Benchmark Capital, Living.com agreed to pay Amazon $145M over five years for placement. It went bust within nine months.",
     "Crushed by Amazon placement contract commitments, delivery delays, and high freight return costs.", "Living.com Inc.", "United States", "300k Customers"),

    ("MotherNature.com", "mothernature", "mothernature.com", "Web technology", "CONFIRMED_DEAD", 1998, 2000, "Bankruptcy",
     "The vitamins and organic supplements retailer that spent $2 to make $1.",
     "MotherNature raised $46M in an IPO to sell herbal vitamins online, but spent $50 for every $10 of supplements purchased.",
     "Extreme customer acquisition costs, inventory spoilage, and collapse of investor backing.", "MotherNature.com Inc.", "United States", "400k Shoppers"),

    ("CyberRebate", "cyberrebate", "cyberrebate.com", "Web technology", "CONFIRMED_DEAD", 1998, 2001, "Bankruptcy",
     "The 100% mail-in-rebate scheme that collapsed leaving customers owed $20 million.",
     "CyberRebate sold products at 10x retail price with the promise of a 100% mail-in rebate check in 14 weeks, functioning like a legal Ponzi scheme.",
     "Ran out of new customer funds to pay incoming rebate obligations; filed Chapter 11 in May 2001.", "CyberRebate.com Inc.", "United States", "500k Shoppers"),

    ("Kibu.com", "kibu", "kibu.com", "Communities", "CONFIRMED_DEAD", 1999, 2000, "Strategic Pivot",
     "The teen girl portal that threw a lavish $500,000 launch party and shut down 46 days later.",
     "Backed by Kleiner Perkins with $22 million, Kibu built an office with custom yoga studios, held a massive launch gala, and closed 46 days later.",
     "Founders realized customer acquisition was unsustainable and returned remaining cash to investors before burning it all.", "Kleiner Perkins", "United States", "50k Teen Girls"),

    ("MarchFirst", "marchfirst", "marchfirst.com", "Developer tools", "CONFIRMED_DEAD", 2000, 2001, "Bankruptcy",
     "The giant dot-com consulting firm born from a $3 billion merger that went bankrupt in 13 months.",
     "Formed by merging Whittman-Hart and USWeb/CKS in March 2000 with 10,000 employees. When dot-com startups ceased paying bills, it imploded.",
     "Clients were bankrupt dot-coms that defaulted on bills; massive uncollectible debt forced bankruptcy.", "MarchFirst Inc.", "United States", "10,000 Staff"),

    ("drkoop.com", "drkoop", "drkoop.com", "Web technology", "CONFIRMED_DEAD", 1997, 2001, "Bankruptcy",
     "Former US Surgeon General C. Everett Koop's medical portal that lost $100M.",
     "Surgeon General C. Everett Koop launched this health portal, raising $88M in an IPO. It paid AOL $89M for guaranteed placement but lacked revenue.",
     "Predatory traffic deal with AOL drained its cash; credibility damaged by sponsored medical content.", "drkoop.com Inc.", "United States", "5M Patients"),

    ("Beyond.com", "beyond-com", "beyond.com", "Web technology", "CONFIRMED_DEAD", 1994, 2002, "Bankruptcy",
     "The 'Software Superstore' that pioneered digital software downloads in 1997.",
     "Beyond.com sold boxed and downloadable software. Its IPO surged in 1999, but high inventory costs and competition from Amazon crushed margins.",
     "Pivoted to e-commerce outsourcing for enterprise; ran out of cash during the tech downturn in 2002.", "Beyond.com Corporation", "United States", "1M Customers"),

    ("Egghead.com", "egghead", "egghead.com", "Web technology", "CONFIRMED_DEAD", 1984, 2001, "Bankruptcy",
     "The nationwide brick-and-mortar software retail chain that closed all stores to go 100% online.",
     "In 1998, Egghead closed all 80 of its physical computer stores to bet entirely on Egghead.com. The online store went bankrupt in August 2001.",
     "Abandoning physical retail cashflow for unprofitable online price wars ended in Chapter 11.", "Fry's / Egghead Inc.", "United States", "3M Customers"),

    # ==========================================
    # 3. COMMUNITIES, HOMEPAGES & BLOGGING
    # ==========================================
    ("GeoCities", "geocities", "geocities.com", "Communities", "CONFIRMED_DEAD", 1994, 2009, "Acquired & Discontinued",
     "The third most-visited website on Earth organized into 38 virtual neighborhoods.",
     "GeoCities hosted 38 million personal homepages organized by theme (SiliconValley, Area51, Hollywood). Yahoo acquired it for $3.6B in 1999 and killed it in 2009.",
     "Yahoo neglected social web innovations; the rise of MySpace and Facebook rendered static HTML homepages obsolete.", "Yahoo!", "United States", "38M Homepages"),

    ("Tripod.com", "tripod", "tripod.com", "Communities", "ZOMBIE", 1992, 2005, "Acquired & Discontinued",
     "The college homepage builder that accidentally invented the popup ad.",
     "Founded in 1992, Tripod hosted millions of user homepages. An engineer wrote code for a separate window to keep ad sponsors happy—creating the popup ad.",
     "Acquired by Lycos; user base migrated to MySpace, LiveJournal, and modern blogging platforms.", "Lycos", "United States", "18M Pages"),

    ("Angelfire", "angelfire", "angelfire.com", "Communities", "ZOMBIE", 1996, 2005, "Acquired & Discontinued",
     "The neon HTML canvas of animated flames, under-construction GIFs, and MIDI soundtracks.",
     "Angelfire gave millions of teenagers their first taste of HTML authoring and web rings, before being acquired by Lycos.",
     "Blogging engines and social profiles replaced personal HTML directory sites.", "Lycos", "United States", "14M Pages"),

    ("Xoom.com", "xoom", "xoom.com", "Communities", "CONFIRMED_DEAD", 1996, 1999, "Acquired & Discontinued",
     "The unlimited free homepage host and clipart bazaar of the 1990s.",
     "Xoom provided unlimited free web hosting and clipart libraries, reaching millions of members before NBC acquired it for NBCi.",
     "Swallowed by NBCi; dismantled during the dot-com crash.", "NBC", "United States", "12M Members"),

    ("FortuneCity", "fortunecity", "fortunecity.com", "Communities", "CONFIRMED_DEAD", 1997, 2012, "Bankruptcy",
     "The European GeoCities with millions of residents in London and Frankfurt.",
     "FortuneCity hosted millions of personal web pages organized into cyber-districts before a storage server crash in 2012 permanently wiped remaining sites.",
     "Catastrophic storage disk array failure in 2012 permanently destroyed remaining user websites.", "FortuneCity plc", "United Kingdom", "20M Residents"),

    ("Crosswinds", "crosswinds", "crosswinds.net", "Communities", "CONFIRMED_DEAD", 1997, 2002, "Lack of Monetization",
     "The unlimited free web host that promised 'no popup ads forever'.",
     "Crosswinds was beloved for offering 100% ad-free unlimited web space funded by ethical sponsorships, until bandwidth bills exceeded revenue.",
     "Bandwidth expenses exceeded ad sponsorship revenues during the 2001 advertising drought.", "Crosswinds Inc.", "United States", "5M Members"),

    ("Homestead Classic", "homestead-classic", "homestead.com", "Communities", "ZOMBIE", 1996, 2006, "Strategic Pivot",
     "The drag-and-drop WYSIWYG website builder that let anyone build homepages without HTML.",
     "Homestead allowed users to drag images and text anywhere on a canvas without writing a line of HTML code, reaching 12 million members.",
     "Pivoted away from free consumer websites to paid small business e-commerce hosting; acquired by Intuit.", "Intuit", "United States", "12M Websites"),

    ("HyperMart", "hypermart", "hypermart.net", "Communities", "CONFIRMED_DEAD", 1997, 2002, "Acquired & Discontinued",
     "The first free web host with CGI script and Perl database support for small businesses.",
     "Founded in 1997 by Anthony Chong, HyperMart provided free commercial web hosting with server-side scripting in exchange for a banner ad.",
     "Acquired by Go2Net and InfoSpace; free hosting tiers eliminated.", "InfoSpace", "United States", "3M Business Pages"),

    ("Freefall (50megs)", "50megs", "50megs.com", "Communities", "CONFIRMED_DEAD", 1998, 2004, "Acquired & Discontinued",
     "Generous 50MB of free space in an era when competitors only gave 5MB.",
     "Part of the FreedomList network, 50megs was a favorite for download mirrors, game clans, and early web rings.",
     "Acquired by United Online (NetZero/Juno) and converted into a pay-to-play hosting service.", "United Online", "United States", "4M Accounts"),

    ("Bravenet Classic", "bravenet", "bravenet.com", "Developer tools", "ZOMBIE", 1997, 2008, "Technological Obsolescence",
     "The Swiss Army knife of free guestbooks, visitor counters, and web polls for 90s webmasters.",
     "Bravenet provided copy-paste JavaScript widgets that powered visitor hit counters, guestbooks, and mailing lists for millions of indie websites.",
     "Modern CMS platforms (WordPress) and social widgets (Facebook Like button) made standalone hit counters obsolete.", "Bravenet Media", "Canada", "15M Webmasters"),

    # ==========================================
    # 4. SOCIAL MEDIA PIONEERS (DEAD / ZOMBIE)
    # ==========================================
    ("Friendster", "friendster", "friendster.com", "Social", "ZOMBIE", 2002, 2011, "Market Competition",
     "The original social network that turned down Google's $30M buyout and buckled under slow servers.",
     "Founded by Jonathan Abrams in 2002, Friendster invented the modern social network concept. Crushed by database latency, users fled to MySpace.",
     "Crippling 40-second page load times, strict real-name enforcement against 'Fakesters', and user migration to MySpace.", "MOL Global", "United States / Malaysia", "115M Users"),

    ("Myspace Classic", "myspace-classic", "myspace.com", "Social", "ZOMBIE", 2003, 2010, "Market Competition",
     "The custom HTML kingdom of Tom, Top 8 Friends, and profile song autoplays.",
     "Founded by Chris DeWolfe and Tom Anderson, MySpace was the most visited website in the US in 2006. News Corp bought it for $580M; Facebook overtook it.",
     "Cluttered spam-filled profiles, slow infrastructure, and Facebook's cleaner real-identity platform.", "News Corp", "United States", "300M Registered"),

    ("Orkut", "orkut", "orkut.com", "Social", "CONFIRMED_DEAD", 2004, 2014, "Strategic Pivot",
     "Google's 20% project social network that conquered Brazil and India.",
     "Created by Google engineer Orkut Buyukkokten, Orkut was a massive cultural phenomenon in Brazil and India before Google killed it for Google+.",
     "Google diverted engineering and marketing resources to Google+; users migrated to Facebook and WhatsApp.", "Google", "United States / Brazil", "300M Users"),

    ("Bebo", "bebo", "bebo.com", "Social", "ZOMBIE", 2005, 2010, "Acquired & Discontinued",
     "The UK and Irish social sensation that AOL bought for $850M and sold for $10M.",
     "Founded by Michael and Xochi Birch in 2005, Bebo dominated UK schools. AOL bought it for $850 million in 2008 in one of the worst tech acquisitions ever.",
     "AOL management neglected the platform as users defected to Facebook; sold to Criterion for $10M in 2010.", "AOL", "United Kingdom", "40M Users"),

    ("Hi5", "hi5", "hi5.com", "Social", "ZOMBIE", 2003, 2011, "Market Competition",
     "The third most-popular social network of 2007 with massive followings in Latin America.",
     "Founded by Ramu Yalamanchi in 2003, Hi5 reached 70 million members in Latin America, Europe, and Asia before pivoting to social gaming.",
     "Fell behind Facebook's global localization and mobile app development.", "Tagged / Ifwe", "United States", "70M Users"),

    ("Path", "path", "path.com", "Social", "CONFIRMED_DEAD", 2010, 2018, "Market Competition",
     "Dave Morin's gorgeous private mobile social network capped at 50 close friends.",
     "Path was hailed for its revolutionary UI, clock navigation, and intimate 50-friend limit (based on Dunbar's number). Kakao bought it in 2015 and closed it in 2018.",
     "Capping friend connections limited viral network growth; mobile users preferred Instagram and WhatsApp.", "Kakao", "United States / Indonesia", "10M Users"),

    ("Secret", "secret-app", "secret.ly", "Social", "CONFIRMED_DEAD", 2014, 2015, "Community Collapse",
     "The anonymous Silicon Valley confession app that founders killed out of moral guilt.",
     "Founded by David Byttow and Chrys Bader, Secret went viral for anonymous workplace and tech gossip, raising $35M, before bullying made founders shutter it.",
     "Founder David Byttow voluntarily shut the app and returned $20M to investors after pervasive cyberbullying ruined the culture.", "Secret Inc.", "United States", "15M Users"),

    ("Yik Yak Classic", "yik-yak-classic", "yikyak.com", "Social", "CONFIRMED_DEAD", 2013, 2017, "Community Collapse",
     "The location-based anonymous college bulletin board valued at $400 million.",
     "Founded by Tyler Droll and Brooks Buffington, Yik Yak let students post anonymous messages visible within a 5-mile radius. Cyberbullying and user handles killed it.",
     "Introduction of mandatory user handles destroyed anonymity; harassment controversies led to campus bans.", "Square Inc.", "United States", "Millions of College Students"),

    ("DailyBooth", "dailybooth", "dailybooth.com", "Social", "CONFIRMED_DEAD", 2009, 2012, "Acquired & Discontinued",
     "The webcam selfie journal where users shared 'your life in pictures today'.",
     "DailyBooth asked users to take a photo of themselves every day with a caption. It attracted early internet stars before Airbnb acquired the team.",
     "Acquired by Airbnb for an engineering acqui-hire; service shut down in November 2012.", "Airbnb", "United States", "3M Photo Diaries"),

    ("Formspring", "formspring", "formspring.me", "Social", "CONFIRMED_DEAD", 2009, 2013, "Community Collapse",
     "The viral anonymous question-and-answer sensation that took over high schools.",
     "Formspring launched in November 2009 and gained 10 million users in 45 days, allowing friends to ask anonymous questions on profiles.",
     "Pervasive cyberbullying controversies, high hosting costs, and user migration to Ask.fm.", "Formspring Inc.", "United States", "30M Accounts"),

    ("Gowalla", "gowalla", "gowalla.com", "Social", "CONFIRMED_DEAD", 2007, 2012, "Acquired & Discontinued",
     "The exquisitely illustrated location check-in game that rivaled Foursquare.",
     "Founded by Josh Williams, Gowalla featured illustrated passport stamps and digital item drops. Facebook acquired the team in 2011 and closed the app.",
     "Acquired by Facebook in December 2011 to build Facebook Places; app terminated months later.", "Facebook", "United States", "2M Explorers"),

    ("Apple Ping", "apple-ping", "apple.com/ping", "Social", "CONFIRMED_DEAD", 2010, 2012, "Strategic Pivot",
     "Steve Jobs' social network for music inside iTunes that spammed users immediately.",
     "Announced by Steve Jobs in September 2010, Ping let users follow artists and friends inside iTunes. Lacking Facebook integration, it was flooded with spam.",
     "Locked inside the desktop iTunes app without external web or Facebook integration; rapid user disinterest.", "Apple", "United States", "1M Day-One Users"),

    ("Google Buzz", "google-buzz-classic", "buzz.google.com", "Social", "CONFIRMED_DEAD", 2010, 2011, "Security & Privacy",
     "The Gmail social network that accidentally broadcast users' private contacts to the public.",
     "Google Buzz auto-subscribed users' most frequent email contacts as public followers, exposing sensitive relationships and causing an FTC investigation.",
     "FTC privacy consent decree, user backlash, and replacement by Google+.", "Google", "United States", "Tens of Millions of Gmail Users"),

    ("Google+", "google-plus-classic", "plus.google.com", "Social", "CONFIRMED_DEAD", 2011, 2019, "Security & Privacy",
     "Google's multi-billion dollar Facebook competitor with Circles, Hangouts, and forced YouTube logins.",
     "Launched in 2011 as a corporate priority, Google forced Google+ logins onto YouTube and Gmail. Following an API privacy breach in 2018, Google shuttered it.",
     "Low organic consumer engagement ('ghost town'), YouTube user backlash, and a 500,000-user API data breach.", "Google", "United States", "500M Linked Accounts"),

    ("Meerkat", "meerkat-app", "meerkatapp.co", "Streaming", "CONFIRMED_DEAD", 2015, 2016, "Market Competition",
     "The breakout SXSW 2015 live-streaming sensation that Twitter crushed in weeks.",
     "Meerkat launched at SXSW 2015 and went viral for 1-click mobile livestreaming to Twitter. Twitter acquired rival Periscope and cut Meerkat's social graph API.",
     "Twitter blocked Meerkat from its social graph API and heavily promoted Periscope.", "Life on Air", "United States", "2M Streamers"),

    ("Periscope", "periscope-classic", "pscp.tv", "Streaming", "CONFIRMED_DEAD", 2015, 2021, "Strategic Pivot",
     "Twitter's red-balloon livestreaming app that broadcast the world in real time.",
     "Acquired by Twitter for $100M before launch, Periscope popularized mobile live video with floating heart reactions. Twitter absorbed it into native tweets.",
     "Declining usage and high maintenance costs; Twitter integrated native livestreaming directly into main apps.", "Twitter / X", "United States", "10M Daily Viewers"),

    ("Houseparty", "houseparty-classic", "houseparty.com", "Social", "CONFIRMED_DEAD", 2016, 2021, "Acquired & Discontinued",
     "The spontaneous video hangout rooms app that defined early pandemic lockdowns.",
     "Created by Life on Air (makers of Meerkat), Houseparty notified friends when you were 'in the house' for spontaneous video chat. Epic Games bought it in 2019.",
     "Epic Games discontinued the app in October 2021 to repurpose the team for Fortnite social features.", "Epic Games", "United States", "50M Pandemic Users"),

    ("Peach", "peach-app", "peach.cool", "Social", "CONFIRMED_DEAD", 2016, 2020, "Lack of Monetization",
     "Vine creator Dom Hofmann's quirky social network with magic words like 'draw' and 'song'.",
     "Peach launched in January 2016 with magic commands (type 'shout' for large text, 'battery' for battery percentage). It spiked virally for two weeks then faded.",
     "Faded into a niche community without capital or user acquisition strategies.", "Byte Inc.", "United States", "1M Viral Downloads"),

    ("Artifact", "artifact-news", "artifact.news", "Social", "CONFIRMED_DEAD", 2023, 2024, "Lack of Monetization",
     "Instagram founders Kevin Systrom and Mike Krieger's personalized AI news feed.",
     "Launched in January 2023 with AI summarization and comment sections, Systrom and Krieger shut it down in January 2024 citing inadequate market size.",
     "Founders determined the market opportunity wasn't large enough to justify ongoing capital investment; acquired by Yahoo.", "Nodest / Yahoo!", "United States", "500k News Readers"),

    ("Poparazzi", "poparazzi-app", "poparazzi.com", "Social", "CONFIRMED_DEAD", 2021, 2023, "Market Competition",
     "The anti-selfie photo sharing app that only let friends take photos of you.",
     "Poparazzi took the #1 spot on the App Store in May 2021 by forbidding front-facing selfies. Users could only post photos taken of other people.",
     "Retention dropped off precipitously once launch hype subsided; closed in May 2023.", "TTYL Inc.", "United States", "5M App Store Downloads"),

    # ==========================================
    # 5. MESSAGING, CHAT & VOIP
    # ==========================================
    ("AIM (AOL Instant Messenger)", "aim-classic", "aim.com", "Messaging", "CONFIRMED_DEAD", 1997, 2017, "Technological Obsolescence",
     "The iconic yellow running man that defined after-school communication for a generation.",
     "AIM ruled youth communication with away messages, buddy lists, and door-creak chimes. Smartphone messaging (SMS, iMessage, WhatsApp) superseded it.",
     "Users shifted entirely to smartphones, Facebook Chat, and WhatsApp; AOL shut down the service in December 2017.", "Verizon / AOL", "United States", "100M Registered"),

    ("MSN Messenger", "msn-messenger-classic", "messenger.msn.com", "Messaging", "CONFIRMED_DEAD", 1999, 2014, "Strategic Pivot",
     "The chat giant with window-rattling nudges, custom winks, and emoticons.",
     "MSN Messenger (later Windows Live Messenger) had 330 million monthly users globally. Microsoft bought Skype for $8.5B and forcibly migrated all accounts.",
     "Microsoft acquired Skype for $8.5B and phased out MSN Messenger worldwide in 2013-2014.", "Microsoft", "United States", "330M Active Users"),

    ("Yahoo! Messenger", "yahoo-messenger-classic", "messenger.yahoo.com", "Messaging", "CONFIRMED_DEAD", 1998, 2018, "Market Competition",
     "The global instant messaging client with chat rooms, voice calling, and the Yahoo Yodel.",
     "Launched in 1998, Yahoo! Messenger was dominant in commodities trading and across Southeast Asia before Oath (Verizon) terminated it in July 2018.",
     "Verizon/Oath discontinued legacy Yahoo services in the face of WhatsApp and mobile platforms.", "Verizon / Yahoo!", "United States", "100M+ Global Users"),

    ("ICQ Classic", "icq-classic", "icq.com", "Messaging", "CONFIRMED_DEAD", 1996, 2024, "Strategic Pivot",
     "The original instant messenger with 9-digit UIN numbers and the 'Uh-Oh!' chirp.",
     "Created in Israel by Mirabilis in 1996, ICQ was the first global consumer instant messenger. Bought by AOL, then VK in Russia, it officially shut down on June 26, 2024.",
     "VK discontinued ICQ on June 26, 2024, to focus on VK Messenger after 28 years of continuous operation.", "VK / Mirabilis", "Israel / Russia", "100M Peak Users"),

    ("Skype Classic (P2P)", "skype-classic", "skype.com", "Messaging", "CONFIRMED_DEAD", 2003, 2014, "Strategic Pivot",
     "Niklas Zennström and Janus Friis' revolutionary peer-to-peer VoIP client.",
     "Skype made long-distance international voice calls free using Kazaa-derived P2P supernodes. Microsoft replaced the P2P architecture with Azure servers in 2014.",
     "Microsoft dismantled the distributed P2P supernode architecture to move to Azure cloud servers.", "Microsoft / eBay", "Estonia / Luxembourg", "300M VoIP Callers"),

    ("BBM (BlackBerry Messenger)", "bbm-classic", "bbm.com", "Messaging", "CONFIRMED_DEAD", 2005, 2019, "Market Competition",
     "The PIN-based encrypted instant messenger that kept executives and teens glued to keyboards.",
     "BBM was the killer app of BlackBerry smartphones with read receipts and D-and-R ticks. BlackBerry waited until 2013 to release iOS/Android apps—far too late.",
     "BlackBerry's smartphone market collapse and delaying cross-platform release until WhatsApp had captured the market.", "BlackBerry Ltd", "Canada", "190M Users"),

    ("HipChat", "hipchat-classic", "hipchat.com", "Messaging", "CONFIRMED_DEAD", 2010, 2019, "Market Competition",
     "Atlassian's team chat app that dominated dev teams until Slack crushed it.",
     "Founded in 2010 and acquired by Atlassian in 2012, HipChat pioneered IRC-replacement team chat. Slack out-innovated HipChat, forcing Atlassian to partner with Slack.",
     "Atlassian conceded the enterprise team chat battle to Slack in 2018, selling HipChat/Stride assets to Slack.", "Atlassian", "United States", "Millions of Dev Teams"),

    ("Campfire", "campfire-chat", "campfirenow.com", "Messaging", "CONFIRMED_DEAD", 2006, 2014, "Strategic Pivot",
     "37signals' web-based real-time group chat app that inspired modern team chat.",
     "Created by Jason Fried and David Heinemeier Hansson in 2006, Campfire was a minimalist group chat tool for web teams before being folded into Basecamp 3.",
     "Basecamp consolidated standalone apps (Campfire, Backpack, Highrise) directly into the core Basecamp suite.", "37signals / Basecamp", "United States", "Hundreds of Thousands"),

    ("Google Talk", "google-talk-classic", "google.com/talk", "Messaging", "CONFIRMED_DEAD", 2005, 2017, "Strategic Pivot",
     "The clean, blazingly fast XMPP instant messenger built into Gmail.",
     "Google Talk ('Gchat') launched in 2005 with native open XMPP federation and clean Gmail sidebar chat. Google killed it in favor of proprietary Hangouts.",
     "Replaced by Hangouts as Google abandoned open federated standards in favor of closed proprietary chat.", "Google", "United States", "70M Gchatters"),

    ("Google Allo", "google-allo-classic", "allo.google.com", "Messaging", "CONFIRMED_DEAD", 2016, 2019, "Lack of Monetization",
     "The AI assistant chat app with Smart Reply that refused to support desktop SMS.",
     "Allo showcased Google Assistant and whisper/shout text sizing, but required phone numbers and lacked SMS fallback, failing against WhatsApp.",
     "Lacked SMS fallback, faced entrenched rivals (WhatsApp, iMessage), and failed to generate organic user adoption.", "Google", "United States", "50M Downloads"),

    ("Google Duo", "google-duo", "duo.google.com", "Messaging", "CONFIRMED_DEAD", 2016, 2022, "Strategic Pivot",
     "The reliable 1-to-1 video calling app with Knock Knock video preview.",
     "Duo was loved for video reliability on weak Wi-Fi networks and Knock Knock caller preview. Google merged Duo into Google Meet in 2022.",
     "Merged into Google Meet as Google consolidated its consumer and business video conferencing brands.", "Google", "United States", "1 Billion Downloads"),

    ("Google Spaces", "google-spaces", "spaces.google.com", "Messaging", "CONFIRMED_DEAD", 2016, 2017, "Lack of Monetization",
     "The small-group sharing app for topic-based chats and link discussions.",
     "Google Spaces launched in May 2016 to enable small group discussions with built-in Google Search and YouTube sharing. It was shut down 9 months later.",
     "Virtually zero user adoption; shuttered in April 2017 after less than a year of operation.", "Google", "United States", "Under 1M Users"),

    ("Omegle", "omegle-classic", "omegle.com", "Messaging", "CONFIRMED_DEAD", 2009, 2023, "Legal & Regulatory",
     "The legendary stranger video chat platform: 'Talk to strangers!'",
     "Founded by 18-year-old Leif K-Brooks in 2009, Omegle connected random strangers via text and webcam. Facing massive legal defense costs and abuse claims, it shut down.",
     "Founder cited overwhelming financial and psychological costs of defending against relentless misuse and lawsuits.", "Leif K-Brooks", "United States", "70M Monthly Visitors"),

    ("Meebo", "meebo", "meebo.com", "Messaging", "CONFIRMED_DEAD", 2005, 2012, "Acquired & Discontinued",
     "The browser-based multi-protocol messenger that bypassed high school web filters.",
     "Meebo let users connect to AIM, MSN, Yahoo, and ICQ through a browser window without installing software. Google bought it in 2012 for $100M and killed it.",
     "Acquired by Google for $100M to draft the engineering team into Google+; web messenger shut down July 2012.", "Google", "United States", "100M Unique Visitors"),

    ("eBuddy", "ebuddy", "ebuddy.com", "Messaging", "CONFIRMED_DEAD", 2003, 2014, "Technological Obsolescence",
     "The Dutch web chat gateway that let users text on MSN and Yahoo via mobile browsers.",
     "Originally launched as e-Messenger in 2003 by Paulo Taylor, eBuddy was an indispensable mobile web chat client before smartphones had app stores.",
     "Native smartphone messaging apps (WhatsApp, WeChat) eliminated the need for mobile web multi-protocol aggregators.", "eBuddy B.V.", "Netherlands", "250M Users"),

    ("Trillian Classic", "trillian-classic", "trillian.im", "Messaging", "ZOMBIE", 2000, 2012, "Technological Obsolescence",
     "Cerulean Studios' all-in-one desktop client with custom skins and chat interoperability.",
     "Trillian allowed users to log into AIM, ICQ, MSN, Yahoo, and IRC simultaneously inside a sleek skinned desktop application.",
     "Proprietary walled-garden mobile apps (iMessage, WhatsApp) killed desktop multi-network chat protocol clients.", "Cerulean Studios", "United States", "20M Desktop Users"),

    ("Palringo", "palringo", "palringo.com", "Messaging", "CONFIRMED_DEAD", 2006, 2019, "Strategic Pivot",
     "The push-to-talk voice and text community on Symbian and Windows Mobile.",
     "Palringo was a walkie-talkie style push-to-talk messenger with rich topic chat rooms that was huge in the Middle East, before pivoting into gaming (WOLF).",
     "Pivoted away from instant messaging into gamified chat and audio rooms as WOLF.", "WOLF / Palringo Ltd", "United Kingdom", "25M Members"),

    ("Fring", "fring", "fring.com", "Messaging", "CONFIRMED_DEAD", 2006, 2014, "Acquired & Discontinued",
     "The first mobile app to enable group video calling on Symbian and iPhone.",
     "Fring brought free mobile VoIP and 4-way group video calling to Symbian and early iOS devices before Skype cut its interoperability APIs.",
     "Skype blocked Fring's connection in a hostile interoperability war; GENBAND acquired and shuttered it.", "GENBAND", "Israel", "40M Mobile Callers"),

    ("Gizmo5", "gizmo5", "gizmo5.com", "Messaging", "CONFIRMED_DEAD", 2003, 2011, "Acquired & Discontinued",
     "Michael Robertson's open SIP voice client that Google bought to build Google Voice.",
     "Formerly Gizmo Project, Gizmo5 provided open SIP desktop calling that rivaled Skype. Google acquired it in November 2009 for $30M to build Google Voice.",
     "Acquired by Google in 2009; technology absorbed into Google Voice and Gmail Calling; service killed April 2011.", "Google", "United States", "10M VoIP Accounts"),

    ("Tinychat Classic", "tinychat-classic", "tinychat.com", "Messaging", "ZOMBIE", 2009, 2017, "Market Competition",
     "The browser-based 12-person webcam video room provider of early Twitter.",
     "Tinychat allowed anyone to open a video chat room with up to 12 simultaneous webcams and hundreds of viewers with a single click, shared via Twitter.",
     "Discord and Zoom made browser-based casual webcam rooms obsolete.", "Paltalk", "United States", "20M Monthly Users"),

    # ==========================================
    # 6. P2P, MUSIC & STREAMING (DEAD / ZOMBIE)
    # ==========================================
    ("Napster Classic", "napster-classic", "napster.com", "Streaming", "CONFIRMED_DEAD", 1999, 2001, "Legal & Regulatory",
     "Shawn Fanning and Sean Parker's MP3 earthquake that broke the global music industry.",
     "Launched in June 1999, Napster allowed peer-to-peer MP3 file sharing, reaching 80 million users in 18 months before federal injunctions shut it down.",
     "Federal court injunction granted to the RIAA and Metallica forcing Napster to block copyright transfers.", "Roxio / Best Buy", "United States", "80M Music Fans"),

    ("Kazaa", "kazaa-classic", "kazaa.com", "Streaming", "CONFIRMED_DEAD", 2001, 2012, "Legal & Regulatory",
     "The FastTrack blue-butterfly titan that became the most downloaded software in history.",
     "Founded by Niklas Zennström and Janus Friis, Kazaa surpassed ICQ as the most downloaded program on CNET in 2003, before paying a $100M legal settlement.",
     "Massive RIAA lawsuits, $100M settlement, and ruinous bundling of spyware/adware toolbars.", "Sharman Networks", "Netherlands", "60M Active Downloaders"),

    ("LimeWire", "limewire-classic", "limewire.com", "Streaming", "CONFIRMED_DEAD", 2000, 2010, "Legal & Regulatory",
     "The Java Gnutella file-sharing client that gave a generation's family PC viruses.",
     "Created by Mark Gorton in 2000, LimeWire was installed on an estimated 18% of all computers on Earth before Judge Kimba Wood issued a permanent injunction.",
     "Federal court permanent injunction in October 2010 finding LimeWire liable for massive copyright infringement.", "Lime Wire LLC", "United States", "50M Daily Users"),

    ("Morpheus", "morpheus", "morpheus.com", "Streaming", "CONFIRMED_DEAD", 2001, 2008, "Legal & Regulatory",
     "MusicCity's P2P client that reached the Supreme Court in MGM Studios v. Grokster.",
     "Morpheus shifted from FastTrack to Gnutella and NEOnet. StreamCast fought the music and movie studios all the way to the US Supreme Court.",
     "US Supreme Court unanimous ruling in MGM v. Grokster establishing copyright inducement liability bankrupted the company.", "StreamCast Networks", "United States", "30M Downloads"),

    ("BearShare", "bearshare", "bearshare.com", "Streaming", "CONFIRMED_DEAD", 2000, 2016, "Legal & Regulatory",
     "The orange-paw Gnutella client created by Free Peers.",
     "BearShare was a staple of 2000s desktop file sharing. In 2006, Free Peers settled with the RIAA for $30M and sold the brand to MusicLab, which shut it down in 2016.",
     "$30 million RIAA copyright infringement settlement forced sale to MusicLab; shut down in 2016.", "Free Peers / MusicLab", "United States", "20M Downloaders"),

    ("Grooveshark", "grooveshark-classic", "grooveshark.com", "Streaming", "CONFIRMED_DEAD", 2006, 2015, "Legal & Regulatory",
     "The free browser-based music streamer founded in Gainesville that record labels dismantled.",
     "Founded by University of Florida students, Grooveshark allowed users to stream and upload millions of songs without label licenses, reaching 35M users.",
     "Judge found founders personally liable for willful copyright infringement with potential $736M statutory damages, forcing immediate liquidation.", "Escape Media Group", "United States", "35M Listeners"),

    ("Rdio", "rdio-classic", "rdio.com", "Streaming", "CONFIRMED_DEAD", 2010, 2015, "Bankruptcy",
     "The gorgeous, minimalist music streamer built by the founders of Skype.",
     "Rdio was universally lauded for its clean typography, social music queues, and elegant mobile apps. Outspent by Spotify's free ad-supported tier, it went bankrupt.",
     "Spotify's free tier captured market share; Rdio filed for bankruptcy in 2015 and sold intellectual property to Pandora for $75M.", "Pandora Media", "United States", "5M Subscribers"),

    ("Audiogalaxy", "audiogalaxy-classic", "audiogalaxy.com", "Streaming", "CONFIRMED_DEAD", 1998, 2002, "Legal & Regulatory",
     "The satellite-queue MP3 search engine that indexed every rare B-side in existence.",
     "Founded by Michael Merhej in Austin, Audiogalaxy allowed users to queue downloads via web browser to a desktop Satellite agent. RIAA lawsuits killed it in 2002.",
     "RIAA copyright lawsuit forced Audiogalaxy to filter unauthorized music in June 2002, destroying the catalog.", "Audiogalaxy Inc.", "United States", "30M Users"),

    ("PureVolume", "purevolume-classic", "purevolume.com", "Streaming", "CONFIRMED_DEAD", 2003, 2018, "Acquired & Discontinued",
     "The indie, emo, and alternative music discovery hub where Fall Out Boy and Paramore broke out.",
     "Originally Unsigned.com, PureVolume let independent musicians upload free MP3 streams. It defined mid-2000s indie culture before closing in 2018.",
     "Social platforms and Spotify replaced musician discovery profiles; shut down in April 2018.", "SpinMedia", "United States", "10M Music Lovers"),

    ("Songza", "songza-classic", "songza.com", "Streaming", "CONFIRMED_DEAD", 2007, 2016, "Acquired & Discontinued",
     "The situational music concierge that knew what you were doing on a rainy Tuesday morning.",
     "Songza curated playlists based on activities ('Working without Distraction', 'Cooking Dinner'). Google acquired it for $39M and folded it into Google Play Music.",
     "Acquired by Google in 2014 and merged into Google Play Music; service terminated January 2016.", "Google", "United States", "5.5M Listeners"),

    ("imeem", "imeem", "imeem.com", "Streaming", "CONFIRMED_DEAD", 2003, 2009, "Acquired & Discontinued",
     "The social network where users embedded ad-supported full music playlists on MySpace.",
     "Founded by Dalton Caldwell, imeem negotiated ad-supported streaming licenses with all major record labels. High licensing royalty fees drained its capital before MySpace bought it for $1M.",
     "Unsustainable record label royalty debt; sold to MySpace for under $1M in fire-sale in December 2009.", "MySpace / News Corp", "United States", "25M Active Streamers"),

    ("Last.fm Radio", "lastfm-radio", "last.fm", "Streaming", "CONFIRMED_DEAD", 2002, 2014, "Strategic Pivot",
     "The beloved peer-recommendation scrobbling radio station service.",
     "Last.fm scrobbled songs to recommend personalized radio streams based on music neighbors. High international streaming licensing fees forced it to shutter radio in 2014.",
     "High music performance royalty rates forced Last.fm to terminate its custom radio streams in favor of Spotify embeds.", "CBS Interactive", "United Kingdom", "40M Scrobblers"),

    ("MOG", "mog-music", "mog.com", "Streaming", "CONFIRMED_DEAD", 2005, 2014, "Acquired & Discontinued",
     "The audiophile 320kbps music streaming service that Beats Electronics acquired.",
     "Founded by David Hyman, MOG offered pristine 320 kbps audio streaming. Beats acquired MOG in 2012 to create Beats Music, which Apple bought for $3B to build Apple Music.",
     "Acquired by Beats Electronics, rebranded to Beats Music, and ultimately became Apple Music.", "Beats Electronics / Apple", "United States", "1M Audiophiles"),

    ("Rhapsody Classic", "rhapsody-classic", "rhapsody.com", "Streaming", "ZOMBIE", 2001, 2016, "Strategic Pivot",
     "The first successful unlimited subscription music streaming service in history.",
     "Created by Listen.com in December 2001, Rhapsody pioneered the $9.99/month all-you-can-listen model years before Spotify. Rebranded to Napster in 2016.",
     "Rebranded to Napster in 2016; overtaken in mobile streaming wars by Spotify and Apple Music.", "RealNetworks", "United States", "3M Subscribers"),

    ("Turntable.fm", "turntable-fm-classic", "turntable.fm", "Streaming", "CONFIRMED_DEAD", 2011, 2013, "Lack of Monetization",
     "The virtual DJ avatar room where friends voted 'Awesome' or 'Lame' on music tracks.",
     "Created by Billy Chasen and Seth Goldstein, Turntable.fm was a viral darling in tech hubs where users DJ'd in virtual rooms. Licensing costs outpaced monetization.",
     "Exorbitant music licensing royalties and inability to monetize room listeners.", "Stickybits Inc.", "United States", "1M Tech DJs"),

    ("Lala.com", "lala-music", "lala.com", "Streaming", "CONFIRMED_DEAD", 2006, 2010, "Acquired & Discontinued",
     "The web music locker that let you stream your music library anywhere for 10 cents a track.",
     "Founded by Bill Nguyen, Lala allowed web streaming of uploaded songs and sold 10-cent web streaming rights. Apple acquired Lala in December 2009 for $80M and killed it.",
     "Acquired by Apple in 2009 to recruit engineers for iTunes in the Cloud and iCloud Music Locker; service terminated May 2010.", "Apple", "United States", "3M Users"),

    ("Guvera", "guvera", "guvera.com", "Streaming", "CONFIRMED_DEAD", 2008, 2017, "Bankruptcy",
     "The Australian music streamer whose disastrous $1.3 billion IPO was rejected by the stock exchange.",
     "Guvera offered brand-funded free music streaming in emerging markets. When the Australian Securities Exchange blocked its disastrous $1.3B IPO prospectus, it collapsed.",
     "Australian Securities Exchange rejected its IPO due to catastrophic ongoing losses; liquidators appointed in 2017.", "Guvera Ltd", "Australia", "14M Emerging Market Users"),

    ("Simfy", "simfy", "simfy.de", "Streaming", "CONFIRMED_DEAD", 2010, 2015, "Market Competition",
     "Germany's homegrown music streaming rival to Spotify.",
     "Founded in Cologne in 2010, Simfy was one of Europe's early music subscription platforms with 25 million tracks. It could not compete against Spotify's capital advantages.",
     "Unable to raise capital to compete with Spotify's global licensing deals; shuttered May 2015.", "Simfy AG", "Germany", "3M European Streamers"),

    ("Zune Marketplace", "zune-marketplace", "zune.net", "Streaming", "CONFIRMED_DEAD", 2006, 2015, "Strategic Pivot",
     "Microsoft's sleek brown-hardware music subscription with 10 free permanent song downloads monthly.",
     "Zune Marketplace featured the innovative $14.99/month Zune Pass, which let subscribers keep 10 songs permanently each month. Rebranded to Xbox Music, then Groove Music.",
     "Hardware failure of the Zune player and Microsoft's rebranding to Xbox Music and Groove Music.", "Microsoft", "United States", "Millions of Zune Owners"),

    ("Justin.tv", "justin-tv-classic", "justin.tv", "Streaming", "CONFIRMED_DEAD", 2007, 2014, "Strategic Pivot",
     "Justin Kan's 24/7 lifecasting webcam channel that birthed Twitch.",
     "Justin Kan strapped a webcam to his baseball cap to broadcast his life 24/7. When the video gaming category exploded, founders rebranded the company to Twitch and shut Justin.tv.",
     "Parent company rebranded as Twitch Interactive to focus 100% on gaming; Amazon acquired Twitch for $970M.", "Twitch Interactive / Amazon", "United States", "30M Monthly Viewers"),

    ("Megaupload", "megaupload", "megaupload.com", "Streaming", "CONFIRMED_DEAD", 2005, 2012, "Legal & Regulatory",
     "Kim Dotcom's Hong Kong cyberlocker giant seized by the FBI in an armed raid.",
     "Megaupload accounted for 4% of all global internet traffic at its peak, hosting millions of file downloads. In January 2012, the US Department of Justice seized all domains.",
     "US Department of Justice and FBI indictment for criminal copyright infringement, money laundering, and racketeering.", "Kim Dotcom", "Hong Kong / New Zealand", "50M Daily Visitors"),

    ("RapidShare", "rapidshare", "rapidshare.com", "Streaming", "CONFIRMED_DEAD", 2002, 2015, "Legal & Regulatory",
     "The Swiss 1-click cyberlocker that pioneered the free countdown timer download.",
     "Founded by Christian Schmid in Switzerland, RapidShare was once the 16th most-visited site in the world. Aggressive copyright anti-piracy crackdowns eliminated traffic.",
     "Aggressive anti-piracy filters and legal fees caused user traffic to drop 90%; ceased operations March 2015.", "RapidShare AG", "Switzerland / Germany", "Hundreds of Millions"),

    ("Megavideo", "megavideo", "megavideo.com", "Streaming", "CONFIRMED_DEAD", 2007, 2012, "Legal & Regulatory",
     "The viral video streaming site famous for the '72-minute viewing limit' popup.",
     "Megaupload's video sister site allowed users to watch streaming movies and TV shows, with a notorious 72-minute limit for free accounts. Seized alongside Megaupload in 2012.",
     "Seized simultaneously with Megaupload by the FBI in January 2012.", "Kim Dotcom", "Hong Kong", "Millions of Daily Viewers"),

    ("Stage6", "stage6", "stage6.divx.com", "Streaming", "CONFIRMED_DEAD", 2006, 2008, "Lack of Monetization",
     "DivX's pristine high-definition video site in an era when YouTube was blurry 240p.",
     "Launched in 2006, Stage6 amazed the early web by streaming crystal-clear 1080p DivX video when YouTube was limited to 240p. High bandwidth bills crushed DivX.",
     "Extreme bandwidth costs of streaming HD video without monetization forced DivX to shut down Stage6 in February 2008.", "DivX Inc.", "United States", "15M Monthly Viewers"),

    ("Joost", "joost", "joost.com", "Streaming", "CONFIRMED_DEAD", 2006, 2012, "Strategic Pivot",
     "Niklas Zennström and Janus Friis' P2P internet television network that raised $45M.",
     "The Skype and Kazaa founders built Joost (The Venice Project) to deliver broadcast TV over P2P software. Clunky desktop software and Netflix web streaming defeated it.",
     "Desktop app requirement and licensing roadblocks; outcompeted by YouTube and browser-based Netflix.", "Adconion Media Group", "Luxembourg", "1M Early Beta Testers"),

    # ==========================================
    # 7. GAMING, VIRTUAL WORLDS & FLASH (DEAD / ZOMBIE)
    # ==========================================
    ("Club Penguin", "club-penguin-classic", "clubpenguin.com", "Gaming", "CONFIRMED_DEAD", 2005, 2017, "Strategic Pivot",
     "The snowy virtual island of custom igloos, puffle pets, and tipping the iceberg.",
     "Created by Lane Merrifield, Lance Priebe, and Dave Krysko, Disney bought it in 2007 for $350M. The virtual island was shut down in March 2017.",
     "Disney shut down the Flash virtual world in March 2017 to launch the short-lived mobile 3D reboot Club Penguin Island.", "Disney", "Canada", "200M Registered Penguins"),

    ("Toontown Online", "toontown-online-classic", "toontown.com", "Gaming", "CONFIRMED_DEAD", 2003, 2013, "Strategic Pivot",
     "Disney's 3D cartoon MMORPG where players fought corporate robot Cogs with pies.",
     "Developed by Disney's VR Studio under Mike Goslin and Jesse Schell, Toontown was the first family MMORPG. Disney shuttered the servers in September 2013.",
     "Disney shifted corporate focus away from subscription PC games toward mobile and Club Penguin.", "Disney", "United States", "Millions of Players"),

    ("PlayStation Home", "playstation-home-classic", "playstation.com", "Gaming", "CONFIRMED_DEAD", 2008, 2015, "Technological Obsolescence",
     "Sony's ambitious 3D virtual social world on the PlayStation 3.",
     "PlayStation Home allowed PS3 gamers to customize avatars, decorate luxury seaside apartments, and hang out in bowling alleys. Servers closed in March 2015.",
     "PS3 generation concluded; Sony chose not to port the virtual world to the PlayStation 4.", "Sony Computer Entertainment", "United Kingdom / Japan", "31M Registered Avatars"),

    ("Virtual Magic Kingdom (VMK)", "vmk", "vmk.com", "Gaming", "CONFIRMED_DEAD", 2005, 2008, "Strategic Pivot",
     "Disney's virtual theme park celebrating Disneyland's 50th anniversary.",
     "VMK faithfully recreated Disneyland lands with mini-games (Pirates, Haunted Mansion) and collectible pins. Fans organized real-world protests when Disney closed it in 2008.",
     "Originally designed as a temporary promotion for Disneyland's 50th anniversary; closed in May 2008 despite player protests.", "Disney", "United States", "1M Kids"),

    ("Habbo Classic", "habbo-classic", "habbo.com", "Gaming", "ZOMBIE", 2000, 2012, "Community Collapse",
     "The Finnish pixel-art hotel where 'the pool is closed'.",
     "Founded by Sampo Karjalainen and Aapo Kyrölä as Hotelli Kultakala in Finland, Habbo Hotel grew to 273 million registered avatars before a 2012 Channel 4 safety scandal decimated it.",
     "A Channel 4 undercover UK investigative report on child moderation failures caused major retailers to pull Habbo gift cards.", "Sulake", "Finland", "273M Avatars"),

    ("Pixie Hollow", "pixie-hollow", "pixiehollow.com", "Gaming", "CONFIRMED_DEAD", 2008, 2013, "Strategic Pivot",
     "Disney's magical fairy world based on Tinker Bell and Disney Fairies.",
     "Players created fairy avatars, baked sweet treats, gathered animal talents, and decorated hollows. Disney shut down the servers in September 2013 alongside Toontown.",
     "Disney closed multiple virtual worlds simultaneously to pivot engineering toward mobile gaming.", "Disney", "United States", "15M Fairies Created"),

    ("FusionFall", "fusionfall", "fusionfall.com", "Gaming", "CONFIRMED_DEAD", 2009, 2013, "Strategic Pivot",
     "Cartoon Network's post-apocalyptic anime MMORPG where cartoon heroes fought Lord Fuse.",
     "Developed by Grigon Entertainment, FusionFall united characters from Ben 10, Dexter's Lab, and Powerpuff Girls in a stunning 3D anime world.",
     "Declining subscription revenues; made free-to-play before servers were shut down in August 2013.", "Cartoon Network / Warner Bros.", "United States / South Korea", "8M Players"),

    ("Free Realms", "free-realms", "freerealms.com", "Gaming", "CONFIRMED_DEAD", 2009, 2014, "Strategic Pivot",
     "Sony Online Entertainment's vibrant family MMORPG that reached 10 million players in 7 weeks.",
     "Free Realms featured kart racing, pet training, wizard duels, and soccer. SOE shut down the servers in March 2014 alongside Clone Wars Adventures.",
     "SOE restructured focus toward EverQuest Next and PlanetSide 2, pulling resources from family MMOs.", "Sony Online Entertainment", "United States", "25M Registered"),

    ("City of Heroes", "city-of-heroes", "cityofheroes.com", "Gaming", "CONFIRMED_DEAD", 2004, 2012, "Strategic Pivot",
     "Cryptic Studios' beloved superhero MMORPG where players designed custom capes and powers.",
     "City of Heroes set the benchmark for costume customization in online gaming. In August 2012, NCSoft stunned the gaming world by abruptly announcing its closure.",
     "NCSoft shut down developer Paragon Studios and terminated servers in November 2012 despite player rallies outside headquarters.", "NCSoft", "United States", "Millions of Superheroes"),

    ("Star Wars Galaxies", "star-wars-galaxies", "starwarsgalaxies.com", "Gaming", "CONFIRMED_DEAD", 2003, 2011, "Technological Obsolescence",
     "The sandbox Star Wars simulation whose 'New Game Enhancements' broke fans' hearts.",
     "SWG featured player-built cities, complex player-driven economies, and rare Jedi unlocks. In 2005, the NGE update destroyed sandbox mechanics. Closed for SWTOR.",
     "Servers were permanently turned off in December 2011 to make way for EA's Star Wars: The Old Republic.", "Sony Online Entertainment / LucasArts", "United States", "1M Star Wars Fans"),

    ("The Matrix Online", "matrix-online", "thematrixonline.com", "Gaming", "CONFIRMED_DEAD", 2005, 2009, "Lack of Monetization",
     "The Wachowskis' canon continuation of The Matrix trilogy where Morpheus was killed.",
     "Developed by Monolith, The Matrix Online continued the official canon movie storyline after Revolutions. Low player numbers led to a dramatic apocalypse in July 2009.",
     "Subscriber base dwindled below 500 active users; servers decommissioned on July 31, 2009, with a digital avatar crushing event.", "Sony Online Entertainment / Warner Bros.", "United States", "100k Players"),

    ("Warhammer Online: Age of Reckoning", "warhammer-online", "warhammeronline.com", "Gaming", "CONFIRMED_DEAD", 2008, 2013, "Legal & Regulatory",
     "Mythic Entertainment's massive Realm vs Realm fantasy MMO.",
     "Warhammer Online launched in September 2008 with 800,000 players to challenge World of Warcraft. When EA's Games Workshop license expired in 2013, the game closed.",
     "EA's intellectual property licensing agreement with Games Workshop expired in December 2013 without renewal.", "Electronic Arts", "United States", "800k Launch Subscribers"),

    ("Tabula Rasa", "tabula-rasa", "playtr.com", "Gaming", "CONFIRMED_DEAD", 2007, 2009, "Lack of Monetization",
     "Ultima creator Richard Garriott's sci-fi MMO that ended in a $32 million lawsuit.",
     "Richard Garriott spent seven years building Tabula Rasa. NCSoft forged Garriott's resignation while he was in space on the International Space Station, losing a $32M lawsuit.",
     "Extreme development costs, poor retention, and the acrimonious legal battle with creator Richard Garriott.", "NCSoft", "United States", "Under 100k Subscribers"),

    ("WildStar", "wildstar", "wildstar-online.com", "Gaming", "CONFIRMED_DEAD", 2014, 2018, "Lack of Monetization",
     "Carbine Studios' hardcore 40-man raiding cartoon sci-fi MMO on planet Nexus.",
     "Created by veteran World of Warcraft developers, WildStar boasted telegraph combat and housing customization, but its brutal raid difficulty alienated casual players.",
     "Inability to monetize as a subscription or free-to-play MMO; NCSoft shut down Carbine Studios in November 2018.", "NCSoft / Carbine Studios", "United States", "3M Players"),

    ("Disney Infinity Online", "disney-infinity", "infinity.disney.com", "Gaming", "CONFIRMED_DEAD", 2013, 2016, "Strategic Pivot",
     "The toys-to-life video game ecosystem combining Marvel, Star Wars, and Disney.",
     "Disney sold millions of physical toy figures that unlocked in-game characters. When toys-to-life market saturation hit, Disney wrote off $147 million in inventory and cancelled the game.",
     "Toys-to-life market collapsed due to unsold inventory; Disney exited internal video game publishing in May 2016.", "Disney Interactive", "United States", "Tens of Millions of Figures Sold"),

    ("FarmVille Classic", "farmville", "farmville.com", "Gaming", "CONFIRMED_DEAD", 2009, 2020, "Technological Obsolescence",
     "The Flash farming addiction that conquered 83 million Facebook users in 2010.",
     "Created by Zynga, FarmVille popularized social gaming with crop harvesting schedules and neighbor wall posts. Adobe Flash's end-of-life in December 2020 sealed its fate.",
     "Facebook discontinued Flash game support on December 31, 2020, as Adobe pulled Flash Player from browsers.", "Zynga", "United States", "83M Monthly Farmers"),

    ("Mafia Wars", "mafia-wars", "mafiawars.com", "Gaming", "CONFIRMED_DEAD", 2008, 2016, "Technological Obsolescence",
     "The text-based browser crime syndicate game that filled Facebook notification feeds.",
     "Zynga's Mafia Wars let players build crime families by inviting friends. Facebook altered viral feed algorithms in 2011, strangling the game's growth.",
     "Facebook restricted viral application feed spam; mobile gamers transitioned to native smartphone apps.", "Zynga", "United States", "45M Monthly Mobsters"),

    ("Pet Society", "pet-society", "petsociety.com", "Gaming", "CONFIRMED_DEAD", 2008, 2013, "Strategic Pivot",
     "Playfish's delightful virtual pet decorating simulator on Facebook.",
     "EA acquired Playfish for $400M in 2009 largely for Pet Society, where players washed, fed, and styled cartoon pets. EA shut it down in June 2013 to furious player petitions.",
     "EA retired legacy Playfish games in 2013 to cut server infrastructure costs.", "Electronic Arts / Playfish", "United Kingdom", "50M Players"),

    ("Restaurant City", "restaurant-city", "restaurantcity.com", "Gaming", "CONFIRMED_DEAD", 2009, 2012, "Strategic Pivot",
     "The culinary management simulator where friends worked as waiters and chefs.",
     "Another Playfish classic, Restaurant City had players designing layouts, hiring Facebook friends, and trading ingredients for gourmet dishes.",
     "EA retired Playfish server infrastructure in June 2012.", "Electronic Arts / Playfish", "United Kingdom", "18M Chefs"),

    ("Flappy Bird Classic", "flappy-bird-classic", "flappybird.io", "Gaming", "CONFIRMED_DEAD", 2013, 2014, "Community Collapse",
     "Dong Nguyen's maddening viral tap-to-fly game that he removed because it was 'too addictive'.",
     "Vietnamese indie developer Dong Nguyen earned $50,000 a day from ad revenue in early 2014 before pulling the game from app stores due to guilt over its addictive nature.",
     "Creator Dong Nguyen voluntarily removed the game from iOS and Android stores on February 9, 2014, citing overwhelming guilt and media pressure.", ".GEARS Studios", "Vietnam", "50M Downloads"),

    ("Ouya", "ouya-classic", "ouya.tv", "Hardware", "CONFIRMED_DEAD", 2012, 2019, "Market Competition",
     "The $99 Android micro-console that raised $8.5 million on Kickstarter.",
     "Julie Uhrman's open-source micro-console promised to democratize TV gaming. Laggy controllers, weak hardware, and lack of system-seller games led to its failure.",
     "Razer acquired Ouya software assets in 2015 and shut down master authentication servers in June 2019, bricking consoles.", "Razer / Ouya Inc.", "United States", "200k Kickstarter Backers"),

    ("Google Stadia", "google-stadia-classic", "stadia.google.com", "Gaming", "CONFIRMED_DEAD", 2019, 2023, "Lack of Monetization",
     "Google's 4K cloud gaming platform that required full retail purchases.",
     "Announced at GDC 2019 as a console killer, Stadia required full $60 retail game purchases on top of subscriptions. Google refunded all purchases when it closed in 2023.",
     "Flawed retail pricing model and shuttering internal game studios; Google issued full refunds and powered down servers in January 2023.", "Google", "United States", "750k Players"),

    ("OnLive", "onlive", "onlive.com", "Gaming", "CONFIRMED_DEAD", 2009, 2015, "Acquired & Discontinued",
     "Steve Perlman's pioneering cloud streaming gaming service that predated modern streaming by a decade.",
     "OnLive streamed PC games from data centers to low-end PCs and micro-consoles in 2010. Sony bought its patent portfolio in 2015 to build PlayStation Now.",
     "Sony acquired OnLive's cloud gaming patents in April 2015 and shuttered the streaming servers.", "Sony Computer Entertainment", "United States", "3M Accounts"),

    ("Gaikai", "gaikai", "gaikai.com", "Gaming", "CONFIRMED_DEAD", 2008, 2012, "Acquired & Discontinued",
     "David Perry's in-browser cloud gaming service acquired by Sony for $380M.",
     "Gaikai allowed 1-click video game streaming directly inside web banner ads. Sony acquired the company in 2012 for $380M to form the foundation of PlayStation Now.",
     "Acquired by Sony in July 2012; brand retired to power PlayStation Now infrastructure.", "Sony Computer Entertainment", "United States", "Tens of Millions of Demos"),

    ("HQ Trivia", "hq-trivia", "hqtrivia.com", "Gaming", "CONFIRMED_DEAD", 2017, 2020, "Bankruptcy",
     "The live smartphone game show hosted by Scott Rogowsky that drew 2.4 million simultaneous players.",
     "Created by Vine founders Rus Yusupov and Colin Kroll, HQ Trivia was an appointment-viewing mobile game show with live cash prizes. Internal turmoil and tragedy led to its closure.",
     "Internal executive turmoil, tragic death of co-founder Colin Kroll, and failed acquisition deals caused shutdown in February 2020.", "Intermedia Labs", "United States", "2.4M Live Players"),

    # ==========================================
    # 8. ACTIVE TITANS UNDER ARCHIVAL WATCH (ACTIVE)
    # ==========================================
    ("Wikipedia", "wikipedia", "wikipedia.org", "Communities", "ACTIVE", 2001, None, "Market Competition",
     "The free crowdsourced encyclopedia of humanity, maintained by global volunteers.",
     "Founded by Jimmy Wales and Larry Sanger in 2001, Wikipedia is the 7th most visited website on Earth, hosting over 60 million articles in 300+ languages without commercial advertisements.",
     "Operating in active production under non-profit stewardship of the Wikimedia Foundation.", "Wikimedia Foundation", "United States", "1.5 Billion Unique Devices"),

    ("Internet Archive", "internet-archive", "archive.org", "Communities", "ACTIVE", 1996, None, "Legal & Regulatory",
     "The memory of the internet: preserving 860+ billion web pages, books, audio, and software.",
     "Founded by Brewster Kahle in 1996, the Internet Archive provides public access to digital collections through the Wayback Machine and open libraries.",
     "Operating in active production while defending open access preservation in federal court.", "Internet Archive", "United States", "Millions of Daily Researchers"),

    ("Reddit", "reddit", "reddit.com", "Communities", "ACTIVE", 2005, None, "Market Competition",
     "The front page of the internet: millions of topic communities and discussions.",
     "Founded by Steve Huffman and Alexis Ohanian in 2005, Reddit hosts hundreds of thousands of active subreddits, going public in March 2024.",
     "Operating in active production with over 70 million daily active users.", "Reddit Inc.", "United States", "70M Daily Active"),

    ("GitHub", "github", "github.com", "Developer tools", "ACTIVE", 2008, None, "Market Competition",
     "The global home of open source and developer collaboration.",
     "Founded by Chris Wanstrath, PJ Hyett, and Tom Preston-Werner in 2008, GitHub revolutionized software development through Git pull requests; acquired by Microsoft for $7.5B in 2018.",
     "Operating in active production as Microsoft's premier developer platform.", "Microsoft", "United States", "100M+ Developers"),

    ("Hacker News", "hacker-news", "news.ycombinator.com", "Forums", "ACTIVE", 2007, None, "Market Competition",
     "Y Combinator's text-only bulletin board for technologists and founders.",
     "Created by Paul Graham in 2007 using the Arc dialect of Lisp, Hacker News remains one of the web's most influential discussion boards for software engineering and startups.",
     "Operating in active production with its iconic orange bar and clean minimalist layout.", "Y Combinator", "United States", "5M Monthly Technologists"),

    ("Craigslist", "craigslist", "craigslist.org", "Communities", "ACTIVE", 1995, None, "Market Competition",
     "Craig Newmark's non-commercial classifieds board that resisted 30 years of redesigns.",
     "Founded in 1995 as an email list of local events in San Francisco, Craigslist grew into the world's most enduring classifieds website, maintaining its bare HTML design.",
     "Operating in active production across 700 cities in 70 countries.", "Craigslist Inc.", "United States", "50M Monthly Users"),

    ("IMDb", "imdb", "imdb.com", "Communities", "ACTIVE", 1990, None, "Market Competition",
     "The Internet Movie Database: the definitive repository of film and television credits.",
     "Started on Usenet in 1990 by Col Needham, IMDb is the oldest website on the modern web, acquired by Amazon in 1998.",
     "Operating in active production under Amazon ownership with over 10 million titles.", "Amazon", "United Kingdom / United States", "250M Monthly Visitors"),

    ("eBay", "ebay", "ebay.com", "Web technology", "ACTIVE", 1995, None, "Market Competition",
     "Pierre Omidyar's AuctionWeb that began with a broken laser pointer for $14.83.",
     "Founded over Labor Day weekend in 1995 by Pierre Omidyar as AuctionWeb, eBay pioneered consumer-to-consumer online auctions and global e-commerce.",
     "Operating in active production with billions of live marketplace listings.", "eBay Inc.", "United States", "130M Active Buyers"),

    ("Amazon", "amazon", "amazon.com", "Web technology", "ACTIVE", 1994, None, "Market Competition",
     "Jeff Bezos' online bookstore that expanded into 'The Everything Store' and AWS cloud backbone.",
     "Founded in July 1994 in Bellevue, Washington, Amazon grew from selling books into the world's largest online retailer and cloud computing provider.",
     "Operating in active production as a multi-trillion dollar global commerce and cloud titan.", "Amazon.com Inc.", "United States", "300M+ Active Accounts"),

    ("YouTube", "youtube", "youtube.com", "Streaming", "ACTIVE", 2005, None, "Market Competition",
     "The global video library where 'Broadcast Yourself' transformed human culture.",
     "Founded by Chad Hurley, Steve Chen, and Jawed Karim in February 2005; Google acquired it in October 2006 for $1.65B. Over 500 hours of video are uploaded every minute.",
     "Operating in active production as the primary video infrastructure of modern civilization.", "Google", "United States", "2.5 Billion Monthly Users"),

    ("Twitch", "twitch", "twitch.tv", "Streaming", "ACTIVE", 2011, None, "Market Competition",
     "The live streaming epicenter of gaming culture and interactive broadcasting.",
     "Spun out of Justin.tv in June 2011 by Emmett Shear and Justin Kan, Twitch established live gaming streaming; Amazon bought it in 2014 for $970M.",
     "Operating in active production with millions of simultaneous live broadcasts.", "Amazon", "United States", "30M Daily Viewers"),

    ("Mastodon", "mastodon", "joinmastodon.org", "Social", "ACTIVE", 2016, None, "Market Competition",
     "Eugen Rochko's open-source federated social network built on ActivityPub.",
     "Created in 2016 by German software developer Eugen Rochko, Mastodon is a decentralized social network consisting of independent interconnected servers.",
     "Operating in active production across thousands of federated server instances.", "Mastodon gGmbH", "Germany", "10M Registered"),

    ("Bluesky", "bluesky", "bsky.app", "Social", "ACTIVE", 2021, None, "Market Competition",
     "The open social network built on the AT Protocol, founded by Jack Dorsey.",
     "Initiated by Twitter in 2019 and spun off as an independent benefit corporation in 2021, Bluesky provides decentralized microblogging on the Authenticated Transfer Protocol.",
     "Operating in active production with rapid user growth following public federation.", "Bluesky PBLLC", "United States", "20M+ Users"),

    ("LinkedIn", "linkedin", "linkedin.com", "Social", "ACTIVE", 2002, None, "Market Competition",
     "The professional business network founded in Reid Hoffman's living room.",
     "Launched in May 2003, LinkedIn connected corporate professionals and job seekers; Microsoft acquired it in December 2016 for $26.2 billion.",
     "Operating in active production as the premier professional identity platform.", "Microsoft", "United States", "1 Billion Members"),

    ("Pinterest", "pinterest", "pinterest.com", "Social", "ACTIVE", 2010, None, "Market Competition",
     "The digital visual pinboard founded by Ben Silbermann, Evan Sharp, and Paul Sciarra.",
     "Launched in March 2010, Pinterest allowed users to curate visual bookmarks of recipes, fashion, interior design, and DIY crafts.",
     "Operating in active production with over 500 million monthly active users.", "Pinterest Inc.", "United States", "500M MAU"),

    ("Tumblr", "tumblr", "tumblr.com", "Social", "ACTIVE", 2007, None, "Market Competition",
     "David Karp's short-form microblogging sanctuary for fandoms, art, and GIF culture.",
     "Founded in 2007 in NYC, Yahoo acquired it in 2013 for $1.1B. After an adult content ban collapsed traffic, Automattic bought it in 2019 for under $3M.",
     "Operating in active production under Automattic stewardship.", "Automattic", "United States", "500M+ Hosted Blogs"),

    ("Medium", "medium", "medium.com", "Communities", "ACTIVE", 2012, None, "Market Competition",
     "Ev Williams' clean typography publishing platform for deep essays and ideas.",
     "Founded by Twitter co-founder Evan Williams in August 2012, Medium championed distraction-free writing, partner earnings, and member subscriptions.",
     "Operating in active production with thousands of independent publications.", "A Medium Corporation", "United States", "100M Readers"),

    ("Substack", "substack", "substack.com", "Communities", "ACTIVE", 2017, None, "Market Competition",
     "The newsletter subscription platform empowering independent journalists and writers.",
     "Founded by Chris Best, Jairaj Sethi, and Hamish McKenzie in 2017, Substack sparked a direct-to-reader newsletter journalism renaissance.",
     "Operating in active production with over 3 million paid subscriptions.", "Substack Inc.", "United States", "35M Active Readers"),

    ("WordPress.com", "wordpress-com", "wordpress.com", "Developer tools", "ACTIVE", 2005, None, "Market Competition",
     "Matt Mullenweg's managed hosting platform for the open-source web engine.",
     "Powered by the open-source WordPress software created by Matt Mullenweg and Mike Little, WordPress powers over 43% of all websites on the internet.",
     "Operating in active production hosting millions of websites globally.", "Automattic", "United States", "Powers 43% of the Web"),

    ("Steam", "steam", "steampowered.com", "Gaming", "ACTIVE", 2003, None, "Market Competition",
     "Valve's digital distribution titan that transformed PC gaming forever.",
     "Launched in September 2003 by Gabe Newell to update Counter-Strike, Steam grew into the dominant digital storefront and community for PC gaming.",
     "Operating in active production with over 30 million peak concurrent users.", "Valve Corporation", "United States", "130M Active Gamers"),

    ("Discord", "discord", "discord.com", "Messaging", "ACTIVE", 2015, None, "Market Competition",
     "The low-latency voice and community chat platform founded by Jason Citron.",
     "Launched in May 2015 for gaming teams, Discord expanded into the default communication backbone for internet subcultures, study groups, and open-source devs.",
     "Operating in active production with over 200 million monthly active users.", "Discord Inc.", "United States", "200M MAU"),

    ("Telegram", "telegram", "telegram.org", "Messaging", "ACTIVE", 2013, None, "Market Competition",
     "Pavel Durov's cloud-based messaging app with broadcast channels and bots.",
     "Founded by brothers Nikolai and Pavel Durov after leaving VKontakte, Telegram emphasizes speed, large group channels, and custom bots.",
     "Operating in active production with nearly 1 billion global active users.", "Telegram FZ-LLC", "United Arab Emirates", "950M Active Users"),

    ("Signal", "signal", "signal.org", "Messaging", "ACTIVE", 2014, None, "Market Competition",
     "Moxie Marlinspike's non-profit end-to-end encrypted messaging gold standard.",
     "Developed by the Signal Technology Foundation, Signal's open cryptographic protocol provides verifiable end-to-end encryption recommended by Edward Snowden.",
     "Operating in active production under non-profit mission.", "Signal Foundation", "United States", "40M Active Users"),

    ("WhatsApp", "whatsapp", "whatsapp.com", "Messaging", "ACTIVE", 2009, None, "Market Competition",
     "The cross-platform SMS replacement that Meta acquired for $19 billion.",
     "Founded by Jan Koum and Brian Acton in 2009 with a strict 'No Ads! No Games! No Gimmicks!' motto, WhatsApp became the primary communication tool for 2 billion humans.",
     "Operating in active production as Meta's primary global messaging app.", "Meta Platforms", "United States", "2 Billion Active Users"),

    ("Spotify", "spotify", "spotify.com", "Streaming", "ACTIVE", 2006, None, "Market Competition",
     "Daniel Ek and Martin Lorentzon's Swedish streaming titan that defeated piracy.",
     "Launched in Sweden in October 2008, Spotify replaced MP3 downloads with legal on-demand audio streaming, reaching over 600 million users.",
     "Operating in active production with 600M+ users and 230M+ subscribers.", "Spotify Technology S.A.", "Sweden", "626M Active Listeners"),

    ("SoundCloud", "soundcloud", "soundcloud.com", "Streaming", "ACTIVE", 2007, None, "Market Competition",
     "Alexander Ljung and Eric Wahlforss' audio canvas that gave birth to Soundcloud Rap.",
     "Founded in Berlin in 2007, SoundCloud allowed musicians to comment directly on audio waveforms, launching artists like Billie Eilish, Post Malone, and Juice WRLD.",
     "Operating in active production with over 130 million active listeners.", "SoundCloud Global Ltd", "Germany", "130M Listeners"),

    ("Bandcamp", "bandcamp", "bandcamp.com", "Streaming", "ACTIVE", 2008, None, "Market Competition",
     "The independent music marketplace where fans directly support underground artists.",
     "Founded by Ethan Diamond in 2008, Bandcamp championed direct artist compensation with 'Bandcamp Fridays' waiving all revenue shares.",
     "Operating in active production under Songtradr ownership.", "Songtradr", "United States", "Millions of Indie Fans"),

    ("Netflix", "netflix", "netflix.com", "Streaming", "ACTIVE", 1997, None, "Market Competition",
     "Reed Hastings and Marc Randolph's DVD mailer that pioneered modern streaming television.",
     "Founded in Scotts Valley in 1997, Netflix transitioned from red DVD envelopes to pioneering video streaming in 2007 and original programming in 2013.",
     "Operating in active production with over 270 million global subscribers.", "Netflix Inc.", "United States", "277M Subscribers"),

    ("Stack Overflow", "stack-overflow", "stackoverflow.com", "Developer tools", "ACTIVE", 2008, None, "Market Competition",
     "Joel Spolsky and Jeff Atwood's question-and-answer library for programmers.",
     "Launched in 2008 as an open alternative to Experts-Exchange, Stack Overflow became the collective memory of computer science before being acquired by Prosus for $1.8B.",
     "Operating in active production as the largest programmer Q&A archive.", "Prosus", "United States", "100M Monthly Devs"),

    ("MDN Web Docs", "mdn-web-docs", "developer.mozilla.org", "Developer tools", "ACTIVE", 2005, None, "Market Competition",
     "Mozilla's comprehensive documentation reference for open web standards (HTML, CSS, JS).",
     "Launched in 2005 as Mozilla Developer Center, MDN is the authoritative documentation repository for Web APIs, JavaScript specifications, and CSS styling.",
     "Operating in active production maintained by Mozilla and the Open Web Docs consortium.", "Mozilla Foundation", "United States", "30M Developers"),

    # ==========================================
    # 9. AT-RISK & CRITICAL WATCHLIST (AT_RISK)
    # ==========================================
    ("Google Jamboard", "google-jamboard", "jamboard.google.com", "Developer tools", "AT_RISK", 2016, 2024, "Strategic Pivot",
     "Google's collaborative digital whiteboard facing full decommissioning in late 2024.",
     "Used in remote classrooms during the pandemic, Google announced in late 2023 that it would shut down Jamboard and partner with FigJam, Miro, and Lucidspark.",
     "Google announced complete service deprecation with all Jam files deleted by December 31, 2024.", "Google", "United States", "Millions of Classrooms"),

    ("Visual Studio App Center", "visual-studio-app-center", "appcenter.ms", "Developer tools", "AT_RISK", 2014, 2025, "Strategic Pivot",
     "Microsoft's mobile app testing, distribution, and crash-reporting suite retiring in March 2025.",
     "Formed from HockeyApp and Xamarin Test Cloud, Microsoft announced App Center will retire permanently on March 31, 2025.",
     "Microsoft scheduled official termination for March 31, 2025, recommending migration to Azure DevOps and TestFlight.", "Microsoft", "United States", "Hundreds of Thousands"),

    ("BeReal", "bereal-app", "bereal.com", "Social", "AT_RISK", 2020, None, "Strategic Pivot",
     "The 2-minute simultaneous dual-camera app acquired by gaming firm Voodoo after traffic drop.",
     "BeReal won iPhone App of the Year in 2022 with its synchronized notifications. After daily users dropped by over 60%, French mobile game publisher Voodoo acquired it for $500M.",
     "Massive retention drop-off, acquisition by hypercasual publisher Voodoo, and introduction of ads and paid features.", "Voodoo / BeReal SAS", "France", "20M Active Users"),

    ("Clubhouse", "clubhouse-audio", "clubhouse.com", "Social", "AT_RISK", 2020, None, "Market Competition",
     "The voice drop-in audio room sensation of 2020 that lost 90% of active listeners.",
     "Founded by Paul Davison and Rohan Seth, Clubhouse surged to a $4 billion valuation during pandemic lockdowns before Twitter Spaces and post-lockdown fatigue crushed engagement.",
     "Engagement collapsed post-lockdowns; company laid off over half its staff to pivot into asynchronous voice group chats.", "Alpha Exploration Co.", "United States", "30M Peak Downloads"),

    ("Yik Yak v2", "yik-yak-v2", "yikyak.com", "Social", "AT_RISK", 2021, None, "Strategic Pivot",
     "The revived location-based anonymous app acquired and altered by Sidechat.",
     "After closing in 2017, Yik Yak was revived in 2021 before being acquired by college rival Sidechat in 2023, causing user backlash over altered moderation and features.",
     "Acquired by Sidechat; app store ratings plummeted and user activity dropped following architecture restructuring.", "Sidechat", "United States", "2M College Users"),

    ("Mint.com", "mint-com", "mint.com", "Web technology", "AT_RISK", 2006, 2024, "Strategic Pivot",
     "Aaron Patzer's personal finance tracker that Intuit shut down in early 2024.",
     "Mint revolutionized automated bank account aggregation and budgeting. Intuit acquired it for $170M in 2009 and permanently shut it down in March 2024 to force users into Credit Karma.",
     "Intuit officially terminated the service on March 23, 2024, forcing users to migrate to Credit Karma.", "Intuit", "United States", "25M Budgeters"),

    ("Skiff Mail", "skiff-mail", "skiff.com", "Developer tools", "AT_RISK", 2020, 2024, "Acquired & Discontinued",
     "The end-to-end encrypted workspace and email provider acquired by Notion.",
     "Founded by Jason Ginsberg and Milap Patel, Skiff provided private Web3-native email and docs. In February 2024, Notion acquired Skiff and announced a 6-month shutdown.",
     "Notion acquired Skiff in February 2024 and scheduled full server termination for August 2024.", "Notion / Skiff Inc.", "United States", "2M Encrypted Inboxes"),

    ("InVision App", "invision-app", "invisionapp.com", "Developer tools", "AT_RISK", 2011, 2024, "Market Competition",
     "The design prototyping unicorn valued at $2 billion that Figma crushed.",
     "InVision was the essential design handoff tool for 100% of Fortune 100 companies. Figma's real-time collaborative browser canvas eroded InVision's dominance, leading to shutdown.",
     "InVision officially announced all design collaboration services will shut down permanently at the end of 2024.", "InVisionApp Inc.", "United States", "7M Designers")
]
