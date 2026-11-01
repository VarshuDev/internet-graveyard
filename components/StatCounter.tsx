"use client";

import React, { useEffect, useState } from 'react';
import { formatNumber } from '@/lib/utils';

interface StatCounterProps {
  value: number;
  label: string;
  duration?: number;
  prefix?: string;
  suffix?: string;
  color?: string;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  value,
  label,
  duration = 1500,
  prefix = '',
  suffix = '',
  color = 'text-white'
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.floor(easeOut * value));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    window.requestAnimationFrame(step);
  }, [value, duration]);

  return (
    <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-900/90 border border-white/10 backdrop-blur-md shadow-xl hover:border-white/20 transition-all h-full text-center">
      <div className={`text-3xl sm:text-4xl lg:text-5xl font-mono font-black tracking-tight ${color}`}>
        {prefix}{formatNumber(displayValue)}{suffix}
      </div>
      <div className="text-xs sm:text-sm font-sans font-bold tracking-wider text-zinc-300 uppercase mt-2 text-center">
        {label}
      </div>
    </div>
  );
};
