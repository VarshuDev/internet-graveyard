"use client";

import React from 'react';
import { GraveEntity, EvidenceItem } from '@/types/graveyard';
import { calculateEntityConfidence } from '@/lib/discovery/scanner';
import { X, ExternalLink, ShieldCheck, CheckCircle2, AlertCircle, FileText } from 'lucide-react';

interface EvidenceInspectorModalProps {
  entity: GraveEntity;
  isOpen: boolean;
  onClose: () => void;
}

export const EvidenceInspectorModal: React.FC<EvidenceInspectorModalProps> = ({
  entity,
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const { score, breakdown, statusGrade } = calculateEntityConfidence(entity.evidence || []);

  const getReliabilityBadge = (rel: string) => {
    switch (rel) {
      case 'VERY_HIGH':
        return <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">VERY HIGH</span>;
      case 'HIGH':
        return <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">HIGH</span>;
      case 'MEDIUM':
        return <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">MEDIUM</span>;
      default:
        return <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-zinc-600/30 text-zinc-300 border border-zinc-500/30">LOW</span>;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded-2xl bg-zinc-900 border border-white/15 shadow-2xl overflow-hidden font-sans text-zinc-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-zinc-850">
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-red-500/15 border border-red-500/30 text-red-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Archaeological Evidence Dossier
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 font-mono mt-0.5">
                Entity: <span className="text-white font-bold">{entity.name}</span> ({entity.lifespan})
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Status & Confidence Banner */}
          <div className="p-5 rounded-xl bg-zinc-800/80 border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold">
                  Assigned Forensic Status
                </div>
                <div className="text-xl font-bold text-white mt-1 flex items-center gap-2.5">
                  <span>{entity.status.replace(/_/g, ' ')}</span>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-red-500/15 text-red-300 border border-red-500/30 font-bold">
                    Grade: {statusGrade}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold">
                  Confidence Score
                </div>
                <div className="text-3xl font-mono font-black text-white mt-0.5">
                  {score}%
                </div>
              </div>
            </div>

            {/* Score Breakdown Bars */}
            <div className="space-y-2 pt-3 border-t border-white/10">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold">Signal Contribution Weights:</div>
              {breakdown.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs sm:text-sm font-mono py-0.5">
                  <span className="text-zinc-200 truncate max-w-[70%]">{item.label}</span>
                  <span className="text-emerald-400 font-bold">+{item.points} pts</span>
                </div>
              ))}
            </div>
          </div>

          {/* Evidence List */}
          <div className="space-y-3">
            <h3 className="text-xs sm:text-sm font-mono uppercase tracking-wider text-zinc-200 font-bold flex items-center gap-2">
              <FileText className="w-4 h-4 text-red-400" />
              <span>Verified Evidence Ledger ({entity.evidence?.length || 0} Records)</span>
            </h3>

            {(!entity.evidence || entity.evidence.length === 0) ? (
              <div className="p-6 rounded-xl border border-white/10 bg-zinc-800/50 text-center text-sm text-zinc-400 font-mono">
                No individual evidentiary items registered yet for this grave.
              </div>
            ) : (
              <div className="space-y-3">
                {entity.evidence.map((item) => (
                  <div
                    key={item.id}
                    className="p-5 rounded-xl border border-white/10 bg-zinc-800/60 hover:border-white/20 transition-colors space-y-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="font-bold text-base text-white">
                          {item.source_name}
                        </div>
                        <div className="text-xs sm:text-sm text-zinc-300 font-mono mt-0.5">
                          {item.source_type} • Captured on {item.timestamp}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        {getReliabilityBadge(item.reliability)}
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-white/10 text-sm sm:text-base text-zinc-100 font-sans italic leading-relaxed">
                      "{item.extracted_claim}"
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono font-semibold">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Cryptographically & Archival Verified</span>
                      </div>
                      {item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono font-bold text-red-400 hover:text-red-300 flex items-center gap-1.5 hover:underline"
                        >
                          Inspect Source <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Methodological Transparency Note */}
          <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-500/10 text-xs sm:text-sm text-amber-100/90 leading-relaxed font-mono">
            <span className="font-bold text-amber-300">ARCHAEOLOGY PRINCIPLE:</span> Never claim a service is dead merely because an endpoint failed. Every status in Internet Graveyard is derived from verifiable primary documentation, corporate SEC filings, court injunctions, official social disclosures, or permanent DNS disconnections.
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-end px-6 py-4 border-t border-white/10 bg-zinc-850">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-sans font-bold transition-colors cursor-pointer"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
