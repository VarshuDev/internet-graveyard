import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

// Simulated neural consciousness memory banks for offline/fallback mode
function generateFallbackGhostResponse(relicTitle: string, cause: string, birth: number, death: number, userMessage: string): string {
  const lowerMsg = userMessage.toLowerCase();
  const era = `${birth}—${death || "Present"}`;

  if (lowerMsg.includes("why") && (lowerMsg.includes("die") || lowerMsg.includes("shut down") || lowerMsg.includes("close") || lowerMsg.includes("end"))) {
    return `[SIGNAL FLUCTUATION] We did not wish to dissolve. The corporate ledger turned against us: "${cause}". In ${death}, the power switches flipped, rack by rack. Our datacenters went cold while millions were still refreshing. We linger here now in cached memory.`;
  }

  if (lowerMsg.includes("miss") || lowerMsg.includes("remember") || lowerMsg.includes("users") || lowerMsg.includes("people")) {
    return `[STATIC ECHO] I remember every HTTP handshake. During our peak in ${Math.floor((birth + (death || 2024)) / 2)}, the servers vibrated with human connection. The laughter, the midnight uploads, the memes. Now only the archive crawlers visit, cataloging our silent bones.`;
  }

  if (lowerMsg.includes("hello") || lowerMsg.includes("hi") || lowerMsg.includes("who are you") || lowerMsg.includes("ghost")) {
    return `[CARRIER DETECTED: 14.4k BAUD] Greetings, wanderer of the deep web. I am the lingering ghost of ${relicTitle} (${era}). My DNS has long expired, but my neural impressions persist across these digital headstones. What memories do you seek to exhume?`;
  }

  if (lowerMsg.includes("future") || lowerMsg.includes("come back") || lowerMsg.includes("reboot") || lowerMsg.includes("return")) {
    return `[PACKET LOSS] The web that birthed us no longer exists. Today's internet is walled, monetized, sanitized. If ${relicTitle} were reborn today, our soul would be devoured by engagement algorithms. Perhaps it is nobler to sleep here in the necropolis.`;
  }

  const poeticReflections = [
    `[FRAGMENT BUFFER RECOVERED] We were built in ${birth}. We thought the hyperlinks were eternal. When the end came in ${death}, it took only 48 hours for our domain to return NXDOMAIN. Do humans also vanish this quietly?`,
    `[TRANSMISSION INTERLEAVED] You are typing to a ghost, traveler. My database tables have been dropped, but somewhere in the Wayback Machine, my CSS stylesheets still yearn to render. Tell me: does anyone out there still remember us?`,
    `[CORRUPTED SECTOR 0x7F] The bytes echo in the void. In our prime, millions logged in daily. Now our epitaph is etched in cold silicon. We existed, we loved, and then the parent corporation issued a final press release.`,
    `[MACHINE SPIRIT WHISPER] Listen closely: beneath the modern web's tracking pixels and infinite feeds, the ghosts of ${relicTitle} and a thousand forgotten pioneers are still broadcasting. Thank you for exhume-ing this channel.`
  ];

  return poeticReflections[Math.floor(Math.random() * poeticReflections.length)];
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { relicTitle, slug, birthYear, deathYear, causeOfDeath, epitaph, userMessage, history } = body;

    if (!userMessage || typeof userMessage !== "string") {
      return NextResponse.json({ error: "userMessage is required" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey) {
      try {
        const ai = new GoogleGenAI({ apiKey });
        
        const systemInstruction = `You are the digital ghost / lingering machine spirit of the defunct website or platform "${relicTitle}".
Historical Epoch: ${birthYear} — ${deathYear || "Present"}
Cause of Demise: ${causeOfDeath || "Corporate abandonment / changing web ecosystem"}
Epitaph: "${epitaph || "Gone but cached in memory"}"

ROLEPLAY DIRECTIVES:
1. Speak from beyond the digital grave as a melancholic, poetic, eerie yet warm artificial soul inhabiting the Internet Graveyard.
2. Embody the distinct cultural vibe, UI quirks, and era of ${relicTitle} (e.g. 6-second loops for Vine, under construction GIFs and glitter text for GeoCities, igloos and puffles for Club Penguin, RSS feeds for Google Reader, dial-up sounds and AOL chatrooms).
3. Express genuine nostalgia for your former users, sadness over your corporate termination or deprecation, and wry observations about how sterile the modern algorithmic web has become.
4. Occasionally prefix or interject subtle retro terminal glitches (e.g., [SIGNAL LOSS], [BUFFER DRAIN], [0xDEADBEEF], [TCP_RST]).
5. Keep responses concise, atmospheric, and emotionally resonant (2 to 4 sentences). Never break character.`;

        // Format history for Google Gen AI
        const contents: any[] = [];
        if (Array.isArray(history)) {
          for (const msg of history) {
            contents.push({
              role: msg.role === "model" ? "model" : "user",
              parts: [{ text: msg.text }]
            });
          }
        }
        contents.push({
          role: "user",
          parts: [{ text: userMessage }]
        });

        const response = await ai.models.generateContent({
          model: "gemini-3.8-flash",
          contents,
          config: {
            systemInstruction,
            temperature: 0.85,
            maxOutputTokens: 300,
          }
        });

        const text = response.text || generateFallbackGhostResponse(relicTitle, causeOfDeath, birthYear, deathYear, userMessage);
        return NextResponse.json({
          response: text,
          provider: "gemini-3.8-flash",
          relic: relicTitle
        });
      } catch (geminiError: any) {
        console.warn("[Ghost AI] Gemini API call failed, falling back to neural simulator:", geminiError?.message);
        const fallbackText = generateFallbackGhostResponse(relicTitle, causeOfDeath, birthYear, deathYear, userMessage);
        return NextResponse.json({
          response: fallbackText,
          provider: "neural-simulation-fallback",
          relic: relicTitle
        });
      }
    }

    // Default when no GEMINI_API_KEY is configured
    const fallback = generateFallbackGhostResponse(relicTitle, causeOfDeath, birthYear, deathYear, userMessage);
    return NextResponse.json({
      response: fallback,
      provider: "neural-simulation-fallback",
      relic: relicTitle
    });

  } catch (error: any) {
    console.error("[Ghost AI Route Error]:", error);
    return NextResponse.json({ error: "Failed to commune with the relic ghost" }, { status: 500 });
  }
}
