import React from 'react';
import { Metadata } from 'next';
import { graveyardDb } from '@/lib/db';
import { TimeWarpClient } from './TimeWarpClient';

export const metadata: Metadata = {
  title: 'Web Time Warp (1990 — 2026) — Internet Graveyard',
  description: 'Interactive living and dying timeline of cyberspace. Scrub through 36 years of internet history, dot-com bubbles, and corporate sunsets.',
};

export const revalidate = 3600;

export default function TimeWarpPage() {
  const entities = graveyardDb.getAllEntities();

  return <TimeWarpClient entities={entities} />;
}
