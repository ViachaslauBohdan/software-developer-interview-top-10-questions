// ESM: JSON and Math are global; Node adds node:fs, node:path, etc.
const DATA = { ok: true };

function main() {
  console.log(JSON.stringify(DATA), Math.sqrt(16));
}

main();
