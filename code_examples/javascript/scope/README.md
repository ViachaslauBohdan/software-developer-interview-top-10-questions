# JavaScript Scope - interview examples

This folder covers the most common JavaScript scope topics with runnable examples and inline explanations.

## Files

1. `01-global-vs-function-scope.js`
- Difference between global scope and function scope.
- Why inner scope can read outer variables.

2. `02-block-scope-let-const-var.js`
- `let` / `const` are block-scoped.
- `var` ignores block scope (except function boundaries).

3. `03-hoisting-and-tdz.js`
- Function declaration hoisting.
- `var` hoisting to `undefined`.
- Temporal Dead Zone (TDZ) for `let` / `const`.

4. `04-lexical-scope-and-closures.js`
- Lexical scope is decided where code is written.
- Closures keep access to outer variables after the outer function returns.

5. `05-shadowing-and-illegal-shadowing.js`
- Variable shadowing (`inner` hides `outer`).
- Illegal shadowing with `let`/`const` vs `var`.

6. `06-module-scope-and-private-state.js`
- Top-level variables in a module are module-scoped (not global).
- Encapsulation pattern with closures.

## How to run

```bash
node 01-global-vs-function-scope.js
node 02-block-scope-let-const-var.js
node 03-hoisting-and-tdz.js
node 04-lexical-scope-and-closures.js
node 05-shadowing-and-illegal-shadowing.js
node 06-module-scope-and-private-state.js
```
