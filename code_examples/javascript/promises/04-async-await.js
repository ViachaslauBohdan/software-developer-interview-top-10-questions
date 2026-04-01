function getUser(id) {
  return Promise.resolve({ id, name: "Alex" });
}

function getOrders(userId) {
  return Promise.resolve([{ id: "o1", userId }, { id: "o2", userId }]);
}

async function loadDashboard(userId) {
  try {
    // await reads asynchronous code in top-to-bottom style
    const user = await getUser(userId);
    const orders = await getOrders(user.id);
    return { user, orders };
  } catch (error) {
    // Re-throw with contextual message for observability
    throw new Error(`Dashboard load failed: ${error.message}`);
  }
}

loadDashboard("u1")
  .then((data) => console.log("Dashboard:", data))
  .catch((error) => console.error(error.message));
