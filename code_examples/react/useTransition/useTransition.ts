import { useTransition } from "react";

export function useSearchTransition() {
  /**
   * useTransition marks updates as non-urgent.
   * Benefit: urgent interactions (typing/clicking) stay responsive
   * while heavier updates can finish in the background.
   */
  const [isPending, startTransition] = useTransition();

  function runDeferredUpdate(applyHeavyUpdate: () => void) {
    // Non-urgent update: React can prioritize user input first.
    startTransition(() => {
      applyHeavyUpdate();
    });
  }

  return { isPending, runDeferredUpdate };
}
