# Amazon CloudFront — CDN in front of S3

**CloudFront** sits between users and your **S3** bucket: HTTPS, global edge caching, and optional custom domain.

## Role in a typical stack

| Layer | Role |
|------|------|
| **S3** | Origin: stores static files. See [`../s3/README.md`](../s3/README.md). |
| **CloudFront** | Edge network: TLS, cache, routing to origin. |
| **Lambda** | Separate path for APIs (e.g. API Gateway), not for static files. |

## Why use CloudFront with S3

- **HTTPS** and ACM certificates at the edge.
- **Lower latency** via caches closer to users.
- **Origin Access Control (OAC)** — S3 bucket can remain **private**; only CloudFront reads objects.
- **Custom domain** (alternate domain names) and clean URLs.

## 1) Create a distribution

- **Origin**: your S3 bucket.
- Prefer **Origin access** with **Origin access control (OAC)** — not legacy public bucket website endpoints for new work.
- **Default root object**: `index.html` (for requests to `/`).
- **Viewer protocol policy**: Redirect HTTP to HTTPS.

After saving, apply the **bucket policy** AWS suggests so CloudFront can call `s3:GetObject`.

## 2) SPA: client-side routing (React Router, etc.)

Direct navigation to `/learn/react` must return `index.html` (the app bootstraps and the router handles the path).

In CloudFront, use **custom error responses**:

- **403** → response path `/index.html`, **HTTP 200** (common with OAC when the object key does not exist).
- **404** → `/index.html`, **200** as needed for your app.

For advanced rules, teams sometimes use **CloudFront Functions** or **Lambda@Edge**.

## 3) Deploy updates and cache

After you upload a new build to S3, edge caches may still serve old files. **Invalidate** when users must see changes immediately:

```bash
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

Narrower invalidation (e.g. only `/index.html`) is possible if your asset hashing strategy allows it.

## 4) Optional: custom domain

1. Request an ACM certificate in **us-east-1** (required for CloudFront default certificate workflow).
2. Add **alternate domain name (CNAME)** on the distribution.
3. Point **Route 53** (or external DNS) to the CloudFront domain name.

## Interview one-liner

CloudFront caches and terminates TLS at the edge; S3 is the durable origin for static objects; Lambda is for dynamic APIs elsewhere.

## Common pitfalls

- No invalidation after deploy → users see an old UI.
- Missing SPA error mapping → deep links return 403/404 instead of the app.

## Related

- Uploading builds to S3: [`../s3/README.md`](../s3/README.md)
- Lambda examples: [`../lambda/README.md`](../lambda/README.md)
