function stepOne() {
  return Promise.resolve("step-1");
}

function stepTwo(prev) {
  return Promise.resolve(`${prev} -> step-2`);
}

function stepThree(prev) {
  return Promise.resolve(`${prev} -> step-3`);
}

stepOne()
  // Each .then gets previous step output and returns next Promise/value
  .then(stepTwo)
  .then(stepThree)
  .then((result) => console.log("Chain result:", result))
  // A single catch handles errors from any previous step
  .catch((error) => console.error("Chain error:", error.message))
  // finally always runs (success or failure)
  .finally(() => console.log("Chain finished"));
