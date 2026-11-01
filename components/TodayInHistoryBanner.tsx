"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Newspaper, Calendar, ArrowRight, Skull, History, Sparkles } from 'lucide-react';
import { getDispatchesForDate, HistoricalEvent } from '@/lib/history/anniversaries';
import { cn } from '@/lib/utils';

export const TodayInHistoryBanner: React.FC = () => {
  const [dispatch, setDispatch] = useState<HistoricalEvent | null>(null);

  useEffect(() => {
    const { todayDispatch } = getDispatchesForDate(new Date());
    setDispatch(todayDispatch);
  }, []);

  if (!dispatch) return null;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 my-6">
      <div className="relative rounded-2xl bg-zinc-900/90 border border-amber-500/30 p-5 sm:p-6 shadow-[0_0_30px_rgba(245,158,11,0.08)] overflow-hidden font-sans">
        {/* Subtle Newspaper Masthead Texture */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3 flex-wrap gap-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
            <Newspaper className="w-4 h-4 shrink-0" />
            <span>The Sunset Dispatch • Today in Defunct Web History</span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
              <span>{dispatch.monthName} {dispatch.day}, {dispatch.year}</span>
            </span>
            <span className="text-zinc-600">•</span>
            <Link
              href="/gazette"
              className="text-amber-400 hover:text-amber-300 transition-colors font-bold underline decoration-amber-400/30"
            >
              Read Gazette
            </Link>
          </div>
        </div>

        {/* Content Body */}
        <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono flex-wrap">
              <span className="px-2 py-0.5 rounded bg-red-950/60 border border-red-500/40 text-red-400 font-bold shrink-0">
                {dispatch.eventType}
              </span>
              <span className="text-zinc-400">•</span>
              <span className="text-zinc-300 font-bold">{dispatch.entityName}</span>
              <span className="text-zinc-500">({dispatch.category})</span>
            </div>

            <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
              {dispatch.headline}
            </h4>

            <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed line-clamp-2">
              {dispatch.details}
            </p>
          </div>

          {/* Action Link */}
          <div className="shrink-0 flex items-center gap-3 w-full sm:w-auto">
            <Link
              href={`/grave/${dispatch.entitySlug}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-600/20 hover:bg-amber-600/30 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold transition-all shadow-md group shrink-0"
            >
              <span>Inspect {dispatch.entityName}</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-1 transition-transform shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
