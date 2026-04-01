import { startTransition } from "react";

type StoreUpdater<T> = (next: T) => void;

/**
 * Example 2: startTransition outside component hooks.
 * Benefit: useful in utility/store layers to keep updates non-urgent.
 */
export function updateStoreNonUrgent<T>(setStore: StoreUpdater<T>, next: T) {
  startTransition(() => {
    setStore(next);
  });
}
