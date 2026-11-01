import React from 'react';
import { GraveEntity } from '@/types/graveyard';
import { cn } from '@/lib/utils';

interface EntityLogoProps {
  entity: Pick<GraveEntity, 'slug' | 'name' | 'category' | 'logo_url'>;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const EntityLogo: React.FC<EntityLogoProps> = ({
  entity,
  className,
  size = 'md'
}) => {
  const slug = entity.slug?.toLowerCase() || '';

  // Size mapping
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-base',
    xl: 'w-20 h-20 text-xl'
  };

  const iconSizes = {
    sm: 16,
    md: 26,
    lg: 36,
    xl: 48
  };

  const is = iconSizes[size] || 26;

  // Real, authentic vector brand emblems for famous dead services
  const renderBrandLogo = () => {
    switch (slug) {
      case 'icq':
        // The legendary ICQ green flower with one red petal
        return (
          <div className="w-full h-full bg-zinc-950 flex items-center justify-center p-1 rounded-xl">
            <svg viewBox="0 0 64 64" width={is * 1.3} height={is * 1.3} fill="none">
              {/* Petals */}
              <circle cx="32" cy="14" r="9" fill="#22c55e" />
              <circle cx="48" cy="22" r="9" fill="#22c55e" />
              <circle cx="48" cy="42" r="9" fill="#22c55e" />
              <circle cx="32" cy="50" r="9" fill="#22c55e" />
              <circle cx="16" cy="42" r="9" fill="#22c55e" />
              <circle cx="16" cy="22" r="9" fill="#ef4444" /> {/* Iconic Red Petal */}
              {/* Center */}
              <circle cx="32" cy="32" r="10" fill="#ffffff" />
            </svg>
          </div>
        );

      case 'vine':
        // Iconic Vine emerald green with white cursive 'V'
        return (
          <div className="w-full h-full bg-[#00b488] flex items-center justify-center p-1.5 rounded-xl shadow-inner">
            <svg viewBox="0 0 48 48" width={is * 1.2} height={is * 1.2} fill="white">
              <path d="M38 12c-2.4 2.8-5.3 4.5-8.5 5.2 2-4.5 2.8-9 2.5-13.2h-6.8c.2 4.1-.7 8.3-2.7 12.2-2.1-4.8-4-9.8-5.5-14.2H10c2.4 6.8 5.7 14.8 9.3 22 2.3 4.6 4.9 8.7 7.7 11.8 3.5 3.9 7.4 5.2 11 3.2 3.6-2 4.5-6.6 2.5-12.8-1.7-5.2-5.5-10.2-10.5-14.2 3.3-.8 6.2-2.7 8-5.2z" />
            </svg>
          </div>
        );

      case 'google-reader':
        // Classic Google Reader RSS orange wave emblem
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#f26522] to-[#e04505] flex items-center justify-center p-2 rounded-xl shadow-md">
            <svg viewBox="0 0 24 24" width={is} height={is} fill="white">
              <circle cx="6.18" cy="17.82" r="2.18" />
              <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z" />
            </svg>
          </div>
        );

      case 'club-penguin':
        // Iconic royal blue with penguin silhouette & orange beak
        return (
          <div className="w-full h-full bg-[#0096d6] flex items-center justify-center p-1.5 rounded-xl shadow-md">
            <svg viewBox="0 0 48 48" width={is * 1.2} height={is * 1.2}>
              {/* Penguin Body */}
              <ellipse cx="24" cy="27" rx="14" ry="17" fill="#1e293b" />
              <ellipse cx="24" cy="29" rx="9" ry="13" fill="#ffffff" />
              {/* Penguin Eyes */}
              <circle cx="20" cy="18" r="2.5" fill="#ffffff" />
              <circle cx="28" cy="18" r="2.5" fill="#ffffff" />
              <circle cx="21" cy="18" r="1.2" fill="#000000" />
              <circle cx="27" cy="18" r="1.2" fill="#000000" />
              {/* Penguin Beak */}
              <polygon points="24,20 20,24 28,24" fill="#f97316" />
            </svg>
          </div>
        );

      case 'geocities':
        // Classic GeoCities 90s geometric cityscape grid
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#1e3a8a] via-[#3b82f6] to-[#f59e0b] flex items-center justify-center p-1 rounded-xl">
            <span className="font-mono font-black text-white text-xs sm:text-sm tracking-tighter drop-shadow-md">
              GEO
            </span>
          </div>
        );

      case 'omegle':
        // Iconic Omegle Greek Omega symbol in blue & white
        return (
          <div className="w-full h-full bg-[#2b7bb9] flex items-center justify-center p-1.5 rounded-xl shadow-md">
            <span className="font-serif font-black text-white text-xl sm:text-2xl leading-none">
              Ω
            </span>
          </div>
        );

      case 'heardle':
        // Heardle music equalizer waves in magenta-purple
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#ec4899] to-[#8b5cf6] flex items-center justify-center p-2 rounded-xl shadow-md">
            <div className="flex items-end gap-1 h-6">
              <span className="w-1.5 h-3 bg-white rounded-full animate-pulse" />
              <span className="w-1.5 h-6 bg-white rounded-full" />
              <span className="w-1.5 h-4 bg-white rounded-full animate-pulse" />
              <span className="w-1.5 h-2 bg-white rounded-full" />
            </div>
          </div>
        );

      case 'periscope':
        // Iconic Periscope teal/cyan camera teardrop
        return (
          <div className="w-full h-full bg-[#2f99d4] flex items-center justify-center p-2 rounded-xl shadow-md">
            <svg viewBox="0 0 24 24" width={is} height={is} fill="white">
              <path d="M12 2C7.58 2 4 5.58 4 10c0 4.08 6.78 11.36 7.42 12.04.31.33.85.33 1.16 0 .64-.68 7.42-7.96 7.42-12.04 0-4.42-3.58-8-8-8zm0 11.5c-1.93 0-3.5-1.57-3.5-3.5S10.07 6.5 12 6.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
            </svg>
          </div>
        );

      case 'yahoo-answers':
        // Iconic Yahoo! Answers Purple with Y!
        return (
          <div className="w-full h-full bg-[#6001d2] flex items-center justify-center p-1 rounded-xl shadow-md">
            <span className="font-sans font-black text-white text-base sm:text-lg tracking-tight">
              Y!
            </span>
          </div>
        );

      case 'adobe-flash':
        // Legendary Adobe Flash dark red cube with 'fl'
        return (
          <div className="w-full h-full bg-[#d00000] flex items-center justify-center p-1 rounded-xl shadow-md border border-red-400/30">
            <span className="font-sans font-black text-white text-lg sm:text-xl italic font-bold">
              fl
            </span>
          </div>
        );

      case 'quibi':
        // Electric indigo Quibi Q emblem
        return (
          <div className="w-full h-full bg-[#472fff] flex items-center justify-center p-1 rounded-xl shadow-md">
            <span className="font-sans font-black text-white text-lg sm:text-xl tracking-tighter">
              Q
            </span>
          </div>
        );

      case 'kazaa':
        // Kazaa cyan butterfly
        return (
          <div className="w-full h-full bg-[#0099cc] flex items-center justify-center p-1.5 rounded-xl shadow-md">
            <svg viewBox="0 0 24 24" width={is} height={is} fill="white">
              <path d="M12 4c-1.5-2-4-2-6 0s-2 6 2 8c-3 1-4 4-2 6s5 1 6-2c1 3 4 4 6 2s1-5-2-6c4-2 4-6 2-8s-4.5-2-6 0z" />
            </svg>
          </div>
        );

      case 'turntable-fm':
        // Turntable DJ vinyl record player
        return (
          <div className="w-full h-full bg-zinc-900 border border-emerald-500/40 flex items-center justify-center p-1 rounded-xl shadow-md">
            <div className="w-8 h-8 rounded-full bg-zinc-950 border-2 border-emerald-400 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
          </div>
        );

      case 'limewire':
        // Limewire lime green slice
        return (
          <div className="w-full h-full bg-[#84cc16] flex items-center justify-center p-1.5 rounded-xl shadow-md">
            <svg viewBox="0 0 24 24" width={is} height={is} fill="#14532d">
              <circle cx="12" cy="12" r="10" fill="#a3e635" stroke="#14532d" strokeWidth="2" />
              <path d="M12 12 L12 4 M12 12 L18 7 M12 12 L19 14 M12 12 L15 19 M12 12 L8 19 M12 12 L5 14 M12 12 L6 7" stroke="#14532d" strokeWidth="1.5" />
            </svg>
          </div>
        );

      case 'napster':
        // Napster blue cat with headphones
        return (
          <div className="w-full h-full bg-[#1d4ed8] flex items-center justify-center p-1 rounded-xl shadow-md">
            <svg viewBox="0 0 24 24" width={is} height={is} fill="white">
              <circle cx="12" cy="12" r="8" />
              <circle cx="4" cy="12" r="3" />
              <circle cx="20" cy="12" r="3" />
              <path d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="white" strokeWidth="2" fill="none" />
              <circle cx="9.5" cy="11.5" r="1.5" fill="#1d4ed8" />
              <circle cx="14.5" cy="11.5" r="1.5" fill="#1d4ed8" />
            </svg>
          </div>
        );

      case 'myspace':
        // MySpace royal blue 3-person silhouette
        return (
          <div className="w-full h-full bg-[#003399] flex items-center justify-center p-1 rounded-xl shadow-md">
            <svg viewBox="0 0 24 24" width={is} height={is} fill="white">
              <circle cx="12" cy="8" r="3" />
              <path d="M6 19c0-3.3 2.7-6 6-6s6 2.7 6 6" />
              <circle cx="18" cy="9" r="2" />
              <path d="M18 14c1.7 0 3 1.3 3 3" />
            </svg>
          </div>
        );

      case 'friendster':
        // Friendster emerald green smiley
        return (
          <div className="w-full h-full bg-[#10b981] flex items-center justify-center p-1 rounded-xl shadow-md">
            <svg viewBox="0 0 24 24" width={is} height={is} fill="none" stroke="white" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <circle cx="9" cy="10" r="1" fill="white" />
              <circle cx="15" cy="10" r="1" fill="white" />
              <path d="M8 14c1.5 2 6.5 2 8 0" strokeLinecap="round" />
            </svg>
          </div>
        );

      case 'pebble':
        // Pebble smartwatch watchface
        return (
          <div className="w-full h-full bg-zinc-950 border-2 border-red-500 flex items-center justify-center p-1 rounded-xl shadow-md">
            <span className="font-mono font-black text-red-400 text-xs sm:text-sm">
              12:00
            </span>
          </div>
        );

      case 'grooveshark':
        // Grooveshark orange circle with shark fin
        return (
          <div className="w-full h-full bg-[#ff7800] flex items-center justify-center p-1 rounded-xl shadow-md">
            <svg viewBox="0 0 24 24" width={is} height={is} fill="#18181b">
              <path d="M5 18c3-1 6-4 8-10 1 4 3 7 6 8-4 2-10 2-14 2z" />
            </svg>
          </div>
        );

      case 'google-plus':
        // Google+ red badge
        return (
          <div className="w-full h-full bg-[#db4437] flex items-center justify-center p-1 rounded-xl shadow-md">
            <span className="font-sans font-black text-white text-sm sm:text-base">
              g+
            </span>
          </div>
        );

      case 'aim':
      case 'aol-instant-messenger':
        // AIM yellow running man
        return (
          <div className="w-full h-full bg-zinc-950 border border-amber-400/40 flex items-center justify-center p-1 rounded-xl shadow-md">
            <span className="font-sans font-black text-amber-400 text-sm sm:text-base">
              AIM
            </span>
          </div>
        );

      case 'stumbleupon':
        // Stumbleupon green swirl
        return (
          <div className="w-full h-full bg-[#10b981] flex items-center justify-center p-1 rounded-xl shadow-md">
            <span className="font-sans font-black text-white text-sm sm:text-base">
              SU
            </span>
          </div>
        );

      case 'path':
        // Path red cursive p
        return (
          <div className="w-full h-full bg-[#e11d48] flex items-center justify-center p-1 rounded-xl shadow-md">
            <span className="font-serif font-black text-white text-base sm:text-lg italic">
              p
            </span>
          </div>
        );

      case 'rdio':
        // Rdio cyan circle
        return (
          <div className="w-full h-full bg-[#0284c7] flex items-center justify-center p-1 rounded-xl shadow-md">
            <span className="font-sans font-bold text-white text-xs sm:text-sm lowercase">
              rdio
            </span>
          </div>
        );

      default:
        // High-contrast, authentic typographic monogram with category-themed gradient
        return renderFallbackMonogram();
    }
  };

  const renderFallbackMonogram = () => {
    // Generate clean brand-colored background based on category
    const categoryGradients: { [cat: string]: string } = {
      Social: 'from-blue-600 to-indigo-900',
      Messaging: 'from-emerald-600 to-teal-900',
      Gaming: 'from-purple-600 to-violet-950',
      Streaming: 'from-amber-600 to-red-950',
      Search: 'from-cyan-600 to-blue-950',
      'Developer tools': 'from-zinc-700 to-zinc-950',
      'Web technology': 'from-orange-600 to-amber-950',
      Communities: 'from-rose-600 to-red-950',
      Hardware: 'from-slate-600 to-slate-950'
    };

    const gradient = categoryGradients[entity.category] || 'from-zinc-800 to-zinc-950';
    const letters = entity.name.replace(/[^a-zA-Z0-9]/g, '').slice(0, 2).toUpperCase() || 'DG';

    return (
      <div className={cn('w-full h-full bg-gradient-to-br flex items-center justify-center rounded-xl font-mono font-black text-white shadow-md border border-white/10', gradient)}>
        <span>{letters}</span>
      </div>
    );
  };

  return (
    <div className={cn(sizeClasses[size], 'relative flex items-center justify-center rounded-xl overflow-hidden shrink-0 select-none', className)}>
      {renderBrandLogo()}
    </div>
  );
};