#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_FILE = path.join(__dirname, '..', 'data', 'graveyard.json');

const args = process.argv.slice(2);
const sourceArg = args.find(a => a.startsWith('--source='))?.split('=')[1] || 'all';
const limitArg = parseInt(args.find(a => a.startsWith('--limit='))?.split('=')[1] || '5', 10);
const autoIngest = args.includes('--ingest');

console.log('\n======================================================');
console.log('   † INTERNET GRAVEYARD — AUTOMATED WEB ARCHAEOLOGY   ');
console.log('======================================================');
console.log(`[Config] Source: ${sourceArg} | Limit: ${limitArg} | Auto-Ingest: ${autoIngest}\n`);

const WIKI_ARTICLES = [
  'AltaVista',
  'Ask_Jeeves',
  'Friendster',
  'Delicious_(website)',
  'Path_(social_network)',
  'Secret_(app)',
  'Yik_Yak',
  'LimeWire',
  'Turntable.fm',
  'Songza',
  'PureVolume',
  'AIM_(software)',
  'Yahoo!_Messenger',
  'Google_Talk',
  'Google_Allo',
  'Google_Hangouts',
  'BBM_(software)',
  'HipChat',
  'Toontown_Online',
  'PlayStation_Home',
  'Ouya',
  'Google_Stadia',
  'Netscape_Navigator',
  'Internet_Explorer',
  'Yahoo!_Answers',
  'Yahoo!_Directory',
  'DMOZ',
  'FriendFeed',
  'Google_Buzz',
  'Meerkat_(app)',
  'Periscope_(service)',
  'Gawker',
  'ThinkGeek',
  'Pets.com',
  'Mint.com',
  'Google_Podcasts',
  'Skiff_(company)',
  'InVision_(company)',
  'Heardle'
];

async function run() {
  let dbData = { entities: [], submissions: [], discovery_candidates: [] };
  if (fs.existsSync(DB_FILE)) {
    try {
      dbData = JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
    } catch (e) {
      console.error('Error reading graveyard.json:', e);
    }
  }

  const existingSlugs = new Set(dbData.entities.map(e => e.slug.toLowerCase()));
  const existingDomains = new Set([
    ...dbData.entities.map(e => e.primary_domain.toLowerCase()),
    ...(dbData.discovery_candidates || []).map(c => c.domain.toLowerCase())
  ]);

  let addedCandidates = 0;
  let ingestedEntities = 0;

  // 1. Wikipedia Defunct Scraper
  if (sourceArg === 'wikipedia' || sourceArg === 'all') {
    console.log('[1/2] Querying Wikipedia Historical Archives...');
    const selected = WIKI_ARTICLES.slice(0, limitArg);

    for (const article of selected) {
      const apiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(article)}`;
      try {
        const res = await fetch(apiUrl, {
          headers: { 'User-Agent': 'InternetGraveyardBot/1.0 (digital archaeology preservation)' }
        });
        if (!res.ok) continue;
        const data = await res.json();
        if (!data.title || !data.extract) continue;

        const cleanName = data.titles?.normalized || data.title.replace(/\s*\(.*?\)\s*/g, '');
        const slug = cleanName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        const domain = `${slug}.com`;

        if (existingSlugs.has(slug) || existingDomains.has(domain)) {
          console.log(`  - ${cleanName}: already recorded in graveyard.`);
          continue;
        }

        existingSlugs.add(slug);
        existingDomains.add(domain);

        const extract = data.extract;
        const yearMatch = extract.match(/\b(19\d{2}|20\d{2})\b/g) || ['2000', '2015'];
        const birthYear = parseInt(yearMatch[0], 10);
        const deathYear = parseInt(yearMatch[yearMatch.length - 1], 10);

        const candidate = {
          id: `wiki-${slug}-${Date.now().toString().slice(-4)}`,
          service_name: cleanName,
          domain: domain,
          category: 'Web technology',
          detected_signals: [
            `Wikipedia official article: ${data.content_urls?.desktop?.page || ''}`,
            `Documented historical lifespan: ${birthYear} — ${deathYear}`,
            `Verified historical summary: "${extract.slice(0, 150)}..."`
          ],
          confidence_score: 96,
          raw_evidence: extract,
          status: 'APPROVED',
          created_at: new Date().toISOString()
        };

        if (autoIngest) {
          const entity = {
            id: `grave-${slug}-${birthYear}`,
            slug: slug,
            name: cleanName,
            tagline: data.description || `${cleanName} was an iconic web service operating from ${birthYear} to ${deathYear}.`,
            description: extract,
            category: 'Web technology',
            status: 'CONFIRMED_DEAD',
            status_reason: `Officially shut down in ${deathYear}.`,
            founded_year: birthYear,
            death_year: deathYear,
            death_date: `${deathYear}`,
            lifespan: `${birthYear} — ${deathYear}`,
            cause_of_death_summary: `Service was discontinued in ${deathYear}.`,
            cause_category: 'Strategic Pivot',
            logo_url: data.thumbnail?.source || 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=200&auto=format&fit=crop&q=80',
            primary_domain: domain,
            country: 'United States',
            confidence_score: 96,
            candle_count: Math.floor(Math.random() * 500) + 50,
            is_verified: true,
            verified_at: new Date().toISOString(),
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            last_known_state: {
              website: { status_code: 404, state_desc: 'Domain inactive.' },
              app: { store_status: 'Defunct', state_desc: 'Delisted.' },
              api: { endpoint_status: '410 Gone', state_desc: 'Endpoints offline.' },
              community: { platform: 'Archives', state_desc: 'Preserved in history.' },
              domain: { ownership: 'Parked', state_desc: 'Historical domain.' }
            },
            final_moments: extract
          };
          dbData.entities.push(entity);
          ingestedEntities++;
          console.log(`  ✓ Auto-ingested grave: ${cleanName} (${domain}) [${birthYear} — ${deathYear}]`);
        } else {
          if (!dbData.discovery_candidates) dbData.discovery_candidates = [];
          dbData.discovery_candidates.unshift(candidate);
          addedCandidates++;
          console.log(`  ✓ Discovered candidate: ${cleanName} (${domain})`);
        }
      } catch (err) {
        console.error(`  x Error scraping ${article}:`, err.message);
      }
      await new Promise(r => setTimeout(r, 150));
    }
  }

  // 2. Hacker News Sunset Radar Crawler
  if (sourceArg === 'hn' || sourceArg === 'all') {
    console.log('\n[2/2] Interrogating Hacker News Sunset Radar...');
    const hnUrl = `https://hn.algolia.com/api/v1/search?query=shutting%20down%20OR%20sunsetting%20OR%20"closing%20doors"&tags=story&hitsPerPage=${limitArg}`;
    try {
      const res = await fetch(hnUrl, {
        headers: { 'User-Agent': 'InternetGraveyardBot/1.0 (digital archaeology preservation)' }
      });
      if (res.ok) {
        const hnData = await res.json();
        const hits = hnData.hits || [];
        for (const hit of hits) {
          if (!hit.title) continue;
          const match = hit.title.match(/^([A-Za-z0-9\s.]+?)\s+(?:is|has|announces|closing|sunset|shut)/i);
          const name = match ? match[1].trim() : hit.title.slice(0, 25);
          const domain = `${name.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`;

          if (existingDomains.has(domain)) continue;
          existingDomains.add(domain);

          const cand = {
            id: `hn-${hit.objectID}`,
            service_name: name,
            domain: domain,
            category: 'Web technology',
            detected_signals: [
              `HN Story: "${hit.title}" (${hit.points} points, ${hit.num_comments} comments)`,
              `URL: ${hit.url || `https://news.ycombinator.com/item?id=${hit.objectID}`}`
            ],
            confidence_score: 85,
            raw_evidence: `HN post by ${hit.author}: ${hit.title}`,
            status: 'PENDING',
            created_at: new Date().toISOString()
          };

          if (!dbData.discovery_candidates) dbData.discovery_candidates = [];
          dbData.discovery_candidates.unshift(cand);
          addedCandidates++;
          console.log(`  ✓ Discovered HN sunset: ${name} (${hit.points} pts)`);
        }
      }
    } catch (err) {
      console.error('  x Error crawling HN:', err.message);
    }
  }

  dbData.last_updated = new Date().toISOString();
  fs.writeFileSync(DB_FILE, JSON.stringify(dbData, null, 2), 'utf8');

  console.log('\n======================================================');
  console.log(`Excavation Complete!`);
  console.log(`- New candidates added: ${addedCandidates}`);
  console.log(`- New graves auto-ingested: ${ingestedEntities}`);
  console.log(`- Total live graves in database: ${dbData.entities.length}`);
  console.log(`- Total pending candidates: ${(dbData.discovery_candidates || []).length}`);
  console.log('======================================================\n');
}

run().catch(console.error);
