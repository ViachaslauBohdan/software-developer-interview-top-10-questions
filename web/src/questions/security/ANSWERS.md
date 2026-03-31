# Security Answers With Short Code Examples

## Middle

1) Prevent XSS in React?
```tsx
const input = '<img src=x onerror=alert(1) />';
return <p>{input}</p>; // escaped by React
// sanitize only if rendering HTML intentionally
```

2) Prevent CSRF in cookie auth?
```txt
Use SameSite cookies + CSRF token middleware + origin checks for state-changing routes.
```

3) Store auth credentials securely on FE?
```txt
Prefer HttpOnly Secure SameSite cookies for session/refresh tokens.
```

4) Secure login + refresh flow?
```ts
// short-lived access token + rotating refresh token in HttpOnly cookie
```

5) Prevent injection?
```ts
await db.query('SELECT * FROM users WHERE email = $1', [email]);
```

6) Robust API validation?
```ts
const Body = z.object({ email: z.string().email() });
const parsed = Body.parse(req.body);
```

7) CORS best practice?
```ts
app.use(cors({ origin: ['https://app.example.com'], credentials: true }));
```

8) Rate limiting / brute-force?
```ts
app.use('/auth/login', rateLimit({ windowMs: 15 * 60 * 1000, max: 10 }));
```

9) Secure file uploads?
```txt
Check MIME + extension, scan malware, store outside web root, use signed URLs.
```

10) Protect secrets?
```ts
const apiKey = process.env.API_KEY;
if (!apiKey) throw new Error('Missing API_KEY');
```

## Senior

1) End-to-end security architecture?
```txt
Threat model + zero-trust boundaries + layered controls (edge, app, data, ops).
```

2) Defense-in-depth authz/authn?
```txt
MFA + short sessions + RBAC/ABAC + service-level policy checks + audit logs.
```

3) Multi-tenant access control?
```ts
if (resource.tenantId !== user.tenantId) throw new ForbiddenError();
```

4) Incident response design?
```txt
Detect -> triage -> contain -> eradicate -> recover -> postmortem with runbooks.
```

5) Service-to-service security?
```txt
Use mTLS/service identity + short-lived credentials + scoped IAM roles.
```

6) Key/secret/cert rotation?
```txt
Automate rotation; dual-key rollout; monitor expiry; no manual hardcoded secrets.
```

7) Supply-chain risk reduction?
```txt
Pin lockfiles, run SCA scans, verify packages, minimize dependencies.
```

8) Secure SDLC?
```txt
PR checks: SAST + secrets scan + IaC scan + threat modeling on major changes.
```

9) Auditable logs without leaks?
```ts
logger.info({ userId, action: 'LOGIN_FAIL', ip }); // no passwords/tokens/PII payload dumps
```

10) Security vs velocity/UX?
```txt
Define risk tiers; stronger controls for high-risk paths; secure defaults + good DX.
```
