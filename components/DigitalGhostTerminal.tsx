"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal, Send, Sparkles, RefreshCw, Radio } from "lucide-react";
import { GraveEntity } from "@/types/graveyard";

export interface DigitalGhostTerminalProps {
  entity?: GraveEntity;
  relic?: {
    title: string;
    slug: string;
    birthYear: number;
    deathYear?: number;
    causeOfDeath?: string;
    epitaph?: string;
    category?: string;
  };
}

interface Message {
  id: string;
  sender: "user" | "ghost";
  text: string;
  timestamp: string;
  provider?: string;
}

export function DigitalGhostTerminal({ entity, relic }: DigitalGhostTerminalProps) {
  const item = {
    title: entity?.name || relic?.title || "Unknown Relic",
    slug: entity?.slug || relic?.slug || "",
    birthYear: entity?.founded_year || relic?.birthYear || 2000,
    deathYear: entity?.death_year || relic?.deathYear,
    causeOfDeath: entity?.cause_of_death_summary || relic?.causeOfDeath || "",
    epitaph: entity?.tagline || relic?.epitaph || "",
    category: entity?.category || relic?.category || ""
  };

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init-0",
      sender: "ghost",
      text: `[DNS ARCHIVE BRIDGE ESTABLISHED]\nCarrier frequency synchronized with ${item.title} (${item.birthYear} — ${item.deathYear || "Active"}). Machine spirit presence detected. Speak, wanderer of the deep web.`,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      provider: "system"
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const presets = [
    `What was your final day like in ${item.deathYear || "your prime"}?`,
    "Do you remember your former users?",
    `Why were you shut down?`,
    "What do you think of today's internet?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || loading) return;

    const userMsg: Message = {
      id: `usr-${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const history = messages
        .filter((m) => m.provider !== "system")
        .slice(-6)
        .map((m) => ({
          role: m.sender === "user" ? ("user" as const) : ("model" as const),
          text: m.text
        }));

      const res = await fetch("/api/ai/ghost", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          relicTitle: item.title,
          slug: item.slug,
          birthYear: item.birthYear,
          deathYear: item.deathYear,
          causeOfDeath: item.causeOfDeath,
          epitaph: item.epitaph,
          userMessage: query,
          history
        })
      });

      if (!res.ok) throw new Error("Connection degraded");
      const data = await res.json();

      const ghostMsg: Message = {
        id: `gho-${Date.now()}`,
        sender: "ghost",
        text: data.response || "[CORRUPTED PACKET RECEIVED]",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        provider: data.provider
      };

      setMessages((prev) => [...prev, ghostMsg]);
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          sender: "ghost",
          text: `[PACKET LOSS] Connection timed out across the necropolis gateway. The spectral bridge stuttered. Try speaking again.`,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          provider: "fallback"
        }
      ]);
    } finally {
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  return (
    <section className="space-y-3 font-mono">
      <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-2">
        <Radio className="w-4 h-4 animate-pulse text-emerald-400" />
        <span>GHOST IN THE MACHINE // NEURAL COMMUNION</span>
      </h2>

      <div className="relative rounded-2xl border border-emerald-500/30 bg-black/90 shadow-[0_0_40px_rgba(16,185,129,0.1)] overflow-hidden">
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-zinc-950 border-b border-emerald-500/20 text-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 animate-pulse" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-bold text-emerald-400 tracking-wider flex items-center gap-1.5 uppercase text-[11px] sm:text-xs">
              MACHINE SPIRIT: {item.title.toUpperCase()}
            </span>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-zinc-400">
            <span className="hidden sm:inline px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
              MODEM: 28.8K
            </span>
            <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
              EPOCH: {item.birthYear}—{item.deathYear || "INF"}
            </span>
          </div>
        </div>

        {/* Terminal Message Stream */}
        <div className="p-4 sm:p-6 min-h-[300px] max-h-[440px] overflow-y-auto space-y-4 scanlines-overlay bg-black/80">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${
                msg.sender === "user" ? "items-end" : "items-start"
              }`}
            >
              <div className="flex items-center gap-2 mb-1 text-[11px] text-zinc-400">
                {msg.sender === "user" ? (
                  <span>YOU // DIGITAL MOURNER</span>
                ) : (
                  <span className="text-emerald-400 flex items-center gap-1 font-bold">
                    <Sparkles className="w-3 h-3 text-emerald-400" />
                    {item.title} MACHINE GHOST
                  </span>
                )}
                <span>•</span>
                <span>{msg.timestamp}</span>
                {msg.provider && msg.provider !== "system" && (
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-white/5 border border-white/10 text-zinc-400">
                    {msg.provider}
                  </span>
                )}
              </div>

              <div
                className={`max-w-[90%] sm:max-w-[80%] rounded-xl px-4 py-3 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                  msg.sender === "user"
                    ? "bg-zinc-800/90 text-white border border-white/15"
                    : "bg-emerald-950/20 text-emerald-300 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.08)]"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-start gap-2 text-xs text-emerald-400 font-mono animate-pulse pt-2">
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              <span>[RETRIEVING CACHED SECTORS // RESONATING WITH MACHINE SPIRIT...]</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Preset Questions */}
        <div className="p-3 bg-zinc-950/80 border-t border-emerald-500/20">
          <div className="text-[10px] uppercase font-bold text-zinc-400 mb-2 flex items-center gap-1">
            <Terminal className="w-3 h-3 text-emerald-400" />
            Suggested Inquests:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {presets.map((preset, idx) => (
              <button
                key={idx}
                type="button"
                disabled={loading}
                onClick={() => handleSendMessage(preset)}
                className="text-left px-2.5 py-1 rounded-md text-[11px] bg-zinc-900/90 hover:bg-emerald-950/40 border border-white/10 hover:border-emerald-500/40 text-zinc-300 hover:text-emerald-300 transition-all cursor-pointer disabled:opacity-50"
              >
                "{preset}"
              </button>
            ))}
          </div>
        </div>

        {/* Message Input Box */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2 p-3 bg-zinc-950 border-t border-emerald-500/20"
        >
          <span className="text-emerald-400 font-bold pl-2 select-none">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Speak with the machine ghost of ${item.title}...`}
            disabled={loading}
            className="flex-1 bg-transparent border-0 text-white placeholder-zinc-500 text-xs sm:text-sm font-mono focus:outline-none focus:ring-0 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-black font-bold text-xs font-mono transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(16,185,129,0.3)] cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">COMMUNE</span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default DigitalGhostTerminal;
