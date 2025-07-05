import { Game } from "../model/game";

export default async function getSearchGame(nbPage: string, terme: string): Promise<Game[]> {
    console.log("getSearchGame")
    console.log(nbPage)
    console.log(terme)
    const token = localStorage.getItem("auth_token");
    const res = await fetch(
        `${import.meta.env.VITE_BASE_PATH_API}/api/Games/top?term=${terme}&pageSize=25&page=${nbPage}`, {
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