const nums = [1, 2, 3, 4];

const squares = nums.filter((n) => n % 2 === 0).map((n) => n * n);

let total = 0;
for (const n of nums) {
  total += n;
}

function main() {
  console.log("squares(even):", squares, "total:", total);
}

main();
