import "./index.css";
import useTopGamesListe from "../../hooks/useTopGameList";
import Game from "../../components/Game";
import { usePage } from "../../contexts/NumberPage";
import { useTranslation } from "react-i18next";

export default function TopGameList() {
  const { t } = useTranslation();
  const { pageNumber, setPageNumber } = usePage();
  const games = useTopGamesListe(pageNumber, null);

  if (!games) return <p className="loading-text">{t("home.loading")}</p>;

  const handleNext = () => {
    const next = String(Number(pageNumber) + 1);
    setPageNumber(next);
  };

  const handlePrev = () => {
    const prev = Math.max(1, Number(pageNumber) - 1);
    setPageNumber(String(prev));
  };

  return (
    <div className="top-game-list">
      <h1 className="home-title">
        {t("top-game-list.title", { page: pageNumber })}
      </h1>

      <div className="games-list">
        {games.map((game) => (
          <Game key={game.id} game={game} />
        ))}
      </div>

      <div className="pagination-controls bottom">
        <button onClick={handlePrev} disabled={pageNumber === "1"}>
          ◀ {t("top-game-list.previous")}
        </button>
        <button onClick={handleNext}>
          {t("top-game-list.next")} ▶
        </button>
      </div>
    </div>
  );
}
