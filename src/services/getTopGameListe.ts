import { Game } from "../model/game";

export default async function getTopGameListe(nbPage: string, term: string | null): Promise<Game[]> {
    const token = localStorage.getItem("auth_token");
    const res = await fetch(
        `${import.meta.env.VITE_BASE_PATH_API}/api/Games/${term ? `search?term=${term}&` : 'top?'}pageSize=25&page=${nbPage}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
    if (!res.ok) {
        throw new Error(`Failed to fetch game with number page ${nbPage}`);
    }

    if (res.status === 204) {
        throw new Error(`No content for Top game with number page ${nbPage}`);
    }
    
    const data = await res.json();
    return data;
}