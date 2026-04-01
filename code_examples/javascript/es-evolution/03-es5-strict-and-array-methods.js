"use strict";

// ES5 popularized safer and expressive collection APIs
var nums = [1, 2, 3, 4, 5];

var doubled = nums.map(function (n) {
  return n * 2;
});

var even = nums.filter(function (n) {
  return n % 2 === 0;
});

var sum = nums.reduce(function (acc, n) {
  return acc + n;
}, 0);

// Object.create for prototype chaining
var baseUser = { canRead: true };
var admin = Object.create(baseUser);
admin.canDelete = true;

console.log({ doubled: doubled, even: even, sum: sum, admin: admin.canDelete && admin.canRead });
