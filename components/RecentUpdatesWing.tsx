"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { GraveEntity } from '@/types/graveyard';
import { GraveCard } from '@/components/GraveCard';
import { Skull, Sparkles, Clock, ArrowRight, RefreshCw, Activity, Radio } from 'lucide-react';
import { cn } from '@/lib/utils';
import { soundFx } from '@/lib/audio/soundFx';

interface RecentUpdatesWingProps {
  recentlyUpdated: GraveEntity[];
  recentlyBuried: GraveEntity[];
  totalDeadCount: string;
  lastUpdatedStr: string;
}

export const RecentUpdatesWing: React.FC<RecentUpdatesWingProps> = ({
  recentlyUpdated,
  recentlyBuried,
  totalDeadCount,
  lastUpdatedStr
}) => {
  const [activeTab, setActiveTab] = useState<'updated' | 'buried'>('updated');

  const entitiesToShow = activeTab === 'updated' ? recentlyUpdated : recentlyBuried;

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-8 font-sans">
      {/* Header with Live Ticker and Mode Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/[0.08] pb-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-emerald-400">LIVE ARCHAEOLOGICAL STREAM</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">LAST SYNCED: {lastUpdatedStr}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif font-black text-white tracking-tight">
            {activeTab === 'updated' ? 'Recently Consecrated & Updated' : 'Recently Buried & Defunct'}
          </h2>

          <p className="text-sm text-zinc-400 font-sans max-w-2xl leading-relaxed">
            {activeTab === 'updated' 
              ? 'Real-time record of newly catalogued internet relics, verified community submissions, and updated autopsy dossiers.'
              : 'Chronological cemetery ledger of services sorted by most recent date of closure, corporate sunset, or dark servers.'}
          </p>
        </div>

        {/* Tab Controls & Direct View Links */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
          {/* Tab Switcher Pills */}
          <div className="flex items-center p-1 rounded-xl bg-zinc-900 border border-white/10 text-xs font-mono">
            <button
              onClick={() => {
                soundFx.playKeyClick();
                setActiveTab('updated');
              }}
              className={cn(
                "flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-bold transition-all cursor-pointer",
                activeTab === 'updated'
                  ? "bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 shadow-sm"
                  : "text-zinc-400 hover:text-white"
              )}
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Recent Updates</span>
            </button>

            <button
              onClick={() => {
                soundFx.playKeyClick();
                setActiveTab('buried');
              }}
              className={cn(
                "flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-bold transition-all cursor-pointer",
                activeTab === 'buried'
                  ? "bg-red-500/20 border border-red-500/40 text-red-300 shadow-sm"
                  : "text-zinc-400 hover:text-white"
              )}
            >
              <Skull className="w-3.5 h-3.5 text-red-400" />
              <span>Recently Buried</span>
            </button>
          </div>

          {/* Action Link */}
          <Link
            href={activeTab === 'updated' ? "/explore?sort=recent" : "/explore?status=CONFIRMED_DEAD"}
            className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 hover:text-amber-300 transition-colors shrink-0 group focus-visible:ring-2 focus-visible:ring-amber-500/60 rounded px-2 py-1"
          >
            <span>{activeTab === 'updated' ? 'Browse All Chronological Relics' : `View All ${totalDeadCount} Dead Platforms`}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Grid of Entity Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {entitiesToShow.map((entity) => (
          <GraveCard key={entity.id} entity={entity} />
        ))}
      </div>
    </section>
  );
};
