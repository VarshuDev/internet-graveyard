"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { 
  Search, 
  Activity, 
  Globe, 
  ShieldAlert, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  ExternalLink, 
  Clock, 
  ArrowRight, 
  PlusCircle, 
  Sparkles, 
  RefreshCw, 
  FileSearch, 
  Layers, 
  Radio,
  Copy,
  Check
} from 'lucide-react';
import { StatusBadge } from '@/components/StatusBadge';
import { GraveStatus } from '@/types/graveyard';
import { soundFx } from '@/lib/audio/soundFx';

interface ScanResult {
  target: string;
  domain: string;
  timestamp: string;
  http_status: number | null;
  dns_resolved: boolean;
  ssl_valid: boolean;
  latency_ms: number;
  server_header: string | null;
  wayback_url: string;
  shutdown_phrases_detected: string[];
  signals_detected: {
    label: string;
    points: number;
    description: string;
  }[];
  confidence_score: number;
  recommended_status: GraveStatus;
  status_explanation: string;
  matched_grave?: {
    slug: string;
    name: string;
    status: GraveStatus;
  } | null;
}

const PRESET_TARGETS = [
  { label: 'Vine', domain: 'vine.co', note: 'Verified Grave' },
  { label: 'GeoCities', domain: 'geocities.com', note: 'Historic Classic' },
  { label: 'Delicious', domain: 'del.icio.us', note: 'Social Bookmarking' },
  { label: 'Google', domain: 'google.com', note: 'Active Benchmark' },
  { label: 'Phantom Service', domain: 'defunct-relic-offline-999.net', note: 'Simulated NXDOMAIN' }
];

function LookupContent() {
  const searchParams = useSearchParams();
  const initialQ = searchParams.get('q') || searchParams.get('domain') || searchParams.get('url') || '';

  const [inputUrl, setInputUrl] = useState(initialQ);
  const [loading, setLoading] = useState(false);
  const [probingStep, setProbingStep] = useState(0);
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [matchedEntity, setMatchedEntity] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [copied, setCopied] = useState(false);

  const probingSteps = [
    'Initializing DNS resolver...',
    'Querying authoritative A/AAAA records...',
    'Testing TLS 1.3 cryptographic handshake...',
    'Dispatching HTTP archaeology probe...',
    'Parsing response body for obituary declarations...',
    'Computing synthetic risk index...'
  ];

  const runProbe = async (targetToProbe: string) => {
    const cleaned = targetToProbe.trim();
    if (!cleaned) return;

    soundFx.playModemBeep();
    setLoading(true);
    setErrorMsg('');
    setScanResult(null);
    setMatchedEntity(null);
    setProbingStep(0);

    const interval = setInterval(() => {
      setProbingStep((prev) => (prev < probingSteps.length - 1 ? prev + 1 : prev));
    }, 400);

    try {
      const res = await fetch('/api/scanner/probe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ domain: cleaned })
      });

      const data = await res.json();
      clearInterval(interval);

      if (res.ok && data.scan) {
        soundFx.playTelemetry();
        setScanResult(data.scan);
        setMatchedEntity(data.matched_entity || null);
      } else {
        setErrorMsg(data.error || 'Unable to complete diagnostic probe.');
      }
    } catch (err: any) {
      clearInterval(interval);
      setErrorMsg(err.message || 'Network error communicating with probe server.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initialQ) {
      runProbe(initialQ);
    }
  }, [initialQ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runProbe(inputUrl);
  };

  const copyResults = () => {
    if (!scanResult) return;
    const text = `[Internet Graveyard Diagnostic] ${scanResult.domain} -> Status: ${scanResult.recommended_status} (HTTP ${scanResult.http_status || 'ERR'}, DNS: ${scanResult.dns_resolved ? 'OK' : 'NXDOMAIN'}, Latency: ${scanResult.latency_ms}ms)`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-12 font-sans">
      {/* Header */}
      <div className="text-center space-y-5 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-red-950/60 border border-red-500/40 text-red-300 text-xs sm:text-sm font-mono font-semibold tracking-wider uppercase shadow-md">
          <Radio className="w-4 h-4 animate-pulse text-emerald-400" />
          <span>Real-Time Internet Archaeology Prober</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-serif font-black text-white uppercase tracking-tight drop-shadow-md">
          Check Any Website Vital Signs
        </h1>

        <p className="text-base sm:text-lg text-zinc-300 font-sans leading-relaxed max-w-2xl mx-auto">
          Probe <span className="text-white font-bold">any domain or URL on the internet</span> in real time. We query public DNS, evaluate TCP/TLS handshakes, inspect HTTP status codes, detect domain parking, and search for onsite death notices.
        </p>

        {/* Preset Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2 text-sm font-sans">
          <span className="text-zinc-400 font-medium">Quick Probes:</span>
          {PRESET_TARGETS.map((item) => (
            <button
              key={item.domain}
              type="button"
              onClick={() => {
                setInputUrl(item.domain);
                runProbe(item.domain);
              }}
              className="px-3.5 py-1.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-white/12 hover:border-red-500/40 transition-colors cursor-pointer text-sm font-medium shadow-sm focus-visible:ring-2 focus-visible:ring-amber-500/60"
            >
              {item.label} <span className="text-xs font-mono text-zinc-400">({item.domain})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Primary Input Box */}
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="relative group">
          <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-0">
            <div className="relative flex-1">
              <input
                type="text"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                placeholder="Enter domain or URL (e.g. vine.co, myspace.com)..."
                disabled={loading}
                aria-label="Enter website domain or URL to probe"
                className="w-full h-14 sm:h-18 pl-12 sm:pl-16 pr-4 sm:pr-48 rounded-2xl bg-zinc-900/95 border-2 border-white/15 text-white placeholder-zinc-400 font-sans text-sm sm:text-lg focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/20 shadow-2xl transition-all backdrop-blur-xl"
              />
              <Activity className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-zinc-400 group-focus-within:text-red-400 transition-colors shrink-0" />
            </div>
            <button
              type="submit"
              disabled={loading || !inputUrl.trim()}
              className="sm:absolute sm:right-3 sm:top-1/2 sm:-translate-y-1/2 w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-red-600 hover:bg-red-500 disabled:opacity-50 disabled:pointer-events-none text-white font-sans text-sm sm:text-base font-bold transition-all shadow-lg flex items-center justify-center gap-2.5 cursor-pointer shrink-0 focus-visible:ring-2 focus-visible:ring-amber-500/60"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5 animate-spin shrink-0" />
                  <span>Probing...</span>
                </>
              ) : (
                <>
                  <Radio className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  <span>Probe Signs</span>
                </>
              )}
            </button>
          </div>
        </form>

        {errorMsg && (
          <div className="mt-4 p-4 rounded-xl bg-red-950/60 border border-red-500/50 text-red-200 text-sm font-sans flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-red-400 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}
      </div>

      {/* Probing Progress HUD */}
      {loading && (
        <div className="max-w-3xl mx-auto p-7 rounded-2xl bg-zinc-900/90 border border-white/15 space-y-5 shadow-2xl">
          <div className="flex items-center justify-between text-xs sm:text-sm font-mono text-zinc-300">
            <div className="flex items-center gap-2.5 text-amber-400 font-bold">
              <RefreshCw className="w-5 h-5 animate-spin" />
              <span>FORENSIC SCANNER ACTIVE</span>
            </div>
            <span className="font-semibold">STEP {probingStep + 1} OF {probingSteps.length}</span>
          </div>

          <div className="text-base sm:text-lg font-bold text-white tracking-wide font-sans">
            {probingSteps[probingStep]}
          </div>

          {/* Progress Bar */}
          <div className="w-full h-3 bg-zinc-950 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-red-600 via-amber-500 to-emerald-500 transition-all duration-300 rounded-full"
              style={{ width: `${((probingStep + 1) / probingSteps.length) * 100}%` }}
            />
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 font-sans">
            Scanning network hops and querying public DNS roots for target: <span className="text-white font-mono font-bold">{inputUrl}</span>
          </p>
        </div>
      )}

      {/* Diagnostic Dossier Result */}
      {scanResult && !loading && (
        <div className="max-w-3xl mx-auto space-y-7 animate-in fade-in duration-300">
          {/* Matched in Cemetery Alert */}
          {matchedEntity && (
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg">
              <div className="flex items-center gap-3.5 text-amber-200 text-sm font-sans min-w-0 flex-1">
                <Sparkles className="w-6 h-6 text-amber-400 shrink-0" />
                <div>
                  <span className="font-bold uppercase font-mono text-xs">Official Archive Match: </span>
                  <span className="font-medium">{matchedEntity.name} is permanently preserved in our cemetery ledger.</span>
                </div>
              </div>
              <Link
                href={`/grave/${matchedEntity.slug}`}
                className="px-5 py-2.5 rounded-xl bg-amber-500/25 hover:bg-amber-500/35 text-amber-100 text-sm font-bold border border-amber-500/50 transition-colors flex items-center gap-2 shrink-0 font-sans"
              >
                <span>Open Memorial Dossier</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}

          {/* Main Autopsy Card */}
          <div className="rounded-3xl bg-zinc-900/95 border border-white/15 overflow-hidden shadow-2xl">
            {/* Card Header */}
            <div className="p-7 sm:p-8 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-5 bg-zinc-950/70">
              <div className="space-y-1.5 min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-zinc-400 shrink-0" />
                  <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider font-semibold">Target Domain</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-sans font-black text-white tracking-tight break-all">
                  {scanResult.domain}
                </h2>
                <div className="text-xs sm:text-sm font-mono text-zinc-400">
                  Probed at {new Date(scanResult.timestamp).toLocaleString()}
                </div>
              </div>

              <div className="flex flex-col sm:items-end gap-2.5 shrink-0">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs sm:text-sm font-sans font-semibold text-zinc-400">Verdict:</span>
                  <StatusBadge status={scanResult.recommended_status} size="md" />
                </div>
                <div className="text-xs sm:text-sm font-sans text-zinc-400">
                  Risk / Confidence Score: <span className="text-white font-mono font-black text-base">{scanResult.confidence_score} / 100</span>
                </div>
              </div>
            </div>

            {/* Vital Signs Grid */}
            <div className="p-7 grid grid-cols-2 sm:grid-cols-4 gap-4 border-b border-white/10 bg-zinc-950/40 items-stretch">
              {/* HTTP Status */}
              <div className="p-4 rounded-2xl bg-zinc-900 border border-white/8 space-y-1.5 flex flex-col justify-between h-full">
                <span className="text-xs text-zinc-400 uppercase tracking-wider font-bold">HTTP Status</span>
                <div className="flex items-center gap-2 pt-1">
                  {scanResult.http_status && scanResult.http_status < 400 ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                  )}
                  <span className="font-bold text-white text-base sm:text-lg font-mono">
                    {scanResult.http_status ? `HTTP ${scanResult.http_status}` : 'Offline'}
                  </span>
                </div>
              </div>

              {/* DNS Resolution */}
              <div className="p-4 rounded-2xl bg-zinc-900 border border-white/8 space-y-1.5 flex flex-col justify-between h-full">
                <span className="text-xs text-zinc-400 uppercase tracking-wider font-bold">DNS Resolution</span>
                <div className="flex items-center gap-2 pt-1">
                  {scanResult.dns_resolved ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                  )}
                  <span className="font-bold text-white text-base sm:text-lg font-mono">
                    {scanResult.dns_resolved ? 'Resolved' : 'NXDOMAIN'}
                  </span>
                </div>
              </div>

              {/* TLS / SSL */}
              <div className="p-4 rounded-2xl bg-zinc-900 border border-white/8 space-y-1.5 flex flex-col justify-between h-full">
                <span className="text-xs text-zinc-400 uppercase tracking-wider font-bold">SSL / TLS</span>
                <div className="flex items-center gap-2 pt-1">
                  {scanResult.ssl_valid ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                  )}
                  <span className="font-bold text-white text-base sm:text-lg font-mono">
                    {scanResult.ssl_valid ? 'Valid TLS' : 'Invalid'}
                  </span>
                </div>
              </div>

              {/* Latency */}
              <div className="p-4 rounded-2xl bg-zinc-900 border border-white/8 space-y-1.5 flex flex-col justify-between h-full">
                <span className="text-xs text-zinc-400 uppercase tracking-wider font-bold">Latency</span>
                <div className="flex items-center gap-2 pt-1">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="font-bold text-white text-base sm:text-lg font-mono">
                    {scanResult.latency_ms} ms
                  </span>
                </div>
              </div>
            </div>

            {/* Explanation & Signals */}
            <div className="p-7 sm:p-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-xs sm:text-sm font-mono font-bold text-zinc-400 uppercase tracking-wider">Archaeological Assessment</h3>
                <p className="text-base sm:text-lg text-zinc-100 leading-relaxed font-sans">
                  {scanResult.status_explanation}
                </p>
                {scanResult.server_header && (
                  <div className="text-sm font-sans text-zinc-400 pt-1">
                    Reported Server Banner: <span className="text-white font-mono font-medium">{scanResult.server_header}</span>
                  </div>
                )}
              </div>

              {/* Signals Breakdown */}
              <div className="space-y-3">
                <h4 className="text-xs sm:text-sm font-mono font-bold text-zinc-400 uppercase tracking-wider">
                  Telemetry Signals Detected ({scanResult.signals_detected.length})
                </h4>
                {scanResult.signals_detected.length === 0 ? (
                  <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-200 text-sm font-sans">
                    Zero degradation signals detected. Domain appears to be actively maintained and functioning.
                  </div>
                ) : (
                  <div className="space-y-2.5">
                    {scanResult.signals_detected.map((signal, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-zinc-950/70 border border-white/8 flex items-start justify-between gap-4 text-sm font-sans"
                      >
                        <div className="space-y-1">
                          <span className="text-white font-bold text-sm sm:text-base">{signal.label}</span>
                          <p className="text-zinc-300 text-xs sm:text-sm font-sans leading-relaxed">{signal.description}</p>
                        </div>
                        <span className="px-3 py-1 rounded-md bg-red-500/20 text-red-400 text-xs font-mono font-bold shrink-0">
                          +{signal.points} pts
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Shutdown Phrases if any */}
              {scanResult.shutdown_phrases_detected && scanResult.shutdown_phrases_detected.length > 0 && (
                <div className="p-4 rounded-2xl bg-red-950/40 border border-red-500/40 space-y-2 font-sans text-sm">
                  <span className="text-red-300 font-bold uppercase text-xs tracking-wider">Onsite Obituary Phrases Detected:</span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {scanResult.shutdown_phrases_detected.map((phrase, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg bg-red-900/60 text-red-100 text-sm font-mono font-medium">
                        "{phrase}"
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Action Bar */}
            <div className="p-7 bg-zinc-950/90 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-sans text-sm">
              <div className="flex flex-wrap items-center gap-3">
                {/* Wayback Machine Button */}
                <a
                  href={scanResult.wayback_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-750 text-white font-bold border border-white/15 transition-all flex items-center gap-2 shadow-md hover:-translate-y-0.5"
                >
                  <ExternalLink className="w-4 h-4 text-amber-400" />
                  <span>Historical Snapshots on Wayback Machine</span>
                </a>

                {/* Copy results */}
                <button
                  type="button"
                  onClick={copyResults}
                  className="px-4 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-750 text-zinc-200 hover:text-white border border-white/15 transition-all flex items-center gap-2 cursor-pointer"
                  title="Copy Diagnostic Summary"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied' : 'Copy Report'}</span>
                </button>
              </div>

              {/* Submit to Graveyard Button */}
              {!matchedEntity && (
                <Link
                  href={`/submit?url=${encodeURIComponent('https://' + scanResult.domain)}&name=${encodeURIComponent(scanResult.domain)}&status=${scanResult.recommended_status}&notes=${encodeURIComponent(scanResult.status_explanation)}`}
                  className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold transition-all shadow-xl hover:shadow-red-600/40 flex items-center gap-2 hover:-translate-y-0.5"
                >
                  <PlusCircle className="w-5 h-5" />
                  <span>Submit {scanResult.domain} to Graveyard Archive</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Information Explainer */}
      <div className="max-w-3xl mx-auto pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-8 font-sans text-sm">
        <div className="space-y-2">
          <div className="text-white font-bold flex items-center gap-2 text-base">
            <Radio className="w-4 h-4 text-red-400" />
            <span>Multi-Signal Probing</span>
          </div>
          <p className="text-zinc-300 text-sm leading-relaxed">
            We do not rely on a single ping. We evaluate DNS records, SSL handshakes, HTTP headers, and onsite shutdown wording.
          </p>
        </div>

        <div className="space-y-2">
          <div className="text-white font-bold flex items-center gap-2 text-base">
            <Layers className="w-4 h-4 text-amber-400" />
            <span>No Speculation</span>
          </div>
          <p className="text-zinc-300 text-sm leading-relaxed">
            If a site is simply experiencing a temporary outage, our prober flags it as AT_RISK or OFFLINE rather than prematurely declaring it dead.
          </p>
        </div>

        <div className="space-y-2">
          <div className="text-white font-bold flex items-center gap-2 text-base">
            <ExternalLink className="w-4 h-4 text-zinc-300" />
            <span>Wayback Integration</span>
          </div>
          <p className="text-zinc-300 text-sm leading-relaxed">
            Every probed domain includes deep-links to the Internet Archive so you can travel back in time and view interactive snapshots.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function LookupPage() {
  return (
    <Suspense fallback={<div className="p-16 text-center text-graveyard-400 font-mono text-xs">Loading archaeological diagnostic scanner...</div>}>
      <LookupContent />
    </Suspense>
  );
}
