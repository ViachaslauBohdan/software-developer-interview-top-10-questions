/**
 * Valid Anagram
 * Time: O(n), Space: O(1) for fixed alphabet / O(n) generic
 */
function isAnagram(a, b) {
  if (a.length !== b.length) return false;

  const freq = new Map();
  for (const ch of a) freq.set(ch, (freq.get(ch) || 0) + 1);
  for (const ch of b) {
    if (!freq.has(ch)) return false;
    const next = freq.get(ch) - 1;
    if (next === 0) freq.delete(ch);
    else freq.set(ch, next);
  }
  return freq.size === 0;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("rat", "car")); // false
