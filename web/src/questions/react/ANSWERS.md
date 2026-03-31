# React Answers With Short Code Examples

## Middle

1) What causes re-render?
```tsx
function A({ x }: { x: number }) {
  const [n, setN] = useState(0); // state change -> re-render
  return <button onClick={() => setN(n + 1)}>{x}:{n}</button>; // prop change also re-renders
}
```

2) `useEffect` dependencies?
```tsx
useEffect(() => {
  const id = setInterval(load, 1000);
  return () => clearInterval(id);
}, [load]); // include used values
```

3) `useMemo` vs `useCallback`?
```tsx
const filtered = useMemo(() => items.filter(i => i.active), [items]); // memoized value
const onClick = useCallback(() => save(id), [id]); // memoized function
```

4) `useReducer` vs `useState`?
```tsx
type S = { count: number }; type A = { type: 'inc' | 'dec' };
const [state, dispatch] = useReducer((s: S, a: A) => ({ count: s.count + (a.type === 'inc' ? 1 : -1) }), { count: 0 });
```

5) Why keys matter?
```tsx
// Good: stable key preserves item state
{todos.map(t => <TodoRow key={t.id} todo={t} />)}
```

6) Controlled vs uncontrolled?
```tsx
// Controlled
<input value={name} onChange={e => setName(e.target.value)} />
// Uncontrolled
<input ref={nameRef} defaultValue="Ann" />
```

7) Reusable hooks safely?
```tsx
function useDebounce<T>(value: T, ms: number) {
  const [v, setV] = useState(value);
  useEffect(() => { const t = setTimeout(() => setV(value), ms); return () => clearTimeout(t); }, [value, ms]);
  return v;
}
```

8) Debug too many re-renders?
```tsx
import { Profiler } from 'react';
<Profiler id="List" onRender={(id, phase, ms) => console.log(id, phase, ms)}><List /></Profiler>
```

9) Prop drilling alternatives?
```tsx
const ThemeCtx = createContext('light');
<ThemeCtx.Provider value="dark"><Toolbar /></ThemeCtx.Provider>
```

10) Test async behavior?
```tsx
render(<UserCard id="1" />);
expect(screen.getByText(/loading/i)).toBeInTheDocument();
expect(await screen.findByText(/john doe/i)).toBeInTheDocument();
```

11) Design reusable accessible form component?
```tsx
type FieldProps = { id: string; label: string; error?: string } & React.InputHTMLAttributes<HTMLInputElement>;
function Field({ id, label, error, ...props }: FieldProps) {
  return (
    <label htmlFor={id}>
      <span>{label}</span>
      <input id={id} aria-invalid={!!error} aria-describedby={error ? `${id}-err` : undefined} {...props} />
      {error && <small id={`${id}-err`}>{error}</small>}
    </label>
  );
}
```

12) `useTransition` / `useDeferredValue` in UX-heavy flows?
```tsx
const [isPending, startTransition] = useTransition();
const deferredQuery = useDeferredValue(query);
startTransition(() => setQuery(next)); // keep input responsive
const filtered = useMemo(() => search(items, deferredQuery), [items, deferredQuery]);
```

## Senior

1) Scalable architecture?
```txt
features/
  checkout/{ui,hooks,api,types}
shared/{ui,lib}
```

2) Client/server/url state boundaries?
```tsx
// URL state for filters
router.push(`?status=${status}`);
// Server state with query lib; local UI state in component
```

3) Global state trade-offs?
```tsx
// Small app: Context
const Auth = createContext<{ user?: User }>({});
// Bigger async app: Redux Toolkit/Zustand (predictable updates)
```

4) Optimize render performance?
```tsx
const Row = memo(function Row({ item }: { item: Item }) { return <li>{item.name}</li>; });
// plus list virtualization for 1k+ rows
```

5) Component APIs across teams?
```tsx
type ButtonProps = { variant: 'primary' | 'ghost'; onClick?: () => void };
export function Button(props: ButtonProps) { /* stable API + docs */ }
```

6) Gradual Suspense adoption?
```tsx
<Suspense fallback={<Spinner />}>
  <ProductRecommendations />
</Suspense>
```

7) Error boundaries and recovery?
```tsx
<ErrorBoundary fallback={<RetryPanel />}>
  <Checkout />
</ErrorBoundary>
```

8) Prevent regressions?
```txt
PR checks: typecheck + unit + integration + visual snapshots.
```

9) Abstraction rules?
```tsx
// Rule: extract only after 2-3 real duplicates
function useUserAvatar() { /* shared logic only if repeated */ }
```

10) Mentoring on internals?
```txt
Teach by profiling sessions: "why this re-rendered" + hands-on refactor PRs.
```

11) Design system API for many teams?
```tsx
type ButtonProps = { variant: 'primary' | 'secondary'; size: 'sm' | 'md' | 'lg' };
export function Button({ variant, size, ...rest }: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button data-variant={variant} data-size={size} {...rest} />;
}
```

12) Server Components vs Client Components boundaries?
```tsx
// Server component: fetch + render static/SEO-critical data
export default async function ProductPage() {
  const product = await getProduct();
  return <BuyButton productId={product.id} />; // BuyButton is client
}
```

13) Modern hooks in real architecture?
```tsx
const value = useSyncExternalStore(store.subscribe, store.getSnapshot);
useInsertionEffect(() => injectCriticalCss(theme), [theme]); // CSS-in-JS edge case
```
