"use client";

import React, { useEffect, useState } from 'react';
import { Terminal, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ArchivalLoaderProps {
  entityName?: string;
  lifespan?: string;
  onComplete?: () => void;
  duration?: number;
}

export const ArchivalLoader: React.FC<ArchivalLoaderProps> = ({
  entityName,
  lifespan,
  onComplete,
  duration = 1200
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(2), duration * 0.45);
    const t2 = setTimeout(() => {
      setStep(3);
      if (onComplete) onComplete();
    }, duration);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [duration, onComplete]);

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 font-mono text-center select-none animate-in fade-in duration-300">
      <div className="p-3 rounded-xl bg-graveyard-850 border border-white/10 shadow-2xl mb-4 text-red-400">
        <Terminal className="w-6 h-6 animate-pulse" />
      </div>

      <div className="space-y-2 text-xs">
        {step === 1 && (
          <div className="text-graveyard-400 flex items-center gap-2 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
            <span>Searching the archives...</span>
          </div>
        )}

        {step === 2 && (
          <div className="text-amber-400 flex items-center gap-2 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
            <span>Cross-referencing defunct registry...</span>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-1 animate-in zoom-in-95 duration-200">
            <div className="text-emerald-400 flex items-center gap-1.5 justify-center font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Record located.</span>
            </div>
            {entityName && (
              <div className="text-sm font-bold text-white tracking-wider uppercase pt-1">
                {entityName} {lifespan && <span className="text-graveyard-400 font-normal">({lifespan})</span>}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
