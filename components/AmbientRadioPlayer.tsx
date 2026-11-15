"use client";

import React, { useState, useEffect } from 'react';
import { 
  ambientRadio, 
  AMBIENT_PRESETS, 
  AmbientChannelId, 
  ChannelConfig 
} from '@/lib/audio/ambientRadio';
import { soundFx } from '@/lib/audio/soundFx';
import { 
  Radio, 
  Play, 
  Square, 
  Volume2, 
  VolumeX, 
  Sliders, 
  Sparkles, 
  Tv, 
  CloudRain, 
  Terminal, 
  Disc, 
  Activity,
  Layers,
  Power
} from 'lucide-react';
import { cn } from '@/lib/utils';

export const AmbientRadioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [masterVol, setMasterVol] = useState(0.6);
  const [channels, setChannels] = useState<ChannelConfig[]>([...ambientRadio.channels]);
  const [activePreset, setActivePreset] = useState<string>('cyberpunk_storm');

  useEffect(() => {
    setIsPlaying(ambientRadio.getIsPlaying());
    setMasterVol(ambientRadio.getMasterVolume());
    setChannels([...ambientRadio.channels]);

    const unsubscribe = ambientRadio.subscribe((playing) => {
      setIsPlaying(playing);
      setChannels([...ambientRadio.channels]);
    });

    return () => unsubscribe();
  }, []);

  const handleTogglePower = () => {
    soundFx.playClick(900);
    ambientRadio.toggle();
    setIsPlaying(ambientRadio.getIsPlaying());
  };

  const handleMasterVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setMasterVol(val);
    ambientRadio.setMasterVolume(val);
  };

  const handleChannelVolumeChange = (id: AmbientChannelId, val: number) => {
    ambientRadio.setChannelVolume(id, val);
    setChannels([...ambientRadio.channels]);
  };

  const handleToggleChannel = (id: AmbientChannelId) => {
    soundFx.playClick(750);
    ambientRadio.toggleChannel(id);
    setChannels([...ambientRadio.channels]);
  };

  const handleApplyPreset = (presetId: string) => {
    soundFx.playClick(850);
    setActivePreset(presetId);
    ambientRadio.applyPreset(presetId);
    setIsPlaying(true);
    setChannels([...ambientRadio.channels]);
  };

  const getChannelIcon = (id: AmbientChannelId) => {
    switch (id) {
      case 'crt': return <Tv className="w-4 h-4 shrink-0 text-cyan-400" />;
      case 'storm': return <CloudRain className="w-4 h-4 shrink-0 text-blue-400" />;
      case 'dialup': return <Activity className="w-4 h-4 shrink-0 text-amber-400" />;
      case 'tape': return <Disc className="w-4 h-4 shrink-0 text-purple-400" />;
      case 'keyboard': return <Terminal className="w-4 h-4 shrink-0 text-emerald-400" />;
    }
  };

  return (
    <div className="w-full rounded-3xl bg-zinc-950/95 border-2 border-emerald-500/40 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_0_50px_rgba(16,185,129,0.12)] space-y-6 font-sans">
      {/* Top Deck Chrome Bezel */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className={cn(
              "w-2.5 h-2.5 rounded-full inline-block",
              isPlaying ? "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)] animate-pulse" : "bg-zinc-600"
            )} />
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
              Necropolis Ambient Acoustic Deck // 5-Channel Synthesizer
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-black text-white tracking-tight">
            Dead Web Ambient Radio
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
            Pure procedural Web Audio synthesis simulating the lost electromagnetic atmosphere of late-90s and early-2000s cyberspace.
          </p>
        </div>

        {/* Master Power & Master Gain Controls */}
        <div className="flex items-center gap-4 bg-zinc-900/90 border border-white/15 px-4 py-3 rounded-2xl shrink-0 self-stretch md:self-auto justify-between md:justify-end">
          {/* Master Volume */}
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-300">
            <Volume2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="hidden sm:inline">GAIN:</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.02"
              value={masterVol}
              onChange={handleMasterVolumeChange}
              className="w-20 sm:w-24 accent-emerald-500 cursor-pointer"
              title={`Master Volume: ${Math.round(masterVol * 100)}%`}
            />
            <span className="tabular-nums w-8 text-right font-bold text-emerald-300">
              {Math.round(masterVol * 100)}%
            </span>
          </div>

          <div className="w-[1px] h-6 bg-white/10" />

          {/* Master Power Toggle Button */}
          <button
            onClick={handleTogglePower}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all shadow-md cursor-pointer select-none",
              isPlaying
                ? "bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.5)] scale-102"
                : "bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-white/20"
            )}
          >
            <Power className={cn("w-4 h-4", isPlaying ? "text-black animate-spin" : "text-zinc-400")} />
            <span>{isPlaying ? "LIVE DECK ON" : "START DECK"}</span>
          </button>
        </div>
      </div>

      {/* Preset Bank */}
      <div className="space-y-2">
        <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 font-bold px-1 flex items-center justify-between">
          <span>Atmospheric Memory Presets:</span>
          <span className="text-zinc-400">Zero Audio Files • 100% Procedural</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
          {AMBIENT_PRESETS.map((preset) => {
            const isCurrent = activePreset === preset.id;
            return (
              <button
                key={preset.id}
                onClick={() => handleApplyPreset(preset.id)}
                className={cn(
                  "p-3 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden group",
                  isCurrent && isPlaying
                    ? "bg-emerald-950/40 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                    : "bg-zinc-900/60 border-white/10 hover:border-white/20 hover:bg-zinc-900/90 text-zinc-300"
                )}
              >
                <div className="font-bold text-xs text-white group-hover:text-emerald-300 transition-colors flex items-center justify-between">
                  <span>{preset.name}</span>
                  {isCurrent && isPlaying && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  )}
                </div>
                <div className="text-[10px] text-zinc-400 line-clamp-1 mt-1 font-sans">
                  {preset.description}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 5-Channel Fader Mixer Strip */}
      <div className="space-y-2 pt-2">
        <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 font-bold px-1">
          Acoustic Channel Mixer
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {channels.map((ch) => {
            const isChActive = ch.active && isPlaying;
            return (
              <div
                key={ch.id}
                className={cn(
                  "p-4 rounded-2xl border transition-all space-y-3.5 relative overflow-hidden flex flex-col justify-between",
                  isChActive
                    ? "bg-zinc-900/90 border-white/20 shadow-md"
                    : "bg-zinc-950/70 border-white/5 opacity-70"
                )}
              >
                {/* Channel Header */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    {getChannelIcon(ch.id)}
                    <span className="font-bold text-xs text-white truncate font-sans">
                      {ch.name}
                    </span>
                  </div>
                  <button
                    onClick={() => handleToggleChannel(ch.id)}
                    className={cn(
                      "px-2 py-0.5 rounded text-[10px] font-mono font-bold transition-all cursor-pointer",
                      ch.active 
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" 
                        : "bg-zinc-800 text-zinc-500 border border-white/10"
                    )}
                  >
                    {ch.active ? "MUTE" : "UNMUTE"}
                  </button>
                </div>

                <div className="text-[11px] text-zinc-400 font-sans line-clamp-2 min-h-[32px]">
                  {ch.description}
                </div>

                {/* Animated Visualizer Spectrum Bar */}
                <div className="h-6 bg-zinc-950 rounded-lg p-1 flex items-end justify-between gap-1 border border-white/5 overflow-hidden">
                  {[...Array(6)].map((_, i) => (
                    <span
                      key={i}
                      className={cn(
                        "flex-1 rounded-sm transition-all duration-150",
                        isChActive ? "bg-emerald-400" : "bg-zinc-800",
                        isChActive && "animate-pulse"
                      )}
                      style={{
                        height: isChActive 
                          ? `${Math.max(15, Math.min(100, Math.round(ch.volume * 100 * (0.4 + ((i * 37) % 60) / 100))))}%` 
                          : '15%'
                      }}
                    />
                  ))}
                </div>

                {/* Individual Channel Fader Slider */}
                <div className="space-y-1 pt-1 font-mono text-[11px]">
                  <div className="flex justify-between items-center text-zinc-400">
                    <span>VOL</span>
                    <span className="text-zinc-200 tabular-nums font-bold">
                      {ch.active ? `${Math.round(ch.volume * 100)}%` : "MUTED"}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={ch.active ? ch.volume : 0}
                    disabled={!ch.active}
                    onChange={(e) => handleChannelVolumeChange(ch.id, parseFloat(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer disabled:opacity-40"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
