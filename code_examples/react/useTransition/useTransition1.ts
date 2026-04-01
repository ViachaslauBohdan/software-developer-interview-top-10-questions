import { useState, useTransition } from "react";

/**
 * Example 1: filter a large list without blocking typing.
 * Benefit: input value updates immediately, expensive filtering is deferred.
 */
export function useDeferredFilter(items: string[]) {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(items);
  const [isPending, startTransition] = useTransition();

  function onQueryChange(nextQuery: string) {
    setQuery(nextQuery); // urgent update

    startTransition(() => {
      // non-urgent update
      setFiltered(items.filter((item) => item.toLowerCase().includes(nextQuery.toLowerCase())));
    });
  }

  return { query, filtered, isPending, onQueryChange };
}
