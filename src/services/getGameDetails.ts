import { Game } from "../model/game";
import { Company } from "../model/company";

const BASE_URL = import.meta.env.VITE_BASE_PATH_API;

export default async function getCoverGame(id: number): Promise<Game> {
  const token = localStorage.getItem("auth_token");

  const res = await fetch(`${BASE_URL}/api/Games/${id}`, {
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

  const data: Game = await res.json();

  const companyIds = data.involvedCompanies?.ids || [];
  const companyFetches = companyIds.map(async (companyId) => {
    const companyRes = await fetch(`https://m1.dysnomia.studio/api/Companies/${companyId}`, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });

    if (!companyRes.ok) {
      console.warn(`Failed to fetch company with id ${companyId}`);
      return null;
    }

    const company: Company = await companyRes.json();
    return company;
  });

  const fetchedCompanies = await Promise.all(companyFetches);
  data.companies = fetchedCompanies.filter((company): company is Company => company !== null);

  return data;
}
