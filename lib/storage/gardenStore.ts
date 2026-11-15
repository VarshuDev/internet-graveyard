import { GraveEntity } from '@/types/graveyard';

export interface GardenEntry {
  slug: string;
  addedAt: string;
  personalNote?: string;
}

export interface GardenArchetype {
  title: string;
  badge: string;
  description: string;
  primaryEra: string;
  nostalgiaScore: number;
}

const STORAGE_KEY = 'graveyard_personal_garden';

export const gardenStore = {
  getGardenEntries(): GardenEntry[] {
    if (typeof window === 'undefined') return [];
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  },

  getGardenSlugs(): string[] {
    return this.getGardenEntries().map(e => e.slug);
  },

  isInGarden(slug: string): boolean {
    return this.getGardenSlugs().includes(slug);
  },

  toggleGarden(slug: string, note?: string): boolean {
    if (typeof window === 'undefined') return false;
    const current = this.getGardenEntries();
    const index = current.findIndex(e => e.slug === slug);
    let added = false;

    let updated: GardenEntry[];
    if (index >= 0) {
      updated = current.filter(e => e.slug !== slug);
      added = false;
    } else {
      updated = [{ slug, addedAt: new Date().toISOString(), personalNote: note }, ...current];
      added = true;
    }

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {}

    window.dispatchEvent(new CustomEvent('garden-updated', { 
      detail: { count: updated.length, slug, added } 
    }));

    return added;
  },

  clearGarden(): void {
    if (typeof window === 'undefined') return;
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
    window.dispatchEvent(new CustomEvent('garden-updated', { detail: { count: 0 } }));
  },

  /**
   * Computes an algorithmic persona based on the user's saved relics.
   */
  classifyArchetype(entities: GraveEntity[]): GardenArchetype {
    if (entities.length === 0) {
      return {
        title: 'Tabula Rasa Mourner',
        badge: 'UNCONSECRATED',
        description: 'You have not yet consecrated any relics to your private garden. Explore the necropolis to exhume your digital past.',
        primaryEra: 'Undetermined',
        nostalgiaScore: 0
      };
    }

    let web1Count = 0; // < 2004
    let web2Count = 0; // 2004 - 2011
    let mobileCount = 0; // 2012 - 2019
    let modernCount = 0; // 2020+

    let socialCount = 0;
    let messagingCount = 0;
    let gamingCount = 0;

    entities.forEach(e => {
      const year = e.death_year || e.founded_year || 2010;
      if (year < 2004) web1Count++;
      else if (year < 2012) web2Count++;
      else if (year < 2020) mobileCount++;
      else modernCount++;

      if (e.category === 'Social') socialCount++;
      if (e.category === 'Messaging') messagingCount++;
      if (e.category === 'Gaming') gamingCount++;
    });

    const total = entities.length;
    const nostalgiaScore = Math.min(100, Math.round(15 + total * 12 + (web1Count * 6) + (web2Count * 4)));

    if (web1Count >= total * 0.45) {
      return {
        title: 'Dial-Up Cyberspace Pioneer',
        badge: 'WEB 1.0 VETERAN',
        description: 'You remember when the internet made sounds, GeoCities homepages had blinking glitter text, and the web was a wild, decentralized galaxy.',
        primaryEra: '1995 — 2003',
        nostalgiaScore
      };
    }

    if (messagingCount >= total * 0.4) {
      return {
        title: 'Instant Messaging Night Owl',
        badge: 'CHATROOM LEGEND',
        description: 'Your teenage years were measured in MSN Messenger nudges, AIM away messages, and ICQ chirps across glowing CRT monitors at 2 AM.',
        primaryEra: '2000 — 2008',
        nostalgiaScore
      };
    }

    if (web2Count >= total * 0.45) {
      return {
        title: 'Golden Age Web 2.0 Refugee',
        badge: 'GOLDEN ERA MOURNER',
        description: 'You experienced the zenith of social discovery: customizable MySpace profiles, early Digg frontpages, and pure non-algorithmic feeds.',
        primaryEra: '2004 — 2011',
        nostalgiaScore
      };
    }

    if (gamingCount >= total * 0.35) {
      return {
        title: 'Virtual World Wanderer',
        badge: 'FLASH & METAVERSE RETRO',
        description: 'You explored Club Penguin snow forts, Habbo Hotel lobbies, and Flash game portals that dissolved when browser plugins were deprecated.',
        primaryEra: '2005 — 2015',
        nostalgiaScore
      };
    }

    if (mobileCount >= total * 0.45) {
      return {
        title: '6-Second Loop Acolyte',
        badge: 'EARLY MOBILE PIONEER',
        description: 'You miss the organic creativity of Vine, the whimsical feed of Yik Yak, and the tactile hardware of Pebble smartwatches.',
        primaryEra: '2012 — 2018',
        nostalgiaScore
      };
    }

    return {
      title: 'Digital Archaeology Scholar',
      badge: 'ECLECTIC CURATOR',
      description: 'Your tastes span three decades of digital history, honoring fallen search portals, defunct operating systems, and vanished communities alike.',
      primaryEra: '1990 — Present',
      nostalgiaScore
    };
  }
};
