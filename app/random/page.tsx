"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { GraveEntity } from '@/types/graveyard';
import { StatusBadge } from '@/components/StatusBadge';
import { ConfidenceMeter } from '@/components/ConfidenceMeter';
import { DigitalCandle } from '@/components/DigitalCandle';
import { EntityLogo } from '@/components/EntityLogo';
import { 
  Shuffle, 
  Terminal, 
  CheckCircle2, 
  ArrowRight, 
  Globe, 
  Skull, 
  Share2,
  Calendar,
  Layers,
  Heart
} from 'lucide-react';
import { ALL_SEED_ENTITIES } from '@/data/seed-entities-batch2';

export default function RandomGravePage() {
  const [currentGrave, setCurrentGrave] = useState<GraveEntity | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [step, setStep] = useState<number>(1);

  const fetchRandomGrave = (excludeSlug?: string) => {
    setLoading(true);
    setStep(1);

    // Step 1: Searching archives
    setTimeout(() => {
      setStep(2); // Cross-referencing
    }, 450);

    setTimeout(() => {
      setStep(3); // Grave found
      const available = excludeSlug
        ? ALL_SEED_ENTITIES.filter(e => e.slug !== excludeSlug)
        : ALL_SEED_ENTITIES;
      const selected = available[Math.floor(Math.random() * available.length)];
      setCurrentGrave(selected);
      setLoading(false);
    }, 1100);
  };

  useEffect(() => {
    fetchRandomGrave();
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8 font-sans">
      {/* Top Shuffle Controller */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-zinc-900/90 border border-white/10 shadow-xl">
        <div className="flex items-center gap-3.5">
          <div className="p-2.5 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30">
            <Shuffle className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider font-mono">
              Random Grave Teleportation
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300">
              Traversing 12,480+ archived digital relics
            </p>
          </div>
        </div>

        <button
          onClick={() => fetchRandomGrave(currentGrave?.slug)}
          disabled={loading}
          className="flex items-center gap-2.5 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm tracking-wider uppercase transition-all shadow-lg hover:shadow-red-600/30 disabled:opacity-50 cursor-pointer"
        >
          <Shuffle className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          <span>Another Grave</span>
        </button>
      </div>

      {/* Loading Terminal Animation */}
      {loading && (
        <div className="py-24 flex flex-col items-center justify-center font-mono text-center space-y-4 animate-in fade-in">
          <div className="p-5 rounded-2xl bg-zinc-900 border border-white/15 text-red-400 shadow-2xl">
            <Terminal className="w-10 h-10 animate-pulse" />
          </div>

          <div className="space-y-2 text-sm">
            {step === 1 && (
              <div className="text-zinc-300 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                <span>Searching the archives...</span>
              </div>
            )}
            {step >= 2 && (
              <div className="text-amber-300 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
                <span>Cross-referencing defunct registry...</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Revealed Grave Memorial */}
      {!loading && currentGrave && (
        <div className="space-y-8 animate-in fade-in zoom-in-95 duration-400">
          {/* Notification banner */}
          <div className="flex items-center justify-between px-5 py-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-sans text-sm">
            <div className="flex items-center gap-2.5 font-bold">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>A grave has been found: <strong className="text-white">{currentGrave.name}</strong> ({currentGrave.lifespan})</span>
            </div>
            <span className="hidden sm:inline text-xs font-mono text-emerald-300/90">
              Forensic record retrieved in 1.1s
            </span>
          </div>

          {/* Grave Header */}
          <div className="p-8 sm:p-10 rounded-2xl bg-zinc-900/90 border border-white/10 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-white/10">
              <div className="flex items-center gap-4 min-w-0 flex-1">
                <EntityLogo entity={currentGrave} size="lg" className="border border-white/15 shadow-lg" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3.5 flex-wrap">
                    <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight truncate">
                      {currentGrave.name}
                    </h1>
                    <div className="shrink-0">
                      <StatusBadge status={currentGrave.status} size="md" />
                    </div>
                  </div>
                  <div className="text-sm font-mono text-zinc-300 mt-1.5 flex items-center gap-2 flex-wrap">
                    <span>{currentGrave.lifespan}</span>
                    <span className="text-zinc-600">•</span>
                    <span>{currentGrave.category}</span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-zinc-200 font-semibold">{currentGrave.primary_domain}</span>
                  </div>
                </div>
              </div>

              <div className="shrink-0">
                <DigitalCandle
                  slug={currentGrave.slug}
                  initialCount={currentGrave.candle_count}
                  entityName={currentGrave.name}
                />
              </div>
            </div>

            {/* Description & Cause */}
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-zinc-200 leading-relaxed font-sans">
                {currentGrave.description}
              </p>

              <div className="p-5 rounded-xl bg-red-950/25 border border-red-500/30 space-y-2">
                <div className="text-red-400 font-bold uppercase tracking-wider text-xs sm:text-sm font-mono">
                  Cause of Demise: {currentGrave.cause_category}
                </div>
                <p className="text-zinc-200 font-sans text-sm sm:text-base leading-relaxed">
                  {currentGrave.cause_of_death_summary}
                </p>
              </div>
            </div>

            {/* Link to Full Memorial */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-sm font-mono text-zinc-300">
                Confidence: <strong className="text-emerald-400">{currentGrave.confidence_score}% Verified</strong>
              </span>
              <Link
                href={`/grave/${currentGrave.slug}`}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-sans font-bold text-sm transition-colors shadow-md"
              >
                <span>View Full Memorial Dossier</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
