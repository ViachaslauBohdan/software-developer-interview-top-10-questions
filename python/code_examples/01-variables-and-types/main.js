// JavaScript: let/const (modern); undefined = uninitialized, null = intentional absence
const name = "Ada";
let count = 42;
const pi = 3.14;
let missing = null; // intentional "no object"
let unset; // undefined

function main() {
  console.log(name, count, pi, missing, unset);
}

main();
