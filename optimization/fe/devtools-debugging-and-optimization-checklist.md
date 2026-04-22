# FE Debugging and Optimization: DevTools Checklist

## 🛠️ Chrome DevTools and Console (Main Things to Check)
- `Network` tab: waterfall, slow endpoints, payload size, cache hits/misses, and TTFB.
- `Performance` tab: long tasks, scripting/layout/paint cost, FPS drops, and main-thread blocking.
- `Coverage` tab: unused `JS/CSS` to reduce bundle size.
- `Memory` tab: heap snapshots and allocation timeline to detect leaks.
- `Elements` + `Styles`: costly style recalculations and layout thrashing patterns.

## 💻 Useful Console and Performance APIs
- `console.time()` / `console.timeEnd()` for quick operation timing.
- `console.table()` for large dataset inspection.
- `monitorEvents(element)` to inspect noisy UI events.
- `performance.mark()` / `performance.measure()` for custom timing checkpoints.

## ⚛️ React DevTools (Debugging and Optimization)
- `Components` panel: inspect props/state/context and verify update paths.
- `Profiler` panel: record interactions and find components with expensive renders.
- Enable "Highlight updates" to visualize unnecessary re-renders.
- Check commit duration and render count spikes after user actions.
- Validate memoization impact (`React.memo`, `useMemo`, `useCallback`) using profiler runs before/after changes.
