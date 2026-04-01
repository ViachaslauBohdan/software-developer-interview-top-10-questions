import { useOptimistic } from "react";

export function LikeButton({
  initialLikes,
  saveLike,
}: {
  initialLikes: number;
  saveLike: () => Promise<void>;
}) {
  /**
   * useOptimistic lets us show the expected next state immediately,
   * before the server request is finished.
   * Benefit: better perceived performance and snappier UX.
   */
  const [likes, addOptimisticLike] = useOptimistic(
    initialLikes,
    (current, delta: number) => current + delta
  );

  async function onLike() {
    // Optimistic update: user sees +1 instantly.
    addOptimisticLike(1);
    try {
      // Persist to backend.
      await saveLike();
    } catch {
      // Roll back if request fails, keeping UI consistent with server state.
      addOptimisticLike(-1);
    }
  }

  return {
    likes,
    onLike,
  };
}
