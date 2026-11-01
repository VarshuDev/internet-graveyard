"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  Compass, 
  ShieldCheck,
  FileText
} from 'lucide-react';

function SubmitGraveForm() {
  const searchParams = useSearchParams();
  const [serviceName, setServiceName] = useState('');
  const [url, setUrl] = useState('');
  const [whatHappened, setWhatHappened] = useState('');
  const [shutdownDate, setShutdownDate] = useState('');
  const [sources, setSources] = useState('');
  const [submitterMemory, setSubmitterMemory] = useState('');
  const [submitterEmail, setSubmitterEmail] = useState('');

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const qUrl = searchParams.get('url');
    const qName = searchParams.get('name');
    const qNotes = searchParams.get('notes');
    const qStatus = searchParams.get('status');

    if (qUrl) setUrl(qUrl);
    if (qName) setServiceName(qName);
    if (qNotes || qStatus) {
      setWhatHappened(
        (qStatus ? `[Live Forensic Status: ${qStatus}] ` : '') + (qNotes || '')
      );
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceName.trim() || !url.trim() || !whatHappened.trim()) {
      setErrorMsg('Please fill out Service Name, URL, and what happened.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_name: serviceName,
          url,
          what_happened: whatHappened,
          shutdown_date: shutdownDate,
          sources,
          submitter_memory: submitterMemory,
          submitter_email: submitterEmail
        })
      });

      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.error || 'Failed to submit candidate.');
      }
    } catch (err) {
      setErrorMsg('Network error submitting candidate.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-10 font-sans">
      {/* Header */}
      <div className="space-y-4 border-b border-white/10 pb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-red-950/40 border border-red-500/30 text-red-400 text-xs font-mono font-bold tracking-wider uppercase shrink-0">
          <Compass className="w-4 h-4 shrink-0" />
          <span>Community Archaeology Guild</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
          Submit an Entity for Archaeological Review
        </h1>
        <p className="text-base sm:text-lg text-zinc-300 font-sans leading-relaxed">
          Did a beloved website, app, online game, or developer API vanish from the web? Report it to our forensic review team.
        </p>
      </div>

      {submitted ? (
        <div className="p-10 rounded-2xl bg-zinc-900/90 border border-emerald-500/40 shadow-2xl text-center space-y-5 animate-in fade-in">
          <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Submission Placed in Forensic Review Queue
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 font-sans max-w-md mx-auto leading-relaxed">
            Thank you for preserving digital history. In accordance with our archaeology guidelines, submissions are verified against primary records before publication to maintain 100% evidence integrity.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => {
                setSubmitted(false);
                setServiceName('');
                setUrl('');
                setWhatHappened('');
                setShutdownDate('');
                setSources('');
                setSubmitterMemory('');
              }}
              className="px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-bold border border-white/10 cursor-pointer transition-colors"
            >
              Submit Another Relic
            </button>
            <Link
              href="/explore"
              className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white text-sm font-bold shadow-md transition-colors"
            >
              Explore Graveyard
            </Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-8 sm:p-10 rounded-2xl bg-zinc-900/90 border border-white/10 space-y-6 shadow-2xl">
          {errorMsg && (
            <div className="p-4 rounded-xl bg-red-500/15 border border-red-500/30 text-red-300 flex items-center gap-3 text-sm">
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Service name & URL */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-zinc-200">
                Website / Service Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Songza, Path, Rdio"
                value={serviceName}
                onChange={(e) => setServiceName(e.target.value)}
                className="w-full p-4 rounded-xl bg-zinc-950 border border-white/15 text-white placeholder-zinc-500 text-sm sm:text-base focus:outline-none focus:border-red-500/60"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-zinc-200">
                Primary Domain or URL <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. songza.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full p-4 rounded-xl bg-zinc-950 border border-white/15 text-white placeholder-zinc-500 text-sm sm:text-base focus:outline-none focus:border-red-500/60"
              />
            </div>
          </div>

          {/* What happened */}
          <div className="space-y-2">
            <label className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-zinc-200">
              What Happened? (Autopsy Summary) <span className="text-red-400">*</span>
            </label>
            <textarea
              required
              rows={3}
              placeholder="Explain why and how it disappeared (e.g. acquired by Google, ran out of funding, sued by copyright holders, server crash)..."
              value={whatHappened}
              onChange={(e) => setWhatHappened(e.target.value)}
              className="w-full p-4 rounded-xl bg-zinc-950 border border-white/15 text-white placeholder-zinc-500 text-sm sm:text-base focus:outline-none focus:border-red-500/60 resize-none font-sans leading-relaxed"
            />
          </div>

          {/* Approximate shutdown date & Sources */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-zinc-200">
                Approximate Shutdown Date
              </label>
              <input
                type="text"
                placeholder="e.g. January 2016 or Summer 2014"
                value={shutdownDate}
                onChange={(e) => setShutdownDate(e.target.value)}
                className="w-full p-4 rounded-xl bg-zinc-950 border border-white/15 text-white placeholder-zinc-500 text-sm sm:text-base focus:outline-none focus:border-red-500/60"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-zinc-200">
                Sources & Evidence Links
              </label>
              <input
                type="text"
                placeholder="e.g. TechCrunch article, founder blog, archive URL"
                value={sources}
                onChange={(e) => setSources(e.target.value)}
                className="w-full p-4 rounded-xl bg-zinc-950 border border-white/15 text-white placeholder-zinc-500 text-sm sm:text-base focus:outline-none focus:border-red-500/60"
              />
            </div>
          </div>

          {/* Personal Memory */}
          <div className="space-y-2">
            <label className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-zinc-200">
              Your Memory / Eulogy (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="What did you love about it? What made it special?"
              value={submitterMemory}
              onChange={(e) => setSubmitterMemory(e.target.value)}
              className="w-full p-4 rounded-xl bg-zinc-950 border border-white/15 text-white placeholder-zinc-500 text-sm sm:text-base focus:outline-none focus:border-red-500/60 resize-none font-sans leading-relaxed"
            />
          </div>

          {/* Submitter Email */}
          <div className="space-y-2">
            <label className="text-xs text-zinc-300 font-sans">
              Your Email (Optional, strictly for verification contact if needed)
            </label>
            <input
              type="email"
              placeholder="curator@example.com"
              value={submitterEmail}
              onChange={(e) => setSubmitterEmail(e.target.value)}
              className="w-full p-4 rounded-xl bg-zinc-950 border border-white/15 text-white placeholder-zinc-500 text-sm sm:text-base focus:outline-none focus:border-red-500/60"
            />
          </div>

          {/* Policy Notice */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
            Submissions are reviewed by archaeology moderators. We do not immediately publish unverified reports to prevent false claims.
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-500 disabled:opacity-50 text-white font-bold text-base tracking-wider uppercase transition-colors shadow-lg hover:shadow-red-600/30 flex items-center justify-center gap-3 cursor-pointer shrink-0"
          >
            <Send className="w-5 h-5 shrink-0" />
            <span>{loading ? 'Submitting to Queue...' : 'Submit for Investigation'}</span>
          </button>
        </form>
      )}
    </div>
  );
}

export default function SubmitGravePage() {
  return (
    <Suspense fallback={<div className="p-16 text-center text-graveyard-400 font-mono text-xs">Loading submission registry...</div>}>
      <SubmitGraveForm />
    </Suspense>
  );
}
