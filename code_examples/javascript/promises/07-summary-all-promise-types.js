/**
 * Summary file: one place to review major Promise styles.
 * Covers:
 * - primitive Promise creation
 * - then/catch/finally chaining
 * - async/await
 * - all combinators (all/allSettled/race/any)
 */

function primitive(shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject(new Error("primitive failed"));
      else resolve("primitive ok");
    }, 80);
  });
}

function chainDemo() {
  return Promise.resolve("step-1")
    .then((s) => `${s} -> step-2`)
    .then((s) => `${s} -> step-3`)
    .catch((e) => `chain fallback: ${e.message}`)
    .finally(() => console.log("chain finally"));
}

const sleep = (ms, value, fail = false) =>
  new Promise((resolve, reject) =>
    setTimeout(() => (fail ? reject(new Error(String(value))) : resolve(value)), ms)
  );

async function combinatorDemo() {
  const all = await Promise.all([sleep(40, "A"), sleep(50, "B")]);
  const allSettled = await Promise.allSettled([sleep(20, "ok"), sleep(25, "bad", true)]);
  const race = await Promise.race([sleep(70, "slow"), sleep(15, "fast")]);
  const any = await Promise.any([sleep(10, "x", true), sleep(30, "winner"), sleep(15, "y", true)]);
  return { all, allSettled, race, any };
}

async function runSummary() {
  try {
    // primitive + async/await
    const p = await primitive(false);

    // then/catch/finally chain
    const chain = await chainDemo();

    // combinators
    const combinators = await combinatorDemo();

    console.log("SUMMARY", { p, chain, combinators });
  } catch (error) {
    console.error("summary failed:", error.message);
  }
}

runSummary();
