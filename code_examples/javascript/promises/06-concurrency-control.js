async function runWithConcurrency(taskFactories, limit = 2) {
  // results keeps final ordering; executing tracks in-flight tasks
  const results = [];
  const executing = new Set();

  for (const taskFactory of taskFactories) {
    const taskPromise = Promise.resolve().then(taskFactory);
    results.push(taskPromise);
    executing.add(taskPromise);

    const clean = () => executing.delete(taskPromise);
    taskPromise.then(clean, clean);

    if (executing.size >= limit) {
      // Wait for one in-flight task before starting another
      await Promise.race(executing);
    }
  }

  return Promise.all(results);
}

const tasks = Array.from({ length: 6 }, (_, i) => () =>
  new Promise((resolve) => {
    const ms = 100 + i * 50;
    setTimeout(() => resolve(`task-${i + 1} in ${ms}ms`), ms);
  })
);

runWithConcurrency(tasks, 2)
  .then((results) => console.log("Bounded concurrency results:", results))
  .catch((error) => console.error("Concurrency error:", error.message));
