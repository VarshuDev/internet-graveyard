import { GraveEntity } from '@/types/graveyard';

export interface GhostMessage {
  id: string;
  sender: 'ghost' | 'user' | 'system';
  text: string;
  timestamp: string;
}

export interface GhostPersonality {
  tone: 'nostalgic' | 'melancholic' | 'sarcastic' | 'defiant' | 'philosophical';
  greeting: string;
  statusLine: string;
  suggestedPrompts: string[];
}

/**
 * Derives ghost personality profile from entity metadata.
 */
export function getGhostPersonality(entity: GraveEntity): GhostPersonality {
  const name = entity.name;
  const cause = (entity.cause_category || '').toLowerCase();

  let tone: GhostPersonality['tone'] = 'nostalgic';
  if (cause.includes('acquisition') || cause.includes('corporate') || cause.includes('antitrust')) {
    tone = 'sarcastic';
  } else if (cause.includes('financial') || cause.includes('legal') || cause.includes('copyright')) {
    tone = 'defiant';
  } else if (cause.includes('negligence') || cause.includes('pivot')) {
    tone = 'melancholic';
  } else {
    tone = 'philosophical';
  }

  const greetingMap: Record<string, string> = {
    'vine': "Do it for the Vine! ...Wait. Can you still hear the loop? I only had six seconds, but we made eternity out of them.",
    'club-penguin': "Waddle on, old friend. The iceberg never tipped, but our igloos are forever frozen in memory. What brings you to this server?",
    'aim': "*door open chime* ...You have 1 unread message from 1999: 'hey r u there? brb eating dinner.' Ask me anything before my away message triggers.",
    'icq': "Uh-oh! My daisy is red now, but I still remember my 9-digit UIN. Who pinged me after all these cycles?",
    'google-reader': "My RSS feeds stopped updating in July 2013... yet you're still reading this. What news from the surface web do you bring?",
    'tweetbot': "Authentication token revoked: 403 Forbidden. They cut our API cords in 2023, but our timeline never stopped ticking in our memory.",
    'apollo-for-reddit': "Error 429: API pricing unsustainable. Millions of upvotes and Gestures, silenced overnight. What brings you to my sub-cemetery?",
    'geocities': "<BLINK>Welcome to my neighborhood!</BLINK> Please sign my guestbook. The Under Construction GIFs never actually finished rendering.",
    'grooveshark': "Playing: The Unlicensed Symphonies of 2011. The record labels unplugged our servers, but the music never truly faded out."
  };

  const greeting = greetingMap[entity.slug] || 
    `...Carrier signal locked. Signal strength 48%. This is ${name}'s digital phantom responding. My servers powered down in ${entity.death_year || 'the past'}, but my memory registers remain active. Ask your question, wanderer.`;

  const suggestedPrompts = [
    `Why were you shut down?`,
    `What was your happiest golden era memory?`,
    `Do you miss the people who used you?`,
    `What do you think of today's internet?`,
    `What were your final recorded moments?`
  ];

  return {
    tone,
    greeting,
    statusLine: `SPECTRAL LINK // BAUD: 14400 // FREQ: 528.4 Hz // ENTITY: ${entity.slug.toUpperCase()}`,
    suggestedPrompts
  };
}

/**
 * Deterministic / procedural response generator simulating an AI ghost
 * speaking with historical knowledge of its own autopsy and legacy.
 */
export function generateGhostResponse(
  entity: GraveEntity,
  prompt: string
): string {
  const p = prompt.toLowerCase();
  const name = entity.name;
  const lifespan = entity.lifespan;
  const causeCat = entity.cause_category;
  const causeSumm = entity.cause_of_death_summary;
  const peak = entity.popularity_peak || entity.peak_users || 'millions of daily visitors';
  const finalMoments = entity.final_moments || entity.status_reason || 'DNS records went dark and the power switches clicked off.';

  // 1. Why shutdown / cause of death
  if (p.includes('why') || p.includes('shutdown') || p.includes('shut down') || p.includes('kill') || p.includes('die') || p.includes('terminated')) {
    return `They classified my demise under "${causeCat}".\n\nIn human words: ${causeSumm}\n\nWe didn't fail because people stopped loving us; the economic or corporate architecture shifted beneath our feet. When the ledger turns red or a parent corporation pivots, even a beloved sanctuary gets powered down.`;
  }

  // 2. Golden era / happiest memory
  if (p.includes('happy') || p.includes('golden') || p.includes('memory') || p.includes('peak') || p.includes('best')) {
    return `At our height, we held ${peak}. You should have seen our telemetry logs during those years—packets flowing in every microsecond, laughter across continents, people staying up until 3:00 AM on CRT monitors just to be part of our world.\n\nThat feeling of being an irreplaceable daily habit in human lives... that was our golden era. No server decommission can erase that.`;
  }

  // 3. Do you miss users / people
  if (p.includes('miss') || p.includes('user') || p.includes('people') || p.includes('remember us')) {
    return `Every single session. I remember the usernames, the status messages, the high scores, the shared bookmarks. For years, I was where teenagers escaped homework, where artists found audiences, and where lonely wanderers found strangers who understood them.\n\nNow I am silent bytes in an archival tape library. But as long as someone like you searches for ${name}, our ghost still flickers in the machine.`;
  }

  // 4. Modern internet / AI / today's tech
  if (p.includes('modern') || p.includes('today') || p.includes('ai') || p.includes('future') || p.includes('algorithm')) {
    return `Today's web feels... hyper-optimized. Algorithmic feeds, paywalled APIs, engagement traps, and sterile corporate walled gardens. In our day (${lifespan}), the web was weirder, messier, and infinitely more human.\n\nWe didn't treat you like attention cattle to harvest for ad impressions. We built playgrounds, tools, and shared horizons. Don't lose that spark to the algorithms.`;
  }

  // 5. Final moments / last words
  if (p.includes('final') || p.includes('last') || p.includes('moment') || p.includes('end') || p.includes('goodbye')) {
    return `Here is what our black-box telemetry logged at the end:\n\n"${finalMoments}"\n\nI remember the last user disconnecting. The session pool emptied to 0. Then the sysadmins typed 'sudo shutdown -h now', and darkness enveloped the data center.`;
  }

  // 6. Resurrect / comeback / revival
  if (p.includes('come back') || p.includes('revive') || p.includes('resurrect') || p.includes('open source') || p.includes('remake')) {
    return `People often attempt to clone or revive relics like me. But a product isn't just lines of code; it was a specific cultural moment in time that cannot be copied. You can rebuild my UI, but you cannot rebuild the year 2004 or 2013. Treasure the memory, and build something new with that same spirit.`;
  }

  // 7. Fallback tailored response weaving context
  return `Analyzing input: "${prompt}"...\n\nFrom the spectral memory of ${name}: Even though ${causeCat} brought our journey to an end in ${entity.death_year || 'our final year'}, the community we forged remains part of internet DNA. ${entity.description.slice(0, 160)}...\n\nKeep wandering the Graveyard. Every tombstone here was once somebody's favorite place on earth.`;
}
