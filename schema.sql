-- PostgreSQL Production Schema for INTERNET GRAVEYARD
-- Digital Archaeology Platform

CREATE TYPE grave_status AS ENUM ('ACTIVE', 'AT_RISK', 'ABANDONED', 'CONFIRMED_DEAD', 'OFFLINE', 'ZOMBIE');
CREATE TYPE reliability_level AS ENUM ('VERY_HIGH', 'HIGH', 'MEDIUM', 'LOW');
CREATE TYPE submission_status AS ENUM ('PENDING', 'INVESTIGATING', 'APPROVED', 'REJECTED');
CREATE TYPE candidate_status AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'INVESTIGATING');

-- 1. Entities
CREATE TABLE entities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    tagline TEXT,
    description TEXT NOT NULL,
    category VARCHAR(100) NOT NULL,
    status grave_status NOT NULL DEFAULT 'CONFIRMED_DEAD',
    status_reason TEXT,
    founded_year INT NOT NULL,
    death_date VARCHAR(100),
    death_year INT,
    lifespan VARCHAR(50) NOT NULL,
    cause_of_death_summary TEXT NOT NULL,
    cause_category VARCHAR(100) NOT NULL,
    logo_url TEXT,
    hero_image_url TEXT,
    primary_domain VARCHAR(255) NOT NULL,
    popularity_peak VARCHAR(100),
    peak_users VARCHAR(100),
    country VARCHAR(100) DEFAULT 'Global',
    parent_company VARCHAR(255),
    confidence_score INT NOT NULL DEFAULT 90,
    candle_count INT NOT NULL DEFAULT 0,
    is_verified BOOLEAN NOT NULL DEFAULT TRUE,
    final_moments TEXT,
    last_known_state JSONB,
    verified_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Entity Aliases
CREATE TABLE entity_aliases (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    entity_id UUID REFERENCES entities(id) ON DELETE CASCADE,
    alias VARCHAR(255) NOT NULL
);

-- 3. Domains
CREATE TABLE domains (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    entity_id UUID REFERENCES entities(id) ON DELETE CASCADE,
    domain VARCHAR(255) NOT NULL,
    is_primary BOOLEAN DEFAULT FALSE,
    http_status_code INT,
    ssl_valid BOOLEAN,
    dns_resolves BOOLEAN,
    last_checked_at TIMESTAMPTZ
);

-- 4. Status History
CREATE TABLE status_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    entity_id UUID REFERENCES entities(id) ON DELETE CASCADE,
    previous_status grave_status,
    new_status grave_status NOT NULL,
    reason TEXT,
    changed_by VARCHAR(100) DEFAULT 'system',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Timeline Events
CREATE TABLE timeline_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    entity_id UUID REFERENCES entities(id) ON DELETE CASCADE,
    year INT NOT NULL,
    date_str VARCHAR(100),
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    event_type VARCHAR(50) NOT NULL,
    order_index INT NOT NULL DEFAULT 0
);

-- 6. Evidence Items
CREATE TABLE evidence (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    entity_id UUID REFERENCES entities(id) ON DELETE CASCADE,
    source_name VARCHAR(255) NOT NULL,
    source_type VARCHAR(100) NOT NULL,
    url TEXT NOT NULL,
    timestamp VARCHAR(100) NOT NULL,
    evidence_type VARCHAR(100) NOT NULL,
    reliability reliability_level NOT NULL DEFAULT 'HIGH',
    weight INT NOT NULL DEFAULT 20,
    extracted_claim TEXT NOT NULL,
    is_verified BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. Sources
CREATE TABLE sources (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    domain VARCHAR(255),
    trust_rating INT DEFAULT 85,
    source_type VARCHAR(50)
);

-- 8. Screenshots & Archives
CREATE TABLE archives (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    entity_id UUID REFERENCES entities(id) ON DELETE CASCADE,
    year INT NOT NULL,
    date_captured VARCHAR(100),
    wayback_url TEXT NOT NULL,
    title VARCHAR(255),
    thumbnail_url TEXT
);

-- 9. Related Entities & Successors
CREATE TABLE successors (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    entity_id UUID REFERENCES entities(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    relationship_type VARCHAR(100) NOT NULL,
    description TEXT,
    url TEXT
);

CREATE TABLE related_entities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    entity_id UUID REFERENCES entities(id) ON DELETE CASCADE,
    related_entity_id UUID REFERENCES entities(id) ON DELETE CASCADE
);

-- 10. Community Epitaphs
CREATE TABLE epitaphs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    entity_id UUID REFERENCES entities(id) ON DELETE CASCADE,
    author_name VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    years_used VARCHAR(50),
    candle_lit BOOLEAN DEFAULT TRUE,
    status VARCHAR(50) DEFAULT 'APPROVED',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 11. User Submissions
CREATE TABLE user_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    service_name VARCHAR(255) NOT NULL,
    url TEXT NOT NULL,
    what_happened TEXT NOT NULL,
    shutdown_date VARCHAR(100),
    sources TEXT NOT NULL,
    submitter_memory TEXT,
    submitter_email VARCHAR(255),
    status submission_status DEFAULT 'PENDING',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 12. Discovery Candidates & Scanner Runs
CREATE TABLE discovery_runs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    scan_type VARCHAR(50) NOT NULL,
    target_domain VARCHAR(255),
    results_count INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE discovery_candidates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    service_name VARCHAR(255) NOT NULL,
    domain VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    detected_signals TEXT[],
    confidence_score INT NOT NULL,
    raw_evidence TEXT,
    status candidate_status DEFAULT 'PENDING',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Full-text search indexes
CREATE INDEX idx_entities_slug ON entities(slug);
CREATE INDEX idx_entities_status ON entities(status);
CREATE INDEX idx_entities_category ON entities(category);
CREATE INDEX idx_entities_death_year ON entities(death_year);
CREATE INDEX idx_timeline_entity ON timeline_events(entity_id);
CREATE INDEX idx_evidence_entity ON evidence(entity_id);
