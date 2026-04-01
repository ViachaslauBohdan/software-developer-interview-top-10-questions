// Array, object-as-map, Set
const nums = [1, 2, 3];
const point = Object.freeze([10, 20]); // not a real tuple — arrays are mutable
const user = { id: 1, name: "Ada" };
const unique = new Set([1, 2, 3, 3]);

user.role = "dev";
const role = user.role ?? "guest";

function main() {
  console.log(nums, point, user, [...unique], role);
}

main();
