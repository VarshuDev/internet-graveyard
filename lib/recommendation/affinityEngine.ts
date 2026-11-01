import { GraveEntity } from '@/types/graveyard';

const STOP_WORDS = new Set([
  'the', 'and', 'for', 'with', 'that', 'this', 'from', 'into', 'over', 'were',
  'been', 'have', 'their', 'which', 'about', 'after', 'service', 'platform',
  'users', 'shutdown', 'killed', 'discontinued', 'online', 'digital'
]);

function extractKeywords(text: string): string[] {
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 3 && !STOP_WORDS.has(w));
  return Array.from(new Set(words));
}

function parseYears(entity: GraveEntity): { birth: number; death: number } {
  let birth = entity.founded_year || 2000;
  let death = entity.death_year || 2020;

  if (entity.lifespan && entity.lifespan.includes('–')) {
    const parts = entity.lifespan.split('–').map(s => parseInt(s.trim(), 10));
    if (!isNaN(parts[0])) birth = parts[0];
    if (!isNaN(parts[1])) death = parts[1];
  } else if (entity.lifespan && entity.lifespan.includes('-')) {
    const parts = entity.lifespan.split('-').map(s => parseInt(s.trim(), 10));
    if (!isNaN(parts[0])) birth = parts[0];
    if (!isNaN(parts[1])) death = parts[1];
  }

  return { birth, death };
}

export interface AffinityScoreBreakdown {
  entity: GraveEntity;
  totalScore: number;
  reasons: string[];
}

/**
 * Calculates archival affinity between two entities based on:
 * - Direct curated relationship
 * - Shared parent company/ecosystem
 * - Category matching
 * - Cause of death category matching
 * - Contemporary era overlap (Jaccard index of active operating lifespan)
 * - Semantic topic & keyword intersection
 */
export function calculateArchivalAffinity(
  current: GraveEntity,
  candidate: GraveEntity
): AffinityScoreBreakdown {
  if (current.id === candidate.id || current.slug === candidate.slug) {
    return { entity: candidate, totalScore: -1, reasons: [] };
  }

  let totalScore = 0;
  const reasons: string[] = [];

  // 1. Direct Curated Relationship Boost
  const isCuratedRelated =
    (current.related_slugs && current.related_slugs.includes(candidate.slug)) ||
    (candidate.related_slugs && candidate.related_slugs.includes(current.slug));
  if (isCuratedRelated) {
    totalScore += 60;
    reasons.push('Curated historic peer');
  }

  // 2. Parent Ecosystem Affinity
  if (
    current.parent_company &&
    candidate.parent_company &&
    current.parent_company.toLowerCase() === candidate.parent_company.toLowerCase()
  ) {
    totalScore += 40;
    reasons.push(`Shared parent company (${current.parent_company})`);
  }

  // 3. Category Match
  if (current.category === candidate.category) {
    totalScore += 35;
    reasons.push(`Same category (${current.category})`);
  }

  // 4. Cause Category Match
  if (
    current.cause_category &&
    candidate.cause_category &&
    current.cause_category === candidate.cause_category
  ) {
    totalScore += 25;
    reasons.push(`Similar fate (${current.cause_category.replace(/_/g, ' ')})`);
  }

  // 5. Contemporary Era Overlap
  const currentSpan = parseYears(current);
  const candidateSpan = parseYears(candidate);

  const overlapStart = Math.max(currentSpan.birth, candidateSpan.birth);
  const overlapEnd = Math.min(currentSpan.death, candidateSpan.death);
  const overlapYears = Math.max(0, overlapEnd - overlapStart);

  const unionStart = Math.min(currentSpan.birth, candidateSpan.birth);
  const unionEnd = Math.max(currentSpan.death, candidateSpan.death);
  const unionYears = Math.max(1, unionEnd - unionStart);

  const eraJaccard = overlapYears / unionYears;

  if (eraJaccard > 0.4) {
    totalScore += Math.round(eraJaccard * 30);
    reasons.push(`Contemporary era (${overlapYears} overlapping active years)`);
  } else if (overlapYears >= 2) {
    totalScore += 10;
  }

  // 6. Semantic Keyword Overlap (tagline + cause summary + description)
  const currentTokens = new Set([
    ...extractKeywords(current.tagline || ''),
    ...extractKeywords(current.cause_of_death_summary || ''),
    ...extractKeywords(current.description || '')
  ]);

  const candidateTokens = new Set([
    ...extractKeywords(candidate.tagline || ''),
    ...extractKeywords(candidate.cause_of_death_summary || ''),
    ...extractKeywords(candidate.description || '')
  ]);

  let commonTokens = 0;
  currentTokens.forEach(token => {
    if (candidateTokens.has(token)) {
      commonTokens++;
    }
  });
  if (commonTokens > 0) {
    const semanticBoost = Math.min(25, commonTokens * 4);
    totalScore += semanticBoost;
    if (commonTokens >= 2) {
      reasons.push('Shared operational and technological domain');
    }
  }

  // Slight normalization for popular community remembrance
  if (candidate.candle_count > 50) {
    totalScore += Math.min(5, Math.log10(candidate.candle_count));
  }

  return { entity: candidate, totalScore, reasons };
}

/**
 * Returns the highest-affinity contemporary peers for a given memorial entity
 */
export function getContemporaryAndAffinityRecommendations(
  current: GraveEntity,
  allEntities: GraveEntity[],
  limit: number = 3
): GraveEntity[] {
  const scored = allEntities
    .filter(e => e.slug !== current.slug && e.id !== current.id)
    .map(candidate => calculateArchivalAffinity(current, candidate))
    .sort((a, b) => b.totalScore - a.totalScore);

  return scored.slice(0, limit).map(item => item.entity);
}
