// === strict equality (no coercion); == coerces types
// truthy/falsy: "", 0, null, undefined, NaN are falsy

function main() {
  console.log(Boolean([]), Boolean([1])); // true true (empty array is truthy!)
  console.log(1 == true, 1 === true); // true false
  console.log("" == false); // true (coercion)
}

main();
