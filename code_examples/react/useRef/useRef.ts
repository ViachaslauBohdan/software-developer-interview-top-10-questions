import { useEffect, useRef } from "react";

export function useInputFocus() {
  /**
   * useRef keeps a stable reference to the DOM node between renders.
   * Benefit: interact with DOM (focus) without extra state/re-renders.
   */
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return { inputRef };
}
