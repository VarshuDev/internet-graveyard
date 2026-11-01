"use client";

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Flame, Sparkles, Heart, Volume2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { relicAudio } from '@/lib/audio/soundArchive';

interface DigitalCandleProps {
  slug: string;
  initialCount: number;
  entityName: string;
  className?: string;
}

export const DigitalCandle: React.FC<DigitalCandleProps> = ({
  slug,
  initialCount,
  entityName,
  className
}) => {
  const [count, setCount] = useState(initialCount);
  const [isLit, setIsLit] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLightCandle = async () => {
    if (loading) return;
    setLoading(true);

    try {
      // Optimistic update
      setCount(prev => prev + 1);
      setIsLit(true);

      // Procedural 528Hz crystal singing bowl memorial chime
      try {
        relicAudio.playMemorialChime();
      } catch {}

      // Trigger subtle golden/amber particle effect
      confetti({
        particleCount: 28,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#f59e0b', '#ef4444', '#fbbf24', '#ffffff'],
        disableForReducedMotion: true
      });

      const res = await fetch(`/api/entities/${slug}/candle`, {
        method: 'POST'
      });

      if (res.ok) {
        const data = await res.json();
        if (data.candle_count) {
          setCount(data.candle_count);
        }
      }
    } catch (err) {
      console.error('Error lighting candle:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cn('flex flex-col items-center gap-2', className)}>
      <button
        onClick={handleLightCandle}
        disabled={loading}
        className={cn(
          'group relative flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border font-sans font-bold text-xs sm:text-sm md:text-base transition-all duration-300 select-none cursor-pointer shadow-lg whitespace-nowrap shrink-0',
          isLit 
            ? 'border-amber-500/60 bg-amber-500/20 text-amber-300 shadow-[0_0_25px_rgba(245,158,11,0.35)]' 
            : 'border-white/20 bg-zinc-900/90 hover:border-amber-500/50 hover:bg-zinc-850 text-zinc-100 hover:text-amber-300'
        )}
      >
        <div className="relative shrink-0">
          <Flame 
            className={cn(
              'w-4 h-4 sm:w-5 sm:h-5 shrink-0 transition-transform duration-300 group-hover:scale-110',
              isLit ? 'text-amber-400 fill-amber-400 animate-pulse' : 'text-amber-400/80 group-hover:text-amber-400'
            )} 
          />
          {isLit && (
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
            </span>
          )}
        </div>

        <span className="tracking-wide">
          {isLit ? 'Tribute Paid' : 'Light a Digital Candle'}
        </span>

        <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm font-mono font-bold text-white">
          {count.toLocaleString()}
        </span>
      </button>

      <span className="text-xs sm:text-sm text-zinc-400 font-sans">
        Pay digital respects to <span className="text-zinc-200 font-medium">{entityName}</span>
      </span>
    </div>
  );
};
