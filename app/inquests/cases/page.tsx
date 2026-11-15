"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { getAllColdCases, ColdCase } from '@/data/cold-cases';
import { soundFx } from '@/lib/audio/soundFx';
import { 
  FileSearch, 
  ShieldAlert, 
  Search, 
  FolderLock, 
  ArrowRight, 
  Skull, 
  FileText, 
  ExternalLink,
  Sparkles,
  Terminal,
  Activity,
  History
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ColdCaseDirectoryPage() {
  const allCases = getAllColdCases();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const cats = new Set(allCases.map(c => c.category));
    return ['All', ...Array.from(cats)];
  }, [allCases]);

  const filteredCases = useMemo(() => {
    return allCases.filter(c => {
      const matchesSearch = 
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.victim.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.suspects.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCat = filterCategory === 'All' || c.category === filterCategory;
      return matchesSearch && matchesCat;
    });
  }, [allCases, searchQuery, filterCategory]);

  return (
    <div className="min-h-screen pt-24 pb-16 sm:pt-28 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Detective Division Hero Header */}
        <div className="relative rounded-3xl bg-zinc-900/90 border border-red-500/30 p-8 sm:p-12 backdrop-blur-md overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-950/60 border border-red-500/30 text-red-400 text-xs font-mono font-bold tracking-wider shrink-0">
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>FORENSIC INVESTIGATIONS • COLD CASE SQUAD</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight drop-shadow-md">
              Forensic Cold Case Inquests
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 font-sans leading-relaxed">
              Step into the shoes of the lead archival detective. Review unredacted internal memoranda, examine financial death spirals, interrogate digital spirits, and submit your official inquest verdict on the greatest corporate executions in internet history.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <FolderLock className="w-3.5 h-3.5 text-red-400 shrink-0" />
                <span>{allCases.length} Declassified Inquest Dossiers</span>
              </span>
              <span>•</span>
              <span className="text-zinc-300">Interactive Witness Interrogations Active</span>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 rounded-2xl bg-zinc-950/80 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search case, victim, or suspect..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900 border border-white/10 rounded-xl pl-9 pr-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-red-500/60"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  soundFx.playClick(750);
                  setFilterCategory(cat);
                }}
                className={cn(
                  "px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all shrink-0 cursor-pointer border",
                  filterCategory === cat
                    ? "bg-red-950/60 border-red-500/60 text-red-300 font-bold"
                    : "bg-zinc-900/60 border-white/5 text-zinc-400 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCases.map((caseItem) => (
            <div
              key={caseItem.id}
              className="rounded-3xl bg-zinc-900/90 border border-white/10 hover:border-red-500/50 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between space-y-6 group shadow-lg hover:shadow-[0_16px_40px_rgba(239,68,68,0.12)] relative overflow-hidden"
            >
              <div className="space-y-4">
                {/* File Header Telemetry */}
                <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-red-400 font-bold tracking-wider">
                      CASE FILE #{caseItem.id.toUpperCase().replace(/-/g, '_')}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-zinc-800 border border-white/10 text-[10px] text-zinc-300 uppercase font-bold">
                    {caseItem.classificationStatus.replace('_', ' ')}
                  </span>
                </div>

                {/* Case Title & Subtitle */}
                <div className="space-y-1.5">
                  <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
                    VICTIM: <span className="text-white font-bold">{caseItem.victim}</span> ({caseItem.victimLifespan})
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-black text-white group-hover:text-red-400 transition-colors">
                    {caseItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 line-clamp-2 leading-relaxed">
                    {caseItem.executiveSummary}
                  </p>
                </div>

                {/* Prime Suspects Box */}
                <div className="p-3.5 rounded-2xl bg-zinc-950/70 border border-white/5 space-y-2">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold">
                    Primary Suspects Under Inquest:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {caseItem.suspects.map((suspect, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-lg bg-zinc-900 border border-white/10 text-[11px] text-zinc-300 font-sans"
                      >
                        {suspect}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Evidence Metrics */}
                <div className="flex items-center gap-4 text-xs font-mono text-zinc-400 pt-1">
                  <span className="flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-amber-400" />
                    <span>{caseItem.exhibits.length} Classified Exhibits</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Ghost Testimony Available</span>
                  </span>
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                {caseItem.slug ? (
                  <Link
                    href={`/grave/${caseItem.slug}`}
                    onClick={() => soundFx.playClick(750)}
                    className="text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                  >
                    View Grave Memorial →
                  </Link>
                ) : <div />}

                <Link
                  href={`/inquests/cases/${caseItem.id}`}
                  onClick={() => soundFx.playClick(850)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-950/60 hover:bg-red-900/80 border border-red-500/40 text-red-200 hover:text-white text-xs font-mono font-bold transition-all shadow-md group/btn cursor-pointer"
                >
                  <span>Open Inquest Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
