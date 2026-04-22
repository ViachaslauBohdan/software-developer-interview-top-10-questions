# BE Security: Main Techniques Summary

## 🔐 Authentication and Session Security
- Use strong auth flows (`OAuth2`, `OIDC`, session or JWT based on architecture).
- Hash passwords with `bcrypt`/`argon2` (never store plain text).
- Add MFA for sensitive operations and admin accounts.
- Rotate and revoke tokens; keep access tokens short-lived.

## 🛡️ Authorization
- Enforce server-side authorization on every protected endpoint.
- Prefer `RBAC`/`ABAC` with explicit policy checks.
- Apply least privilege for users, services, and database roles.
- Do not trust role/permission values from the client.

## ✅ Input Validation and Output Safety
- Validate and sanitize all inputs at API boundaries.
- Use schema validation (`zod`, `joi`, `class-validator`).
- Limit payload size, nesting depth, and accepted content types.
- Encode/escape outputs where data is rendered into templates.

## 🗄️ Database and Query Security
- Use parameterized queries / ORM bindings to prevent SQL injection.
- Avoid string-concatenated queries.
- Restrict DB account permissions per service.
- Encrypt sensitive data at rest; mask in logs and admin tools.

## 🌐 API and Transport Security
- Enforce `HTTPS` everywhere (`TLS` only, no mixed content).
- Configure strict `CORS` (allowlist origins, methods, headers).
- Add rate limiting, throttling, and abuse protection.
- Use idempotency keys for retryable write operations.

## 🧪 Secrets and Configuration
- Store secrets in vault/secret manager, not in source control.
- Rotate keys/credentials regularly.
- Keep separate credentials per environment.
- Scan for leaked secrets in CI.

## 📦 Dependency and Supply Chain Security
- Pin and regularly update dependencies.
- Run SCA/dependency scans (`npm audit`, `Snyk`, `Dependabot`).
- Verify container base images and keep them patched.
- Remove unused packages to reduce attack surface.

## 📊 Logging, Monitoring, and Incident Readiness
- Keep structured security-relevant logs (auth failures, privilege changes).
- Add alerting for anomalies (spikes, brute force, unusual access).
- Use WAF and centralized monitoring where possible.
- Prepare incident runbooks and backup/restore procedures.

## 🚀 Quick Summary (Ultra Short)
- Authenticate strongly and authorize on every request.
- Validate input, parameterize queries, and protect secrets.
- Enforce TLS, strict CORS, and rate limiting.
- Patch dependencies and monitor security signals continuously.
