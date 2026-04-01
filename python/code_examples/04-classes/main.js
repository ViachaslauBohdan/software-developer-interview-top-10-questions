class Greeter {
  constructor(name) {
    this.name = name;
  }
  hello() {
    return `Hello, ${this.name}`;
  }
}

class Admin extends Greeter {
  hello() {
    return `${super.hello()} (admin)`;
  }
}

function main() {
  const g = new Admin("Ada");
  console.log(g.hello());
}

main();
