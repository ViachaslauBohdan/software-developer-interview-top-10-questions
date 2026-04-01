import { useOptimistic } from "react";

/**
 * useOptimistic lets UI update immediately before the server responds.
 * Benefit: users get instant feedback, so the app feels faster.
 */
export function useOptimisticLikes(initialLikes: number) {
  const [likes, addOptimisticLike] = useOptimistic(
    initialLikes,
    (currentLikes, change: number) => currentLikes + change
  );

  // Call this when user clicks "Like".
  // Benefit: optimistic +1 appears instantly.
  const likeNow = () => addOptimisticLike(1);

  // Call this if API request fails.
  // Benefit: rollback keeps UI consistent with server truth.
  const rollbackLike = () => addOptimisticLike(-1);

  return { likes, likeNow, rollbackLike };
}
