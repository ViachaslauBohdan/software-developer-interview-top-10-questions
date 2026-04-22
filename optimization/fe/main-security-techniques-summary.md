# FE Security: Main Techniques Summary

## 🔐 Authentication and Token Handling
- Prefer secure, httpOnly cookies for session tokens when possible.
- If using browser storage, minimize token lifetime and scope.
- Implement proper logout and token invalidation flows.
- Never expose secrets/API private keys in frontend code.

## 🛡️ XSS and Injection Protection
- Treat all user content as untrusted input.
- Avoid `dangerouslySetInnerHTML` unless content is sanitized.
- Use output encoding and trusted sanitizers for rich text.
- Apply strict `Content-Security-Policy (CSP)` to reduce script injection risk.

## 🌍 Browser Security Headers and Policies
- Use `CSP`, `X-Frame-Options`/`frame-ancestors`, `Referrer-Policy`.
- Enable `Strict-Transport-Security (HSTS)` on production domains.
- Set `X-Content-Type-Options: nosniff`.
- Limit feature access with `Permissions-Policy`.

## 🌐 API Communication Safety
- Always use `HTTPS`.
- Configure CORS correctly (strict allowlist, no wildcard with credentials).
- Add CSRF protection for cookie-based auth (`SameSite`, CSRF token).
- Validate all server responses before trusting/using them.

## 🧩 Third-Party Script and Dependency Safety
- Load only trusted third-party scripts.
- Use `Subresource Integrity (SRI)` for CDN scripts when applicable.
- Keep frontend dependencies updated and audited.
- Remove unused libraries to reduce attack surface.

## 🧠 UI and Runtime Hardening
- Avoid exposing sensitive data in URLs, local storage, or logs.
- Redact PII in client-side error tracking tools.
- Disable source maps in production if policy requires it.
- Gate risky features behind role checks and server validation.

## 📊 Monitoring and Testing
- Add security-focused checks in CI (lint/security scanners).
- Use SAST/DAST where possible.
- Test for XSS, CSRF, open redirects, and clickjacking.
- Track suspicious frontend events and auth anomalies.

## 🚀 Quick Summary (Ultra Short)
- Protect tokens and do not leak secrets.
- Prevent XSS with safe rendering and CSP.
- Use secure headers, HTTPS, and CSRF defenses.
- Audit dependencies and monitor client-side risks.
