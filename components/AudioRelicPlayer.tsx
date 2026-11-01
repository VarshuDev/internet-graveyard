"use client";

import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Play, Square, Disc, Sparkles } from 'lucide-react';
import { AudioRelic, relicAudio, SOUND_RELICS } from '@/lib/audio/soundArchive';
import { cn } from '@/lib/utils';

interface AudioRelicPlayerProps {
  relicId?: string;
  entitySlug?: string;
  compact?: boolean;
  className?: string;
}

export const AudioRelicPlayer: React.FC<AudioRelicPlayerProps> = ({
  relicId,
  entitySlug,
  compact = false,
  className
}) => {
  const [playing, setPlaying] = useState(false);
  const [activeRelic, setActiveRelic] = useState<AudioRelic | null>(null);

  useEffect(() => {
    let relic: AudioRelic | undefined;
    if (relicId) {
      relic = SOUND_RELICS.find(r => r.id === relicId);
    } else if (entitySlug) {
      relic = SOUND_RELICS.find(r => r.entitySlug?.toLowerCase() === entitySlug.toLowerCase());
    }
    setActiveRelic(relic || null);
  }, [relicId, entitySlug]);

  if (!activeRelic) return null;

  const handleToggle = () => {
    if (playing) {
      relicAudio.stop();
      setPlaying(false);
    } else {
      if (activeRelic.id === 'msn-nudge') {
        // Trigger subtle screen tremor
        document.body.classList.add('animate-bounce');
        setTimeout(() => {
          document.body.classList.remove('animate-bounce');
        }, 600);
      }

      setPlaying(true);
      relicAudio.playRelic(activeRelic.id, () => {
        setPlaying(false);
      });
    }
  };

  if (compact) {
    return (
      <div className={cn("inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900 border border-white/15 text-xs font-mono", className)}>
        <button
          onClick={handleToggle}
          className="flex items-center gap-1.5 text-zinc-200 hover:text-white transition-colors cursor-pointer"
        >
          {playing ? (
            <>
              <Square className="w-3.5 h-3.5 text-red-400 fill-red-400" />
              <span className="text-red-300 font-bold">Stop</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
              <span className="text-emerald-300 font-semibold">Play Sound</span>
            </>
          )}
        </button>

        {/* Animated Equalizer Bars */}
        <div className="flex items-end gap-0.5 h-3.5 px-1">
          <span className={cn("w-0.5 bg-emerald-400 rounded-full transition-all duration-100", playing ? "h-3 animate-pulse" : "h-1 bg-zinc-600")} />
          <span className={cn("w-0.5 bg-emerald-400 rounded-full transition-all duration-150 delay-75", playing ? "h-3.5 animate-pulse" : "h-1 bg-zinc-600")} />
          <span className={cn("w-0.5 bg-emerald-400 rounded-full transition-all duration-200 delay-100", playing ? "h-2 animate-pulse" : "h-1 bg-zinc-600")} />
        </div>
      </div>
    );
  }

  return (
    <div className={cn("p-5 rounded-2xl bg-zinc-950 border-2 border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.08)] space-y-3 font-sans relative overflow-hidden", className)}>
      {/* Background audio glow */}
      <div className={cn("absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl transition-opacity pointer-events-none -z-0", playing ? "bg-emerald-500/20 opacity-100" : "opacity-0")} />

      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
          <Volume2 className={cn("w-4 h-4", playing && "animate-bounce")} />
          <span>Acoustic Relic: Sound from the Era</span>
        </div>
        <span className="text-xs font-mono text-zinc-400">{activeRelic.year}</span>
      </div>

      <div className="flex items-center justify-between gap-4 pt-1 relative z-10">
        <div className="space-y-0.5">
          <h4 className="text-base font-bold text-white">{activeRelic.name}</h4>
          <p className="text-xs text-zinc-400 font-sans leading-relaxed">
            {activeRelic.description}
          </p>
        </div>

        <button
          onClick={handleToggle}
          className={cn(
            "flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all shadow-md cursor-pointer shrink-0",
            playing 
              ? "bg-red-600 hover:bg-red-500 text-white" 
              : "bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]"
          )}
        >
          {playing ? (
            <>
              <Square className="w-3.5 h-3.5 fill-current" />
              <span>Stop</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Play Relic</span>
            </>
          )}
        </button>
      </div>

      {/* Visual Equalizer */}
      <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs font-mono text-zinc-400 relative z-10">
        <div className="flex items-center gap-1.5">
          <Disc className={cn("w-3.5 h-3.5 text-zinc-500", playing && "animate-spin text-emerald-400")} />
          <span>Synthesized 16-bit Master</span>
        </div>

        <div className="flex items-end gap-1 h-4">
          {[40, 70, 100, 60, 90, 45, 80, 50, 75, 95].map((h, i) => (
            <span
              key={i}
              className={cn(
                "w-1 rounded-sm transition-all duration-150",
                playing ? "bg-emerald-400 animate-pulse" : "bg-zinc-700 h-1.5"
              )}
              style={playing ? { height: `${(h * 0.16)}px` } : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
