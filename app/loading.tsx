import React from 'react';
import { Terminal } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center py-16 px-4 font-mono text-center select-none">
      <div className="p-3.5 rounded-2xl bg-zinc-900 border border-white/10 shadow-2xl mb-4 text-emerald-400">
        <Terminal className="w-6 h-6 animate-pulse" />
      </div>
      <div className="space-y-1.5 text-xs">
        <div className="text-zinc-300 flex items-center gap-2 justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-bold uppercase tracking-wider">Synchronizing with Necropolis Archive...</span>
        </div>
        <p className="text-[11px] text-zinc-500 font-sans">
          Exhuming verifiable historical dossiers and digital tombstones
        </p>
      </div>
    </div>
  );
}
