import React from 'react';
import Link from 'next/link';
import { graveyardDb } from '@/lib/db';
import { StatusBadge } from '@/components/StatusBadge';
import { EntityLogo } from '@/components/EntityLogo';
import { Skull, ExternalLink, ArrowRight, Calendar, FileText } from 'lucide-react';

export const revalidate = 0;

export default function RecentlyBuriedPage() {
  const buriedList = graveyardDb.getAllEntities()
    .filter(e => e.status === 'CONFIRMED_DEAD' || e.status === 'ZOMBIE')
    .sort((a, b) => (b.death_year || 2024) - (a.death_year || 2024));

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-10 font-sans">
      {/* Header */}
      <div className="space-y-4 border-b border-white/10 pb-8">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-red-950/40 border border-red-500/30 text-red-400 text-xs font-mono font-bold tracking-wider uppercase">
          <Skull className="w-4 h-4" />
          <span>Historical Cemetery Ledger</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
          Recently Buried
        </h1>
        <p className="text-base sm:text-lg text-zinc-300 font-sans max-w-3xl leading-relaxed">
          Chronological record of verified closures and shutdowns across the internet, sorted by most recent date of demise.
        </p>
      </div>

      {/* Ledger Stream */}
      <div className="space-y-5">
        {buriedList.map((entity) => {
          const primarySource = entity.evidence?.[0];

          return (
            <div
              key={entity.id}
              className="p-6 sm:p-7 rounded-2xl bg-zinc-900/90 border border-white/10 hover:border-red-500/40 transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-6 group shadow-xl"
            >
              {/* Left Details */}
              <div className="flex items-start gap-4 flex-1 min-w-0">
                <EntityLogo entity={entity} size="lg" className="border border-white/10 shadow-md shrink-0 mt-1" />
                <div className="space-y-3 flex-1 min-w-0">
                  <div className="flex items-center gap-3.5 flex-wrap">
                    <Link href={`/grave/${entity.slug}`} className="hover:underline">
                      <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-red-300 transition-colors">
                        {entity.name}
                      </h3>
                    </Link>
                    <StatusBadge status={entity.status} size="sm" />
                    <span className="text-xs sm:text-sm font-mono font-bold text-zinc-400 uppercase">
                      {entity.category}
                    </span>
                  </div>

                {/* Death Date & Lifespan */}
                <div className="flex items-center gap-4 text-xs sm:text-sm font-mono text-zinc-300 flex-wrap">
                  <div className="flex items-center gap-2 text-red-400 font-bold">
                    <Calendar className="w-4 h-4 shrink-0" />
                    <span>Death Date: {entity.death_date || `${entity.death_year}`}</span>
                  </div>
                  <span className="text-zinc-500">•</span>
                  <span>Lifespan: <strong className="text-white">{entity.lifespan}</strong></span>
                </div>

                {/* What happened */}
                <p className="text-sm sm:text-base text-zinc-200 leading-relaxed max-w-3xl font-sans">
                  {entity.cause_of_death_summary}
                </p>

                {/* Verified Source */}
                {primarySource && (
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-zinc-300 pt-1 flex-wrap">
                    <FileText className="w-4 h-4 text-zinc-400 shrink-0" />
                    <span>Primary Evidence: {primarySource.source_name} ({primarySource.source_type})</span>
                    {primarySource.url && (
                      <a
                        href={primarySource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-400 hover:text-red-300 font-bold hover:underline inline-flex items-center gap-1 ml-1"
                      >
                        [Verify Source] <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>

              {/* Action Button */}
              <div className="shrink-0 flex items-center md:self-center">
                <Link
                  href={`/grave/${entity.slug}`}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-white/10 text-white font-sans text-sm font-bold group-hover:border-red-500/40 transition-all shadow-md shrink-0"
                >
                  <span>View Memorial</span>
                  <ArrowRight className="w-4 h-4 text-red-400 group-hover:translate-x-1 transition-transform shrink-0" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
