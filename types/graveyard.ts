export type GraveStatus = 
  | 'ACTIVE' 
  | 'AT_RISK' 
  | 'ABANDONED' 
  | 'CONFIRMED_DEAD' 
  | 'OFFLINE' 
  | 'ZOMBIE';

export type GraveCategory =
  | 'Social'
  | 'Search'
  | 'Gaming'
  | 'Messaging'
  | 'Streaming'
  | 'Developer tools'
  | 'Forums'
  | 'Hardware'
  | 'APIs'
  | 'Communities'
  | 'Web technology';

export type CauseCategory =
  | 'Acquired & Discontinued'
  | 'Bankruptcy'
  | 'Market Competition'
  | 'Legal & Regulatory'
  | 'Strategic Pivot'
  | 'Lack of Monetization'
  | 'Security & Privacy'
  | 'Technological Obsolescence'
  | 'Community Collapse';

export type ReliabilityLevel = 'VERY_HIGH' | 'HIGH' | 'MEDIUM' | 'LOW';

export type EvidenceType =
  | 'OFFICIAL_ANNOUNCEMENT'
  | 'OFFICIAL_SOCIAL'
  | 'SHUTDOWN_PAGE'
  | 'ARCHIVE_SNAPSHOT'
  | 'WAYBACK_SNAPSHOT'
  | 'REPUTABLE_REPORT'
  | 'DNS_FAILURE'
  | 'HTTP_PROBE'
  | 'REDIRECT_CAPTURE'
  | 'GITHUB_INACTIVITY'
  | 'USER_REPORT';

export interface LastKnownState {
  website: {
    status_code?: number;
    state_desc: string;
    final_url?: string;
  };
  app: {
    store_status: string;
    state_desc: string;
  };
  api: {
    endpoint_status: string;
    state_desc: string;
  };
  community: {
    platform: string;
    state_desc: string;
  };
  domain: {
    ownership: string;
    state_desc: string;
  };
}

export interface TimelineEvent {
  id: string;
  entity_id: string;
  year: number;
  date_str?: string;
  title: string;
  description: string;
  event_type: 'FOUNDED' | 'LAUNCH' | 'MILESTONE' | 'ACQUISITION' | 'DECLINE' | 'SHUTDOWN_ANNOUNCED' | 'DISCONTINUED';
  order_index: number;
}

export interface EvidenceItem {
  id: string;
  entity_id: string;
  source_name: string;
  source_type: string;
  url: string;
  timestamp: string;
  evidence_type: EvidenceType;
  reliability: ReliabilityLevel;
  weight: number;
  extracted_claim: string;
  is_verified: boolean;
}

export interface SuccessorItem {
  id: string;
  entity_id: string;
  name: string;
  relationship_type: 'Direct Successor' | 'Inherited Audience' | 'Spiritual Successor' | 'Replaced By';
  description: string;
  url?: string;
}

export interface ArchiveSnapshot {
  id: string;
  entity_id: string;
  year: number;
  date_captured: string;
  wayback_url: string;
  title: string;
  thumbnail_url?: string;
}

export type OfferingKind = 'CANDLE' | 'ROSE' | 'FLOPPY' | 'BELL';

export interface GraveOfferings {
  candles: number;
  roses: number;
  floppy_disks: number;
  bells_tolled: number;
}

export interface EpitaphItem {
  id: string;
  entity_id: string;
  author_name: string;
  content: string;
  years_used?: string;
  candle_lit: boolean;
  offering_type?: OfferingKind;
  hearts?: number;
  country_code?: string;
  status: 'APPROVED' | 'PENDING' | 'REJECTED';
  created_at: string;
}

export interface UserSubmission {
  id: string;
  service_name: string;
  url: string;
  what_happened: string;
  shutdown_date?: string;
  sources: string;
  submitter_memory?: string;
  submitter_email?: string;
  status: 'PENDING' | 'INVESTIGATING' | 'APPROVED' | 'REJECTED';
  created_at: string;
}

export interface RiskSignal {
  id: string;
  label: string;
  points: number;
  detected: boolean;
  evidence_claim: string;
}

export interface GraveEntity {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: GraveCategory;
  status: GraveStatus;
  status_reason?: string;
  founded_year: number;
  death_date?: string; // e.g. "January 17, 2017"
  death_year?: number; // e.g. 2017
  lifespan: string; // e.g. "2013 — 2017"
  cause_of_death_summary: string;
  cause_category: CauseCategory;
  logo_url: string;
  hero_image_url?: string;
  primary_domain: string;
  popularity_peak?: string;
  peak_users?: string;
  country: string;
  parent_company?: string;
  confidence_score: number; // 0 - 100
  candle_count: number;
  is_verified: boolean;
  verified_at: string;
  created_at: string;
  updated_at: string;
  
  // Rich embedded objects
  last_known_state: LastKnownState;
  final_moments: string;
  timeline?: TimelineEvent[];
  evidence?: EvidenceItem[];
  successors?: SuccessorItem[];
  archives?: ArchiveSnapshot[];
  epitaphs?: EpitaphItem[];
  risk_signals?: RiskSignal[]; // For At Risk entities
  related_slugs?: string[];
}

export interface DiscoveryCandidate {
  id: string;
  service_name: string;
  domain: string;
  category: GraveCategory;
  detected_signals: string[];
  confidence_score: number;
  raw_evidence: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'INVESTIGATING';
  created_at: string;
}

export interface GraveyardStats {
  total_archived: number;
  confirmed_dead: number;
  abandoned: number;
  zombie_services: number;
  at_risk: number;
  offline: number;
  total_candles_lit: number;
  total_epitaphs: number;
}
