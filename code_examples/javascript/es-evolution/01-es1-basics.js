// ES1-style basics (historical foundation)
var total = 0;
for (var i = 1; i <= 5; i++) {
  total += i;
}

function greet(name) {
  return "Hello, " + name;
}

var user = { name: "Sam" };
user.role = "dev";

console.log(greet(user.name), "sum:", total);
