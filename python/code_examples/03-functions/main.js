function greet(name, times = 1) {
  return Array(times).fill(`Hello, ${name}!`).join(" ").trim();
}

function sumAll(...args) {
  return args.reduce((a, b) => a + b, 0);
}

function merge(kwargs) {
  return { ...kwargs };
}

function main() {
  console.log(greet("Ada"));
  console.log(sumAll(1, 2, 3));
  console.log(merge({ a: "1", b: "2" }));
}

main();
