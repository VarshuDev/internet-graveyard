"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Volume2, 
  Play, 
  Square, 
  Disc, 
  Radio, 
  Sparkles, 
  ArrowRight, 
  History, 
  ExternalLink,
  Music,
  Headphones,
  Info
} from 'lucide-react';
import { SOUND_RELICS, relicAudio, AudioRelic } from '@/lib/audio/soundArchive';
import { cn } from '@/lib/utils';

export default function SoundVaultPage() {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [shaking, setShaking] = useState(false);

  const handlePlay = (relic: AudioRelic) => {
    if (playingId === relic.id) {
      relicAudio.stop();
      setPlayingId(null);
    } else {
      if (relic.id === 'msn-nudge') {
        setShaking(true);
        setTimeout(() => setShaking(false), 700);
      }

      setPlayingId(relic.id);
      relicAudio.playRelic(relic.id, () => {
        setPlayingId(null);
      });
    }
  };

  const handleStopAll = () => {
    relicAudio.stop();
    setPlayingId(null);
  };

  return (
    <div className={cn("min-h-screen pt-24 pb-16 sm:pt-28 sm:pb-24 transition-all duration-75", shaking && "translate-x-1.5 -translate-y-1.5 rotate-0.5")}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Header Dossier */}
        <div className="relative rounded-3xl bg-zinc-900/90 border border-white/10 p-8 sm:p-12 backdrop-blur-md overflow-hidden shadow-2xl">
          {/* Subtle Ambient Hue */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold tracking-wider shrink-0">
              <Headphones className="w-4 h-4 shrink-0" />
              <span>DIGITAL ARCHAEOLOGY • SOUND VAULT</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight drop-shadow-md">
              Sounds of the Dead Web
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 font-sans leading-relaxed">
              Before the silent algorithmic feed, cyberspace possessed a physical acoustic signature. Modems screamed across copper wires, chat clients chimed across teenage bedrooms, and digital doors clicked open and shut.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{SOUND_RELICS.length} Authenticated Relics Preserved</span>
              </span>
              <span>•</span>
              <span className="text-zinc-300">100% Web Audio Synthesized (Zero MP3 Latency)</span>
            </div>
          </div>

          {/* Master Control Bar */}
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
            <div className="text-xs font-mono text-zinc-400 flex items-center gap-2">
              <Info className="w-4 h-4 text-zinc-500 shrink-0" />
              <span>Tip: Click any artifact below to synthesize its acoustic waveform in real-time.</span>
            </div>

            {playingId && (
              <button
                onClick={handleStopAll}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-950/60 hover:bg-red-900/80 border border-red-500/40 text-red-200 text-xs font-mono font-bold transition-all cursor-pointer shadow-lg shrink-0"
              >
                <Square className="w-3.5 h-3.5 fill-current shrink-0" />
                <span>Silence Active Playback</span>
              </button>
            )}
          </div>
        </div>

        {/* Sound Relics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOUND_RELICS.map((relic) => {
            const isPlaying = playingId === relic.id;

            return (
              <div
                key={relic.id}
                className={cn(
                  "flex flex-col justify-between p-6 rounded-2xl bg-zinc-900/90 border transition-all duration-200 group relative overflow-hidden",
                  isPlaying 
                    ? "border-emerald-500/60 shadow-[0_0_30px_rgba(16,185,129,0.15)] bg-zinc-900" 
                    : "border-white/10 hover:border-white/20 hover:bg-zinc-850/80"
                )}
              >
                {/* Subtle top glow when playing */}
                {isPlaying && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 animate-pulse" />
                )}

                <div className="space-y-4">
                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/8 text-zinc-300 border border-white/10 font-bold">
                      {relic.platform}
                    </span>
                    <span className="text-xs font-mono text-zinc-400 font-semibold">
                      {relic.year}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {relic.name}
                    </h3>
                    <p className="text-sm text-zinc-300 font-sans leading-relaxed">
                      {relic.description}
                    </p>
                  </div>

                  {/* Cultural Lore / Memory */}
                  <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-white/8 text-xs font-sans text-zinc-400 leading-relaxed italic">
                    "{relic.culturalImpact}"
                  </div>
                </div>

                {/* Bottom Control & Action Bar */}
                <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
                  {/* Equalizer Waveform */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-end gap-1 h-5">
                      {[30, 80, 50, 95, 40, 70, 100, 60, 85, 45, 90, 65].map((h, i) => (
                        <span
                          key={i}
                          className={cn(
                            "w-1 rounded-full transition-all duration-150",
                            isPlaying ? "bg-emerald-400 animate-pulse" : "bg-zinc-700 h-1.5"
                          )}
                          style={isPlaying ? { height: `${(h * 0.2)}px` } : undefined}
                        />
                      ))}
                    </div>

                    <button
                      onClick={() => handlePlay(relic)}
                      className={cn(
                        "flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all shadow-md cursor-pointer shrink-0",
                        isPlaying
                          ? "bg-red-600 hover:bg-red-500 text-white"
                          : "bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.25)]"
                      )}
                    >
                      {isPlaying ? (
                        <>
                          <Square className="w-3.5 h-3.5 fill-current shrink-0" />
                          <span>Stop</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 fill-current shrink-0" />
                          <span>Play Relic</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Grave Memorial Link if applicable */}
                  {relic.entitySlug && (
                    <div className="pt-2 border-t border-white/5 flex justify-end">
                      <Link
                        href={`/grave/${relic.entitySlug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors group/link shrink-0"
                      >
                        <span>Visit {relic.platform} Memorial</span>
                        <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform shrink-0" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
