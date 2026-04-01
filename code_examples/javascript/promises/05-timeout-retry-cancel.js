function withTimeout(promise, ms) {
  // Race actual work against timeout guard
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error(`Timeout after ${ms}ms`)), ms)
    ),
  ]);
}

async function retry(fn, retries = 3, delayMs = 150) {
  let lastError;
  for (let attempt = 1; attempt <= retries; attempt += 1) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      if (attempt < retries) {
        // Simple linear/exponential-ish backoff via attempt multiplier
        await new Promise((r) => setTimeout(r, delayMs * attempt));
      }
    }
  }
  throw lastError;
}

function fakeFetchWithAbort(signal) {
  return new Promise((resolve, reject) => {
    const id = setTimeout(() => resolve("Fetched data"), 500);
    signal.addEventListener("abort", () => {
      // Abort pattern: clear in-flight timer/request and reject
      clearTimeout(id);
      reject(new Error("Request aborted"));
    });
  });
}

async function demo() {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), 200);

  try {
    const data = await withTimeout(
      retry(() => fakeFetchWithAbort(controller.signal), 2, 100),
      1000
    );
    console.log(data);
  } catch (error) {
    console.error("Operational pattern error:", error.message);
  }
}

demo();
