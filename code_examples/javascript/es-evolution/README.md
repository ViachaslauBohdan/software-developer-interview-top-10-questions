# JavaScript ES Evolution (ES1 -> Latest)

This folder gives a practical learning timeline from early JavaScript to modern language features.

## Files and what they teach

1. `01-es1-basics.js`
- ES1-era fundamentals: `var`, functions, loops, mutable objects.

2. `02-es3-patterns.js`
- Pre-modern defensive patterns and constructor/prototype style.

3. `03-es5-strict-and-array-methods.js`
- `"use strict"`, `Object.create`, and core array iteration methods.

4. `04-es2015-es6-core.js`
- `let/const`, arrow functions, template literals, destructuring, classes, modules.

5. `05-es2016-to-es2018.js`
- `includes`, exponent operator, async/await, object rest/spread.

6. `06-es2019-to-es2020.js`
- `flat/flatMap`, optional catch binding, `BigInt`, optional chaining, nullish coalescing.

7. `07-es2021-to-es2022.js`
- logical assignment, numeric separators, `Promise.any`, `at`, class fields, top-level await note.

8. `08-es2023-to-es2024-latest.js`
- copy-by-change array methods (`toSorted`, `toReversed`, `with`) and latest-era patterns.

## Interview framing

When explaining evolution, focus on why features were added:
- readability and safer defaults (`let/const`, strict mode)
- async clarity (`Promise`, `async/await`)
- null safety and ergonomics (`?.`, `??`)
- immutable updates (`toSorted`, `with`) for state-heavy apps
