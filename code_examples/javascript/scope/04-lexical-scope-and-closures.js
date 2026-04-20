/**
 * Lexical scope + closure
 * Inner functions remember variables from where they were defined.
 */

function makeCounter(start) {
  let value = start; // outer variable for closure

  return function increment() {
    value += 1;
    return value;
  };
}

const counterA = makeCounter(0);
const counterB = makeCounter(10);

console.log(counterA()); // 1
console.log(counterA()); // 2
console.log(counterB()); // 11 (separate closed-over state)
