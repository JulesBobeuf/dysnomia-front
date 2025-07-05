import { Company } from "../../model/company";
import View from "./View";
import './styles.css';

interface CompanyCardProps {
  company: Company;
}

export default function CompanyCard({ company }: CompanyCardProps) {
  return <View company={company} />;
}
