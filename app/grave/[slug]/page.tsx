import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { graveyardDb } from '@/lib/db';
import { MemorialClient } from './MemorialClient';
import { getContemporaryAndAffinityRecommendations } from '@/lib/recommendation/affinityEngine';

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const entity = graveyardDb.getEntityBySlug(params.slug);
  if (!entity) {
    return {
      title: 'Grave Not Found — Internet Graveyard',
      description: 'The requested digital grave does not exist in our historical archives.'
    };
  }

  const title = `${entity.name} (${entity.lifespan}) — Internet Graveyard`;
  const description = `${entity.name} memorial (${entity.lifespan}). Status: ${entity.status.replace(/_/g, ' ')}. Cause: ${entity.cause_of_death_summary.slice(0, 160)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://internet-graveyard-seven.vercel.app/grave/${entity.slug}`,
      images: [
        {
          url: `/api/og/grave?slug=${entity.slug}`,
          width: 1200,
          height: 630,
          alt: `${entity.name} Memorial Tombstone`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/api/og/grave?slug=${entity.slug}`]
    }
  };
}

export default function MemorialPage({ params }: PageProps) {
  const entity = graveyardDb.getEntityBySlug(params.slug);

  if (!entity) {
    notFound();
  }

  // Fetch curated related entities first, supplemented by Semantic Archival Affinity Engine
  const allEntities = graveyardDb.getAllEntities();
  const relatedSlugs = entity.related_slugs || [];
  const curatedEntities = relatedSlugs
    .map(slug => graveyardDb.getEntityBySlug(slug))
    .filter((e): e is NonNullable<typeof e> => e !== null);

  const algorithmicRecommendations = getContemporaryAndAffinityRecommendations(
    entity,
    allEntities,
    4
  );

  // Combine curated and algorithmic without duplicates
  const seenIds = new Set<string>([entity.id]);
  const relatedEntities: typeof allEntities = [];

  for (const item of [...curatedEntities, ...algorithmicRecommendations]) {
    if (!seenIds.has(item.id)) {
      seenIds.add(item.id);
      relatedEntities.push(item);
    }
    if (relatedEntities.length >= 3) break;
  }

  return (
    <>
      {/* Schema.org Structured Data for Digital Archaeology Item */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ArchiveComponent',
            name: entity.name,
            description: entity.description,
            temporalCoverage: entity.lifespan,
            dateCreated: entity.founded_year ? `${entity.founded_year}` : undefined,
            dateDeleted: entity.death_date || undefined,
            url: `https://graveyard.archive/grave/${entity.slug}`,
            provider: {
              '@type': 'Organization',
              name: 'Internet Graveyard Digital Archaeology'
            }
          })
        }}
      />
      <MemorialClient entity={entity} relatedEntities={relatedEntities} />
    </>
  );
}
