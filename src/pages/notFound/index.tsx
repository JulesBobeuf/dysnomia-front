// src/pages/NotFound.tsx
import { useTranslation } from "react-i18next";
import "./style.css";

export default function NotFound() {
    const { t } = useTranslation()

  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-message">{t("404.content")}</p>
    </div>
  );
}
