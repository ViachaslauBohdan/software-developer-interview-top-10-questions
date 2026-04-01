const sleep = (ms, value, shouldFail = false) =>
  new Promise((resolve, reject) =>
    setTimeout(() => (shouldFail ? reject(new Error(String(value))) : resolve(value)), ms)
  );

async function runCombinators() {
  // Promise.all: fail-fast, all must succeed
  const all = await Promise.all([sleep(100, "A"), sleep(120, "B")]);
  console.log("Promise.all:", all);

  // Promise.allSettled: always resolves with per-promise status
  const allSettled = await Promise.allSettled([
    sleep(80, "ok"),
    sleep(90, "failed", true),
  ]);
  console.log("Promise.allSettled:", allSettled);

  // Promise.race: settles as soon as first promise settles
  const race = await Promise.race([sleep(200, "slow"), sleep(50, "fast")]);
  console.log("Promise.race:", race);

  // Promise.any: first successful result wins (ignores rejections until all fail)
  const any = await Promise.any([
    sleep(20, "x", true),
    sleep(40, "winner"),
    sleep(30, "y", true),
  ]);
  console.log("Promise.any:", any);
}

runCombinators().catch((e) => console.error("Combinator error:", e.message));
