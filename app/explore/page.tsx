"use client";

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { GraveEntity, GraveStatus, GraveCategory, CauseCategory } from '@/types/graveyard';
import { GraveCard } from '@/components/GraveCard';
import { StatusBadge } from '@/components/StatusBadge';
import { EntityLogo } from '@/components/EntityLogo';
import { 
  Search, 
  Filter, 
  X, 
  SlidersHorizontal, 
  ArrowUpDown, 
  Database,
  Calendar,
  Layers,
  Skull,
  Activity,
  ArrowRight,
  LayoutGrid,
  List,
  Flame,
  Archive,
  ExternalLink,
  ShieldAlert,
  Clock,
  Sparkles
} from 'lucide-react';
import { ALL_SEED_ENTITIES } from '@/data/seed-entities-batch2';
import { rankEntitiesByQuery } from '@/lib/search/searchEngine';
import { cn } from '@/lib/utils';
import { soundFx } from '@/lib/audio/soundFx';

const CATEGORY_OPTIONS: (GraveCategory | 'ALL')[] = [
  'ALL',
  'Social',
  'Messaging',
  'Gaming',
  'Streaming',
  'Search',
  'Developer tools',
  'Web technology',
  'Communities',
  'Hardware'
];

const CAUSE_OPTIONS: (CauseCategory | 'ALL')[] = [
  'ALL',
  'Acquired & Discontinued',
  'Market Competition',
  'Strategic Pivot',
  'Legal & Regulatory',
  'Bankruptcy',
  'Lack of Monetization',
  'Security & Privacy',
  'Technological Obsolescence',
  'Community Collapse'
];

function ExploreContent() {
  const searchParams = useSearchParams();
  const initialQ = searchParams.get('q') || '';
  const initialCategory = searchParams.get('category') || 'ALL';
  const initialStatus = searchParams.get('status') || 'ALL';
  const initialEra = (searchParams.get('era') as any) || 'ALL';

  const [allEntities, setAllEntities] = useState<GraveEntity[]>(ALL_SEED_ENTITIES);
  const [searchQuery, setSearchQuery] = useState(initialQ);
  const [selectedStatus, setSelectedStatus] = useState<string>(initialStatus);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedCause, setSelectedCause] = useState<string>('ALL');
  const [selectedEra, setSelectedEra] = useState<'ALL' | 'RECENT' | 'WEB1' | 'WEB2' | 'MODERN'>(initialEra);
  const [yearFrom, setYearFrom] = useState<string>('');
  const [yearTo, setYearTo] = useState<string>('');
  const [sortBy, setSortBy] = useState<'recent' | 'candles' | 'name' | 'oldest'>('recent');
  const [viewMode, setViewMode] = useState<'grid' | 'ledger'>('grid');
  const [inspectingEntity, setInspectingEntity] = useState<GraveEntity | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(32);

  // Fetch live updates from API to ensure fresh database records are always included
  useEffect(() => {
    fetch('/api/entities')
      .then(res => res.json())
      .then(data => {
        if (data && Array.isArray(data.entities) && data.entities.length > 0) {
          setAllEntities(data.entities);
        }
      })
      .catch(() => {});
  }, []);

  // Compute live dynamic counts
  const dynamicStatusCounts = useMemo(() => {
    let dead = 0, active = 0, atRisk = 0, zombie = 0;
    for (const e of allEntities) {
      if (e.status === 'CONFIRMED_DEAD') dead++;
      else if (e.status === 'ACTIVE') active++;
      else if (e.status === 'AT_RISK') atRisk++;
      else if (e.status === 'ZOMBIE') zombie++;
    }
    return {
      ALL: allEntities.length,
      CONFIRMED_DEAD: dead,
      ACTIVE: active,
      AT_RISK: atRisk,
      ZOMBIE: zombie
    };
  }, [allEntities]);

  const statusOptions: { id: GraveStatus | 'ALL'; label: string; count: number }[] = useMemo(() => [
    { id: 'ALL', label: 'All Records', count: dynamicStatusCounts.ALL },
    { id: 'CONFIRMED_DEAD', label: 'Dead (Fallen)', count: dynamicStatusCounts.CONFIRMED_DEAD },
    { id: 'ACTIVE', label: 'Active (Living)', count: dynamicStatusCounts.ACTIVE },
    { id: 'AT_RISK', label: 'At-Risk (Decline)', count: dynamicStatusCounts.AT_RISK },
    { id: 'ZOMBIE', label: 'Zombie Domains', count: dynamicStatusCounts.ZOMBIE },
  ], [dynamicStatusCounts]);

  // Reset pagination when filters change
  useEffect(() => {
    setVisibleCount(32);
  }, [searchQuery, selectedStatus, selectedCategory, selectedCause, selectedEra, yearFrom, yearTo, sortBy]);

  useEffect(() => {
    if (searchParams.get('q')) setSearchQuery(searchParams.get('q')!);
    if (searchParams.get('category')) setSelectedCategory(searchParams.get('category')!);
    if (searchParams.get('status')) setSelectedStatus(searchParams.get('status')!);
    if (searchParams.get('era')) setSelectedEra(searchParams.get('era') as any);
  }, [searchParams]);

  // Ranked query filter
  const filteredEntities = useMemo(() => {
    let list = [...allEntities];
    let q = searchQuery.toLowerCase().trim();

    if (q.length > 0) {
      list = rankEntitiesByQuery(list, q);
    }

    if (selectedEra === 'RECENT') {
      list = list.filter(e => e.death_year && e.death_year >= 2022);
    } else if (selectedEra === 'WEB1') {
      list = list.filter(e => (e.founded_year && e.founded_year <= 2004) || (e.death_year && e.death_year <= 2004));
    } else if (selectedEra === 'WEB2') {
      list = list.filter(e => (e.founded_year && e.founded_year >= 2005 && e.founded_year <= 2015) || (e.death_year && e.death_year >= 2005 && e.death_year <= 2015));
    } else if (selectedEra === 'MODERN') {
      list = list.filter(e => (e.founded_year && e.founded_year >= 2016) || (e.death_year && e.death_year >= 2016));
    }

    if (selectedStatus !== 'ALL') {
      list = list.filter(e => e.status.toUpperCase() === selectedStatus.toUpperCase());
    }

    if (selectedCategory !== 'ALL') {
      list = list.filter(e => e.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    if (selectedCause !== 'ALL') {
      list = list.filter(e => e.cause_category.toLowerCase() === selectedCause.toLowerCase());
    }

    if (yearFrom) {
      const from = parseInt(yearFrom);
      list = list.filter(e => (e.death_year || e.founded_year) >= from);
    }
    if (yearTo) {
      const to = parseInt(yearTo);
      list = list.filter(e => (e.death_year || e.founded_year) <= to);
    }

    if (sortBy === 'candles') {
      list.sort((a, b) => (b.candle_count || 0) - (a.candle_count || 0));
    } else if (sortBy === 'name') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'oldest') {
      list.sort((a, b) => (a.founded_year || 2000) - (b.founded_year || 2000));
    } else {
      list.sort((a, b) => (b.death_year || 2024) - (a.death_year || 2024));
    }

    return list;
  }, [searchQuery, selectedStatus, selectedCategory, selectedCause, selectedEra, yearFrom, yearTo, sortBy]);

  // Keyboard accessibility for escape key to close quick inspect drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && inspectingEntity) {
        setInspectingEntity(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [inspectingEntity]);

  const clearAllFilters = () => {
    soundFx.playClick(600);
    setSearchQuery('');
    setSelectedStatus('ALL');
    setSelectedCategory('ALL');
    setSelectedCause('ALL');
    setSelectedEra('ALL');
    setYearFrom('');
    setYearTo('');
  };

  const hasActiveFilters = searchQuery || selectedStatus !== 'ALL' || selectedCategory !== 'ALL' || selectedCause !== 'ALL' || selectedEra !== 'ALL' || yearFrom || yearTo;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-8 font-sans">
      {/* Header Dossier */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 tracking-wider uppercase font-bold">
            <Database className="w-4 h-4 text-emerald-400" />
            <span>ARCHAEOLOGICAL CATALOG // {allEntities.length.toLocaleString()} AUTHENTIC RECORDS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-white uppercase tracking-tight">
            Explore the Graveyard
          </h1>
          <p className="text-sm sm:text-base text-zinc-300 font-sans max-w-2xl leading-relaxed">
            Full-spectrum forensic search across deceased platforms, living services under watch, and parked zombie domains.
          </p>
        </div>

        {/* View Mode Switcher Toggle */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-900 border border-white/10 self-start md:self-auto shrink-0">
          <button
            onClick={() => {
              soundFx.playClick(800);
              setViewMode('grid');
            }}
            aria-label="Switch to Monument Grid view"
            className={cn(
              "flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-500/60",
              viewMode === 'grid'
                ? "bg-white/15 text-white shadow-sm border border-white/10"
                : "text-zinc-400 hover:text-white"
            )}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Monument Grid</span>
          </button>
          <button
            onClick={() => {
              soundFx.playClick(800);
              setViewMode('ledger');
            }}
            aria-label="Switch to Archival Ledger table view"
            className={cn(
              "flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-500/60",
              viewMode === 'ledger'
                ? "bg-white/15 text-white shadow-sm border border-white/10"
                : "text-zinc-400 hover:text-white"
            )}
          >
            <List className="w-3.5 h-3.5" />
            <span>Archival Ledger</span>
          </button>
        </div>
      </div>

      {/* Main Search Input */}
      <div className="relative group">
        <div className="relative rounded-2xl bg-zinc-950/90 border-2 border-white/15 group-focus-within:border-emerald-500/80 group-focus-within:ring-4 group-focus-within:ring-emerald-500/20 transition-all shadow-xl overflow-hidden backdrop-blur-xl">
          <div className="flex items-center h-14 sm:h-16 px-4">
            <span className="text-emerald-400 font-mono font-bold text-lg mr-3 select-none">&gt;</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by title, domain, cause of death, or keywords (e.g. 'Flash games', 'social network', '2015')..."
              aria-label="Search relics by title, domain, or cause of death"
              className="w-full bg-transparent text-white placeholder-zinc-500 font-sans text-sm sm:text-base focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                aria-label="Clear search input"
                className="p-1.5 text-zinc-400 hover:text-white rounded-lg bg-zinc-800 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Status Filter Row */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs font-mono">
        {statusOptions.map((status) => (
          <button
            key={status.id}
            onClick={() => {
              soundFx.playClick(750);
              setSelectedStatus(status.id);
            }}
            className={cn(
              "px-3.5 py-2 rounded-xl border transition-all whitespace-nowrap font-bold cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-500/60 min-h-[40px] flex items-center gap-1.5",
              selectedStatus === status.id
                ? "bg-white/15 border-white/30 text-white shadow-sm"
                : "bg-zinc-900 border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
            )}
          >
            <span>{status.label}</span>
            <span className={cn(
              "text-[10px] px-1.5 py-0.5 rounded font-mono font-bold",
              selectedStatus === status.id ? "bg-white/20 text-white" : "bg-white/5 text-zinc-400"
            )}>
              {status.count}
            </span>
          </button>
        ))}
      </div>

      {/* Faceted Filter Toolbar */}
      <div className="p-5 rounded-2xl bg-zinc-950/90 border border-white/10 space-y-4 font-sans text-xs backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-zinc-300 font-bold uppercase tracking-wider font-mono">
            <SlidersHorizontal className="w-4 h-4 text-emerald-400" />
            <span>Faceted Filters</span>
          </div>
          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="text-red-400 hover:text-red-300 font-bold underline underline-offset-2 cursor-pointer font-mono"
            >
              Reset All Filters
            </button>
          )}
        </div>

        {/* Filter Rows: Era, Category, Cause */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 border-t border-white/5">
          {/* Era Filter */}
          <div className="space-y-1">
            <label className="text-[11px] font-mono uppercase text-zinc-400 font-bold">Historical Era:</label>
            <select
              value={selectedEra}
              onChange={(e) => {
                soundFx.playClick(700);
                setSelectedEra(e.target.value as any);
              }}
              className="w-full h-10 px-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-emerald-500"
            >
              <option value="ALL">All Epochs (1969 — 2026)</option>
              <option value="RECENT">⚡ Recently Buried (2022 — 2026)</option>
              <option value="MODERN">Modern Wave (2016 — 2026)</option>
              <option value="WEB2">Web 2.0 Golden Age (2005 — 2015)</option>
              <option value="WEB1">Web 1.0 Pioneers (1990 — 2004)</option>
            </select>
          </div>

          {/* Category Filter */}
          <div className="space-y-1">
            <label className="text-[11px] font-mono uppercase text-zinc-400 font-bold">Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => {
                soundFx.playClick(700);
                setSelectedCategory(e.target.value);
              }}
              className="w-full h-10 px-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-emerald-500"
            >
              {CATEGORY_OPTIONS.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === 'ALL' ? 'All Taxonomies' : cat}
                </option>
              ))}
            </select>
          </div>

          {/* Cause Filter */}
          <div className="space-y-1">
            <label className="text-[11px] font-mono uppercase text-zinc-400 font-bold">Cause of Demise:</label>
            <select
              value={selectedCause}
              onChange={(e) => {
                soundFx.playClick(700);
                setSelectedCause(e.target.value);
              }}
              className="w-full h-10 px-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-emerald-500"
            >
              {CAUSE_OPTIONS.map((cause) => (
                <option key={cause} value={cause}>
                  {cause === 'ALL' ? 'All Demise Causes' : cause}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div className="space-y-1">
            <label className="text-[11px] font-mono uppercase text-zinc-400 font-bold">Sort Order:</label>
            <select
              value={sortBy}
              onChange={(e) => {
                soundFx.playClick(700);
                setSortBy(e.target.value as any);
              }}
              className="w-full h-10 px-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-emerald-500"
            >
              <option value="recent">Recently Buried (Newest Death)</option>
              <option value="candles">Most Candles Lit</option>
              <option value="name">Alphabetical (A—Z)</option>
              <option value="oldest">Historical Seniority (Oldest)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Telemetry Bar */}
      <div className="flex items-center justify-between text-xs font-mono text-zinc-400 border-b border-white/10 pb-3">
        <div>
          LOCATED <strong className="text-white text-sm">{filteredEntities.length}</strong> ARTIFACTS
          {searchQuery && <span> MATCHING "<span className="text-emerald-400">{searchQuery}</span>"</span>}
        </div>
        <div className="text-[11px] text-zinc-500">
          SHOWING {Math.min(visibleCount, filteredEntities.length)} OF {filteredEntities.length}
        </div>
      </div>

      {/* Results View: Grid vs Ledger */}
      {filteredEntities.length === 0 ? (
        <div className="py-16 text-center space-y-4 max-w-md mx-auto font-mono">
          <Skull className="w-10 h-10 mx-auto text-zinc-600" />
          <h3 className="text-lg font-bold text-white">NO ARTIFACT FOUND</h3>
          <p className="text-xs text-zinc-400">
            No cemetery entity matches this search combination. Clear filters or check vital signs on live domain.
          </p>
          <button
            onClick={clearAllFilters}
            className="px-4 py-2 rounded-xl bg-red-600 text-white font-bold text-xs"
          >
            Clear Filters
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        /* 1. MONUMENT GRID VIEW */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 items-stretch">
          {filteredEntities.slice(0, visibleCount).map((entity) => (
            <GraveCard 
              key={entity.id} 
              entity={entity} 
              onQuickInspect={(ent) => setInspectingEntity(ent)}
            />
          ))}
        </div>
      ) : (
        /* 2. ARCHIVAL LEDGER VIEW (Dense Research Table) */
        <div className="rounded-2xl bg-zinc-950 border border-white/10 overflow-hidden shadow-xl font-mono text-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left divide-y divide-white/10 min-w-[760px]">
              <thead className="bg-zinc-900 text-[11px] text-zinc-400 uppercase tracking-wider select-none">
                <tr>
                  <th className="px-4 py-3">Platform</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Domain</th>
                  <th className="px-4 py-3">Lifespan</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Cause of Death</th>
                  <th className="px-4 py-3 text-right">Candles</th>
                  <th className="px-4 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-zinc-300">
                {filteredEntities.slice(0, visibleCount).map((entity) => (
                  <tr key={entity.id} className="hover:bg-white/5 transition-colors group">
                    <td className="px-4 py-3 font-bold text-white flex items-center gap-2">
                      <EntityLogo entity={entity} size="sm" className="shrink-0" />
                      <Link href={`/grave/${entity.slug}`} className="hover:underline text-white group-hover:text-red-400 truncate max-w-[160px]">
                        {entity.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <StatusBadge status={entity.status} size="sm" />
                    </td>
                    <td className="px-4 py-3 text-zinc-400 truncate max-w-[140px]">
                      {entity.primary_domain}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-zinc-300">
                      {entity.lifespan}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap uppercase text-[11px] text-zinc-400">
                      {entity.category}
                    </td>
                    <td className="px-4 py-3 truncate max-w-[200px] text-zinc-400" title={entity.cause_of_death_summary}>
                      {entity.cause_category}
                    </td>
                    <td className="px-4 py-3 text-right font-bold text-amber-400 whitespace-nowrap">
                      {entity.candle_count || 1}
                    </td>
                    <td className="px-4 py-3 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => {
                            soundFx.playClick(750);
                            setInspectingEntity(entity);
                          }}
                          className="px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white text-[11px]"
                        >
                          Inspect
                        </button>
                        <Link
                          href={`/grave/${entity.slug}`}
                          className="px-2 py-1 rounded bg-red-950/60 hover:bg-red-900/70 text-red-300 hover:text-white text-[11px] font-bold"
                        >
                          View
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Pagination Controls */}
      {filteredEntities.length > visibleCount && (
        <div className="pt-6 pb-12 flex flex-col items-center justify-center space-y-3 font-mono">
          <div className="text-xs text-zinc-400">
            DISPLAYING {Math.min(visibleCount, filteredEntities.length)} OF {filteredEntities.length} RECORDS
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                soundFx.playClick(800);
                setVisibleCount(prev => prev + 32);
              }}
              className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-lg transition-all cursor-pointer"
            >
              Load Next 32 Records ({filteredEntities.length - visibleCount} remaining)
            </button>
            <button
              onClick={() => {
                soundFx.playClick(850);
                setVisibleCount(filteredEntities.length);
              }}
              className="px-4 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white text-xs border border-white/10 transition-colors cursor-pointer"
            >
              Show All ({filteredEntities.length})
            </button>
          </div>
        </div>
      )}

      {/* Quick-Inspect Slide-over Drawer */}
      {inspectingEntity && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-end bg-black/70 backdrop-blur-sm animate-in fade-in"
          onClick={() => setInspectingEntity(null)}
        >
          <div 
            className="w-full max-w-lg h-full bg-zinc-950 border-l border-white/20 p-6 overflow-y-auto space-y-6 font-sans text-zinc-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <EntityLogo entity={inspectingEntity} size="lg" className="border border-white/15" />
                <div>
                  <h3 className="text-xl font-bold text-white font-serif">{inspectingEntity.name}</h3>
                  <div className="text-xs font-mono text-zinc-400">{inspectingEntity.lifespan} • {inspectingEntity.primary_domain}</div>
                </div>
              </div>
              <button
                onClick={() => setInspectingEntity(null)}
                className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Status & Category */}
            <div className="flex items-center justify-between text-xs font-mono">
              <StatusBadge status={inspectingEntity.status} size="md" />
              <span className="uppercase text-zinc-400 font-bold">{inspectingEntity.category}</span>
            </div>

            {/* Autopsy Cause Summary */}
            <div className="space-y-2 p-4 rounded-xl bg-zinc-900 border border-white/10 text-xs">
              <div className="text-[11px] font-mono uppercase text-red-400 font-bold">Autopsy Post-Mortem:</div>
              <p className="text-zinc-300 leading-relaxed font-sans">{inspectingEntity.cause_of_death_summary}</p>
            </div>

            {/* Key Milestones */}
            {inspectingEntity.timeline && inspectingEntity.timeline.length > 0 && (
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase text-zinc-400 font-bold">Key Milestones:</div>
                <div className="space-y-2">
                  {inspectingEntity.timeline.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-zinc-900/60 border border-white/5 text-xs">
                      <div className="font-mono text-emerald-400 font-bold">{item.year} — {item.title}</div>
                      <p className="text-zinc-400 text-[11px] mt-0.5">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Links & Memorial Button */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              {(inspectingEntity.archives?.[0]?.wayback_url || inspectingEntity.primary_domain) && (
                <a
                  href={inspectingEntity.archives?.[0]?.wayback_url || `https://web.archive.org/web/*/${inspectingEntity.primary_domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white"
                >
                  <Archive className="w-3.5 h-3.5" />
                  <span>Wayback Snapshot</span>
                </a>
              )}
              <Link
                href={`/grave/${inspectingEntity.slug}`}
                onClick={() => soundFx.playTelemetry()}
                className="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md"
              >
                <span>View Full Memorial</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ExplorePage() {
  return (
    <Suspense fallback={<div className="p-16 text-center text-zinc-400 font-mono text-xs">Loading archaeological search index...</div>}>
      <ExploreContent />
    </Suspense>
  );
}
