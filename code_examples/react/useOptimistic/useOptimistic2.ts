import { useOptimistic } from "react";

type CommentItem = {
  id: string;
  text: string;
  pending?: boolean;
};

/**
 * useOptimistic for list updates (comments/messages/tasks).
 * Benefit: new item appears immediately, then server confirms later.
 */
export function useOptimisticComments(initialComments: CommentItem[]) {
  const [comments, addOptimisticComment] = useOptimistic(
    initialComments,
    (currentComments, text: string) => [
      ...currentComments,
      { id: "temp-id", text, pending: true },
    ]
  );

  // Optimistic insert: instant UX instead of waiting for network.
  const addNow = (text: string) => addOptimisticComment(text);

  return { comments, addNow };
}
