import { useEffect, useRef } from "react";

/**
 * Example 2: keep previous value in ref.
 * Benefit: compare current vs previous without adding extra render state.
 */
export function usePreviousValue<T>(value: T) {
  const prevRef = useRef<T | undefined>(undefined);

  useEffect(() => {
    prevRef.current = value;
  }, [value]);

  return prevRef.current;
}
