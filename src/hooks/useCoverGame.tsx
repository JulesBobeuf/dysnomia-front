import { useEffect, useState } from "react";
import getCoverGame from "../services/getCoverGame";

export default function useTopGames(id : number) {
  const [cover, setCover] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCoverGame(id);
      setCover(data);
    };

    fetchData();
  }, []);

  return cover;
}