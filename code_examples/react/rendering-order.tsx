import { useEffect, useLayoutEffect, useState } from "react";

/**
 * ## Rendering order in a React web app (React 18, typical SPA)
 *
 * ### 1. Before React
 * - Browser loads HTML, then JS bundles.
 * - Entry file runs `createRoot(document.getElementById("root")!).render(<App />)`.
 *
 * ### 2. Render phase
 * - React calls components **depth-first**: the parent function runs (including its hooks
 *   *registration* for this pass), then React walks the returned children and renders them.
 * - This pass computes the UI; **effects do not run yet** (their callbacks are scheduled).
 *
 * ### 3. Commit phase
 * - React applies changes to the **DOM**.
 *
 * ### 4. Effects (after DOM updates)
 * - **`useLayoutEffect`** — runs **synchronously** after DOM mutations, **before** the next paint.
 * - **`useEffect`** — runs **after** paint.
 * - Nested tree: **child layout effects before parent**; same for `useEffect` (bottom-up).
 *
 * ### 5. Updates (`setState`, etc.)
 * - New render pass → commit → layout effects → paint → passive effects.
 *
 * ### Dev note: Strict Mode
 * - In development, React may **double-invoke** render and effects on mount to find bugs.
 */

function Child({ label }: { label: string }) {
  // A — render (this component’s function body)
  const _render = label;

  useLayoutEffect(() => {
    // C — layout: runs after DOM update, before paint; **before** Parent’s useLayoutEffect
    void _render;
  }, [label]);

  useEffect(() => {
    // E — passive: after paint; **before** Parent’s useEffect
    void _render;
  }, [label]);

  return <span>{label}</span>;
}

export function RenderingOrderDemo() {
  const [count, setCount] = useState(0);

  // B — render: Parent runs; when React renders `<Child />`, Child’s render runs in this pass
  const title = `count=${count}`;

  useLayoutEffect(() => {
    // D — layout: runs after Child’s useLayoutEffect
    void title;
  }, [count]);

  useEffect(() => {
    // F — passive: runs after Child’s useEffect
    void title;
  }, [count]);

  return (
    <div>
      <p>{title} — see file header for phase order.</p>
      <Child label="child" />
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Re-render
      </button>
    </div>
  );
}

/* Console demo: must be separate components (hooks cannot nest). */

function ChildLog({ tag }: { tag: string }) {
  console.log(`${tag} ② Child render`);
  useLayoutEffect(() => {
    console.log(`${tag} ④ Child useLayoutEffect`);
  });
  useEffect(() => {
    console.log(`${tag} ⑥ Child useEffect`);
  });
  return <span>child</span>;
}

export function RenderingOrderLoggedDemo() {
  const [count, setCount] = useState(0);
  const tag = `[mount/update #${count}]`;

  console.log(`${tag} ① Parent render`);
  useLayoutEffect(() => {
    console.log(`${tag} ⑤ Parent useLayoutEffect`);
  });
  useEffect(() => {
    console.log(`${tag} ⑦ Parent useEffect`);
  });

  return (
    <div>
      <ChildLog tag={tag} />
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Re-render (watch console)
      </button>
    </div>
  );
}
