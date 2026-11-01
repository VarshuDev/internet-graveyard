import React from 'react';
import Link from 'next/link';
import { graveyardDb } from '@/lib/db';
import { getLastAutomationReport } from '@/lib/automation/cronEngine';
import { StatusBadge } from '@/components/StatusBadge';
import { EntityLogo } from '@/components/EntityLogo';
import { 
  AlertTriangle, 
  ShieldAlert, 
  Activity, 
  ArrowRight, 
  CheckCircle2, 
  Radio,
  ServerCrash,
  WifiOff,
  GitCommit,
  TrendingDown,
  RefreshCw,
  Cpu
} from 'lucide-react';

export const revalidate = 0;

export default function DyingNowPage() {
  const atRiskList = graveyardDb.getAtRiskEntities();
  const lastInquest = getLastAutomationReport();

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-12 font-sans">
      {/* Header */}
      <div className="space-y-4 border-b border-amber-500/30 pb-8">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold tracking-wider uppercase shrink-0">
          <AlertTriangle className="w-4 h-4 animate-pulse text-amber-400 shrink-0" />
          <span>Multi-Signal Forensic Radar</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-black text-white uppercase tracking-tight drop-shadow-md">
          Dying Now — At Risk Ecosystem
        </h1>
        <p className="text-base sm:text-lg text-zinc-300 font-sans max-w-3xl leading-relaxed">
          The early warning detection system for internet products showing terminal symptoms of abandonment, infrastructure neglect, developer inactivity, and pending sunset.
        </p>
      </div>

      {/* Automated Inquest Telemetry Card */}
      <div className="p-5 rounded-2xl bg-zinc-950 border border-emerald-500/30 shadow-[0_0_25px_rgba(16,185,129,0.1)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono">
        <div className="flex items-center gap-3.5">
          <div className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-400">
            <Cpu className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="text-xs uppercase font-bold text-emerald-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Automated Forensic Inquest Monitor: ONLINE
            </div>
            <div className="text-xs text-zinc-400 mt-0.5">
              {lastInquest 
                ? `Last cycle: ${new Date(lastInquest.timestamp).toLocaleTimeString()} (${lastInquest.duration_ms}ms) • ${lastInquest.domains_probed.length} priority domains probed`
                : "Continuous 24/7 background probe daemon active across at-risk and zombie clusters."}
            </div>
          </div>
        </div>

        <Link
          href="/api/inquests"
          target="_blank"
          className="px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-850 border border-white/10 hover:border-emerald-500/40 text-xs text-zinc-300 hover:text-emerald-300 transition-colors shrink-0 flex items-center gap-1.5"
        >
          <Activity className="w-3.5 h-3.5 text-emerald-400" />
          <span>Inspect Inquest Telemetry JSON</span>
        </Link>
      </div>

      {/* Methodological Transparency Callout */}
      <div className="p-6 rounded-2xl bg-zinc-900/90 border-2 border-amber-500/30 flex items-start gap-4">
        <div className="p-3 rounded-xl bg-amber-500/15 text-amber-400 shrink-0">
          <ShieldAlert className="w-6 h-6 shrink-0" />
        </div>
        <div className="space-y-1.5 text-zinc-200">
          <div className="font-bold text-white text-base uppercase tracking-wider font-mono">
            Methodological Cardinal Rule:
          </div>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
            We never claim a service is dead merely because an HTTP request failed or a server timed out. An entity is assigned <span className="text-amber-400 font-bold">AT RISK</span> only when multiple independent corroborating telemetry vectors indicate acute decline.
          </p>
        </div>
      </div>

      {/* Signal Weightings Reference */}
      <div className="p-6 rounded-2xl bg-zinc-900/70 border border-white/10 space-y-4 font-sans">
        <h3 className="font-bold uppercase tracking-wider text-zinc-200 text-sm font-mono flex items-center gap-2">
          <Activity className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Automated Signal Scoring Breakdown:</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-1">
          <div className="p-4 rounded-xl bg-zinc-950 border border-white/10 space-y-1.5">
            <div className="flex items-center justify-between text-white font-bold text-sm">
              <span>No Official Updates (18m+)</span>
              <span className="text-amber-400 font-mono font-bold">+20%</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">Official blogs, social accounts, and changelogs inactive.</p>
          </div>
          <div className="p-4 rounded-xl bg-zinc-950 border border-white/10 space-y-1.5">
            <div className="flex items-center justify-between text-white font-bold text-sm">
              <span>Last Release &gt; 14 Months</span>
              <span className="text-amber-400 font-mono font-bold">+15%</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">App store versions or git repositories frozen.</p>
          </div>
          <div className="p-4 rounded-xl bg-zinc-950 border border-white/10 space-y-1.5">
            <div className="flex items-center justify-between text-white font-bold text-sm">
              <span>DNS & SSL Instability</span>
              <span className="text-amber-400 font-mono font-bold">+10%</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">Expired TLS certs, intermittent NXDOMAIN responses.</p>
          </div>
          <div className="p-4 rounded-xl bg-zinc-950 border border-white/10 space-y-1.5">
            <div className="flex items-center justify-between text-white font-bold text-sm">
              <span>Community Activity Decline</span>
              <span className="text-amber-400 font-mono font-bold">+15%</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">Discussion volume and active user session collapse (-80%).</p>
          </div>
          <div className="p-4 rounded-xl bg-zinc-950 border border-white/10 space-y-1.5">
            <div className="flex items-center justify-between text-white font-bold text-sm">
              <span>Preliminary Sunset Notice</span>
              <span className="text-amber-400 font-mono font-bold">+18%</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">Company warns of service wind-down or acquisition review.</p>
          </div>
          <div className="p-4 rounded-xl bg-zinc-950 border border-white/10 space-y-1.5">
            <div className="flex items-center justify-between text-white font-bold text-sm">
              <span>Multiple Reputable Reports</span>
              <span className="text-amber-400 font-mono font-bold">+15%</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">Tech journalism investigations confirm financial distress.</p>
          </div>
        </div>
      </div>

      {/* At-Risk Entities Showcase */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Actively Monitored Candidates ({atRiskList.length})
        </h2>

        <div className="space-y-6">
          {atRiskList.map((entity) => (
            <div
              key={entity.id}
              className="p-7 rounded-2xl bg-zinc-900/90 border-2 border-amber-500/30 shadow-2xl space-y-6"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pb-5 border-b border-white/10">
                <div className="flex items-center gap-4 min-w-0 flex-1">
                  <EntityLogo entity={entity} size="lg" className="border border-white/15 shadow-lg shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3.5 flex-wrap">
                      <h3 className="text-2xl font-black text-white tracking-tight truncate">
                        {entity.name}
                      </h3>
                      <div className="shrink-0">
                        <StatusBadge status="AT_RISK" size="md" />
                      </div>
                      <span className="text-sm font-mono text-zinc-300 font-medium truncate">{entity.primary_domain}</span>
                    </div>
                    <div className="text-sm text-zinc-300 mt-1 font-sans">
                      Category: <span className="text-white font-semibold">{entity.category}</span> • Monitored since {entity.founded_year}
                    </div>
                  </div>
                </div>

                {/* Score Gauge */}
                <div className="p-3.5 rounded-2xl bg-zinc-950 border border-amber-500/40 text-right shrink-0">
                  <div className="text-xs font-mono uppercase text-zinc-300 font-bold">Total Risk Confidence</div>
                  <div className="text-3xl font-mono font-black text-amber-400">{entity.confidence_score}%</div>
                </div>
              </div>

              {/* Signals Breakdown Matrix */}
              <div className="space-y-3">
                <div className="text-xs sm:text-sm uppercase tracking-wider text-zinc-300 font-mono font-bold">Corroborated Telemetry Signals:</div>
                <div className="space-y-2.5">
                  {entity.risk_signals?.map((sig) => (
                    <div
                      key={sig.id}
                      className="p-4 rounded-xl bg-zinc-950 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm"
                    >
                      <div className="space-y-1">
                        <div className="text-white font-bold flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-amber-400" />
                          <span>{sig.label}</span>
                        </div>
                        <div className="text-zinc-300 font-sans text-xs sm:text-sm leading-relaxed">
                          {sig.evidence_claim}
                        </div>
                      </div>
                      <span className="font-bold text-amber-400 font-mono text-base shrink-0">
                        +{sig.points} pts
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action footer */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <span className="text-xs sm:text-sm text-zinc-300 font-sans">
                  Status: Ongoing Archaeological Surveillance
                </span>
                <Link
                  href={`/grave/${entity.slug}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-200 font-bold text-sm transition-colors shadow-md shrink-0"
                >
                  <span>View Full Risk Dossier</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
