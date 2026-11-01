"use client";

import React, { useRef, useEffect, useState, useMemo, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { GraveEntity } from '@/types/graveyard';
import { relicAudio } from '@/lib/audio/soundArchive';
import { 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Compass, 
  Layers, 
  Sparkles, 
  Eye, 
  Info,
  ExternalLink,
  Flame
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { soundFx } from '@/lib/audio/soundFx';

interface NecropolisCanvasProps {
  entities: GraveEntity[];
  className?: string;
}

interface PlotNode {
  entity: GraveEntity;
  col: number;
  row: number;
  district: 'dotcom' | 'web2' | 'mobile' | 'modern';
  districtName: string;
  color: string;
  glowColor: string;
}

interface MistParticle {
  x: number;
  y: number;
  vx: number;
  radius: number;
  alpha: number;
  phase: number;
}

export const NecropolisCanvas: React.FC<NecropolisCanvasProps> = ({
  entities,
  className
}) => {
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [hoveredNode, setHoveredNode] = useState<PlotNode | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);
  const [isAmbientPlaying, setIsAmbientPlaying] = useState(false);
  const [zoom, setZoom] = useState(1.0);

  // Camera coordinates (world offset)
  const cameraRef = useRef({ x: 0, y: 0, isDragging: false, dragStartX: 0, dragStartY: 0 });

  // Map landmark entities onto an isometric grid organized by historical district
  const plotNodes: PlotNode[] = useMemo(() => {
    // Select landmarks for optimal 60fps isometric canvas rendering
    const landmarks = entities.length > 96
      ? [...entities].sort((a, b) => (b.candle_count || 0) - (a.candle_count || 0)).slice(0, 96)
      : entities;
    const sorted = [...landmarks].sort((a, b) => (a.founded_year || 2000) - (b.founded_year || 2000));
    
    // Grid configuration: 8 clusters along isometric axes
    const colsPerRow = 8;
    return sorted.map((entity, idx) => {
      const year = entity.death_year || 2020;
      let district: PlotNode['district'] = 'web2';
      let districtName = 'Web 2.0 Catacombs (2003—2011)';
      let color = '#38bdf8';
      let glowColor = 'rgba(56, 189, 248, 0.4)';

      if (year <= 2002 || (entity.founded_year && entity.founded_year < 1998)) {
        district = 'dotcom';
        districtName = 'Dot-Com Crypts (1995—2002)';
        color = '#f59e0b';
        glowColor = 'rgba(245, 158, 11, 0.4)';
      } else if (year >= 2021) {
        district = 'modern';
        districtName = 'Recent Casualties Cloister (2021—2026)';
        color = '#ef4444';
        glowColor = 'rgba(239, 68, 68, 0.45)';
      } else if (year >= 2012) {
        district = 'mobile';
        districtName = 'Mobile & Social Monoliths (2012—2020)';
        color = '#a855f7';
        glowColor = 'rgba(168, 85, 247, 0.4)';
      }

      // Compute cluster col/row
      const districtOffsetMap: Record<PlotNode['district'], { cOff: number; rOff: number }> = {
        'dotcom': { cOff: 0, rOff: 0 },
        'web2': { cOff: 8, rOff: 0 },
        'mobile': { cOff: 0, rOff: 8 },
        'modern': { cOff: 8, rOff: 8 }
      };

      const off = districtOffsetMap[district];
      const localIndex = idx % 21;
      const col = off.cOff + (localIndex % colsPerRow);
      const row = off.rOff + Math.floor(localIndex / colsPerRow);

      return {
        entity,
        col,
        row,
        district,
        districtName,
        color,
        glowColor
      };
    });
  }, [entities]);

  // Particle mist simulation
  const mistParticles = useRef<MistParticle[]>([]);

  useEffect(() => {
    // Generate mist particles
    const particles: MistParticle[] = [];
    for (let i = 0; i < 35; i++) {
      particles.push({
        x: Math.random() * 2000 - 1000,
        y: Math.random() * 1400 - 700,
        vx: 0.15 + Math.random() * 0.35,
        radius: 40 + Math.random() * 70,
        alpha: 0.03 + Math.random() * 0.06,
        phase: Math.random() * Math.PI * 2
      });
    }
    mistParticles.current = particles;
  }, []);

  // Ambient sound toggle
  const handleToggleAmbient = () => {
    const newState = relicAudio.toggleAmbientNecropolis();
    setIsAmbientPlaying(newState);
  };

  // Convert grid col, row to screen X, Y
  const gridToScreen = useCallback((col: number, row: number, originX: number, originY: number, curZoom: number) => {
    const tileW = 92 * curZoom;
    const tileH = 46 * curZoom;
    const screenX = originX + (col - row) * (tileW / 2);
    const screenY = originY + (col + row) * (tileH / 2);
    return { screenX, screenY, tileW, tileH };
  }, []);

  // Main Render Loop
  useEffect(() => {
    let animId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;

    const render = () => {
      time += 0.016;

      // Handle Resize / Retina DPI
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const dpr = window.devicePixelRatio || 1;

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);

      // 1. Dark Atmospheric Background
      const bgGrad = ctx.createRadialGradient(width / 2, height / 2, 80, width / 2, height / 2, Math.max(width, height));
      bgGrad.addColorStop(0, '#0f1115');
      bgGrad.addColorStop(0.5, '#07080a');
      bgGrad.addColorStop(1, '#020304');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Camera Origin
      const originX = width / 2 + cameraRef.current.x;
      const originY = height * 0.18 + cameraRef.current.y;

      // 3. Draw Isometric Ground Tiles & District Ground
      // Sort plots back-to-front (depth sort col + row)
      const sortedPlots = [...plotNodes].sort((a, b) => (a.col + a.row) - (b.col + b.row));

      sortedPlots.forEach((node) => {
        const { screenX, screenY, tileW, tileH } = gridToScreen(node.col, node.row, originX, originY, zoom);
        const isHovered = hoveredNode?.entity.slug === node.entity.slug;

        // Draw diamond tile base
        ctx.beginPath();
        ctx.moveTo(screenX, screenY);
        ctx.lineTo(screenX + tileW / 2, screenY + tileH / 2);
        ctx.lineTo(screenX, screenY + tileH);
        ctx.lineTo(screenX - tileW / 2, screenY + tileH / 2);
        ctx.closePath();

        ctx.fillStyle = isHovered ? 'rgba(39, 44, 53, 0.95)' : 'rgba(18, 20, 24, 0.7)';
        ctx.fill();
        ctx.strokeStyle = isHovered ? node.color : 'rgba(255, 255, 255, 0.07)';
        ctx.lineWidth = isHovered ? 2 : 1;
        ctx.stroke();

        // 4. Draw 3D Tombstone / Crypt Pillar
        const pillarH = (isHovered ? 48 : 38) * zoom;
        const topY = screenY - pillarH + (tileH / 2);
        const halfW = (tileW / 4);

        // Ground drop shadow
        ctx.beginPath();
        ctx.ellipse(screenX, screenY + tileH / 2, halfW * 1.2, (tileH / 4) * 1.2, 0, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.55)';
        ctx.fill();

        // Left face of stone
        ctx.beginPath();
        ctx.moveTo(screenX - halfW, screenY + tileH / 4);
        ctx.lineTo(screenX, screenY + tileH / 2);
        ctx.lineTo(screenX, topY + tileH / 4);
        ctx.lineTo(screenX - halfW, topY);
        ctx.closePath();
        ctx.fillStyle = isHovered ? '#2a2f3a' : '#14171d';
        ctx.fill();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.stroke();

        // Right face of stone
        ctx.beginPath();
        ctx.moveTo(screenX, screenY + tileH / 2);
        ctx.lineTo(screenX + halfW, screenY + tileH / 4);
        ctx.lineTo(screenX + halfW, topY);
        ctx.lineTo(screenX, topY + tileH / 4);
        ctx.closePath();
        ctx.fillStyle = isHovered ? '#3b4252' : '#1f242e';
        ctx.fill();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
        ctx.stroke();

        // Top cap of stone
        ctx.beginPath();
        ctx.moveTo(screenX, topY - tileH / 4);
        ctx.lineTo(screenX + halfW, topY);
        ctx.lineTo(screenX, topY + tileH / 4);
        ctx.lineTo(screenX - halfW, topY);
        ctx.closePath();
        ctx.fillStyle = isHovered ? node.color : '#2e3440';
        ctx.fill();

        // Monument Rune / Initial Letter
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = `bold ${Math.round(11 * zoom)}px -apple-system, monospace`;
        ctx.fillStyle = isHovered ? '#ffffff' : node.color;
        ctx.fillText(node.entity.name.slice(0, 3).toUpperCase(), screenX, topY + 12 * zoom);

        // Digital Candle Flame on top of tombstone
        const flameFlicker = Math.sin(time * 8 + node.col * 2) * 1.5;
        const flameY = topY - tileH / 4 - 5 * zoom + flameFlicker;

        // Glowing halo
        const haloGrad = ctx.createRadialGradient(screenX, flameY, 0, screenX, flameY, (isHovered ? 26 : 14) * zoom);
        haloGrad.addColorStop(0, isHovered ? node.glowColor : 'rgba(245, 158, 11, 0.4)');
        haloGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = haloGrad;
        ctx.beginPath();
        ctx.arc(screenX, flameY, (isHovered ? 26 : 14) * zoom, 0, Math.PI * 2);
        ctx.fill();

        // Flame core
        ctx.beginPath();
        ctx.arc(screenX, flameY, 2.5 * zoom, 0, Math.PI * 2);
        ctx.fillStyle = '#fef08a';
        ctx.fill();
      });

      // 5. Drifting Mist Layer
      mistParticles.current.forEach((p) => {
        p.x += p.vx;
        if (p.x > 1200) p.x = -1200;

        const pScreenX = width / 2 + p.x + cameraRef.current.x * 0.3;
        const pScreenY = height / 2 + p.y + Math.sin(time + p.phase) * 15 + cameraRef.current.y * 0.3;

        const mistGrad = ctx.createRadialGradient(pScreenX, pScreenY, 0, pScreenX, pScreenY, p.radius * zoom);
        mistGrad.addColorStop(0, `rgba(200, 220, 255, ${p.alpha})`);
        mistGrad.addColorStop(1, 'rgba(200, 220, 255, 0)');
        ctx.fillStyle = mistGrad;
        ctx.beginPath();
        ctx.arc(pScreenX, pScreenY, p.radius * zoom, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [plotNodes, hoveredNode, zoom, gridToScreen]);

  // Mouse Event Handlers: Drag camera, hover detection, click navigation
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    cameraRef.current.isDragging = true;
    cameraRef.current.dragStartX = e.clientX - cameraRef.current.x;
    cameraRef.current.dragStartY = e.clientY - cameraRef.current.y;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (cameraRef.current.isDragging) {
      cameraRef.current.x = e.clientX - cameraRef.current.dragStartX;
      cameraRef.current.y = e.clientY - cameraRef.current.dragStartY;
      return;
    }

    // Hit test detection for hover
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const originX = width / 2 + cameraRef.current.x;
    const originY = height * 0.18 + cameraRef.current.y;

    let found: PlotNode | null = null;

    // Check hit test against plot nodes
    for (let i = plotNodes.length - 1; i >= 0; i--) {
      const node = plotNodes[i];
      const { screenX, screenY, tileW, tileH } = gridToScreen(node.col, node.row, originX, originY, zoom);
      const pillarH = 40 * zoom;
      const topY = screenY - pillarH + (tileH / 2);

      // Simple bounding box hit test around the monument
      if (
        mouseX >= screenX - tileW / 2 &&
        mouseX <= screenX + tileW / 2 &&
        mouseY >= topY - tileH / 2 &&
        mouseY <= screenY + tileH
      ) {
        found = node;
        break;
      }
    }

    setHoveredNode(found);
    if (found) {
      setTooltipPos({ x: e.clientX, y: e.clientY });
    } else {
      setTooltipPos(null);
    }
  };

  const handleMouseUp = () => {
    cameraRef.current.isDragging = false;
  };

  const handleClick = () => {
    if (hoveredNode) {
      try {
        relicAudio.playMemorialChime();
      } catch {}
      router.push(`/grave/${hoveredNode.entity.slug}`);
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setZoom(prev => Math.min(1.8, Math.max(0.65, prev - e.deltaY * 0.001)));
  };

  return (
    <div 
      ref={containerRef}
      className={cn("relative w-full h-[620px] rounded-3xl overflow-hidden border border-white/15 bg-[#030406] shadow-2xl select-none", className)}
    >
      {/* 1. Canvas Layer */}
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => { handleMouseUp(); setHoveredNode(null); }}
        onClick={handleClick}
        onWheel={handleWheel}
        className={cn(
          "w-full h-full block cursor-grab active:cursor-grabbing",
          hoveredNode && "cursor-pointer"
        )}
      />

      {/* 2. Top HUD Bar */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
        {/* District Compass Legend */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/75 border border-white/15 text-xs font-mono text-zinc-300 backdrop-blur-md pointer-events-auto">
          <Compass className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-bold text-white uppercase tracking-wider">ISOMETRIC NECROPOLIS</span>
          <span className="text-zinc-500">•</span>
          <span className="text-zinc-400">{plotNodes.length} Verified Tombs</span>
        </div>

        {/* Audio Toggle & Zoom controls */}
        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            onClick={handleToggleAmbient}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer border backdrop-blur-md",
              isAmbientPlaying
                ? "bg-amber-500/20 border-amber-500/50 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.25)]"
                : "bg-black/70 border-white/15 text-zinc-400 hover:text-white"
            )}
            title="Toggle Ambient Necropolis Pink Noise Generator"
          >
            {isAmbientPlaying ? <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span>Necropolis Wind: {isAmbientPlaying ? 'ON' : 'OFF'}</span>
          </button>

          <button
            onClick={() => { cameraRef.current.x = 0; cameraRef.current.y = 0; setZoom(1.0); }}
            className="p-1.5 rounded-full bg-black/70 border border-white/15 text-zinc-400 hover:text-white transition-colors cursor-pointer backdrop-blur-md"
            title="Reset Camera Position"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 3. District Navigation Legend Bar */}
      <div className="absolute bottom-4 left-4 flex flex-wrap items-center gap-2 pointer-events-none">
        <div className="px-2.5 py-1 rounded-md bg-amber-950/70 border border-amber-500/40 text-[10px] font-mono text-amber-300 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span>Dot-Com Crypts (1995-2002)</span>
        </div>
        <div className="px-2.5 py-1 rounded-md bg-sky-950/70 border border-sky-500/40 text-[10px] font-mono text-sky-300 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-sky-400" />
          <span>Web 2.0 Catacombs (2003-2011)</span>
        </div>
        <div className="px-2.5 py-1 rounded-md bg-purple-950/70 border border-purple-500/40 text-[10px] font-mono text-purple-300 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-purple-400" />
          <span>Mobile Monoliths (2012-2020)</span>
        </div>
        <div className="px-2.5 py-1 rounded-md bg-red-950/70 border border-red-500/40 text-[10px] font-mono text-red-300 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-400" />
          <span>Recent Casualties (2021-2026)</span>
        </div>
      </div>

      {/* 4. Interactive Minimap Radar HUD */}
      <div className="absolute bottom-4 right-4 p-2 rounded-xl bg-zinc-950/90 border border-white/20 shadow-2xl backdrop-blur-md pointer-events-auto flex flex-col items-center gap-1.5 font-mono text-[10px]">
        <div className="flex items-center justify-between w-full text-zinc-400 font-bold px-1 text-[9px] uppercase">
          <span className="flex items-center gap-1 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>RADAR HUD</span>
          </span>
          <span>{Math.round(zoom * 100)}% ZOOM</span>
        </div>
        
        {/* Radar Map Canvas Preview */}
        <div 
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            // Map click to camera space
            const targetX = (clickX - 60) * 12;
            const targetY = (clickY - 45) * 12;
            cameraRef.current.x = -targetX;
            cameraRef.current.y = -targetY;
            soundFx.playClick(900);
          }}
          className="w-32 h-24 rounded-lg bg-zinc-900 border border-white/10 relative overflow-hidden cursor-crosshair group shadow-inner"
          title="Click Minimap to center camera on district"
        >
          {/* Radar Grid Lines */}
          <div className="absolute inset-0 bg-archive-grid opacity-30" />
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/10" />
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10" />
          
          {/* 4 District Center Marks */}
          <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(245,158,11,0.8)]" title="Dot-Com (1995-2002)" />
          <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_6px_rgba(56,189,248,0.8)]" title="Web 2.0 (2003-2011)" />
          <div className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_6px_rgba(168,85,247,0.8)]" title="Mobile (2012-2020)" />
          <div className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-red-400 shadow-[0_0_6px_rgba(239,68,68,0.8)]" title="Modern (2021-2026)" />

          {/* Camera Viewport Indicator Box */}
          <div 
            className="absolute border border-emerald-400/80 bg-emerald-400/10 rounded-sm pointer-events-none transition-all duration-75"
            style={{
              width: `${Math.max(16, 36 / zoom)}px`,
              height: `${Math.max(12, 28 / zoom)}px`,
              left: `${Math.min(96, Math.max(0, 60 - (cameraRef.current.x / 14)))}px`,
              top: `${Math.min(68, Math.max(0, 42 - (cameraRef.current.y / 14)))}px`
            }}
          />
        </div>

        <div className="text-zinc-500 text-[9px] tracking-wider">
          Click Minimap to Relocate
        </div>
      </div>

      {/* 5. Hover Tooltip Preview Card */}
      {hoveredNode && tooltipPos && (
        <div
          className="fixed z-50 pointer-events-none transition-transform duration-75 p-4 rounded-xl bg-zinc-950/95 border-2 border-amber-500/60 shadow-[0_0_25px_rgba(245,158,11,0.3)] backdrop-blur-md text-zinc-100 max-w-xs space-y-2 font-sans"
          style={{
            left: `${Math.min(window.innerWidth - 320, tooltipPos.x + 16)}px`,
            top: `${Math.max(16, tooltipPos.y - 120)}px`
          }}
        >
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-amber-400 font-bold uppercase">{hoveredNode.districtName}</span>
            <span className="text-zinc-400">{hoveredNode.entity.lifespan}</span>
          </div>

          <div className="flex items-center gap-2">
            <h4 className="text-base font-bold text-white">{hoveredNode.entity.name}</h4>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-zinc-300">
              {hoveredNode.entity.category}
            </span>
          </div>

          <p className="text-xs text-zinc-300 leading-relaxed line-clamp-2">
            {hoveredNode.entity.cause_of_death_summary}
          </p>

          <div className="pt-1 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-amber-400">
            <span className="flex items-center gap-1">
              <Flame className="w-3 h-3 fill-amber-400" />
              <span>{hoveredNode.entity.candle_count?.toLocaleString() || 120} tributes</span>
            </span>
            <span className="flex items-center gap-1 font-bold">
              <span>Visit Grave</span>
              <ExternalLink className="w-3 h-3" />
            </span>
          </div>
        </div>
      )}

    </div>
  );
};
