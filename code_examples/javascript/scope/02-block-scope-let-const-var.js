/**
 * Block Scope:
 * - `let` and `const` stay inside `{ ... }`
 * - `var` leaks out of blocks (but not out of functions)
 */

if (true) {
  let blockLet = "I am block-scoped";
  const blockConst = "Me too";
  var leakedVar = "I leak outside this block";

  console.log(blockLet);
  console.log(blockConst);
}

console.log(leakedVar); // works (var is not block-scoped)

// Uncomment to see ReferenceError:
// console.log(blockLet);
// console.log(blockConst);
