import { useEffect, useState } from "react";
import getCompanyDetails from "../services/getCompanyDetails";
import { Company } from "../model/company";

export default function useCompanyDetails(id : number) {
  const [company, setCompany] = useState<Company | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCompanyDetails(id);
      setCompany(data);
    };

    fetchData();
  }, []);

  return company;
}