"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Newspaper, 
  Calendar, 
  ArrowRight, 
  Skull, 
  BookOpen, 
  Quote, 
  History, 
  Filter, 
  Clock, 
  Sparkles,
  Search
} from 'lucide-react';
import { CURATED_HISTORICAL_DISPATCHES, HistoricalEvent } from '@/lib/history/anniversaries';
import { cn } from '@/lib/utils';

const MONTHS = [
  'All',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export default function GazettePage() {
  const [selectedMonth, setSelectedMonth] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDispatches = useMemo(() => {
    return CURATED_HISTORICAL_DISPATCHES.filter(d => {
      const matchesMonth = selectedMonth === 'All' || d.monthName.toLowerCase() === selectedMonth.toLowerCase();
      if (!matchesMonth) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        return (
          d.headline.toLowerCase().includes(q) ||
          d.details.toLowerCase().includes(q) ||
          d.entityName.toLowerCase().includes(q) ||
          (d.quote && d.quote.toLowerCase().includes(q))
        );
      }

      return true;
    });
  }, [selectedMonth, searchQuery]);

  const leadStory = filteredDispatches[0] || CURATED_HISTORICAL_DISPATCHES[0];
  const secondaryStories = filteredDispatches.slice(1);

  return (
    <div className="min-h-screen pt-24 pb-16 sm:pt-28 sm:pb-24 font-sans text-zinc-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Newspaper Broadsheet Masthead */}
        <div className="text-center space-y-4 border-b-4 border-double border-white/20 pb-8">
          <div className="flex items-center justify-between text-[10px] sm:text-xs font-mono uppercase text-zinc-400 border-b border-white/10 pb-2 flex-wrap gap-1">
            <span>Vol. XLIV • Historical Edition</span>
            <span>The Daily Chronicle of Defunct Cyberspace</span>
            <span>Price: One Memory</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-white uppercase">
            The Sunset Dispatch
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 font-serif italic max-w-2xl mx-auto">
            "All that was uploaded shall eventually be deleted. We print the permanent record of the final editions."
          </p>

          <div className="flex items-center justify-center gap-3 sm:gap-6 text-[10px] sm:text-xs font-mono text-amber-400/90 pt-1 flex-wrap">
            <span>OFFICIAL ARCHIVE ALMANAC</span>
            <span>•</span>
            <span>ANNIVERSARIES OF SILENCE</span>
            <span>•</span>
            <span>LEGAL INQUESTS</span>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-zinc-900/80 border border-white/10">
          {/* Month Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
            {MONTHS.map((m) => (
              <button
                key={m}
                onClick={() => setSelectedMonth(m)}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer whitespace-nowrap shrink-0",
                  selectedMonth === m
                    ? "bg-amber-600 text-black font-bold shadow-sm"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                )}
              >
                {m}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-60 shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 shrink-0" />
            <input
              type="text"
              placeholder="Search historical dispatch..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 rounded-xl bg-zinc-950 border border-white/15 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        {/* Front Page Lead Story */}
        {leadStory && (
          <div className="p-6 sm:p-10 rounded-3xl bg-zinc-900/90 border-2 border-amber-500/30 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 flex-wrap gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/40 text-red-400 text-xs font-mono font-bold shrink-0">
                <Skull className="w-3.5 h-3.5 shrink-0" />
                <span>LEAD DISPATCH • {leadStory.eventType}</span>
              </div>
              <span className="text-xs font-mono text-amber-400 font-bold whitespace-nowrap">
                {leadStory.monthName} {leadStory.day}, {leadStory.year}
              </span>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl sm:text-4xl font-serif font-black text-white leading-tight">
                {leadStory.headline}
              </h2>
              <div className="text-xs font-mono text-zinc-400 uppercase">
                ENTITY UNDER AUTOPSY: <strong className="text-zinc-200">{leadStory.entityName}</strong> ({leadStory.category})
              </div>
            </div>

            <p className="text-base sm:text-lg text-zinc-200 font-serif leading-relaxed">
              {leadStory.details}
            </p>

            {leadStory.quote && (
              <div className="p-5 rounded-2xl bg-zinc-950/80 border-l-4 border-amber-500 text-sm sm:text-base font-serif italic text-amber-200/90 leading-relaxed">
                "{leadStory.quote}"
              </div>
            )}

            <div className="pt-2 flex items-center justify-between flex-wrap gap-4 border-t border-white/10">
              <span className="text-xs font-mono text-zinc-400">
                Verified Archival Dossier File #{leadStory.id}
              </span>

              <Link
                href={`/grave/${leadStory.entitySlug}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-black font-mono font-bold text-xs transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)] group shrink-0"
              >
                <span>Read Full {leadStory.entityName} Autopsy</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
            </div>
          </div>
        )}

        {/* Wire Reports & Secondary Dispatches Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 border-b border-white/10 pb-2">
            <span>ARCHIVAL WIRE RELEASES ({secondaryStories.length})</span>
            <span>CHRONOLOGICAL RECORD</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secondaryStories.map((disp) => (
              <div
                key={disp.id}
                className="p-6 rounded-2xl bg-zinc-900/80 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span className="px-2 py-0.5 rounded bg-white/10 text-zinc-300 font-bold">
                      {disp.monthName} {disp.day}, {disp.year}
                    </span>
                    <span className="text-amber-400 uppercase font-semibold">{disp.eventType}</span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                    {disp.headline}
                  </h3>

                  <p className="text-sm text-zinc-300 font-serif leading-relaxed line-clamp-3">
                    {disp.details}
                  </p>

                  {disp.quote && (
                    <div className="text-xs font-serif italic text-zinc-400 border-l-2 border-zinc-600 pl-3 py-1">
                      "{disp.quote}"
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-white/8 flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400">{disp.entityName}</span>
                  <Link
                    href={`/grave/${disp.entitySlug}`}
                    className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <span>Inspect</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredDispatches.length === 0 && (
            <div className="text-center py-16 p-8 rounded-2xl bg-zinc-900/50 border border-white/10 space-y-3">
              <History className="w-8 h-8 text-zinc-600 mx-auto" />
              <div className="text-lg font-bold text-white">No Dispatches for this Selection</div>
              <p className="text-sm text-zinc-400 font-sans">
                Try selecting "All" months or search for another keyword.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
