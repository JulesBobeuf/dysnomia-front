import { Link } from "react-router-dom";
import { Company } from "../../model/company";

interface Props {
  company: Company;
}

export default function View({ company }: Props) {
  return (
    <div className="company">
      <Link to={`/company/${company.id}`} className="company-card">
        <h3 className="company-name">{company.name}</h3>
        {company.description && (
          <p className="company-description">{company.description}</p>
        )}
      </Link>
    </div>
  );
}
