import React from 'react';
import Link from 'next/link';
import { Skull, Shuffle, Compass, ArrowRight, Search, Landmark } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16 font-sans">
      <div className="max-w-xl w-full text-center space-y-8 p-8 sm:p-12 rounded-3xl bg-zinc-900/90 border border-white/10 shadow-2xl relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-red-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-red-950/40 border border-red-500/30 text-red-400 mx-auto shadow-inner">
            <Skull className="w-10 h-10 animate-pulse" />
          </div>

          <div className="space-y-2">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-red-400">
              HTTP 404 // ARTIFACT OBLITERATED
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-black text-white uppercase tracking-tight">
              Grave Not Found
            </h1>
            <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed max-w-md mx-auto">
              The digital relic or page you are excavating does not exist in our historical ledger, or has decomposed beyond digital recovery.
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 font-mono text-xs font-bold">
          <Link
            href="/random"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-black transition-all shadow-md"
          >
            <Shuffle className="w-4 h-4" />
            <span>Exhume Random Relic</span>
          </Link>

          <Link
            href="/explore"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-750 text-white border border-white/15 transition-all"
          >
            <Compass className="w-4 h-4 text-emerald-400" />
            <span>Search 1,027 Graves</span>
          </Link>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-850 text-zinc-300 border border-white/10 transition-all"
          >
            <Landmark className="w-4 h-4 text-zinc-400" />
            <span>Necropolis Gate</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
