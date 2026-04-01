// ES3-era constructor + prototype pattern (before class syntax)
function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  return "Hi, I am " + this.name;
};

// Defensive check pattern common in old code
function getConfig(config) {
  config = config || {};
  return {
    retries: config.retries || 3,
    timeout: config.timeout || 1000,
  };
}

var p = new Person("Nina");
console.log(p.sayHi(), getConfig({ timeout: 500 }));
