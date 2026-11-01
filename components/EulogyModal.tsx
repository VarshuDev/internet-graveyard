"use client";

import React, { useState, useEffect } from "react";
import { GraveEntity } from "@/types/graveyard";
import { X, Sparkles, Copy, Check, Download, RefreshCw, Feather, Bell } from "lucide-react";
import { soundFx } from "@/lib/audio/soundFx";

interface EulogyModalProps {
  entity: GraveEntity;
  isOpen: boolean;
  onClose: () => void;
}

export function EulogyModal({ entity, isOpen, onClose }: EulogyModalProps) {
  const [eulogy, setEulogy] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [provider, setProvider] = useState<string>("");

  const fetchEulogy = async () => {
    setLoading(true);
    setCopied(false);
    try {
      soundFx.playBell();
      const res = await fetch("/api/ai/eulogy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          relic: {
            title: entity.name,
            birthYear: entity.founded_year,
            deathYear: entity.death_year,
            causeOfDeath: entity.cause_of_death_summary,
            epitaph: entity.tagline,
            impact: entity.category
          }
        })
      });

      if (!res.ok) throw new Error("Failed to fetch eulogy");
      const data = await res.json();
      setEulogy(data.eulogy || "");
      setProvider(data.provider || "");
    } catch (err) {
      console.error(err);
      setEulogy(`In memory of ${entity.name} (${entity.lifespan}). Though silicon fades and servers are decommissioned, your digital spirit remains forever etched in the history of the open web.`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen && !eulogy) {
      fetchEulogy();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopy = () => {
    if (eulogy) {
      navigator.clipboard.writeText(eulogy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleDownload = () => {
    if (!eulogy) return;
    const blob = new Blob([eulogy], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${entity.slug}-funeral-eulogy.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in font-sans">
      <div className="relative w-full max-w-2xl rounded-2xl bg-zinc-950 border-2 border-amber-500/40 shadow-[0_0_50px_rgba(245,158,11,0.2)] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-zinc-900/90 border-b border-amber-500/20">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Feather className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-serif font-black text-amber-200 tracking-wide">
                FUNERAL ORATION // {entity.name.toUpperCase()}
              </h3>
              <p className="text-xs font-mono text-zinc-400">
                {entity.lifespan} • Preserved in Cyber-Necropolis
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Eulogy Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {loading ? (
            <div className="py-12 flex flex-col items-center justify-center space-y-4 text-center font-mono">
              <RefreshCw className="w-8 h-8 text-amber-400 animate-spin" />
              <p className="text-sm text-amber-200/90">
                Summoning High Digital Mortician...
              </p>
              <p className="text-xs text-zinc-400">
                Composing sacred funeral eulogy via Gemini AI
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-amber-950/20 border border-amber-500/30 text-zinc-100 font-serif leading-relaxed sm:text-lg italic whitespace-pre-line shadow-inner">
                {eulogy}
              </div>

              {provider && (
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 pt-2 border-t border-white/5">
                  <span className="flex items-center gap-1 text-amber-400/80">
                    <Sparkles className="w-3.5 h-3.5" />
                    Delivered by Internet Graveyard AI Mortician ({provider})
                  </span>
                  <span>CONFIDENCE: 100%</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 bg-zinc-900/90 border-t border-amber-500/20 flex-wrap gap-3">
          <button
            onClick={fetchEulogy}
            disabled={loading}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-850 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 text-xs font-mono transition-all disabled:opacity-50 cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
            <span>Re-compose</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              disabled={loading || !eulogy}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-850 hover:bg-zinc-800 border border-white/15 text-zinc-200 hover:text-white text-xs font-mono font-bold transition-all disabled:opacity-50 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Orations</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownload}
              disabled={loading || !eulogy}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-black text-xs font-mono font-bold transition-all disabled:opacity-50 shadow-md cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Save Tribute</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EulogyModal;
