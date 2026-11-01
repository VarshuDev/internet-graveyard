import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Heart, Archive, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-zinc-950 text-zinc-300 font-sans text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Philosophy */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-red-950/40 border border-red-500/30 flex items-center justify-center text-red-400 font-mono font-bold text-sm">
                †
              </div>
              <span className="font-mono font-bold text-base tracking-widest text-white uppercase">
                INTERNET GRAVEYARD
              </span>
            </div>

            <p className="text-sm text-zinc-200 leading-relaxed font-sans italic">
              "The internet forgets. We archive what disappeared."
            </p>

            <p className="text-sm text-zinc-300 leading-relaxed">
              A digital archaeology platform documenting, verifying, and preserving the lifecycle of deceased internet platforms, products, and communities.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3 font-sans">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-mono">Archives</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/explore" className="text-zinc-300 hover:text-white transition-colors">
                  All Buried Entities
                </Link>
              </li>
              <li>
                <Link href="/grounds" className="text-red-400 font-medium hover:text-red-300 transition-colors">
                  Cemetery Grounds Map (/grounds)
                </Link>
              </li>
              <li>
                <Link href="/export" className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors">
                  Open Data Hub (/export)
                </Link>
              </li>
              <li>
                <Link href="/timeline" className="text-zinc-300 hover:text-white transition-colors">
                  Decade Timeline (1990 — Present)
                </Link>
              </li>
              <li>
                <Link href="/time-warp" className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors">
                  Web Time Warp Scrubber (/time-warp)
                </Link>
              </li>
              <li>
                <Link href="/sounds" className="text-emerald-400 font-medium hover:text-emerald-300 transition-colors">
                  Sound Vault (Audio Relics)
                </Link>
              </li>
              <li>
                <Link href="/compare" className="text-zinc-300 hover:text-white transition-colors">
                  Autopsy Rivals (/compare)
                </Link>
              </li>
              <li>
                <Link href="/gazette" className="text-amber-400 font-medium hover:text-amber-300 transition-colors">
                  The Sunset Gazette (/gazette)
                </Link>
              </li>
              <li>
                <Link href="/dying-now" className="text-amber-400 font-medium hover:text-amber-300 transition-colors">
                  Dying Now (At Risk Radar)
                </Link>
              </li>
              <li>
                <Link href="/recently-buried" className="text-zinc-300 hover:text-white transition-colors">
                  Recently Buried Stream
                </Link>
              </li>
              <li>
                <Link href="/random" className="text-zinc-300 hover:text-white transition-colors">
                  Random Defunct Grave
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Categories */}
          <div className="space-y-3 font-sans">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-mono">Collections</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/explore?category=Social" className="text-zinc-300 hover:text-white transition-colors">
                  Dead Social Networks
                </Link>
              </li>
              <li>
                <Link href="/explore?category=Messaging" className="text-zinc-300 hover:text-white transition-colors">
                  Defunct Chat & Messaging
                </Link>
              </li>
              <li>
                <Link href="/explore?category=Streaming" className="text-zinc-300 hover:text-white transition-colors">
                  Lost Music & Video Streaming
                </Link>
              </li>
              <li>
                <Link href="/explore?category=Gaming" className="text-zinc-300 hover:text-white transition-colors">
                  Extinguished Online Worlds
                </Link>
              </li>
              <li>
                <Link href="/explore?category=Web+technology" className="text-zinc-300 hover:text-white transition-colors">
                  Deprecated Web Standards
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Archaeology Policy */}
          <div className="space-y-3 font-sans">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-mono">Methodology & Ethics</h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Every status is backed by verifiable primary sources, official SEC filings, court injunctions, and DNS records. We distinguish between Confirmed, Probable, Possible, and Unknown.
            </p>
            <div className="pt-2 flex flex-col gap-2 text-sm">
              <Link href="/submit" className="text-red-400 font-bold hover:underline">
                Submit an Entity for Archaeology →
              </Link>
              <Link href="/admin" className="text-zinc-400 hover:text-white">
                Curator & Admin Portal →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-sans text-zinc-400">
          <div>
            © {new Date().getFullYear()} Internet Graveyard. Preserving digital history for future civilisations.
          </div>
          <div className="flex items-center gap-3 font-mono text-xs text-zinc-400 flex-wrap justify-center">
            <span className="px-2 py-0.5 rounded bg-zinc-900 border border-white/10 text-[11px] text-zinc-400">
              <strong className="text-white">⌘K</strong> Quick Search
            </span>
            <span>•</span>
            <a
              href="https://archive.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1 transition-colors focus-visible:ring-2 focus-visible:ring-amber-500/60 rounded px-1"
            >
              <span>Internet Archive</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <span>•</span>
            <a
              href="https://github.com/VarshuDev/internet-graveyard"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1 transition-colors focus-visible:ring-2 focus-visible:ring-amber-500/60 rounded px-1"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <span>•</span>
            <span className="text-zinc-400">
              Curated by{' '}
              <a
                href="https://github.com/VarshuDev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-200 hover:text-white underline decoration-zinc-700 hover:decoration-zinc-400 underline-offset-2 transition-colors font-medium"
              >
                VarshuDev
              </a>
            </span>
            <span>•</span>
            <span className="text-emerald-400 font-medium">Open Archaeology</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
