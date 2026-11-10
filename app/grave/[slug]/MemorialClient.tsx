"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { GraveEntity, EpitaphItem } from '@/types/graveyard';
import { StatusBadge } from '@/components/StatusBadge';
import { ConfidenceMeter } from '@/components/ConfidenceMeter';
import { DigitalCandle } from '@/components/DigitalCandle';
import { ArchivalLoader } from '@/components/ArchivalLoader';
import { EvidenceInspectorModal } from '@/components/EvidenceInspectorModal';
import { DeathCertificateModal } from '@/components/DeathCertificateModal';
import { AudioRelicPlayer } from '@/components/AudioRelicPlayer';
import { WaybackTimeMachine } from '@/components/WaybackTimeMachine';
import { EntityLogo } from '@/components/EntityLogo';
import { DigitalGhostTerminal } from '@/components/DigitalGhostTerminal';
import { EulogyModal } from '@/components/EulogyModal';
import { MemorialGuestbook } from '@/components/MemorialGuestbook';
import { 
  Globe, 
  Calendar, 
  Clock, 
  Skull, 
  ExternalLink, 
  Archive, 
  ArrowRight, 
  Share2, 
  Heart, 
  Send, 
  CheckCircle2, 
  Check, 
  Sparkles,
  Layers,
  ArrowUpRight,
  Terminal,
  Activity,
  FileText,
  Bell,
  Feather
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { soundFx } from '@/lib/audio/soundFx';

interface MemorialClientProps {
  entity: GraveEntity;
  relatedEntities: GraveEntity[];
}

export const MemorialClient: React.FC<MemorialClientProps> = ({
  entity,
  relatedEntities
}) => {
  const [showEvidenceModal, setShowEvidenceModal] = useState(false);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [showEulogyModal, setShowEulogyModal] = useState(false);
  const [epitaphs, setEpitaphs] = useState<EpitaphItem[]>(entity.epitaphs || []);
  const [authorName, setAuthorName] = useState('');
  const [content, setContent] = useState('');
  const [yearsUsed, setYearsUsed] = useState('');
  const [submittingEpitaph, setSubmittingEpitaph] = useState(false);
  const [epitaphSuccess, setEpitaphSuccess] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleEpitaphSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() || submittingEpitaph) return;

    setSubmittingEpitaph(true);
    try {
      const res = await fetch(`/api/entities/${entity.slug}/epitaph`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          author_name: authorName || 'Anonymous Mourner',
          content,
          years_used: yearsUsed
        })
      });

      if (res.ok) {
        const data = await res.json();
        if (data.epitaph) {
          setEpitaphs(prev => [data.epitaph, ...prev]);
          setContent('');
          setYearsUsed('');
          setEpitaphSuccess(true);
          setTimeout(() => setEpitaphSuccess(false), 4000);
        }
      }
    } catch (err) {
      console.error('Failed to submit epitaph:', err);
    } finally {
      setSubmittingEpitaph(false);
    }
  };

  const handleShare = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12">
      {/* 1. Cinematic Archival Record Discovery Banner */}
      {!loaded ? (
        <ArchivalLoader 
          entityName={entity.name} 
          lifespan={entity.lifespan} 
          duration={900} 
          onComplete={() => setLoaded(true)} 
        />
      ) : null}

      <div className={cn("space-y-12 transition-opacity duration-500", loaded ? "opacity-100" : "opacity-0 pointer-events-none")}>
        {/* 2. MEMORIAL HERO HEADER */}
        <section className="relative rounded-2xl bg-zinc-900/90 border border-white/10 p-6 sm:p-10 backdrop-blur-md shadow-2xl overflow-hidden">
          {/* Subtle Ambient Background Hue */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/8">
            <div className="flex items-center gap-5 min-w-0 flex-1">
              {/* Logo / Thumbnail */}
              <EntityLogo entity={entity} size="xl" className="border border-white/15 shadow-xl" />

              {/* Identity & Lifespan */}
              <div className="space-y-2 min-w-0 flex-1">
                <div className="flex items-center gap-4 flex-wrap">
                  <h1 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight drop-shadow-md">
                    {entity.name}
                  </h1>
                  <div className="shrink-0">
                    <StatusBadge status={entity.status} size="lg" />
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-sm sm:text-base font-sans text-zinc-300 flex-wrap">
                  <span className="text-white font-bold font-mono">{entity.lifespan}</span>
                  <span className="text-zinc-500">•</span>
                  <span className="text-zinc-300 uppercase tracking-wider font-semibold font-mono text-xs">{entity.category}</span>
                  {entity.country && (
                    <>
                      <span className="text-zinc-500">•</span>
                      <span className="text-zinc-300">{entity.country}</span>
                    </>
                  )}
                </div>

                <div className="text-xs sm:text-sm font-mono text-zinc-300 flex items-center gap-2 flex-wrap">
                  <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-zinc-200 font-semibold">{entity.primary_domain}</span>
                  {entity.parent_company && (
                    <span className="text-zinc-400 font-sans">(Parent: {entity.parent_company})</span>
                  )}
                </div>
              </div>
            </div>

            {/* Actions: Tribute Candle, Death Knell Bell, Certificate & Share */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full md:w-auto self-stretch md:self-center justify-end shrink-0 flex-wrap">
              {/* Funeral Bell Button */}
              <button
                onClick={() => {
                  soundFx.playBell();
                }}
                className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-2xl bg-zinc-850 hover:bg-zinc-800 border border-white/20 hover:border-amber-500/50 text-amber-300 text-xs sm:text-sm font-mono font-bold transition-all shadow-md group cursor-pointer shrink-0 focus-visible:ring-2 focus-visible:ring-amber-500/60"
                title="Toll the Sacred Funeral Death Knell (Cathedral Bell Chime)"
                aria-label="Toll funeral bell chime"
              >
                <Bell className="w-4 h-4 text-amber-400 group-hover:scale-125 transition-transform shrink-0" />
                <span>Toll Bell</span>
              </button>

              <button
                onClick={() => setShowCertificateModal(true)}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-amber-950/40 hover:bg-amber-900/60 border border-amber-500/40 text-amber-300 hover:text-amber-200 text-xs sm:text-sm font-mono font-bold transition-all shadow-[0_0_15px_rgba(245,158,11,0.15)] cursor-pointer shrink-0"
                title="View Official Coroner Death Certificate"
              >
                <FileText className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="hidden sm:inline">Death Certificate</span>
                <span className="sm:hidden">Certificate</span>
              </button>

              <button
                onClick={() => setShowEulogyModal(true)}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-amber-950/40 hover:bg-amber-900/60 border border-amber-500/40 text-amber-300 hover:text-amber-200 text-xs sm:text-sm font-mono font-bold transition-all shadow-[0_0_15px_rgba(245,158,11,0.15)] cursor-pointer shrink-0"
                title="Orate AI Funeral Eulogy via Gemini"
              >
                <Feather className="w-4 h-4 text-amber-400 shrink-0" />
                <span>AI Eulogy</span>
              </button>
              <DigitalCandle
                slug={entity.slug}
                initialCount={entity.candle_count}
                entityName={entity.name}
              />
              <button
                onClick={handleShare}
                className={cn(
                  "p-3 rounded-2xl border transition-all cursor-pointer shadow-md shrink-0 flex items-center justify-center relative",
                  copiedShare 
                    ? "bg-emerald-950/60 border-emerald-500/50 text-emerald-400" 
                    : "bg-zinc-850 hover:bg-zinc-800 border-white/15 text-zinc-200 hover:text-white"
                )}
                title={copiedShare ? "Link copied to clipboard!" : "Share Memorial"}
                aria-label={copiedShare ? "Link copied to clipboard" : "Share memorial link"}
              >
                {copiedShare ? (
                  <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                ) : (
                  <Share2 className="w-5 h-5 shrink-0" />
                )}
              </button>
            </div>
          </div>

          {/* Tagline & Transparent Confidence Breakdown */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <p className="text-base sm:text-xl text-zinc-100 leading-relaxed font-sans italic">
                "{entity.tagline || entity.description.slice(0, 140) + '...'}"
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/90 border border-white/10">
              <ConfidenceMeter
                score={entity.confidence_score}
                onInspectEvidence={() => setShowEvidenceModal(true)}
              />
            </div>
          </div>
        </section>

        {/* 3. MAIN MEMORIAL DOSSIER (GRID) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 font-sans">
          {/* LEFT 2 COLUMNS: About, Cause of Death, Final Moments, Life Timeline */}
          <div className="lg:col-span-2 space-y-10">
            {/* ABOUT */}
            <section className="space-y-3">
              <h2 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-zinc-300 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span>ABOUT THIS ENTITY</span>
              </h2>
              <div className="p-6 sm:p-7 rounded-2xl bg-zinc-900/90 border border-white/10 space-y-4 text-base sm:text-lg text-zinc-200 leading-relaxed">
                <p>{entity.description}</p>
                {entity.popularity_peak && (
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-sm font-mono text-zinc-300">
                    <span className="uppercase font-semibold text-zinc-400">Peak Scale:</span>
                    <span className="text-white font-bold">{entity.popularity_peak}</span>
                  </div>
                )}
              </div>
            </section>

            {/* ACOUSTIC RELIC PLAYER (IF AVAILABLE) */}
            <AudioRelicPlayer entitySlug={entity.slug} />

            {/* AI DIGITAL GHOST COMMUNICATOR */}
            <DigitalGhostTerminal entity={entity} />

            {/* CAUSE OF DEATH */}
            <section className="space-y-3">
              <h2 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-red-400 flex items-center gap-2">
                <Skull className="w-4 h-4" />
                <span>AUTOPSY & CAUSE OF DEMISE</span>
              </h2>
              <div className="p-6 sm:p-7 rounded-2xl bg-red-950/25 border-2 border-red-500/30 space-y-4">
                <div className="flex items-center justify-between text-sm font-mono">
                  <span className="text-red-400 font-bold uppercase tracking-wider">Primary Classification:</span>
                  <span className="px-3 py-1 rounded-md bg-red-500/20 border border-red-500/40 text-red-200 font-bold text-sm">
                    {entity.cause_category}
                  </span>
                </div>
                <p className="text-base sm:text-lg text-zinc-100 leading-relaxed font-sans">
                  {entity.cause_of_death_summary}
                </p>
                {entity.status_reason && (
                  <p className="text-sm text-zinc-300 font-sans pt-3 border-t border-red-500/20">
                    <span className="text-red-300 font-semibold font-mono">Corroboration:</span> {entity.status_reason}
                  </p>
                )}
              </div>
            </section>

            {/* FINAL MOMENTS */}
            {entity.final_moments && (
              <section className="space-y-3">
                <h2 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-zinc-300 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>FINAL MOMENTS & SHUTDOWN CHRONOLOGY</span>
                </h2>
                <div className="p-6 sm:p-7 rounded-2xl bg-zinc-900/90 border border-white/10 text-base sm:text-lg text-zinc-200 leading-relaxed font-sans">
                  <p>{entity.final_moments}</p>
                </div>
              </section>
            )}

            {/* LIFE TIMELINE */}
            {/* LIFE TIMELINE */}
            {entity.timeline && entity.timeline.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-zinc-300 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <span>LIFE TIMELINE ({entity.lifespan})</span>
                </h2>

                <div className="relative pl-6 border-l-2 border-white/15 space-y-6 my-4 font-sans">
                  {entity.timeline.map((evt, idx) => (
                    <div key={evt.id || idx} className="relative group">
                      {/* Node Dot */}
                      <span className={cn(
                        "absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-zinc-950 transition-all",
                        evt.event_type === 'DISCONTINUED' ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]' :
                        evt.event_type === 'LAUNCH' ? 'bg-emerald-400' :
                        evt.event_type === 'ACQUISITION' ? 'bg-amber-400' : 'bg-zinc-400'
                      )} />

                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2.5">
                          <span className="text-xs sm:text-sm font-mono font-bold text-white tracking-wider">
                            {evt.date_str || evt.year}
                          </span>
                          <span className="text-xs font-mono uppercase px-2.5 py-0.5 rounded bg-white/10 text-zinc-300 border border-white/10">
                            {evt.event_type.replace(/_/g, ' ')}
                          </span>
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-red-300 transition-colors">
                          {evt.title}
                        </h4>
                        <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                          {evt.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* COMMUNITY EPITAPHS & VIRTUAL OFFERINGS SHRINE */}
            <MemorialGuestbook entity={entity} />
          </div>

          {/* RIGHT COLUMN: Last Known State, Archives, Successors, Related Graves */}
          <div className="space-y-8 font-sans">
            {/* LAST KNOWN STATE MATRIX */}
            <section className="p-6 rounded-2xl bg-zinc-900/90 border border-white/10 space-y-5">
              <h3 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-zinc-200 flex items-center gap-2">
                <Activity className="w-4 h-4 text-red-400" />
                <span>LAST KNOWN FORENSIC STATE</span>
              </h3>

              <div className="space-y-3.5 text-sm">
                {/* Website */}
                <div className="p-3.5 rounded-xl bg-zinc-950 border border-white/10 space-y-1">
                  <div className="text-xs font-mono uppercase text-zinc-400 font-bold">Website:</div>
                  <div className="text-white font-sans text-sm sm:text-base leading-snug">
                    {entity.last_known_state.website.state_desc}
                  </div>
                </div>

                {/* Mobile App */}
                <div className="p-3.5 rounded-xl bg-zinc-950 border border-white/10 space-y-1">
                  <div className="text-xs font-mono uppercase text-zinc-400 font-bold">Mobile Applications:</div>
                  <div className="text-white font-sans text-sm sm:text-base leading-snug">
                    {entity.last_known_state.app.state_desc}
                  </div>
                </div>

                {/* API Status */}
                <div className="p-3.5 rounded-xl bg-zinc-950 border border-white/10 space-y-1">
                  <div className="text-xs font-mono uppercase text-zinc-400 font-bold">API Endpoints:</div>
                  <div className="text-white font-sans text-sm sm:text-base leading-snug">
                    {entity.last_known_state.api.state_desc}
                  </div>
                </div>

                {/* Community */}
                <div className="p-3.5 rounded-xl bg-zinc-950 border border-white/10 space-y-1">
                  <div className="text-xs font-mono uppercase text-zinc-400 font-bold">Community Dispersal:</div>
                  <div className="text-white font-sans text-sm sm:text-base leading-snug">
                    {entity.last_known_state.community.state_desc}
                  </div>
                </div>

                {/* Domain Ownership */}
                <div className="p-3.5 rounded-xl bg-zinc-950 border border-white/10 space-y-1">
                  <div className="text-xs font-mono uppercase text-zinc-400 font-bold">Current Domain State:</div>
                  <div className="text-white font-sans text-sm sm:text-base leading-snug">
                    {entity.last_known_state.domain.state_desc}
                  </div>
                </div>
              </div>
            </section>

            {/* WAYBACK TIME MACHINE (INTERACTIVE SNAPSHOT VIEWER) */}
            <WaybackTimeMachine entity={entity} />

            {/* SUCCESSORS & INHERITORS */}
            {entity.successors && entity.successors.length > 0 && (
              <section className="p-6 rounded-2xl bg-zinc-900/90 border border-white/10 space-y-4">
                <h3 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-zinc-200 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span>SUCCESSORS & INHERITORS</span>
                </h3>
                <div className="space-y-3">
                  {entity.successors.map((succ) => (
                    <div key={succ.id} className="p-3.5 rounded-xl bg-zinc-950 border border-white/10 space-y-1.5">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-bold text-base text-white">{succ.name}</span>
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/10 text-zinc-300">
                          {succ.relationship_type}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                        {succ.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* RELATED GRAVES */}
            {relatedEntities.length > 0 && (
              <section className="p-6 rounded-2xl bg-zinc-900/90 border border-white/10 space-y-4">
                <h3 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-zinc-200 flex items-center gap-2">
                  <Skull className="w-4 h-4 text-red-400" />
                  <span>SIMILAR DEFUNCT SERVICES</span>
                </h3>
                <div className="space-y-2.5">
                  {relatedEntities.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/grave/${rel.slug}`}
                      className="p-3.5 rounded-xl bg-zinc-950 border border-white/10 hover:border-white/25 flex items-center justify-between group transition-colors"
                    >
                      <div>
                        <div className="text-sm sm:text-base font-bold text-white group-hover:text-red-300 transition-colors">
                          {rel.name}
                        </div>
                        <div className="text-xs text-zinc-400 font-mono mt-0.5">
                          {rel.lifespan} • {rel.category}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-red-400 group-hover:translate-x-1 transition-all shrink-0" />
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>

      {/* Forensic Evidence Inspector Modal */}
      <EvidenceInspectorModal
        entity={entity}
        isOpen={showEvidenceModal}
        onClose={() => setShowEvidenceModal(false)}
      />

      {/* Official Coroner Death Certificate Modal */}
      <DeathCertificateModal
        entity={entity}
        isOpen={showCertificateModal}
        onClose={() => setShowCertificateModal(false)}
      />

      {/* AI Funeral Eulogy Modal */}
      <EulogyModal
        entity={entity}
        isOpen={showEulogyModal}
        onClose={() => setShowEulogyModal(false)}
      />
    </div>
  );
};
