"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { getColdCaseById, getAllColdCases, ColdCase, ColdCaseExhibit, CaseVerdictOption } from '@/data/cold-cases';
import { soundFx } from '@/lib/audio/soundFx';
import { 
  ShieldAlert, 
  ArrowLeft, 
  ArrowRight, 
  FileText, 
  Terminal, 
  CheckCircle2, 
  AlertTriangle, 
  Award, 
  Share2, 
  Check, 
  FolderLock,
  Skull,
  Activity,
  Layers,
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function CaseDossierPage() {
  const params = useParams();
  const caseId = params?.caseId as string;
  const coldCase = getColdCaseById(caseId);

  const [activeTab, setActiveTab] = useState<'exhibits' | 'interrogation' | 'verdict'>('exhibits');
  const [selectedExhibitId, setSelectedExhibitId] = useState<string>('');
  const [interrogationHistory, setInterrogationHistory] = useState<Array<{ prompt: string; response: string }>>([]);
  const [selectedVerdictId, setSelectedVerdictId] = useState<string>('');
  const [submittedVerdict, setSubmittedVerdict] = useState<CaseVerdictOption | null>(null);
  const [copiedShare, setCopiedShare] = useState(false);

  useEffect(() => {
    if (coldCase && coldCase.exhibits.length > 0) {
      setSelectedExhibitId(coldCase.exhibits[0].id);
    }
  }, [coldCase]);

  if (!coldCase) {
    return (
      <div className="min-h-screen pt-32 pb-24 text-center space-y-4">
        <h1 className="text-3xl font-bold text-white font-serif">Case File Not Found</h1>
        <p className="text-zinc-400">The requested inquest dossier does not exist in archival records.</p>
        <Link href="/inquests/cases" className="text-red-400 hover:underline">
          Return to Case Directory →
        </Link>
      </div>
    );
  }

  const selectedExhibit = coldCase.exhibits.find(e => e.id === selectedExhibitId) || coldCase.exhibits[0];

  const handleAskGhost = (prompt: string, response: string) => {
    soundFx.playKeyClick();
    setInterrogationHistory(prev => [...prev, { prompt, response }]);
  };

  const handleSubmitVerdict = (verdict: CaseVerdictOption) => {
    soundFx.playChime(660);
    setSubmittedVerdict(verdict);
  };

  const handleShare = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 sm:pt-28 sm:pb-24 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center justify-between text-xs font-mono">
          <Link
            href="/inquests/cases"
            onClick={() => soundFx.playClick(700)}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Inquest Directory</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span className="text-red-400 font-bold uppercase tracking-wider">
              OFFICIAL INQUEST ACTIVE
            </span>
          </div>
        </div>

        {/* Hero Case Dossier Header */}
        <div className="rounded-3xl bg-zinc-900/90 border border-red-500/40 p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 flex-wrap text-xs font-mono">
                <span className="px-2.5 py-1 rounded bg-red-950/80 border border-red-500/50 text-red-300 font-bold">
                  CASE #{coldCase.id.toUpperCase().replace(/-/g, '_')}
                </span>
                <span className="text-zinc-500">•</span>
                <span className="text-zinc-300 font-semibold uppercase">{coldCase.category}</span>
                <span className="text-zinc-500">•</span>
                <span className="text-zinc-400">STATUS: {coldCase.classificationStatus}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
                {coldCase.title}
              </h1>
              <p className="text-sm sm:text-base text-zinc-300 max-w-3xl leading-relaxed">
                {coldCase.subtitle}
              </p>
            </div>

            {/* Quick Share / Memorial Link */}
            <div className="flex items-center gap-2.5 shrink-0">
              {coldCase.slug && (
                <Link
                  href={`/grave/${coldCase.slug}`}
                  className="px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-white/15 text-xs font-mono text-zinc-200 transition-colors"
                >
                  Visit Memorial
                </Link>
              )}
              <button
                onClick={handleShare}
                className="p-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-white/15 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                title="Share Inquest Dossier Link"
              >
                {copiedShare ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Crime Scene Overview & Suspects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="md:col-span-2 space-y-2">
              <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-bold">
                The Crime Scene & Execution Vector:
              </div>
              <p className="text-zinc-300 leading-relaxed font-sans">
                {coldCase.theCrimeScene}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-2">
              <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-bold">
                Suspects Under Investigation:
              </div>
              <div className="space-y-1">
                {coldCase.suspects.map((s, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-zinc-300 text-xs font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3-Tab Inquest Workflow Navigation */}
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <div className="flex items-center gap-2">
            {[
              { id: 'exhibits', label: '1. Evidence Locker', icon: FileText, count: coldCase.exhibits.length },
              { id: 'interrogation', label: '2. Ghost Interrogation', icon: Terminal, count: coldCase.ghostDialogues.length },
              { id: 'verdict', label: '3. Submit Inquest Verdict', icon: Award, count: coldCase.verdictOptions.length }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    soundFx.playClick(750);
                    setActiveTab(tab.id as 'exhibits' | 'interrogation' | 'verdict');
                  }}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer border select-none",
                    isActive
                      ? "bg-red-950/60 border-red-500/60 text-red-200 shadow-md"
                      : "bg-zinc-900/60 border-white/5 text-zinc-400 hover:text-white"
                  )}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* TAB 1: EVIDENCE LOCKER */}
        {activeTab === 'exhibits' && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Exhibit selector list (4 cols) */}
            <div className="md:col-span-4 space-y-2">
              <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 font-bold px-1">
                Declassified Evidence Items:
              </div>
              <div className="space-y-2">
                {coldCase.exhibits.map((exhibit) => {
                  const isSelected = exhibit.id === selectedExhibit.id;
                  return (
                    <button
                      key={exhibit.id}
                      onClick={() => {
                        soundFx.playClick(800);
                        setSelectedExhibitId(exhibit.id);
                      }}
                      className={cn(
                        "w-full p-4 rounded-2xl border text-left transition-all cursor-pointer space-y-1.5",
                        isSelected
                          ? "bg-red-950/40 border-red-500/50 shadow-md text-white"
                          : "bg-zinc-900/60 border-white/10 hover:border-white/20 text-zinc-400"
                      )}
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <span className="uppercase px-2 py-0.5 rounded bg-zinc-800 border border-white/10 text-zinc-300 font-bold">
                          {exhibit.type}
                        </span>
                        <span className="text-zinc-500">{exhibit.date}</span>
                      </div>
                      <div className="font-bold text-xs font-serif text-white line-clamp-1">
                        {exhibit.title}
                      </div>
                      <p className="text-[11px] text-zinc-400 line-clamp-2 font-sans">
                        {exhibit.snippet}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Exhibit Detail Viewer (8 cols) */}
            <div className="md:col-span-8 rounded-3xl bg-zinc-950/90 border border-white/15 p-6 sm:p-8 space-y-4 relative">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold">
                    EXHIBIT FILE #{selectedExhibit.id.toUpperCase()} // CLASSIFIED
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-black text-white mt-1">
                    {selectedExhibit.title}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-zinc-900 border border-white/15 text-xs font-mono text-zinc-300">
                  {selectedExhibit.date}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5 font-mono text-xs text-amber-300/90 leading-relaxed italic">
                "{selectedExhibit.snippet}"
              </div>

              <div className="text-sm sm:text-base text-zinc-200 leading-relaxed font-sans pt-2 space-y-4 whitespace-pre-line">
                {selectedExhibit.content}
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-500">
                  Source Verification: Declassified via Internet Graveyard Historical Archives
                </span>
                <button
                  onClick={() => {
                    soundFx.playClick(750);
                    setActiveTab('interrogation');
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-red-400 hover:text-red-300 font-bold"
                >
                  <span>Proceed to Ghost Interrogation →</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: GHOST INTERROGATION */}
        {activeTab === 'interrogation' && (
          <div className="rounded-3xl bg-zinc-950/95 border-2 border-emerald-500/40 p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-400">
                  <Terminal className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Spirit Necro-Link: {coldCase.victim} Spirit Terminal
                  </div>
                  <div className="text-xs text-zinc-400">
                    Direct simulated witness dialogue based on authenticated engineer post-mortems and depositions.
                  </div>
                </div>
              </div>
            </div>

            {/* Prompt Selector Pills */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-bold">
                Select Forensic Deposition Prompt to Question Witness:
              </div>
              <div className="flex flex-wrap gap-2">
                {coldCase.ghostDialogues.map((dialogue, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAskGhost(dialogue.prompt, dialogue.response)}
                    className="px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-850 border border-emerald-500/30 hover:border-emerald-500/70 text-xs font-mono text-emerald-300 hover:text-white transition-all cursor-pointer text-left"
                  >
                    "{dialogue.prompt}"
                  </button>
                ))}
              </div>
            </div>

            {/* Interrogation Transcript Terminal Box */}
            <div className="min-h-[220px] max-h-[400px] overflow-y-auto rounded-2xl bg-black/80 border border-emerald-500/20 p-5 font-mono text-xs space-y-4">
              {interrogationHistory.length === 0 ? (
                <div className="text-zinc-500 italic py-8 text-center">
                  Terminal standby... Select a witness question above to transmit across the digital veil.
                </div>
              ) : (
                interrogationHistory.map((item, idx) => (
                  <div key={idx} className="space-y-2 border-b border-white/5 pb-3">
                    <div className="text-amber-400 flex items-center gap-2">
                      <span className="font-bold">DETECTIVE INQUEST:</span>
                      <span>"{item.prompt}"</span>
                    </div>
                    <div className="text-emerald-400 pl-4 border-l-2 border-emerald-500/50 leading-relaxed font-sans sm:text-sm">
                      <span className="font-mono text-xs font-bold text-emerald-300 block mb-0.5">WITNESS RESPONSE:</span>
                      {item.response}
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => {
                  soundFx.playClick(750);
                  setActiveTab('verdict');
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-950/60 hover:bg-red-900/80 border border-red-500/40 text-red-200 text-xs font-mono font-bold transition-all shadow-md cursor-pointer"
              >
                <span>Proceed to Grand Jury Verdict Submission →</span>
              </button>
            </div>
          </div>
        )}

        {/* TAB 3: SUBMIT INQUEST VERDICT */}
        {activeTab === 'verdict' && (
          <div className="space-y-6">
            <div className="rounded-3xl bg-zinc-900/90 border border-white/15 p-6 sm:p-8 space-y-6">
              <div className="space-y-2 border-b border-white/10 pb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                  Official Inquest Verdict Submission
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-black text-white">
                  What was the primary root cause of this demise?
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300">
                  Select your concluded finding based on the exhibits and witness testimony.
                </p>
              </div>

              {/* Verdict Options */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {coldCase.verdictOptions.map((opt) => {
                  const isSelected = selectedVerdictId === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => {
                        soundFx.playClick(750);
                        setSelectedVerdictId(opt.id);
                        handleSubmitVerdict(opt);
                      }}
                      className={cn(
                        "p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-3",
                        isSelected
                          ? "bg-amber-950/40 border-amber-500/60 shadow-[0_0_20px_rgba(245,158,11,0.2)] text-white"
                          : "bg-zinc-950/80 border-white/10 hover:border-white/20 text-zinc-300"
                      )}
                    >
                      <div className="space-y-1.5">
                        <div className="font-bold text-sm font-serif text-white">
                          {opt.title}
                        </div>
                        <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                          {opt.summary}
                        </p>
                      </div>
                      <div className="text-[11px] font-mono text-amber-400 font-bold pt-2 border-t border-white/5 flex items-center justify-between">
                        <span>Select Verdict</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Verdict Certificate of Finding Revealed */}
            {submittedVerdict && (
              <div className="rounded-3xl bg-zinc-950/95 border-2 border-amber-500/50 p-6 sm:p-10 space-y-6 shadow-2xl animate-in fade-in-0 duration-300">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-amber-500/30 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-300">
                      <Award className="w-6 h-6 shrink-0" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                        Archival Inquest Finding Rendered
                      </div>
                      <h4 className="text-xl sm:text-2xl font-serif font-black text-white">
                        Historical Accuracy: {submittedVerdict.score}%
                      </h4>
                    </div>
                  </div>

                  <span className={cn(
                    "px-3 py-1.5 rounded-full font-mono text-xs font-bold uppercase border",
                    submittedVerdict.isPrimaryCause
                      ? "bg-emerald-950/80 text-emerald-300 border-emerald-500/50"
                      : "bg-amber-950/80 text-amber-300 border-amber-500/50"
                  )}>
                    {submittedVerdict.isPrimaryCause ? "PRIMARY ROOT CAUSE IDENTIFIED" : "SECONDARY CONTRIBUTING CAUSE"}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold">
                    Official Historical Inquest Analysis:
                  </div>
                  <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-sans p-5 rounded-2xl bg-zinc-900/80 border border-white/10">
                    {submittedVerdict.historicalAnalysis}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-400">
                  <span>Inquest Record Sealed into Internet Graveyard Jurisprudence Archives</span>
                  <Link
                    href="/inquests/cases"
                    onClick={() => soundFx.playClick(750)}
                    className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-bold"
                  >
                    <span>Investigate Another Cold Case →</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
