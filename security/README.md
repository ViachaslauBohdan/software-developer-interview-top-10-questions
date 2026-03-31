# Security Interview Essentials (Frontend + Backend)

## Most crucial things to understand

1. Authentication vs authorization
- FE: secure token/session handling and protected routes UX.
- BE: identity verification, role/policy checks, least privilege.

2. OWASP Top risks for web apps
- XSS, CSRF, injection, broken access control, security misconfiguration.
- Threat modeling of user input, trust boundaries, and data flows.

3. Input validation and output encoding
- FE: validate for UX, but never trust client input.
- BE: enforce schema validation and sanitize/encode outputs.

4. Session and token security
- Cookies (`HttpOnly`, `Secure`, `SameSite`) vs local storage trade-offs.
- Token expiry, rotation, revocation, refresh flow hardening.

5. API security
- Rate limiting, auth middleware, idempotency, secure error messages.
- CORS policy, API gateway protections, request signing where needed.

6. Data protection
- Encryption in transit (TLS) and at rest (KMS/managed keys).
- Password hashing (`bcrypt`/`argon2`) and secret management.

7. Frontend hardening
- CSP, Trusted Types, avoiding dangerous DOM APIs, dependency hygiene.

8. Backend hardening and operations
- Security headers, SSRF controls, audit logs, monitoring, incident response.

## Top interview questions — Middle

1. What is XSS and how do you prevent it in React apps?
2. What is CSRF and how do cookie-based apps defend against it?
3. How do you store auth credentials securely in frontend apps?
4. How do you design secure login and refresh-token flows?
5. How do you prevent SQL/NoSQL injection in backend services?
6. How do you implement robust input validation on APIs?
7. What CORS mistakes are common and how do you avoid them?
8. How do you implement rate limiting and brute-force protection?
9. How do you secure file uploads and prevent malicious content risks?
10. How do you protect secrets and environment configuration in production?

## Top interview questions — Senior

1. How do you design end-to-end security architecture for FE + BE systems?
2. How do you implement defense-in-depth for authentication and authorization?
3. How do you handle multi-tenant access control safely at scale?
4. How do you design incident detection, response, and recovery workflows?
5. How do you secure microservice-to-microservice communication?
6. How do you manage key rotation, secret rotation, and certificate lifecycle?
7. How do you evaluate and reduce supply-chain risk in frontend/backend dependencies?
8. How do you design secure SDLC practices (SAST, DAST, IaC scanning, threat modeling)?
9. How do you build auditable security logging without leaking sensitive data?
10. How do you balance security controls with developer velocity and product UX?
