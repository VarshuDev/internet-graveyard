import React from 'react';
import { cn } from '@/lib/utils';
import { ShieldAlert, Info } from 'lucide-react';

interface ConfidenceMeterProps {
  score: number; // 0 to 100
  onInspectEvidence?: () => void;
  showInspectorButton?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const ConfidenceMeter: React.FC<ConfidenceMeterProps> = ({
  score,
  onInspectEvidence,
  showInspectorButton = true,
  size = 'md',
  className
}) => {
  let grade: { label: string; color: string; barColor: string } = {
    label: 'CONFIRMED',
    color: 'text-emerald-400',
    barColor: 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]'
  };

  if (score >= 85) {
    grade = {
      label: 'CONFIRMED',
      color: 'text-emerald-400',
      barColor: 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]'
    };
  } else if (score >= 65) {
    grade = {
      label: 'PROBABLE',
      color: 'text-amber-400',
      barColor: 'bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]'
    };
  } else if (score >= 40) {
    grade = {
      label: 'POSSIBLE',
      color: 'text-orange-400',
      barColor: 'bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]'
    };
  } else {
    grade = {
      label: 'UNKNOWN',
      color: 'text-gray-400',
      barColor: 'bg-gray-500'
    };
  }

  return (
    <div className={cn('flex flex-col gap-2 font-mono', className)}>
      <div className="flex items-center justify-between text-xs sm:text-sm">
        <div className="flex items-center gap-2 text-zinc-300">
          <ShieldAlert className="w-4 h-4 text-emerald-400" />
          <span className="tracking-wider uppercase font-bold text-xs">ARCHAEOLOGICAL CONFIDENCE</span>
        </div>
        <div className="flex items-center gap-2">
          <span className={cn('font-bold text-xs sm:text-sm tracking-wider', grade.color)}>
            {grade.label}
          </span>
          <span className="text-white font-bold text-sm sm:text-base">{score}%</span>
        </div>
      </div>

      <div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden border border-white/10">
        <div
          className={cn('h-full transition-all duration-700 ease-out rounded-full', grade.barColor)}
          style={{ width: `${Math.min(100, Math.max(5, score))}%` }}
        />
      </div>

      {showInspectorButton && onInspectEvidence && (
        <button
          onClick={onInspectEvidence}
          type="button"
          className="self-start mt-1 text-xs sm:text-sm font-sans font-medium text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors group cursor-pointer"
        >
          <Info className="w-4 h-4 text-zinc-400 group-hover:text-red-400 transition-colors" />
          <span className="underline underline-offset-2 decoration-white/20 group-hover:decoration-red-400">
            Why this status? Inspect forensic evidence ({score}%)
          </span>
        </button>
      )}
    </div>
  );
};
