"use client";

import React, { useState, useEffect } from 'react';
import { SunsetEvent, getAllSunsets } from '@/lib/history/sunsetSchedule';
import { downloadSunsetCalendarInvite } from '@/lib/export/calendarExporter';
import { GardenButton } from '@/components/GardenButton';
import { soundFx } from '@/lib/audio/soundFx';
import { 
  Clock, 
  Calendar, 
  AlertTriangle, 
  Download, 
  ExternalLink, 
  Skull, 
  ShieldAlert, 
  Sparkles,
  ArrowRight,
  Flame,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

function calculateTimeRemaining(targetDateIso: string): TimeRemaining {
  const target = new Date(targetDateIso).getTime();
  const now = new Date().getTime();
  const diff = target - now;

  if (diff <= 0) {
    const elapsed = Math.abs(diff);
    return {
      days: Math.floor(elapsed / (1000 * 60 * 60 * 24)),
      hours: Math.floor((elapsed / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((elapsed / 1000 / 60) % 60),
      seconds: Math.floor((elapsed / 1000) % 60),
      isPast: true
    };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isPast: false
  };
}

export const SunsetCountdown: React.FC = () => {
  const allEvents = getAllSunsets();
  const [selectedEventId, setSelectedEventId] = useState<string>(allEvents[0]?.id || '');
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false
  });
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const selectedEvent = allEvents.find(e => e.id === selectedEventId) || allEvents[0];

  useEffect(() => {
    if (!selectedEvent) return;

    setTimeRemaining(calculateTimeRemaining(selectedEvent.targetSunsetDate));

    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(selectedEvent.targetSunsetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [selectedEvent]);

  const handleDownloadCalendar = () => {
    if (!selectedEvent) return;
    soundFx.playChime(660);
    downloadSunsetCalendarInvite(selectedEvent);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  if (!selectedEvent) return null;

  return (
    <div className="w-full rounded-2xl bg-zinc-950/90 border border-amber-500/40 p-5 sm:p-8 backdrop-blur-xl shadow-[0_0_35px_rgba(245,158,11,0.12)] space-y-6">
      {/* Top Header & Ticker Status */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping inline-block" />
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
              Active Sunset Countdown Chamber
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-white tracking-tight">
            Live Execution Deathwatch
          </h2>
        </div>

        {/* Quick Tabs to switch between deathwatch targets */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {allEvents.map((evt) => {
            const isSelected = evt.id === selectedEvent.id;
            return (
              <button
                key={evt.id}
                onClick={() => {
                  soundFx.playClick(750);
                  setSelectedEventId(evt.id);
                }}
                className={cn(
                  "px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer border select-none",
                  isSelected
                    ? "bg-amber-500/25 border-amber-500/60 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.3)]"
                    : "bg-zinc-900/80 border-white/10 text-zinc-400 hover:text-white hover:bg-zinc-850"
                )}
              >
                {evt.name.split(' ')[0]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Focus Dossier & Countdown Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left: Metadata & Context (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold px-2 py-0.5 rounded bg-zinc-900 border border-white/10">
                {selectedEvent.category}
              </span>
              <span className={cn(
                "text-[11px] font-mono uppercase font-bold px-2 py-0.5 rounded border",
                selectedEvent.status === 'SCHEDULED_DEATH' && "bg-red-950/60 text-red-300 border-red-500/40",
                selectedEvent.status === 'TERMINAL_PHASE' && "bg-amber-950/60 text-amber-300 border-amber-500/40",
                selectedEvent.status === 'RECENTLY_EXTINCT' && "bg-purple-950/60 text-purple-300 border-purple-500/40"
              )}>
                {selectedEvent.status.replace('_', ' ')}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white tracking-tight">
              {selectedEvent.name}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
              {selectedEvent.rationale}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-white/10 text-xs font-mono space-y-1.5">
            <div className="flex justify-between items-center text-zinc-400">
              <span>Target Terminal Date:</span>
              <span className="text-white font-bold">{new Date(selectedEvent.targetSunsetDate).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex justify-between items-center text-zinc-400">
              <span>Severance Stage:</span>
              <span className="text-amber-300 font-semibold truncate max-w-[60%]">{selectedEvent.severanceStage}</span>
            </div>
            {selectedEvent.replacementRecommendation && (
              <div className="flex justify-between items-center text-zinc-400">
                <span>Successor Path:</span>
                <span className="text-emerald-400 font-semibold truncate max-w-[60%]">{selectedEvent.replacementRecommendation}</span>
              </div>
            )}
          </div>
        </div>

        {/* Right: The High-Resolution Ticker Digits & Actions (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center space-y-6">
          <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-bold">
            {timeRemaining.isPast ? "TIME ELAPSED SINCE RECORDED TERMINATION" : "COUNTDOWN TO FINAL INFRASTRUCTURE DISCONNECT"}
          </div>

          {/* 4-Block Ticker Card */}
          <div className="grid grid-cols-4 gap-2 sm:gap-4 w-full">
            {[
              { label: 'DAYS', value: timeRemaining.days },
              { label: 'HOURS', value: timeRemaining.hours },
              { label: 'MINUTES', value: timeRemaining.minutes },
              { label: 'SECONDS', value: timeRemaining.seconds }
            ].map((unit, idx) => (
              <div
                key={unit.label}
                className={cn(
                  "flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl border transition-all text-center relative overflow-hidden backdrop-blur-md",
                  timeRemaining.isPast 
                    ? "bg-purple-950/40 border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.15)]"
                    : "bg-zinc-900/90 border-amber-500/40 shadow-[0_0_20px_rgba(245,158,11,0.15)]"
                )}
              >
                <div className="text-2xl sm:text-4xl md:text-5xl font-mono font-black tabular-nums tracking-tight text-white drop-shadow-md">
                  {unit.value < 10 ? `0${unit.value}` : unit.value}
                </div>
                <div className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase mt-1">
                  {unit.label}
                </div>
                {/* Subtle digital circuit accent */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-amber-500/5 rounded-bl-full pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 w-full">
            <button
              onClick={handleDownloadCalendar}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all shadow-md cursor-pointer",
                downloadSuccess
                  ? "bg-emerald-950/80 border border-emerald-500/60 text-emerald-300"
                  : "bg-amber-950/60 hover:bg-amber-900/80 border border-amber-500/50 text-amber-300 hover:text-white shadow-[0_0_15px_rgba(245,158,11,0.2)]"
              )}
              title="Download standard RFC-5545 calendar invite for funeral vigil (.ics)"
            >
              {downloadSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Vigil Added (.ics downloaded)</span>
                </>
              ) : (
                <>
                  <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Add Funeral Vigil to Calendar (.ics)</span>
                </>
              )}
            </button>

            {selectedEvent.slug && (
              <GardenButton
                slug={selectedEvent.slug}
                entityName={selectedEvent.name}
                size="md"
                showLabel={true}
                className="rounded-xl px-4 py-2.5"
              />
            )}

            {selectedEvent.officialAnnouncementUrl && (
              <a
                href={selectedEvent.officialAnnouncementUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick(800)}
                className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-850 border border-white/10 text-zinc-300 hover:text-white font-mono text-xs transition-colors shrink-0"
              >
                <span>Official Notice</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
