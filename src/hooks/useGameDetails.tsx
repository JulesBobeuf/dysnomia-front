import { useEffect, useState } from "react";
import getGameDetails from "../services/getGameDetails";
import { Game } from "../model/game";

export default function useGameDetails(id : number) {
  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getGameDetails(id);
      setGame(data);
    };

    fetchData();
  }, []);

  return game;
}