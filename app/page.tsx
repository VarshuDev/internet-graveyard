import React from 'react';
import Link from 'next/link';
import { graveyardDb } from '@/lib/db';
import { GraveCard } from '@/components/GraveCard';
import { StatusBadge } from '@/components/StatusBadge';
import { EntityLogo } from '@/components/EntityLogo';
import { TodayInHistoryBanner } from '@/components/TodayInHistoryBanner';
import { RecentUpdatesWing } from '@/components/RecentUpdatesWing';
import { 
  Search, 
  Shuffle, 
  Skull, 
  AlertTriangle, 
  Compass, 
  ArrowRight, 
  Flame, 
  Activity,
  Landmark,
  Volume2,
  Scale,
  Newspaper,
  Zap,
  Archive,
  Terminal,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

export default function HomePage() {
  const stats = graveyardDb.getStats();
  const recentlyBuried = graveyardDb.getRecentlyBuried(8);
  const recentlyUpdated = graveyardDb.getRecentlyUpdated(8);
  const atRiskEntities = graveyardDb.getAtRiskEntities().slice(0, 3);
  const allEntities = graveyardDb.getAllEntities();

  // Daily Rotating "Tombstone of the Day" using calendar day seed so it updates daily with fresh platforms!
  const today = new Date();
  const dateSeed = today.getFullYear() * 1000 + (today.getMonth() + 1) * 50 + today.getDate();
  const spotlightIndex = dateSeed % (allEntities.length || 1);
  const spotlightEntity = allEntities[spotlightIndex] || allEntities[0];

  const totalCount = stats.total_archived.toLocaleString();
  const deadCount = stats.confirmed_dead.toLocaleString();
  const activeCount = Math.max(0, stats.total_archived - stats.confirmed_dead - stats.zombie_services).toLocaleString();
  const zombieCount = stats.zombie_services.toLocaleString();

  const lastUpdatedStr = today.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  // Dynamically tally authentic grave counts per category
  const categoryCounts: Record<string, number> = {};
  allEntities.forEach(e => {
    categoryCounts[e.category] = (categoryCounts[e.category] || 0) + 1;
  });

  const categories = [
    { name: 'Social', count: `${categoryCounts['Social'] || 0} Graves`, desc: 'Networks, feeds, and graph platforms', href: '/explore?category=Social' },
    { name: 'Messaging', count: `${categoryCounts['Messaging'] || 0} Graves`, desc: 'Instant chat, P2P protocols, and IRC', href: '/explore?category=Messaging' },
    { name: 'Gaming', count: `${categoryCounts['Gaming'] || 0} Graves`, desc: 'Virtual worlds, MMOs, and flash arcades', href: '/explore?category=Gaming' },
    { name: 'Streaming', count: `${categoryCounts['Streaming'] || 0} Graves`, desc: 'Music, video, and broadcast networks', href: '/explore?category=Streaming' },
    { name: 'Search', count: `${categoryCounts['Search'] || 0} Graves`, desc: 'Early web directories and crawlers', href: '/explore?category=Search' },
    { name: 'Developer tools', count: `${categoryCounts['Developer tools'] || 0} Graves`, desc: 'APIs, runtimes, and developer utilities', href: '/explore?category=Developer+tools' },
    { name: 'Web technology', count: `${categoryCounts['Web technology'] || 0} Graves`, desc: 'Browser plugins, applets, and specs', href: '/explore?category=Web+technology' },
    { name: 'Communities', count: `${categoryCounts['Communities'] || 0} Graves`, desc: 'Bulletin boards, forums, and guestbooks', href: '/explore?category=Communities' },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      {/* 1. HERO SECTION WITH AMBIENT RADIAL LIGHTING */}
      <section className="relative w-full py-16 md:py-24 px-4 sm:px-6 flex flex-col items-center text-center overflow-hidden border-b border-white/[0.08] bg-radial-ambient scanline-overlay">
        {/* Subtle Ambient Radial Back-Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[28rem] bg-amber-500/[0.06] rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto space-y-7">
          {/* Status Badge Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/15 text-xs font-mono font-medium shadow-sm">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-zinc-400">ARCHIVAL FORENSICS</span>
            <span className="text-zinc-600">•</span>
            <span className="text-emerald-400 font-bold">{totalCount} SITES DIGITALLY PRESERVED</span>
          </div>

          {/* Hero Monument Title in Memorial Serif (Cinzel) */}
          <div className="space-y-3">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-black tracking-tight text-white uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              INTERNET GRAVEYARD
            </h1>
            <p className="text-lg sm:text-2xl text-zinc-300 font-serif max-w-3xl mx-auto italic tracking-wide">
              "The internet forgets. We archive what disappeared."
            </p>
          </div>

          {/* Philosophy Statement */}
          <p className="text-sm sm:text-base text-zinc-400 font-sans max-w-2xl mx-auto leading-relaxed">
            A living cyber-cemetery & forensic archaeological registry documenting {totalCount} websites, protocols, and apps across all digital lifecycle states: from fallen classics to active platforms under observation.
          </p>

          {/* Primary Command Search Bar */}
          <div className="pt-2 max-w-3xl mx-auto w-full">
            <form action="/explore" method="GET" className="relative w-full group">
              <div className="relative rounded-2xl bg-zinc-950/90 border-2 border-white/15 group-focus-within:border-emerald-500/80 group-focus-within:ring-4 group-focus-within:ring-emerald-500/20 transition-all shadow-2xl overflow-hidden backdrop-blur-xl">
                <div className="flex items-center h-14 sm:h-16 px-3.5 sm:px-4">
                  <Terminal className="w-5 h-5 text-emerald-400 mr-3 shrink-0" />
                  <input
                    type="text"
                    name="q"
                    placeholder={`Search ${totalCount} relics, causes of death, eras, or enter a URL...`}
                    className="w-full bg-transparent text-white placeholder-zinc-500 font-sans text-sm sm:text-base md:text-lg focus:outline-none min-w-0"
                  />
                  <button
                    type="submit"
                    className="ml-2 sm:ml-3 px-5 sm:px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-sans text-xs sm:text-sm font-bold transition-all shadow-md cursor-pointer shrink-0 focus-visible:ring-2 focus-visible:ring-amber-500/60"
                  >
                    Exhume
                  </button>
                </div>
              </div>
            </form>

            {/* Popular Quick Searches */}
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 mt-3 text-xs font-mono text-zinc-400">
              <span className="font-semibold text-zinc-500">Popular Excavations:</span>
              {[
                { name: 'Vine', slug: 'vine' },
                { name: 'GeoCities', slug: 'geocities' },
                { name: 'Google Reader', slug: 'google-reader' },
                { name: 'Club Penguin', slug: 'club-penguin' },
                { name: 'Flash', slug: 'adobe-flash' },
                { name: 'Omegle', slug: 'omegle' },
              ].map((item, idx) => (
                <span key={item.slug} className="inline-flex items-center gap-2">
                  <Link href={`/grave/${item.slug}`} className="text-zinc-300 hover:text-white underline decoration-white/20 transition-colors">
                    {item.name}
                  </Link>
                  {idx < 5 && <span className="text-zinc-600">•</span>}
                </span>
              ))}
            </div>

            {/* Live Autopsy Banner Link */}
            <div className="pt-3">
              <Link
                href="/lookup"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/90 hover:bg-zinc-850 border border-white/15 hover:border-emerald-500/50 text-zinc-300 hover:text-white text-xs sm:text-sm font-mono transition-all group shadow-md text-left leading-snug cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-500/60"
              >
                <Activity className="w-4 h-4 text-emerald-400 group-hover:animate-pulse shrink-0" />
                <span>Test any live or dead domain: <strong className="text-white underline decoration-emerald-500/80">Launch Vital Signs Forensic Lab &rarr;</strong></span>
              </Link>
            </div>
          </div>

          {/* Quick Action Chamber Links */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 font-sans text-xs sm:text-sm font-bold">
            <Link
              href="/lookup"
              className="inline-flex items-center justify-center h-11 px-5 rounded-xl bg-red-950/60 hover:bg-red-900/70 text-red-300 hover:text-white border border-red-500/50 transition-all shadow-md gap-2 shrink-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-500/60"
            >
              <Activity className="w-4 h-4 text-red-400 animate-pulse shrink-0" />
              <span>Vital Signs Lab</span>
            </Link>

            <Link
              href="/explore"
              className="inline-flex items-center justify-center h-11 px-5 rounded-xl bg-white/12 hover:bg-white/18 text-white border border-white/20 transition-all shadow-md gap-2 shrink-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-500/60"
            >
              <Compass className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Explore {totalCount} Graves</span>
            </Link>

            <Link
              href="/grounds"
              className="inline-flex items-center justify-center h-11 px-5 rounded-xl bg-zinc-900/90 hover:bg-zinc-850 text-zinc-200 hover:text-white border border-white/15 transition-all shadow-md gap-2 shrink-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-500/60"
            >
              <Landmark className="w-4 h-4 text-amber-400 shrink-0" />
              <span>3D Necropolis Grounds</span>
            </Link>

            <Link
              href="/random"
              className="inline-flex items-center justify-center h-11 px-5 rounded-xl bg-zinc-900/90 hover:bg-zinc-850 text-zinc-200 hover:text-white border border-white/15 transition-all shadow-md gap-2 shrink-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-500/60"
            >
              <Shuffle className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Random Memorial</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. NIXIE / PHOSPHOR TELEMETRY METERS */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 -mt-7 z-10 font-mono">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 items-stretch">
          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950/95 border border-white/15 shadow-xl flex flex-col justify-between backdrop-blur-xl">
            <span className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">TOTAL RELICS</span>
            <div className="text-3xl sm:text-4xl font-black text-white mt-1 tabular-nums">{totalCount}</div>
            <span className="text-[11px] text-zinc-500 mt-1">Authentic Indexed Sites</span>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950/95 border border-red-500/30 shadow-xl flex flex-col justify-between backdrop-blur-xl">
            <span className="text-xs text-red-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
              <Skull className="w-3.5 h-3.5 shrink-0" />
              <span>FALLEN SITES</span>
            </span>
            <div className="text-3xl sm:text-4xl font-black text-red-400 mt-1 tabular-nums">{deadCount}</div>
            <span className="text-[11px] text-zinc-500 mt-1">Confirmed Dead Platforms</span>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950/95 border border-emerald-500/30 shadow-xl flex flex-col justify-between backdrop-blur-xl">
            <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 shrink-0" />
              <span>LIVING WATCH</span>
            </span>
            <div className="text-3xl sm:text-4xl font-black text-emerald-400 mt-1 tabular-nums">{activeCount}</div>
            <span className="text-[11px] text-zinc-500 mt-1">Monitored in Active Prod</span>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950/95 border border-purple-500/30 shadow-xl flex flex-col justify-between backdrop-blur-xl">
            <span className="text-xs text-purple-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 shrink-0" />
              <span>ZOMBIE DOMAINS</span>
            </span>
            <div className="text-3xl sm:text-4xl font-black text-purple-400 mt-1 tabular-nums">{zombieCount}</div>
            <span className="text-[11px] text-zinc-500 mt-1">Parked Relics & Shells</span>
          </div>
        </div>
      </section>

      {/* TODAY IN INTERNET HISTORY BANNER */}
      <TodayInHistoryBanner />

      {/* 3. TOMBSTONE OF THE DAY (HERO ALTAR SPOTLIGHT) */}
      {spotlightEntity && (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 font-sans">
          <div className="relative rounded-2xl bg-zinc-950/95 border-2 border-white/15 overflow-hidden shadow-2xl backdrop-blur-xl">
            {/* Top Chrome Bezel */}
            <div className="bg-zinc-900/90 px-4 py-2.5 border-b border-white/15 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                <span className="text-xs font-mono font-bold tracking-wider text-red-400 uppercase">
                  TOMBSTONE OF THE DAY // ARCHIVAL SPOTLIGHT
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <span>INQUEST #{spotlightEntity.id}</span>
                <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-[10px] font-bold">HISTORIC</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6 min-w-0 flex-1">
                <EntityLogo entity={spotlightEntity} size="xl" className="border-2 border-white/20 shadow-xl shrink-0" />
                <div className="space-y-2.5 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-2xl sm:text-4xl font-serif font-black text-white tracking-tight">
                      {spotlightEntity.name}
                    </h3>
                    <StatusBadge status={spotlightEntity.status} size="md" />
                  </div>
                  <div className="text-xs sm:text-sm font-mono text-zinc-400 flex items-center gap-2 flex-wrap">
                    <span className="text-white font-bold tabular-nums">{spotlightEntity.lifespan}</span>
                    <span>•</span>
                    <span className="uppercase text-red-400 font-semibold">{spotlightEntity.category}</span>
                    <span>•</span>
                    <span className="text-zinc-400 truncate">{spotlightEntity.primary_domain}</span>
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed font-sans max-w-xl">
                    {spotlightEntity.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full lg:w-auto">
                <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-amber-400 font-mono text-xs w-full sm:w-auto shrink-0">
                  <Flame className="w-4 h-4 shrink-0" />
                  <span className="font-bold tabular-nums">{spotlightEntity.candle_count || 320}</span>
                  <span className="text-zinc-400">Memorial Candles</span>
                </div>
                <Link
                  href={`/grave/${spotlightEntity.slug}`}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-sans text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-lg shrink-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-500/60"
                >
                  <span>Pay Respects & Inspect Dossier</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. THE GREAT EXTINCTION EPOCHS WING */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 font-sans space-y-6">
        <div className="border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-400 tracking-wider uppercase mb-1">
            <Archive className="w-4 h-4" />
            <span>Digital Extinction Cataclysms</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-white tracking-tight">
            The Great Wipeouts of Web History
          </h2>
          <p className="text-sm text-zinc-400 mt-1">
            Four historical epochs where hundreds of beloved digital empires dissolved overnight.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: 'The Dot-Com Crash',
              era: '1999 — 2002',
              desc: 'Venture capital vaporized. Early portal pioneers, e-commerce experiments, and search indexes shuttered.',
              relics: 'Pets.com, AltaVista, GeoCities, Netscape',
              href: '/explore?era=WEB1',
              color: 'border-yellow-500/30 text-yellow-400',
              accent: 'bg-yellow-950/40 text-yellow-300'
            },
            {
              title: 'The Flash Apocalypse',
              era: 'December 31, 2020',
              desc: 'Adobe deprecates the NPAPI browser plugin, immediately freezing millions of browser games and interactive art pieces.',
              relics: 'Macromedia Flash, Homestar Runner, Club Penguin',
              href: '/explore?q=flash',
              color: 'border-purple-500/30 text-purple-400',
              accent: 'bg-purple-950/40 text-purple-300'
            },
            {
              title: 'Mobile & Social Purge',
              era: '2012 — 2018',
              desc: 'The pivot to algorithmic feeds and smartphone operating system duopolies decimated independent networks.',
              relics: 'Vine, MySpace, Path, Yik Yak, Pebble, Grooveshark',
              href: '/explore?category=Social',
              color: 'border-red-500/30 text-red-400',
              accent: 'bg-red-950/40 text-red-300'
            },
            {
              title: 'The Modern Sunset Wave',
              era: '2023 — 2026',
              desc: 'Generative AI disruptions, rising cloud infrastructure costs, and platform fatigue claim modern apps.',
              relics: 'Artifact, Omegle, Omegle Clones, Skiff, Stadia',
              href: '/explore?era=RECENT',
              color: 'border-cyan-500/30 text-cyan-400',
              accent: 'bg-cyan-950/40 text-cyan-300'
            }
          ].map((epoch) => (
            <Link
              key={epoch.title}
              href={epoch.href}
              className={`p-5 rounded-2xl bg-zinc-950/90 border ${epoch.color} hover:bg-zinc-900 transition-all duration-200 flex flex-col justify-between space-y-4 group shadow-md hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-amber-500/60`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className={`px-2 py-0.5 rounded-full ${epoch.accent} font-bold text-[10px]`}>
                    {epoch.era}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-red-400 transition-colors">
                  {epoch.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {epoch.desc}
                </p>
              </div>
              <div className="pt-2 border-t border-white/[0.06] text-[11px] font-mono text-zinc-500">
                <strong className="text-zinc-400">Relics:</strong> {epoch.relics}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. ARCHAEOLOGICAL LABORATORIES & GATEWAYS */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* 1. Cemetery Map */}
          <Link
            href="/grounds"
            className="p-6 rounded-2xl bg-zinc-900/90 border border-white/10 hover:border-red-500/50 hover:bg-zinc-850/80 transition-all duration-200 flex flex-col justify-between space-y-4 group shadow-lg focus-visible:ring-2 focus-visible:ring-amber-500/60"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-950/60 border border-red-500/40 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform">
                <Landmark className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors font-serif">
                  3D Cemetery Grounds
                </h3>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  Interactive isometric necropolis. Explore Google Mausoleum, P2P Cove, and view minimap HUD.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-red-400 group-hover:translate-x-1 transition-transform">
              <span>Walk the Grounds</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          {/* 2. Sound Vault */}
          <Link
            href="/sounds"
            className="p-6 rounded-2xl bg-zinc-900/90 border border-white/10 hover:border-emerald-500/50 hover:bg-zinc-850/80 transition-all duration-200 flex flex-col justify-between space-y-4 group shadow-lg focus-visible:ring-2 focus-visible:ring-amber-500/60"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <Volume2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors font-serif">
                  Sound Vault
                </h3>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  Acoustic fossils. Synthesize the ICQ Uh-Oh!, AOL 56k dial-up screech, and MSN Messenger nudge.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 group-hover:translate-x-1 transition-transform">
              <span>Open Soundboard</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          {/* 3. Autopsy Rivals */}
          <Link
            href="/compare"
            className="p-6 rounded-2xl bg-zinc-900/90 border border-white/10 hover:border-cyan-500/50 hover:bg-zinc-850/80 transition-all duration-200 flex flex-col justify-between space-y-4 group shadow-lg focus-visible:ring-2 focus-visible:ring-amber-500/60"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors font-serif">
                  Autopsy Rivals
                </h3>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  Head-to-head post-mortems. Why Vine died and TikTok won, MySpace vs Facebook, Napster vs Spotify.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400 group-hover:translate-x-1 transition-transform">
              <span>Compare Rivals</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          {/* 4. Sunset Gazette */}
          <Link
            href="/gazette"
            className="p-6 rounded-2xl bg-zinc-900/90 border border-white/10 hover:border-amber-500/50 hover:bg-zinc-850/80 transition-all duration-200 flex flex-col justify-between space-y-4 group shadow-lg focus-visible:ring-2 focus-visible:ring-amber-500/60"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-950/60 border border-amber-500/40 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                <Newspaper className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors font-serif">
                  The Sunset Gazette
                </h3>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  Daily archival broadsheet. Discover historical shutdowns, final days, and quotes of deleted history.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400 group-hover:translate-x-1 transition-transform">
              <span>Read Gazette</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>
      </section>

      {/* 6. LIVE ARCHAEOLOGICAL STREAM & RECENT UPDATES WING */}
      <RecentUpdatesWing
        recentlyUpdated={recentlyUpdated}
        recentlyBuried={recentlyBuried}
        totalDeadCount={deadCount}
        lastUpdatedStr={lastUpdatedStr}
      />

      {/* 7. DYING NOW / AT RISK SPOTLIGHT */}
      <section className="w-full border-y border-amber-500/15 bg-amber-500/[0.03] py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 tracking-wider uppercase mb-1">
                <AlertTriangle className="w-4 h-4 animate-pulse" />
                <span>Multi-Signal Detection Radar</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-black text-white tracking-tight">
                Dying Now — Services At Risk
              </h2>
              <p className="text-sm text-zinc-300 font-sans mt-1 max-w-2xl leading-relaxed">
                Platforms that have not shut down yet, but show multiple corroborated indicators of terminal decline (abandoned repositories, DNS instability, traffic drop).
              </p>
            </div>

            <Link
              href="/dying-now"
              className="flex items-center gap-2 text-sm font-sans font-bold text-amber-400 hover:text-amber-300 transition-colors shrink-0 group focus-visible:ring-2 focus-visible:ring-amber-500/60 rounded px-1"
            >
              <span>Explore At-Risk Radar ({stats.at_risk} Active)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* At Risk Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {atRiskEntities.map((entity) => (
              <div
                key={entity.id}
                className="p-6 rounded-2xl bg-zinc-950/95 border border-amber-500/30 shadow-xl flex flex-col justify-between h-full space-y-4 backdrop-blur-xl"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-white/8">
                    <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold truncate">
                      {entity.category}
                    </span>
                    <div className="shrink-0">
                      <StatusBadge status="AT_RISK" size="sm" />
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 pt-0.5">
                    <EntityLogo entity={entity} size="md" />
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-bold text-white font-sans truncate" title={entity.name}>
                        {entity.name}
                      </h3>
                      <div className="text-xs font-mono text-zinc-400 mt-0.5 truncate">{entity.primary_domain}</div>
                    </div>
                  </div>

                  {/* Degradation risk meter */}
                  <div className="p-3.5 rounded-xl bg-zinc-900 border border-white/5 space-y-2">
                    <div className="flex items-center justify-between text-xs font-sans">
                      <span className="text-zinc-400 font-medium">Degradation Risk:</span>
                      <span className="text-amber-400 font-bold text-sm font-mono">{entity.confidence_score}%</span>
                    </div>
                    <div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-amber-500 to-red-500 h-full rounded-full"
                        style={{ width: `${entity.confidence_score}%` }}
                      />
                    </div>
                  </div>

                  <div className="space-y-1 text-xs min-h-[60px] flex flex-col justify-start">
                    <span className="text-zinc-500 text-[11px] uppercase tracking-wider font-bold">Signals Detected:</span>
                    {entity.risk_signals?.slice(0, 2).map((sig) => (
                      <div key={sig.id} className="flex items-center justify-between text-zinc-300 text-xs font-sans">
                        <span className="truncate max-w-[80%]">{sig.label}</span>
                        <span className="text-amber-400 font-mono font-bold shrink-0">+{sig.points}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/grave/${entity.slug}`}
                  className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-amber-400 hover:text-amber-300 font-bold font-sans transition-colors mt-auto shrink-0 focus-visible:ring-2 focus-visible:ring-amber-500/60 rounded"
                >
                  <span>Inspect Risk Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. EXPLORE BY ARCHAEOLOGICAL CATEGORY */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-8 font-sans">
        <div className="border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-400 tracking-wider uppercase mb-1">
            <Compass className="w-4 h-4 text-red-400" />
            <span>Archaeological Taxonomies</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-white tracking-tight">
            Browse Defunct Ecosystems
          </h2>
          <p className="text-sm text-zinc-400 mt-1">
            Navigate through specialized sectors of digital ruins from Web 1.0 to modern mobile app graveyards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-stretch">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="p-5 rounded-2xl bg-zinc-950/90 border border-white/10 hover:border-red-500/40 hover:bg-zinc-900 transition-all duration-200 group flex flex-col justify-between shadow-md hover:-translate-y-1 h-full min-h-[140px] focus-visible:ring-2 focus-visible:ring-amber-500/60"
            >
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                    <span className="text-red-400 font-bold">{cat.count}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0" />
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-red-400 transition-colors font-sans">
                    {cat.name}
                  </h3>
                </div>
                <p className="text-xs text-zinc-400 mt-1.5 font-sans leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 9. SUBMISSION CALLOUT BANNER */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="relative rounded-2xl bg-zinc-950 border-2 border-white/15 p-8 sm:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-400">
              Community Archaeology
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-black text-white tracking-tight">
              Remember a website that vanished?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
              Help us preserve what the internet lost. Submit defunct websites, forgotten apps, or dead developer tools to our archaeological forensic queue.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/submit"
              className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-sans font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-xl hover:-translate-y-0.5 inline-block cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-500/60"
            >
              Submit an Entity for Review
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
