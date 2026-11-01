"use client";

import React, { useState, useEffect } from "react";
import { GraveEntity, EpitaphItem, OfferingKind, GraveOfferings } from "@/types/graveyard";
import { 
  Heart, 
  Send, 
  Sparkles, 
  Bell, 
  Flame, 
  Disc, 
  CheckCircle2, 
  Clock, 
  User, 
  MessageSquare,
  Volume2
} from "lucide-react";
import { soundFx } from "@/lib/audio/soundFx";
import { cn } from "@/lib/utils";

interface MemorialGuestbookProps {
  entity: GraveEntity;
}

export function MemorialGuestbook({ entity }: MemorialGuestbookProps) {
  const [offerings, setOfferings] = useState<GraveOfferings>({
    candles: entity.candle_count || 1240,
    roses: Math.round((entity.candle_count || 1240) * 0.4),
    floppy_disks: Math.round((entity.candle_count || 1240) * 0.25),
    bells_tolled: Math.round((entity.candle_count || 1240) * 0.15)
  });

  const [epitaphs, setEpitaphs] = useState<EpitaphItem[]>(entity.epitaphs || []);
  const [activeOffering, setActiveOffering] = useState<OfferingKind>("CANDLE");
  const [authorName, setAuthorName] = useState("");
  const [content, setContent] = useState("");
  const [yearsUsed, setYearsUsed] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [successNotice, setSuccessNotice] = useState(false);
  const [animatingOffering, setAnimatingOffering] = useState<OfferingKind | null>(null);

  // Fetch initial live offerings
  useEffect(() => {
    fetch(`/api/entities/${entity.slug}/offerings`)
      .then((res) => res.json())
      .then((data) => {
        if (data.offerings) {
          setOfferings(data.offerings);
        }
      })
      .catch(() => {});
  }, [entity.slug]);

  const handleQuickOffering = async (kind: OfferingKind) => {
    setAnimatingOffering(kind);
    setTimeout(() => setAnimatingOffering(null), 1000);

    // Audio & sensory triggers
    if (kind === "CANDLE") {
      soundFx.playCandle();
    } else if (kind === "BELL") {
      soundFx.playBell();
    } else if (kind === "FLOPPY") {
      soundFx.playKeyClick();
    } else if (kind === "ROSE") {
      soundFx.playChime();
    }

    // Optimistic update
    setOfferings((prev) => ({
      ...prev,
      candles: kind === "CANDLE" ? prev.candles + 1 : prev.candles,
      roses: kind === "ROSE" ? prev.roses + 1 : prev.roses,
      floppy_disks: kind === "FLOPPY" ? prev.floppy_disks + 1 : prev.floppy_disks,
      bells_tolled: kind === "BELL" ? prev.bells_tolled + 1 : prev.bells_tolled
    }));

    try {
      const res = await fetch(`/api/entities/${entity.slug}/offerings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind })
      });
      if (res.ok) {
        const data = await res.json();
        if (data.offerings) setOfferings(data.offerings);
      }
    } catch {}
  };

  const handlePostMemory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() || submitting) return;

    setSubmitting(true);
    soundFx.playChime();

    try {
      const res = await fetch(`/api/entities/${entity.slug}/epitaph`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          author_name: authorName || "Anonymous Mourner",
          content,
          years_used: yearsUsed,
          offering_type: activeOffering
        })
      });

      if (res.ok) {
        const data = await res.json();
        if (data.epitaph) {
          setEpitaphs((prev) => [data.epitaph, ...prev]);
          setContent("");
          setYearsUsed("");
          setAuthorName("");
          setSuccessNotice(true);
          setTimeout(() => setSuccessNotice(false), 4000);

          // Update local offering tally
          handleQuickOffering(activeOffering);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleHeartEpitaph = async (id: string) => {
    soundFx.playKeyClick();
    setEpitaphs((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, hearts: (item.hearts || 1) + 1 } : item
      )
    );

    try {
      await fetch(`/api/entities/${entity.slug}/epitaph/${id}/heart`, {
        method: "POST"
      });
    } catch {}
  };

  const offeringConfigs: { kind: OfferingKind; label: string; icon: string; count: number; color: string; bg: string }[] = [
    {
      kind: "CANDLE",
      label: "528Hz Candle",
      icon: "🕯️",
      count: offerings.candles,
      color: "text-amber-400 border-amber-500/40",
      bg: "bg-amber-950/30 hover:bg-amber-950/50"
    },
    {
      kind: "ROSE",
      label: "Digital Rose",
      icon: "🌹",
      count: offerings.roses,
      color: "text-red-400 border-red-500/40",
      bg: "bg-red-950/30 hover:bg-red-950/50"
    },
    {
      kind: "FLOPPY",
      label: "Floppy Disk",
      icon: "💾",
      count: offerings.floppy_disks,
      color: "text-cyan-400 border-cyan-500/40",
      bg: "bg-cyan-950/30 hover:bg-cyan-950/50"
    },
    {
      kind: "BELL",
      label: "Death Knell",
      icon: "🔔",
      count: offerings.bells_tolled,
      color: "text-emerald-400 border-emerald-500/40",
      bg: "bg-emerald-950/30 hover:bg-emerald-950/50"
    }
  ];

  return (
    <section className="space-y-8 font-sans">
      {/* 1. VIRTUAL OFFERINGS SHRINE */}
      <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-white/10 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white">
              VIRTUAL OFFERING ALTAR // CONSECRATED TRIBUTES
            </h3>
          </div>
          <span className="text-xs font-mono text-zinc-400">
            Click an offering to lay respects in memory of {entity.name}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {offeringConfigs.map((item) => (
            <button
              key={item.kind}
              onClick={() => handleQuickOffering(item.kind)}
              className={cn(
                "p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all cursor-pointer group shadow-sm active:scale-95",
                item.color,
                item.bg,
                animatingOffering === item.kind ? "ring-2 ring-white scale-105" : ""
              )}
            >
              <span className="text-3xl group-hover:scale-125 transition-transform duration-200">
                {item.icon}
              </span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-200">
                {item.label}
              </span>
              <span className="text-lg font-mono font-black text-white">
                {item.count.toLocaleString()}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 2. COMMUNITY GUESTBOOK & CONDOLENCE WALL */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left Form (2 cols) */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-zinc-900/90 border border-white/10 space-y-5">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-zinc-300">
            <MessageSquare className="w-4 h-4 text-amber-400" />
            <span>Leave a Memory or Epitaph</span>
          </div>

          <form onSubmit={handlePostMemory} className="space-y-4 text-xs font-mono">
            <div>
              <label className="block text-zinc-400 mb-1.5 uppercase tracking-wider text-[11px]">
                Your Alias / Mourner Handle:
              </label>
              <input
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder="e.g. Former Flash Animator"
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-white/15 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-zinc-400 mb-1.5 uppercase tracking-wider text-[11px]">
                Years You Used This Service:
              </label>
              <input
                type="text"
                value={yearsUsed}
                onChange={(e) => setYearsUsed(e.target.value)}
                placeholder={`e.g. ${entity.founded_year} — ${entity.death_year || 2018}`}
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-white/15 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-zinc-400 mb-1.5 uppercase tracking-wider text-[11px]">
                Accompanying Virtual Offering:
              </label>
              <div className="grid grid-cols-4 gap-2">
                {offeringConfigs.map((item) => (
                  <button
                    key={item.kind}
                    type="button"
                    onClick={() => setActiveOffering(item.kind)}
                    className={cn(
                      "p-2 rounded-lg border text-center transition-all cursor-pointer",
                      activeOffering === item.kind
                        ? "bg-amber-500/20 border-amber-400 text-amber-300"
                        : "bg-zinc-950 border-white/10 text-zinc-400 hover:text-white"
                    )}
                  >
                    <div className="text-lg">{item.icon}</div>
                    <div className="text-[10px] font-bold mt-1 truncate">{item.kind}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-zinc-400 mb-1.5 uppercase tracking-wider text-[11px]">
                Epitaph / Farewell Memory:
              </label>
              <textarea
                rows={3}
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder={`Where were you when ${entity.name} closed? What did this platform mean to you?`}
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-white/15 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors leading-relaxed font-sans text-xs sm:text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={submitting || !content.trim()}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold uppercase tracking-wider transition-all disabled:opacity-50 cursor-pointer shadow-md font-mono text-xs"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{submitting ? "Engraving Epitaph..." : "Engrave in Eternal Ledger"}</span>
            </button>

            {successNotice && (
              <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>Your memory has been etched into the consecrated archive.</span>
              </div>
            )}
          </form>
        </div>

        {/* Right Memory Feed (3 cols) */}
        <div className="lg:col-span-3 space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 border-b border-white/10 pb-3">
            <span className="font-bold text-white uppercase tracking-wider">
              Mourners' Condolences ({epitaphs.length})
            </span>
            <span>Sorted by Most Recent</span>
          </div>

          <div className="space-y-3.5 max-h-[520px] overflow-y-auto pr-1">
            {epitaphs.length === 0 ? (
              <div className="p-8 rounded-2xl bg-zinc-950 border border-white/10 text-center font-mono text-zinc-500 text-xs space-y-2">
                <div>No written epitaphs recorded yet.</div>
                <div>Be the first mourner to engrave a memory.</div>
              </div>
            ) : (
              epitaphs.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-xl bg-zinc-950 border border-white/10 space-y-3 hover:border-white/20 transition-colors"
                >
                  <div className="flex items-center justify-between gap-3 text-xs font-mono">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-base shrink-0">
                        {item.offering_type === "ROSE"
                          ? "🌹"
                          : item.offering_type === "FLOPPY"
                          ? "💾"
                          : item.offering_type === "BELL"
                          ? "🔔"
                          : "🕯️"}
                      </span>
                      <span className="font-bold text-white truncate">
                        {item.author_name}
                      </span>
                      {item.years_used && (
                        <span className="text-zinc-500 text-[11px] truncate">
                          ({item.years_used})
                        </span>
                      )}
                    </div>

                    <span className="text-zinc-500 text-[10px] shrink-0">
                      {new Date(item.created_at).toLocaleDateString([], {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                      })}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-200 font-sans leading-relaxed italic">
                    "{item.content}"
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs font-mono">
                    <span className="text-[10px] text-zinc-500 uppercase">
                      TRIBUTE VERIFIED
                    </span>

                    <button
                      onClick={() => handleHeartEpitaph(item.id)}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-red-400 transition-colors cursor-pointer border border-white/5"
                    >
                      <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500/20" />
                      <span className="text-[11px] font-bold">
                        {item.hearts || 1}
                      </span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MemorialGuestbook;
