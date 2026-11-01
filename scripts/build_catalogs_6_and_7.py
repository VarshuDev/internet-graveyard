#!/usr/bin/env python3
"""
Generates catalog_batch_6.py (Active Titans, At-Risk & Zombies) 
and catalog_batch_7.py (Comprehensive Web History Casualties)
"""

import sys
import os

ACTIVE_TITANS = [
    # Search & Encyclopedias
    ("Wikipedia", "wikipedia", "wikipedia.org", "Search", "ACTIVE", 2001, None, "Market Competition",
     "The free online encyclopedia that anyone can edit.",
     "Founded by Jimmy Wales and Larry Sanger, Wikipedia has grown into the sixth most visited website globally with over 60 million articles in 300+ languages.",
     "Operational under the Wikimedia Foundation, sustained by global donor contributions.", "Wikimedia Foundation", "United States", "1.5B Unique Monthly"),

    ("Internet Archive", "internet-archive", "archive.org", "Web technology", "ACTIVE", 1996, None, "Market Competition",
     "Brewster Kahle's non-profit digital library offering universal access to all knowledge.",
     "Home of the Wayback Machine, preserving over 860 billion web captures, books, audio recordings, and historical software programs.",
     "Operational under 501(c)(3) stewardship despite relentless copyright lawsuits from book publishers and record labels.", "Internet Archive", "United States", "150M Monthly Users"),

    ("DuckDuckGo", "duckduckgo", "duckduckgo.com", "Search", "ACTIVE", 2008, None, "Market Competition",
     "Gabriel Weinberg's privacy-focused search engine that refuses to track searchers.",
     "DuckDuckGo routes hundreds of millions of daily queries without user profiling, tracking cookies, or search filter bubbles.",
     "Operational and profitable through non-personalized keyword ads via Microsoft Advertising.", "Duck Duck Go Inc.", "United States", "100M Daily Queries"),

    ("Wolfram Alpha", "wolfram-alpha", "wolframalpha.com", "Search", "ACTIVE", 2009, None, "Market Competition",
     "Stephen Wolfram's computational knowledge engine and natural language answer system.",
     "Computes answers using algorithmic mathematics and curated datasets rather than indexing web documents.",
     "Operational as a core computational engine and LLM plugin partner.", "Wolfram Research", "United States", "30M Monthly Users"),

    ("IMDb", "imdb", "imdb.com", "Search", "ACTIVE", 1990, None, "Acquired & Discontinued",
     "Col Needham's Usenet movie database that became the definitive cinema authority.",
     "Started as a Usenet rec.arts.movies Perl script, IMDb catalogs millions of films, television shows, cast credits, and trivia. Acquired by Amazon in 1998.",
     "Operational as an Amazon subsidiary and entertainment industry pillar.", "Amazon", "United Kingdom / US", "200M Monthly Users"),

    ("Rotten Tomatoes", "rotten-tomatoes", "rottentomatoes.com", "Communities", "ACTIVE", 1998, None, "Acquired & Discontinued",
     "Senh Duong's Tomatometer movie rating and critical consensus aggregator.",
     "Launched in 1998 to aggregate reviews for Jackie Chan movies, it became Hollywood's primary critical benchmark.",
     "Operational under Fandango / NBCUniversal ownership.", "Fandango / NBCUniversal", "United States", "60M Monthly Cinephiles"),

    ("Metacritic", "metacritic", "metacritic.com", "Communities", "ACTIVE", 1999, None, "Acquired & Discontinued",
     "Marc Doyle and Jason Dietz's weighted Metascore review aggregator for games, film, and music.",
     "Synthesizes thousands of critic reviews into standardized 0-100 scores with color-coded badges.",
     "Operational under Fandom ownership.", "Fandom / Red Ventures", "United States", "45M Monthly Visitors"),

    ("Discogs", "discogs", "discogs.com", "Communities", "ACTIVE", 2000, None, "Market Competition",
     "Kevin Lewandowski's crowdsourced discography database and vinyl marketplace.",
     "The definitive catalog of physical music releases, barcodes, matrix runouts, and vinyl pressings.",
     "Operational as the primary global marketplace for vinyl collectors and record stores.", "Zink Media Inc.", "United States", "50M Monthly Music Collectors"),

    ("Goodreads", "goodreads", "goodreads.com", "Communities", "ACTIVE", 2006, None, "Acquired & Discontinued",
     "Otis and Elizabeth Chandler's social book cataloging and reading challenge community.",
     "Allows readers to track books, write reviews, and connect with favorite authors. Acquired by Amazon in 2013.",
     "Operational under Amazon management as the dominant global book social network.", "Amazon", "United States", "125M Readers"),

    ("Genius", "genius", "genius.com", "Communities", "ACTIVE", 2009, None, "Market Competition",
     "Tom Lehman, Ilan Zechory, and Mahbod Moghadam's crowd-annotated song lyric encyclopedia.",
     "Originally Rap Genius, the platform expanded into annotating poetry, historical documents, and modern music lyrics.",
     "Operational under MediaLab AI ownership.", "MediaLab AI", "United States", "100M Monthly Music Fans"),

    ("TV Tropes", "tv-tropes", "tvtropes.org", "Communities", "ACTIVE", 2004, None, "Market Competition",
     "The notoriously addictive wiki analyzing narrative conventions, character archetypes, and plot tropes.",
     "Founded by Fast Eddie, TV Tropes explores storytelling devices across anime, television, film, literature, and gaming.",
     "Operational under Fandom / Enthusiast Gaming management.", "Enthusiast Gaming", "United States", "30M Monthly Readers"),

    ("Urban Dictionary", "urban-dictionary", "urbandictionary.com", "Communities", "ACTIVE", 1999, None, "Market Competition",
     "Aaron Peckham's crowdsourced dictionary of contemporary slang, memes, and cultural subtext.",
     "Allows users to define, upvote, and parody colloquial phrases, street idioms, and internet culture trends.",
     "Operational under independent stewardship.", "Urban Dictionary LLC", "United States", "70M Monthly Readers"),

    ("Stack Overflow", "stack-overflow", "stackoverflow.com", "Communities", "ACTIVE", 2008, None, "Acquired & Discontinued",
     "Joel Spolsky and Jeff Atwood's question-and-answer sanctuary that solved millions of developer errors.",
     "Stack Overflow replaced predatory expert-exchange paywalls with a fast, voted, peer-reviewed knowledge engine. Acquired by Prosus for $1.8B.",
     "Operational as a cornerstone of developer education, integrating AI search summaries.", "Prosus", "United States", "100M Monthly Programmers"),

    ("MDN Web Docs", "mdn-web-docs", "developer.mozilla.org", "Developer tools", "ACTIVE", 2005, None, "Market Competition",
     "Mozilla's authoritative open-standard documentation for HTML, CSS, JavaScript, and Web APIs.",
     "Started as Mozilla Developer Center, MDN provides deep, accurate documentation and browser compatibility tables.",
     "Operational under Mozilla Foundation stewardship with Open Web Docs community support.", "Mozilla Foundation", "United States", "40M Monthly Developers"),

    ("W3Schools", "w3schools", "w3schools.com", "Developer tools", "ACTIVE", 1998, None, "Market Competition",
     "Refsnes Data's accessible interactive tutorial website with 'Try It Yourself' sandboxes.",
     "Helped hundreds of millions of beginners write their first lines of HTML, CSS, JavaScript, and SQL.",
     "Operational under Refsnes Data in Norway.", "Refsnes Data", "Norway", "70M Monthly Learners"),

    ("Can I Use", "caniuse", "caniuse.com", "Developer tools", "ACTIVE", 2008, None, "Market Competition",
     "Alexis Deveria's essential browser compatibility support matrices for modern web tech.",
     "Provides front-end engineers real-time tables showing which CSS properties, JS APIs, and HTML tags work in which browser versions.",
     "Operational and integrated into build tool chains worldwide (Browserslist).", "Alexis Deveria", "United States", "10M Monthly Engineers"),

    # Developer Tools, Hosting & Infrastructure
    ("GitHub", "github", "github.com", "Developer tools", "ACTIVE", 2008, None, "Acquired & Discontinued",
     "Chris Wanstrath, PJ Hyett, and Tom Preston-Werner's Git collaboration empire.",
     "GitHub transformed software development with pull requests, forks, issues, and GitHub Actions. Acquired by Microsoft for $7.5B in 2018.",
     "Operational under Microsoft stewardship hosting over 100 million developers and 400 million repositories.", "Microsoft", "United States", "100M Developers"),

    ("GitLab", "gitlab", "gitlab.com", "Developer tools", "ACTIVE", 2011, None, "Market Competition",
     "Dmitriy Zaporozhets and Sid Sijbrandij's open-core complete DevOps lifecycle platform.",
     "Offers integrated Git repository management, CI/CD pipelines, container registries, and issue tracking in a single application.",
     "Operational as a publicly traded technology company on NASDAQ.", "GitLab Inc.", "Ukraine / US", "30M Registered Users"),

    ("Bitbucket", "bitbucket", "bitbucket.com", "Developer tools", "ACTIVE", 2008, None, "Acquired & Discontinued",
     "Jesper Nøhr's repository hosting service acquired by Atlassian for deep Jira integration.",
     "Originally launched with Mercurial and Git, Bitbucket is the enterprise repository solution of choice for teams using Jira and Confluence.",
     "Operational under Atlassian management.", "Atlassian", "Australia / US", "10M Developers"),

    ("SourceForge", "sourceforge", "sourceforge.net", "Developer tools", "ACTIVE", 1999, None, "Market Competition",
     "The historic open-source project repository and software download directory.",
     "Founded by VA Linux, SourceForge was the dominant home of open-source projects (VLC, 7-Zip, FileZilla, GIMP) throughout the 2000s.",
     "Operational under Slashdot Media ownership with clean, restored open-source software downloads.", "Slashdot Media", "United States", "30M Monthly Downloads"),

    ("npm", "npmjs", "npmjs.com", "Developer tools", "ACTIVE", 2010, None, "Acquired & Discontinued",
     "Isaac Z. Schlueter's JavaScript package registry that powers the modern Node.js universe.",
     "npm hosts over 2.5 million JavaScript packages, handling billions of daily package downloads for web applications worldwide.",
     "Operational under GitHub / Microsoft ownership.", "GitHub / Microsoft", "United States", "15M JS Developers"),

    ("PyPI", "pypi", "pypi.org", "Developer tools", "ACTIVE", 2003, None, "Market Competition",
     "The Python Package Index — the official third-party software repository for Python.",
     "Hosts hundreds of thousands of Python packages installed every second via 'pip install', maintained by Python Software Foundation volunteers.",
     "Operational under the Python Software Foundation.", "Python Software Foundation", "United States", "500K Packages"),

    ("Crates.io", "crates-io", "crates.io", "Developer tools", "ACTIVE", 2014, None, "Market Competition",
     "The official Rust community crate registry developed alongside Cargo.",
     "Provides fast, cryptographic package distribution for the Rust systems programming language.",
     "Operational under the Rust Foundation.", "Rust Foundation", "Worldwide", "150K Crates"),

    ("Docker Hub", "docker-hub", "hub.docker.com", "Developer tools", "ACTIVE", 2014, None, "Market Competition",
     "The world's largest repository of container images and microservice templates.",
     "Allows developers to publish, pull, and automate container images across cloud clusters.",
     "Operational under Docker Inc.", "Docker Inc.", "United States", "15M Developers"),

    ("Hugging Face", "hugging-face", "huggingface.co", "Developer tools", "ACTIVE", 2016, None, "Market Competition",
     "Clément Delangue, Julien Chaumond, and Thomas Wolf's collaborative AI model open repository.",
     "The 'GitHub of Artificial Intelligence', hosting thousands of open-source transformers, weights, datasets, and Spaces demos.",
     "Operational as the epicenter of open-source machine learning research.", "Hugging Face Inc.", "France / US", "5M AI Researchers"),

    ("Replit", "replit", "replit.com", "Developer tools", "ACTIVE", 2016, None, "Market Competition",
     "Amjad Masad and Haya Odeh's cloud collaborative IDE and deployment container system.",
     "Allows developers to code in 50+ programming languages directly in browser tabs and deploy servers with instant URLs.",
     "Operational with cutting-edge AI coding agents and hosting infrastructure.", "Replit Inc.", "United States", "25M Developers"),

    ("CodePen", "codepen", "codepen.io", "Developer tools", "ACTIVE", 2012, None, "Market Competition",
     "Chris Coyier, Alex Vazquez, and Tim Sabat's social development playground for front-end engineers.",
     "The premier place for web designers and front-end developers to showcase creative HTML, CSS, and JavaScript pens.",
     "Operational under independent stewardship.", "CodePen LLC", "United States", "5M Front-End Coders"),

    ("JSFiddle", "jsfiddle", "jsfiddle.net", "Developer tools", "ACTIVE", 2009, None, "Market Competition",
     "Piotr Zalewa's lightweight online code editor for testing JavaScript snippets.",
     "Pioneered testing isolated code snippets with framework toggles (jQuery, Vue, React) and shareable hash URLs.",
     "Operational and widely used across developer troubleshooting threads.", "Piotr Zalewa", "Poland / UK", "3M Developers"),

    ("Glitch", "glitch", "glitch.com", "Developer tools", "ACTIVE", 2016, None, "Acquired & Discontinued",
     "Fog Creek Software / Anil Dash's friendly web development and app remixing sandbox.",
     "Glitch allowed developers to remix live Node.js web applications with zero setup and instant full-stack hosting. Acquired by Fastly in 2022.",
     "Operational under Fastly edge cloud management.", "Fastly", "United States", "4M Creators"),

    ("StackBlitz", "stackblitz", "stackblitz.com", "Developer tools", "ACTIVE", 2017, None, "Market Competition",
     "Eric Simons' WebContainer technology that boots Node.js entirely inside browser tabs.",
     "Runs full Node.js runtimes, npm packages, and Next.js development servers directly inside browser WebAssembly.",
     "Operational with widespread enterprise and open-source documentation integrations.", "StackBlitz Inc.", "United States", "3M Developers"),

    ("CodeSandbox", "codesandbox", "codesandbox.io", "Developer tools", "ACTIVE", 2017, None, "Market Competition",
     "Ives van Hoorne's cloud instant development environment for React and modern web apps.",
     "Allows developers to spin up full microservices, React apps, and Docker sandboxes in seconds from GitHub repositories.",
     "Operational with collaborative cloud workspaces.", "CodeSandbox BV", "Netherlands", "4M Developers"),

    ("Vercel", "vercel", "vercel.com", "Developer tools", "ACTIVE", 2015, None, "Market Competition",
     "Guillermo Rauch's frontend cloud and creators of Next.js.",
     "Pioneered instant Git push deployments, serverless functions, and edge rendering for React and modern frameworks.",
     "Operational as the premier deployment cloud for frontend and AI web applications.", "Vercel Inc.", "United States", "1M+ Hosted Projects"),

    ("Netlify", "netlify", "netlify.com", "Developer tools", "ACTIVE", 2014, None, "Market Competition",
     "Mathias Biilmann and Christian Bach's pioneer of the Jamstack web architecture.",
     "Brought automated CI/CD builds, atomic deployments, and CDN edge routing to static and headless web applications.",
     "Operational with over 5 million developers worldwide.", "Netlify Inc.", "United States", "5M Developers"),

    ("Render", "render", "render.com", "Developer tools", "ACTIVE", 2019, None, "Market Competition",
     "Anurag Goel's unified cloud platform to build and run all apps and websites with free SSL and managed databases.",
     "Won TechCrunch Disrupt 2019, serving as a modern, transparent alternative to Heroku and AWS.",
     "Operational with millions of services deployed.", "Render Services Inc.", "United States", "1M Developers"),

    ("Railway", "railway", "railway.app", "Developer tools", "ACTIVE", 2020, None, "Market Competition",
     "Jake Cooper's modern infrastructure platform that provisions compute, databases, and cron jobs with visual simplicity.",
     "Eliminates infrastructure configuration friction with automatic GitHub builds and flexible usage-based billing.",
     "Operational with high developer acclaim.", "Railway Corp.", "United States", "500K Developers"),

    ("Fly.io", "fly-io", "fly.io", "Developer tools", "ACTIVE", 2017, None, "Market Competition",
     "Kurt Mackey's edge application platform that boots physical Firecracker microVMs close to users worldwide.",
     "Transforms Docker containers into edge-routed virtual machines with multi-region Postgres replication.",
     "Operational powering latency-sensitive applications across the globe.", "Fly.io Inc.", "United States", "300K Developers"),

    ("Supabase", "supabase", "supabase.com", "Developer tools", "ACTIVE", 2020, None, "Market Competition",
     "Paul Copplestone and Ant Wilson's open-source Firebase alternative built on PostgreSQL.",
     "Provides developers instant Postgres databases, row-level security, auth, realtime subscriptions, and vector embeddings.",
     "Operational as one of the fastest-growing open-source cloud data platforms.", "Supabase Inc.", "Singapore / US", "1M Developers"),

    ("Cloudflare", "cloudflare", "cloudflare.com", "Developer tools", "ACTIVE", 2009, None, "Market Competition",
     "Matthew Prince, Lee Holloway, and Michelle Zatlyn's global edge network and DDoS shield.",
     "Protects and accelerates over 20% of the entire World Wide Web with DNS, CDN, and Workers edge compute.",
     "Operational as a global infrastructure giant on the NYSE.", "Cloudflare Inc.", "United States", "25M Web Properties"),

    ("DigitalOcean", "digitalocean", "digitalocean.com", "Developer tools", "ACTIVE", 2011, None, "Market Competition",
     "Ben and Moisey Uretsky's developer-friendly cloud with $5 SSD Droplets.",
     "Democratized cloud hosting for developers by replacing complex AWS configuration consoles with sleek, simple virtual machine Droplets.",
     "Operational as a publicly traded cloud infrastructure provider on NYSE.", "DigitalOcean Holdings Inc.", "United States", "600K Customers"),

    ("Postman", "postman", "postman.com", "Developer tools", "ACTIVE", 2012, None, "Market Competition",
     "Abhinav Asthana's API testing platform that started as a simple Chrome browser extension.",
     "The universal standard for designing, testing, mocking, and documenting REST and GraphQL APIs.",
     "Operational with over 30 million registered developers.", "Postman Inc.", "India / US", "30M Developers"),

    ("Sentry", "sentry", "sentry.io", "Developer tools", "ACTIVE", 2012, None, "Market Competition",
     "David Cramer and Chris Jennings' open-source error tracking and application monitoring platform.",
     "Alerts developers to crashes, stack traces, and performance bottlenecks in real-time across frontend and backend code.",
     "Operational tracking billions of exceptions across 4 million developers.", "Functional Software Inc.", "United States", "4M Developers"),

    ("Datadog", "datadog", "datadoghq.com", "Developer tools", "ACTIVE", 2010, None, "Market Competition",
     "Olivier Pomel and Alexis Lê-Quôc's cloud-scale monitoring and observability platform.",
     "Integrates server metrics, distributed tracing, network maps, and logs into unified real-time dashboards.",
     "Operational as a NASDAQ-100 enterprise observability leader.", "Datadog Inc.", "United States", "27K Enterprise Clients"),

    # Social, Media & Communities
    ("Reddit", "reddit", "reddit.com", "Communities", "ACTIVE", 2005, None, "Market Competition",
     "Steve Huffman and Alexis Ohanian's 'front page of the internet'.",
     "Divided into hundreds of thousands of user-run subreddits, Reddit is the primary global engine of internet discussion, memes, and AMAs.",
     "Operational as a publicly traded company on the NYSE.", "Reddit Inc.", "United States", "70M Daily Active"),

    ("Hacker News", "hacker-news", "news.ycombinator.com", "Communities", "ACTIVE", 2007, None, "Market Competition",
     "Paul Graham's minimalist Arc-powered news link community for tech founders and hackers.",
     "Maintains strict, high-signal editorial guidelines and simple text styling, remaining the Silicon Valley water cooler for tech news.",
     "Operational under Y Combinator stewardship.", "Y Combinator", "United States", "5M Monthly Tech Readers"),

    ("Lobsters", "lobsters", "lobste.rs", "Communities", "ACTIVE", 2012, None, "Market Competition",
     "Peter Weldon's invite-only computing discussion community built on open-source Rails.",
     "Founded on invitation trees and transparent moderation logs, Lobsters provides deep technical programming and computing architecture discussions.",
     "Operational under community-funded independent stewardship.", "Joshua Stein / Lobsters", "United States", "50K Programmers"),

    ("Lemmy", "lemmy", "join-lemmy.org", "Communities", "ACTIVE", 2019, None, "Market Competition",
     "Dessalines and Nutomic's federated link aggregation platform on ActivityPub.",
     "Gained massive adoption during the 2023 Reddit API blackouts, forming a decentralized network of interconnected community instances.",
     "Operational across hundreds of independent federated community nodes.", "Lemmy Community", "Worldwide", "2M Federated Users"),

    ("Mastodon", "mastodon-social", "mastodon.social", "Social", "ACTIVE", 2016, None, "Market Competition",
     "Eugen Rochko's open-source, decentralized social network built on the ActivityPub protocol.",
     "Allows anyone to run their own independent server while following and communicating seamlessly across the broader 'Fediverse'.",
     "Operational as a non-profit organization registered in Germany.", "Mastodon gGmbH", "Germany", "10M Fediverse Accounts"),

    ("Bluesky", "bluesky", "bsky.app", "Social", "ACTIVE", 2021, None, "Market Competition",
     "Jay Graber and Jack Dorsey's decentralized microblogging network on the AT Protocol.",
     "Features customizable algorithmic feeds, user-owned handles via DNS domains, and portable account graphs.",
     "Operational with explosive adoption reaching tens of millions of active users.", "Bluesky PBC", "United States", "25M Users"),

    ("Threads", "threads-meta", "threads.net", "Social", "ACTIVE", 2023, None, "Market Competition",
     "Meta and Instagram's fast-growing text microblogging platform launched to challenge X.",
     "Integrated with Instagram's account infrastructure, Threads logged 100 million signups in 5 days, expanding ActivityPub federation.",
     "Operational under Meta Platforms stewardship.", "Meta Platforms", "United States", "200M MAU"),

    ("Discord", "discord", "discord.com", "Messaging", "ACTIVE", 2015, None, "Market Competition",
     "Jason Citron and Stan Vishnevskiy's voice, video, and text platform for communities.",
     "Originally built for PC gamers, Discord replaced Teamspeak and Skype, expanding into the primary digital clubhouse for study groups, developers, and creators.",
     "Operational with over 200 million monthly active users.", "Discord Inc.", "United States", "200M MAU"),

    ("Telegram", "telegram", "telegram.org", "Messaging", "ACTIVE", 2013, None, "Market Competition",
     "Pavel and Nikolai Durov's high-speed cloud messaging service with public channels.",
     "Offers immense group capacities (200,000 members), bot APIs, broadcast channels, and MTProto encryption.",
     "Operational with nearly 1 billion monthly active users.", "Telegram FZ-LLC", "Dubai / Worldwide", "950M MAU"),

    ("Signal", "signal-messenger", "signal.org", "Messaging", "ACTIVE", 2014, None, "Market Competition",
     "Moxie Marlinspike and Brian Acton's gold standard of open-source end-to-end encrypted messaging.",
     "Maintained by a non-profit foundation, Signal collects zero user metadata, providing peerless cryptographic privacy for journalists, activists, and citizens.",
     "Operational under the Signal Technology Foundation.", "Signal Foundation", "United States", "50M Active Users"),

    ("Substack", "substack", "substack.com", "Communities", "ACTIVE", 2017, None, "Market Competition",
     "Chris Best, Hamish McKenzie, and Jairaj Sethi's subscription newsletter publishing revolution.",
     "Empowered independent journalists, authors, and thought leaders to monetize directly via subscriber credit cards without ads.",
     "Operational hosting millions of paid subscriptions worldwide.", "Substack Inc.", "United States", "35M Monthly Readers"),

    ("Medium", "medium", "medium.com", "Communities", "ACTIVE", 2012, None, "Market Competition",
     "Evan Williams' elegant long-form publishing platform with the clap button.",
     "Brought clean typography and distraction-free essay writing to the web, creating a partner program for writers.",
     "Operational under CEO Tony Stubblebine.", "A Medium Corporation", "United States", "100M Monthly Readers"),

    ("Patreon", "patreon", "patreon.com", "Communities", "ACTIVE", 2013, None, "Market Competition",
     "Jack Conte and Sam Yam's membership platform empowering artists to get paid by patrons.",
     "Allows musicians, podcasters, YouTubers, and writers to establish monthly membership tiers and exclusive communities.",
     "Operational paying out over $3.5 billion to creative producers.", "Patreon Inc.", "United States", "8M Active Patrons"),

    ("Twitch", "twitch-tv", "twitch.tv", "Streaming", "ACTIVE", 2011, None, "Acquired & Discontinued",
     "The global capital of livestreaming entertainment, gaming, and esports.",
     "Spun out of Justin.tv, Twitch defined modern interactive streaming with emotes (PogChamp, Kappa), chat cheers, and subscriptions. Acquired by Amazon for $970M.",
     "Operational under Amazon management streaming billions of hours annually.", "Amazon", "United States", "140M Monthly Viewers"),

    ("Bandcamp", "bandcamp", "bandcamp.com", "Streaming", "ACTIVE", 2008, None, "Acquired & Discontinued",
     "Ethan Diamond's sanctuary for independent musicians where fans pay artists directly.",
     "Famous for 'Bandcamp Fridays' where 100% of proceeds go directly to artists, Bandcamp is the lifeblood of independent music culture.",
     "Operational under Songtradr ownership.", "Songtradr", "United States", "10M Music Fans"),

    ("SoundCloud", "soundcloud", "soundcloud.com", "Streaming", "ACTIVE", 2007, None, "Market Competition",
     "Alexander Ljung and Eric Wahlforss' audio platform featuring waveform commenting.",
     "Launched a generation of independent bedroom producers, EDM remixes, and 'SoundCloud Rap' with its signature interactive waveform comments.",
     "Operational under modern streaming and creator monetization tiers.", "SoundCloud Global Ltd", "Germany", "130M Registered Users"),

    ("Spotify", "spotify", "spotify.com", "Streaming", "ACTIVE", 2006, None, "Market Competition",
     "Daniel Ek and Martin Lorentzon's Swedish streaming titan that ended digital music piracy.",
     "Pioneered legal, instant streaming of over 100 million tracks with algorithmic Discover Weekly playlists and personalized Wrapped campaigns.",
     "Operational as a global publicly traded streaming leader on the NYSE.", "Spotify AB", "Sweden", "626M MAU"),
]

print(f"Prepared {len(ACTIVE_TITANS)} active titan entities.")
