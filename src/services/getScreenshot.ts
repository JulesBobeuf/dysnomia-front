import { Screenshot } from "../model/screenshot";
const BASE_URL = import.meta.env.VITE_BASE_PATH_API

export default async function getCoverGame(id: number): Promise<Screenshot[]> {
    const token = localStorage.getItem("auth_token");
    const res = await fetch(`${BASE_URL}/api/Games/screenshots/${id}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
    if (!res.ok) {
        throw new Error(`Failed to fetch game with id ${id}`);
    }

    if (res.status === 204) {
        throw new Error(`No content for game with id ${id}`);
    }
    
    const data = await res.json();
    return data;
}