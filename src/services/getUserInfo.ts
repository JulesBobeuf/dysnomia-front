import { Game } from "../model/game";
const BASE_URL = import.meta.env.VITE_BASE_PATH_API

export default async function getUserInfo(): Promise<{ name: string; favorites: Game[] }> {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      throw new Error("No token found");
    }
  
    const res = await fetch(`${BASE_URL}/api/Users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  
    if (!res.ok) {
      throw new Error("Failed to fetch user info");
    }
  
    const data = await res.json();
    return data;
  }