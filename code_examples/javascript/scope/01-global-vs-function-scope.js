/**
 * Global vs Function Scope
 */

const appName = "Interview Bank"; // global/module scope

function printAppInfo() {
  const version = "1.0.0"; // function scope
  console.log("Inside function:", appName, version);
}

printAppInfo();

// `version` is not visible here (outside function scope).
// Uncomment to see: ReferenceError
// console.log(version);
