"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { GraveEntity } from '@/types/graveyard';
import { ALL_SEED_ENTITIES } from '@/data/seed-entities-batch2';
import { EntityLogo } from '@/components/EntityLogo';
import { StatusBadge } from '@/components/StatusBadge';
import { 
  MapPin, 
  Flame, 
  Search, 
  ArrowRight, 
  Skull, 
  Sparkles, 
  ShieldAlert, 
  Globe,
  Compass,
  Landmark,
  Layers,
  LayoutGrid,
  Box
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { NecropolisCanvas } from '@/components/NecropolisCanvas';

interface CemeteryPlot {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  filter: (entity: GraveEntity) => boolean;
  accentColor: string;
}

const CEMETERY_PLOTS: CemeteryPlot[] = [
  {
    id: 'all',
    name: 'All Cemetery Grounds',
    subtitle: 'Full Necropolis Overview',
    description: 'Every documented platform resting in the Internet Graveyard.',
    filter: () => true,
    accentColor: 'border-white/20 text-white'
  },
  {
    id: 'google-mausoleum',
    name: 'The Google Mausoleum',
    subtitle: 'Silicon Valley Sunset Crypt',
    description: 'The resting ground for beloved products terminated by the Alphabet executive committee.',
    filter: (e) => e.parent_company?.toLowerCase().includes('google') || e.slug.includes('google') || ['stadia', 'orkut', 'songza'].includes(e.slug),
    accentColor: 'border-amber-500/40 text-amber-400'
  },
  {
    id: 'web1-pioneers',
    name: 'Web 1.0 & Pioneer Row',
    subtitle: 'The Dawn of Cyberspace (1990 — 2004)',
    description: 'The earliest web portals, foundational search engines, and hypertext pioneers that charted the uncharted internet.',
    filter: (e) => ['netscape', 'altavista', 'lycos', 'ask-jeeves', 'geocities', 'infoseek', 'excite', 'webcrawler', 'yahoo-directory', 'dmoz', 'pets-com'].includes(e.slug) || (Boolean(e.founded_year) && e.founded_year <= 2001),
    accentColor: 'border-yellow-500/40 text-yellow-400'
  },
  {
    id: 'p2p-pirate-cove',
    name: 'The P2P & Pirate Cove',
    subtitle: 'The Decentralized Rebellion',
    description: 'Peer-to-peer file sharing protocols and music platforms that challenged copyright giants and lost in federal court.',
    filter: (e) => ['napster', 'kazaa', 'limewire', 'grooveshark', 'rdio', 'audiogalaxy', 'purevolume', 'songza'].includes(e.slug) || e.category === 'Streaming',
    accentColor: 'border-cyan-500/40 text-cyan-400'
  },
  {
    id: 'social-grounds',
    name: 'Social Media Grounds',
    subtitle: 'The Fallen Feeds',
    description: 'Pioneering social networks whose users migrated, outgrew them, or abandoned them for algorithmic feeds.',
    filter: (e) => e.category === 'Social' || ['vine', 'myspace', 'friendster', 'path', 'secret', 'bebo', 'formspring', 'gowalla', 'dailybooth', 'houseparty', 'artifact', 'peach'].includes(e.slug),
    accentColor: 'border-red-500/40 text-red-400'
  },
  {
    id: 'messaging-valley',
    name: 'Messaging Valley',
    subtitle: 'Silent Chat Rooms',
    description: 'The real-time instant messengers, chat protocols, and stranger-matching sites that kept generations awake until dawn.',
    filter: (e) => e.category === 'Messaging' || ['icq', 'aim', 'omegle', 'msn-messenger', 'skype', 'yahoo-messenger', 'bbm', 'hipchat', 'skiff'].includes(e.slug),
    accentColor: 'border-emerald-500/40 text-emerald-400'
  },
  {
    id: 'gaming-crypt',
    name: 'Gaming & Virtual Crypt',
    subtitle: 'Virtual Worlds & Flash Relics',
    description: 'Virtual avatar worlds, Flash engines, and interactive experiences that dissolved when underlying standards shifted.',
    filter: (e) => e.category === 'Gaming' || ['club-penguin', 'adobe-flash', 'toontown-online', 'playstation-home', 'virtual-magic-kingdom', 'ouya', 'stadia', 'heardle'].includes(e.slug),
    accentColor: 'border-purple-500/40 text-purple-400'
  },
  {
    id: 'hardware-crypt',
    name: 'Silicon Hardware & Device Row',
    subtitle: 'Defunct Silicon & Wearables',
    description: 'Beloved smartwatches, experimental micro-consoles, and mobile platforms crushed by Big Tech monopolies.',
    filter: (e) => e.category === 'Hardware' || ['pebble', 'ouya', 'essential-phone', 'google-glass', 'windows-phone', 'blackberry-os'].includes(e.slug),
    accentColor: 'border-blue-500/40 text-blue-400'
  }
];

export default function GroundsPage() {
  const [viewMode, setViewMode] = useState<'isometric' | 'grid'>('isometric');
  const [activePlotId, setActivePlotId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [candleCounts, setCandleCounts] = useState<{ [slug: string]: number }>(() => {
    const counts: { [slug: string]: number } = {};
    ALL_SEED_ENTITIES.forEach(e => {
      counts[e.slug] = e.candle_count || 120;
    });
    return counts;
  });
  const [litSlugs, setLitSlugs] = useState<Set<string>>(new Set());
  const [visibleCount, setVisibleCount] = useState<number>(32);

  // Reset pagination when active plot or search changes
  React.useEffect(() => {
    setVisibleCount(32);
  }, [activePlotId, searchQuery]);

  const activePlot = useMemo(() => {
    return CEMETERY_PLOTS.find(p => p.id === activePlotId) || CEMETERY_PLOTS[0];
  }, [activePlotId]);

  const displayedEntities = useMemo(() => {
    return ALL_SEED_ENTITIES.filter(e => {
      const matchesPlot = activePlot.filter(e);
      if (!matchesPlot) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        return (
          e.name.toLowerCase().includes(q) ||
          e.slug.toLowerCase().includes(q) ||
          e.category.toLowerCase().includes(q) ||
          e.cause_of_death_summary.toLowerCase().includes(q)
        );
      }

      return true;
    });
  }, [activePlot, searchQuery]);

  const handleLightCandle = async (slug: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (litSlugs.has(slug)) return;

    setLitSlugs(prev => new Set(prev).add(slug));
    setCandleCounts(prev => ({
      ...prev,
      [slug]: (prev[slug] || 0) + 1
    }));

    try {
      await fetch(`/api/entities/${slug}/candle`, { method: 'POST' });
    } catch (err) {
      console.error('Failed to light candle:', err);
    }
  };

  const totalCandlesOnGrounds = useMemo(() => {
    return Object.values(candleCounts).reduce((acc, count) => acc + count, 0);
  }, [candleCounts]);

  return (
    <div className="min-h-screen pt-24 pb-16 sm:pt-28 sm:pb-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Cemetery Map Header Banner */}
        <div className="relative rounded-3xl bg-zinc-900/90 border border-white/10 p-8 sm:p-12 backdrop-blur-md overflow-hidden shadow-2xl">
          {/* Eerie Ambient Fog Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-950/40 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-950/30 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-950/60 border border-red-500/30 text-red-400 text-xs font-mono font-bold tracking-wider">
                <Landmark className="w-4 h-4" />
                <span>INTERACTIVE CARTOGRAPHY • CEMETERY GROUNDS</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight drop-shadow-md">
                The Digital Cemetery Map
              </h1>

              <p className="text-base sm:text-lg text-zinc-300 font-sans leading-relaxed">
                An aerial walk through the consecrated grounds of defunct cyberspace. Explore themed plots, inspect tombstone carvings, and kindle eternal memorial candles.
              </p>
            </div>

            {/* Grounds Telemetry Stats & View Switcher */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-zinc-950 border border-white/10 shrink-0">
                <button
                  onClick={() => setViewMode('isometric')}
                  className={cn(
                    "flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer",
                    viewMode === 'isometric'
                      ? "bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                      : "text-zinc-400 hover:text-white"
                  )}
                >
                  <Box className="w-3.5 h-3.5" />
                  <span>3D Necropolis</span>
                </button>

                <button
                  onClick={() => setViewMode('grid')}
                  className={cn(
                    "flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer",
                    viewMode === 'grid'
                      ? "bg-zinc-800 text-white border border-white/20 shadow-sm"
                      : "text-zinc-400 hover:text-white"
                  )}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>2D Grid</span>
                </button>
              </div>

              <div className="flex items-center gap-6 text-xs font-mono bg-zinc-950/90 p-4 rounded-2xl border border-white/10 shrink-0">
                <div className="space-y-0.5">
                  <div className="text-zinc-500 uppercase">Plots</div>
                  <div className="text-xl font-bold text-white">{ALL_SEED_ENTITIES.length}</div>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="space-y-0.5">
                  <div className="text-zinc-500 uppercase">Candles</div>
                  <div className="text-xl font-bold text-amber-400 flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
                    <span>{totalCandlesOnGrounds.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Plot Filter Switcher */}
          <div className="pt-6 space-y-4">
            <div className="text-xs font-mono uppercase text-zinc-400 font-bold flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-zinc-500" />
              <span>Navigate to Plot / Crypt:</span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {CEMETERY_PLOTS.map((plot) => {
                const isActive = activePlotId === plot.id;
                return (
                  <button
                    key={plot.id}
                    onClick={() => setActivePlotId(plot.id)}
                    className={cn(
                      "px-4 py-2.5 rounded-xl text-xs sm:text-sm font-sans font-bold transition-all cursor-pointer border flex items-center gap-2",
                      isActive
                        ? "bg-zinc-800 border-white/30 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                        : "bg-zinc-950/80 border-white/10 text-zinc-400 hover:text-white hover:bg-zinc-850"
                    )}
                  >
                    <span>{plot.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Plot Description & Search Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-white/8">
              <div className="text-xs text-zinc-400 font-sans italic max-w-xl">
                {activePlot.description}
              </div>

              {/* Quick Search */}
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  placeholder="Search plot tombstones..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-zinc-950 border border-white/15 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-red-500/50"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3D Isometric Necropolis Canvas View */}
        {viewMode === 'isometric' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 px-1">
              <span className="flex items-center gap-2">
                <Box className="w-3.5 h-3.5 text-amber-400" />
                <span>60 FPS ISOMETRIC CARTOGRAPHY ENGINE</span>
              </span>
              <span>CLICK TO DISCOVER ENTITY RECORD</span>
            </div>
            <NecropolisCanvas entities={ALL_SEED_ENTITIES} />
          </div>
        )}

        {/* The Field of Tombstones Grid (Rendered in Grid mode or supplementary in Isometric) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 px-1">
            <span>SHOWING {displayedEntities.length} CONSECRATED PLOTS ({viewMode === 'isometric' ? 'EXPLORER LIST' : 'PRIMARY GRID'})</span>
            <span>CLICK TOMBSTONE TO ENTER MEMORIAL</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedEntities.slice(0, visibleCount).map((entity) => {
              const count = candleCounts[entity.slug] || entity.candle_count || 120;
              const isLit = litSlugs.has(entity.slug);

              return (
                <div
                  key={entity.id}
                  className="group relative rounded-t-3xl rounded-b-2xl bg-gradient-to-b from-zinc-850 via-zinc-900 to-zinc-950 border-2 border-zinc-700/70 hover:border-red-500/60 p-6 flex flex-col justify-between transition-all duration-300 shadow-xl hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.8)] overflow-hidden"
                >
                  {/* Subtle Tombstone Arch Cap Line */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/10 rounded-full" />

                  {/* Top Tombstone Inscription & Marker */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-white/10">
                      <span className="font-serif text-lg text-zinc-500 group-hover:text-red-400 transition-colors">
                        †
                      </span>
                      <StatusBadge status={entity.status} size="sm" />
                    </div>

                    {/* Logo & Platform Name */}
                    <div className="flex items-center gap-3.5">
                      <EntityLogo entity={entity} size="md" className="border border-white/15 shadow-md shrink-0" />
                      <div className="min-w-0 flex-1">
                        <Link
                          href={`/grave/${entity.slug}`}
                          className="font-black text-xl text-white hover:text-red-400 transition-colors block truncate"
                          title={entity.name}
                        >
                          {entity.name}
                        </Link>
                        <div className="text-xs font-mono font-bold text-zinc-400 mt-0.5">
                          {entity.lifespan}
                        </div>
                      </div>
                    </div>

                    {/* Engraved Epitaph / Autopsy Reason */}
                    <p className="text-xs text-zinc-300 font-sans leading-relaxed line-clamp-3 italic bg-zinc-950/60 p-3 rounded-xl border border-white/5">
                      "{entity.cause_of_death_summary}"
                    </p>
                  </div>

                  {/* Bottom Tombstone Footer: Candle & Enter Grave */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                    {/* Interactive Candle Button */}
                    <button
                      onClick={(e) => handleLightCandle(entity.slug, e)}
                      className={cn(
                        "flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer border shrink-0",
                        isLit
                          ? "bg-amber-950/60 border-amber-500/60 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.3)]"
                          : "bg-zinc-900 border-white/10 text-zinc-400 hover:text-amber-300 hover:border-amber-500/30"
                      )}
                      title="Kindle memorial candle on this grave"
                    >
                      <Flame className={cn("w-3.5 h-3.5 shrink-0", isLit ? "text-amber-400 fill-amber-400 animate-pulse" : "text-zinc-500")} />
                      <span>{count}</span>
                    </button>

                    {/* Visit Grave Link */}
                    <Link
                      href={`/grave/${entity.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-mono font-bold text-zinc-300 hover:text-white transition-colors group-hover:translate-x-0.5 shrink-0"
                    >
                      <span>Enter Tomb</span>
                      <ArrowRight className="w-3.5 h-3.5 text-red-400 shrink-0" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {displayedEntities.length > visibleCount && (
            <div className="pt-8 pb-4 flex flex-col items-center justify-center space-y-4">
              <div className="text-xs font-mono text-zinc-400">
                Displaying <span className="text-white font-bold">{Math.min(visibleCount, displayedEntities.length)}</span> of <span className="text-white font-bold">{displayedEntities.length}</span> consecrated plots
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => setVisibleCount(prev => prev + 32)}
                  className="px-8 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-lg transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                >
                  Load Next 32 Plots ({displayedEntities.length - visibleCount} remaining)
                </button>
                <button
                  onClick={() => setVisibleCount(displayedEntities.length)}
                  className="px-5 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-medium text-xs border border-white/10 transition-colors cursor-pointer"
                >
                  Show All ({displayedEntities.length})
                </button>
              </div>
            </div>
          )}

          {displayedEntities.length === 0 && (
            <div className="text-center py-16 p-8 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-3">
              <Skull className="w-8 h-8 text-zinc-600 mx-auto" />
              <div className="text-lg font-bold text-white">No Graves Located in this Plot</div>
              <p className="text-sm text-zinc-400 font-sans">
                Try searching for a different name or navigate to "All Cemetery Grounds".
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
