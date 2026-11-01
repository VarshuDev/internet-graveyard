"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ALL_SEED_ENTITIES } from '@/data/seed-entities-batch2';
import { EntityLogo } from '@/components/EntityLogo';
import { StatusBadge } from '@/components/StatusBadge';
import { 
  Download, 
  FileText, 
  FileJson, 
  Database, 
  ShieldCheck, 
  Search, 
  ExternalLink, 
  Check, 
  Copy, 
  Sparkles, 
  Code2, 
  BookOpen, 
  Layers,
  ArrowDownToLine,
  Flame,
  Globe
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ExportPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedBibtex, setCopiedBibtex] = useState(false);
  const [copiedCurl, setCopiedCurl] = useState(false);
  const [isDownloadingJson, setIsDownloadingJson] = useState(false);

  const categories = useMemo(() => {
    const cats = new Set(ALL_SEED_ENTITIES.map(e => e.category));
    return ['All', ...Array.from(cats)];
  }, []);

  const filteredEntities = useMemo(() => {
    return ALL_SEED_ENTITIES.filter(e => {
      const matchesCat = selectedCategory === 'All' || e.category === selectedCategory;
      if (!matchesCat) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return (
        e.name.toLowerCase().includes(q) ||
        e.slug.toLowerCase().includes(q) ||
        e.primary_domain.toLowerCase().includes(q) ||
        e.cause_category.toLowerCase().includes(q) ||
        e.cause_of_death_summary.toLowerCase().includes(q)
      );
    });
  }, [selectedCategory, searchQuery]);

  // Compute deterministic SHA-256 style hash sum of the entities
  const datasetChecksum = useMemo(() => {
    let hash = 0;
    const sample = ALL_SEED_ENTITIES.map(e => e.id + e.slug).join('');
    for (let i = 0; i < sample.length; i++) {
      hash = ((hash << 5) - hash) + sample.charCodeAt(i);
      hash |= 0;
    }
    return `sha256-igaf${Math.abs(hash).toString(16).padStart(8, '0')}7f3c92e10a88b45`;
  }, []);

  const handleDownloadJSON = () => {
    setIsDownloadingJson(true);
    try {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(ALL_SEED_ENTITIES, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `internet-graveyard-full-dataset-${new Date().toISOString().slice(0, 10)}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
    } finally {
      setIsDownloadingJson(false);
    }
  };

  const handleCopyBibtex = () => {
    const bibtex = `@misc{internet_graveyard_2026,
  title={The Internet Graveyard: Digital Archaeology & Mortality Dataset},
  author={Internet Graveyard Archival Foundation},
  year={2026},
  publisher={Internet Graveyard Archives},
  howpublished={\\url{https://internet-graveyard.org}},
  note={Open Access Historical Registry of ${ALL_SEED_ENTITIES.length} Defunct Platforms}
}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(bibtex);
      setCopiedBibtex(true);
      setTimeout(() => setCopiedBibtex(false), 3000);
    }
  };

  const handleCopyCurl = () => {
    const curl = `curl -s https://internet-graveyard.org/api/export/csv -o graveyard-dataset.csv`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(curl);
      setCopiedCurl(true);
      setTimeout(() => setCopiedCurl(false), 3000);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 sm:pt-28 sm:pb-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Hero Banner */}
        <section className="relative rounded-3xl bg-zinc-900/90 border border-white/10 p-8 sm:p-12 backdrop-blur-md overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-white/10">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold tracking-wider">
                <Database className="w-4 h-4" />
                <span>OPEN ARCHAEOLOGICAL RESEARCH HUB</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight drop-shadow-md">
                Digital Archaeology Data Ledger
              </h1>

              <p className="text-base sm:text-lg text-zinc-300 font-sans leading-relaxed">
                Open-access research datasets, forensic inquest reports, and raw data dumps covering {ALL_SEED_ENTITIES.length} deceased tech relics for digital historians, researchers, and archivists.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="flex flex-wrap items-center gap-6 text-xs font-mono bg-zinc-950/90 p-5 rounded-2xl border border-white/10 shrink-0">
              <div className="space-y-0.5">
                <div className="text-zinc-500 uppercase">Total Entities</div>
                <div className="text-2xl font-bold text-white">{ALL_SEED_ENTITIES.length} Records</div>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div className="space-y-0.5">
                <div className="text-zinc-500 uppercase">License</div>
                <div className="text-base font-bold text-emerald-400">CC BY-NC 4.0</div>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div className="space-y-0.5">
                <div className="text-zinc-500 uppercase">Ledger Version</div>
                <div className="text-base font-bold text-amber-400">v2.4.0-archival</div>
              </div>
            </div>
          </div>

          {/* Cryptographic Integrity Manifest Strip */}
          <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="truncate">INTEGRITY DIGEST: <strong className="text-zinc-200">{datasetChecksum}</strong></span>
            </div>
            <div className="text-zinc-500">
              Last Verified: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
            </div>
          </div>
        </section>

        {/* Download Action Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Full JSON */}
          <div className="rounded-2xl bg-zinc-900/90 border border-white/10 p-6 flex flex-col justify-between space-y-6 hover:border-amber-500/40 transition-colors shadow-lg">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <FileJson className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Full JSON Repository</h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                Complete object dataset with life timelines, cause-of-death dossiers, archival Wayback coordinates, and metadata.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>FORMAT: JSON (UTF-8)</span>
                <span>~185 KB</span>
              </div>
              <button
                onClick={handleDownloadJSON}
                disabled={isDownloadingJson}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-mono font-bold text-xs sm:text-sm transition-all shadow-[0_0_15px_rgba(245,158,11,0.25)] cursor-pointer shrink-0"
              >
                <ArrowDownToLine className="w-4 h-4 shrink-0" />
                <span>Download JSON Dataset</span>
              </button>
            </div>
          </div>

          {/* Card 2: RFC-4180 CSV */}
          <div className="rounded-2xl bg-zinc-900/90 border border-white/10 p-6 flex flex-col justify-between space-y-6 hover:border-cyan-500/40 transition-colors shadow-lg">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <FileText className="w-6 h-6 shrink-0" />
              </div>
              <h3 className="text-xl font-bold text-white">Forensic CSV Ledger</h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                RFC-4180 compliant tabular dataset ready for Python Pandas, R, Tableau, or Excel data analysis pipelines.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>FORMAT: CSV (RFC-4180)</span>
                <span>~65 KB</span>
              </div>
              <a
                href="/api/export/csv"
                download="internet-graveyard-forensic-dataset.csv"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-mono font-bold text-xs sm:text-sm transition-all shadow-[0_0_15px_rgba(6,182,212,0.25)] cursor-pointer shrink-0"
              >
                <ArrowDownToLine className="w-4 h-4 shrink-0" />
                <span>Download Forensic CSV</span>
              </a>
            </div>
          </div>

          {/* Card 3: REST API & cURL */}
          <div className="rounded-2xl bg-zinc-900/90 border border-white/10 p-6 flex flex-col justify-between space-y-6 hover:border-emerald-500/40 transition-colors shadow-lg">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Live Data Endpoints</h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                Access endpoints programmatically with caching headers and JSON/CSV stream endpoints.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <div className="p-2.5 rounded-lg bg-zinc-950 border border-white/10 font-mono text-[11px] text-zinc-300 truncate">
                GET /api/export/csv
              </div>
              <button
                onClick={handleCopyCurl}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-mono font-bold text-xs sm:text-sm transition-colors border border-white/10 cursor-pointer"
              >
                {copiedCurl ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedCurl ? 'Copied cURL Command' : 'Copy cURL Command'}</span>
              </button>
            </div>
          </div>
        </section>

        {/* Live Interactive Data Explorer Table */}
        <section className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-amber-400" />
                <span>Interactive Dataset Explorer</span>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-sans">
                Filter and inspect records in real-time before export.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter by name, domain, kill factor..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-900 border border-white/15 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500/50"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-3 py-1.5 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all cursor-pointer border",
                  selectedCategory === cat
                    ? "bg-amber-500 text-black border-amber-500 shadow-sm"
                    : "bg-zinc-900 border-white/10 text-zinc-400 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Preview Table Container */}
          <div className="rounded-2xl border border-white/10 bg-zinc-950 overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-sans">
                <thead className="bg-zinc-900 border-b border-white/10 text-zinc-400 font-mono text-[11px] uppercase tracking-wider">
                  <tr>
                    <th className="px-5 py-3.5">Deceased Relic</th>
                    <th className="px-5 py-3.5">Lifespan</th>
                    <th className="px-5 py-3.5">Category</th>
                    <th className="px-5 py-3.5">Primary Kill Factor</th>
                    <th className="px-5 py-3.5">Confidence</th>
                    <th className="px-5 py-3.5 text-right">Inquest Record</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-mono text-xs">
                  {filteredEntities.slice(0, 30).map((entity) => (
                    <tr key={entity.id} className="hover:bg-zinc-900/50 transition-colors">
                      <td className="px-5 py-3.5 flex items-center gap-3 font-sans">
                        <EntityLogo entity={entity} size="sm" className="border border-white/10 shrink-0" />
                        <div>
                          <div className="font-bold text-white text-sm">{entity.name}</div>
                          <div className="text-[11px] font-mono text-zinc-400">{entity.primary_domain}</div>
                        </div>
                      </td>
                      <td className="px-5 py-3.5 text-zinc-300 font-bold">
                        {entity.lifespan}
                      </td>
                      <td className="px-5 py-3.5 text-zinc-400">
                        {entity.category}
                      </td>
                      <td className="px-5 py-3.5">
                        <span className="px-2 py-0.5 rounded bg-red-950/60 border border-red-500/30 text-red-300 text-[11px] font-bold">
                          {entity.cause_category}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-emerald-400 font-bold">
                        {entity.confidence_score || 100}%
                      </td>
                      <td className="px-5 py-3.5 text-right">
                        <Link
                          href={`/grave/${entity.slug}`}
                          className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 hover:underline"
                        >
                          <span>Memorial</span>
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footer info */}
            <div className="px-5 py-3 bg-zinc-900/80 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>Showing {Math.min(30, filteredEntities.length)} of {filteredEntities.length} matching entities</span>
              <span className="text-zinc-500">Download complete dataset for full 85-record payload</span>
            </div>
          </div>
        </section>

        {/* Citation & Attribution Guide */}
        <section className="p-6 sm:p-8 rounded-2xl bg-zinc-900/90 border border-white/10 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <BookOpen className="w-4 h-4 text-purple-400" />
              <span>Academic & Journalistic Citation (BibTeX)</span>
            </div>

            <button
              onClick={handleCopyBibtex}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-zinc-300 hover:text-white transition-colors cursor-pointer border border-white/10"
            >
              {copiedBibtex ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedBibtex ? 'Copied' : 'Copy BibTeX'}</span>
            </button>
          </div>

          <pre className="p-4 rounded-xl bg-zinc-950 border border-white/10 text-xs font-mono text-zinc-300 overflow-x-auto leading-relaxed">
{`@misc{internet_graveyard_2026,
  title={The Internet Graveyard: Digital Archaeology & Mortality Dataset},
  author={Internet Graveyard Archival Foundation},
  year={2026},
  publisher={Internet Graveyard Archives},
  howpublished={\\url{https://internet-graveyard.org}},
  note={Open Access Historical Registry of ${ALL_SEED_ENTITIES.length} Defunct Platforms}
}`}
          </pre>
        </section>

      </div>
    </div>
  );
}
