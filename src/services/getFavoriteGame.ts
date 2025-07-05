// src/services/getFavoriteGame.ts
export default async function getFavoriteGame(id: number, add: boolean) {
  const token = localStorage.getItem("auth_token");
  const action = add ? "add" : "remove";
  const methode = add ? "POST" : "DELETE"

  const res = await fetch(
    `${import.meta.env.VITE_BASE_PATH_API}/api/Users/favorites/${action}/${id}`,
    {
      method: `${methode}`,
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to ${action} favorite game with id ${id}`);
  }

  return await res.json();
}
