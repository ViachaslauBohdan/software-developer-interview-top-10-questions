import { useMemo } from "react";

type User = { id: string; name: string; email: string };

// Good: presentational component — only renders a user row (one responsibility).
function UserRow({ user }: { user: User }) {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
    </tr>
  );
}

// Good: pure formatting — one responsibility (display email safely).
function formatEmailForDisplay(email: string) {
  return email.toLowerCase();
}

// Good: hook owns data-fetching concern; UI components stay dumb elsewhere.
function useUserList() {
  const users = useMemo<User[]>(
    () => [
      { id: "1", name: "Ada", email: "Ada@Example.com" },
      { id: "2", name: "Alan", email: "Alan@Example.com" },
    ],
    []
  );
  return { users };
}

// Anti-pattern to avoid: one giant component that fetches, formats, renders table,
// handles pagination, and logs analytics — hard to test and change.

export function UserTableSrpDemo() {
  const { users } = useUserList();
  return (
    <table>
      <tbody>
        {users.map((u) => (
          <UserRow key={u.id} user={{ ...u, email: formatEmailForDisplay(u.email) }} />
        ))}
      </tbody>
    </table>
  );
}
