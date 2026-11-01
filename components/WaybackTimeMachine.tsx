"use client";

import React, { useState } from 'react';
import { ArchiveSnapshot, GraveEntity } from '@/types/graveyard';
import { 
  Archive, 
  ExternalLink, 
  Calendar, 
  Clock, 
  Globe, 
  Layers, 
  ArrowUpRight, 
  History, 
  Maximize2,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Check,
  Monitor,
  Layout,
  RefreshCw,
  AlertCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { RetroBrowserFrame } from '@/components/RetroBrowserFrame';
import { soundFx } from '@/lib/audio/soundFx';

interface WaybackTimeMachineProps {
  entity: GraveEntity;
}

export const WaybackTimeMachine: React.FC<WaybackTimeMachineProps> = ({ entity }) => {
  const domain = entity.primary_domain;
  const birthYear = entity.founded_year || 2000;
  const deathYear = entity.death_year || 2020;
  const peakYear = Math.round(birthYear + (deathYear - birthYear) * 0.6);

  const defaultSnapshots: ArchiveSnapshot[] = (entity.archives && entity.archives.length > 0)
    ? entity.archives
    : [
        {
          id: 'snap-1',
          entity_id: entity.id,
          year: birthYear,
          date_captured: `${birthYear}-06-15`,
          title: `${entity.name} Genesis & Launch Era`,
          wayback_url: `https://web.archive.org/web/${birthYear}0615000000*/http://${domain}`
        },
        {
          id: 'snap-2',
          entity_id: entity.id,
          year: peakYear,
          date_captured: `${peakYear}-10-20`,
          title: `${entity.name} Peak Golden Age`,
          wayback_url: `https://web.archive.org/web/${peakYear}1020000000*/http://${domain}`
        },
        {
          id: 'snap-3',
          entity_id: entity.id,
          year: deathYear,
          date_captured: `${deathYear}-12-31`,
          title: `${entity.name} Final Moments & Sunset 404`,
          wayback_url: `https://web.archive.org/web/${deathYear}1231000000*/http://${domain}`
        }
      ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'card' | 'live'>('card');
  const [iframeLoading, setIframeLoading] = useState(true);
  const currentSnap = defaultSnapshots[activeIndex] || defaultSnapshots[0];

  const handleSelectSnapshot = (idx: number) => {
    soundFx.playKeyClick();
    setActiveIndex(idx);
    setIframeLoading(true);
  };

  return (
    <section className="p-6 sm:p-7 rounded-2xl bg-zinc-900/90 border border-white/10 space-y-5 font-sans shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
          <History className="w-4 h-4" />
          <span>Wayback Time Capsule • Vintage Browser Emulation</span>
        </div>

        {/* View Mode Toggle: Overview Card vs Live Emulation Frame */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-950 border border-white/10 text-xs font-mono">
          <button
            type="button"
            onClick={() => {
              soundFx.playKeyClick();
              setViewMode('card');
            }}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer font-bold",
              viewMode === 'card'
                ? "bg-amber-500/20 border border-amber-500/40 text-amber-300 shadow-sm"
                : "text-zinc-400 hover:text-white"
            )}
          >
            <Layout className="w-3.5 h-3.5" />
            <span>Dossier View</span>
          </button>

          <button
            type="button"
            onClick={() => {
              soundFx.playKeyClick();
              setViewMode('live');
              setIframeLoading(true);
            }}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer font-bold",
              viewMode === 'live'
                ? "bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 shadow-sm"
                : "text-zinc-400 hover:text-white"
            )}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Live Web Archive</span>
          </button>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
        Step back in time to inspect historical captures preserved by the Internet Archive across <strong className="text-white">{entity.name}</strong>’s lifecycle, framed inside authentic vintage browser chrome.
      </p>

      {/* Era Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {defaultSnapshots.map((snap, idx) => {
          const isSelected = activeIndex === idx;
          return (
            <button
              key={snap.id || idx}
              onClick={() => handleSelectSnapshot(idx)}
              className={cn(
                "flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all cursor-pointer border",
                isSelected
                  ? "bg-amber-950/60 border-amber-500/50 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.15)]"
                  : "bg-zinc-950 border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
              )}
            >
              <Calendar className="w-3.5 h-3.5 text-zinc-400" />
              <span>{snap.year}</span>
              <span className="text-zinc-500 font-normal">|</span>
              <span className="max-w-[140px] truncate">{snap.title}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Retro Browser Viewport Chassis */}
      <RetroBrowserFrame
        url={`https://web.archive.org/web/${currentSnap.year}0101.../${domain}`}
        title={`${entity.name} - ${currentSnap.title}`}
        year={currentSnap.year}
        canPrev={activeIndex > 0}
        canNext={activeIndex < defaultSnapshots.length - 1}
        onNavigatePrev={() => handleSelectSnapshot(Math.max(0, activeIndex - 1))}
        onNavigateNext={() => handleSelectSnapshot(Math.min(defaultSnapshots.length - 1, activeIndex + 1))}
      >
        {viewMode === 'live' ? (
          /* Live Archival Emulation Viewport */
          <div className="relative w-full h-[450px] sm:h-[520px] bg-black">
            {iframeLoading && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-zinc-950/95 space-y-4 font-mono text-center p-6">
                <RefreshCw className="w-8 h-8 text-amber-400 animate-spin" />
                <div className="text-xs sm:text-sm text-amber-300 font-bold">
                  [DIALING INTERNET ARCHIVE • 56K V.90 MODEM]
                </div>
                <div className="text-xs text-zinc-400 max-w-md">
                  Fetching archived capture for <span className="text-emerald-400">{domain}</span> from epoch {currentSnap.year}...
                </div>
                <div className="w-48 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-amber-400 animate-pulse" />
                </div>
              </div>
            )}

            <iframe
              src={currentSnap.wayback_url.replace('/web/', '/web/2/')}
              title={`Archive capture for ${entity.name} (${currentSnap.year})`}
              className="w-full h-full border-0 bg-white"
              sandbox="allow-scripts allow-same-origin allow-popups"
              onLoad={() => setIframeLoading(false)}
            />

            {/* Floating External Launcher if Archive blocks iframe embedding */}
            <div className="absolute bottom-3 right-3 z-20 flex items-center gap-2">
              <a
                href={currentSnap.wayback_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/90 hover:bg-black border border-white/20 text-xs font-mono font-bold text-amber-300 transition-all shadow-lg hover:border-amber-400"
              >
                <span>Open in Tab</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ) : (
          /* Snapshot Viewport Card */
          <div className="p-5 sm:p-7 space-y-4 bg-gradient-to-b from-zinc-950 via-zinc-900/80 to-zinc-950 text-zinc-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="text-xs font-mono uppercase text-amber-400 font-bold flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Captured: {currentSnap.date_captured} ({currentSnap.year})</span>
                </div>
                <h4 className="text-xl font-bold text-white tracking-tight">
                  {currentSnap.title}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed max-w-xl">
                  Archival state preserved verbatim by the Wayback Machine crawler for domain <strong className="text-amber-300 font-mono">{domain}</strong>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    soundFx.playKeyClick();
                    setViewMode('live');
                    setIframeLoading(true);
                  }}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-mono font-bold text-xs transition-all border border-white/10 shrink-0 cursor-pointer"
                >
                  <Monitor className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Emulate Inside Frame</span>
                </button>

                <a
                  href={currentSnap.wayback_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-mono font-bold text-xs transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] shrink-0 cursor-pointer"
                >
                  <span>Launch Snapshot</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Year Slider indicator */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>Snapshot #{activeIndex + 1} of {defaultSnapshots.length}</span>
              <a
                href={`https://web.archive.org/web/*/${domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline flex items-center gap-1"
              >
                <span>View full calendar timeline ({entity.lifespan})</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </RetroBrowserFrame>
    </section>
  );
};
