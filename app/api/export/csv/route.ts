import { NextResponse } from 'next/server';
import { ALL_SEED_ENTITIES } from '@/data/seed-entities-batch2';

function escapeCSV(val: unknown): string {
  if (val === null || val === undefined) return '""';
  const str = String(val).replace(/"/g, '""');
  return `"${str}"`;
}

export async function GET() {
  const headers = [
    'id',
    'name',
    'slug',
    'category',
    'founded_year',
    'death_year',
    'lifespan',
    'status',
    'cause_category',
    'cause_of_death_summary',
    'status_reason',
    'primary_domain',
    'parent_company',
    'country',
    'popularity_peak',
    'candle_count',
    'confidence_score',
    'verified_at'
  ];

  const rows = ALL_SEED_ENTITIES.map((e) => {
    return [
      escapeCSV(e.id),
      escapeCSV(e.name),
      escapeCSV(e.slug),
      escapeCSV(e.category),
      escapeCSV(e.founded_year),
      escapeCSV(e.death_year),
      escapeCSV(e.lifespan),
      escapeCSV(e.status),
      escapeCSV(e.cause_category),
      escapeCSV(e.cause_of_death_summary),
      escapeCSV(e.status_reason || ''),
      escapeCSV(e.primary_domain),
      escapeCSV(e.parent_company || ''),
      escapeCSV(e.country || 'Global'),
      escapeCSV(e.popularity_peak || ''),
      escapeCSV(e.candle_count || 120),
      escapeCSV(e.confidence_score || 100),
      escapeCSV(e.verified_at || '')
    ].join(',');
  });

  const csvContent = [headers.join(','), ...rows].join('\r\n');

  return new NextResponse(csvContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': 'attachment; filename="internet-graveyard-forensic-dataset.csv"',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
    }
  });
}
