/**
 * Module scope and private state
 * In Node.js modules, top-level variables are module-local, not global.
 */

const moduleSecret = "only this file can read me";

function createBankAccount(initialBalance) {
  let balance = initialBalance; // private via closure

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    getBalance() {
      return balance;
    },
  };
}

const account = createBankAccount(100);
console.log(account.getBalance()); // 100
console.log(account.deposit(25)); // 125
console.log(moduleSecret); // visible inside this module only
