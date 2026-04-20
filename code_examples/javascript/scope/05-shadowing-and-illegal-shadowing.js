/**
 * Shadowing:
 * inner variable with same name hides outer variable.
 */

const role = "user";
{
  const role = "admin"; // shadows outer `role`
  console.log("Inside block:", role); // admin
}
console.log("Outside block:", role); // user

// Illegal shadowing example (real SyntaxError):
// `var` is function-scoped, so this `var city` would collide with outer `let city`.
// Keep commented because it fails parsing.
//
// function bad() {
//   let city = "Warsaw";
//   {
//     var city = "Krakow"; // SyntaxError: Identifier 'city' has already been declared
//   }
// }
