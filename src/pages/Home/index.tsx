import "./index.css";
import useTopGames from "../../hooks/useTopGame";
import Game from "../../components/Game";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const games = useTopGames();

  if (!games) return <p className="loading-text">{t("home.loading")}</p>;
  return (
    <>
      <h1 className="home-title">{t("home.top-games")}</h1>
      <div className="games-list">
        {games.map((game) => (
          <Game key={game.id} game={game} />
        ))}
      </div>
    </>
  );
}
