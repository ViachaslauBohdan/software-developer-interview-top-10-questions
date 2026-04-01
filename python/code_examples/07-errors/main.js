function mayFail(x) {
  if (x < 0) {
    throw new Error("negative");
  }
  return x * 2;
}

function main() {
  try {
    console.log(mayFail(3));
    console.log(mayFail(-1));
  } catch (e) {
    console.log("caught:", e.message);
  } finally {
    console.log("cleanup");
  }
}

main();
