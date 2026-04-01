# useOptimistic

## 1) What problem hook resolves

`useOptimistic` lets UI update immediately before server confirmation, so users do not wait for network round-trips to see changes.

## 2) Outcomes, Benefits

- Faster perceived performance and more responsive interactions.
- Better UX for likes, comments, and form submissions.
- Supports rollback strategy when server request fails.

## 3) Code examples

### Example A - optimistic like with rollback
```ts
const [likes, addOptimisticLike] = useOptimistic(
  initialLikes,
  (current, delta: number) => current + delta
);

addOptimisticLike(1);
try {
  await saveLike();
} catch {
  addOptimisticLike(-1);
}
```

### Example B - optimistic list insert
```ts
const [comments, addOptimisticComment] = useOptimistic(
  initialComments,
  (currentComments, text: string) => [
    ...currentComments,
    { id: "temp-id", text, pending: true },
  ]
);
```

### Example C - hook wrapper API
```ts
const likeNow = () => addOptimisticLike(1);
const rollbackLike = () => addOptimisticLike(-1);
return { likes, likeNow, rollbackLike };
```
