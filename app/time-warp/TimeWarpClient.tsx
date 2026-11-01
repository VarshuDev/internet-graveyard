"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { GraveEntity } from "@/types/graveyard";
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Calendar, 
  Skull, 
  Sparkles, 
  Activity, 
  ArrowRight, 
  ExternalLink,
  Flame,
  Globe,
  Radio,
  Sliders,
  ChevronRight,
  TrendingUp,
  TrendingDown
} from "lucide-react";
import { EntityLogo } from "@/components/EntityLogo";
import { StatusBadge } from "@/components/StatusBadge";
import { soundFx } from "@/lib/audio/soundFx";
import { cn } from "@/lib/utils";

interface TimeWarpClientProps {
  entities: GraveEntity[];
}

interface MilestoneEra {
  year: number;
  label: string;
  badge: string;
  description: string;
}

const MILESTONES: MilestoneEra[] = [
  {
    year: 1994,
    label: "Web 1.0 Genesis",
    badge: "1994",
    description: "Netscape Navigator launches, Yahoo directory founded, and the early open web blooms."
  },
  {
    year: 1999,
    label: "Dot-Com Peak",
    badge: "1999",
    description: "Speculative venture mania peaks; GeoCities reaches apex before the subsequent crash."
  },
  {
    year: 2004,
    label: "Web 2.0 & Social Dawn",
    badge: "2004",
    description: "MySpace, early Facebook, Flickr, and Digg ignite user-generated social media."
  },
  {
    year: 2012,
    label: "Mobile & Video Boom",
    badge: "2012",
    description: "Smartphones dominate; Vine, Instagram, and native apps replace desktop portals."
  },
  {
    year: 2017,
    label: "Consolidation & Casualties",
    badge: "2017",
    description: "Vine is shuttered by Twitter; Flash sunset countdown begins; indie platforms absorbed."
  },
  {
    year: 2024,
    label: "Modern Corporate Sunsets",
    badge: "2024",
    description: "Mass deprecation wave: Skiff, InVision, Mint.com, Google Jamboard, and Omegle sunset."
  }
];

export function TimeWarpClient({ entities }: TimeWarpClientProps) {
  const [currentYear, setCurrentYear] = useState<number>(2014);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(1000); // ms per year
  const [selectedTab, setSelectedTab] = useState<'died' | 'born' | 'alive'>('died');
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Pre-index entities by year
  const yearData = useMemo(() => {
    const bornInYear = entities.filter(e => e.founded_year === currentYear);
    const diedInYear = entities.filter(e => e.death_year === currentYear);
    const aliveInYear = entities.filter(e => {
      const birth = e.founded_year || 1990;
      const death = e.death_year || 2099;
      return currentYear >= birth && currentYear < death;
    });

    return {
      born: bornInYear,
      died: diedInYear,
      alive: aliveInYear,
      mostTragic: diedInYear.sort((a, b) => (b.candle_count || 0) - (a.candle_count || 0))[0] || null
    };
  }, [entities, currentYear]);

  // Handle Playback Loop
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentYear(prev => {
          if (prev >= 2026) {
            setIsPlaying(false);
            return 2026;
          }
          soundFx.playKeyClick();
          return prev + 1;
        });
      }, speed);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, speed]);

  const togglePlay = () => {
    soundFx.playKeyClick();
    if (!isPlaying && currentYear >= 2026) {
      setCurrentYear(1991);
    }
    setIsPlaying(!isPlaying);
  };

  const jumpToYear = (year: number) => {
    soundFx.playKeyClick();
    setIsPlaying(false);
    setCurrentYear(year);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-10 font-sans">
      {/* 1. HERO HEADER */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold tracking-wider uppercase">
          <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>Interactive Cyberspace Time Machine (1990 — 2026)</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-black text-white tracking-tight drop-shadow-md">
          WEB TIME WARP
        </h1>
        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
          Scrub through 36 years of internet history. Watch platforms emerge from the digital void, reach their golden age, and succumb to corporate sunsets.
        </p>
      </div>

      {/* 2. MAIN SCRUBBER CONSOLE */}
      <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border-2 border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.12)] space-y-8 font-mono">
        {/* Year Readout & Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-white/10">
          {/* Year Display */}
          <div className="flex items-center gap-5">
            <div className="p-4 rounded-2xl bg-zinc-900 border border-cyan-500/40 text-center min-w-[140px] shadow-inner">
              <span className="text-xs uppercase text-zinc-400 font-bold tracking-widest block">
                EPOCH YEAR
              </span>
              <span className="text-5xl sm:text-6xl font-black text-cyan-300 tracking-tight">
                {currentYear}
              </span>
            </div>

            <div className="space-y-1 text-xs">
              <div className="text-white font-bold text-sm">
                {currentYear < 2000 ? "The Open Dial-Up Frontier" : currentYear < 2015 ? "The Web 2.0 Golden Age" : "The Modern Algorithmic Web"}
              </div>
              <div className="text-zinc-400">
                Active in {currentYear}: <span className="text-emerald-400 font-bold">{yearData.alive.length} services</span>
              </div>
              <div className="text-zinc-400">
                Buried in {currentYear}: <span className="text-red-400 font-bold">{yearData.died.length} platforms</span>
              </div>
            </div>
          </div>

          {/* Transport Controls */}
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={togglePlay}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg",
                isPlaying
                  ? "bg-amber-500 hover:bg-amber-400 text-black shadow-amber-500/20"
                  : "bg-cyan-500 hover:bg-cyan-400 text-black shadow-cyan-500/20"
              )}
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-black" /> : <Play className="w-4 h-4 fill-black" />}
              <span>{isPlaying ? "Pause Scrubber" : "Play Timeline"}</span>
            </button>

            <button
              onClick={() => jumpToYear(1991)}
              className="p-3 rounded-2xl bg-zinc-900 hover:bg-zinc-850 border border-white/10 text-zinc-300 hover:text-white transition-colors cursor-pointer"
              title="Reset to 1991"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Speed Select */}
            <div className="flex items-center rounded-xl bg-zinc-900 border border-white/10 p-1 text-[11px]">
              {[
                { label: "1x", val: 1000 },
                { label: "2x", val: 500 },
                { label: "4x", val: 250 }
              ].map(s => (
                <button
                  key={s.label}
                  onClick={() => setSpeed(s.val)}
                  className={cn(
                    "px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer",
                    speed === s.val ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40" : "text-zinc-400 hover:text-white"
                  )}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal Slider */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span>1990 (Arpanet Decommission)</span>
            <span className="text-cyan-400 font-bold">YEAR: {currentYear}</span>
            <span>2026 (Present Day)</span>
          </div>

          <input
            type="range"
            min={1990}
            max={2026}
            value={currentYear}
            onChange={(e) => {
              soundFx.playKeyClick();
              setIsPlaying(false);
              setCurrentYear(parseInt(e.target.value, 10));
            }}
            className="w-full h-3 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none"
          />
        </div>

        {/* Milestone Quick-Jump Buttons */}
        <div className="space-y-2">
          <div className="text-[11px] uppercase tracking-wider text-zinc-400 font-bold flex items-center gap-1.5">
            <Sliders className="w-3.5 h-3.5 text-cyan-400" />
            <span>Historical Milestone Epochs:</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {MILESTONES.map((m) => (
              <button
                key={m.year}
                onClick={() => jumpToYear(m.year)}
                className={cn(
                  "p-2.5 rounded-xl border text-left transition-all cursor-pointer",
                  currentYear === m.year
                    ? "bg-cyan-950/60 border-cyan-400 text-cyan-200 shadow-md"
                    : "bg-zinc-900 border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
                )}
              >
                <div className="text-xs font-bold text-white flex items-center justify-between">
                  <span>{m.year}</span>
                  {currentYear === m.year && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />}
                </div>
                <div className="text-[10px] text-zinc-400 truncate mt-0.5">{m.label}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. YEAR SUMMARY TELEMETRY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
        <div className="p-6 rounded-2xl bg-zinc-950 border border-red-500/30 space-y-2 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase text-red-400 font-bold tracking-wider flex items-center gap-1.5">
              <Skull className="w-4 h-4" />
              <span>Buried in {currentYear}</span>
            </span>
            <span className="text-3xl font-black text-red-400 font-mono">
              {yearData.died.length}
            </span>
          </div>
          <p className="text-xs text-zinc-400 font-sans">
            Web services and communities permanently discontinued during this 12-month window.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-zinc-950 border border-emerald-500/30 space-y-2 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase text-emerald-400 font-bold tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Founded in {currentYear}</span>
            </span>
            <span className="text-3xl font-black text-emerald-400 font-mono">
              {yearData.born.length}
            </span>
          </div>
          <p className="text-xs text-zinc-400 font-sans">
            Pioneering websites and apps launched into cyberspace this year.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-zinc-950 border border-cyan-500/30 space-y-2 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase text-cyan-400 font-bold tracking-wider flex items-center gap-1.5">
              <Activity className="w-4 h-4" />
              <span>Active Population</span>
            </span>
            <span className="text-3xl font-black text-cyan-300 font-mono">
              {yearData.alive.length}
            </span>
          </div>
          <p className="text-xs text-zinc-400 font-sans">
            Indexed relics that were operational and serving traffic in {currentYear}.
          </p>
        </div>
      </div>

      {/* 4. CASUALTY OF THE YEAR (IF ANY DIED) */}
      {yearData.mostTragic && (
        <div className="p-6 sm:p-7 rounded-2xl bg-red-950/20 border-2 border-red-500/40 shadow-xl space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-400 flex items-center gap-2">
              <Flame className="w-4 h-4 text-red-500 animate-pulse" />
              <span>Major Digital Demise of {currentYear}</span>
            </span>
            <span className="text-xs font-mono text-zinc-400">
              {yearData.mostTragic.lifespan} • {yearData.mostTragic.category}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <EntityLogo entity={yearData.mostTragic} size="md" className="border border-white/20" />
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {yearData.mostTragic.name}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-sans line-clamp-2 max-w-2xl">
                  {yearData.mostTragic.cause_of_death_summary}
                </p>
              </div>
            </div>

            <Link
              href={`/grave/${yearData.mostTragic.slug}`}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-mono font-bold text-xs transition-colors shrink-0 shadow-md"
            >
              <span>Exhume Memorial</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}

      {/* 5. INTERACTIVE RELICS FILTER TABS */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4 flex-wrap gap-3">
          <div className="flex items-center gap-2 font-mono text-xs">
            <button
              onClick={() => { soundFx.playKeyClick(); setSelectedTab('died'); }}
              className={cn(
                "px-4 py-2 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-2",
                selectedTab === 'died'
                  ? "bg-red-950/60 border border-red-500/50 text-red-300"
                  : "bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white"
              )}
            >
              <Skull className="w-3.5 h-3.5" />
              <span>Buried ({yearData.died.length})</span>
            </button>

            <button
              onClick={() => { soundFx.playKeyClick(); setSelectedTab('born'); }}
              className={cn(
                "px-4 py-2 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-2",
                selectedTab === 'born'
                  ? "bg-emerald-950/60 border border-emerald-500/50 text-emerald-300"
                  : "bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white"
              )}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Born ({yearData.born.length})</span>
            </button>

            <button
              onClick={() => { soundFx.playKeyClick(); setSelectedTab('alive'); }}
              className={cn(
                "px-4 py-2 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-2",
                selectedTab === 'alive'
                  ? "bg-cyan-950/60 border border-cyan-500/50 text-cyan-300"
                  : "bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white"
              )}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Active in {currentYear} ({yearData.alive.length})</span>
            </button>
          </div>

          <span className="text-xs font-mono text-zinc-500">
            Click any headstone to inspect autopsy dossier
          </span>
        </div>

        {/* Headstone Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {(selectedTab === 'died' ? yearData.died : selectedTab === 'born' ? yearData.born : yearData.alive.slice(0, 30)).map(relic => (
            <Link
              key={relic.id}
              href={`/grave/${relic.slug}`}
              className="p-5 rounded-2xl bg-zinc-950 border border-white/10 hover:border-cyan-500/40 transition-all group flex flex-col justify-between gap-4 shadow-sm hover:shadow-cyan-500/5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <EntityLogo entity={relic} size="sm" className="border border-white/10" />
                  <span className="text-[11px] font-mono font-bold text-zinc-400 px-2 py-0.5 rounded bg-zinc-900 border border-white/5">
                    {relic.lifespan}
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {relic.name}
                  </h4>
                  <p className="text-xs text-zinc-400 font-sans line-clamp-2 mt-1">
                    {relic.tagline || relic.description}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                <span className="text-[11px] text-zinc-500 uppercase">
                  {relic.category}
                </span>
                <span className="text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Inspect</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {selectedTab === 'alive' && yearData.alive.length > 30 && (
          <div className="text-center pt-4">
            <Link
              href={`/explore?yearFrom=${currentYear}&yearTo=${currentYear}`}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-850 border border-white/15 text-white font-mono text-xs font-bold transition-colors"
            >
              <span>Explore all {yearData.alive.length} active platforms in {currentYear}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default TimeWarpClient;
