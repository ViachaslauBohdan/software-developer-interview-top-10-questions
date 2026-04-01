// Latest-era style: immutable array updates with copy-by-change methods
const scores = [30, 10, 20];

// ES2023: toSorted / toReversed / with
const sorted = scores.toSorted((a, b) => a - b); // does not mutate original
const reversed = scores.toReversed(); // also non-mutating
const patched = scores.with(1, 99); // replace index immutably

// Practical modern pattern: immutable updates + null-safe access
const state = {
  users: [{ id: 1, profile: { name: "Eva" } }],
};

const firstUserName = state.users?.[0]?.profile?.name ?? "Unknown";

console.log({ scores, sorted, reversed, patched, firstUserName });
