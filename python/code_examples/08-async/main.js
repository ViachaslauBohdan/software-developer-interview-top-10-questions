function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchValue() {
  await sleep(50);
  return 42;
}

async function main() {
  const a = await fetchValue();
  const results = await Promise.all([fetchValue(), fetchValue()]);
  console.log(a, results);
}

main();
