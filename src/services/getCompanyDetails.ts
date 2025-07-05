import { Company } from "../model/company";
const BASE_URL = import.meta.env.VITE_BASE_PATH_API

export default async function getCompanyDetails(id: number): Promise<Company> {
    const token = localStorage.getItem("auth_token");

    const res = await fetch(`${BASE_URL}/api/Companies/${id}`, {
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

    const company: Company = await res.json();
    return company;
  }