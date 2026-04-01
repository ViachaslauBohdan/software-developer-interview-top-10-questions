# Amazon S3 — Static site storage (React / SPA)

**S3** stores your built React output (`index.html`, JS chunks, CSS, images). It does **not** run React; the browser runs the bundle after download.

## Role in a typical stack

| Layer | Role |
|------|------|
| **S3** | Object storage for static files. |
| **CloudFront** | CDN in front of S3 (HTTPS, caching). See [`../cloudfront/README.md`](../cloudfront/README.md). |
| **Lambda** | Optional API (API Gateway); not for serving the UI bundle. |

Flow: **User → CloudFront → S3** for assets; **User → API Gateway → Lambda** for APIs.

## What this guide covers

- Creating a bucket for static hosting behind CloudFront
- Uploading build output
- Keeping the bucket **private** and granting read access to **CloudFront** via bucket policy (used with **Origin Access Control** on the distribution)

## 1) Build the React app

```bash
npm run build
```

Use the output folder your tool produces (e.g. Vite `dist/`, CRA `build/`).

## 2) Create a bucket

- Pick a region (e.g. `us-east-1`). CloudFront can use a regional bucket as origin.
- Enable **Block all public access** — the site is served via CloudFront, not public bucket website hosting (recommended modern pattern).

## 3) Upload files

Sync build output to the bucket root (or a prefix if you use one consistently):

```bash
aws s3 sync ./dist s3://YOUR_BUCKET_NAME --delete
```

`--delete` removes objects that no longer exist in the new build (avoids stale hashed JS/CSS).

## 4) Bucket policy for CloudFront (OAC)

With **Origin Access Control**, the bucket stays private. Attach a bucket policy that allows CloudFront’s origin access identity to `s3:GetObject` on your objects. The **CloudFront console** can generate this policy when you create or edit the origin.

Do **not** open the bucket to the public internet if you are using OAC + CloudFront.

## Common pitfalls

- Wrong **prefix**: `index.html` must live where the distribution’s origin path expects it (usually bucket root).
- **Public ACL** “for quick tests” — prefer private bucket + CloudFront + OAC.
- Forgetting `--delete` on sync — old chunk files linger and can confuse caching (still fix with CloudFront invalidation).

## Related

- CDN setup, SPA routing, and cache invalidation: [`../cloudfront/README.md`](../cloudfront/README.md)
- Lambda examples: [`../lambda/README.md`](../lambda/README.md)
