import { GraveEntity } from '@/types/graveyard';

/**
 * Computes Levenshtein edit distance between two strings
 */
export function levenshteinDistance(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;

  const matrix: number[][] = [];
  for (let i = 0; i <= m; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= n; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,       // deletion
        matrix[i][j - 1] + 1,       // insertion
        matrix[i - 1][j - 1] + cost // substitution
      );
    }
  }

  return matrix[m][n];
}

/**
 * Checks if a word fuzzy matches target word with tolerance proportional to length
 */
function isFuzzyMatch(word: string, target: string): boolean {
  if (word.length < 3) return word === target;
  const maxDistance = word.length <= 4 ? 1 : 2;
  return levenshteinDistance(word, target) <= maxDistance;
}

export interface SearchMatchResult {
  entity: GraveEntity;
  relevanceScore: number;
  matchedFields: string[];
}

/**
 * Executes a multi-field weighted fuzzy search over a list of GraveEntities
 */
export function rankEntitiesByQuery(entities: GraveEntity[], query: string): GraveEntity[] {
  const cleanQuery = query.toLowerCase().trim();
  if (!cleanQuery) return entities;

  const queryTokens = cleanQuery.split(/\s+/).filter(t => t.length > 0);
  const scoredResults: SearchMatchResult[] = [];

  for (const entity of entities) {
    let score = 0;
    const matchedFields: string[] = [];

    const nameLower = entity.name.toLowerCase();
    const slugLower = entity.slug.toLowerCase();
    const domainLower = entity.primary_domain.toLowerCase();
    const parentLower = (entity.parent_company || '').toLowerCase();
    const taglineLower = (entity.tagline || '').toLowerCase();
    const causeLower = (entity.cause_of_death_summary || '').toLowerCase();
    const categoryLower = entity.category.toLowerCase();
    const descLower = entity.description.toLowerCase();

    // 1. Exact Name/Slug/Domain Match
    if (nameLower === cleanQuery) {
      score += 150;
      matchedFields.push('exact_name');
    } else if (slugLower === cleanQuery) {
      score += 130;
      matchedFields.push('exact_slug');
    } else if (nameLower.startsWith(cleanQuery)) {
      score += 90;
      matchedFields.push('name_prefix');
    } else if (nameLower.includes(cleanQuery)) {
      score += 70;
      matchedFields.push('name_substring');
    }

    if (domainLower.includes(cleanQuery)) {
      score += 60;
      matchedFields.push('domain');
    }

    if (parentLower && (parentLower === cleanQuery || parentLower.includes(cleanQuery))) {
      score += 55;
      matchedFields.push('parent_company');
    }

    if (categoryLower === cleanQuery || categoryLower.includes(cleanQuery)) {
      score += 40;
      matchedFields.push('category');
    }

    if (taglineLower.includes(cleanQuery)) {
      score += 35;
      matchedFields.push('tagline');
    }

    if (causeLower.includes(cleanQuery)) {
      score += 30;
      matchedFields.push('cause_of_death');
    }

    if (descLower.includes(cleanQuery)) {
      score += 15;
      matchedFields.push('description');
    }

    // 2. Token-by-Token Match & Fuzzy Typo Tolerance
    for (const token of queryTokens) {
      // Check for fuzzy match against name words
      const nameWords = nameLower.split(/\s+/);
      for (const nw of nameWords) {
        if (nw === token) {
          score += 40;
        } else if (isFuzzyMatch(token, nw)) {
          score += 25; // Typo match!
          matchedFields.push('fuzzy_name');
        }
      }

      // Check slug tokens
      const slugWords = slugLower.split(/[-_]/);
      for (const sw of slugWords) {
        if (sw === token) {
          score += 30;
        } else if (isFuzzyMatch(token, sw)) {
          score += 20;
          matchedFields.push('fuzzy_slug');
        }
      }

      // Parent company token
      if (parentLower.includes(token)) {
        score += 20;
      }
    }

    // 3. Status & Popularity Normalization
    if (entity.is_verified) {
      score += 5;
    }
    const candleBoost = Math.min(10, Math.log10((entity.candle_count || 0) + 1) * 2.5);
    score += candleBoost;

    if (score > 10) {
      scoredResults.push({
        entity,
        relevanceScore: score,
        matchedFields
      });
    }
  }

  // Sort by highest relevance score first
  scoredResults.sort((a, b) => b.relevanceScore - a.relevanceScore);

  return scoredResults.map(r => r.entity);
}
