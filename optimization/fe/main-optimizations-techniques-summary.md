# FE Optimization: Main Techniques Summary

## ⚙️ Build and Bundling
- `Vite` / `Webpack` / `Turbopack` — fast builds and `code splitting`.
- `Tree shaking` — removes unused code.
- `Minification` — compresses `JS/CSS`.

## 📦 Asset Optimization
- Image optimizers (for example, built into `Next.js`).
- Formats: `WebP` / `AVIF`.
- Use `SVG` instead of `PNG` where possible.
- `Lazy loading` (`loading="lazy"`).

## 🌍 Delivery and Caching
- `CDN` (`Cloudflare`, `AWS CloudFront`) — fast static asset delivery.
- `HTTP caching` (`Cache-Control`, `ETag`).
- `Service Worker` (PWA cache).

## ⚡ Rendering
- `SSR` / `SSG` (for example, with `Next.js`).
- `CSR` — only where it is actually needed.
- `Streaming` / `partial hydration`.

## 🧠 Runtime Optimization (React)
- `React.memo`, `useMemo`, `useCallback`.
- `Code splitting` (`React.lazy`).
- Avoid unnecessary `re-renders`.

## 📡 Data Layer Optimization
- Request caching (`React Query` / `SWR`).
- `Debounce` / `throttle`.
- `Pagination` / `infinite scroll`.

## 📊 Monitoring
- `Lighthouse` (`Google Lighthouse`).
- `Web Vitals` (`LCP`, `CLS`, `INP`).
- `Sentry` / `LogRocket`.

## 🚀 Quick Summary (Ultra Short)
- Reduce bundle size.
- Optimize assets.
- Deliver through `CDN`.
- Cache everything possible.
- Control rendering behavior.
- Monitor key metrics.
