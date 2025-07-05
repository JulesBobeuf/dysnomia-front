import { useEffect, useState } from "react";
import getUserInfo from "../services/getUserInfo";
import { Game } from "../model/game";

export default function useUserFavorites() {
  const [profile, setProfile] = useState<Game[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserInfo();
      setProfile(data.favorites);
    };

    fetchData();
  }, []);

  return profile;
}