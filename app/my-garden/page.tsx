"use client";

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import { GraveEntity } from '@/types/graveyard';
import { gardenStore, GardenArchetype } from '@/lib/storage/gardenStore';
import { GraveCard } from '@/components/GraveCard';
import { 
  Heart, 
  Sparkles, 
  Download, 
  Trash2, 
  Compass, 
  ArrowRight, 
  Share2, 
  Calendar, 
  Flame, 
  ShieldCheck, 
  Layers,
  Terminal,
  Skull
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { soundFx } from '@/lib/audio/soundFx';

const CURATED_SUGGESTIONS = [
  'vine',
  'geocities',
  'club-penguin',
  'google-reader',
  'msn-messenger',
  'adobe-flash'
];

export default function MyGardenPage() {
  const [allEntities, setAllEntities] = useState<GraveEntity[]>([]);
  const [savedSlugs, setSavedSlugs] = useState<string[]>([]);
  const [isGeneratingCard, setIsGeneratingCard] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Load live entities and saved garden slugs
  useEffect(() => {
    setSavedSlugs(gardenStore.getGardenSlugs());

    fetch('/api/entities')
      .then(res => res.json())
      .then(data => {
        const list = Array.isArray(data) ? data : (data?.entities || []);
        if (list.length > 0) {
          setAllEntities(list);
        }
      })
      .catch(() => {});

    const handleUpdate = () => {
      setSavedSlugs(gardenStore.getGardenSlugs());
    };

    window.addEventListener('garden-updated', handleUpdate);
    return () => window.removeEventListener('garden-updated', handleUpdate);
  }, []);

  // Filter saved entities from full database
  const gardenEntities = useMemo(() => {
    const slugSet = new Set(savedSlugs);
    return allEntities.filter(e => slugSet.has(e.slug));
  }, [allEntities, savedSlugs]);

  // Compute archetype classification
  const archetype: GardenArchetype = useMemo(() => {
    return gardenStore.classifyArchetype(gardenEntities);
  }, [gardenEntities]);

  // Filter by category
  const filteredGarden = useMemo(() => {
    if (selectedCategory === 'All') return gardenEntities;
    return gardenEntities.filter(e => e.category === selectedCategory);
  }, [gardenEntities, selectedCategory]);

  const categories = useMemo(() => {
    const cats = new Set(gardenEntities.map(e => e.category));
    return ['All', ...Array.from(cats)];
  }, [gardenEntities]);

  // Total candles lit across garden relics
  const totalGardenCandles = useMemo(() => {
    return gardenEntities.reduce((sum, e) => sum + (e.candle_count || 120), 0);
  }, [gardenEntities]);

  const handleClearGarden = () => {
    if (confirm("Are you sure you want to clear your private memorial garden?")) {
      gardenStore.clearGarden();
      setSavedSlugs([]);
      soundFx.playClick(400);
    }
  };

  const handleAddSuggested = (slug: string) => {
    gardenStore.toggleGarden(slug);
    setSavedSlugs(gardenStore.getGardenSlugs());
  };

  // High-Resolution Nostalgia Trading Card Generator (Canvas PNG)
  const generateTradingCard = () => {
    setIsGeneratingCard(true);
    soundFx.playChime(750);

    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 630;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      setIsGeneratingCard(false);
      return;
    }

    // 1. Dark Gradient Background
    const bgGrad = ctx.createLinearGradient(0, 0, 1200, 630);
    bgGrad.addColorStop(0, '#09090b');
    bgGrad.addColorStop(0.5, '#0d0d12');
    bgGrad.addColorStop(1, '#050507');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1200, 630);

    // 2. Cyber-archival grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.lineWidth = 1;
    for (let x = 0; x < 1200; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 630);
      ctx.stroke();
    }
    for (let y = 0; y < 630; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(1200, y);
      ctx.stroke();
    }

    // 3. Ambient Glows
    const glow1 = ctx.createRadialGradient(200, 150, 10, 200, 150, 400);
    glow1.addColorStop(0, 'rgba(244, 63, 94, 0.15)'); // Rose
    glow1.addColorStop(1, 'transparent');
    ctx.fillStyle = glow1;
    ctx.fillRect(0, 0, 1200, 630);

    const glow2 = ctx.createRadialGradient(1000, 480, 10, 1000, 480, 350);
    glow2.addColorStop(0, 'rgba(245, 158, 11, 0.12)'); // Amber
    glow2.addColorStop(1, 'transparent');
    ctx.fillStyle = glow2;
    ctx.fillRect(0, 0, 1200, 630);

    // 4. Outer Border & Filigree Brackets
    ctx.strokeStyle = 'rgba(244, 63, 94, 0.4)';
    ctx.lineWidth = 2;
    ctx.strokeRect(28, 28, 1200 - 56, 630 - 56);

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    ctx.strokeRect(36, 36, 1200 - 72, 630 - 72);

    // 5. Header Masthead
    ctx.font = 'bold 13px monospace';
    ctx.fillStyle = '#f43f5e';
    ctx.fillText('† INTERNET GRAVEYARD // PERSONAL MEMORIAL GARDEN', 60, 75);

    ctx.font = 'bold 36px serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('The Lost Internet of an Archival Wanderer', 60, 120);

    // 6. Archetype Classification Box
    ctx.fillStyle = 'rgba(24, 24, 27, 0.9)';
    ctx.fillRect(60, 150, 1080, 110);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.strokeRect(60, 150, 1080, 110);

    ctx.font = 'bold 12px monospace';
    ctx.fillStyle = '#fbbf24';
    ctx.fillText(`CLASSIFICATION: ${archetype.badge}`, 85, 185);

    ctx.font = 'bold 24px serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(archetype.title, 85, 220);

    ctx.font = '14px sans-serif';
    ctx.fillStyle = '#a1a1aa';
    ctx.fillText(archetype.description.slice(0, 110) + '...', 85, 245);

    // Nostalgia Score Badge
    ctx.fillStyle = 'rgba(244, 63, 94, 0.15)';
    ctx.fillRect(940, 165, 180, 80);
    ctx.strokeStyle = 'rgba(244, 63, 94, 0.4)';
    ctx.strokeRect(940, 165, 180, 80);

    ctx.font = '10px monospace';
    ctx.fillStyle = '#f43f5e';
    ctx.fillText('NOSTALGIA INDEX', 975, 190);

    ctx.font = 'bold 32px monospace';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`${archetype.nostalgiaScore}%`, 995, 228);

    // 7. List of Consecrated Relics (Up to 6)
    ctx.font = 'bold 14px monospace';
    ctx.fillStyle = '#71717a';
    ctx.fillText(`CONSECRATED SITES (${gardenEntities.length} TOTAL IN PRIVATE LEDGER):`, 60, 300);

    const itemsToShow = gardenEntities.slice(0, 6);
    const startY = 330;
    const colWidth = 525;

    itemsToShow.forEach((item, idx) => {
      const col = idx < 3 ? 0 : 1;
      const row = idx % 3;
      const x = 60 + col * colWidth;
      const y = startY + row * 80;

      // Card box
      ctx.fillStyle = 'rgba(18, 18, 22, 0.7)';
      ctx.fillRect(x, y, colWidth - 20, 68);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.strokeRect(x, y, colWidth - 20, 68);

      // Relic Name
      ctx.font = 'bold 18px serif';
      ctx.fillStyle = '#ffffff';
      ctx.fillText(item.name, x + 20, y + 30);

      // Lifespan & Category
      ctx.font = '12px monospace';
      ctx.fillStyle = '#f43f5e';
      ctx.fillText(item.lifespan, x + 20, y + 52);

      ctx.fillStyle = '#71717a';
      ctx.fillText(`• ${item.category}`, x + 160, y + 52);
    });

    if (itemsToShow.length === 0) {
      ctx.font = 'italic 16px sans-serif';
      ctx.fillStyle = '#52525b';
      ctx.fillText('No relics consecrated yet. Visit internet-graveyard.vercel.app to preserve your favorites.', 60, 360);
    }

    // 8. Footer
    ctx.font = '11px monospace';
    ctx.fillStyle = '#52525b';
    ctx.fillText(`ISSUED: ${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} • SHA-256 INTEGRITY SEAL`, 60, 585);
    ctx.fillText('HTTPS://GITHUB.COM/VARSHUDEV/INTERNET-GRAVEYARD', 730, 585);

    // Convert to PNG download
    setTimeout(() => {
      try {
        const link = document.createElement('a');
        link.download = `my-internet-graveyard-garden-${new Date().toISOString().slice(0, 10)}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      } finally {
        setIsGeneratingCard(false);
      }
    }, 400);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-10 font-sans min-h-[85vh]">
      {/* 1. Header & Identity */}
      <div className="relative rounded-3xl bg-zinc-900/90 border border-white/10 p-6 sm:p-10 backdrop-blur-md overflow-hidden shadow-2xl space-y-6">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-950/60 border border-rose-500/30 text-rose-300 text-xs font-mono font-bold tracking-wider shrink-0">
              <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
              <span>PRIVATE CRYPT & NOSTALGIA REGISTRY</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight drop-shadow-md">
              My Memorial Garden
            </h1>

            <p className="text-base text-zinc-300 font-sans leading-relaxed">
              Your personal consecrated plot in cyberspace. Preserve the departed websites, virtual worlds, chat clients, and games that formed your digital youth.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {gardenEntities.length > 0 && (
              <>
                <button
                  onClick={generateTradingCard}
                  disabled={isGeneratingCard}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-mono font-bold text-xs transition-all shadow-lg hover:shadow-rose-600/30 cursor-pointer disabled:opacity-50"
                  title="Generate shareable Nostalgia Trading Card PNG"
                >
                  <Download className="w-4 h-4" />
                  <span>{isGeneratingCard ? "Crafting Card..." : "Export Nostalgia Card (PNG)"}</span>
                </button>

                <button
                  onClick={handleClearGarden}
                  className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-750 text-zinc-400 hover:text-red-400 border border-white/10 text-xs font-mono transition-colors cursor-pointer"
                  title="Clear all saved relics"
                >
                  <Trash2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Clear</span>
                </button>
              </>
            )}

            <Link
              href="/explore"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-750 text-white border border-white/15 text-xs font-mono font-bold transition-all"
            >
              <Compass className="w-4 h-4 text-emerald-400" />
              <span>Explore All 1,027</span>
            </Link>
          </div>
        </div>

        {/* 2. Archetype Classifier Banner */}
        <div className="p-6 rounded-2xl bg-zinc-950 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-md bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono font-bold text-xs">
                {archetype.badge}
              </span>
              <span className="text-zinc-500">•</span>
              <span className="text-xs font-mono text-zinc-400">Primary Era: {archetype.primaryEra}</span>
            </div>

            <h3 className="text-2xl font-serif font-bold text-white">
              {archetype.title}
            </h3>

            <p className="text-sm text-zinc-300 font-sans leading-relaxed max-w-3xl">
              {archetype.description}
            </p>
          </div>

          <div className="flex items-center gap-6 p-4 rounded-xl bg-zinc-900 border border-white/10 shrink-0">
            <div className="space-y-0.5">
              <div className="text-[10px] font-mono text-zinc-500 uppercase">Consecrated</div>
              <div className="text-2xl font-black text-rose-400 font-mono">{gardenEntities.length} Relics</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="space-y-0.5">
              <div className="text-[10px] font-mono text-zinc-500 uppercase">Tributes</div>
              <div className="text-2xl font-black text-amber-400 font-mono flex items-center gap-1">
                <Flame className="w-4 h-4 fill-amber-400 text-amber-400 animate-pulse" />
                <span>{totalGardenCandles.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Filter Controls */}
      {gardenEntities.length > 0 && (
        <div className="flex items-center justify-between gap-4 flex-wrap pb-2 border-b border-white/10">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer whitespace-nowrap shrink-0",
                  selectedCategory === cat
                    ? "bg-rose-600 text-white font-bold shadow-md shadow-rose-600/30"
                    : "bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
                )}
              >
                {cat} ({cat === 'All' ? gardenEntities.length : gardenEntities.filter(e => e.category === cat).length})
              </button>
            ))}
          </div>

          <div className="text-xs font-mono text-zinc-400">
            Showing {filteredGarden.length} of {gardenEntities.length} Saved Graves
          </div>
        </div>
      )}

      {/* 4. Garden Grid of Graves */}
      {filteredGarden.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {filteredGarden.map((entity) => (
            <GraveCard key={entity.id} entity={entity} />
          ))}
        </div>
      ) : gardenEntities.length > 0 ? (
        <div className="p-12 text-center rounded-2xl bg-zinc-900/60 border border-white/10 space-y-3 font-mono text-sm text-zinc-400">
          <div>No relics in category "{selectedCategory}".</div>
          <button
            onClick={() => setSelectedCategory('All')}
            className="text-rose-400 underline hover:text-rose-300 cursor-pointer"
          >
            Show All Saved Relics
          </button>
        </div>
      ) : (
        /* Empty State with Curated One-Click Seeds */
        <div className="p-10 sm:p-16 rounded-3xl bg-zinc-900/50 border border-dashed border-white/15 text-center space-y-8">
          <div className="w-16 h-16 rounded-2xl bg-rose-950/40 border border-rose-500/30 text-rose-400 flex items-center justify-center mx-auto shadow-inner">
            <Heart className="w-8 h-8 animate-pulse text-rose-500" />
          </div>

          <div className="space-y-2 max-w-md mx-auto">
            <h3 className="text-2xl font-serif font-black text-white">Your Garden Awaits Consecration</h3>
            <p className="text-sm text-zinc-400 font-sans leading-relaxed">
              You haven’t consecrated any relics yet. Click the <strong className="text-rose-400">"Consecrate"</strong> heart on any grave across the necropolis to preserve it in your personal nostalgia crypt.
            </p>
          </div>

          {/* Quick-add popular recommendations */}
          <div className="pt-2 space-y-4 max-w-xl mx-auto">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold">
              Or quick-consecrate beloved cultural milestones:
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {CURATED_SUGGESTIONS.map((slug) => {
                const entity = allEntities.find(e => e.slug === slug);
                if (!entity) return null;
                const isSaved = savedSlugs.includes(slug);

                return (
                  <button
                    key={slug}
                    onClick={() => handleAddSuggested(slug)}
                    className={cn(
                      "flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono transition-all border cursor-pointer",
                      isSaved
                        ? "bg-rose-950/60 border-rose-500/50 text-rose-300"
                        : "bg-zinc-900 hover:bg-zinc-850 border-white/10 text-zinc-300 hover:border-rose-500/40"
                    )}
                  >
                    <Heart className={cn("w-3.5 h-3.5", isSaved ? "fill-rose-500 text-rose-500" : "text-zinc-500")} />
                    <span>{entity.name}</span>
                    <span className="text-zinc-500 text-[10px]">({entity.lifespan})</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-4">
            <Link
              href="/explore"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-mono font-bold text-xs transition-all shadow-lg hover:shadow-red-600/30"
            >
              <span>Browse All 1,027 Historic Relics</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
