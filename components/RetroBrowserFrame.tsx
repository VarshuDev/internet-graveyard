"use client";

import React, { useState } from 'react';
import { 
  Globe, 
  RotateCw, 
  Home, 
  Search, 
  Star, 
  ArrowLeft, 
  ArrowRight, 
  Lock, 
  Tv, 
  Sliders, 
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { relicAudio } from '@/lib/audio/soundArchive';

export type BrowserSkin = 'netscape' | 'ie6' | 'safari';

interface RetroBrowserFrameProps {
  url: string;
  title: string;
  year?: number | string;
  children: React.ReactNode;
  onNavigatePrev?: () => void;
  onNavigateNext?: () => void;
  canPrev?: boolean;
  canNext?: boolean;
  className?: string;
}

export const RetroBrowserFrame: React.FC<RetroBrowserFrameProps> = ({
  url,
  title,
  year,
  children,
  onNavigatePrev,
  onNavigateNext,
  canPrev = false,
  canNext = false,
  className
}) => {
  const [skin, setSkin] = useState<BrowserSkin>('netscape');
  const [crtEnabled, setCrtEnabled] = useState(false);
  const [ditherEnabled, setDitherEnabled] = useState(false);
  const [isThrobberSpinning, setIsThrobberSpinning] = useState(false);

  const handleActionClick = (cb?: () => void) => {
    try {
      relicAudio.playKeyClick();
    } catch {}
    if (cb) cb();
  };

  const handleRefresh = () => {
    try {
      relicAudio.playKeyClick();
    } catch {}
    setIsThrobberSpinning(true);
    setTimeout(() => setIsThrobberSpinning(false), 1200);
  };

  return (
    <div className={cn("flex flex-col rounded-2xl overflow-hidden border border-white/20 shadow-2xl transition-all duration-300", className)}>
      
      {/* Top Controls Toolbar: Skin Selection & CRT toggles */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2 bg-zinc-950 border-b border-white/10 text-xs font-mono">
        <div className="flex items-center gap-1.5">
          <span className="text-zinc-500 font-bold uppercase tracking-wider mr-1">CHASSIS:</span>
          
          <button
            onClick={() => { handleActionClick(); setSkin('netscape'); }}
            className={cn(
              "px-2.5 py-1 rounded text-[11px] font-bold transition-colors cursor-pointer",
              skin === 'netscape' 
                ? "bg-amber-500 text-black shadow-sm" 
                : "bg-zinc-800 text-zinc-400 hover:text-white"
            )}
          >
            Netscape 4.08
          </button>

          <button
            onClick={() => { handleActionClick(); setSkin('ie6'); }}
            className={cn(
              "px-2.5 py-1 rounded text-[11px] font-bold transition-colors cursor-pointer",
              skin === 'ie6' 
                ? "bg-blue-600 text-white shadow-sm" 
                : "bg-zinc-800 text-zinc-400 hover:text-white"
            )}
          >
            Internet Explorer 6.0
          </button>

          <button
            onClick={() => { handleActionClick(); setSkin('safari'); }}
            className={cn(
              "px-2.5 py-1 rounded text-[11px] font-bold transition-colors cursor-pointer",
              skin === 'safari' 
                ? "bg-zinc-200 text-zinc-900 shadow-sm" 
                : "bg-zinc-800 text-zinc-400 hover:text-white"
            )}
          >
            Aqua Safari 1.0
          </button>
        </div>

        {/* CRT Scanline & Vintage Shader Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => { handleActionClick(); setCrtEnabled(prev => !prev); }}
            className={cn(
              "flex items-center gap-1 px-2.5 py-1 rounded text-[11px] transition-colors cursor-pointer border",
              crtEnabled
                ? "bg-emerald-950/80 border-emerald-500/50 text-emerald-400"
                : "bg-zinc-900 border-white/10 text-zinc-400 hover:text-zinc-200"
            )}
            title="Toggle CRT Phosphor Scanline Simulation"
          >
            <Tv className="w-3 h-3" />
            <span>CRT Scanlines: {crtEnabled ? 'ON' : 'OFF'}</span>
          </button>

          <button
            onClick={() => { handleActionClick(); setDitherEnabled(prev => !prev); }}
            className={cn(
              "flex items-center gap-1 px-2.5 py-1 rounded text-[11px] transition-colors cursor-pointer border",
              ditherEnabled
                ? "bg-amber-950/80 border-amber-500/50 text-amber-400"
                : "bg-zinc-900 border-white/10 text-zinc-400 hover:text-zinc-200"
            )}
            title="Toggle 256-Color Retro Dither Filter"
          >
            <Sliders className="w-3 h-3" />
            <span>256-Color: {ditherEnabled ? 'ON' : 'OFF'}</span>
          </button>
        </div>
      </div>

      {/* ================= NETSCAPE NAVIGATOR 4.08 SKIN ================= */}
      {skin === 'netscape' && (
        <div className="bg-[#c0c0c0] text-black font-sans select-none border-b-2 border-zinc-700">
          {/* Netscape Title Bar */}
          <div className="flex items-center justify-between px-3 py-1.5 bg-gradient-to-r from-[#000080] to-[#1084d0] text-white text-xs font-bold tracking-wide">
            <div className="flex items-center gap-1.5 truncate">
              <span className="w-3.5 h-3.5 rounded-full bg-amber-400 text-black flex items-center justify-center font-serif text-[10px] font-black">N</span>
              <span className="truncate">{title} - Netscape Communicator</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-4 h-4 bg-[#c0c0c0] text-black font-mono font-bold text-[10px] flex items-center justify-center border-t border-l border-white border-b-black border-r-black">_</span>
              <span className="w-4 h-4 bg-[#c0c0c0] text-black font-mono font-bold text-[10px] flex items-center justify-center border-t border-l border-white border-b-black border-r-black">□</span>
              <span className="w-4 h-4 bg-[#c0c0c0] text-black font-mono font-bold text-[10px] flex items-center justify-center border-t border-l border-white border-b-black border-r-black">✕</span>
            </div>
          </div>

          {/* Netscape Menu Bar */}
          <div className="flex items-center gap-3 px-3 py-0.5 text-xs text-zinc-800 border-b border-zinc-400 bg-[#c0c0c0]">
            <span className="hover:bg-blue-800 hover:text-white px-1 cursor-default"><u>F</u>ile</span>
            <span className="hover:bg-blue-800 hover:text-white px-1 cursor-default"><u>E</u>dit</span>
            <span className="hover:bg-blue-800 hover:text-white px-1 cursor-default"><u>V</u>iew</span>
            <span className="hover:bg-blue-800 hover:text-white px-1 cursor-default"><u>G</u>o</span>
            <span className="hover:bg-blue-800 hover:text-white px-1 cursor-default"><u>C</u>ommunicator</span>
            <span className="hover:bg-blue-800 hover:text-white px-1 cursor-default"><u>H</u>elp</span>
          </div>

          {/* Netscape 3D Beveled Action Bar */}
          <div className="flex items-center justify-between px-2 py-1.5 bg-[#c0c0c0] border-b border-zinc-500">
            <div className="flex items-center gap-1">
              <button
                onClick={() => handleActionClick(onNavigatePrev)}
                disabled={!canPrev}
                className="flex items-center gap-1 px-2 py-1 bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-zinc-700 active:border-t-zinc-700 active:border-l-zinc-700 active:border-b-white active:border-r-white text-[11px] font-bold disabled:opacity-40 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-zinc-800" />
                <span>Back</span>
              </button>

              <button
                onClick={() => handleActionClick(onNavigateNext)}
                disabled={!canNext}
                className="flex items-center gap-1 px-2 py-1 bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-zinc-700 active:border-t-zinc-700 active:border-l-zinc-700 active:border-b-white active:border-r-white text-[11px] font-bold disabled:opacity-40 cursor-pointer"
              >
                <ArrowRight className="w-3.5 h-3.5 text-zinc-800" />
                <span>Forward</span>
              </button>

              <button
                onClick={handleRefresh}
                className="flex items-center gap-1 px-2 py-1 bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-zinc-700 active:border-t-zinc-700 active:border-l-zinc-700 active:border-b-white active:border-r-white text-[11px] font-bold cursor-pointer"
              >
                <RotateCw className="w-3.5 h-3.5 text-zinc-800" />
                <span>Reload</span>
              </button>

              <button
                onClick={() => handleActionClick()}
                className="flex items-center gap-1 px-2 py-1 bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-zinc-700 text-[11px] font-bold cursor-pointer"
              >
                <Home className="w-3.5 h-3.5 text-zinc-800" />
                <span>Home</span>
              </button>

              <button
                onClick={() => handleActionClick()}
                className="flex items-center gap-1 px-2 py-1 bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-zinc-700 text-[11px] font-bold cursor-pointer"
              >
                <Search className="w-3.5 h-3.5 text-zinc-800" />
                <span>Net Search</span>
              </button>
            </div>

            {/* Netscape Animated Meteor Throbber */}
            <div 
              onClick={handleRefresh}
              className={cn(
                "w-9 h-9 bg-black border-2 border-zinc-600 flex flex-col items-center justify-center cursor-pointer relative overflow-hidden select-none",
                isThrobberSpinning && "animate-pulse"
              )}
              title="Netscape Throbber (Click to Reload)"
            >
              <div className="text-teal-400 font-serif font-black text-xl leading-none">N</div>
              <div className={cn("w-1 h-1 rounded-full bg-amber-400 absolute top-1 right-1", isThrobberSpinning && "animate-ping")} />
            </div>
          </div>

          {/* Netscape Location Bar */}
          <div className="flex items-center gap-2 px-2.5 py-1.5 bg-[#c0c0c0] text-xs">
            <span className="font-bold text-zinc-800 shrink-0">Location:</span>
            <div className="flex-1 bg-white border-2 border-zinc-700 px-2 py-1 text-zinc-900 font-mono text-[11px] truncate shadow-inner">
              {url}
            </div>
            <span className="text-[10px] font-bold bg-[#c0c0c0] px-2 py-0.5 border border-zinc-600">
              What's Related
            </span>
          </div>
        </div>
      )}

      {/* ================= INTERNET EXPLORER 6.0 SKIN ================= */}
      {skin === 'ie6' && (
        <div className="bg-[#ece9d8] text-black font-sans select-none border-b-2 border-[#7ba2e7]">
          {/* Windows XP Blue Gradient Title Bar */}
          <div className="flex items-center justify-between px-3 py-1 bg-gradient-to-r from-[#0055ea] via-[#0862f6] to-[#0055ea] text-white text-xs font-bold shadow">
            <div className="flex items-center gap-1.5 truncate">
              <span className="w-3.5 h-3.5 rounded bg-blue-400 flex items-center justify-center text-[10px] font-black">e</span>
              <span className="truncate">{title} - Microsoft Internet Explorer</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-4 h-4 bg-[#ece9d8] text-black font-bold text-[10px] flex items-center justify-center rounded-sm">_</span>
              <span className="w-4 h-4 bg-[#ece9d8] text-black font-bold text-[10px] flex items-center justify-center rounded-sm">□</span>
              <span className="w-4 h-4 bg-[#c82200] text-white font-bold text-[10px] flex items-center justify-center rounded-sm">✕</span>
            </div>
          </div>

          {/* IE6 Standard Buttons Toolbar */}
          <div className="flex items-center justify-between px-2 py-1 bg-[#ece9d8] border-b border-zinc-300">
            <div className="flex items-center gap-1 text-xs">
              <button
                onClick={() => handleActionClick(onNavigatePrev)}
                disabled={!canPrev}
                className="flex items-center gap-1 px-2 py-1 rounded hover:bg-[#d8e4f8] disabled:opacity-40 cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">←</div>
                <span className="font-semibold text-zinc-800">Back</span>
              </button>

              <button
                onClick={() => handleActionClick(onNavigateNext)}
                disabled={!canNext}
                className="flex items-center gap-1 px-2 py-1 rounded hover:bg-[#d8e4f8] disabled:opacity-40 cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">→</div>
              </button>

              <button
                onClick={handleRefresh}
                className="flex items-center gap-1 px-2 py-1 rounded hover:bg-[#d8e4f8] cursor-pointer"
              >
                <RotateCw className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold text-zinc-800">Refresh</span>
              </button>

              <button
                onClick={() => handleActionClick()}
                className="flex items-center gap-1 px-2 py-1 rounded hover:bg-[#d8e4f8] cursor-pointer"
              >
                <Home className="w-4 h-4 text-blue-600" />
                <span className="font-semibold text-zinc-800">Home</span>
              </button>

              <button
                onClick={() => handleActionClick()}
                className="flex items-center gap-1 px-2 py-1 rounded hover:bg-[#d8e4f8] cursor-pointer"
              >
                <Star className="w-4 h-4 text-amber-500" />
                <span className="font-semibold text-zinc-800">Favorites</span>
              </button>
            </div>

            {/* IE Rotating Globe Throbber */}
            <div 
              onClick={handleRefresh}
              className={cn(
                "w-8 h-8 rounded-full border border-blue-400 bg-gradient-to-tr from-blue-700 via-sky-400 to-indigo-600 flex items-center justify-center cursor-pointer shadow-inner",
                isThrobberSpinning && "animate-spin"
              )}
              title="IE Throbber"
            >
              <Globe className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* IE Address Bar */}
          <div className="flex items-center gap-2 px-3 py-1 bg-[#ece9d8] text-xs">
            <span className="text-zinc-600 font-semibold shrink-0">Address:</span>
            <div className="flex-1 bg-white border border-[#7ba2e7] px-2 py-1 text-zinc-900 font-mono text-[11px] rounded-sm truncate shadow-inner">
              {url}
            </div>
            <button
              onClick={handleRefresh}
              className="flex items-center gap-1 px-2.5 py-0.5 rounded bg-gradient-to-b from-emerald-400 to-emerald-600 text-white font-bold text-[11px] shadow-sm hover:from-emerald-300 hover:to-emerald-500 cursor-pointer"
            >
              <span>Go</span>
              <span>→</span>
            </button>
          </div>
        </div>
      )}

      {/* ================= AQUA SAFARI 1.0 (MAC OS X JAGUAR) SKIN ================= */}
      {skin === 'safari' && (
        <div className="bg-gradient-to-b from-[#e8e8e8] to-[#cecece] text-black font-sans select-none border-b border-zinc-400">
          {/* Aqua Gel Window Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-b from-[#f2f2f2] to-[#d6d6d6] border-b border-zinc-300">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 border border-red-700 shadow-sm cursor-pointer" />
              <span className="w-3 h-3 rounded-full bg-amber-400 border border-amber-600 shadow-sm cursor-pointer" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 border border-emerald-700 shadow-sm cursor-pointer" />
            </div>

            <span className="text-xs font-semibold text-zinc-700 truncate max-w-sm">
              {title}
            </span>

            <div className="w-10" />
          </div>

          {/* Brushed Aluminum Safari Toolbar */}
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="flex items-center gap-1">
              <button
                onClick={() => handleActionClick(onNavigatePrev)}
                disabled={!canPrev}
                className="w-7 h-7 rounded-full bg-zinc-200 border border-zinc-400 hover:bg-zinc-100 flex items-center justify-center text-zinc-700 disabled:opacity-30 cursor-pointer shadow-sm"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => handleActionClick(onNavigateNext)}
                disabled={!canNext}
                className="w-7 h-7 rounded-full bg-zinc-200 border border-zinc-400 hover:bg-zinc-100 flex items-center justify-center text-zinc-700 disabled:opacity-30 cursor-pointer shadow-sm"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Aqua Pill Address Bar */}
            <div className="flex-1 flex items-center justify-between px-3 py-1 bg-white rounded-full border border-zinc-400 shadow-inner text-xs font-mono text-zinc-800 truncate">
              <span className="truncate">{url}</span>
              <button
                onClick={handleRefresh}
                className="p-1 hover:text-blue-600 cursor-pointer"
              >
                <RotateCw className={cn("w-3 h-3 text-zinc-500", isThrobberSpinning && "animate-spin")} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= VIEWPORT CANVAS CONTAINER ================= */}
      <div className="relative bg-zinc-950 overflow-hidden min-h-[220px]">
        {/* The Viewport Content */}
        <div className={cn(
          "relative z-10 transition-all",
          ditherEnabled && "contrast-125 saturate-150 hue-rotate-15"
        )}>
          {children}
        </div>

        {/* CRT Scanline Overlay */}
        {crtEnabled && (
          <div 
            className="absolute inset-0 pointer-events-none z-20 mix-blend-overlay opacity-40 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.6)_50%)] bg-[length:100%_4px]" 
          />
        )}

        {/* Vintage Phosphor Vignette Effect when CRT is active */}
        {crtEnabled && (
          <div 
            className="absolute inset-0 pointer-events-none z-20 shadow-[inset_0_0_80px_rgba(0,0,0,0.85)]" 
          />
        )}
      </div>

      {/* ================= BOTTOM RETRO STATUS BAR ================= */}
      <div className="flex items-center justify-between px-3 py-1 bg-[#d4d0c8] text-black text-[11px] font-mono border-t border-zinc-400 select-none">
        <div className="flex items-center gap-2 truncate">
          <Lock className="w-3 h-3 text-amber-700" />
          <span className="truncate">Document: Done (Historical Capture {year ? `• ${year}` : ''})</span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="border-l border-zinc-400 pl-2 text-zinc-600">Speed: 56.6 Kbps</span>
          <span className="border-l border-zinc-400 pl-2 text-emerald-800 font-bold">● ONLINE</span>
        </div>
      </div>

    </div>
  );
};
