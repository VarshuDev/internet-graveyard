"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Flame, 
  Clock, 
  AlertTriangle, 
  Sparkles, 
  Search, 
  PlusCircle, 
  Menu, 
  X, 
  Shuffle, 
  Shield, 
  Database,
  Skull,
  Activity,
  Volume2,
  VolumeX,
  Scale,
  Landmark,
  Newspaper,
  ArrowDownToLine,
  Tv,
  Command,
  History,
  ChevronDown,
  Layers,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { soundFx } from '@/lib/audio/soundFx';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [scanlinesActive, setScanlinesActive] = useState(true);
  const [stats, setStats] = useState({
    total_archived: 1027,
    confirmed_dead: 547,
    active: 434,
    zombie_services: 36,
    at_risk: 10
  });
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMuted(soundFx.getMuted());
  }, []);

  // Fetch live stats dynamically on mount and route changes
  useEffect(() => {
    fetch('/api/stats')
      .then(res => res.json())
      .then(data => {
        if (data && data.total_archived) {
          setStats({
            total_archived: data.total_archived,
            confirmed_dead: data.confirmed_dead,
            active: Math.max(0, data.total_archived - data.confirmed_dead - data.zombie_services),
            zombie_services: data.zombie_services,
            at_risk: data.at_risk
          });
        }
      })
      .catch(() => {});
  }, [pathname]);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
  }, [pathname]);

  // Handle outside click & escape for More dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMoreDropdownOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMoreDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleToggleSound = () => {
    const nextMuted = soundFx.toggleMute();
    setIsMuted(nextMuted);
    if (!nextMuted) {
      soundFx.playClick(850);
    }
  };

  const handleToggleScanlines = () => {
    soundFx.playClick(700);
    setScanlinesActive((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.remove('scanlines-disabled');
      } else {
        document.documentElement.classList.add('scanlines-disabled');
      }
      return next;
    });
  };

  const openSearch = () => {
    soundFx.playClick(900);
    window.dispatchEvent(new CustomEvent('open-command-palette'));
  };

  // Primary links visible on standard desktop screens (fits with ample room on 1024px - 1440px)
  const primaryLinks = [
    { href: '/explore', label: 'Explore', icon: Database },
    { href: '/time-warp', label: 'Time Warp', icon: History, isNew: true },
    { href: '/grounds', label: 'Cemetery Map', icon: Landmark, hideOnMd: true },
    { href: '/lookup', label: 'Vital Signs', icon: Activity },
    { href: '/dying-now', label: 'Dying Now', icon: AlertTriangle, highlight: true }
  ];

  // Secondary labs & archives accessible via "More ▾" dropdown on desktop
  const secondaryLinks = [
    { href: '/grounds', label: 'Cemetery Grounds', desc: '3D Isometric Cyber-Necropolis', icon: Landmark },
    { href: '/compare', label: 'Autopsy Rivals', desc: 'Pioneer vs. Successor Post-Mortems', icon: Scale },
    { href: '/sounds', label: 'Sound Vault', desc: 'Synthesized 56k & Relic Audio', icon: Volume2 },
    { href: '/gazette', label: 'The Sunset Gazette', desc: 'Broadsheet Archaeological Dispatches', icon: Newspaper },
    { href: '/timeline', label: 'Decade Timeline', desc: '1990 — 2026 Web History Chronicle', icon: Clock },
    { href: '/export', label: 'Open Data Hub', desc: 'JSON, RFC-4180 CSV & BibTeX', icon: ArrowDownToLine },
    { href: '/submit', label: 'Submit Relic', desc: 'Community Archaeology Queue', icon: PlusCircle }
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-zinc-950/85 backdrop-blur-xl transition-all duration-200">
      {/* Top retro-futuristic telemetry ticker bar */}
      <div className="flex items-center justify-between px-3 sm:px-6 py-1.5 bg-zinc-950/90 border-b border-white/[0.06] text-[11px] font-mono text-zinc-300 select-none overflow-hidden">
        {/* Left window telemetry indicator */}
        <div className="flex items-center gap-2 min-w-0">
          <div className="hidden sm:flex items-center gap-1 mr-1 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/60 border border-white/20 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/60 border border-white/20 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-red-600/60 border border-red-500/40 inline-block" />
          </div>
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="tracking-wider font-semibold text-zinc-200 truncate">
            <span className="hidden sm:inline">SYS.ARCHIVE // {stats.total_archived.toLocaleString()} SITES INDEXED</span>
            <span className="sm:hidden">SYS.ARCHIVE // {stats.total_archived.toLocaleString()} SITES</span>
          </span>
          <span className="hidden md:inline-block text-zinc-600 shrink-0">•</span>
          <span className="hidden md:inline-block text-zinc-400 shrink-0 whitespace-nowrap">
            <span className="text-red-400 font-bold">{stats.confirmed_dead.toLocaleString()}</span> EXTINCT • <span className="text-emerald-400 font-bold">{stats.active.toLocaleString()}</span> ACTIVE • <span className="text-purple-400 font-bold">{stats.zombie_services.toLocaleString()}</span> ZOMBIES • <span className="text-amber-400 font-bold">{stats.at_risk.toLocaleString()}</span> AT RISK
          </span>
        </div>

        {/* Right controls: Sound FX, CRT Scanlines, and Data Export */}
        <div className="flex items-center gap-1.5 sm:gap-3 text-xs font-mono shrink-0">
          {/* Sound FX Toggle Button */}
          <button
            onClick={handleToggleSound}
            title={isMuted ? "Enable Synthesized Retro Sound" : "Mute Synthesized Sound"}
            aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            className={cn(
              "flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-md border text-[11px] font-mono font-medium transition-all duration-150 cursor-pointer shrink-0 focus-visible:ring-2 focus-visible:ring-amber-500/60",
              isMuted 
                ? "bg-zinc-900 border-white/10 text-zinc-400 hover:text-white hover:border-white/20" 
                : "bg-emerald-950/40 border-emerald-500/40 text-emerald-400 font-semibold shadow-[0_0_10px_rgba(16,185,129,0.2)]"
            )}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 shrink-0" /> : <Volume2 className="w-3.5 h-3.5 animate-pulse shrink-0" />}
            <span className="hidden sm:inline">{isMuted ? "AUDIO OFF" : "AUDIO ON"}</span>
          </button>

          {/* CRT Scanline Toggle Button */}
          <button
            onClick={handleToggleScanlines}
            title="Toggle CRT Scanline Overlay"
            aria-label="Toggle CRT Scanline Overlay"
            className={cn(
              "hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[11px] font-mono font-medium transition-all duration-150 cursor-pointer shrink-0 focus-visible:ring-2 focus-visible:ring-amber-500/60",
              scanlinesActive
                ? "bg-cyan-950/40 border-cyan-500/40 text-cyan-300 font-semibold shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                : "bg-zinc-900 border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
            )}
          >
            <Tv className="w-3.5 h-3.5 shrink-0" />
            <span>CRT {scanlinesActive ? "ON" : "OFF"}</span>
          </button>

          <span className="hidden sm:inline text-white/20">|</span>

          <Link 
            href="/export" 
            className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 transition-colors shrink-0 px-1 py-0.5"
            title="Open Archaeological Data Hub"
          >
            <ArrowDownToLine className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden sm:inline">DATA HUB</span>
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 flex items-center justify-between h-16 sm:h-18">
        {/* Brand Logo */}
        <Link 
          href="/" 
          onClick={() => soundFx.playClick(900)}
          className="flex items-center gap-2.5 sm:gap-3 group shrink-0 focus-visible:ring-2 focus-visible:ring-amber-500/60 rounded-xl"
        >
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-zinc-900 border border-white/15 group-hover:border-red-500/70 flex items-center justify-center text-red-500 group-hover:text-red-400 transition-all shadow-md group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] shrink-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent pointer-events-none" />
            <span className="font-serif font-black text-lg sm:text-xl leading-none flex items-center justify-center -translate-y-[1px]">†</span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-serif font-bold text-sm sm:text-base xl:text-lg tracking-tight text-white uppercase group-hover:text-red-400 transition-colors drop-shadow-sm whitespace-nowrap">
              INTERNET GRAVEYARD
            </span>
            <span className="text-[10px] font-mono tracking-wider text-zinc-400 uppercase -mt-0.5 hidden md:block font-medium truncate">
              Web Archaeology & Relic Necropolis
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links (Fits 100% comfortably on 1024px, 1280px, 1366px, 1440px+) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 font-sans text-xs font-semibold">
          {primaryLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => soundFx.playClick(750)}
                className={cn(
                  'flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-lg transition-all duration-150 whitespace-nowrap text-xs focus-visible:ring-2 focus-visible:ring-amber-500/60',
                  link.hideOnMd && 'hidden xl:flex',
                  isActive
                    ? 'bg-white/12 text-white font-bold shadow-sm border border-white/10'
                    : 'text-zinc-300 hover:text-white hover:bg-white/8',
                  link.highlight && !isActive && 'text-amber-400 hover:text-amber-300',
                  link.isNew && !isActive && 'text-emerald-400 hover:text-emerald-300'
                )}
              >
                <Icon className={cn('w-3.5 h-3.5 shrink-0', 
                  link.highlight ? 'text-amber-400' : 
                  link.isNew ? 'text-emerald-400' : 
                  'text-zinc-400'
                )} />
                <span>{link.label}</span>
                {link.isNew && (
                  <span className="ml-0.5 px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-400 text-[9px] font-mono font-bold uppercase tracking-wider">
                    NEW
                  </span>
                )}
              </Link>
            );
          })}

          {/* More Labs & Archives Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => {
                soundFx.playClick(700);
                setMoreDropdownOpen(!moreDropdownOpen);
              }}
              className={cn(
                'flex items-center gap-1 px-2.5 xl:px-3 py-1.5 rounded-lg transition-all duration-150 whitespace-nowrap text-xs font-semibold cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-500/60',
                moreDropdownOpen 
                  ? 'bg-zinc-800 text-white border border-white/15 shadow-sm'
                  : 'text-zinc-300 hover:text-white hover:bg-white/8'
              )}
              aria-expanded={moreDropdownOpen}
              aria-haspopup="true"
            >
              <Layers className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
              <span>More</span>
              <ChevronDown className={cn('w-3 h-3 text-zinc-400 transition-transform duration-200', moreDropdownOpen && 'rotate-180')} />
            </button>

            {moreDropdownOpen && (
              <div className="absolute right-0 mt-2 w-72 rounded-2xl bg-zinc-950/98 border border-white/15 p-2 shadow-2xl backdrop-blur-2xl z-50 animate-in fade-in-0 zoom-in-95 duration-150">
                <div className="px-2.5 py-1.5 text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold border-b border-white/10 mb-1">
                  Forensic Labs & Archives
                </div>
                <div className="space-y-0.5">
                  {secondaryLinks.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => {
                          soundFx.playClick(750);
                          setMoreDropdownOpen(false);
                        }}
                        className={cn(
                          'flex items-start gap-2.5 p-2 rounded-xl transition-all text-xs group cursor-pointer',
                          isActive
                            ? 'bg-white/15 text-white font-bold border border-white/10'
                            : 'text-zinc-300 hover:text-white hover:bg-white/8'
                        )}
                      >
                        <div className="p-1.5 rounded-lg bg-zinc-900 border border-white/10 group-hover:border-white/20 shrink-0 mt-0.5">
                          <Icon className="w-3.5 h-3.5 text-amber-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-zinc-100 group-hover:text-white flex items-center justify-between">
                            <span>{item.label}</span>
                            <ArrowRight className="w-3 h-3 text-zinc-500 group-hover:text-zinc-300 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                          </div>
                          <div className="text-[11px] text-zinc-400 font-sans truncate mt-0.5">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Global Search Button & Random Button */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Quick Cmd+K Search Launcher */}
          <button
            onClick={openSearch}
            className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-white/15 hover:border-emerald-500/50 hover:bg-zinc-850 text-zinc-300 hover:text-white font-mono text-xs transition-all shadow-sm group shrink-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-500/60"
            title="Search Archive (Cmd+K / Ctrl+K)"
            aria-label="Open command palette search"
          >
            <Search className="w-3.5 h-3.5 text-emerald-400 group-hover:animate-pulse shrink-0" />
            <span className="hidden xl:inline text-zinc-400">Search Archive...</span>
            <span className="hidden sm:inline xl:hidden text-zinc-400">Search...</span>
            <span className="px-1.5 py-0.5 rounded bg-zinc-800 border border-white/10 text-[10px] text-zinc-400 font-bold group-hover:text-emerald-300 shrink-0">
              ⌘K
            </span>
          </button>

          {/* Random Memorial Button (hidden on phone, visible on tablet & desktop) */}
          <Link
            href="/random"
            onClick={() => soundFx.playClick(800)}
            className="hidden sm:flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-white/15 hover:border-red-500/50 hover:bg-zinc-850 text-white font-sans text-xs font-semibold transition-all shadow-sm group shrink-0 focus-visible:ring-2 focus-visible:ring-amber-500/60"
            title="Teleport to a Random Memorial"
          >
            <Shuffle className="w-3.5 h-3.5 text-red-400 group-hover:rotate-180 transition-transform duration-500 shrink-0" />
            <span className="hidden md:inline">Random</span>
          </Link>

          {/* Mobile Menu Button (visible on < 1024px) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-zinc-300 hover:text-white hover:bg-white/8 border border-white/15 bg-zinc-900/60 shrink-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-500/60 min-w-[40px] min-h-[40px] flex items-center justify-center"
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 shrink-0" /> : <Menu className="w-5 h-5 shrink-0" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (100% responsive, scrollable on any device height, no overflow) */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-8 border-t border-white/[0.08] bg-zinc-950/98 backdrop-blur-2xl space-y-4 font-sans text-sm animate-in slide-in-from-top-2 duration-200 max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain">
          {/* Mobile Full Search Input Button */}
          <div className="pt-1">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openSearch();
              }}
              className="w-full flex items-center justify-between px-3.5 py-3 rounded-xl bg-zinc-900 border border-white/15 hover:border-emerald-500/50 text-zinc-300 font-mono text-xs cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-500/60 transition-colors"
            >
              <span className="flex items-center gap-2.5 min-w-0">
                <Search className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="truncate text-zinc-300">Search {stats.total_archived.toLocaleString()} Relics...</span>
              </span>
              <span className="px-2 py-0.5 rounded bg-zinc-800 border border-white/10 text-[10px] text-zinc-400 shrink-0 font-bold">
                ⌘K
              </span>
            </button>
          </div>

          {/* Section 1: Core Memorials */}
          <div className="space-y-1.5">
            <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold px-1">
              Core Memorials
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { href: '/explore', label: 'Explore All', icon: Database, color: 'text-blue-400' },
                { href: '/time-warp', label: 'Time Warp', icon: History, color: 'text-emerald-400', badge: 'NEW' },
                { href: '/grounds', label: 'Cemetery Map', icon: Landmark, color: 'text-purple-400' },
                { href: '/dying-now', label: 'Dying Now', icon: AlertTriangle, color: 'text-amber-400', badge: 'WATCH' }
              ].map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      soundFx.playClick(750);
                      setMobileMenuOpen(false);
                    }}
                    className={cn(
                      'flex items-center justify-between p-3 rounded-xl transition-all min-h-[48px] border',
                      isActive
                        ? 'bg-white/15 text-white font-bold border-white/20'
                        : 'bg-zinc-900/80 border-white/10 text-zinc-300 hover:text-white hover:bg-zinc-850'
                    )}
                  >
                    <span className="flex items-center gap-2 min-w-0">
                      <Icon className={cn('w-4 h-4 shrink-0', item.color)} />
                      <span className="text-xs font-semibold truncate">{item.label}</span>
                    </span>
                    {item.badge && (
                      <span className="px-1.5 py-0.5 rounded bg-white/10 text-[9px] font-mono font-bold text-zinc-300">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Section 2: Forensic Labs & Audio */}
          <div className="space-y-1.5">
            <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold px-1">
              Forensic Labs & Media
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { href: '/lookup', label: 'Vital Signs', icon: Activity },
                { href: '/compare', label: 'Autopsy Rivals', icon: Scale },
                { href: '/sounds', label: 'Sound Vault', icon: Volume2 },
                { href: '/gazette', label: 'Sunset Gazette', icon: Newspaper },
                { href: '/timeline', label: 'Decade History', icon: Clock }
              ].map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      soundFx.playClick(750);
                      setMobileMenuOpen(false);
                    }}
                    className={cn(
                      'flex items-center gap-2 p-2.5 rounded-xl transition-all min-h-[44px] border',
                      isActive
                        ? 'bg-white/15 text-white font-bold border-white/20'
                        : 'bg-zinc-900/60 border-white/10 text-zinc-300 hover:text-white hover:bg-zinc-850'
                    )}
                  >
                    <Icon className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span className="text-xs font-medium truncate">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Section 3: Community & Archives */}
          <div className="space-y-1.5">
            <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold px-1">
              Operations & Data
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/export"
                onClick={() => {
                  soundFx.playClick(750);
                  setMobileMenuOpen(false);
                }}
                className={cn(
                  'flex items-center gap-2 p-2.5 rounded-xl transition-all min-h-[44px] border',
                  pathname === '/export'
                    ? 'bg-white/15 text-white font-bold border-white/20'
                    : 'bg-zinc-900/60 border-white/10 text-zinc-300 hover:text-white hover:bg-zinc-850'
                )}
              >
                <ArrowDownToLine className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="text-xs font-medium truncate">Open Data Hub</span>
              </Link>

              <Link
                href="/submit"
                onClick={() => {
                  soundFx.playClick(750);
                  setMobileMenuOpen(false);
                }}
                className={cn(
                  'flex items-center gap-2 p-2.5 rounded-xl transition-all min-h-[44px] border',
                  pathname === '/submit'
                    ? 'bg-white/15 text-white font-bold border-white/20'
                    : 'bg-zinc-900/60 border-white/10 text-zinc-300 hover:text-white hover:bg-zinc-850'
                )}
              >
                <PlusCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="text-xs font-medium truncate">Submit Relic</span>
              </Link>
            </div>
          </div>

          {/* Section 4: Quick Controls (Random Grave, Sound, CRT) */}
          <div className="pt-2 border-t border-white/10 space-y-2">
            <Link
              href="/random"
              onClick={() => {
                soundFx.playClick(800);
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-red-950/70 border border-red-500/40 text-red-200 hover:text-white font-bold text-xs shadow-md transition-colors min-h-[48px]"
            >
              <Shuffle className="w-4 h-4 shrink-0 text-red-400" />
              <span>Teleport to Random Memorial</span>
            </Link>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleToggleSound}
                className="px-3 py-2.5 rounded-xl bg-zinc-900 border border-white/15 text-zinc-300 hover:text-white text-xs font-mono flex items-center justify-center gap-2 min-h-[44px] cursor-pointer"
              >
                {isMuted ? <VolumeX className="w-4 h-4 shrink-0 text-zinc-500" /> : <Volume2 className="w-4 h-4 shrink-0 text-emerald-400" />}
                <span>{isMuted ? "Sound: OFF" : "Sound: ON"}</span>
              </button>

              <button
                onClick={handleToggleScanlines}
                className="px-3 py-2.5 rounded-xl bg-zinc-900 border border-white/15 text-zinc-300 hover:text-white text-xs font-mono flex items-center justify-center gap-2 min-h-[44px] cursor-pointer"
              >
                <Tv className={cn("w-4 h-4 shrink-0", scanlinesActive ? "text-cyan-400" : "text-zinc-500")} />
                <span>{scanlinesActive ? "CRT: ON" : "CRT: OFF"}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
