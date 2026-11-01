"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { ALL_SEED_ENTITIES } from '@/data/seed-entities-batch2';
import { GraveEntity } from '@/types/graveyard';
import { EntityLogo } from './EntityLogo';
import { StatusBadge } from './StatusBadge';
import { soundFx } from '@/lib/audio/soundFx';
import { 
  Search, 
  Terminal, 
  X, 
  ArrowRight, 
  Flame, 
  Clock, 
  Layers, 
  Sparkles,
  CornerDownLeft,
  Skull,
  Activity
} from 'lucide-react';
import { cn } from '@/lib/utils';

export const CommandPalette: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<'ALL' | 'CONFIRMED_DEAD' | 'ACTIVE' | 'AT_RISK' | 'ZOMBIE'>('ALL');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Global Keyboard listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => {
      setIsOpen(true);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open-command-palette', handleCustomOpen);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-command-palette', handleCustomOpen);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      soundFx.playClick(950);
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Filter entities
  const filteredResults = useMemo(() => {
    const q = query.toLowerCase().trim();
    let results = ALL_SEED_ENTITIES;

    if (selectedStatus !== 'ALL') {
      results = results.filter((e) => e.status.toUpperCase() === selectedStatus);
    }

    if (!q) {
      // Default to curated popular graves
      return results.slice(0, 10);
    }

    return results
      .filter((e) => {
        return (
          e.name.toLowerCase().includes(q) ||
          e.slug.toLowerCase().includes(q) ||
          e.primary_domain.toLowerCase().includes(q) ||
          e.category.toLowerCase().includes(q) ||
          e.cause_category.toLowerCase().includes(q) ||
          e.cause_of_death_summary.toLowerCase().includes(q)
        );
      })
      .slice(0, 12);
  }, [query, selectedStatus]);

  // Handle arrow key navigation
  const handleKeyNav = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < filteredResults.length - 1 ? prev + 1 : 0));
      soundFx.playClick(600);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredResults.length - 1));
      soundFx.playClick(650);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const target = filteredResults[selectedIndex];
      if (target) {
        soundFx.playTelemetry();
        setIsOpen(false);
        router.push(`/grave/${target.slug}`);
      }
    }
  };

  const handleSelect = (entity: GraveEntity) => {
    soundFx.playTelemetry();
    setIsOpen(false);
    router.push(`/grave/${entity.slug}`);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={() => setIsOpen(false)}
    >
      <div 
        className="w-full max-w-2xl bg-zinc-950 border-2 border-white/20 rounded-xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_30px_rgba(34,197,94,0.15)] overflow-hidden flex flex-col font-mono text-zinc-200"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyNav}
      >
        {/* Retro Netscape / Win95 Titlebar */}
        <div className="bg-gradient-to-r from-zinc-900 via-zinc-850 to-zinc-900 px-3 py-2 border-b border-white/15 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold tracking-wider text-emerald-400">
              ARCHIVAL_TERMINAL // COMMAND_PALETTE.EXE
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px]">
            <span className="px-1.5 py-0.5 rounded bg-zinc-800 border border-white/10 text-zinc-400">ESC to exit</span>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-5 h-5 flex items-center justify-center rounded bg-zinc-800 hover:bg-red-900 text-zinc-300 hover:text-white transition-colors border border-white/10"
              aria-label="Close"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Search Input Bar with CRT prompt */}
        <div className="p-3 bg-zinc-900/90 border-b border-white/10 flex items-center gap-3">
          <span className="text-emerald-400 font-black text-sm shrink-0">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type platform name, era, URL, or cause of death..."
            aria-label="Search relics in command palette"
            className="w-full bg-transparent text-white placeholder-zinc-500 text-sm font-mono focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-zinc-400 hover:text-white px-1.5 py-0.5 rounded bg-zinc-800"
            >
              Clear
            </button>
          )}
        </div>

        {/* Quick Filter Badges */}
        <div className="px-3 py-2 bg-zinc-950 border-b border-white/8 flex items-center gap-1.5 overflow-x-auto text-[11px] font-sans scrollbar-none">
          <span className="text-zinc-500 font-mono text-[10px] uppercase shrink-0 mr-1">Filter:</span>
          {[
            { id: 'ALL', label: 'All (1,027)' },
            { id: 'CONFIRMED_DEAD', label: 'Dead (547)', color: 'text-red-400' },
            { id: 'ACTIVE', label: 'Active (434)', color: 'text-emerald-400' },
            { id: 'AT_RISK', label: 'At-Risk (10)', color: 'text-amber-400' },
            { id: 'ZOMBIE', label: 'Zombies (36)', color: 'text-purple-400' },
          ].map((pill) => (
            <button
              key={pill.id}
              onClick={() => {
                setSelectedStatus(pill.id as any);
                setSelectedIndex(0);
                soundFx.playClick(750);
              }}
              className={cn(
                "px-2.5 py-1 rounded-md border text-xs font-mono transition-all whitespace-nowrap",
                selectedStatus === pill.id
                  ? "bg-white/15 border-white/40 text-white font-bold shadow-sm"
                  : "bg-zinc-900/60 border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
              )}
            >
              {pill.label}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div ref={listRef} className="max-h-[360px] overflow-y-auto divide-y divide-white/5 p-1 bg-zinc-950/95 font-sans">
          {filteredResults.length === 0 ? (
            <div className="py-12 text-center text-zinc-500 space-y-2 font-mono">
              <Skull className="w-8 h-8 mx-auto text-zinc-600" />
              <div className="text-sm">NO RECORD DISCOVERED FOR "{query}"</div>
              <div className="text-xs text-zinc-600">Try searching "Vine", "Flash", "Search", or "2010"</div>
            </div>
          ) : (
            filteredResults.map((entity, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={entity.id}
                  onClick={() => handleSelect(entity)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={cn(
                    "flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors group",
                    isSelected
                      ? "bg-white/10 text-white"
                      : "hover:bg-white/5 text-zinc-300"
                  )}
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                    <EntityLogo entity={entity} size="sm" className="shrink-0" />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                        <span className="font-bold text-sm tracking-tight text-white group-hover:text-red-400 truncate">
                          {entity.name}
                        </span>
                        <span className="text-[11px] font-mono text-zinc-400 whitespace-nowrap">
                          ({entity.lifespan})
                        </span>
                        <div className="shrink-0">
                          <StatusBadge status={entity.status} size="sm" />
                        </div>
                      </div>
                      <p className="text-xs text-zinc-400 truncate font-sans mt-0.5 max-w-md">
                        {entity.tagline || entity.cause_of_death_summary}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 pl-3">
                    <span className="hidden sm:inline-block text-[11px] font-mono text-zinc-400 uppercase">
                      {entity.category}
                    </span>
                    <div className={cn(
                      "p-1.5 rounded border border-white/10 transition-opacity",
                      isSelected ? "opacity-100 text-white bg-white/10" : "opacity-0"
                    )}>
                      <CornerDownLeft className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Navigation Bar */}
        <div className="px-3 py-2 bg-zinc-900 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <div className="text-emerald-400 font-semibold">
            1,027 VERIFIED RECORDS INDEXED
          </div>
        </div>
      </div>
    </div>
  );
};
