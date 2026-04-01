// ES2016: exponent operator + includes
const squared = 3 ** 2;
const hasBlue = ["red", "blue", "green"].includes("blue");

// ES2017: async/await
function fetchUser() {
  return Promise.resolve({ id: 7, name: "Mia" });
}

// ES2018: object rest/spread
async function run() {
  const user = await fetchUser();
  const { id, ...rest } = user;
  const extended = { id, ...rest, online: true };
  console.log({ squared, hasBlue, extended });
}

run().catch((e) => console.error(e.message));
