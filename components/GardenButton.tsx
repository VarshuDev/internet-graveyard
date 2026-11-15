"use client";

import React, { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { gardenStore } from '@/lib/storage/gardenStore';
import { soundFx } from '@/lib/audio/soundFx';
import { cn } from '@/lib/utils';

interface GardenButtonProps {
  slug: string;
  entityName?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}

export const GardenButton: React.FC<GardenButtonProps> = ({
  slug,
  entityName,
  size = 'md',
  showLabel = true,
  className
}) => {
  const [inGarden, setInGarden] = useState(false);
  const [justToggled, setJustToggled] = useState(false);

  useEffect(() => {
    setInGarden(gardenStore.isInGarden(slug));

    const handleUpdate = () => {
      setInGarden(gardenStore.isInGarden(slug));
    };

    window.addEventListener('garden-updated', handleUpdate);
    return () => window.removeEventListener('garden-updated', handleUpdate);
  }, [slug]);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const added = gardenStore.toggleGarden(slug);
    setInGarden(added);
    setJustToggled(true);

    if (added) {
      soundFx.playChime(620);
    } else {
      soundFx.playClick(500);
    }

    setTimeout(() => setJustToggled(false), 800);
  };

  const sizeClasses = {
    sm: "px-2.5 py-1 text-xs gap-1.5",
    md: "px-3.5 py-2 text-xs font-bold gap-2",
    lg: "px-4 py-2.5 text-sm font-bold gap-2.5"
  }[size];

  const iconSizes = {
    sm: "w-3.5 h-3.5",
    md: "w-4 h-4",
    lg: "w-5 h-5"
  }[size];

  return (
    <button
      onClick={handleToggle}
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-mono transition-all duration-200 cursor-pointer shadow-sm relative overflow-hidden group select-none shrink-0",
        sizeClasses,
        inGarden
          ? "bg-rose-950/70 border border-rose-500/50 text-rose-300 hover:bg-rose-900/80 shadow-[0_0_15px_rgba(244,63,94,0.15)]"
          : "bg-zinc-900/80 hover:bg-zinc-850 border border-white/10 hover:border-rose-500/40 text-zinc-400 hover:text-rose-200",
        justToggled && "scale-105",
        className
      )}
      title={inGarden ? `Remove ${entityName || 'relic'} from My Garden` : `Consecrate ${entityName || 'relic'} to My Garden`}
      aria-label={inGarden ? `Saved in My Memorial Garden` : `Save to My Memorial Garden`}
    >
      <Heart
        className={cn(
          iconSizes,
          "transition-transform duration-200 shrink-0",
          inGarden ? "fill-rose-500 text-rose-500 scale-110" : "text-zinc-400 group-hover:text-rose-400 group-hover:scale-110",
          justToggled && "animate-ping"
        )}
      />

      {showLabel && (
        <span className="whitespace-nowrap">
          {inGarden ? "In My Garden" : "Consecrate"}
        </span>
      )}
    </button>
  );
};
