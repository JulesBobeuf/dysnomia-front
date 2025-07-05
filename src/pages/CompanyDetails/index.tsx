import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useCompanyDetails from "../../hooks/useCompanyDetails";
import "./style.css";

export default function CompanyDetail() {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const numericId = Number(id);

  const company = useCompanyDetails(numericId);

  if (!company) return <p className="company-loading">{t("company.loading")}</p>;

  return (
    <div className="company-detail">
      <h1 className="company-name">{company.name}</h1>
      <p className="company-description">{company.description}</p>

      <div className="company-info">
        <p>
          <strong>{t("company.start-date")}:</strong> {company.startDate}
        </p>
        <p>
          <strong>{t("company.created-at")}:</strong> {company.createdAt}
        </p>
        <p>
          <strong>{t("company.updated-at")}:</strong> {company.updatedAt}
        </p>
        <p>
          <strong>{t("company.view-on-igbd")}:</strong>{" "}
          <a className="company-url" href={company.url} target="_blank" rel="noreferrer">
            {company.url}
          </a>
        </p>
      </div>
    </div>
  );
}
