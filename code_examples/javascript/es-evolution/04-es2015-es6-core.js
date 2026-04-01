// ES2015 (ES6): major modernization
const user = { id: 1, name: "Alex", role: "engineer" };
const { name, role } = user;

const greet = (n) => `Hello, ${n}`;

const tags = ["js", "es6"];
const meta = { active: true };
const profile = { ...user, tags, ...meta };

class Counter {
  #value = 0;
  inc() {
    this.#value += 1;
    return this.#value;
  }
}

const c = new Counter();
console.log(greet(name), role, profile.active, c.inc(), c.inc());
