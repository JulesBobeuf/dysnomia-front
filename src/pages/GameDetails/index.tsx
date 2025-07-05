// src/pages/GameDetails/index.tsx
import { Link, useParams } from "react-router-dom";
import { Screenshot as ScreenshotType } from "../../model/screenshot";
import useGameDetails from "../../hooks/useGameDetails";
import useScreenshot from "../../hooks/useScreenshot";
import "./style.css";
import CompanyCard from "../../components/CompanyCard";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import useUserFavorites from "../../hooks/useUserProfile";
import useFavoriteGame from "../../hooks/useFavoriteGame";

export default function GameDetails() {
  const [isLiked, setIsLiked] = useState(false);
  const { t } = useTranslation();

  const favorites = useUserFavorites();
  const { id } = useParams<{ id: string }>();
  const numericId = Number(id);
  const toggleFavorite = useFavoriteGame();

  useEffect(() => {
    if (id && favorites) {
      setIsLiked(favorites.some(game => game.id === numericId));
    }
  }, [id, favorites]);

  const handleLike = async () => {
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);
    await toggleFavorite(numericId, newLikedState);
  };

  const game = useGameDetails(numericId);
  const screenshots = useScreenshot(numericId);

  if (!game || !screenshots) return <p className="loading-text">{t("home.loading")}</p>;

  const { name, summary, totalRating, cover, firstReleaseDate, companies } = game;

  return (
    <div className="game-details">
      <Link to="/" className="btn-back">
        {t("game-details.back")}
      </Link>
      <h1>{name}</h1>

      {cover?.value?.url && (
        <img
          src={cover.value.url.replace("t_thumb", "t_cover_big")}
          alt={`${name} cover`}
        />
      )}

      {summary && (
        <p>
          <strong>{t("game-details.summary")}:</strong> {summary}
        </p>
      )}
      {totalRating && (
        <p>
          <strong>{t("game-details.rating")}:</strong> {totalRating.toFixed(1)} / 100
        </p>
      )}
      {firstReleaseDate && (
        <p>
          <strong>{t("game-details.release_date")}:</strong>{" "}
          {new Date(firstReleaseDate).toLocaleDateString()}
        </p>
      )}

    <div
        onClick={handleLike}
        style={{
          fontSize: '2rem',
          cursor: 'pointer',
          color: isLiked ? 'red' : 'inherit',
        }}
      >
        {isLiked ? '❤️' : '🤍'}
      </div>

      <h2>{t("game-details.screenshots")}</h2>
      <div className="screenshots">
        {screenshots.map((screenshot: ScreenshotType) => (
          <img
            key={screenshot.id}
            src={screenshot.url.replace("t_thumb", "t_screenshot_big")}
            alt={`Screenshot ${screenshot.id}`}
            width={screenshot.width}
            height={screenshot.height}
          />
        ))}
      </div>

      {companies && companies.length > 0 && (
        <div className="companies">
          <h2>Companies</h2>
          {companies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      )}
    </div>
  );
}
