/**
 * Runtime `prop in obj` — narrows unions / object shapes (not the same as type-level `in`).
 */

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number };

function area(s: Shape): number {
  if ("radius" in s) {
    return Math.PI * s.radius ** 2;
  }
  return s.size ** 2;
}

console.log("area circle:", area({ kind: "circle", radius: 2 }));
console.log("area square:", area({ kind: "square", size: 3 }));
