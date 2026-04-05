/**
 * `never` in types: intersection with `never` collapses to `never` (nothing satisfies it).
 */

type NoWay = string & never; // never

const impossible = null as unknown as NoWay;

console.log("NoWay (never):", impossible);
