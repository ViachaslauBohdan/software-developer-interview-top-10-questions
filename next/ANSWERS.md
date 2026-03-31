# Next.js Answers With Short Code Examples

## Middle

1) Compare SSR, SSG, ISR.
```ts
// app/blog/[slug]/page.tsx -> SSR (dynamic)
export const dynamic = 'force-dynamic';
```
```ts
// app/about/page.tsx -> SSG (static at build)
export const dynamic = 'force-static';
```
```ts
// app/news/page.tsx -> ISR (revalidate every 60s)
export const revalidate = 60;
```

2) Server vs Client Components?
```tsx
// Server Component (default)
export default async function Page() {
  const data = await fetch('https://api.example.com/posts').then(r => r.json());
  return <pre>{JSON.stringify(data)}</pre>;
}
```
```tsx
// Client Component
'use client';
import { useState } from 'react';
export function Counter() { const [n, setN] = useState(0); return <button onClick={() => setN(n + 1)}>{n}</button>; }
```

3) How `loading.tsx` and `error.tsx` work?
```tsx
// app/dashboard/loading.tsx
export default function Loading() { return <p>Loading dashboard...</p>; }
```
```tsx
// app/dashboard/error.tsx
'use client';
export default function Error({ reset }: { reset: () => void }) { return <button onClick={reset}>Retry</button>; }
```

4) Revalidation and failures?
```ts
await fetch('https://api.example.com/products', { next: { revalidate: 120, tags: ['products'] } });
// If data must refresh after mutation:
// revalidateTag('products')
```

5) Protect route using middleware.
```ts
// middleware.ts
import { NextResponse } from 'next/server';
export function middleware(req: Request) {
  const hasToken = req.headers.get('cookie')?.includes('session=');
  return hasToken ? NextResponse.next() : NextResponse.redirect(new URL('/login', req.url));
}
```

6) Route handlers vs old API routes?
```ts
// app/api/users/route.ts
export async function GET() { return Response.json([{ id: 1, name: 'Ann' }]); }
```

7) Optimize images and fonts.
```tsx
import Image from 'next/image';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
export default function Hero() { return <Image src="/hero.jpg" alt="hero" width={1200} height={600} priority className={inter.className} />; }
```

8) Debug hydration mismatch?
```tsx
// Bad: server/client time mismatch
// <p>{new Date().toISOString()}</p>

// Good: render on client only
'use client';
import { useEffect, useState } from 'react';
export default function Clock() { const [now, setNow] = useState(''); useEffect(() => setNow(new Date().toISOString()), []); return <p>{now}</p>; }
```

9) Dynamic vs static page?
```ts
// Frequently changing private data
export const dynamic = 'force-dynamic';
// Rarely changing public docs
export const revalidate = 3600;
```

10) Structure growing app.
```txt
app/
  (marketing)/page.tsx
  (app)/dashboard/page.tsx
features/
  billing/
    ui/
    server/
    actions.ts
```

## Senior

1) High-traffic mixed rendering architecture?
```ts
// Public pages: SSG/ISR
export const revalidate = 300;
// User dashboard: dynamic
export const dynamic = 'force-dynamic';
```

2) Minimize hydration and bundle size?
```tsx
// Keep heavy libs on server, hydrate only interactive leaf
import ClientChart from './ClientChart'; // 'use client'
export default async function Page() { const data = await getData(); return <ClientChart points={data.slice(0, 50)} />; }
```

3) Caching and revalidation strategy?
```ts
await fetch('/api/catalog', { next: { tags: ['catalog'], revalidate: 600 } });
// After admin update:
// revalidateTag('catalog')
```

4) Auth in App Router?
```ts
// route handler checks session cookie and returns 401
export async function GET(req: Request) {
  const ok = req.headers.get('cookie')?.includes('session=');
  return ok ? Response.json({ ok: true }) : new Response('Unauthorized', { status: 401 });
}
```

5) Edge vs Node runtime?
```ts
// Fast geo middleware
export const runtime = 'edge';
// Node-only libs (DB driver, native modules)
// export const runtime = 'nodejs';
```

6) Observability for actions/handlers?
```ts
const t0 = Date.now();
try { /* handler logic */ } finally { console.log(JSON.stringify({ path: '/api/x', ms: Date.now() - t0 })); }
```

7) Pages Router to App Router migration?
```txt
Step 1: move one route to app/
Step 2: keep legacy in pages/
Step 3: migrate shared layouts + data fetching
```

8) Multi-tenant architecture?
```ts
// middleware: detect tenant by host
const host = req.headers.get('host') || '';
const tenant = host.split('.')[0];
```

9) SEO with dynamic/personalized content?
```tsx
export async function generateMetadata() {
  return { title: 'Product page', description: 'Server-rendered SEO metadata' };
}
```

10) Team-wide quality standards?
```json
{
  "scripts": {
    "lint": "next lint",
    "typecheck": "tsc --noEmit",
    "test": "vitest run"
  }
}
```
