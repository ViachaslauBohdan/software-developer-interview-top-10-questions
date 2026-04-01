import { startTransition, useMemo, useState, useTransition } from "react";

function heavyFilter(items: string[], q: string) {
  const query = q.toLowerCase();
  return items.filter((item) => item.toLowerCase().includes(query));
}

/**
 * Comprehensive but minimal:
 * - urgent update (input)
 * - non-urgent update (results)
 * - pending state for UX
 */
export function TransitionSearch({ items }: { items: string[] }) {
  const [query, setQuery] = useState("");
  const [listQuery, setListQuery] = useState("");
  const [isPending, runTransition] = useTransition();

  const visible = useMemo(() => heavyFilter(items, listQuery), [items, listQuery]);

  function onChange(next: string) {
    setQuery(next); // urgent: keep typing responsive
    runTransition(() => {
      setListQuery(next); // non-urgent: heavy list update
    });
  }

  return (
    <section>
      <h3>Transition Search</h3>
      <input value={query} onChange={(e) => onChange(e.target.value)} placeholder="Search..." />
      {isPending ? <p>Updating results...</p> : null}
      <ul>
        {visible.slice(0, 10).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

/**
 * startTransition outside component event flow.
 */
export function updateNonUrgent(setter: (value: string) => void, next: string) {
  startTransition(() => setter(next));
}
