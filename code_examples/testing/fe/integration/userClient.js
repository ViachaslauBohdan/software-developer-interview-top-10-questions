/**
 * Thin client — integration tests check it against a mocked HTTP layer.
 */
export async function fetchUserName(baseUrl, userId) {
  const res = await fetch(`${baseUrl}/users/${userId}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  return data.name;
}
