import { Game } from "../model/game";
const BASE_URL = import.meta.env.VITE_BASE_PATH_API

export default async function getTopGame(): Promise<Game[]> {
  const res = await fetch(`${BASE_URL}/api/Games/top`);
  const data = await res.json();
  return data;
}
