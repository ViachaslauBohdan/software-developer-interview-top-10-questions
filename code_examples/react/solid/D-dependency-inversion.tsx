import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type User = { id: string; name: string };

// Abstraction: anything that can load a user (mock, REST, GraphQL).
type UserRepository = {
  getById: (id: string) => Promise<User>;
};

const UserRepoContext = createContext<UserRepository | null>(null);

function useUserRepository() {
  const repo = useContext(UserRepoContext);
  if (!repo) throw new Error("UserRepoContext missing");
  return repo;
}

// High-level component depends on UserRepository, not on fetch/axios directly.
function UserName({ id }: { id: string }) {
  const repo = useUserRepository();
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    let active = true;
    repo.getById(id).then((u) => {
      if (active) setUser(u);
    });
    return () => {
      active = false;
    };
  }, [id, repo]);
  return <span>{user?.name ?? "…"}</span>;
}

// Concrete implementation — swappable at the app root or in tests.
const httpUserRepository: UserRepository = {
  getById: async (id) => {
    const res = await fetch(`/api/users/${id}`);
    if (!res.ok) throw new Error("failed");
    return res.json();
  },
};

export function DependencyInversionDemo() {
  return (
    <UserRepoContext.Provider value={httpUserRepository}>
      <UserName id="1" />
    </UserRepoContext.Provider>
  );
}
