"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Scale, 
  Skull, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  TrendingDown, 
  TrendingUp, 
  ShieldAlert,
  HelpCircle,
  ExternalLink,
  Activity,
  Layers
} from 'lucide-react';
import { CURATED_RIVALRIES, RivalryItem } from '@/data/rivalries';
import { ALL_SEED_ENTITIES } from '@/data/seed-entities-batch2';
import { EntityLogo } from '@/components/EntityLogo';
import { StatusBadge } from '@/components/StatusBadge';
import { cn } from '@/lib/utils';

export default function ComparePage() {
  const [mode, setMode] = useState<'curated' | 'custom'>('curated');
  const [selectedRivalry, setSelectedRivalry] = useState<RivalryItem>(CURATED_RIVALRIES[0]);

  // Custom Comparison State
  const [customSlugA, setCustomSlugA] = useState<string>('napster');
  const [customSlugB, setCustomSlugB] = useState<string>('limewire');

  const customEntityA = ALL_SEED_ENTITIES.find(e => e.slug === customSlugA) || ALL_SEED_ENTITIES[0];
  const customEntityB = ALL_SEED_ENTITIES.find(e => e.slug === customSlugB) || ALL_SEED_ENTITIES[1];

  return (
    <div className="min-h-screen pt-24 pb-16 sm:pt-28 sm:pb-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Header Dossier */}
        <div className="relative rounded-3xl bg-zinc-900/90 border border-white/10 p-8 sm:p-12 backdrop-blur-md overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-950/60 border border-red-500/30 text-red-400 text-xs font-mono font-bold tracking-wider shrink-0">
              <Scale className="w-4 h-4 shrink-0" />
              <span>FORENSIC COMPARISON • HEAD-TO-HEAD AUTOPSY</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight drop-shadow-md">
              Why Did One Die and One Survive?
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 font-sans leading-relaxed">
              Every dead internet product left behind blueprints of what went wrong. Compare legendary rivalries side-by-side, or select any two relics from our {ALL_SEED_ENTITIES.length}+ authentic archive to audit fatal flaws and strategic decisions.
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 sm:gap-2 p-1 rounded-2xl bg-zinc-950 border border-white/10 w-full sm:w-fit overflow-x-auto scrollbar-none">
              <button
                onClick={() => setMode('curated')}
                className={cn(
                  "px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold font-sans transition-all cursor-pointer whitespace-nowrap shrink-0",
                  mode === 'curated'
                    ? "bg-red-600 text-white shadow-md"
                    : "text-zinc-400 hover:text-white"
                )}
              >
                Curated Historic Showdowns
              </button>
              <button
                onClick={() => setMode('custom')}
                className={cn(
                  "px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold font-sans transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0",
                  mode === 'custom'
                    ? "bg-red-600 text-white shadow-md"
                    : "text-zinc-400 hover:text-white"
                )}
              >
                <Layers className="w-3.5 h-3.5 shrink-0" />
                <span>Custom Dual Inquest ({ALL_SEED_ENTITIES.length} Relics)</span>
              </button>
            </div>

            {mode === 'custom' && (
              <span className="text-xs font-mono text-zinc-400">
                Cross-referencing forensic records from {ALL_SEED_ENTITIES.length} verified graves
              </span>
            )}
          </div>

          {/* Curated Quick Switcher Pills */}
          {mode === 'curated' && (
            <div className="mt-6 pt-4 border-t border-white/5 space-y-3">
              <div className="text-xs font-mono text-zinc-400 uppercase font-semibold">
                Select Curated Internet Showdown:
              </div>
              <div className="flex flex-wrap gap-2.5">
                {CURATED_RIVALRIES.map((riv) => {
                  const isSelected = selectedRivalry.id === riv.id;
                  return (
                    <button
                      key={riv.id}
                      onClick={() => setSelectedRivalry(riv)}
                      className={cn(
                        "px-4 py-2 rounded-xl text-xs sm:text-sm font-sans font-bold transition-all cursor-pointer border",
                        isSelected
                          ? "bg-red-600 border-red-500 text-white shadow-[0_0_15px_rgba(239,68,68,0.4)]"
                          : "bg-zinc-800/80 border-white/10 text-zinc-300 hover:text-white hover:bg-zinc-750"
                      )}
                    >
                      {riv.nameA} <span className="text-zinc-400 font-normal">vs</span> {riv.nameB}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Custom Relic Pickers */}
          {mode === 'custom' && (
            <div className="mt-6 pt-4 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold uppercase text-red-400 flex items-center gap-1.5">
                  <Skull className="w-3.5 h-3.5" />
                  <span>First Archival Relic:</span>
                </label>
                <select
                  value={customSlugA}
                  onChange={(e) => setCustomSlugA(e.target.value)}
                  className="w-full p-3 rounded-xl bg-zinc-800 border border-white/15 text-sm text-white focus:outline-none focus:border-red-500 cursor-pointer font-sans"
                >
                  {ALL_SEED_ENTITIES.map((ent) => (
                    <option key={`a-${ent.slug}`} value={ent.slug}>
                      {ent.name} ({ent.lifespan}) — {ent.category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold uppercase text-cyan-400 flex items-center gap-1.5">
                  <Skull className="w-3.5 h-3.5" />
                  <span>Second Archival Relic:</span>
                </label>
                <select
                  value={customSlugB}
                  onChange={(e) => setCustomSlugB(e.target.value)}
                  className="w-full p-3 rounded-xl bg-zinc-800 border border-white/15 text-sm text-white focus:outline-none focus:border-cyan-500 cursor-pointer font-sans"
                >
                  {ALL_SEED_ENTITIES.map((ent) => (
                    <option key={`b-${ent.slug}`} value={ent.slug}>
                      {ent.name} ({ent.lifespan}) — {ent.category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        {/* 1. CURATED MODE ARENA */}
        {mode === 'curated' && (
          <div className="space-y-8 animate-in fade-in">
            {/* Side by Side Dual Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* PLATFORM A: The Fallen / Deceased */}
              <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/90 border-2 border-red-500/30 space-y-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/40 text-red-400 text-xs font-mono font-bold">
                    <Skull className="w-3.5 h-3.5" />
                    <span>THE DECEASED</span>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 font-semibold">
                    Lifespan: {selectedRivalry.lifespanA}
                  </span>
                </div>

                <div>
                  <h2 className="text-3xl sm:text-4xl font-black text-white">{selectedRivalry.nameA}</h2>
                  <p className="text-sm text-zinc-300 font-sans italic mt-1">
                    "{selectedRivalry.taglineA}"
                  </p>
                </div>

                {/* Peak Scale */}
                <div className="p-4 rounded-xl bg-zinc-950 border border-white/10 space-y-1">
                  <div className="text-xs font-mono uppercase text-zinc-400 font-bold flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Peak Historical Scale:</span>
                  </div>
                  <div className="text-white text-sm sm:text-base font-semibold">
                    {selectedRivalry.peakScaleA}
                  </div>
                </div>

                {/* Fatal Flaw / Kill Factor */}
                <div className="p-5 rounded-2xl bg-red-950/30 border border-red-500/40 space-y-2">
                  <div className="text-xs font-mono uppercase font-bold text-red-400 flex items-center gap-1.5">
                    <TrendingDown className="w-4 h-4" />
                    <span>Fatal Flaw & Primary Cause of Death:</span>
                  </div>
                  <p className="text-sm sm:text-base text-zinc-100 font-sans leading-relaxed">
                    {selectedRivalry.fatalFlawA}
                  </p>
                </div>

                {/* Memorial link */}
                <div className="pt-2">
                  <Link
                    href={`/grave/${selectedRivalry.slugA}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-750 text-white text-xs font-mono font-bold transition-all border border-white/15 group"
                  >
                    <span>Open {selectedRivalry.nameA} Memorial & Autopsy</span>
                    <ArrowRight className="w-3.5 h-3.5 text-red-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* PLATFORM B: The Survivor / Successor */}
              <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/90 border-2 border-emerald-500/30 space-y-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-600/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{selectedRivalry.statusB}</span>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 font-semibold">
                    Lifespan: {selectedRivalry.lifespanB}
                  </span>
                </div>

                <div>
                  <h2 className="text-3xl sm:text-4xl font-black text-white">{selectedRivalry.nameB}</h2>
                  <p className="text-sm text-zinc-300 font-sans italic mt-1">
                    "{selectedRivalry.taglineB}"
                  </p>
                </div>

                {/* Peak Scale */}
                <div className="p-4 rounded-xl bg-zinc-950 border border-white/10 space-y-1">
                  <div className="text-xs font-mono uppercase text-zinc-400 font-bold flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Market Scale & Reach:</span>
                  </div>
                  <div className="text-white text-sm sm:text-base font-semibold">
                    {selectedRivalry.peakScaleB}
                  </div>
                </div>

                {/* Survival Factor */}
                <div className="p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 space-y-2">
                  <div className="text-xs font-mono uppercase font-bold text-emerald-400 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>Survival Factor & Strategic Advantage:</span>
                  </div>
                  <p className="text-sm sm:text-base text-zinc-100 font-sans leading-relaxed">
                    {selectedRivalry.survivalFactorB}
                  </p>
                </div>

                <div className="pt-2 text-xs font-mono text-zinc-400">
                  Industry: {selectedRivalry.category}
                </div>
              </div>

            </div>

            {/* Autopsy Post-Mortem Verdict & Lessons */}
            <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/90 border border-white/10 space-y-8 shadow-2xl">
              
              {/* The Verdict */}
              <div className="space-y-3">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Coroner's Comparative Verdict</span>
                </div>
                <p className="text-base sm:text-xl text-zinc-100 font-serif italic leading-relaxed">
                  "{selectedRivalry.postMortemVerdict}"
                </p>
              </div>

              {/* 3 Hard Lessons for Builders */}
              <div className="space-y-4 pt-6 border-t border-white/10">
                <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold">
                  Archaeological Lessons for Modern Founders & Engineers:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedRivalry.lessons.map((lesson, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-zinc-950 border border-white/10 space-y-2 font-sans"
                    >
                      <div className="text-xs font-mono text-red-400 font-bold">
                        RULE #{idx + 1}
                      </div>
                      <p className="text-sm text-zinc-300 leading-snug">
                        {lesson}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 2. CUSTOM DUAL INQUEST ARENA */}
        {mode === 'custom' && (
          <div className="space-y-8 animate-in fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* CUSTOM RELIC A */}
              <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/90 border-2 border-red-500/40 space-y-6 shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <EntityLogo entity={customEntityA} size="md" />
                    <div>
                      <div className="text-2xl sm:text-3xl font-black text-white">{customEntityA.name}</div>
                      <div className="text-xs font-mono text-zinc-400">{customEntityA.primary_domain}</div>
                    </div>
                  </div>
                  <StatusBadge status={customEntityA.status} size="sm" />
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-zinc-950 border border-white/10">
                    <span className="text-zinc-400 uppercase block">Operating Era:</span>
                    <span className="text-white font-bold text-sm">{customEntityA.lifespan}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-950 border border-white/10">
                    <span className="text-zinc-400 uppercase block">Category:</span>
                    <span className="text-red-400 font-bold text-sm">{customEntityA.category}</span>
                  </div>
                </div>

                {/* Peak Scale */}
                <div className="p-4 rounded-xl bg-zinc-950 border border-white/10 space-y-1">
                  <div className="text-xs font-mono uppercase text-zinc-400 font-bold">Peak Scale:</div>
                  <div className="text-white text-sm font-semibold">{customEntityA.popularity_peak || customEntityA.peak_users || 'Multi-million scale'}</div>
                </div>

                {/* Primary Cause of Death */}
                <div className="p-5 rounded-2xl bg-red-950/30 border border-red-500/30 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-red-400 font-bold uppercase">Kill Factor:</span>
                    <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-300 font-bold text-xs">{customEntityA.cause_category}</span>
                  </div>
                  <p className="text-sm text-zinc-100 font-sans leading-relaxed">
                    {customEntityA.cause_of_death_summary}
                  </p>
                </div>

                {/* Last Known State */}
                <div className="p-4 rounded-xl bg-zinc-950 border border-white/10 space-y-2 text-xs">
                  <div className="font-mono uppercase text-zinc-400 font-bold">Last Known Forensic State:</div>
                  <div className="text-zinc-300 font-sans">{customEntityA.last_known_state.website.state_desc}</div>
                </div>

                <Link
                  href={`/grave/${customEntityA.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-mono font-bold transition-all"
                >
                  <span>Open Full {customEntityA.name} Memorial</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* CUSTOM RELIC B */}
              <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/90 border-2 border-cyan-500/40 space-y-6 shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <EntityLogo entity={customEntityB} size="md" />
                    <div>
                      <div className="text-2xl sm:text-3xl font-black text-white">{customEntityB.name}</div>
                      <div className="text-xs font-mono text-zinc-400">{customEntityB.primary_domain}</div>
                    </div>
                  </div>
                  <StatusBadge status={customEntityB.status} size="sm" />
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-zinc-950 border border-white/10">
                    <span className="text-zinc-400 uppercase block">Operating Era:</span>
                    <span className="text-white font-bold text-sm">{customEntityB.lifespan}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-950 border border-white/10">
                    <span className="text-zinc-400 uppercase block">Category:</span>
                    <span className="text-cyan-400 font-bold text-sm">{customEntityB.category}</span>
                  </div>
                </div>

                {/* Peak Scale */}
                <div className="p-4 rounded-xl bg-zinc-950 border border-white/10 space-y-1">
                  <div className="text-xs font-mono uppercase text-zinc-400 font-bold">Peak Scale:</div>
                  <div className="text-white text-sm font-semibold">{customEntityB.popularity_peak || customEntityB.peak_users || 'Multi-million scale'}</div>
                </div>

                {/* Primary Cause of Death */}
                <div className="p-5 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-cyan-400 font-bold uppercase">Kill Factor:</span>
                    <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold text-xs">{customEntityB.cause_category}</span>
                  </div>
                  <p className="text-sm text-zinc-100 font-sans leading-relaxed">
                    {customEntityB.cause_of_death_summary}
                  </p>
                </div>

                {/* Last Known State */}
                <div className="p-4 rounded-xl bg-zinc-950 border border-white/10 space-y-2 text-xs">
                  <div className="font-mono uppercase text-zinc-400 font-bold">Last Known Forensic State:</div>
                  <div className="text-zinc-300 font-sans">{customEntityB.last_known_state.website.state_desc}</div>
                </div>

                <Link
                  href={`/grave/${customEntityB.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-mono font-bold transition-all"
                >
                  <span>Open Full {customEntityB.name} Memorial</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
