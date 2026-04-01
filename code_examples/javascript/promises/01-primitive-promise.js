function primitivePromiseExample(shouldFail) {
  // Primitive Promise construction:
  // - call resolve(value) for success
  // - call reject(error) for failure
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Something failed"));
      } else {
        resolve("Success value");
      }
    }, 300);
  });
}

primitivePromiseExample(false)
  // then: runs on success
  .then((value) => console.log("Resolved:", value))
  // catch: runs on failure
  .catch((error) => console.error("Rejected:", error.message));
