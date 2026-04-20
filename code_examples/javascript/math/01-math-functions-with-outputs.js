/**
 * JavaScript Math: purpose + example + output
 * Note: floating point values are approximate by nature.
 */

console.log("=== CONSTANTS ===");
console.log("Math.PI (circle ratio):", Math.PI); // 3.141592653589793
console.log("Math.E (natural base):", Math.E); // 2.718281828459045
console.log("Math.SQRT2:", Math.SQRT2); // 1.4142135623730951
console.log("Math.SQRT1_2:", Math.SQRT1_2); // 0.7071067811865476
console.log("Math.LN2:", Math.LN2); // 0.6931471805599453
console.log("Math.LN10:", Math.LN10); // 2.302585092994046
console.log("Math.LOG2E:", Math.LOG2E); // 1.4426950408889634
console.log("Math.LOG10E:", Math.LOG10E); // 0.4342944819032518

console.log("\n=== ROUNDING ===");
console.log("Math.floor(4.9) (down):", Math.floor(4.9)); // 4
console.log("Math.ceil(4.1) (up):", Math.ceil(4.1)); // 5
console.log("Math.round(4.5) (nearest):", Math.round(4.5)); // 5
console.log("Math.trunc(4.9) (remove decimals):", Math.trunc(4.9)); // 4

console.log("\n=== BASIC NUMERIC OPS ===");
console.log("Math.abs(-7) (distance from 0):", Math.abs(-7)); // 7
console.log("Math.min(4, 8, -1):", Math.min(4, 8, -1)); // -1
console.log("Math.max(4, 8, -1):", Math.max(4, 8, -1)); // 8
console.log("Math.pow(2, 5) (2^5):", Math.pow(2, 5)); // 32
console.log("Math.sqrt(81):", Math.sqrt(81)); // 9
console.log("Math.cbrt(27):", Math.cbrt(27)); // 3
console.log("Math.hypot(3, 4) (sqrt(3^2 + 4^2)):", Math.hypot(3, 4)); // 5
console.log("Math.sign(-42) (number sign):", Math.sign(-42)); // -1

console.log("\n=== RANDOM ===");
const rand = Math.random(); // [0, 1)
console.log("Math.random() (0 <= n < 1):", rand);
console.log("Random int 1..10:", Math.floor(Math.random() * 10) + 1);

console.log("\n=== TRIGONOMETRY (radians) ===");
console.log("Math.sin(Math.PI / 2):", Math.sin(Math.PI / 2)); // 1
console.log("Math.cos(0):", Math.cos(0)); // 1
console.log("Math.tan(Math.PI / 4):", Math.tan(Math.PI / 4)); // ~1
console.log("Math.asin(1):", Math.asin(1)); // ~1.5707963267948966
console.log("Math.acos(1):", Math.acos(1)); // 0
console.log("Math.atan(1):", Math.atan(1)); // ~0.7853981633974483
console.log("Math.atan2(1, 1) (angle of y=1,x=1):", Math.atan2(1, 1)); // ~0.785...

console.log("\n=== EXPONENTIAL + LOGS ===");
console.log("Math.exp(1) (e^1):", Math.exp(1)); // 2.718...
console.log("Math.expm1(1) (e^1 - 1):", Math.expm1(1)); // 1.718...
console.log("Math.log(Math.E) (natural log):", Math.log(Math.E)); // 1
console.log("Math.log10(1000):", Math.log10(1000)); // 3
console.log("Math.log2(8):", Math.log2(8)); // 3
console.log("Math.log1p(1) (ln(1 + x)):", Math.log1p(1)); // ln(2)

console.log("\n=== HYPERBOLIC ===");
console.log("Math.sinh(0):", Math.sinh(0)); // 0
console.log("Math.cosh(0):", Math.cosh(0)); // 1
console.log("Math.tanh(0):", Math.tanh(0)); // 0
console.log("Math.asinh(1):", Math.asinh(1)); // ~0.881...
console.log("Math.acosh(2):", Math.acosh(2)); // ~1.316...
console.log("Math.atanh(0.5):", Math.atanh(0.5)); // ~0.549...

console.log("\n=== BIT / FLOAT HELPERS ===");
console.log("Math.imul(0xffffffff, 5) (32-bit multiply):", Math.imul(0xffffffff, 5)); // -5
console.log("Math.clz32(1) (leading zero bits):", Math.clz32(1)); // 31
console.log("Math.fround(1.337) (float32 rounding):", Math.fround(1.337)); // ~1.3370000123977661
