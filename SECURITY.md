# 🛡️ Security Policy

## Supported Versions

| Version | Supported          |
| :--- | :--- |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

---

## 🔐 Administrative Access & Authentication Architecture

**Internet Graveyard** features an internal **Archaeology Command Center** located at `/admin` for curating records, moderating user submissions, and monitoring live URL health probers.

### Dual-Layer Security Mechanism:
1. **Public Obfuscation**: The `/admin` endpoint is omitted from all client navigation headers and public site maps.
2. **Backend API Guard**:
   - Every request to `/api/admin` requires authentication.
   - Accepts tokens via `Authorization: Bearer <TOKEN>`, `x-admin-token: <TOKEN>`, or the `graveyard_admin_token` HTTP-Only cookie.
   - Any unauthorized request receives `401 Unauthorized`.
3. **Curator Authentication Terminal**:
   - The `/admin` interface presents a cryptographic passkey challenge before any administrative data or telemetry is fetched.
   - An active session sets a secure 24-hour HTTP-only cookie.
   - The terminal features an instant **`[-> Lock Terminal]`** button to invalidate and clear the session.

### Environment Variables:
- `ADMIN_SECRET_KEY`: Master passkey used to authenticate curator sessions.
  - In local development, defaults to `graveyard-curator-2024` if unset.
  - For production deployments (e.g. Vercel, AWS), always supply a cryptographically secure value in your environment variables.

---

## 🚨 Reporting a Vulnerability

If you discover a security vulnerability within **Internet Graveyard**, please do **not** open a public issue.

Instead, please responsibly disclose it by emailing:
**gowdavarshan466@gmail.com**

Please provide:
- A description of the vulnerability and its potential impact.
- Step-by-step instructions to reproduce the issue or proof-of-concept.
- Any suggestions for mitigation or patching.

We will acknowledge receipt within 48 hours and work diligently to release a patch.
