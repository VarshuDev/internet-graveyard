"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { GraveEntity } from '@/types/graveyard';
import { StatusBadge } from './StatusBadge';
import { EntityLogo } from './EntityLogo';
import { ArrowRight, Flame, Archive, Eye, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { soundFx } from '@/lib/audio/soundFx';

interface GraveCardProps {
  entity: GraveEntity;
  className?: string;
  onQuickInspect?: (entity: GraveEntity) => void;
}

export const GraveCard: React.FC<GraveCardProps> = ({ 
  entity, 
  className,
  onQuickInspect
}) => {
  const [candles, setCandles] = useState<number>(entity.candle_count || 1);
  const [litRecently, setLitRecently] = useState<boolean>(false);

  const handleLightCandle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    soundFx.playCandle();
    setCandles((prev) => prev + 1);
    setLitRecently(true);
    setTimeout(() => setLitRecently(false), 2000);

    // Persist via API in background
    fetch(`/api/entities/${entity.slug}/candle`, { method: 'POST' }).catch(() => {});
  };

  const isDead = entity.status === 'CONFIRMED_DEAD' || entity.status === 'OFFLINE' || entity.status === 'ABANDONED';
  const isActive = entity.status === 'ACTIVE';
  const isAtRisk = entity.status === 'AT_RISK';
  const isZombie = entity.status === 'ZOMBIE';

  return (
    <div
      className={cn(
        'group relative flex flex-col justify-between h-full rounded-2xl bg-zinc-950/80 border transition-all duration-200 overflow-hidden font-sans shadow-lg hover:-translate-y-1 backdrop-blur-xl',
        isDead && 'border-white/[0.08] hover:border-red-500/50 hover:shadow-[0_16px_36px_rgba(239,68,68,0.14)]',
        isActive && 'border-emerald-500/25 hover:border-emerald-500/60 hover:shadow-[0_16px_36px_rgba(16,185,129,0.14)]',
        isAtRisk && 'border-amber-500/25 hover:border-amber-500/60 hover:shadow-[0_16px_36px_rgba(245,158,11,0.14)]',
        isZombie && 'border-purple-500/25 hover:border-purple-500/60 hover:shadow-[0_16px_36px_rgba(168,85,247,0.14)]',
        className
      )}
    >
      {/* Top Chrome Bezel */}
      <div className="bg-zinc-900/80 px-3.5 sm:px-4 py-2 border-b border-white/[0.06] flex items-center justify-between gap-2 text-[11px] font-mono">
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <span 
            className={cn(
              "w-2 h-2 rounded-full shrink-0",
              isDead && "bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.8)]",
              isActive && "bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)] animate-pulse",
              isAtRisk && "bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.8)] animate-ping",
              isZombie && "bg-purple-400 shadow-[0_0_6px_rgba(192,132,252,0.8)]"
            )} 
          />
          <span className="uppercase tracking-wider text-zinc-400 font-semibold truncate text-[10px]">
            {entity.category}
          </span>
        </div>
        <div className="shrink-0">
          <StatusBadge status={entity.status} size="sm" />
        </div>
      </div>

      {/* Main card body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3.5">
        <div className="space-y-2.5">
          {/* Identity: Authentic Logo + Full Name + Lifespan */}
          <div className="flex items-center gap-3 pt-0.5">
            <div className="relative group/logo shrink-0">
              <EntityLogo entity={entity} size="md" className="border border-white/10 shrink-0 rounded-xl group-hover/logo:border-white/30 transition-colors" />
            </div>
            <div className="min-w-0 flex-1">
              <Link 
                href={`/grave/${entity.slug}`} 
                onClick={() => soundFx.playClick(850)}
                className="hover:underline block focus-visible:ring-2 focus-visible:ring-amber-500/60 rounded"
              >
                <h3 
                  className={cn(
                    "text-base sm:text-lg font-bold tracking-tight text-white transition-colors truncate font-serif",
                    isDead && "group-hover:text-red-400",
                    isActive && "group-hover:text-emerald-400",
                    isAtRisk && "group-hover:text-amber-400",
                    isZombie && "group-hover:text-purple-400"
                  )}
                  title={entity.name}
                >
                  {entity.name}
                </h3>
              </Link>
              <div className="text-[11px] font-mono text-zinc-400 mt-0.5 tabular-nums">
                {entity.lifespan}
              </div>
            </div>
          </div>

          {/* Tagline / Description */}
          <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed font-sans min-h-[34px]">
            {entity.tagline || entity.description}
          </p>
        </div>

        {/* Demise & Status information */}
        <div className="pt-2.5 border-t border-white/[0.06] space-y-1.5 text-xs font-sans mt-auto">
          <div className="flex items-center justify-between">
            <span className="uppercase text-[10px] font-mono text-zinc-500 font-bold tracking-wider shrink-0">
              {isActive ? 'STATUS:' : 'DEMISE:'}
            </span>
            <span className="text-zinc-300 font-medium truncate max-w-[68%] text-right text-xs" title={isActive ? 'Active Production' : entity.cause_category}>
              {isActive ? 'Live Production' : entity.cause_category}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="uppercase text-[10px] font-mono text-zinc-500 font-bold tracking-wider shrink-0">
              {isActive ? 'MONITORED:' : 'BURIED:'}
            </span>
            <span className={cn("font-mono text-xs tabular-nums", isActive ? "text-emerald-400 font-semibold" : "text-zinc-400")}>
              {isActive 
                ? 'Active Registry' 
                : (entity.death_date || (entity.death_year ? `${entity.death_year}` : 'Defunct'))}
            </span>
          </div>
        </div>
      </div>

      {/* Footer action bar */}
      <div className="px-3.5 sm:px-4 py-2.5 bg-zinc-900/90 border-t border-white/[0.06] flex items-center justify-between text-xs font-sans mt-auto gap-2">
        {/* Interactive Candle Light Action Button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={handleLightCandle}
            title="Light a memorial candle"
            aria-label={`Light candle for ${entity.name}. Currently ${candles} candles`}
            className={cn(
              "flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all shrink-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-500/60",
              litRecently 
                ? "bg-amber-500/30 text-amber-300 scale-105 shadow-[0_0_12px_rgba(245,158,11,0.4)]" 
                : "text-amber-400/90 hover:text-amber-300 hover:bg-amber-950/40"
            )}
          >
            <Flame className={cn("w-3.5 h-3.5 shrink-0 transition-transform", litRecently && "animate-bounce text-amber-300")} />
            <span className="tabular-nums">{candles}</span>
          </button>

          {/* Quick Inspect Dossier Button */}
          {onQuickInspect && (
            <button
              onClick={(e) => {
                e.preventDefault();
                soundFx.playClick(750);
                onQuickInspect(entity);
              }}
              title="Quick inspect autopsy dossier"
              aria-label={`Quick inspect autopsy dossier for ${entity.name}`}
              className="text-zinc-400 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors shrink-0 flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-500/60"
            >
              <Eye className="w-3.5 h-3.5 shrink-0" />
            </button>
          )}
        </div>

        {/* View Memorial Link */}
        <Link
          href={`/grave/${entity.slug}`}
          onClick={() => soundFx.playClick(850)}
          className={cn(
            "flex items-center gap-1 font-bold group/btn transition-colors shrink-0 text-xs focus-visible:ring-2 focus-visible:ring-amber-500/60 rounded px-1",
            isActive ? "text-emerald-400 hover:text-emerald-300" : "text-red-400 hover:text-red-300"
          )}
        >
          <span>{isActive ? 'Inspect' : 'Memorial'}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform shrink-0" />
        </Link>
      </div>
    </div>
  );
};
