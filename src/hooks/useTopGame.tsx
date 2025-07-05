import { useEffect, useState } from "react";
import getTopGame from "../services/getTopGame";
import { Game } from "../model/game";

export default function useTopGames() {
  const [games, setGames] = useState<Game[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTopGame();
      setGames(data);
    };

    fetchData();
  }, []);

  return games;
}