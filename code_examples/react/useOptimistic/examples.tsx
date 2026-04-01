import { useOptimistic, useState } from "react";

type Todo = { id: string; text: string; pending?: boolean };

/**
 * Comprehensive but minimal:
 * - optimistic insert
 * - rollback on error
 * - pending item marker
 */
export function OptimisticTodoList() {
  const [serverTodos, setServerTodos] = useState<Todo[]>([
    { id: "1", text: "Learn hooks" },
  ]);

  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    serverTodos,
    (current, text: string) => [
      ...current,
      { id: `temp-${Date.now()}`, text, pending: true },
    ]
  );

  const [text, setText] = useState("");

  async function saveTodoToServer(nextText: string) {
    // Simulated API call. Replace with real request.
    await new Promise((r) => setTimeout(r, 400));
    if (nextText.toLowerCase().includes("fail")) throw new Error("save failed");
    setServerTodos((prev) => [...prev, { id: String(prev.length + 1), text: nextText }]);
  }

  async function onAdd() {
    if (!text.trim()) return;
    const value = text.trim();
    setText("");
    addOptimisticTodo(value); // instant UI feedback
    try {
      await saveTodoToServer(value);
    } catch {
      // rollback by syncing optimistic base state from server source
      setServerTodos((prev) => [...prev]);
    }
  }

  return (
    <section>
      <h3>Optimistic Todo List</h3>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type todo..." />
      <button onClick={onAdd}>Add</button>
      <ul>
        {optimisticTodos.map((todo) => (
          <li key={todo.id}>
            {todo.text} {todo.pending ? "(saving...)" : ""}
          </li>
        ))}
      </ul>
    </section>
  );
}
