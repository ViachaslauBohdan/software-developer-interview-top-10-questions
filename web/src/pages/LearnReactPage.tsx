type HookSection = {
  api: string;
  problem: string;
  outcomes: string[];
  examples: string[];
};

type HookCategory = {
  title: string;
  subtitle: string;
  sections: HookSection[];
};

const categories: HookCategory[] = [
  {
    title: 'Core (Built-in) Hooks - MUST KNOW',
    subtitle: 'Used in almost every production React app.',
    sections: [
      {
        api: 'useState',
        problem: 'Local component state and simple UI transitions.',
        outcomes: ['Simple and explicit state updates.', 'Great for isolated UI state.', 'Interview baseline for render/update flow.'],
        examples: [
          `const [count, setCount] = useState(0);`,
          `const [query, setQuery] = useState("");`,
          `const [draft, setDraft] = useState(() => localStorage.getItem("draft") ?? "");`
        ]
      },
      {
        api: 'useReducer',
        problem: 'Complex state logic with action-based updates (Redux-like mental model).',
        outcomes: ['Centralized transitions for complex screens.', 'Better testability than scattered state updates.', 'Clearer intent for multi-step workflows.'],
        examples: [
          `const [state, dispatch] = useReducer(reducer, initialState);`,
          `dispatch({ type: "save_start" });`,
          `function reducer(state, action) { return action.type === "reset" ? initialState : state; }`
        ]
      },
      {
        api: 'useEffect',
        problem: 'Side effects after render (network, subscriptions, sync with external systems).',
        outcomes: ['Keeps render function pure.', 'Supports proper cleanup for subscriptions/timers.', 'Overuse is a common interview red flag.'],
        examples: [
          `useEffect(() => { fetchData(); }, []);`,
          `useEffect(() => { const id = setInterval(tick, 1000); return () => clearInterval(id); }, []);`,
          `useEffect(() => { document.title = title; }, [title]);`
        ]
      },
      {
        api: 'useLayoutEffect',
        problem: 'Synchronous effect before paint for layout reads/writes.',
        outcomes: ['Prevents measurement flicker.', 'Useful for tooltip/positioning edge cases.', 'Perf-sensitive and should be rare.'],
        examples: [
          `useLayoutEffect(() => { const rect = ref.current?.getBoundingClientRect(); }, []);`,
          `useLayoutEffect(() => { positionPopover(anchorRef.current, panelRef.current); }, [open]);`,
          `useLayoutEffect(() => { listRef.current?.scrollTo({ top: savedTop }); }, [routeKey]);`
        ]
      },
      {
        api: 'useRef',
        problem: 'Mutable value or DOM reference without triggering re-render.',
        outcomes: ['Avoids unnecessary render churn.', 'Best for DOM handles and instance-like values.', 'Prevents misuse of state for non-visual data.'],
        examples: [
          `const inputRef = useRef<HTMLInputElement>(null);`,
          `const timerRef = useRef<number | null>(null);`,
          `const prevQueryRef = useRef(query);`
        ]
      }
    ]
  },
  {
    title: 'Performance & Optimization Hooks',
    subtitle: 'Critical for senior-level frontend roles.',
    sections: [
      {
        api: 'useMemo',
        problem: 'Memoize expensive computed values.',
        outcomes: ['Reduces repeated CPU-heavy calculations.', 'Useful for large lists and derived structures.', 'Should be measurement-driven, not default.'],
        examples: [
          `const visible = useMemo(() => heavyFilter(items, query), [items, query]);`,
          `const byId = useMemo(() => new Map(users.map((u) => [u.id, u])), [users]);`,
          `const chartData = useMemo(() => transformMetrics(raw), [raw]);`
        ]
      },
      {
        api: 'useCallback',
        problem: 'Memoize function identity to avoid avoidable re-renders.',
        outcomes: ['Stabilizes callback props passed to memoized children.', 'Improves render behavior in deep trees.', 'Unnecessary usage can hurt readability.'],
        examples: [
          `const onSelect = useCallback((id: string) => setSelected(id), []);`,
          `const onDelete = useCallback((id: string) => removeItem(id), [removeItem]);`,
          `const handlers = useCallback(() => ({ save, reset }), [save, reset]);`
        ]
      },
      {
        api: 'React.memo (related API, not a hook)',
        problem: 'Skip child re-render if props are unchanged.',
        outcomes: ['Improves performance for expensive subtrees.', 'Works best with stable props from memo/callback.', 'Can be overused and increase complexity.'],
        examples: [
          `const Row = React.memo(function Row({ item }) { return <div>{item.name}</div>; });`,
          `const Cell = React.memo(CellBase, (prev, next) => prev.value === next.value);`,
          `const data = useMemo(() => ({ title }), [title]); return <Card data={data} />;`
        ]
      }
    ]
  },
  {
    title: 'Context & Dependency Injection',
    subtitle: 'Share global state safely without prop drilling.',
    sections: [
      {
        api: 'useContext',
        problem: 'Consume shared state/services across deep component trees.',
        outcomes: ['Cleaner component APIs.', 'Good for auth/theme/i18n/feature flags.', 'Large context updates can fan out renders.'],
        examples: [`const theme = useContext(ThemeContext);`, `const { user } = useContext(AuthContext);`, `const api = useContext(ApiClientContext);`]
      }
    ]
  },
  {
    title: 'Advanced React Hooks (Senior-Level)',
    subtitle: 'Escape hatches and debugging-level depth.',
    sections: [
      {
        api: 'useImperativeHandle',
        problem: 'Expose controlled imperative methods from child to parent via ref.',
        outcomes: ['Useful for focus/reset/scroll methods.', 'Keeps child internals private.', 'Should remain an escape hatch pattern.'],
        examples: [
          `useImperativeHandle(ref, () => ({ focus: () => inputRef.current?.focus() }), []);`,
          `useImperativeHandle(ref, () => ({ reset: () => setValue("") }), []);`,
          `useImperativeHandle(ref, () => ({ validate: () => value.length > 2 }), [value]);`
        ]
      },
      {
        api: 'forwardRef (related API, not a hook)',
        problem: 'Forward refs through function components (often used with useImperativeHandle).',
        outcomes: ['Allows parent control over underlying DOM/custom API.', 'Enables reusable form/input abstractions.', 'Essential when building design systems.'],
        examples: [
          `const FancyInput = forwardRef<HTMLInputElement, Props>((props, ref) => <input ref={ref} {...props} />);`,
          `const Dialog = forwardRef<DialogApi, DialogProps>((props, ref) => { /* ... */ });`,
          `const Button = forwardRef<HTMLButtonElement, BtnProps>(function Button(props, ref) { return <button ref={ref} {...props} />; });`
        ]
      },
      {
        api: 'useDebugValue',
        problem: 'Improve custom hook labels in React DevTools.',
        outcomes: ['Faster debugging for shared hooks.', 'Higher DX for team-owned hook libraries.', 'No user-facing runtime UX change.'],
        examples: [
          `useDebugValue(isOnline ? "Online" : "Offline");`,
          `useDebugValue(user, (u) => (u ? "Authenticated" : "Anonymous"));`,
          `useDebugValue(status, (s) => \`Request:\${s}\`);`
        ]
      }
    ]
  },
  {
    title: 'Concurrent / Modern React (18+)',
    subtitle: 'High-impact interview topics for responsive UIs.',
    sections: [
      {
        api: 'useTransition',
        problem: 'Mark updates as non-urgent so urgent interactions stay responsive.',
        outcomes: ['Smoother typing and interaction under heavy renders.', 'Supports pending-state UX.', 'Not a substitute for algorithm optimization.'],
        examples: [
          `const [isPending, startTransition] = useTransition();`,
          `startTransition(() => setFilteredQuery(next));`,
          `return isPending ? <Spinner /> : <Results />;`
        ]
      },
      {
        api: 'startTransition (related API, not a hook)',
        problem: 'Start transition updates outside hooks/components.',
        outcomes: ['Useful for external stores and utility layers.', 'Consistent priority handling for non-urgent updates.', 'Supports smoother app-wide interactions.'],
        examples: [
          `import { startTransition } from "react";`,
          `startTransition(() => globalStore.setState(next));`,
          `startTransition(() => setSearchParams(newParams));`
        ]
      },
      {
        api: 'useDeferredValue',
        problem: 'Defer rapidly changing values feeding expensive rendering.',
        outcomes: ['Reduces jank in typeahead/search screens.', 'Improves perceived responsiveness.', 'Introduces intentional stale state briefly.'],
        examples: [
          `const deferredQuery = useDeferredValue(query);`,
          `const filtered = useMemo(() => heavyFilter(items, deferredQuery), [items, deferredQuery]);`,
          `const isStale = query !== deferredQuery;`
        ]
      }
    ]
  },
  {
    title: 'New Hooks (React 18/19 direction)',
    subtitle: 'IDs and SSR-safe semantics.',
    sections: [
      {
        api: 'useId',
        problem: 'Generate stable unique IDs across server/client rendering.',
        outcomes: ['Prevents hydration mismatches.', 'Improves accessible label/input wiring.', 'Safe default for reusable field components.'],
        examples: [`const id = useId();`, `<label htmlFor={id}>Email</label><input id={id} />;`, `const helpId = \`\${id}-hint\`;`]
      }
    ]
  },
  {
    title: 'React 19+ / Experimental',
    subtitle: 'Very hot in modern interviews and AI-heavy products.',
    sections: [
      {
        api: 'use',
        problem: 'Consume promises/resources directly in render flow.',
        outcomes: ['Cleaner async composition with Suspense patterns.', 'Less loading-state boilerplate in some architectures.', 'Requires framework/runtime support.'],
        examples: [
          `const user = use(userPromise);`,
          `const post = use(fetchPost(id));`,
          `<Suspense fallback={<p>Loading...</p>}><UserCard /></Suspense>;`
        ]
      },
      {
        api: 'useOptimistic',
        problem: 'Optimistic UI updates before server confirmation.',
        outcomes: ['Faster perceived UX for mutations/forms.', 'Better responsiveness in collaborative UIs.', 'Needs clear rollback strategy on error.'],
        examples: [
          `const [optimisticCount, addOptimistic] = useOptimistic(count, (state, delta: number) => state + delta);`,
          `addOptimistic(1); await likePost();`,
          `const [comments, addComment] = useOptimistic(initialComments, (s, text: string) => [...s, { id: "tmp", text }]);`
        ]
      },
      {
        api: 'useFormStatus',
        problem: 'Read current form submission status in server-action flows.',
        outcomes: ['Easy pending/disabled UI states.', 'Cleaner than prop-drilling submit state.', 'Integrates naturally with modern form actions.'],
        examples: [
          `const { pending } = useFormStatus();`,
          `<button disabled={pending}>{pending ? "Saving..." : "Save"}</button>;`,
          `return pending ? <Spinner /> : null;`
        ]
      },
      {
        api: 'useFormState',
        problem: 'Manage server-driven form state (errors/success/data).',
        outcomes: ['Centralized form response handling.', 'Less manual state plumbing.', 'Better consistency for form UX patterns.'],
        examples: [
          `const [state, formAction] = useFormState(createUserAction, { error: null });`,
          `<form action={formAction}>...</form>;`,
          `{state.error ? <p>{state.error}</p> : <p>Saved</p>};`
        ]
      }
    ]
  }
];

const customHookExamples = [
  `function useUser() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch('/api/user').then((res) => res.json()).then(setUser);
  }, []);
  return user;
}`,
  `function usePolling(fetcher, ms = 5000) {
  const [data, setData] = useState(null);
  useEffect(() => {
    let active = true;
    const run = async () => active && setData(await fetcher());
    run();
    const id = setInterval(run, ms);
    return () => { active = false; clearInterval(id); };
  }, [fetcher, ms]);
  return data;
}`,
  `function useLocalStorageState(key, initial = "") {
  const [value, setValue] = useState(() => localStorage.getItem(key) ?? initial);
  useEffect(() => localStorage.setItem(key, value), [key, value]);
  return [value, setValue];
}`
];

const levelSummary = [
  { level: 'Level 1 (must know)', hooks: 'useState, useEffect, useRef, useContext' },
  { level: 'Level 2 (expected mid-level)', hooks: 'useMemo, useCallback, useReducer' },
  { level: 'Level 3 (senior)', hooks: 'useLayoutEffect, useImperativeHandle, useDebugValue, useTransition, useDeferredValue' },
  { level: 'Level 4 (cutting-edge)', hooks: 'use, useOptimistic, useFormStatus, useFormState, useId' }
];

type LearnReactPageProps = {
  onBackHome: () => void;
};

export default function LearnReactPage({ onBackHome }: LearnReactPageProps) {
  return (
    <main className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Interview-ready React roadmap</p>
          <h1>/learn/react - Modern Hooks</h1>
          <p className="subtitle">Includes all core, advanced, concurrent, and React 19 direction hooks with interview-grade framing.</p>
        </div>
        <button className="toggle-btn active" onClick={onBackHome}>
          Back to explorer
        </button>
      </header>

      {categories.map((category) => (
        <section key={category.title} className="details-panel" style={{ marginTop: '1rem' }}>
          <h2>{category.title}</h2>
          <p>{category.subtitle}</p>
          {category.sections.map((section) => (
            <article key={section.api} style={{ marginBottom: '1.25rem' }}>
              <h3>{section.api}</h3>
              <p>
                <strong>1) What problem it resolves:</strong> {section.problem}
              </p>
              <p>
                <strong>2) Outcomes / results / performance:</strong>
              </p>
              <ul>
                {section.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
              <p>
                <strong>3) Three code examples:</strong>
              </p>
              <pre>
                <code>{section.examples.join('\n\n')}</code>
              </pre>
            </article>
          ))}
        </section>
      ))}

      <section className="details-panel" style={{ marginTop: '1rem' }}>
        <h2>Custom Hooks (Concept)</h2>
        <p>Not built-in, but critical. This is how real systems scale logic without duplicating side-effect/state code.</p>
        <p>
          <strong>Three code examples:</strong>
        </p>
        <pre>
          <code>{customHookExamples.join('\n\n')}</code>
        </pre>
      </section>

      <section className="details-panel" style={{ marginTop: '1rem' }}>
        <h2>Hook Categories Summary (Interview Ready)</h2>
        <ul>
          {levelSummary.map((row) => (
            <li key={row.level}>
              <strong>{row.level}:</strong> {row.hooks}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
