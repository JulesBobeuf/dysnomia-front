import "./index.css";
import useTopGamesListe from "../../hooks/useTopGameList";
import Game from "../../components/Game";
import { usePage } from "../../contexts/NumberPage";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function TopGameList() {
  const { t } = useTranslation();
  const { pageNumber, setPageNumber } = usePage();
  const [searchTerm, setSearchTerm] = useState("");

  const games = useTopGamesListe(pageNumber, searchTerm);

  if (!games) return <p>{t("top-game-list.loading")}</p>;

  const handleText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setSearchTerm(text);
  };

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

      <input
        type="text"
        placeholder={t("top-game-list.search-placeholder")}
        value={searchTerm}
        onChange={handleText}
        className="search-input"
      />

      <div className="games-list">
        {games.length > 0 ? (
          games.map((game) => <Game key={game.id} game={game} />)
        ) : (
          <p>{t("top-game-list.no-results")}</p>
        )}
      </div>

      <div className="pagination-controls bottom">
        <button onClick={handlePrev} disabled={pageNumber === "1"}>
          ◀ {t("top-game-list.previous")}
        </button>
        <button onClick={handleNext}>{t("top-game-list.next")} ▶</button>
      </div>
    </div>
  );
}
