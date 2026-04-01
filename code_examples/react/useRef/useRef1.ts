import { useRef } from "react";

/**
 * Example 1: store interval id in ref.
 * Benefit: mutable value persists without causing re-renders.
 */
export function usePollingTimer() {
  const timerRef = useRef<number | null>(null);

  const start = (tick: () => void) => {
    if (timerRef.current !== null) return;
    timerRef.current = window.setInterval(tick, 1000);
  };

  const stop = () => {
    if (timerRef.current === null) return;
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  return { start, stop, timerRef };
}
