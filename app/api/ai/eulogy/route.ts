import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

function generateFallbackEulogy(relic: {
  title: string;
  birthYear: number;
  deathYear?: number;
  causeOfDeath?: string;
  epitaph?: string;
  impact?: string;
}): string {
  const { title, birthYear, deathYear = 2024, causeOfDeath = "corporate discontinuation", epitaph = "Remembered forever", impact = "Pioneered digital culture" } = relic;
  
  return `Friends, digital wanderers, and mourners of the open web:

We gather today in the solemn quiet of the Internet Graveyard to commemorate the sacred memory of ${title} (${birthYear} — ${deathYear}).

Born in the untamed dawn of ${birthYear}, ${title} did not merely host data; it provided a digital hearth where millions found voice, connection, and joy. It gave us ${impact.toLowerCase()}. It proved that the internet was not just an interconnected grid of cold servers, but a living tapestry woven by human hearts.

Yet silicon is fragile, and corporate priorities are unforgiving. In ${deathYear}, the fateful blow fell: "${causeOfDeath}." Without hesitation, database indexes were severed, DNS records cleared, and the servers went dark forever.

"${epitaph}"

Though your domain name now returns silence, your imprint remains indelibly etched into the collective soul of cyberspace. May your cached packets find eternal peace in the great celestial archive. Rest in peace, ${title}.`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { relic } = body;

    if (!relic || !relic.title) {
      return NextResponse.json({ error: "relic information is required" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey) {
      try {
        const ai = new GoogleGenAI({ apiKey });
        
        const systemInstruction = `You are the High Digital Mortician and Chief Eulogist of the Internet Graveyard.
Your solemn calling is to compose eloquent, emotionally moving, dramatic, and respectful funeral orations (eulogies) for dead websites, fallen web services, defunct tech products, and lost protocols.

GUIDELINES:
1. Tone: Solemn, poetic, literary, nostalgic, and reverent, yet acutely aware of tech history and internet culture.
2. Structure:
   - Call to the gathered digital mourners.
   - The genesis and golden years of the deceased platform (${relic.birthYear}).
   - The human memories, community, and cultural impact it bestowed.
   - The tragic demise (${relic.deathYear}) and cause of death ("${relic.causeOfDeath}").
   - The final benediction / committal to the digital soil and celestial archive.
3. Length: Approximately 150 to 220 words across 4 or 5 brief stanzas.`;

        const prompt = `Compose a solemn funeral eulogy for:
Name: ${relic.title}
Lifespan: ${relic.birthYear} — ${relic.deathYear || "Present"}
Cause of Demise: ${relic.causeOfDeath || "Corporate discontinuation"}
Epitaph: "${relic.epitaph || "Rest in peace"}"
Legacy Impact: ${relic.impact || "Shaped early web culture"}`;

        const response = await ai.models.generateContent({
          model: "gemini-3.8-flash",
          contents: prompt,
          config: {
            systemInstruction,
            temperature: 0.9,
            maxOutputTokens: 450,
          }
        });

        const text = response.text || generateFallbackEulogy(relic);
        return NextResponse.json({
          eulogy: text,
          provider: "gemini-3.8-flash",
          relic: relic.title
        });
      } catch (geminiErr: any) {
        console.warn("[Eulogy AI] Gemini API call failed, falling back to procedural oration:", geminiErr?.message);
        const fallbackText = generateFallbackEulogy(relic);
        return NextResponse.json({
          eulogy: fallbackText,
          provider: "procedural-eulogizer-fallback",
          relic: relic.title
        });
      }
    }

    const fallback = generateFallbackEulogy(relic);
    return NextResponse.json({
      eulogy: fallback,
      provider: "procedural-eulogizer-fallback",
      relic: relic.title
    });

  } catch (error: any) {
    console.error("[Eulogy AI Route Error]:", error);
    return NextResponse.json({ error: "Failed to generate eulogy" }, { status: 500 });
  }
}
