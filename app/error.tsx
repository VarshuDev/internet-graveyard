'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Landmark } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled Necropolis runtime error:', error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16 font-sans">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-3xl bg-zinc-900/90 border border-red-500/30 shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-red-950/60 border border-red-500/40 text-red-400 flex items-center justify-center mx-auto shadow-inner">
          <AlertTriangle className="w-8 h-8 animate-pulse" />
        </div>

        <div className="space-y-2">
          <div className="text-xs font-mono font-bold uppercase text-red-400">
            SYSTEM DISRUPTION DETECTED
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-white">
            Telemetry Feed Interrupted
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
            The archaeological archive encountered an unexpected state while rendering this relic.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 font-mono text-xs font-bold pt-2">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white transition-all shadow-md cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Re-Synchronize</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-750 text-zinc-200 border border-white/10 transition-all"
          >
            <Landmark className="w-3.5 h-3.5 text-zinc-400" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
