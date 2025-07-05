import './styles.css';
import { useTranslation } from "react-i18next";
import View from "./View";

export default function Footer() {
  const { t } = useTranslation();

  return <View t={t} />;
}
