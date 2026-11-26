"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  ambientRadio, 
  AMBIENT_PRESETS, 
  AmbientPreset 
} from '@/lib/audio/ambientRadio';
import { soundFx } from '@/lib/audio/soundFx';
import { 
  Radio, 
  Volume2, 
  VolumeX, 
  Power, 
  ChevronUp, 
  ChevronDown, 
  Sparkles, 
  ExternalLink,
  Activity,
  Sliders
} from 'lucide-react';
import { cn } from '@/lib/utils';

export const FloatingAudioDeck: React.FC = () => {
  const pathname = usePathname();
  const [isPlaying, setIsPlaying] = useState(false);
  const [masterVol, setMasterVol] = useState(0.6);
  const [expanded, setExpanded] = useState(false);
  const [currentPreset, setCurrentPreset] = useState<string>('cyberpunk_storm');

  // Subscribe to ambient radio state
  useEffect(() => {
    setIsPlaying(ambientRadio.getIsPlaying());
    setMasterVol(ambientRadio.getMasterVolume());

    const unsubscribe = ambientRadio.subscribe((playing) => {
      setIsPlaying(playing);
      setMasterVol(ambientRadio.getMasterVolume());
    });

    return () => unsubscribe();
  }, []);

  // Hide floating dock on /sounds page to avoid double controls
  if (pathname === '/sounds') {
    return null;
  }

  const handleTogglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundFx.playClick(900);
    ambientRadio.toggle();
    setIsPlaying(ambientRadio.getIsPlaying());
  };

  const handlePresetSelect = (presetId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    soundFx.playClick(800);
    setCurrentPreset(presetId);
    ambientRadio.applyPreset(presetId);
    setIsPlaying(true);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setMasterVol(val);
    ambientRadio.setMasterVolume(val);
  };

  const activePresetObj = AMBIENT_PRESETS.find(p => p.id === currentPreset) || AMBIENT_PRESETS[0];

  return (
    <div className="fixed bottom-4 right-4 z-40 font-sans select-none print:hidden">
      {/* Collapsed Pill Control Bar */}
      <div
        onClick={() => {
          soundFx.playClick(750);
          setExpanded(!expanded);
        }}
        className={cn(
          "flex items-center gap-2.5 px-3.5 py-2 rounded-2xl border backdrop-blur-2xl shadow-2xl transition-all duration-200 cursor-pointer group",
          isPlaying
            ? "bg-zinc-950/95 border-emerald-500/50 shadow-[0_0_25px_rgba(16,185,129,0.25)] text-white"
            : "bg-zinc-950/90 border-white/15 hover:border-white/30 text-zinc-300"
        )}
      >
        {/* Play/Pause Button */}
        <button
          onClick={handleTogglePlay}
          className={cn(
            "p-1.5 rounded-xl border transition-all cursor-pointer flex items-center justify-center shrink-0",
            isPlaying
              ? "bg-emerald-500 text-black border-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.6)]"
              : "bg-zinc-900 border-white/10 text-zinc-400 hover:text-white"
          )}
          title={isPlaying ? "Pause Ambient Radio" : "Start Procedural Ambient Radio"}
          aria-label={isPlaying ? "Pause Ambient Radio" : "Start Procedural Ambient Radio"}
        >
          <Power className={cn("w-3.5 h-3.5", isPlaying && "animate-pulse")} />
        </button>

        {/* Live Audio Visualizer Equalizer */}
        <div className="flex items-end gap-1 h-3.5 w-7 shrink-0 overflow-hidden">
          {[40, 90, 60, 100, 70].map((heightPercent, idx) => (
            <span
              key={idx}
              className={cn(
                "flex-1 rounded-sm transition-all duration-150",
                isPlaying ? "bg-emerald-400 animate-pulse" : "bg-zinc-700"
              )}
              style={{
                height: isPlaying ? `${heightPercent}%` : '20%',
                animationDelay: `${idx * 120}ms`
              }}
            />
          ))}
        </div>

        {/* Channel / Status Info */}
        <div className="flex flex-col text-left min-w-0 pr-1">
          <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider font-bold">
            <span className={cn("w-1.5 h-1.5 rounded-full shrink-0", isPlaying ? "bg-emerald-400 animate-ping" : "bg-zinc-600")} />
            <span className={isPlaying ? "text-emerald-400" : "text-zinc-400"}>
              {isPlaying ? "RADIO: LIVE" : "AMBIENT DECK"}
            </span>
          </div>
          <span className="text-xs font-serif font-bold text-white truncate max-w-[130px] hidden sm:block">
            {activePresetObj.name}
          </span>
        </div>

        {/* Chevron toggle */}
        <div className="text-zinc-400 group-hover:text-white transition-colors pl-1">
          {expanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
        </div>
      </div>

      {/* Expanded Deck Console Drawer */}
      {expanded && (
        <div className="absolute bottom-14 right-0 w-80 sm:w-96 rounded-3xl bg-zinc-950/98 border border-emerald-500/40 p-5 shadow-2xl backdrop-blur-2xl space-y-4 animate-in fade-in-0 zoom-in-95 duration-150">
          {/* Deck Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="space-y-0.5">
              <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Necropolis Ambient Synthesizer</span>
              </div>
              <h4 className="text-sm font-serif font-black text-white">
                Dead Web Acoustic Carrier
              </h4>
            </div>

            <Link
              href="/sounds"
              onClick={() => {
                soundFx.playClick(750);
                setExpanded(false);
              }}
              className="text-[11px] font-mono text-emerald-400 hover:text-emerald-300 flex items-center gap-1 underline"
            >
              <span>Full Mixer</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>

          {/* Master Volume Fader */}
          <div className="p-3 rounded-2xl bg-zinc-900/80 border border-white/10 flex items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2 text-zinc-300">
              <Volume2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>GAIN:</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={masterVol}
              onChange={handleVolumeChange}
              className="flex-1 accent-emerald-500 cursor-pointer"
            />
            <span className="tabular-nums font-bold text-emerald-300 w-10 text-right">
              {Math.round(masterVol * 100)}%
            </span>
          </div>

          {/* Quick Preset Selector */}
          <div className="space-y-1.5">
            <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold px-1">
              Select Acoustic Atmosphere:
            </div>
            <div className="grid grid-cols-2 gap-2">
              {AMBIENT_PRESETS.map((preset) => {
                const isSelected = currentPreset === preset.id;
                return (
                  <button
                    key={preset.id}
                    onClick={(e) => handlePresetSelect(preset.id, e)}
                    className={cn(
                      "p-2.5 rounded-xl border text-left transition-all cursor-pointer",
                      isSelected && isPlaying
                        ? "bg-emerald-950/60 border-emerald-500/50 text-white shadow-sm"
                        : "bg-zinc-900/60 border-white/10 hover:border-white/20 text-zinc-400 hover:text-white"
                    )}
                  >
                    <div className="font-bold text-xs font-serif truncate">
                      {preset.name}
                    </div>
                    <div className="text-[10px] text-zinc-500 font-sans line-clamp-1 mt-0.5">
                      {preset.description}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Deck Footer Note */}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-zinc-500">
            <span>100% Web Audio Synthesized</span>
            <button
              onClick={() => setExpanded(false)}
              className="text-zinc-400 hover:text-white cursor-pointer"
            >
              Minimize [−]
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
