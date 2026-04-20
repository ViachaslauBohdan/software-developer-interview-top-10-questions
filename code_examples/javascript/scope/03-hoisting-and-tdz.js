/**
 * Hoisting and TDZ (Temporal Dead Zone)
 */

sayHello(); // function declarations are hoisted
function sayHello() {
  console.log("Hello from hoisted function");
}

console.log("var before declaration:", count); // undefined (var is hoisted)
var count = 3;
console.log("var after declaration:", count); // 3

// `let` and `const` exist in TDZ before declaration.
// Uncomment to see ReferenceError:
// console.log(score);
let score = 99;
console.log("let after declaration:", score);
