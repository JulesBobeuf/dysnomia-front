import './styles.css';
import { useTranslation } from "react-i18next";
import { useAuth } from "../../contexts/AuthContext";
import i18n from "../../i18n";
import View from "./View";

export default function Header() {
  const { user, logout } = useAuth();
  const { t } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <View
      user={user}
      t={t}
      logout={logout}
      language={i18n.language}
      onLanguageChange={handleLanguageChange}
    />
  );
}
