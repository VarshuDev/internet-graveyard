# <img src="assets/icons/spark.svg" width="22" height="22" align="center" /> Contributing to Internet Graveyard

Thank you for your interest in contributing to **Internet Graveyard**! We are a community-driven digital archaeology project committed to documenting, researching, and preserving deceased internet platforms, products, and communities.

---

## <img src="assets/icons/tombstone.svg" width="20" height="20" align="center" /> Archaeological Inclusion Criteria

Before submitting a new defunct entity or proposing an obituary update, ensure the candidate meets our archival standards:

1. **Definitive Cessation**: The service, app, or website must be officially shut down, abandoned, delisted, or acquired and functionally dismantled.
2. **Historical Significance**: The platform possessed a notable user base, introduced novel web mechanics, shaped internet culture, or served as a technological milestone.
3. **Verifiable Sources**: Sunset dates, peak reach metrics, and cause of death must be corroborable via primary sources (press releases, founder letters, Wayback Machine snapshots, news coverage).
4. **Non-Partisan Autopsy**: Coroner findings and fatal flaws must remain neutral, factual, and analytical rather than speculative.

---

## <img src="assets/icons/terminal.svg" width="20" height="20" align="center" /> Local Development Setup

### 1. Prerequisites
- **Node.js**: v18.17.0 or newer (v20+ recommended)
- **npm**: v9+ or **pnpm** / **yarn**

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/VarshuDev/internet-graveyard.git
cd internet-graveyard

# Install dependencies
npm install

# Run the local development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build &amp; Validation
Before submitting any changes, verify that the production build succeeds without errors:
```bash
npm run build
npm run start
```

---

## <img src="assets/icons/database.svg" width="20" height="20" align="center" /> Archival Data Structure

Buried entities reside in `data/graveyard.json`. Each record conforms to the entity schema defined in `types/graveyard.ts`:

```typescript
{
  id: "grave-vine-001",
  slug: "vine",
  name: "Vine",
  category: "Social" | "Messaging" | "Streaming" | "Gaming" | "Web technology" | "Productivity",
  status: "CONFIRMED_DEAD" | "ACTIVE" | "ZOMBIE" | "AT_RISK",
  founded_year: 2012,
  death_year: 2017,
  tagline: "Short memorable description",
  description: "Detailed historical autopsy and memorial biography",
  peak_users: "200M active monthly users",
  cause_of_death_summary: "Corporate shutdown by parent company",
  parent_company: "Twitter, Inc.",
  timeline: [...],
  evidence: [...]
}
```

---

## <img src="assets/icons/shield.svg" width="20" height="20" align="center" /> Administrative Terminal &amp; Moderation

The platform includes an internal **Archaeology Command Center (`/admin`)** for reviewing auto-discovered scanner candidate URLs and community submissions.

- Environment variable for Curator Passkey: `ADMIN_SECRET_KEY`
- Default local passkey: `graveyard-curator-2024`
- Never commit private `.env.local` files containing production secrets.

---

## <img src="assets/icons/pipeline-node.svg" width="20" height="20" align="center" /> Submitting Changes

1. Fork the repository on GitHub: `https://github.com/VarshuDev/internet-graveyard`.
2. Create an excavation branch: `git checkout -b feature/archive-vine-sound`.
3. Commit your changes with clear, descriptive messages.
4. Push to your fork: `git push origin feature/archive-vine-sound`.
5. Open a Pull Request detailing the changes, evidence links, and tests performed.

*Thank you for helping us preserve the memory of the dead web!*
