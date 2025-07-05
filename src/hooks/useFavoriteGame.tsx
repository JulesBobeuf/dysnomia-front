// src/hooks/useFavoriteGame.ts
import getFavoriteGame from "../services/getFavoriteGame";

export default function useFavoriteGame() {
  const toggleFavorite = async (id: number, add: boolean) => {
    try {
      await getFavoriteGame(id, add);
    } catch (error) {
      console.error("Failed to update favorite:", error);
    }
  };

  return toggleFavorite;
}
