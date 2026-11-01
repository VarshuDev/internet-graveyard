"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { StatusBadge } from '@/components/StatusBadge';
import { EntityLogo } from '@/components/EntityLogo';
import { GraveCategory, GraveEntity } from '@/types/graveyard';
import { 
  Calendar, 
  Clock, 
  Filter, 
  ArrowRight, 
  Layers, 
  Sparkles,
  ChevronRight,
  Flame,
  Globe
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ALL_SEED_ENTITIES } from '@/data/seed-entities-batch2';

const CATEGORIES: (GraveCategory | 'ALL')[] = [
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

export default function TimelinePage() {
  const [selectedCategory, setSelectedCategory] = useState<GraveCategory | 'ALL'>('ALL');
  const [activeDecade, setActiveDecade] = useState<string>('ALL');

  // Filter entities
  const filteredEntities = useMemo(() => {
    let list = ALL_SEED_ENTITIES;
    if (selectedCategory !== 'ALL') {
      list = list.filter(e => e.category === selectedCategory);
    }
    return list;
  }, [selectedCategory]);

  // Group entities by decade and year
  const timelineGroups = useMemo(() => {
    const groups: { [decade: string]: { [year: number]: GraveEntity[] } } = {};

    for (const entity of filteredEntities) {
      const deathYear = entity.death_year || entity.founded_year || 2020;
      const decade = `${Math.floor(deathYear / 10) * 10}s`;

      if (!groups[decade]) groups[decade] = {};
      if (!groups[decade][deathYear]) groups[decade][deathYear] = [];
      groups[decade][deathYear].push(entity);
    }

    return groups;
  }, [filteredEntities]);

  const decades = Object.keys(timelineGroups).sort((a, b) => b.localeCompare(a));

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-12 font-sans">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/40 border border-red-500/30 text-red-400 text-xs font-mono font-bold tracking-wider uppercase shrink-0">
          <Clock className="w-4 h-4 shrink-0" />
          <span>Archaeological Epochs</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-black text-white uppercase tracking-tight drop-shadow-md">
          Internet Timeline
        </h1>
        <p className="text-base sm:text-lg text-zinc-300 font-sans leading-relaxed">
          Traverse through three decades of digital rise and ruin. Select categories or explore by decade.
        </p>
      </div>

      {/* Category Filtering Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 font-sans text-xs sm:text-sm">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={cn(
              'px-4 py-2 rounded-full border transition-all cursor-pointer font-medium',
              selectedCategory === cat
                ? 'bg-red-600 border-red-500 text-white font-bold shadow-[0_0_15px_rgba(239,68,68,0.4)]'
                : 'bg-zinc-900 border-white/10 text-zinc-300 hover:text-white hover:border-white/25'
            )}
          >
            {cat === 'ALL' ? 'All Taxonomies' : cat}
          </button>
        ))}
      </div>

      {/* Interactive Timeline Stream */}
      <div className="space-y-16">
        {decades.map((decade) => {
          const yearsInDecade = Object.keys(timelineGroups[decade])
            .map(Number)
            .sort((a, b) => b - a);

          return (
            <section key={decade} className="space-y-8">
              {/* Decade Marker */}
              <div className="sticky top-20 z-20 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 bg-zinc-900/95 backdrop-blur-md py-4 border-y border-white/10 px-6 rounded-2xl shadow-xl">
                <span className="text-2xl sm:text-3xl font-mono font-black text-red-400 tracking-wider">
                  {decade}
                </span>
                <span className="text-sm sm:text-base text-zinc-300 font-sans">
                  Era of {decade === '2020s' ? 'Mobile Giants & Streaming Collapses' :
                         decade === '2010s' ? 'Social Explosion & Corporate Acquisitions' :
                         decade === '2000s' ? 'P2P Revolutions & Web 2.0 Homesteads' :
                         'The Genesis Web & First Browser Wars'}
                </span>
              </div>

              {/* Years in Decade */}
              <div className="relative pl-6 sm:pl-10 border-l-2 border-white/15 space-y-12 ml-4 sm:ml-8">
                {yearsInDecade.map((year) => {
                  const entitiesInYear = timelineGroups[decade][year];

                  return (
                    <div key={year} className="relative space-y-5">
                      {/* Year Node */}
                      <div className="absolute -left-[35px] sm:-left-[51px] top-1 flex items-center justify-center">
                        <span className="w-5 h-5 rounded-full bg-zinc-950 border-2 border-red-500 flex items-center justify-center text-xs text-white shadow-[0_0_12px_rgba(239,68,68,0.7)]">
                          •
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <h3 className="text-xl sm:text-2xl font-mono font-bold text-white tracking-wider">
                          Year {year}
                        </h3>
                        <span className="text-xs sm:text-sm font-mono text-zinc-300">
                          ({entitiesInYear.length} Deceased Entities)
                        </span>
                      </div>

                      {/* Entities in this year */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
                        {entitiesInYear.map((entity) => (
                          <Link
                            key={entity.id}
                            href={`/grave/${entity.slug}`}
                            className="group p-5 rounded-2xl bg-zinc-900/90 border border-white/10 hover:border-red-500/40 hover:bg-zinc-850 transition-all duration-200 flex flex-col justify-between h-full space-y-4 shadow-lg"
                          >
                            <div className="space-y-3">
                              {/* Top Bar: Category & Status */}
                              <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-white/8">
                                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold truncate">
                                  {entity.category}
                                </span>
                                <div className="shrink-0">
                                  <StatusBadge status={entity.status} size="sm" />
                                </div>
                              </div>

                              {/* Identity: Logo + Name + Lifespan */}
                              <div className="flex items-center gap-3 pt-0.5">
                                <EntityLogo entity={entity} size="sm" />
                                <div className="min-w-0 flex-1">
                                  <h4 className="text-base sm:text-lg font-black text-white group-hover:text-red-300 transition-colors truncate" title={entity.name}>
                                    {entity.name}
                                  </h4>
                                  <div className="text-xs font-mono text-zinc-300 font-bold mt-0.5">
                                    {entity.lifespan}
                                  </div>
                                </div>
                              </div>

                              <p className="text-xs sm:text-sm text-zinc-300 font-sans line-clamp-2 leading-relaxed min-h-[40px]">
                                {entity.tagline || entity.cause_of_death_summary}
                              </p>
                            </div>

                            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm text-zinc-300 font-mono mt-auto">
                              <span className="truncate max-w-[65%]" title={entity.cause_category}>
                                {entity.cause_category}
                              </span>
                              <span className="flex items-center gap-1 text-red-400 font-bold group-hover:translate-x-1 transition-transform shrink-0">
                                Memorial <ChevronRight className="w-4 h-4 shrink-0" />
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
