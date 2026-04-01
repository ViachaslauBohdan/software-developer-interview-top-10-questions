import { useEffect, useRef, useState } from "react";

/**
 * Comprehensive but minimal:
 * - DOM ref for focus
 * - mutable ref for timer id
 * - previous value tracking
 */
export function RefPatternsDemo() {
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<number | null>(null);
  const [count, setCount] = useState(0);
  const prevCountRef = useRef<number>(count);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  function focusInput() {
    inputRef.current?.focus();
  }

  function startTimer() {
    if (timerRef.current !== null) return;
    timerRef.current = window.setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  }

  function stopTimer() {
    if (timerRef.current === null) return;
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  return (
    <section>
      <h3>useRef Patterns</h3>
      <input ref={inputRef} placeholder="Focus me" />
      <button onClick={focusInput}>Focus Input</button>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
      <p>Current: {count}</p>
      <p>Previous: {prevCountRef.current}</p>
    </section>
  );
}
