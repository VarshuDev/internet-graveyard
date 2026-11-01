"use client";

import React, { useState } from 'react';
import { GraveEntity } from '@/types/graveyard';
import { EntityLogo } from '@/components/EntityLogo';
import { 
  X, 
  Printer, 
  Share2, 
  Check, 
  Copy, 
  FileText, 
  ShieldCheck, 
  Skull,
  Award,
  ExternalLink,
  Download,
  Loader2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { downloadCertificatePNG } from '@/lib/export/certificateExporter';

interface DeathCertificateModalProps {
  entity: GraveEntity;
  isOpen: boolean;
  onClose: () => void;
}

export const DeathCertificateModal: React.FC<DeathCertificateModalProps> = ({
  entity,
  isOpen,
  onClose
}) => {
  const [copied, setCopied] = useState(false);
  const [exportingBaroque, setExportingBaroque] = useState(false);
  const [exportingClassified, setExportingClassified] = useState(false);

  const handleDownloadBaroque = async () => {
    if (exportingBaroque) return;
    setExportingBaroque(true);
    try {
      await downloadCertificatePNG(entity, 'baroque');
    } catch (e) {
      console.error(e);
    } finally {
      setExportingBaroque(false);
    }
  };

  const handleDownloadClassified = async () => {
    if (exportingClassified) return;
    setExportingClassified(true);
    try {
      await downloadCertificatePNG(entity, 'classified');
    } catch (e) {
      console.error(e);
    } finally {
      setExportingClassified(false);
    }
  };

  if (!isOpen) return null;

  // Generate an official looking case number
  const hashSum = entity.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const caseNumber = `MORT-${entity.death_year || 2024}-${entity.slug.toUpperCase().slice(0, 6)}-${(hashSum % 8999) + 1000}`;

  const formattedInquestDate = React.useMemo(() => {
    if (!entity.verified_at) return 'December 2024';
    try {
      const d = new Date(entity.verified_at);
      if (isNaN(d.getTime())) return entity.verified_at;
      return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    } catch {
      return entity.verified_at;
    }
  }, [entity.verified_at]);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const handleShareX = () => {
    const text = encodeURIComponent(
      `Official Death Certificate for ${entity.name} (${entity.lifespan})\n\n` +
      `Cause of Demise: ${entity.cause_category}\n` +
      `Preserved forever in the Internet Graveyard archive:\n`
    );
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Main Modal Box */}
      <div className="relative w-full max-w-3xl my-8 rounded-2xl bg-zinc-950 border-2 border-amber-500/40 shadow-[0_0_60px_rgba(245,158,11,0.15)] overflow-hidden z-10 text-zinc-100 flex flex-col font-sans print:border-none print:shadow-none print:bg-white print:text-black">
        
        {/* Top Control Bar (Hidden on Print) */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-3.5 bg-zinc-900/95 border-b border-white/10 print:hidden">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-amber-400">
            <FileText className="w-4 h-4" />
            <span className="hidden sm:inline">OFFICIAL CORONER INQUEST RECORD</span>
            <span className="sm:hidden">CORONER RECORD</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleDownloadBaroque}
              disabled={exportingBaroque}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-xs font-mono text-amber-300 hover:text-amber-200 transition-colors cursor-pointer border border-amber-500/40"
              title="Download Baroque Death Certificate PNG (2400x1600)"
            >
              {exportingBaroque ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Download className="w-3.5 h-3.5" />}
              <span>Certificate PNG</span>
            </button>

            <button
              onClick={handleDownloadClassified}
              disabled={exportingClassified}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-950/40 hover:bg-red-900/50 text-xs font-mono text-red-300 hover:text-red-200 transition-colors cursor-pointer border border-red-500/40"
              title="Download Classified Autopsy Dossier PNG (2400x1600)"
            >
              {exportingClassified ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Download className="w-3.5 h-3.5" />}
              <span>Dossier PNG</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-zinc-200 hover:text-white transition-colors cursor-pointer border border-white/10"
              title="Print Certificate"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Print / PDF</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-zinc-200 hover:text-white transition-colors cursor-pointer border border-white/10"
              title="Copy link"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden md:inline">{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              onClick={handleShareX}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-zinc-300 hover:text-white transition-colors cursor-pointer border border-white/10"
              title="Share on X"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Share</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer ml-1"
              title="Close Certificate"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* The Certificate Body */}
        <div className="relative overflow-hidden p-6 sm:p-10 space-y-6 bg-gradient-to-b from-zinc-900/50 via-zinc-950 to-zinc-950 print:bg-white print:text-black">
          
          {/* Subtle Archival Seal Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] print:opacity-[0.06] pointer-events-none select-none -z-0">
            <div className="w-[32rem] h-[32rem] rounded-full border-[14px] border-dashed border-amber-500 flex items-center justify-center print:border-black">
              <Award className="w-72 h-72 text-amber-500 print:text-black" />
            </div>
          </div>

          {/* Certificate Header Stamp */}
          <div className="relative z-10 text-center space-y-2 border-b-2 border-amber-500/30 pb-6 print:border-black">
            <div className="flex items-center justify-center gap-2 text-xs font-mono tracking-widest text-amber-400/90 uppercase font-bold print:text-zinc-700">
              <span>Department of Digital Mortality & Archival Forensics</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-serif tracking-tight text-white uppercase font-bold print:text-black">
              Certificate of Digital Demise
            </h2>

            <div className="flex items-center justify-center gap-3 text-xs font-mono text-zinc-400 print:text-zinc-600">
              <span>CASE ID: <strong className="text-zinc-200 print:text-black">{caseNumber}</strong></span>
              <span>•</span>
              <span>CLASSIFICATION: <strong className="text-amber-400 uppercase print:text-black">{entity.status.replace(/_/g, ' ')}</strong></span>
            </div>
          </div>

          {/* Identity Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center p-5 rounded-xl bg-zinc-900/60 border border-white/10 print:bg-zinc-100 print:border-black/20">
            <div className="sm:col-span-2 flex items-center gap-4">
              <EntityLogo entity={entity} size="lg" className="border border-white/20 print:border-black/30" />
              <div>
                <div className="text-xs font-mono uppercase text-zinc-400 tracking-wider">Deceased Entity</div>
                <div className="text-2xl sm:text-3xl font-black text-white print:text-black">{entity.name}</div>
                <div className="text-xs font-mono text-zinc-400 mt-0.5">{entity.primary_domain}</div>
              </div>
            </div>

            <div className="space-y-1.5 text-xs font-mono border-t sm:border-t-0 sm:border-l border-white/10 sm:pl-6 pt-3 sm:pt-0 print:border-black/20">
              <div>
                <span className="text-zinc-400">Lifespan: </span>
                <span className="text-white font-bold print:text-black">{entity.lifespan}</span>
              </div>
              <div>
                <span className="text-zinc-400">Category: </span>
                <span className="text-zinc-200 print:text-black">{entity.category}</span>
              </div>
              <div>
                <span className="text-zinc-400">Origin: </span>
                <span className="text-zinc-200 print:text-black">{entity.country || 'Global Internet'}</span>
              </div>
              <div>
                <span className="text-zinc-400">Peak Scale: </span>
                <span className="text-amber-300 font-semibold print:text-black">{entity.popularity_peak || entity.peak_users || 'Multi-million scale'}</span>
              </div>
            </div>
          </div>

          {/* Autopsy & Cause of Demise Findings */}
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-red-400 flex items-center gap-2 print:text-red-700">
              <Skull className="w-4 h-4" />
              <span>Coroner's Autopsy Findings & Pathological Cause</span>
            </div>

            <div className="p-5 rounded-xl bg-red-950/20 border border-red-500/30 space-y-3 print:bg-red-50 print:border-red-300">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-red-400 font-bold uppercase">Primary Kill Factor:</span>
                <span className="px-2.5 py-0.5 rounded bg-red-500/20 border border-red-500/40 text-red-300 font-bold print:text-red-800">
                  {entity.cause_category}
                </span>
              </div>

              <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-sans print:text-black">
                {entity.cause_of_death_summary}
              </p>

              {entity.status_reason && (
                <div className="text-xs text-zinc-400 font-sans pt-2.5 border-t border-red-500/20 print:border-red-200 print:text-zinc-700">
                  <strong className="text-zinc-300 font-mono print:text-black">Forensic Note: </strong> 
                  {entity.status_reason}
                </div>
              )}
            </div>
          </div>

          {/* Final Moments Chronology Snippet */}
          {entity.final_moments && (
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase text-zinc-400 font-semibold">
                Recorded Time of Cessation & Final Disconnection
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed bg-zinc-900/40 p-4 rounded-xl border border-white/8 print:bg-zinc-50 print:text-black print:border-black/10">
                {entity.final_moments}
              </p>
            </div>
          )}

          {/* Verification Seal and Pathologist Signature */}
          <div className="pt-6 border-t-2 border-amber-500/30 grid grid-cols-1 sm:grid-cols-2 gap-6 items-end print:border-black">
            
            {/* Digital Wax Seal */}
            <div className="flex items-center gap-4">
              <div className="relative w-18 h-18 rounded-full border-2 border-dashed border-amber-500/60 bg-amber-950/30 flex flex-col items-center justify-center text-center p-1 shadow-[0_0_20px_rgba(245,158,11,0.2)] print:border-black print:bg-transparent">
                <Award className="w-5 h-5 text-amber-400 print:text-black" />
                <span className="text-[8px] font-mono font-bold text-amber-300 tracking-tighter uppercase mt-0.5 print:text-black">
                  VERIFIED DECEASED
                </span>
                <span className="text-[7px] font-mono text-zinc-400 print:text-black">
                  {entity.confidence_score}% PROVEN
                </span>
              </div>
              
              <div className="space-y-0.5 text-xs font-mono">
                <div className="text-zinc-200 font-bold uppercase print:text-black">
                  Internet Graveyard Archive
                </div>
                <div className="text-zinc-400 print:text-zinc-600">
                  Permanent Registry Record #{hashSum}
                </div>
                <div className="text-emerald-400 flex items-center gap-1 text-[11px] print:text-emerald-800">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Tamper-Proof Archival Ledger</span>
                </div>
              </div>
            </div>

            {/* Pathologist Inquest Signature */}
            <div className="text-right space-y-1 font-mono text-xs">
              <div className="font-serif italic text-lg sm:text-xl text-amber-200 print:text-black font-semibold pr-2">
                A. Turing, Ph.D.
              </div>
              <div className="border-t border-zinc-700 pt-1 text-zinc-400 print:border-black print:text-zinc-600">
                Chief Digital Pathologist & Coroner
              </div>
              <div className="text-[11px] text-zinc-500 print:text-zinc-700">
                Inquest Finalized: {formattedInquestDate}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
